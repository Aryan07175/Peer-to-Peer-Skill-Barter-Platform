import React from 'react';
import { ArrowRight, Users, Clock, Sparkles, TrendingUp } from 'lucide-react';

interface HeroProps {
  onStartMatching: () => void;
}

export function Hero({ onStartMatching }: HeroProps) {
  return (
    <div className="pt-16 px-4 max-w-md mx-auto">
      <div className="text-center py-8 px-6 relative">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl animate-glow">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-4 neon-text">
          Learn by Teaching,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Teach by Learning
          </span>
        </h1>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Exchange skills with people around you. No money needed—just time and knowledge.
        </p>
        
        <button
          onClick={onStartMatching}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2 animate-shimmer relative overflow-hidden"
        >
          <span>Start Discovering Skills</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 gap-4 mt-8">
        <FeatureCard
          icon={<Users className="w-6 h-6 text-blue-600" />}
          title="Find Your Match"
          description="Swipe through skills and find perfect learning partners"
          color="blue"
        />
        
        <FeatureCard
          icon={<Clock className="w-6 h-6 text-purple-600" />}
          title="Time Credits"
          description="Earn 1 hour credit for every hour you teach"
          color="purple"
        />
        
        <FeatureCard
          icon={<TrendingUp className="w-6 h-6 text-green-600" />}
          title="Grow Together"
          description="Build skills and connections in your community"
          color="green"
        />
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  const colorClasses = {
    blue: 'glass-effect border-blue-500/20',
    purple: 'glass-effect border-purple-500/20',
    green: 'glass-effect border-green-500/20',
  };

  return (
    <div className={`${colorClasses[color]} p-6 rounded-2xl border shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-[1.02]`}>
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-white/10 rounded-xl shadow-lg backdrop-blur-sm">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-white mb-1">{title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}