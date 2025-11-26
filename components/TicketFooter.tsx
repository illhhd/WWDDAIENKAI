import React from 'react';
import { Button } from './ui/Button';
import { Theme } from '../App';

interface TicketFooterProps {
  theme?: Theme;
}

export const TicketFooter: React.FC<TicketFooterProps> = ({ theme }) => {
  return (
    <footer className="pt-24 pb-12 border-t" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)', borderColor: 'var(--accent-color)' }}>
      <div className="container mx-auto px-6 text-center">
        
        <div className="mb-24">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter font-display">ticket</h2>
          <div className="flex flex-col gap-4 max-w-md mx-auto">
            <Button size="lg" className="w-full">
               Get Tickets Now
            </Button>
            <Button variant="secondary" size="lg" className="w-full">
               Sponsor / Press Inquiry
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t pt-12 text-xs opacity-60" style={{ borderColor: 'var(--border-color)' }}>
           <div className="text-left space-y-2 mb-8 md:mb-0">
             <p>主催クレジット:</p>
             <p>INFAS PUBLICATIONS (WWDJAPAN / STUDIO VOICE / TOKION)</p>
             <p className="mt-4">
               Copyright© 2026 INFAS PUBLICATIONS WWDJAPAN All rights reserved.<br/>
               Contains material reprinted by permission from WWD© 2018 FAIRCHILD PUBLISHING, LLC.
             </p>
           </div>
           
           <div className="flex gap-6 uppercase tracking-wider">
             <a href="#" className="hover:text-[var(--accent-color)] transition-colors">X (Twitter)</a>
             <a href="#" className="hover:text-[var(--accent-color)] transition-colors">Instagram</a>
             <a href="#" className="hover:text-[var(--accent-color)] transition-colors">LINE</a>
             <a href="#" className="hover:text-[var(--accent-color)] transition-colors">Privacy Policy</a>
           </div>
        </div>
      </div>
    </footer>
  );
};