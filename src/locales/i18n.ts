import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import deTranslation from "./de/translation.json";
import enTranslation from "./en/translation.json";
import frTranslation from "./fr/translation.json";
import { LocalStorageKeys, storage } from "@/storage";

const getLanguageFromLocalStorage = () => {
  return storage.read(LocalStorageKeys.LANG) || "en";
};

const resources = {
  en: {
    translation: enTranslation,
  },
  de: {
    translation: deTranslation,
  },
  fr: {
    translation: frTranslation,
  },
};
export type ConvertedToFunctionsType<T> = {
  [P in keyof T]: T[P] extends string
    ? () => string
    : ConvertedToFunctionsType<T[P]>;
};
export type TranslationResource = typeof enTranslation;
export type LanguageKey = keyof TranslationResource;

export const translations: ConvertedToFunctionsType<TranslationResource> =
  {} as any;

const convertToFunctions = (obj: any, dict: {}, current?: string) => {
  Object.keys(obj).forEach((key) => {
    const currentLookupKey = current ? `${current}.${key}` : key;
    if (typeof obj[key] === "object") {
      //@ts-ignore
      dict[key] = {};
      //@ts-ignore
      convertToFunctions(obj[key], dict[key], currentLookupKey);
    } else {
      //@ts-ignore
      dict[key] = () => currentLookupKey;
    }
  });
};

i18n
  .use(initReactI18next)
  .init(
    {
      resources,
      lng: getLanguageFromLocalStorage(),
      interpolation: {
        escapeValue: false,
      },
    },
    () => convertToFunctions(enTranslation, translations)
  )
  .then(() => {
    i18n.on("languageChanged", (lng) => {
      storage.write(LocalStorageKeys.LANG, lng);
    });
  });

export default i18n;
