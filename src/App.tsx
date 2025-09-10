import React, { useState } from 'react';
import { StudyEnvironment } from './components/StudyEnvironment';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SwipeInterface } from './components/SwipeInterface';
import { Profile } from './components/Profile';
import { Matches } from './components/Matches';
import { Chat } from './components/Chat';
import { Credits } from './components/Credits';

type Page = 'home' | 'swipe' | 'profile' | 'matches' | 'chat' | 'credits';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentUserId, setCurrentUserId] = useState('1');
  const [activeChatId, setActiveChatId] = useState<string | null>(null);

  const handleStartMatching = () => {
    setCurrentPage('swipe');
  };

  const handleOpenChat = (chatId: string) => {
    setActiveChatId(chatId);
    setCurrentPage('chat');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onStartMatching={handleStartMatching} />;
      case 'swipe':
        return <SwipeInterface userId={currentUserId} />;
      case 'profile':
        return <Profile userId={currentUserId} />;
      case 'matches':
        return <Matches userId={currentUserId} onOpenChat={handleOpenChat} />;
      case 'chat':
        return <Chat chatId={activeChatId} userId={currentUserId} />;
      case 'credits':
        return <Credits userId={currentUserId} />;
      default:
        return <Hero onStartMatching={handleStartMatching} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      <StudyEnvironment />
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="pb-20">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;