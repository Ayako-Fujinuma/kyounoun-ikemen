import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ikemen.kyounoun.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/characters", "/contact", "/sister-site", "/about", "/privacy"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: route === "" ? 1 : 0.7,
  }));
}
