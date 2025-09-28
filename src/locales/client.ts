'use client';

import { createI18nClient } from 'next-international/client';

export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale,
  useCurrentLocale,
} = createI18nClient({
  en: () => import('./en'),
  hi: () => import('./hi'),
  mr: () => import('./mr'),
  bn: () => import('./bn'),
  te: () => import('./te'),
  ta: () => import('./ta'),
  gu: () => import('./gu'),
  ur: () => import('./ur'),
  kn: () => import('./kn'),
  ml: () => import('./ml'),
  pa: () => import('./pa'),
});
