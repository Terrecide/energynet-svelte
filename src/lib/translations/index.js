import i18n from 'sveltekit-i18n';
import lang from './lang.json';

export const defaultLocale = 'bg';

/** @type {import('sveltekit-i18n').Config} */
export const config = {
  translations: {
    en: { lang },
    bg: { lang },
  },
  loaders: [
    {
      locale: 'en',
      key: 'menu',
      loader: async () => (await import('./en/menu.json')).default,
    },
    {
      locale: 'bg',
      key: 'menu',
      loader: async () => (await import('./bg/menu.json')).default,
    },
    {
      locale: 'en',
      key: 'footer',
      loader: async () => (await import('./en/footer.json')).default,
    },
    {
      locale: 'bg',
      key: 'footer',
      loader: async () => (await import('./bg/footer.json')).default,
    },
    {
      locale: 'en',
      key: 'home',
      routes: ['/'],
      loader: async () => (await import('./en/home.json')).default,
    },
    {
      locale: 'bg',
      key: 'home',
      routes: ['/'],
      loader: async () => (await import('./bg/home.json')).default,
    },
    {
      locale: 'en',
      key: 'about',
      routes: ['/about'],
      loader: async () => (await import('./en/about.json')).default,
    },
    {
      locale: 'bg',
      key: 'about',
      routes: ['/about'],
      loader: async () => (await import('./bg/about.json')).default,
    },
    {
      locale: 'en',
      key: 'get-what-you-need',
      routes: ['/get-what-you-need'],
      loader: async () => (await import('./en/get-what-you-need.json')).default,
    },
    {
      locale: 'bg',
      key: 'get-what-you-need',
      routes: ['/get-what-you-need'],
      loader: async () => (await import('./bg/get-what-you-need.json')).default,
    },
  ],
};

export const { t, loading, locales, locale, translations, loadTranslations, addTranslations, setLocale, setRoute } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));