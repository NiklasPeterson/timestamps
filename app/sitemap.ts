import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: "https://timestamps.app",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://timestamps.app/formats",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://timestamps.app/unix-timestamp",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
