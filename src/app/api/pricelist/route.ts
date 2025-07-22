import { NextResponse } from 'next/server';
import { getSheetData } from '@/lib/sheets';

// Простой in-memory кэш
let cachedData: any = null;
let cacheTimestamp = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 минут

export async function GET() {
  try {
    const now = Date.now();
    
    // Проверяем кэш
    if (cachedData && (now - cacheTimestamp) < CACHE_TTL) {
      return NextResponse.json({ data: cachedData }, { 
        status: 200,
        headers: {
          'Cache-Control': 'public, max-age=300', // 5 минут кэш в браузере
          'X-Cache': 'HIT'
        }
      });
    }

    // Загружаем свежие данные
    const data = await getSheetData();
    
    // Обновляем кэш
    cachedData = data;
    cacheTimestamp = now;
    
    return NextResponse.json({ data }, { 
      status: 200,
      headers: {
        'Cache-Control': 'public, max-age=300',
        'X-Cache': 'MISS'
      }
    });
  } catch (error) {
    console.error('Failed to fetch price list:', error);
    
    // Если есть кэшированные данные, возвращаем их даже если они устарели
    if (cachedData) {
      return NextResponse.json({ data: cachedData }, { 
        status: 200,
        headers: {
          'Cache-Control': 'public, max-age=60', // Короткий кэш для устаревших данных
          'X-Cache': 'STALE',
          'X-Error': 'Fresh data unavailable'
        }
      });
    }
    
    return NextResponse.json({ 
      error: 'Failed to fetch price list',
      data: [] // Возвращаем пустой массив вместо ошибки
    }, { 
      status: 200, // 200 вместо 500 чтобы не ломать клиент
      headers: {
        'Cache-Control': 'no-cache'
      }
    });
  }
} 