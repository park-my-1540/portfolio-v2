import { DatabaseKey } from '@/types/common';

export const TOKEN = process.env.NEXT_PUBLIC_NOTION_TOKEN;
export const DATABASE_ID: Record<DatabaseKey, string | undefined> = {
  ADC: process.env.NEXT_PUBLIC_NOTION_DATABASE_ADC_ID,
  JDI: process.env.NEXT_PUBLIC_NOTION_DATABASE_JDI_ID,
  LIST: process.env.NEXT_PUBLIC_NOTION_DATABASE_LIST_ID,
};
