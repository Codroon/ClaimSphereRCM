import { notFound } from "next/navigation";
import BlogPost from "@/components/BlogPost";
import { blogs } from "@/data/mock";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) {
    return { title: "Article Not Found" };
  }
  return {
    title: blog.title,
    description: blog.excerpt,
    alternates: { canonical: `/blog/${blog.slug}` },
    openGraph: {
      type: "article",
      title: blog.title,
      description: blog.excerpt,
      url: `/blog/${blog.slug}`,
      publishedTime: blog.date,
      authors: [blog.author],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) {
    notFound();
  }

  // Article JSON-LD for rich results.
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.excerpt,
    author: { "@type": "Organization", name: blog.author },
    publisher: {
      "@type": "Organization",
      name: "ClaimSphere RCM",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo512.png` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${blog.slug}`,
    articleSection: blog.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPost blog={blog} />
    </>
  );
}
