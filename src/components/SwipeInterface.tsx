import React, { useState, useRef } from 'react';
import { X, Heart, Star, Clock, User } from 'lucide-react';
import { SkillCard } from './SkillCard';

interface SwipeInterfaceProps {
  userId: string;
}

interface Skill {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  skillTitle: string;
  category: string;
  description: string;
  timeCommitment: string;
  experience: string;
  isOffering: boolean;
  tags: string[];
}

const mockSkills: Skill[] = [
  {
    id: '1',
    userId: '2',
    userName: 'Sarah Chen',
    userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    skillTitle: 'Web Development',
    category: 'Technology',
    description: 'I can teach modern web development using React, TypeScript, and Node.js. Perfect for beginners who want to build their first web application.',
    timeCommitment: '2-3 hours/week',
    experience: '5 years professional',
    isOffering: true,
    tags: ['React', 'TypeScript', 'Node.js', 'Beginner-friendly']
  },
  {
    id: '2',
    userId: '3',
    userName: 'Marcus Rodriguez',
    userAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    skillTitle: 'Guitar Lessons',
    category: 'Music',
    description: 'Learn acoustic guitar from basics to intermediate. I specialize in fingerpicking and chord progressions. Great for music therapy too.',
    timeCommitment: '1 hour/week',
    experience: '10 years playing',
    isOffering: true,
    tags: ['Acoustic', 'Fingerpicking', 'Beginner', 'Intermediate']
  },
  {
    id: '3',
    userId: '4',
    userName: 'Elena Kowalski',
    userAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    skillTitle: 'Digital Marketing',
    category: 'Business',
    description: 'Want to learn social media marketing and SEO? I can help you understand Instagram, Facebook ads, and Google Analytics.',
    timeCommitment: '2 hours/week',
    experience: '7 years in marketing',
    isOffering: true,
    tags: ['Social Media', 'SEO', 'Analytics', 'Content Strategy']
  },
  {
    id: '4',
    userId: '5',
    userName: 'David Kim',
    userAvatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    skillTitle: 'Photography',
    category: 'Creative',
    description: 'Learn portrait and street photography. I\'ll teach you composition, lighting, and post-processing in Lightroom.',
    timeCommitment: '3 hours/week',
    experience: '8 years professional',
    isOffering: true,
    tags: ['Portrait', 'Street', 'Lightroom', 'Composition']
  },
  {
    id: '5',
    userId: '6',
    userName: 'Priya Sharma',
    userAvatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    skillTitle: 'Cooking Indian Cuisine',
    category: 'Culinary',
    description: 'I\'ll teach you authentic Indian recipes, spice blending, and traditional cooking techniques passed down in my family.',
    timeCommitment: '2 hours/week',
    experience: '15 years cooking',
    isOffering: true,
    tags: ['Spices', 'Traditional', 'Vegetarian', 'Authentic']
  }
];

export function SwipeInterface({ userId }: SwipeInterfaceProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMatched, setIsMatched] = useState(false);
  const [matchedSkill, setMatchedSkill] = useState<Skill | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const currentSkill = mockSkills[currentIndex];

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      // Simulate random matching
      if (Math.random() > 0.6) {
        setMatchedSkill(currentSkill);
        setIsMatched(true);
        setTimeout(() => {
          setIsMatched(false);
          nextCard();
        }, 2000);
        return;
      }
    }
    
    nextCard();
  };

  const nextCard = () => {
    if (currentIndex < mockSkills.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to start
    }
  };

  if (!currentSkill) {
    return (
      <div className="pt-24 px-4 max-w-md mx-auto">
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <User className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No more skills to discover</h3>
          <p className="text-gray-600">Check back later for new skill offers!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 px-4 max-w-md mx-auto relative">
      {isMatched && matchedSkill && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="glass-effect rounded-3xl p-8 mx-4 text-center shadow-2xl border border-white/20 animate-glow">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
              <Heart className="w-8 h-8 text-white fill-current" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 neon-text">It's a Match!</h3>
            <p className="text-gray-300 mb-4">
              You and {matchedSkill.userName} liked each other's skills
            </p>
            <div className="flex items-center justify-center space-x-4">
              <img
                src={matchedSkill.userAvatar}
                alt={matchedSkill.userName}
                className="w-12 h-12 rounded-full object-cover"
              />
              <Heart className="w-6 h-6 text-pink-500 fill-current" />
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="relative">
        <SkillCard skill={currentSkill} ref={cardRef} />
        
        <div className="flex items-center justify-center space-x-6 mt-8">
          <button
            onClick={() => handleSwipe('left')}
            className="w-14 h-14 glass-effect border-2 border-red-500/30 rounded-full flex items-center justify-center shadow-lg hover:shadow-red-500/25 transition-all duration-200 hover:scale-110"
          >
            <X className="w-6 h-6 text-red-400" />
          </button>
          
          <button
            onClick={() => handleSwipe('right')}
            className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-pink-500/50 transition-all duration-200 hover:scale-110 animate-glow"
          >
            <Heart className="w-7 h-7 text-white" />
          </button>
          
          <button
            onClick={() => handleSwipe('right')}
            className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-yellow-500/50 transition-all duration-200 hover:scale-110"
          >
            <Star className="w-6 h-6 text-white" />
          </button>
        </div>
        
        <div className="text-center mt-6 text-gray-400 text-sm">
          {currentIndex + 1} of {mockSkills.length} skills
        </div>
      </div>
    </div>
  );
}