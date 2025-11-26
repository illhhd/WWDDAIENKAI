import React from 'react';
import { motion } from 'framer-motion';
import { Marquee } from './ui/Marquee';
import { Theme } from '../App';

interface HeroProps {
  theme: Theme;
}

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  
  // Theme 1: SOLID (Original)
  if (theme === 'solid') {
    return (
      <section className="relative min-h-screen flex flex-col pt-20 overflow-hidden" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-gradient-to-br from-[var(--accent-color)] to-transparent opacity-10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="flex-1 flex flex-col justify-center items-center relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-4 left-0 w-full px-6 flex justify-between items-start font-mono text-xs text-gray-500 uppercase tracking-widest"
          >
             <div>
               <p>WWDJAPAN Presents</p>
               <p>Vol.1</p>
             </div>
             <div className="text-right">
               <p>Tokyo, Japan</p>
               <p>Shibuya Stream Hall</p>
             </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[18vw] leading-[0.8] font-black tracking-tighter text-center mix-blend-difference select-none whitespace-nowrap"
            style={{ color: '#fff' }}
          >
            WW<br/>DAI<br/>ENKAI
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 flex flex-col md:flex-row items-center gap-4 md:gap-12"
          >
            <div className="px-4 py-2 text-xl font-bold font-mono rotate-2 bg-[var(--accent-color)] text-white">
              2026.02.18
            </div>
            <p className="text-sm md:text-base font-bold tracking-widest uppercase text-[var(--text-color)]">
              New Media. New Community.
            </p>
          </motion.div>
        </div>

        <div className="relative z-20 border-t border-[var(--border-color)] bg-[var(--bg-color)]">
          <Marquee text="New Media. New Community. 2026." className="text-[var(--accent-color)] text-4xl py-4" />
        </div>
      </section>
    );
  }

  // Theme 2: FLUX (Cyber/Acid)
  if (theme === 'flux') {
    return (
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-[#CCFF00] font-mono">
         {/* Grid Background */}
         <div className="absolute inset-0 opacity-20" 
              style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
         </div>

         <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           className="absolute inset-0 pointer-events-none"
         >
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#CCFF00] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20"></div>
         </motion.div>

         <div className="relative z-10 w-full max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
               <div className="inline-block border border-[#CCFF00] px-3 py-1 text-xs mb-6">SYSTEM: ONLINE</div>
               <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tighter mb-6">
                 WW<br/>
                 <span className="text-white">DAI</span><br/>
                 ENKAI
               </h1>
               <p className="text-white/70 max-w-md mb-8 text-sm">
                 Loading Protocol: New Media Integration.<br/>
                 Target: Shibuya Stream Hall.<br/>
                 Date: 2026.02.18
               </p>
               <button className="bg-[#CCFF00] text-black px-8 py-4 font-bold hover:bg-white transition-colors">
                 INITIALIZE SEQUENCE ->
               </button>
            </motion.div>

            <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ delay: 0.3 }}
               className="relative"
            >
               <div className="border border-[#CCFF00]/30 p-2 bg-black/50 backdrop-blur-sm">
                  <div className="aspect-square bg-[#111] flex items-center justify-center relative overflow-hidden group">
                     <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50 mix-blend-screen group-hover:scale-110 transition-transform duration-700"></div>
                     <div className="relative z-10 text-center">
                        <div className="text-4xl font-bold text-white mb-2">vol.01</div>
                        <div className="text-[#CCFF00] animate-pulse">Awaiting Input</div>
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>

         <div className="absolute bottom-0 w-full border-t border-[#CCFF00]/30 bg-black/80 backdrop-blur">
            <Marquee text="/// SYSTEM OVERRIDE /// NEW COMMUNITY ///" className="py-3 text-[#CCFF00] text-sm" />
         </div>
      </section>
    );
  }

  // Theme 3: PRINT (Editorial)
  return (
    <section className="relative min-h-screen flex flex-col bg-[#F2F2F2] text-[#1a1a1a]">
      <div className="flex-1 container mx-auto px-6 pt-32 pb-12 grid grid-cols-12 gap-6 relative">
         
         <div className="col-span-12 md:col-span-8 relative z-10">
            <motion.div 
               initial={{ y: 30, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 1, ease: "easeOut" }}
            >
               <span className="block text-sm uppercase tracking-[0.3em] mb-6 text-[#B83A24] font-bold">The Inaugural Event</span>
               <h1 className="font-display text-7xl md:text-9xl leading-[0.9] mb-12 italic">
                 WWD<br/>
                 Daienkai<br/>
                 <span className="text-transparent text-stroke-black" style={{ WebkitTextStroke: '2px #1a1a1a' }}>2026</span>
               </h1>
            </motion.div>
         </div>

         <div className="col-span-12 md:col-span-4 flex flex-col justify-end items-start md:items-end pb-12">
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="text-right hidden md:block"
            >
               <p className="font-display italic text-2xl mb-2">February 18th</p>
               <p className="text-sm text-gray-500 uppercase tracking-widest">Shibuya Stream Hall</p>
            </motion.div>
            
            <motion.div 
               initial={{ scaleY: 0 }}
               animate={{ scaleY: 1 }}
               transition={{ delay: 0.2, duration: 1 }}
               className="absolute top-0 right-6 w-px h-full bg-[#1a1a1a]/20 hidden md:block origin-top"
            ></motion.div>
         </div>

         <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="col-span-12 relative h-[40vh] md:h-[50vh] mt-auto"
         >
            <img 
               src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2000&auto=format&fit=crop" 
               alt="Fashion Crowd" 
               className="w-full h-full object-cover grayscale contrast-125"
            />
            <div className="absolute bottom-0 left-0 bg-[#B83A24] text-white p-6 md:p-10">
               <p className="font-display text-2xl md:text-4xl italic">New Media. New Community.</p>
            </div>
         </motion.div>
      </div>
    </section>
  );
};