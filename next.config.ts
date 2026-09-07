import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  images: {
    // Cloudflare Workers上でのNext標準の画像最適化APIはCloudflare Imagesの
    // 追加設定が必要なため、まずは無最適化(元ファイルをそのまま配信)にしておく。
    unoptimized: true,
  },
};

initOpenNextCloudflareForDev();

export default nextConfig;
