'use client';

import { I18nProviderClient } from '@/locales/client';

export function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // You can pass the locale from the server to the client.
  // We are using `useCurrentLocale` here for convenience, but it's not
  // required and you can pass the locale as a prop.
  return <I18nProviderClient locale="en">{children}</I18nProviderClient>;
}
