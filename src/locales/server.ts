import { createI18nServer } from 'next-international/server';

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer({
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
