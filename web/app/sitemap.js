import { blogs } from "@/data/mock";
import { services } from "@/data/services";
import { specialties } from "@/data/specialties";
import { SITE_URL } from "@/lib/site";

export default function sitemap() {
  const staticRoutes = ["", "/about", "/services", "/specialties", "/blog", "/contact", "/privacy-policy"].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const specialtyRoutes = specialties.map((s) => ({
    url: `${SITE_URL}/specialties/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes = blogs.map((blog) => ({
    url: `${SITE_URL}/blog/${blog.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...specialtyRoutes, ...blogRoutes];
}
