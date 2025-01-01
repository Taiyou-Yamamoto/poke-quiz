import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // プロトコル（http, https）
        hostname: 'raw.githubusercontent.com', // 許可するドメイン
        pathname: '/PokeAPI/sprites/master/sprites/pokemon/**', // 許可するパス（ワイルドカード `**` を使用）
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
