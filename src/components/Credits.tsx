import React from 'react';
import { Coins, Plus, Minus, Clock, TrendingUp, Award, Calendar } from 'lucide-react';

interface CreditsProps {
  userId: string;
}

interface Transaction {
  id: string;
  type: 'earned' | 'spent';
  amount: number;
  description: string;
  partnerId: string;
  partnerName: string;
  partnerAvatar: string;
  skill: string;
  date: string;
}

const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'earned',
    amount: 2,
    description: 'Taught JavaScript fundamentals',
    partnerId: '2',
    partnerName: 'Emma Wilson',
    partnerAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    skill: 'JavaScript',
    date: 'Today'
  },
  {
    id: '2',
    type: 'spent',
    amount: 1,
    description: 'Learned Spanish conversation',
    partnerId: '3',
    partnerName: 'Carlos Rodriguez',
    partnerAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    skill: 'Spanish',
    date: 'Yesterday'
  },
  {
    id: '3',
    type: 'earned',
    amount: 3,
    description: 'Taught React components',
    partnerId: '4',
    partnerName: 'Lisa Chen',
    partnerAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    skill: 'React',
    date: '2 days ago'
  },
  {
    id: '4',
    type: 'spent',
    amount: 2,
    description: 'Learned guitar techniques',
    partnerId: '5',
    partnerName: 'Mike Johnson',
    partnerAvatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    skill: 'Guitar',
    date: '3 days ago'
  }
];

export function Credits({ userId }: CreditsProps) {
  const creditStats = {
    balance: 12,
    totalEarned: 45,
    totalSpent: 33,
    thisWeekEarned: 5,
    thisWeekSpent: 3
  };

  return (
    <div className="pt-20 px-4 max-w-md mx-auto pb-8">
      {/* Balance Card */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 text-white mb-6 shadow-2xl animate-glow">
        <div className="text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Coins className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-2">{creditStats.balance}</h2>
          <p className="text-white/90">Available Credits</p>
          <p className="text-white/75 text-sm mt-1">1 credit = 1 hour of learning</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-white/10 rounded-2xl p-3 text-center">
            <div className="text-lg font-bold">+{creditStats.thisWeekEarned}</div>
            <div className="text-white/75 text-xs">This week earned</div>
          </div>
          <div className="bg-white/10 rounded-2xl p-3 text-center">
            <div className="text-lg font-bold">-{creditStats.thisWeekSpent}</div>
            <div className="text-white/75 text-xs">This week spent</div>
          </div>
        </div>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="glass-effect rounded-2xl p-4 text-center shadow-lg border border-white/10">
          <div className="w-10 h-10 bg-blue-500/20 rounded-full mx-auto mb-2 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-blue-400" />
          </div>
          <div className="text-lg font-bold text-white">{creditStats.totalEarned}</div>
          <div className="text-xs text-gray-400">Total Earned</div>
        </div>
        
        <div className="glass-effect rounded-2xl p-4 text-center shadow-lg border border-white/10">
          <div className="w-10 h-10 bg-purple-500/20 rounded-full mx-auto mb-2 flex items-center justify-center">
            <Award className="w-5 h-5 text-purple-400" />
          </div>
          <div className="text-lg font-bold text-white">{creditStats.totalSpent}</div>
          <div className="text-xs text-gray-400">Total Spent</div>
        </div>
        
        <div className="glass-effect rounded-2xl p-4 text-center shadow-lg border border-white/10">
          <div className="w-10 h-10 bg-green-500/20 rounded-full mx-auto mb-2 flex items-center justify-center">
            <Clock className="w-5 h-5 text-green-400" />
          </div>
          <div className="text-lg font-bold text-white">{creditStats.balance + creditStats.thisWeekSpent}</div>
          <div className="text-xs text-gray-400">Hours Taught</div>
        </div>
      </div>
      
      {/* Recent Transactions */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white mb-4 neon-text">Recent Activity</h3>
        <div className="space-y-3">
          {mockTransactions.map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))}
        </div>
      </div>
      
      {/* Action Button */}
      <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-2xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2 animate-shimmer relative overflow-hidden">
        <Calendar className="w-5 h-5" />
        <span>Schedule Teaching Session</span>
      </button>
    </div>
  );
}

interface TransactionCardProps {
  transaction: Transaction;
}

function TransactionCard({ transaction }: TransactionCardProps) {
  const isEarned = transaction.type === 'earned';
  
  return (
    <div className="glass-effect rounded-2xl p-4 shadow-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300">
      <div className="flex items-center space-x-3">
        <img
          src={transaction.partnerAvatar}
          alt={transaction.partnerName}
          className="w-12 h-12 rounded-full object-cover"
        />
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-medium text-white">{transaction.partnerName}</h4>
            <div className={`flex items-center space-x-1 ${
              isEarned ? 'text-blue-400' : 'text-purple-400'
            }`}>
              {isEarned ? <Plus className="w-4 h-4" /> : <Minus className="w-4 h-4" />}
              <span className="font-bold">{transaction.amount}</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-300 mb-1">{transaction.description}</p>
          
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span className={`px-2 py-1 rounded-full ${
              isEarned ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
            }`}>
              {transaction.skill}
            </span>
            <span>{transaction.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}