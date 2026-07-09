import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.domain.replace(/\/$/, "");
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/sessions`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/experience`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/classes`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/book`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
