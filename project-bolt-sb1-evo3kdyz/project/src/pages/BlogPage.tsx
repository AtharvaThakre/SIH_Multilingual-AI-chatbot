import React from 'react';
import { Calendar, User, ChevronRight, Heart, Shield, Globe } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Health Checks Every Rural Family Should Know",
      excerpt: "Simple health monitoring techniques that can be performed at home to catch potential issues early and maintain family wellness.",
      author: "Dr. Priya Sharma",
      date: "2024-01-15",
      category: "Preventive Care",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 2,
      title: "Monsoon Health: Protecting Your Family from Seasonal Diseases",
      excerpt: "Comprehensive guide to preventing waterborne diseases, dengue, malaria, and other monsoon-related health issues in rural areas.",
      author: "Dr. Rajesh Kumar",
      date: "2024-01-12",
      category: "Seasonal Health",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Vaccination Schedules: A Complete Guide for Parents",
      excerpt: "Everything you need to know about childhood immunizations, including schedules, side effects, and where to get vaccinated.",
      author: "Dr. Anita Verma",
      date: "2024-01-10",
      category: "Child Health",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Mental Health in Rural Communities: Breaking the Stigma",
      excerpt: "Addressing mental health challenges in rural areas and providing practical strategies for emotional well-being.",
      author: "Dr. Vikram Singh",
      date: "2024-01-08",
      category: "Mental Health",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/3808904/pexels-photo-3808904.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Nutrition on a Budget: Healthy Eating for Rural Families",
      excerpt: "Practical tips for maintaining proper nutrition using locally available, affordable ingredients and traditional recipes.",
      author: "Nutritionist Maya Patel",
      date: "2024-01-05",
      category: "Nutrition",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "First Aid Essentials: What Every Rural Home Should Have",
      excerpt: "Basic first aid supplies and techniques that can save lives when professional medical help is not immediately available.",
      author: "Emergency Care Team",
      date: "2024-01-03",
      category: "Emergency Care",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const categories = [
    { name: "All Posts", count: 24, active: true },
    { name: "Preventive Care", count: 8, active: false },
    { name: "Child Health", count: 6, active: false },
    { name: "Mental Health", count: 4, active: false },
    { name: "Nutrition", count: 6, active: false }
  ];

  const recentUpdates = [
    {
      title: "New Multi-Language Support Added",
      date: "2024-01-20",
      type: "Feature Update"
    },
    {
      title: "Partnership with State Health Department",
      date: "2024-01-18",
      type: "Announcement"
    },
    {
      title: "Enhanced Symptom Checker Released",
      date: "2024-01-15",
      type: "Feature Update"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Health <span className="text-blue-600">Insights</span> & Updates
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Stay informed with the latest health tips, disease prevention strategies, and updates about HealthBot AI's expanding capabilities.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              <div className="mb-12">
                <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 lg:p-12 text-white">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Featured</span>
                        <span className="text-blue-100">•</span>
                        <span className="text-blue-100">{blogPosts[0].category}</span>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                        {blogPosts[0].title}
                      </h2>
                      <p className="text-blue-100 mb-6 leading-relaxed">
                        {blogPosts[0].excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-blue-100">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{blogPosts[0].author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{blogPosts[0].date}</span>
                          </div>
                        </div>
                        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center space-x-1">
                          <span>Read More</span>
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={blogPosts[0].image}
                        alt={blogPosts[0].title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.slice(1).map((post) => (
                  <article key={post.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200 group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white bg-opacity-90 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 flex items-center justify-between ${
                        category.active 
                          ? 'bg-blue-600 text-white' 
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}>
                        <span>{category.name}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          category.active 
                            ? 'bg-white bg-opacity-20' 
                            : 'bg-gray-200'
                        }`}>
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Updates */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Updates</h3>
                <ul className="space-y-4">
                  {recentUpdates.map((update, index) => (
                    <li key={index} className="border-l-2 border-blue-600 pl-4">
                      <div className="text-sm font-medium text-gray-900 mb-1">
                        {update.title}
                      </div>
                      <div className="text-xs text-gray-600 flex items-center space-x-2">
                        <span>{update.date}</span>
                        <span>•</span>
                        <span className="text-blue-600">{update.type}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 text-center">
                <Heart className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Stay Updated</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get the latest health tips and HealthBot AI updates delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                      <Shield className="h-4 w-4" />
                      <span>Privacy Policy</span>
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                      <Globe className="h-4 w-4" />
                      <span>Terms of Service</span>
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                      <Heart className="h-4 w-4" />
                      <span>Community Guidelines</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;