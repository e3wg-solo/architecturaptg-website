import { google } from 'googleapis';

export type PriceItem = {
  categoryId: string;
  categoryName: string;
  name: string;
  price: string;
  duration?: string;
};

export async function getSheetData(): Promise<PriceItem[]> {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
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