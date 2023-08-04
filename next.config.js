/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPWA({
  env: {
    STORAGE_URL: 'https://storage.googleapis.com/dokan-dev',
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['storage.googleapis.com', 'loremflickr.com', 'images.unsplash.com', 'https://strapi.hasib.dev'],
  },
  output: 'standalone'
});
