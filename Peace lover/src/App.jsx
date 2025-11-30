  import React, { useState } from 'react';
import { Heart, Users, Globe, Smile, Send, Menu, X } from 'lucide-react';

export default function PeaceLoverWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Thank you for your message! Together we spread peace. ✌️');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="text-pink-500" size={32} />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Peace Lovers
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-purple-600 transition">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition">About</button>
              <button onClick={() => scrollToSection('mission')} className="text-gray-700 hover:text-purple-600 transition">Mission</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-purple-600 transition">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-purple-600">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-purple-600">About</button>
              <button onClick={() => scrollToSection('mission')} className="block w-full text-left text-gray-700 hover:text-purple-600">Mission</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-purple-600">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
            Spread Love, Not Hate
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Join our community of peace lovers committed to creating a harmonious world through kindness, understanding, and compassion.
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition"
          >
            Join the Movement ✌️
          </button>
        </div>

        {/* Floating Peace Symbols */}
        <div className="mt-16 flex justify-center space-x-8">
          <div className="animate-bounce">
            <Heart className="text-pink-500" size={64} />
          </div>
          <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>
            <Globe className="text-blue-500" size={64} />
          </div>
          <div className="animate-bounce" style={{ animationDelay: '0.4s' }}>
            <Smile className="text-yellow-500" size={64} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
            What We Believe
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <Heart className="text-pink-500 mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Unconditional Love</h3>
              <p className="text-gray-600">
                We believe in the power of love to transform lives and communities. Every person deserves compassion and understanding.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <Users className="text-purple-500 mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Unity & Harmony</h3>
              <p className="text-gray-600">
                Together we are stronger. By embracing our differences and celebrating our similarities, we create lasting peace.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <Globe className="text-blue-500 mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Global Connection</h3>
              <p className="text-gray-600">
                Peace knows no borders. We're building a worldwide community dedicated to kindness and mutual respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
            Our Mission
          </h2>
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-1 rounded-3xl">
            <div className="bg-white p-12 rounded-3xl">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                At Peace Lovers, we're on a mission to cultivate a culture of peace, one heart at a time. We believe that lasting change begins with individual actions and ripples outward to create waves of positive transformation.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Through education, community building, and compassionate action, we empower people to become ambassadors of peace in their daily lives. Whether it's a kind word, a helping hand, or standing up against injustice, every act of love counts.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Together, we're proving that peace isn't just a dream—it's a choice we make every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl md:text-4xl font-bold text-white italic">
            "Peace begins with a smile."
          </blockquote>
          <p className="text-xl text-white/90 mt-4">- Mother Teresa</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
            Connect With Us
          </h2>
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition resize-none"
                  placeholder="Share your thoughts on peace..."
                />
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Heart className="text-pink-500" size={32} />
            <span className="text-2xl font-bold">Peace Lovers</span>
          </div>
          <p className="text-gray-400 mb-4">
            Spreading love and kindness, one person at a time.
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 Peace Lovers. All rights reserved. Made with ❤️ for humanity.
          </p>
        </div>
      </footer>
    </div>
  );
}