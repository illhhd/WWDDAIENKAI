import React, { useState } from 'react';
import { Menu, X, Ticket } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Theme } from '../App';

interface NavigationProps {
  theme?: Theme;
}

export const Navigation: React.FC<NavigationProps> = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Concept", href: "#concept" },
    { label: "Floor Guide", href: "#floorguide" },
    { label: "Time Table", href: "#timetable" },
    { label: "VIP Tour", href: "#vip" },
    { label: "Sponsors", href: "#sponsors" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm border-b" style={{ borderColor: 'var(--border-color)', backgroundColor: 'rgba(var(--bg-color), 0.8)' }}>
        <div className="flex justify-between items-stretch h-16 md:h-20">
          
          {/* Logo Section */}
          <div className="flex items-center px-6 border-r" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-color)' }}>
            <div className={`text-xl md:text-2xl font-black tracking-tighter leading-none ${theme === 'print' ? 'font-display italic' : ''}`}>
              WWD<br/><span className="text-[var(--accent-color)]">AIENKAI</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-px" style={{ backgroundColor: 'var(--border-color)' }}>
            {menuItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="flex-1 h-full flex items-center justify-center hover:text-white transition-colors duration-200 text-xs font-bold uppercase tracking-widest"
                style={{ 
                  backgroundColor: 'var(--bg-color)', 
                  color: 'var(--text-color)' 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent-color)';
                  e.currentTarget.style.color = theme === 'flux' ? 'black' : 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--bg-color)';
                  e.currentTarget.style.color = 'var(--text-color)';
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Ticket Button (Desktop) */}
          <div className="hidden md:flex items-center px-6 border-l transition-colors duration-300 group cursor-pointer"
               style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-color)' }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.backgroundColor = 'var(--text-color)';
                 e.currentTarget.querySelector('span')!.style.color = 'var(--bg-color)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.backgroundColor = 'var(--bg-color)';
                 e.currentTarget.querySelector('span')!.style.color = 'var(--text-color)';
               }}
          >
            <span className="font-bold uppercase tracking-widest flex items-center gap-2" style={{ color: 'var(--text-color)' }}>
              <Ticket className="w-4 h-4" />
              Get Tickets
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex items-center px-6 border-l"
            style={{ 
              borderColor: 'var(--border-color)', 
              backgroundColor: 'var(--bg-color)', 
              color: 'var(--text-color)' 
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
            className="fixed inset-0 z-40 pt-20 flex flex-col"
            style={{ backgroundColor: 'var(--bg-color)' }}
          >
             <div className="flex flex-col h-full border-t" style={{ borderColor: 'var(--border-color)' }}>
              {menuItems.map((item, i) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  className="flex-1 flex items-center px-8 border-b text-3xl font-black uppercase tracking-tighter transition-colors italic"
                  style={{ borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={(e) => {
                     e.currentTarget.style.backgroundColor = 'var(--accent-color)';
                     e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                     e.currentTarget.style.backgroundColor = 'transparent';
                     e.currentTarget.style.color = 'var(--text-color)';
                  }}
                >
                  <span className="text-xs font-mono mr-4 opacity-50">0{i+1}</span>
                  {item.label}
                </a>
              ))}
              <div className="p-8">
                 <Button fullWidth size="lg">Get Tickets Now</Button>
              </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};