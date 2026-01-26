import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/mock';

const BlogSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #008080 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 bg-[#008080]/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#008080] rounded-full"></span>
            <span className="text-[#008080] text-sm font-semibold">Our Blog</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003366] mb-6">
            Latest Insights &
            <span className="text-[#008080]"> Resources</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Stay informed with the latest trends, best practices, and insights in healthcare revenue cycle management.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, index) => (
            <Link
              to={`/blog/${blog.slug}`}
              key={blog.id}
              className={`group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card Header with Category */}
              <div className="h-32 bg-gradient-to-br from-[#003366] to-[#008080] p-6 flex flex-col justify-between">
                <span className="inline-block self-start px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                  {blog.category}
                </span>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{blog.readTime}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#003366] mb-3 line-clamp-2 group-hover:text-[#008080] transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Author & Date */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#008080]/10 flex items-center justify-center">
                      <User className="w-4 h-4 text-[#008080]" />
                    </div>
                    <span className="text-sm text-gray-600">{blog.author}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#008080] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
