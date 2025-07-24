import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Простая защита паролем
    const { password } = await request.json();
    
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Неверный пароль' }, 
        { status: 401 }
      );
    }

    // Вызываем API с принудительным обновлением
    const baseUrl = request.nextUrl.origin;
    const response = await fetch(`${baseUrl}/api/pricelist?refresh=true`, {
      cache: 'no-cache'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    return NextResponse.json({
      success: true,
      message: 'Цены успешно обновлены',
      source: data.source,
      timestamp: new Date().toISOString(),
      itemsCount: data.data?.length || 0
    });

  } catch (error) {
    console.error('Admin refresh error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Ошибка при обновлении цен',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 