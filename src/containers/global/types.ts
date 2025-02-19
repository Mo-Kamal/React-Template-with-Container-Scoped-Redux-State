import { translations } from "@/locales/i18n";

export interface GlobalState {
  globalProperty: string;
}

export type TranslationKey = keyof typeof translations;
