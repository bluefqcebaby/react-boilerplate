import { defaultNS, resources } from '@/shared/lib/i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    ns: keyof (typeof resources)['ru'];
    resources: (typeof resources)['ru'];
  }
}
