import { resolve } from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        '@request': resolve('./src/app/api/request.ts')
      }
    }
  }
};

export default nextConfig;
