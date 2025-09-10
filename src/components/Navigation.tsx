import React from 'react';
import { Home, Heart, User, MessageCircle, Coins, Zap } from 'lucide-react';

type Page = 'home' | 'swipe' | 'profile' | 'matches' | 'chat' | 'credits';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'home' as Page, icon: Home, label: 'Home' },
    { id: 'swipe' as Page, icon: Zap, label: 'Discover' },
    { id: 'matches' as Page, icon: Heart, label: 'Matches' },
    { id: 'chat' as Page, icon: MessageCircle, label: 'Chat' },
    { id: 'credits' as Page, icon: Coins, label: 'Credits' },
    { id: 'profile' as Page, icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 glass-effect border-b border-white/10 z-50">
      <div className="max-w-md mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center animate-glow">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white neon-text">SkillSwap</span>
          </div>
          
          <div className="flex items-center space-x-1">
            {navItems.slice(-3).map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    currentPage === item.id
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'text-gray-400 hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 glass-effect border-t border-white/10">
        <div className="max-w-md mx-auto px-4">
          <div className="flex items-center justify-around h-16">
            {navItems.slice(0, 4).map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
                    currentPage === item.id
                      ? 'text-blue-400'
                      : 'text-gray-400 hover:text-blue-400'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${currentPage === item.id ? 'fill-current' : ''}`} />
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}