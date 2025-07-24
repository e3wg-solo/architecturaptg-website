'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RefreshCw, Check, AlertCircle } from 'lucide-react';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string; count?: number } | null>(null);

  const handleUpdatePrices = async () => {
    if (!password.trim()) {
      setResult({ success: false, message: 'Введите пароль' });
      return;
    }

    setIsUpdating(true);
    setResult(null);

    try {
      const response = await fetch('/api/admin/refresh-prices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setResult({
          success: true,
          message: `Цены успешно обновлены! Загружено ${data.itemsCount} позиций.`,
          count: data.itemsCount
        });
      } else {
        setResult({
          success: false,
          message: data.error || 'Ошибка при обновлении цен'
        });
      }
    } catch {
      setResult({
        success: false,
        message: 'Ошибка соединения с сервером'
      });
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Админ панель
          </CardTitle>
          <p className="text-center text-muted-foreground">
            Обновление цен из Google Sheets
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="password">Пароль администратора</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleUpdatePrices();
                }
              }}
            />
          </div>

          <Button
            onClick={handleUpdatePrices}
            disabled={isUpdating || !password.trim()}
            className="w-full"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isUpdating ? 'animate-spin' : ''}`} />
            {isUpdating ? 'Обновление...' : 'Обновить цены'}
          </Button>

          {result && (
            <div className={`p-4 rounded-lg border ${
              result.success 
                ? 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200'
                : 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200'
            }`}>
              <div className="flex items-center gap-2">
                {result.success ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <AlertCircle className="h-4 w-4" />
                )}
                <p className="text-sm font-medium">{result.message}</p>
              </div>
            </div>
          )}

          <div className="text-sm text-muted-foreground space-y-2">
            <p>• После обновления цены станут доступны на сайте</p>
            <p>• Клиенты увидят новые цены при обновлении страницы</p>
            <p>• Данные кэшируются для быстрой загрузки</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 