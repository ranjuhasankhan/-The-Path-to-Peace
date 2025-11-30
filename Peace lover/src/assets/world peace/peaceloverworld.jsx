import React, { useState, useEffect } from 'react';
import { Heart, Globe, Users, BookOpen, Calendar, MessageCircle, Menu, X, MapPin, Sparkles, Sun, Moon } from 'lucide-react';

export default function PeaceLoverWorld() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(127543);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubscriberCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (section) => {
    setActiveTab(section);
    setMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const bgClass = darkMode 
    ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900' 
    : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50';

  const cardBg = darkMode ? 'bg-gray-800/50' : 'bg-white';
  const textColor = darkMode ? 'text-white' : 'text-gray-800';
  const textSecondary = darkMode ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-500`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md shadow-lg z-50 transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Globe className="text-blue-500 animate-spin" style={{animationDuration: '20s'}} size={40} />
                <Heart className="text-pink-500 absolute top-0 left-0 animate-pulse" size={20} />
              </div>
              <div>
                <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Peace Lover World
                </h1>
                <p className="text-xs text-purple-500">Unite • Inspire • Transform</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('home')} className={`${textColor} hover:text-purple-600 transition font-medium`}>Home</button>
              <button onClick={() => scrollToSection('mission')} className={`${textColor} hover:text-purple-600 transition font-medium`}>Mission</button>
              <button onClick={() => scrollToSection('community')} className={`${textColor} hover:text-purple-600 transition font-medium`}>Community</button>
              <button onClick={() => scrollToSection('events')} className={`${textColor} hover:text-purple-600 transition font-medium`}>Events</button>
              <button onClick={() => scrollToSection('stories')} className={`${textColor} hover:text-purple-600 transition font-medium`}>Stories</button>
              <button onClick={() => scrollToSection('join')} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
                Join Us
              </button>
              <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full ${darkMode ? 'bg-yellow-400' : 'bg-gray-800'}`}>
                {darkMode ? <Sun size={20} className="text-gray-900" /> : <Moon size={20} className="text-white" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X size={28} className={textColor} /> : <Menu size={28} className={textColor} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t`}>
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className={`block w-full text-left ${textColor} hover:text-purple-600 py-2`}>Home</button>
              <button onClick={() => scrollToSection('mission')} className={`block w-full text-left ${textColor} hover:text-purple-600 py-2`}>Mission</button>
              <button onClick={() => scrollToSection('community')} className={`block w-full text-left ${textColor} hover:text-purple-600 py-2`}>Community</button>
              <button onClick={() => scrollToSection('events')} className={`block w-full text-left ${textColor} hover:text-purple-600 py-2`}>Events</button>
              <button onClick={() => scrollToSection('stories')} className={`block w-full text-left ${textColor} hover:text-purple-600 py-2`}>Stories</button>
              <button onClick={() => scrollToSection('join')} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full">
                Join Us
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full">
              <Sparkles className="text-yellow-500" size={20} />
              <span className={`text-sm font-semibold ${textColor}`}>
                {subscriberCount.toLocaleString()} Peace Lovers Worldwide
              </span>
            </div>
          </div>
          
          <h2 className={`text-5xl md:text-7xl font-bold mb-6 ${textColor}`}>
            Building a World of
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mt-2">
              Peace & Harmony
            </span>
          </h2>
          
          <p className={`text-xl md:text-2xl ${textSecondary} mb-12 max-w-3xl mx-auto leading-relaxed`}>
            Join millions around the globe who believe in the power of love, compassion, and unity to create lasting positive change.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('join')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition"
            >
              Start Your Journey ✨
            </button>
            <button 
              onClick={() => scrollToSection('mission')}
              className={`${cardBg} ${textColor} px-8 py-4 rounded-full text-lg font-semibold border-2 border-purple-300 hover:border-purple-500 transition`}
            >
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className={`${cardBg} p-6 rounded-2xl shadow-lg`}>
              <Globe className="text-blue-500 mx-auto mb-2" size={40} />
              <p className={`text-3xl font-bold ${textColor}`}>195+</p>
              <p className={`text-sm ${textSecondary}`}>Countries</p>
            </div>
            <div className={`${cardBg} p-6 rounded-2xl shadow-lg`}>
              <Users className="text-purple-500 mx-auto mb-2" size={40} />
              <p className={`text-3xl font-bold ${textColor}`}>12M+</p>
              <p className={`text-sm ${textSecondary}`}>Members</p>
            </div>
            <div className={`${cardBg} p-6 rounded-2xl shadow-lg`}>
              <Calendar className="text-pink-500 mx-auto mb-2" size={40} />
              <p className={`text-3xl font-bold ${textColor}`}>5K+</p>
              <p className={`text-sm ${textSecondary}`}>Events</p>
            </div>
            <div className={`${cardBg} p-6 rounded-2xl shadow-lg`}>
              <Heart className="text-red-500 mx-auto mb-2" size={40} />
              <p className={`text-3xl font-bold ${textColor}`}>1B+</p>
              <p className={`text-sm ${textSecondary}`}>Acts of Love</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${textColor}`}>
            Our Global Mission
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`${cardBg} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2`}>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Globe className="text-blue-600 dark:text-blue-300" size={32} />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${textColor}`}>Unite Humanity</h3>
              <p className={textSecondary}>
                Breaking down barriers of race, religion, and nationality to create a truly united global family bound by love and respect.
              </p>
            </div>
            
            <div className={`${cardBg} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2`}>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="text-purple-600 dark:text-purple-300" size={32} />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${textColor}`}>Educate & Inspire</h3>
              <p className={textSecondary}>
                Providing resources, workshops, and programs that teach conflict resolution, empathy, and the transformative power of peace.
              </p>
            </div>
            
            <div className={`${cardBg} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2`}>
              <div className="bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-pink-600 dark:text-pink-300" size={32} />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${textColor}`}>Spread Compassion</h3>
              <p className={textSecondary}>
                Encouraging daily acts of kindness and creating ripple effects of positivity that transform communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className={`py-20 px-4 ${darkMode ? 'bg-gray-800/30' : 'bg-white/50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-6 ${textColor}`}>
            Our Global Community
          </h2>
          <p className={`text-center ${textSecondary} text-lg mb-12 max-w-2xl mx-auto`}>
            Connect with peace lovers from every corner of the world
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'North America', members: '3.2M', flag: '🌎', color: 'from-blue-500 to-cyan-500' },
              { name: 'Europe', members: '2.8M', flag: '🌍', color: 'from-purple-500 to-pink-500' },
              { name: 'Asia', members: '4.5M', flag: '🌏', color: 'from-orange-500 to-red-500' },
              { name: 'Africa', members: '1.2M', flag: '🌍', color: 'from-green-500 to-teal-500' },
              { name: 'South America', members: '890K', flag: '🌎', color: 'from-yellow-500 to-orange-500' },
              { name: 'Oceania', members: '450K', flag: '🌏', color: 'from-indigo-500 to-purple-500' }
            ].map((region, idx) => (
              <div key={idx} className={`${cardBg} p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`text-4xl`}>{region.flag}</div>
                  <div>
                    <h3 className={`text-xl font-bold ${textColor}`}>{region.name}</h3>
                    <p className={`text-sm ${textSecondary}`}>{region.members} members</p>
                  </div>
                </div>
                <div className={`h-2 bg-gradient-to-r ${region.color} rounded-full`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${textColor}`}>
            Upcoming Peace Events
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`${cardBg} rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition`}>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-48 flex items-center justify-center">
                <Calendar className="text-white" size={64} />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-semibold">
                    Virtual
                  </span>
                  <span className={`${textSecondary} text-sm`}>Dec 15, 2025</span>
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${textColor}`}>Global Peace Meditation</h3>
                <p className={`${textSecondary} mb-4`}>
                  Join 100,000+ people worldwide for a synchronized meditation for world peace.
                </p>
                <button className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                  Register Now →
                </button>
              </div>
            </div>

            <div className={`${cardBg} rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition`}>
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-48 flex items-center justify-center">
                <Users className="text-white" size={64} />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
                    In-Person
                  </span>
                  <span className={`${textSecondary} text-sm`}>Jan 20, 2026</span>
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${textColor}`}>Unity Festival 2026</h3>
                <p className={`${textSecondary} mb-4`}>
                  Three days of workshops, music, and celebration in cities across 50 countries.
                </p>
                <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section id="stories" className={`py-20 px-4 ${darkMode ? 'bg-gray-800/30' : 'bg-gradient-to-r from-purple-50 to-pink-50'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-6 ${textColor}`}>
            Stories of Transformation
          </h2>
          <p className={`text-center ${textSecondary} text-lg mb-12`}>
            Real stories from our community members
          </p>
          
          <div className="space-y-6">
            <div className={`${cardBg} p-8 rounded-3xl shadow-lg`}>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  S
                </div>
                <div className="flex-1">
                  <h4 className={`text-xl font-bold mb-2 ${textColor}`}>Sarah from Kenya</h4>
                  <p className={`${textSecondary} italic mb-3`}>
                    "Joining Peace Lover World changed my life. I started a peace club in my village, and now we have 200 members working together to resolve conflicts and support each other. We've created a more harmonious community."
                  </p>
                  <div className="flex gap-2">
                    <MapPin className="text-purple-500" size={16} />
                    <span className="text-sm text-purple-600 dark:text-purple-400">Nairobi, Kenya</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${cardBg} p-8 rounded-3xl shadow-lg`}>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  M
                </div>
                <div className="flex-1">
                  <h4 className={`text-xl font-bold mb-2 ${textColor}`}>Miguel from Brazil</h4>
                  <p className={`${textSecondary} italic mb-3`}>
                    "As a former gang member, I never thought I'd find peace. This community showed me there's another way. Now I mentor youth and teach them conflict resolution. Peace is possible for everyone."
                  </p>
                  <div className="flex gap-2">
                    <MapPin className="text-blue-500" size={16} />
                    <span className="text-sm text-blue-600 dark:text-blue-400">São Paulo, Brazil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${textColor}`}>
            Join the Movement
          </h2>
          <p className={`text-xl ${textSecondary} mb-12 max-w-2xl mx-auto`}>
            Be part of something bigger. Together, we're creating a world where peace isn't just a dream—it's our reality.
          </p>
          
          <div className={`${cardBg} p-8 md:p-12 rounded-3xl shadow-2xl`}>
            <div className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full px-6 py-4 rounded-xl border-2 ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} focus:border-purple-500 outline-none transition`}
              />
              <input
                type="email"
                placeholder="Your Email"
                className={`w-full px-6 py-4 rounded-xl border-2 ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} focus:border-purple-500 outline-none transition`}
              />
              <select className={`w-full px-6 py-4 rounded-xl border-2 ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} focus:border-purple-500 outline-none transition`}>
                <option>Select Your Region</option>
                <option>North America</option>
                <option>Europe</option>
                <option>Asia</option>
                <option>Africa</option>
                <option>South America</option>
                <option>Oceania</option>
              </select>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition flex items-center justify-center gap-2">
                <Heart size={24} />
                Join Peace Lover World
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-8 flex-wrap">
              <div className="text-center">
                <p className={`text-3xl font-bold ${textColor}`}>Free</p>
                <p className={`text-sm ${textSecondary}`}>Forever</p>
              </div>
              <div className="text-center">
                <p className={`text-3xl font-bold ${textColor}`}>24/7</p>
                <p className={`text-sm ${textSecondary}`}>Community Support</p>
              </div>
              <div className="text-center">
                <p className={`text-3xl font-bold ${textColor}`}>Global</p>
                <p className={`text-sm ${textSecondary}`}>Network Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white py-16 px-4`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="text-blue-400" size={32} />
                <span className="text-xl font-bold">Peace Lover World</span>
              </div>
              <p className="text-gray-400">
                Building bridges of understanding across all humanity.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('mission')} className="hover:text-white transition">Our Mission</button></li>
                <li><button onClick={() => scrollToSection('community')} className="hover:text-white transition">Community</button></li>
                <li><button onClick={() => scrollToSection('events')} className="hover:text-white transition">Events</button></li>
                <li><button onClick={() => scrollToSection('stories')} className="hover:text-white transition">Stories</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Peace Guide</a></li>
                <li><a href="#" className="hover:text-white transition">Meditation Tools</a></li>
                <li><a href="#" className="hover:text-white transition">Community Forums</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex gap-4">
                <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                  <MessageCircle size={20} />
                </button>
                <button className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition">
                  <Heart size={20} />
                </button>
                <button className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition">
                  <Users size={20} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 Peace Lover World. All rights reserved.</p>
            <p className="mt-2 text-sm">Made with 💜 for a peaceful planet</p>
          </div>
        </div>
      </footer>
    </div>
  );
}