import React from 'react';
import { motion } from 'framer-motion';
import { Theme } from '../App';

interface ConceptProps {
  theme?: Theme;
}

export const Concept: React.FC<ConceptProps> = ({ theme }) => {
  return (
    <section id="concept" className="py-32 relative overflow-hidden border-t" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)', borderColor: 'var(--border-color)' }}>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-12 gap-12">
          
          <div className="md:col-span-4">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="sticky top-32"
             >
                <h2 className="text-8xl font-black leading-none mb-4 uppercase tracking-tighter text-stroke" style={{ color: 'var(--secondary-bg)' }}>
                  Con<br/>cept
                </h2>
                <div className="w-20 h-2 mb-8 bg-[var(--accent-color)]"></div>
                <p className="font-bold text-xl leading-relaxed font-display">
                  New Media.<br/>
                  New Community.<br/>
                  2026.
                </p>
             </motion.div>
          </div>

          <div className="md:col-span-8 space-y-16">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-4 text-[var(--accent-color)]">Background</h3>
              <p className="text-2xl md:text-3xl font-bold leading-relaxed mb-8 font-display">
                あらゆる領域がテクノロジーによって<br/>最適化される時代、<br/>
                <span className="px-2 bg-[var(--text-color)] text-[var(--bg-color)]">人間の感性や人との対話</span>が、<br/>
                少しずつ薄れはじめているかもしれません。
              </p>
              <p className="opacity-60 leading-loose">
                だからこそ、ファッション、アート、デザイン、フード、映画、音楽 ——<br/>
                感性や文化的な文脈を理解し、語り合うことのできる人や場へのニーズは、これまで以上に高まっていくでしょう。<br/><br/>
                感性と文化が交差する都市・渋谷から、 “センス”や“カルチャー”を共に学び、共有し、体験する場を生み出す。
              </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="border-2 p-8 md:p-16 relative overflow-hidden group hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-colors duration-500"
               style={{ borderColor: 'var(--text-color)' }}
            >
               <div className="absolute -right-10 -bottom-10 text-[200px] leading-none opacity-10 font-black italic group-hover:opacity-20 transition-opacity text-[var(--accent-color)]">
                 "
               </div>
               
               <h3 className="text-3xl md:text-5xl font-black text-center mb-8 leading-tight font-display">
                 「本音で<br/>語り合える状態」<br/>をつくること。
               </h3>
               <p className="text-center font-bold text-lg md:text-xl tracking-widest uppercase">
                 That is <span className="underline decoration-4 underline-offset-4 decoration-[var(--accent-color)]">DAIENKAI</span>.
               </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};