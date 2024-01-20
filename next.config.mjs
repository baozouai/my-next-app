import { resolve } from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
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
