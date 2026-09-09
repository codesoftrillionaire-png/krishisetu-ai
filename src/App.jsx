import React, { useState } from 'react';
import { Home, TrendingUp, Users, Shield, Mic, Globe } from 'lucide-react';
import { t } from './data';
import Dashboard from './components/Dashboard';
import MarketView from './components/MarketView';
import BuyerView from './components/BuyerView';
import FpoView from './components/FpoView';

function App() {
  const [lang, setLang] = useState('en');
  const [activeTab, setActiveTab] = useState('home');
  const [isVoiceActive, setIsVoiceActive] = useState(false);

  const toggleLang = () => setLang(lang === 'en' ? 'hi' : 'en');
  const txt = t[lang];

  return (
    <div className="min-h-screen pb-20 md:pb-0 md:pt-16 max-w-4xl mx-auto bg-gray-50 shadow-xl">
      {/* HEADER */}
      <header className="fixed top-0 w-full max-w-4xl bg-white shadow-sm z-50 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-krishi text-white p-2 rounded-lg">
            <TrendingUp size={24} />
          </div>
          <h1 className="text-xl font-bold text-krishi-dark">KrishiSetu <span className="text-krishi">AI</span></h1>
        </div>
        <button onClick={toggleLang} className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-gray-200">
          <Globe size={16} /> {lang === 'en' ? 'हिन्दी' : 'English'}
        </button>
      </header>

      {/* WARNING BANNER */}
      <div className="bg-yellow-100 text-yellow-800 text-xs text-center py-2 px-4 mt-16 md:mt-4 font-semibold">
        {txt.demoWarning}
      </div>

      {/* MAIN CONTENT */}
      <main className="p-4">
        {activeTab === 'home' && <Dashboard lang={lang} txt={txt} />}
        {activeTab === 'market' && <MarketView lang={lang} txt={txt} />}
        {activeTab === 'buyers' && <BuyerView lang={lang} txt={txt} />}
        {activeTab === 'fpo' && <FpoView lang={lang} txt={txt} />}
      </main>

      {/* VOICE ASSISTANT FLOATING BUTTON */}
      <button 
        onClick={() => setIsVoiceActive(true)}
        className="fixed bottom-24 right-4 md:bottom-8 md:right-8 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center animate-bounce z-40"
      >
        <Mic size={28} />
      </button>

      {/* VOICE MODAL */}
      {isVoiceActive && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl text-center">
            <div className="bg-orange-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
              <Mic size={40} className="text-orange-500 animate-pulse" />
            </div>
            <h3 className="text-lg font-bold mb-4">{txt.voicePrompt}</h3>
            <div className="bg-gray-100 rounded-lg p-3 text-left mb-2 text-sm text-gray-700">
              <strong>Farmer:</strong> "{txt.voiceSimQ}"
            </div>
            <div className="bg-krishi-light border border-krishi text-krishi-dark rounded-lg p-3 text-left mb-6 text-sm">
              <strong>KrishiSetu AI:</strong> {txt.voiceSimA}
            </div>
            <button onClick={() => setIsVoiceActive(false)} className="bg-gray-800 text-white px-6 py-2 rounded-lg font-medium w-full">
              Close / बंद करें
            </button>
          </div>
        </div>
      )}

      {/* MOBILE BOTTOM NAVIGATION */}
      <nav className="fixed bottom-0 w-full max-w-4xl bg-white border-t border-gray-200 flex justify-around py-3 pb-safe z-50">
        <NavButton icon={<Home />} label={txt.home} isActive={activeTab === 'home'} onClick={() => setActiveTab('home')} />
        <NavButton icon={<TrendingUp />} label={txt.market} isActive={activeTab === 'market'} onClick={() => setActiveTab('market')} />
        <NavButton icon={<Users />} label={txt.buyers} isActive={activeTab === 'buyers'} onClick={() => setActiveTab('buyers')} />
        <NavButton icon={<Shield />} label={txt.fpo} isActive={activeTab === 'fpo'} onClick={() => setActiveTab('fpo')} />
      </nav>
    </div>
  );
}

function NavButton({ icon, label, isActive, onClick }) {
  return (
    <button onClick={onClick} className={`flex flex-col items-center gap-1 ${isActive ? 'text-krishi' : 'text-gray-500 hover:text-krishi'}`}>
      {React.cloneElement(icon, { size: 24, className: isActive ? 'stroke-[2.5px]' : '' })}
      <span className="text-[10px] font-semibold">{label}</span>
    </button>
  );
}

export default App;