import React from 'react';
import { MessageCircle, Shield, Clock, Globe, Bell, Users, ChevronRight, Play } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Your Health Information, 
                <span className="text-blue-600"> Simplified</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Empowering rural and semi-urban communities with accessible health information and personalized guidance through AI-powered conversations in your language.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                  <MessageCircle className="inline-block mr-2 h-5 w-5" />
                  Start Your Health Journey
                </button>
                <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Available 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>12+ Languages</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Government Verified</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <MessageCircle className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 flex-1">
                      <p className="text-sm">Hello! I'm having a fever and headache. What should I do?</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <MessageCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="bg-blue-600 text-white rounded-lg p-3 flex-1">
                      <p className="text-sm">Based on your symptoms, here are some immediate steps you can take...</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                    <span>HealthBot AI is typing...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose HealthBot AI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're breaking down barriers to healthcare access with intelligent, personalized health guidance that speaks your language.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-200 group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-200">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Accessibility</h3>
              <p className="text-gray-600">Get instant health advice anytime, anywhere - no appointments needed.</p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-200 group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-200">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multilingual Support</h3>
              <p className="text-gray-600">Communicate in Hindi, English, Tamil, Telugu, and 8+ regional languages.</p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-200 group">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-200">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Care</h3>
              <p className="text-gray-600">Receive customized health advice based on your age, location, and medical history.</p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-200 group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-200">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Information</h3>
              <p className="text-gray-600">All advice backed by government health databases and medical guidelines.</p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-200 group">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-200">
                <Bell className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Alerts</h3>
              <p className="text-gray-600">Stay informed about disease outbreaks and health emergencies in your area.</p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-200 group">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors duration-200">
                <MessageCircle className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Privacy</h3>
              <p className="text-gray-600">Your health conversations are secure, confidential, and never shared.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How HealthBot AI Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, intuitive, and designed for everyone - from smartphone users to feature phone owners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ask Your Question</h3>
              <p className="text-gray-600 mb-4">Type or speak your health question in your preferred language - symptoms, concerns, or general health queries.</p>
              <div className="bg-white p-4 rounded-lg shadow-md max-w-xs mx-auto">
                <p className="text-sm text-gray-700 italic">"मुझे बुखार और सिरदर्द है"</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Instant Analysis</h3>
              <p className="text-gray-600 mb-4">Our AI analyzes your query using trusted medical databases and provides immediate, relevant guidance.</p>
              <div className="bg-white p-4 rounded-lg shadow-md max-w-xs mx-auto">
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent"></div>
                  <p className="text-sm text-gray-700">Analyzing symptoms...</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Receive Personalized Advice</h3>
              <p className="text-gray-600 mb-4">Get actionable health advice, medication reminders, and know when to seek professional medical care.</p>
              <div className="bg-white p-4 rounded-lg shadow-md max-w-xs mx-auto">
                <p className="text-sm text-gray-700">"Here are immediate steps you can take..."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of families across India who trust HealthBot AI for reliable health guidance. Start your conversation today - it's completely free.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg">
              <MessageCircle className="inline-block mr-2 h-5 w-5" />
              Chat Now - It's Free
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              Learn More <ChevronRight className="inline-block ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;