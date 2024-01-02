import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationRu from '@/shared/assets/i18n/ru/translation.json';

export const defaultNS = 'common';

export const resources = {
  ru: {
    app: translationRu,
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  fallbackLng: 'ru',
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
  ns: ['common', 'login'],
});

export default i18n;
