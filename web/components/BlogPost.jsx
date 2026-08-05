'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock, Calendar, Share2, Check } from 'lucide-react';
import { blogs } from '../data/mock';
import { blogImage } from '../lib/images';

// Stable order index per blog id, so every post maps to one distinct image.
const blogIndexById = new Map(blogs.map((b, i) => [b.id, i]));
import Header from './Header';
import Footer from './Footer';

const BlogPost = ({ blog }) => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog?.slug]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#003366] mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you are looking for does not exist.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#50C878] hover:bg-[#45b56a] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Render **inline bold** within any run of text.
  const renderInline = (text) =>
    text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
      part.startsWith('**') && part.endsWith('**') ? (
        <strong key={i} className="text-[#003366] font-semibold">{part.slice(2, -2)}</strong>
      ) : (
        part
      )
    );

  // Render article body from a lightweight markup:
  //   **Heading**        (whole line)  -> h2 with accent bar
  //   [IMG:src]                        -> figure
  //   | a | b |          (table rows)  -> table (a --- separator row is dropped)
  //   - item  /  * item                -> unordered list
  //   1. item                          -> ordered list
  //   anything else                    -> paragraph
  // **inline bold** works inside paragraphs, list items and table cells.
  const formatContent = (content) => {
    return content.split('\n\n').map((block, index) => {
      const trimmed = block.trim();
      const lines = trimmed.split('\n').map((l) => l.trim()).filter(Boolean);

      if (trimmed.startsWith('[IMG:') && trimmed.endsWith(']')) {
        const imgPath = trimmed.slice(5, -1);
        return (
          <figure key={index} className="my-10 rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgPath} alt={blog.title} className="w-full h-auto object-cover" loading="lazy" />
          </figure>
        );
      }

      if (trimmed.startsWith('**') && trimmed.endsWith('**') && lines.length === 1) {
        return (
          <h2 key={index} className="flex items-start gap-4 text-3xl md:text-4xl font-bold text-[#003366] mt-14 mb-6 leading-tight">
            <span className="mt-3 md:mt-4 w-10 h-1.5 rounded-full bg-[#50C878] flex-shrink-0"></span>
            <span>{trimmed.slice(2, -2)}</span>
          </h2>
        );
      }

      // Markdown table: every line is a pipe row.
      if (lines.length >= 2 && lines.every((l) => l.startsWith('|'))) {
        const rows = lines
          .filter((l) => !/^\|[\s|:-]+\|?$/.test(l)) // drop the |---|---| separator
          .map((l) => l.replace(/^\||\|$/g, '').split('|').map((c) => c.trim()));
        const [head, ...body] = rows;
        return (
          <div key={index} className="my-10 overflow-x-auto rounded-2xl ring-1 ring-gray-200 shadow-sm">
            <table className="w-full text-left text-base">
              <thead className="bg-gradient-to-r from-[#003366] to-[#00294d] text-white">
                <tr>
                  {head.map((cell, i) => (
                    <th key={i} className="px-6 py-4 text-base font-semibold whitespace-nowrap">{renderInline(cell)}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {body.map((row, r) => (
                  <tr key={r} className={r % 2 ? 'bg-gray-50/70' : 'bg-white'}>
                    {row.map((cell, c) => (
                      <td key={c} className={`px-6 py-4 align-top leading-relaxed ${c === 0 ? 'font-semibold text-[#003366] whitespace-nowrap' : 'text-gray-600'}`}>{renderInline(cell)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }

      // Unordered list.
      if (lines.length && lines.every((l) => /^[-*]\s+/.test(l))) {
        return (
          <ul key={index} className="my-6 space-y-3">
            {lines.map((l, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600 leading-8 text-lg">
                <span className="mt-3 w-1.5 h-1.5 rounded-full bg-[#50C878] flex-shrink-0"></span>
                <span>{renderInline(l.replace(/^[-*]\s+/, ''))}</span>
              </li>
            ))}
          </ul>
        );
      }

      // Ordered list.
      if (lines.length && lines.every((l) => /^\d+\.\s+/.test(l))) {
        return (
          <ol key={index} className="my-6 space-y-3">
            {lines.map((l, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600 leading-8 text-lg">
                <span className="mt-1.5 w-6 h-6 rounded-full bg-[#008080]/10 text-[#008080] text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <span>{renderInline(l.replace(/^\d+\.\s+/, ''))}</span>
              </li>
            ))}
          </ol>
        );
      }

      return (
        <p key={index} className="text-gray-600 leading-8 text-lg mb-5">
          {renderInline(block)}
        </p>
      );
    });
  };

  const relatedBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 3);
  const heroImage = blogImage(blogIndexById.get(blog.id), 1400);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero — copy left, image right (mirrors service/specialty detail pages) */}
      <section className="relative pt-32 pb-20 lg:pb-24 overflow-hidden bg-gradient-to-br from-[#003366] via-[#00294d] to-[#001a33]">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '32px 32px' }}
          ></div>
        </div>
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#008080]/20 rounded-full blur-3xl" aria-hidden="true"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => router.push('/blog')}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Blog
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center rounded-full bg-[#50C878] px-4 py-1.5 text-sm font-semibold text-white">
                  {blog.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-8">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#008080] to-[#50C878] flex items-center justify-center text-white text-xs font-bold">
                    {blog.author.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>

            {/* Right: featured image */}
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={heroImage} alt={blog.title} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -z-10 -bottom-5 -right-5 w-2/3 h-2/3 bg-[#50C878]/10 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Article — wide white container with clear space above */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] shadow-xl ring-1 ring-black/5 overflow-hidden">
            {/* Brand accent strip */}
            <div className="h-1.5 bg-gradient-to-r from-[#003366] via-[#008080] to-[#50C878]"></div>

            <div className="p-6 sm:p-10 lg:p-14">
              {/* Share */}
              <div className="flex justify-end mb-6">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 text-[#008080] hover:text-[#006666] font-medium transition-colors"
                >
                  {copied ? <Check className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
                  {copied ? 'Link copied' : 'Share Article'}
                </button>
              </div>

              <article>{formatContent(blog.content)}</article>

              {/* Author card */}
              <div className="mt-16 p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#003366] to-[#008080] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {blog.author.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#003366] mb-1">{blog.author}</h4>
                    <p className="text-gray-600">
                      Healthcare RCM experts helping U.S. providers maximize reimbursements and reduce denials.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#003366] to-[#00294d] p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Ready to optimize your revenue cycle?</h2>
            <p className="text-white/70 mb-6">Get a free, no-obligation assessment from our RCM specialists.</p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#50C878] hover:bg-[#45b56a] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#003366] mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedBlogs.map((relatedBlog) => (
              <Link
                href={`/blog/${relatedBlog.slug}`}
                key={relatedBlog.id}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={blogImage(blogIndexById.get(relatedBlog.id), 700)}
                    alt={relatedBlog.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-[#003366]/85 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    {relatedBlog.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#003366] mb-2 group-hover:text-[#008080] transition-colors line-clamp-2">
                    {relatedBlog.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{relatedBlog.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
