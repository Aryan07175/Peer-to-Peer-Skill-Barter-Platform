import React, { useState } from 'react';
import { Send, ArrowLeft, Phone, Video, Calendar } from 'lucide-react';

interface ChatProps {
  chatId: string | null;
  userId: string;
}

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  type: 'text' | 'system';
}

const mockMessages: Message[] = [
  {
    id: '1',
    senderId: 'system',
    content: 'You matched with Sarah Chen for Web Development!',
    timestamp: '2 hours ago',
    type: 'system'
  },
  {
    id: '2',
    senderId: '2',
    content: 'Hey! I saw you\'re interested in learning web development. I\'d love to help!',
    timestamp: '2 hours ago',
    type: 'text'
  },
  {
    id: '3',
    senderId: '1',
    content: 'That\'s awesome! I\'ve been wanting to learn React for a while now.',
    timestamp: '1 hour ago',
    type: 'text'
  },
  {
    id: '4',
    senderId: '2',
    content: 'Perfect! I can teach you React basics and help you build your first project. When would be a good time?',
    timestamp: '1 hour ago',
    type: 'text'
  },
  {
    id: '5',
    senderId: '1',
    content: 'How about this weekend? I can offer 2 hours and I\'d like to learn about component architecture.',
    timestamp: '30 minutes ago',
    type: 'text'
  },
  {
    id: '6',
    senderId: '2',
    content: 'Sounds great! Looking forward to our session 🚀',
    timestamp: '5 minutes ago',
    type: 'text'
  }
];

export function Chat({ chatId, userId }: ChatProps) {
  const [newMessage, setNewMessage] = useState('');
  const [messages] = useState<Message[]>(mockMessages);
  
  const chatPartner = {
    id: '2',
    name: 'Sarah Chen',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    skill: 'Web Development'
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would add the message to the chat
      setNewMessage('');
    }
  };

  if (!chatId) {
    return (
      <div className="pt-20 px-4 max-w-md mx-auto">
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Send className="w-8 h-8 text-gray-500" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">No chat selected</h3>
          <p className="text-gray-300">Select a match to start chatting</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 max-w-md mx-auto h-screen flex flex-col">
      {/* Header */}
      <div className="glass-effect border-b border-white/10 p-4 flex items-center space-x-3">
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-300" />
        </button>
        
        <img
          src={chatPartner.avatar}
          alt={chatPartner.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        
        <div className="flex-1">
          <h3 className="font-semibold text-white">{chatPartner.name}</h3>
          <p className="text-sm text-blue-400">{chatPartner.skill}</p>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-300 hover:bg-white/10 rounded-full transition-colors">
            <Phone className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-300 hover:bg-white/10 rounded-full transition-colors">
            <Video className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-300 hover:bg-white/10 rounded-full transition-colors">
            <Calendar className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            isOwn={message.senderId === userId}
            partnerAvatar={chatPartner.avatar}
          />
        ))}
      </div>
      
      {/* Input */}
      <div className="glass-effect border-t border-white/10 p-4">
        <div className="flex items-center space-x-3">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 glass-effect border border-white/20 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button
            onClick={handleSendMessage}
            className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:shadow-blue-500/25 transition-all duration-200"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

interface MessageBubbleProps {
  message: Message;
  isOwn: boolean;
  partnerAvatar: string;
}

function MessageBubble({ message, isOwn, partnerAvatar }: MessageBubbleProps) {
  if (message.type === 'system') {
    return (
      <div className="text-center">
        <span className="bg-white/10 text-gray-300 text-sm px-4 py-2 rounded-full">
          {message.content}
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-end space-x-2 ${isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}>
      {!isOwn && (
        <img
          src={partnerAvatar}
          alt="Partner"
          className="w-8 h-8 rounded-full object-cover"
        />
      )}
      
      <div className={`max-w-xs px-4 py-2 rounded-2xl ${
        isOwn
          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
          : 'bg-white/10 text-white'
      }`}>
        <p className="text-sm">{message.content}</p>
      </div>
      
      <div className={`text-xs text-gray-400 ${isOwn ? 'text-right' : ''}`}>
        {message.timestamp}
      </div>
    </div>
  );
}