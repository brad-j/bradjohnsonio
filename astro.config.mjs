// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import playformCompress from '@playform/compress';

import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://bradjohnson.io',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    playformCompress(),
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});
