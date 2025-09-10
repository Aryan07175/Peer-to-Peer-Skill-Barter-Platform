import React, { forwardRef } from 'react';
import { Clock, Star, MapPin, Tag } from 'lucide-react';

interface SkillCardProps {
  skill: {
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
  };
}

export const SkillCard = forwardRef<HTMLDivElement, SkillCardProps>(
  ({ skill }, ref) => {
    return (
      <div
        ref={ref}
        className="glass-effect rounded-3xl shadow-2xl overflow-hidden max-w-sm mx-auto border border-white/10 hover:border-blue-500/30 transition-all duration-300"
      >
        <div className="relative">
          <img
            src={skill.userAvatar}
            alt={skill.userName}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <h2 className="text-2xl font-bold text-white mb-1">{skill.skillTitle}</h2>
            <p className="text-white/90 text-lg">{skill.userName}</p>
          </div>
          
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              skill.isOffering 
                ? 'bg-blue-500 text-white shadow-lg' 
                : 'bg-blue-500 text-white'
            }`}>
              {skill.isOffering ? 'Teaching' : 'Learning'}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-4 text-sm text-gray-300">
            <div className="flex items-center space-x-1">
              <Tag className="w-4 h-4" />
              <span>{skill.category}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{skill.timeCommitment}</span>
            </div>
          </div>
          
          <p className="text-gray-200 leading-relaxed mb-4">
            {skill.description}
          </p>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm text-gray-300">{skill.experience}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skill.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/10 text-gray-200 text-xs rounded-full border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
);