import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, User, Calendar, Share2 } from 'lucide-react';
import { blogs } from '../data/mock';
import Header from './Header';
import Footer from './Footer';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find(b => b.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#003366] mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you are looking for does not exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#50C878] hover:bg-[#45b56a] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Format content with proper paragraphs and bold text
  const formatContent = (content) => {
    return content.split('\n\n').map((paragraph, index) => {
      // Check if paragraph starts with **
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        const text = paragraph.slice(2, -2);
        return (
          <h3 key={index} className="text-xl font-bold text-[#003366] mt-8 mb-4">
            {text}
          </h3>
        );
      }

      // Handle paragraphs with bold text
      const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-4">
          {parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={i} className="text-[#003366]">{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  // Get related blogs (excluding current)
  const relatedBlogs = blogs.filter(b => b.id !== blog.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#003366] via-[#00294d] to-[#001a33]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </button>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
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
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Share Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }}
              className="inline-flex items-center gap-2 text-[#008080] hover:text-[#006666] font-medium transition-colors"
            >
              <Share2 className="w-5 h-5" />
              Share Article
            </button>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            {formatContent(blog.content)}
          </article>

          {/* Author Card */}
          <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#003366] to-[#008080] flex items-center justify-center text-white font-bold text-xl">
                {blog.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#003366] mb-1">{blog.author}</h4>
                <p className="text-gray-600">Healthcare RCM Expert at ClaimSphere</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#003366] mb-8">Related Articles</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedBlogs.map((relatedBlog) => (
              <Link
                to={`/blog/${relatedBlog.slug}`}
                key={relatedBlog.id}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-24 bg-gradient-to-br from-[#003366] to-[#008080] p-4 flex items-end">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs font-medium">
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
