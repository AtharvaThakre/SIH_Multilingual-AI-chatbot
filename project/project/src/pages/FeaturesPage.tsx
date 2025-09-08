import React from 'react';
import { 
  MessageCircle, 
  Clock, 
  Globe, 
  Shield, 
  Bell, 
  Users, 
  Heart, 
  Calendar,
  MapPin,
  Smartphone,
  Database,
  CheckCircle
} from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Preventive Healthcare Guidance',
      description: 'Get personalized advice on nutrition, exercise, hygiene, and lifestyle habits to prevent disease and maintain optimal health.',
      details: [
        'Daily health tips based on your profile',
        'Seasonal health recommendations',
        'Nutrition guidance for local foods',
        'Exercise routines for all fitness levels'
      ],
      color: 'blue'
    },
    {
      icon: Heart,
      title: 'Disease Symptom Analysis',
      description: 'Describe your symptoms and receive instant analysis with guidance on severity and next steps.',
      details: [
        'Symptom checker for common conditions',
        'Emergency vs. non-emergency assessment',
        'When to see a doctor recommendations',
        'Home remedies for minor ailments'
      ],
      color: 'red'
    },
    {
      icon: Calendar,
      title: 'Vaccination Schedules',
      description: 'Never miss important vaccinations with personalized reminders for you and your family.',
      details: [
        'Child immunization schedules',
        'Adult vaccination reminders',
        'Seasonal flu shot notifications',
        'Travel vaccination advice'
      ],
      color: 'green'
    },
    {
      icon: Bell,
      title: 'Real-time Health Alerts',
      description: 'Stay informed about disease outbreaks, health emergencies, and public health advisories in your area.',
      details: [
        'Disease outbreak notifications',
        'Weather-related health warnings',
        'Public health announcements',
        'Emergency preparedness tips'
      ],
      color: 'orange'
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Communicate in your preferred language with support for 12+ Indian languages.',
      details: [
        'Hindi, English, Tamil, Telugu',
        'Bengali, Marathi, Gujarati',
        'Kannada, Malayalam, Punjabi',
        'Voice input and output support'
      ],
      color: 'purple'
    },
    {
      icon: Database,
      title: 'Government Health Integration',
      description: 'All information is sourced from verified government health databases and medical guidelines.',
      details: [
        'Ministry of Health data integration',
        'WHO guideline compliance',
        'AIIMS medical oversight',
        'Real-time data updates'
      ],
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; hover: string }> = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', hover: 'hover:bg-blue-200' },
      red: { bg: 'bg-red-100', text: 'text-red-600', hover: 'hover:bg-red-200' },
      green: { bg: 'bg-green-100', text: 'text-green-600', hover: 'hover:bg-green-200' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', hover: 'hover:bg-orange-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', hover: 'hover:bg-purple-200' },
      teal: { bg: 'bg-teal-100', text: 'text-teal-600', hover: 'hover:bg-teal-200' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="text-blue-600"> Better Health</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Discover how HealthBot AI combines advanced technology with medical expertise to bring comprehensive healthcare guidance to your fingertips.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for informed healthcare decisions, available instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => {
              const colors = getColorClasses(feature.color);
              const IconComponent = feature.icon;
              
              return (
                <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-start space-x-4">
                    <div className={`${colors.bg} w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${colors.hover} transition-colors duration-200`}>
                      <IconComponent className={`h-8 w-8 ${colors.text}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Everyone
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Designed to work seamlessly across all devices and network conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Device Support</h3>
              <p className="text-gray-600">Works on smartphones, feature phones, tablets, and computers. No app download required - works through SMS and web.</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Location-Aware</h3>
              <p className="text-gray-600">Provides region-specific health advice, local disease patterns, and connects you to nearby healthcare facilities when needed.</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy First</h3>
              <p className="text-gray-600">End-to-end encryption, no data retention, and anonymous interactions. Your health information stays completely private.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about using HealthBot AI effectively.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How accurate is the health information provided?
              </h3>
              <p className="text-gray-600">
                All information is sourced from verified government health databases, WHO guidelines, and peer-reviewed medical literature. Our AI maintains a 95%+ accuracy rate, validated by medical professionals from AIIMS.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can HealthBot AI replace visiting a doctor?
              </h3>
              <p className="text-gray-600">
                No, HealthBot AI is designed to complement, not replace, professional medical care. It provides guidance on when to seek medical attention and helps you prepare for doctor visits with relevant information.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Is my health information kept private?
              </h3>
              <p className="text-gray-600">
                Absolutely. We use end-to-end encryption and don't store personal health information. All conversations are anonymous and automatically deleted after 24 hours unless you choose to save them.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do I access HealthBot AI on a feature phone?
              </h3>
              <p className="text-gray-600">
                Simply send an SMS to our dedicated number or call our toll-free helpline. The bot can communicate via text messages and voice calls, making it accessible even on basic phones.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What languages are supported?
              </h3>
              <p className="text-gray-600">
                We support Hindi, English, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi, and other regional languages. You can switch languages anytime during your conversation.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Is there a cost to use HealthBot AI?
              </h3>
              <p className="text-gray-600">
                HealthBot AI is completely free to use. Standard SMS and data charges from your mobile operator may apply, but there are no fees for the health guidance service itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience All Features Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start exploring HealthBot AI's comprehensive features and take control of your health journey.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg">
            <MessageCircle className="inline-block mr-2 h-5 w-5" />
            Try All Features Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;