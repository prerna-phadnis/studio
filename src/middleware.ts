import { createI18nMiddleware } from 'next-international/middleware';
import { NextRequest } from 'next/server';

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'hi', 'mr', 'bn', 'te', 'ta', 'gu', 'ur', 'kn', 'ml', 'pa'],
  defaultLocale: 'en',
  urlMappingStrategy: 'redirect',
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
