import React, { useState } from 'react';
import { Heart, HandHeart, Sparkles, Globe } from 'lucide-react';

export default function PeaceLoverPage() {
  const [email, setEmail] = useState('');

  const handleJoin = () => {
    if (email) {
      alert('Welcome to the Peace Movement! ✌️💜');
      setEmail('');
    } else {
      alert('Please enter your email');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Main Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-16 text-center">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Heart className="text-pink-500 animate-pulse" size={80} />
              <Globe className="text-purple-500 absolute -top-2 -right-2" size={40} />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
            Peace Lover
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light">
            Choose Love Over Fear
          </p>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join a global movement of individuals committed to spreading peace, kindness, and compassion. Every act of love creates ripples that change the world.
          </p>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl transform hover:scale-105 transition">
              <Heart className="text-pink-500 mx-auto mb-3" size={40} />
              <h3 className="font-bold text-gray-800 text-lg">Spread Love</h3>
              <p className="text-gray-600 text-sm mt-2">Share kindness freely</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl transform hover:scale-105 transition">
              <HandHeart className="text-purple-500 mx-auto mb-3" size={40} />
              <h3 className="font-bold text-gray-800 text-lg">Build Unity</h3>
              <p className="text-gray-600 text-sm mt-2">Connect across differences</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-2xl transform hover:scale-105 transition">
              <Sparkles className="text-indigo-500 mx-auto mb-3" size={40} />
              <h3 className="font-bold text-gray-800 text-lg">Inspire Hope</h3>
              <p className="text-gray-600 text-sm mt-2">Be the light you seek</p>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 p-1 rounded-2xl mb-12">
            <div className="bg-white p-8 rounded-2xl">
              <blockquote className="text-2xl md:text-3xl font-semibold text-gray-800 italic mb-3">
                "Be the change you wish to see in the world."
              </blockquote>
              <p className="text-gray-600">- Mahatma Gandhi</p>
            </div>
          </div>

          {/* Email Signup */}
          <div className="max-w-md mx-auto mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Join the Movement</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-6 py-4 rounded-full border-2 border-purple-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-200 outline-none transition text-center sm:text-left"
              />
              <button
                onClick={handleJoin}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:shadow-xl transform hover:scale-105 transition"
              >
                Join Now
              </button>
            </div>
          </div>

          {/* Social Proof */}
          <p className="text-gray-500 text-sm">
            Join 10,000+ peace lovers worldwide ✌️
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-600">
          <p className="text-sm">Made with 💜 for a peaceful world</p>
        </div>
      </div>
    </div>
  );
}