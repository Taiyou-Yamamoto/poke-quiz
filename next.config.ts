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
    unoptimized: true, //Imageの最適化設定を無効化
  },

  // テスト用
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.VERCEL_ENV === 'production'
        ? 'https://your-app.vercel.app' // 本番用URL
        : process.env.VERCEL_ENV === 'preview'
        ? `https://${process.env.VERCEL_URL}` // プレビュー環境URL
        : 'http://localhost:3000', // ローカル環境URL
  },
};

export default nextConfig;
