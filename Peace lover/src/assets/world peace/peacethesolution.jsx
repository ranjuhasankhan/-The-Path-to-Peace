import React, { useState } from 'react';
import { Heart, Shield, Users, Lightbulb, TrendingUp, Globe, Leaf, Smile, CheckCircle, Star, Target, MessageCircle, TreePine, Home, Briefcase, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';

export default function PeaceSolution() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const problems = [
    { icon: Shield, title: "War & Conflict", description: "Armed conflicts causing millions of deaths and displacement", solution: "Diplomatic dialogue, conflict resolution training, and international cooperation" },
    { icon: TrendingUp, title: "Poverty & Inequality", description: "Economic disparities creating social tensions", solution: "Fair resource distribution, economic collaboration, and community support systems" },
    { icon: Leaf, title: "Environmental Crisis", description: "Climate change and resource depletion", solution: "Collective action, sustainable practices, and shared responsibility" },
    { icon: Users, title: "Social Division", description: "Prejudice, discrimination, and cultural conflicts", solution: "Education, empathy building, and celebrating diversity" },
  ];

  const benefits = [
    { icon: Home, title: "Stronger Communities", description: "Peaceful societies build trust, cooperation, and mutual support among neighbors" },
    { icon: Briefcase, title: "Economic Prosperity", description: "Peace enables trade, innovation, and economic growth that benefits everyone" },
    { icon: GraduationCap, title: "Better Education", description: "Children in peaceful environments can focus on learning and development" },
    { icon: Smile, title: "Mental Wellbeing", description: "Peace reduces stress, anxiety, and trauma, improving overall health" },
    { icon: TreePine, title: "Environmental Protection", description: "Peaceful cooperation enables effective climate action and conservation" },
    { icon: Globe, title: "Global Progress", description: "Nations working together solve problems faster and more effectively" },
  ];

  const steps = [
    {
      number: "01",
      title: "Start Within",
      description: "Inner peace is the foundation. Practice mindfulness, self-compassion, and emotional regulation.",
      actions: ["Daily meditation", "Self-reflection", "Gratitude practice", "Stress management"]
    },
    {
      number: "02",
      title: "Practice Empathy",
      description: "Understand others' perspectives and experiences, even when you disagree.",
      actions: ["Active listening", "Ask questions", "Suspend judgment", "Seek understanding"]
    },
    {
      number: "03",
      title: "Choose Kindness",
      description: "Small acts of kindness create ripples that transform communities.",
      actions: ["Help neighbors", "Volunteer time", "Share resources", "Encourage others"]
    },
    {
      number: "04",
      title: "Build Bridges",
      description: "Connect with people different from you and find common ground.",
      actions: ["Join diverse groups", "Learn about cultures", "Attend community events", "Share meals together"]
    },
    {
      number: "05",
      title: "Resolve Conflicts",
      description: "Address disagreements with dialogue, not violence or hostility.",
      actions: ["Communicate openly", "Find compromises", "Seek mediation", "Focus on solutions"]
    },
    {
      number: "06",
      title: "Spread the Message",
      description: "Inspire others through your example and advocacy for peace.",
      actions: ["Share your story", "Educate others", "Support peace initiatives", "Lead by example"]
    }
  ];

  const quotes = [
    { text: "Peace is not absence of conflict, it is the ability to handle conflict by peaceful means.", author: "Ronald Reagan" },
    { text: "If you want to make peace with your enemy, you have to work with your enemy. Then he becomes your partner.", author: "Nelson Mandela" },
    { text: "Peace begins with a smile.", author: "Mother Teresa" },
    { text: "An eye for an eye only ends up making the whole world blind.", author: "Mahatma Gandhi" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-3">
            <Heart className="text-red-500 animate-pulse" size={40} aria-hidden="true" />
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Peace: The Solution
            </h1>
          </div>
          <p className="text-center text-gray-600 mt-2 text-lg">
            Understanding how peace can solve our world's greatest challenges
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full mb-6 font-semibold">
            🌍 A Better World is Possible
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Peace Isn't Just a Dream<br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              It's the Answer
            </span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            Every major challenge facing humanity—from war and poverty to climate change and inequality—has one common solution: peace. Not as passive acceptance, but as active cooperation, understanding, and collective action.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-full shadow-lg">
              <span className="text-3xl font-bold text-purple-600">193</span>
              <span className="text-gray-600 ml-2">UN Member States</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-lg">
              <span className="text-3xl font-bold text-blue-600">8B+</span>
              <span className="text-gray-600 ml-2">People United</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-lg">
              <span className="text-3xl font-bold text-pink-600">∞</span>
              <span className="text-gray-600 ml-2">Possibilities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              How Peace Solves Global Problems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the connection between peace and solutions to our greatest challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-red-100 to-orange-100 p-4 rounded-2xl">
                    <problem.icon className="text-red-600" size={32} aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{problem.title}</h3>
                    <p className="text-gray-600 mb-4">{problem.description}</p>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-xl border-l-4 border-green-500">
                      <p className="font-semibold text-green-700 mb-1">Peace Solution:</p>
                      <p className="text-gray-700">{problem.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Peace Works */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Target className="text-purple-600 mx-auto mb-4" size={48} aria-hidden="true" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Peace Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scientific and historical evidence shows peace creates lasting positive change
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  95%
                </div>
                <h3 className="font-bold text-gray-800 text-xl mb-2">Economic Growth</h3>
                <p className="text-gray-600">Peaceful nations show 95% higher economic growth rates</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  80%
                </div>
                <h3 className="font-bold text-gray-800 text-xl mb-2">Health Improvement</h3>
                <p className="text-gray-600">Communities in peace see 80% better health outcomes</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  3x
                </div>
                <h3 className="font-bold text-gray-800 text-xl mb-2">Innovation Rate</h3>
                <p className="text-gray-600">Peaceful societies innovate 3 times faster</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-3xl p-8">
              <Lightbulb className="mb-4" size={40} aria-hidden="true" />
              <h3 className="text-2xl font-bold mb-3">Cooperation Multiplies Results</h3>
              <p className="text-blue-100 leading-relaxed">
                When people work together instead of against each other, solutions emerge faster. Cooperative efforts in science, technology, and social programs achieve exponentially better results than isolated attempts.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-red-600 text-white rounded-3xl p-8">
              <Heart className="mb-4" size={40} aria-hidden="true" />
              <h3 className="text-2xl font-bold mb-3">Resources Freed for Progress</h3>
              <p className="text-pink-100 leading-relaxed">
                Global military spending exceeds $2 trillion annually. Redirecting even a fraction toward education, healthcare, and infrastructure would transform billions of lives and solve pressing global challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Peace */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Benefits of a Peaceful World
            </h2>
            <p className="text-xl text-gray-600">
              What we gain when we choose peace over conflict
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="text-purple-600" size={28} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Achieve Peace */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              The Path to Peace
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical steps everyone can take to create lasting peace
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleSection(idx)}
                  aria-expanded={expandedSection === idx}
                  aria-controls={`step-panel-${idx}`}
                  className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-6 text-left">
                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white text-2xl md:text-3xl font-bold w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-lg">{step.description}</p>
                    </div>
                  </div>
                  {expandedSection === idx ? <ChevronUp className="text-gray-400" size={32} aria-hidden="true" /> : <ChevronDown className="text-gray-400" size={32} aria-hidden="true" />}
                </button>
                
                {expandedSection === idx && (
                  <div id={`step-panel-${idx}`} className="px-6 md:px-8 pb-8 bg-gradient-to-r from-purple-50 to-pink-50">
                    <div className="ml-0 md:ml-28">
                      <h4 className="font-bold text-gray-800 mb-4 text-lg">Action Steps:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {step.actions.map((action, actionIdx) => (
                          <div key={actionIdx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
                            <CheckCircle className="text-green-500 flex-shrink-0" size={24} aria-hidden="true" />
                            <span className="text-gray-700 font-medium">{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Star className="text-yellow-300 mx-auto mb-4" size={48} aria-hidden="true" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Wisdom on Peace
            </h2>
            <p className="text-xl text-purple-100">
              Insights from leaders who changed the world
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {quotes.map((quote, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition">
                <MessageCircle className="text-yellow-300 mb-4" size={32} aria-hidden="true" />
                <blockquote className="text-xl md:text-2xl text-white italic mb-4 leading-relaxed">
                  "{quote.text}"
                </blockquote>
                <p className="text-purple-200 font-semibold">— {quote.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real World Examples */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Peace in Action
            </h2>
            <p className="text-xl text-gray-600">
              Real examples of how peace transformed nations and communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="text-4xl mb-4">🇩🇪</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Post-War Germany</h3>
              <p className="text-gray-600 mb-4">
                After WWII, Germany chose peace and reconciliation. Today it's Europe's strongest economy and a leader in renewable energy and social progress.
              </p>
              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-green-700 font-semibold">Result: From ruins to prosperity in 50 years</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="text-4xl mb-4">🇷🇼</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Rwanda's Recovery</h3>
              <p className="text-gray-600 mb-4">
                After the 1994 genocide, Rwanda chose reconciliation over revenge. Through peace initiatives, it's now one of Africa's fastest-growing economies.
              </p>
              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-green-700 font-semibold">Result: Healing and growth through unity</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="text-4xl mb-4">🕊️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Northern Ireland</h3>
              <p className="text-gray-600 mb-4">
                The Good Friday Agreement ended decades of conflict. Peace brought economic development, cultural exchange, and improved quality of life for all.
              </p>
              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-green-700 font-semibold">Result: Cooperation replaces conflict</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Choice is Ours
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Every generation faces a choice: continue cycles of conflict and division, or build a world based on cooperation and understanding. The evidence is clear—peace works. It's time we make it our priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition">
              Start Your Peace Journey
            </button>
            <button className="bg-purple-800 text-white px-8 py-4 rounded-full text-lg font-bold border-2 border-white hover:bg-purple-900 transition">
              Share This Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Heart className="text-red-500 animate-pulse" size={32} aria-hidden="true" />
            <span className="text-2xl font-bold">Peace: The Solution</span>
          </div>
          <p className="text-gray-400 mb-6">
            Together, we can build a world where peace isn't just possible—it's inevitable.
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Resources</a>
            <a href="#" className="hover:text-white transition">Get Involved</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
          <p className="mt-8 text-gray-600 text-sm">
            © 2025 Peace: The Solution. Made with 💜 for a better world.
          </p>
        </div>
      </footer>
    </div>
  );
}