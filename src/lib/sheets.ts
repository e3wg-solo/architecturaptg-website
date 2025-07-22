import { google } from 'googleapis';

export type PriceItem = {
  categoryId: string;
  categoryName: string;
  name: string;
  price: string;
  duration?: string;
};

export async function getSheetData(): Promise<PriceItem[]> {
  // Обработка приватного ключа для совместимости с разными версиями OpenSSL
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;
  
  if (privateKey) {
    // Убираем лишние пробелы и символы
    privateKey = privateKey.trim();
    
    // Если ключ содержит \n, заменяем их на настоящие переводы строки
    if (privateKey.includes('\\n')) {
      privateKey = privateKey.replace(/\\n/g, '\n');
    }
    
    // Если ключ не содержит переводы строк, добавляем их
    if (!privateKey.includes('\n')) {
      privateKey = privateKey.replace(/-----BEGIN PRIVATE KEY-----/, '-----BEGIN PRIVATE KEY-----\n');
      privateKey = privateKey.replace(/-----END PRIVATE KEY-----/, '\n-----END PRIVATE KEY-----');
    }
    
    // Отладочная информация
    console.log('Private key format check:');
    console.log('- Contains \\n:', privateKey.includes('\\n'));
    console.log('- Contains actual newlines:', privateKey.includes('\n'));
    console.log('- Starts with BEGIN:', privateKey.startsWith('-----BEGIN PRIVATE KEY-----'));
    console.log('- Ends with END:', privateKey.endsWith('-----END PRIVATE KEY-----'));
    console.log('- Key length:', privateKey.length);
  } else {
    console.error('GOOGLE_PRIVATE_KEY is not set');
    throw new Error('GOOGLE_PRIVATE_KEY environment variable is required');
  }

  // Попробуем создать credentials объект
  const credentials = {
    type: 'service_account',
    project_id: process.env.GOOGLE_PROJECT_ID || 'your-project-id',
    private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID || 'key-id',
    private_key: privateKey,
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_CLIENT_ID || 'client-id',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: process.env.GOOGLE_CLIENT_CERT_URL || 'https://www.googleapis.com/robot/v1/metadata/x509/your-service-account%40your-project.iam.gserviceaccount.com'
  };

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: 'Лист1!A2:E',
  });

  const rows = res.data.values || [];
  return rows.map((row) => ({
    categoryId: row[0],
    categoryName: row[1],
    name: row[2],
    price: row[3],
    duration: row[4],
  }));
} 