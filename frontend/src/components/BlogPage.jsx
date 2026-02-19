import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User, Search, BookOpen } from 'lucide-react';
import { blogs } from '../data/mock';
import Header from './Header';
import Footer from './Footer';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Get unique categories
  const categories = ['All', ...new Set(blogs.map(b => b.category))];

  // Filter blogs
  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pb-28 bg-gradient-to-br from-[#003366] via-[#00294d] to-[#001a33] overflow-hidden">
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#008080]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#50C878]/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8">
              <BookOpen className="w-4 h-4 text-[#50C878]" />
              <span className="text-white/90 text-sm font-semibold">Our Blog</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Latest Insights &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#50C878] to-[#008080]">
                Resources
              </span>
            </h1>

            <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Stay informed with the latest trends, best practices, and insights in healthcare revenue cycle management.
            </p>
          </div>

          {/* Search Bar */}
          <div className={`mt-10 max-w-xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-[#50C878]/50 focus:bg-white/15 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter + Blog Grid */}
      <section className="relative py-16 lg:py-24 bg-gray-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #008080 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Pills */}
          <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#008080] text-white shadow-lg shadow-[#008080]/30'
                    : 'bg-white text-[#003366] border border-gray-200 hover:border-[#008080] hover:text-[#008080]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          {filteredBlogs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, index) => (
                <Link
                  to={`/blog/${blog.slug}`}
                  key={blog.id}
                  className={`group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  {/* Card Header Gradient */}
                  <div className="relative h-44 bg-gradient-to-br from-[#003366] to-[#008080] p-6 flex flex-col justify-between overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full"></div>
                    <div className="absolute -bottom-8 -left-4 w-20 h-20 bg-white/5 rounded-full"></div>

                    <div className="flex items-center justify-between relative z-10">
                      <span className="inline-block px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                        {blog.category}
                      </span>
                      <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                    </div>

                    <div className="flex items-center gap-2 text-white/80 text-sm relative z-10">
                      <Clock className="w-4 h-4" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#003366] mb-3 line-clamp-2 group-hover:text-[#008080] transition-colors duration-300">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {blog.excerpt}
                    </p>

                    {/* Author & Date Footer */}
                    <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#003366] to-[#008080] flex items-center justify-center text-white text-xs font-bold">
                          {blog.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#003366]">{blog.author}</p>
                          <p className="text-xs text-gray-400">{blog.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-[#008080]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-[#008080]" />
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#003366] to-[#00294d] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#008080]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#50C878]/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Revenue Cycle?
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Partner with ClaimSphere for expert RCM solutions that deliver measurable results for your healthcare organization.
          </p>
          <Link
            to="/"
            onClick={() => setTimeout(() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100)}
            className="inline-flex items-center gap-2 bg-[#50C878] hover:bg-[#45b56a] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#50C878]/30 hover:scale-105"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
