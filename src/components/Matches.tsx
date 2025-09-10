import React from 'react';
import { MessageCircle, Calendar, Star, Clock } from 'lucide-react';

interface MatchesProps {
  userId: string;
  onOpenChat: (chatId: string) => void;
}

interface Match {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  skillMatched: string;
  matchedAt: string;
  lastMessage?: string;
  status: 'new' | 'chatting' | 'scheduled' | 'completed';
}

const mockMatches: Match[] = [
  {
    id: '1',
    userId: '2',
    userName: 'Sarah Chen',
    userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    skillMatched: 'Web Development',
    matchedAt: '2 hours ago',
    lastMessage: 'Looking forward to our session!',
    status: 'chatting'
  },
  {
    id: '2',
    userId: '3',
    userName: 'Marcus Rodriguez',
    userAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    skillMatched: 'Guitar Lessons',
    matchedAt: '1 day ago',
    status: 'scheduled'
  },
  {
    id: '3',
    userId: '4',
    userName: 'Elena Kowalski',
    userAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    skillMatched: 'Digital Marketing',
    matchedAt: '3 days ago',
    lastMessage: 'Thanks for the great session!',
    status: 'completed'
  },
  {
    id: '4',
    userId: '5',
    userName: 'David Kim',
    userAvatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    skillMatched: 'Photography',
    matchedAt: '5 minutes ago',
    status: 'new'
  }
];

export function Matches({ userId, onOpenChat }: MatchesProps) {
  return (
    <div className="pt-20 px-4 max-w-md mx-auto pb-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-2 neon-text">Your Matches</h1>
        <p className="text-gray-300">Connect with people who want to exchange skills</p>
      </div>
      
      <div className="space-y-4">
        {mockMatches.map((match) => (
          <MatchCard
            key={match.id}
            match={match}
            onOpenChat={onOpenChat}
          />
        ))}
      </div>
      
      {mockMatches.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Star className="w-8 h-8 text-gray-500" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">No matches yet</h3>
          <p className="text-gray-300">Start swiping to find skill exchange partners!</p>
        </div>
      )}
    </div>
  );
}

interface MatchCardProps {
  match: Match;
  onOpenChat: (chatId: string) => void;
}

function MatchCard({ match, onOpenChat }: MatchCardProps) {
  const getStatusBadge = () => {
    switch (match.status) {
      case 'new':
        return <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">New Match!</span>;
      case 'scheduled':
        return <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full border border-purple-500/30">Scheduled</span>;
      case 'completed':
        return <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">Completed</span>;
      default:
        return null;
    }
  };

  return (
    <div className="glass-effect rounded-2xl shadow-lg border border-white/10 p-4 hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
      <div className="flex items-center space-x-4">
        <img
          src={match.userAvatar}
          alt={match.userName}
          className="w-16 h-16 rounded-full object-cover"
        />
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-white">{match.userName}</h3>
            {getStatusBadge()}
          </div>
          
          <p className="text-sm text-blue-400 font-medium mb-1">{match.skillMatched}</p>
          
          {match.lastMessage ? (
            <p className="text-sm text-gray-300 truncate">{match.lastMessage}</p>
          ) : (
            <p className="text-sm text-gray-400">Matched {match.matchedAt}</p>
          )}
        </div>
      </div>
      
      <div className="flex items-center space-x-3 mt-4">
        <button
          onClick={() => onOpenChat(match.id)}
          className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-xl font-medium flex items-center justify-center space-x-2 hover:shadow-blue-500/25 transition-all duration-200"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Chat</span>
        </button>
        
        <button className="flex-1 bg-white/10 text-gray-300 py-2 rounded-xl font-medium flex items-center justify-center space-x-2 hover:bg-white/20 transition-colors">
          <Calendar className="w-4 h-4" />
          <span>Schedule</span>
        </button>
      </div>
    </div>
  );
}