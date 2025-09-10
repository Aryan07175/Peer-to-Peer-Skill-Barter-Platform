import React, { useState } from 'react';
import { Edit3, Plus, Star, Clock, MapPin, Award } from 'lucide-react';

interface ProfileProps {
  userId: string;
}

export function Profile({ userId }: ProfileProps) {
  const [isEditing, setIsEditing] = useState(false);

  const profile = {
    id: userId,
    name: 'Alex Johnson',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    bio: 'Passionate learner and teacher. Love sharing knowledge and discovering new skills!',
    location: 'San Francisco, CA',
    creditsBalance: 12,
    totalHoursTaught: 45,
    totalHoursLearned: 33,
    skillsOffering: [
      { id: '1', title: 'JavaScript Programming', category: 'Technology', level: 'Advanced' },
      { id: '2', title: 'Guitar Playing', category: 'Music', level: 'Intermediate' },
    ],
    skillsWanted: [
      { id: '3', title: 'Spanish Conversation', category: 'Language', level: 'Beginner' },
      { id: '4', title: 'Photography', category: 'Creative', level: 'Intermediate' },
    ]
  };

  return (
    <div className="pt-20 px-4 max-w-md mx-auto pb-8">
      <div className="glass-effect rounded-3xl shadow-2xl overflow-hidden border border-white/10">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="absolute top-4 right-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
          >
            <Edit3 className="w-5 h-5" />
          </button>
          
          <div className="text-center">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white/30 object-cover"
            />
            <h1 className="text-2xl font-bold mb-1">{profile.name}</h1>
            <div className="flex items-center justify-center space-x-1 text-white/90">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{profile.location}</span>
            </div>
          </div>
        </div>
        
        {/* Bio */}
        <div className="p-6 border-b border-white/10">
          <p className="text-gray-300 leading-relaxed text-center">{profile.bio}</p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 p-6 border-b border-white/10">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full mx-auto mb-2 flex items-center justify-center">
              <Award className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-white">{profile.creditsBalance}</div>
            <div className="text-xs text-gray-400">Credits</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full mx-auto mb-2 flex items-center justify-center">
              <Star className="w-6 h-6 text-purple-400" />
            </div>
            <div className="text-2xl font-bold text-white">{profile.totalHoursTaught}</div>
            <div className="text-xs text-gray-400">Hours Taught</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-full mx-auto mb-2 flex items-center justify-center">
              <Clock className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white">{profile.totalHoursLearned}</div>
            <div className="text-xs text-gray-400">Hours Learned</div>
          </div>
        </div>
      </div>
      
      {/* Skills Offering */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Skills I Teach</h3>
          <button className="p-2 text-blue-400 hover:bg-blue-500/20 rounded-lg transition-colors">
            <Plus className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-3">
          {profile.skillsOffering.map((skill) => (
            <SkillItem key={skill.id} skill={skill} type="offering" />
          ))}
        </div>
      </div>
      
      {/* Skills Wanted */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Skills I Want to Learn</h3>
          <button className="p-2 text-purple-400 hover:bg-purple-500/20 rounded-lg transition-colors">
            <Plus className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-3">
          {profile.skillsWanted.map((skill) => (
            <SkillItem key={skill.id} skill={skill} type="wanted" />
          ))}
        </div>
      </div>
    </div>
  );
}

interface SkillItemProps {
  skill: {
    id: string;
    title: string;
    category: string;
    level: string;
  };
  type: 'offering' | 'wanted';
}

function SkillItem({ skill, type }: SkillItemProps) {
  const colorClass = type === 'offering' 
    ? 'glass-effect border-blue-500/20' 
    : 'glass-effect border-purple-500/20';
  
  const badgeColor = type === 'offering' 
    ? 'bg-blue-500 text-white' 
    : 'bg-purple-500 text-white';

  return (
    <div className={`${colorClass} border rounded-2xl p-4 hover:border-opacity-50 transition-all duration-300`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h4 className="font-semibold text-white mb-1">{skill.title}</h4>
          <div className="flex items-center space-x-2 text-sm text-gray-300">
            <span>{skill.category}</span>
            <span>•</span>
            <span className={`px-2 py-1 ${badgeColor} rounded-full text-xs`}>
              {skill.level}
            </span>
          </div>
        </div>
        <button className="p-2 text-gray-400 hover:text-white transition-colors">
          <Edit3 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}