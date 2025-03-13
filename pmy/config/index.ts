import { DatabaseKey } from '@/types/common';

export const TOKEN = process.env.NEXT_PUBLIC_NOTION_TOKEN;
export const DATABASE_ID: Record<DatabaseKey, string | undefined> = {
  ADC: process.env.NEXT_PUBLIC_NOTION_DATABASE_ADC_ID,
  JDI: process.env.NEXT_PUBLIC_NOTION_DATABASE_JDI_ID,
  LIST: process.env.NEXT_PUBLIC_NOTION_DATABASE_LIST_ID,
};

export const REVALIDATE_LONG_TIME = 3600;
export const REVALIDATE_TIME = 60;

export const CLOUDINARY_URL = process.env.NEXT_CLOUDINARY_URL;
export const CLOUDINARY_UPLOAD_FOLDER = process.env.NEXT_CLOUDINARY_UPLOAD_FOLDER;
