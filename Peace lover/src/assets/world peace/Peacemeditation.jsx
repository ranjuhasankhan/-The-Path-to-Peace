import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2, Heart, Sparkles } from 'lucide-react';

export default function PeaceMeditation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [breathPhase, setBreathPhase] = useState('inhale');
  const [selectedDuration, setSelectedDuration] = useState(5);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setTime(prev => {
          if (prev >= selectedDuration * 60) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, selectedDuration]);

  useEffect(() => {
    const breathCycle = setInterval(() => {
      setBreathPhase(prev => {
        if (prev === 'inhale') return 'hold';
        if (prev === 'hold') return 'exhale';
        return 'inhale';
      });
    }, 4000);
    return () => clearInterval(breathCycle);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleReset = () => {
    setTime(0);
    setIsPlaying(false);
  };

  const affirmations = [
    "I am at peace with myself and the world",
    "I choose love over fear",
    "Peace flows through my mind and body",
    "I release all tension and embrace calm",
    "I am surrounded by tranquility"
  ];

  const [currentAffirmation, setCurrentAffirmation] = useState(0);

  useEffect(() => {
    const affirmationInterval = setInterval(() => {
      setCurrentAffirmation(prev => (prev + 1) % affirmations.length);
    }, 8000);
    return () => clearInterval(affirmationInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        {/* Main Container */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Heart className="text-pink-300 animate-pulse" size={48} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Peace Meditation
            </h1>
            <p className="text-purple-200 text-lg">
              Find your inner calm and serenity
            </p>
          </div>

          {/* Breathing Circle */}
          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-64">
              {/* Outer glow */}
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 blur-xl transition-all duration-4000 ${
                breathPhase === 'inhale' ? 'scale-110 opacity-70' : 
                breathPhase === 'hold' ? 'scale-100 opacity-50' : 
                'scale-90 opacity-30'
              }`}></div>
              
              {/* Main circle */}
              <div className={`absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 transition-all duration-4000 ${
                breathPhase === 'inhale' ? 'scale-100' : 
                breathPhase === 'hold' ? 'scale-100' : 
                'scale-75'
              }`}>
                <div className="text-center">
                  <Sparkles className="text-white mx-auto mb-2" size={32} />
                  <p className="text-white text-2xl font-semibold capitalize">
                    {breathPhase}
                  </p>
                  <p className="text-purple-100 text-sm mt-1">
                    {breathPhase === 'inhale' ? 'Breathe in...' : 
                     breathPhase === 'hold' ? 'Hold...' : 
                     'Breathe out...'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Affirmation */}
          <div className="text-center mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <p className="text-white text-xl md:text-2xl italic font-light transition-all duration-1000">
                "{affirmations[currentAffirmation]}"
              </p>
            </div>
          </div>

          {/* Timer */}
          <div className="text-center mb-8">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
              <p className="text-5xl font-bold text-white font-mono">
                {formatTime(time)}
              </p>
            </div>
          </div>

          {/* Duration Selection */}
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            {[3, 5, 10, 15].map(duration => (
              <button
                key={duration}
                onClick={() => {
                  setSelectedDuration(duration);
                  setTime(0);
                  setIsPlaying(false);
                }}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedDuration === duration
                    ? 'bg-white text-purple-900 shadow-lg scale-105'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {duration} min
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              {isPlaying ? 'Pause' : 'Start'}
            </button>
            
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-bold text-lg hover:bg-white/30 transition-all border border-white/30"
            >
              <RotateCcw size={24} />
              Reset
            </button>
          </div>

          {/* Sound Toggle */}
          <div className="flex justify-center mt-6">
            <button className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-purple-200 rounded-full text-sm hover:bg-white/20 transition-all border border-white/20">
              <Volume2 size={18} />
              Ambient Sounds
            </button>
          </div>

          {/* Tips */}
          <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-white font-semibold mb-3 text-center">Meditation Tips</h3>
            <ul className="text-purple-200 text-sm space-y-2">
              <li>• Find a comfortable, quiet space</li>
              <li>• Follow the breathing circle rhythm</li>
              <li>• Let thoughts pass without judgment</li>
              <li>• Focus on the present moment</li>
              <li>• Practice regularly for best results</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-purple-300 text-sm">
            🕊️ May peace be with you
          </p>
        </div>
      </div>
    </div>
  );
}