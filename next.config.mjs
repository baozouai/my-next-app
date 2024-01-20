import { resolve } from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  experimental: {
    turbo: {
      resolveAlias: {
        '@request': resolve('./src/app/api/request.ts'),
        '@prisma': resolve('./src/app/api/prisma.ts'),
      }
    }
  }
};

export default nextConfig;
