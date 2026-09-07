import type { MetadataRoute } from "next";

/**
 * 本番ドメインが決まったら環境変数 NEXT_PUBLIC_SITE_URL を設定すること。
 * 未設定の間は暫定でVercelのデフォルトURLを使う。
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kyounoun-ikemen.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/characters", "/contact", "/sister-site"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: route === "" ? 1 : 0.7,
  }));
}
