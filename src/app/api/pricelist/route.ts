import { NextResponse } from 'next/server';
import { getSheetData } from '@/lib/sheets';
import fs from 'fs/promises';
import path from 'path';

const CACHE_FILE_PATH = path.join(process.cwd(), 'cache', 'pricelist.json');
const CACHE_DURATION = 30 * 24 * 60 * 60 * 1000; // 30 дней (практически не истекает)

// Создаем директорию для кэша если не существует
async function ensureCacheDir() {
  try {
    await fs.mkdir(path.dirname(CACHE_FILE_PATH), { recursive: true });
  } catch (error) {
    // Директория уже существует
  }
}

// Загружаем данные из серверного кэша
async function loadFromCache() {
  try {
    const cacheData = await fs.readFile(CACHE_FILE_PATH, 'utf-8');
    const { data, timestamp } = JSON.parse(cacheData);
    const now = Date.now();
    
    // Проверяем актуальность кэша (30 дней)
    if (now - timestamp < CACHE_DURATION) {
      return data;
    }
  } catch (error) {
    console.log('No cached data found');
  }
  return null;
}

// Сохраняем данные в серверный кэш
async function saveToCache(data: any) {
  try {
    await ensureCacheDir();
    const cacheData = {
      data,
      timestamp: Date.now(),
    };
    await fs.writeFile(CACHE_FILE_PATH, JSON.stringify(cacheData), 'utf-8');
    console.log('Data cached successfully');
  } catch (error) {
    console.error('Failed to save cache:', error);
  }
}

// Получаем данные из Google Sheets
async function fetchFreshData() {
  try {
    console.log('Fetching fresh data from Google Sheets...');
    const data = await getSheetData();
    if (data && data.length > 0) {
      await saveToCache(data);
      console.log(`Fetched ${data.length} items from Google Sheets`);
      return data;
    } else {
      console.log('No data received from Google Sheets');
    }
  } catch (error) {
    console.error('Error fetching from Google Sheets:', error);
  }
  return null;
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const forceRefresh = url.searchParams.get('refresh') === 'true';
    
    let data = null;
    
    if (forceRefresh) {
      // Принудительное обновление
      console.log('Force refresh requested');
      data = await fetchFreshData();
    } else {
      // Сначала пробуем кэш
      data = await loadFromCache();
      
      // Если кэш пустой, НЕ получаем свежие данные автоматически
      if (!data) {
        console.log('No cached data found, returning empty result');
      }
    }
    
    // Если нет данных, возвращаем пустой массив
    if (!data) {
      return NextResponse.json({ 
        data: [], 
        source: 'empty',
        message: 'No data available. Use refresh=true to load from source.'
      });
    }
    
    return NextResponse.json({ 
      data, 
      source: forceRefresh ? 'fresh' : 'cache',
      timestamp: Date.now(),
      count: data.length
    });
    
  } catch (error) {
    console.error('API error:', error);
    
    // При ошибке возвращаем пустой массив
    return NextResponse.json({ 
      data: [], 
      source: 'error', 
      error: true,
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 