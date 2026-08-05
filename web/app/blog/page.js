import BlogPage from "@/components/BlogPage";

export const metadata = {
  title: "Blog — Healthcare RCM Insights & Resources",
  description:
    "Stay informed with the latest trends, best practices, and insights in healthcare revenue cycle management, medical billing, and coding.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Healthcare RCM Insights & Resources | ClaimSphere RCM",
    description:
      "Latest trends, best practices, and insights in healthcare revenue cycle management.",
    url: "/blog",
  },
};

export default function Page() {
  return <BlogPage />;
}
