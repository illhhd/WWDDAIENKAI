import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Concept } from './components/Concept';
import { FloorGuide } from './components/FloorGuide';
import { Timetable } from './components/Timetable';
import { VipTour } from './components/VipTour';
import { Sponsors } from './components/Sponsors';
import { TicketFooter } from './components/TicketFooter';
import { Marquee } from './components/ui/Marquee';

export type Theme = 'solid' | 'flux' | 'print';

const ThemeSwitcher: React.FC<{ current: Theme; onSwitch: (t: Theme) => void }> = ({ current, onSwitch }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
      {/* Theme Toggles */}
      <div className="bg-white/10 backdrop-blur-md p-1 rounded-full flex flex-col gap-1 border border-white/20 shadow-2xl">
        <button 
          onClick={() => onSwitch('solid')}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all ${current === 'solid' ? 'bg-[#E60012] text-white scale-110' : 'bg-black text-white hover:bg-gray-800'}`}
          title="Solid (Default)"
        >
          A
        </button>
        <button 
          onClick={() => onSwitch('flux')}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all ${current === 'flux' ? 'bg-[#CCFF00] text-black scale-110' : 'bg-black text-[#CCFF00] hover:bg-gray-800'}`}
          title="Flux (Acid)"
        >
          B
        </button>
        <button 
          onClick={() => onSwitch('print')}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all ${current === 'print' ? 'bg-[#1a1a1a] text-[#F2F2F2] scale-110' : 'bg-[#F2F2F2] text-black hover:bg-gray-200'}`}
          title="Print (Editorial)"
        >
          C
        </button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('solid');

  useEffect(() => {
    // Set CSS variable for styling when theme changes
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen transition-colors duration-500 selection:bg-[var(--accent-color)] selection:text-black">
      <Navigation theme={theme} />
      <ThemeSwitcher current={theme} onSwitch={setTheme} />
      
      <main>
        <Hero theme={theme} />
        
        <Concept theme={theme} />
        
        <div className="border-y" style={{ borderColor: 'var(--border-color)' }}>
          <Marquee 
            text="FASHION / ART / DESIGN / MUSIC / FOOD / CULTURE" 
            className="py-2 text-sm" 
            repeat={5}
          />
        </div>
        
        <FloorGuide theme={theme} />
        
        <Timetable theme={theme} />
        
        <VipTour theme={theme} />
        
        <Sponsors theme={theme} />
      </main>
      <TicketFooter theme={theme} />
    </div>
  );
};

export default App;