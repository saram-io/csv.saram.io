// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://csv.saram.io',
  integrations: [
    sitemap({
      lastmod: new Date('2026-09-22T00:00:00Z'),
      serialize(item) {
        if (item.url === 'https://csv.saram.io/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
          item.lastmod = new Date('2026-09-22T00:00:00Z');
        } else if (
          item.url.includes('/ai-readiness-tracker/') ||
          item.url.includes('/csv-vs-csa/') ||
          item.url.includes('/ai-trends/') ||
          item.url.includes('/tiers/')
        ) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
          item.lastmod = new Date('2026-09-22T00:00:00Z');
        } else if (item.url.includes('/vendors/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
          item.lastmod = new Date('2026-09-20T00:00:00Z');
        } else {
          item.priority = 0.6;
          item.changefreq = 'monthly';
          item.lastmod = new Date('2026-09-15T00:00:00Z');
        }
        return item;
      },
    }),
  ],
  build: {
    format: 'directory',
  },
});
