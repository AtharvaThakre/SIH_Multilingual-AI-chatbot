import React from 'react';
import { Target, Users, Award, Heart, Shield, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">HealthBot AI</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Bridging the healthcare gap for underserved communities through intelligent, accessible, and culturally-sensitive AI technology.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              To democratize healthcare access by providing reliable, personalized health information and guidance to rural and semi-urban communities across India, empowering individuals to make informed decisions about their health and well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Background Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Story Behind HealthBot AI
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  In rural India, access to healthcare information remains a significant challenge. Millions of people struggle to get timely, accurate health guidance due to geographical barriers, language constraints, and limited healthcare infrastructure.
                </p>
                <p>
                  HealthBot AI was born from this urgent need. Developed in partnership with leading healthcare organizations and the Ministry of Health, our AI-powered chatbot brings reliable medical guidance directly to people's phones - whether they own a smartphone or a basic feature phone.
                </p>
                <p>
                  By leveraging cutting-edge artificial intelligence and integrating with official government health databases, we ensure that every piece of advice is medically sound, culturally appropriate, and available in multiple Indian languages.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">50M+</div>
                  <div className="text-sm text-gray-600">People Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">12+</div>
                  <div className="text-sm text-gray-600">Languages</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Availability</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at HealthBot AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassionate Care</h3>
              <p className="text-gray-600">Every interaction is designed with empathy and understanding of cultural sensitivities.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust & Privacy</h3>
              <p className="text-gray-600">Your health information is completely secure and never shared with third parties.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Universal Access</h3>
              <p className="text-gray-600">Healthcare information should be available to everyone, regardless of location or economic status.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted Partners & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work closely with government bodies and healthcare organizations to ensure the highest standards of care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Ministry of Health</h4>
              <p className="text-sm text-gray-600">Official Partner</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">AIIMS</h4>
              <p className="text-sm text-gray-600">Medical Oversight</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">WHO Guidelines</h4>
              <p className="text-sm text-gray-600">Compliant</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Digital India</h4>
              <p className="text-sm text-gray-600">Initiative Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Technology Behind HealthBot AI
            </h2>
            <p className="text-xl text-gray-600">
              Advanced AI meets human compassion to deliver reliable healthcare guidance.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Natural Language Processing</h3>
                <p className="text-gray-600 mb-6">
                  Our advanced NLP engine understands context, cultural nuances, and medical terminology across 12+ Indian languages, ensuring accurate interpretation of health queries.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Medical Knowledge Base</h3>
                <p className="text-gray-600">
                  Integrated with official government health databases, WHO guidelines, and peer-reviewed medical research to provide evidence-based recommendations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Machine Learning</h3>
                <p className="text-gray-600 mb-6">
                  Continuously learns from interactions to improve accuracy while maintaining strict privacy standards. No personal data is used for training.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Security & Privacy</h3>
                <p className="text-gray-600">
                  End-to-end encryption, HIPAA-compliant data handling, and zero-knowledge architecture ensure your health information remains completely private.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;