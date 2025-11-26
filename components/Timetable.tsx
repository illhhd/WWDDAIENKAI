import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ScheduleItem } from '../types';
import { Theme } from '../App';

interface TimetableProps {
  theme?: Theme;
}

const scheduleData: ScheduleItem[] = [
  { time: "10:30", title: "OPENING KEYNOTE", speaker: "Kaname Murakami", type: "talk", floor: "6F" },
  { time: "11:00", title: "Industry Analysis 2026", speaker: "WWD Editor in Chief", type: "talk", floor: "6F" },
  { time: "12:00", title: "DJ Set: Daytime Groove", speaker: "DJ TOKYO", type: "dj", floor: "5F" },
  { time: "13:30", title: "Brand Talk: Future of Retail", speaker: "Special Guest", type: "talk", floor: "6F" },
  { time: "14:00", title: "Zine Workshop Start", type: "performance", floor: "4F" },
  { time: "15:00", title: "Global Fashion Trends", speaker: "Panel Discussion", type: "talk", floor: "6F" },
  { time: "17:00", title: "NETWORKING PARTY", type: "performance", floor: "5F" },
  { time: "19:00", title: "CLOSING TALK", speaker: "Secret Guest", type: "talk", floor: "6F" },
  { time: "21:30", title: "AFTER PARTY @ Robin Club", floor: "VIP", type: "performance" }
];

export const Timetable: React.FC<TimetableProps> = () => {
  return (
    <section id="timetable" className="py-24 border-t" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)', borderColor: 'var(--border-color)' }}>
      <div className="container mx-auto px-6">
        <SectionTitle title="Time Table" subtitle="Schedule" align="center" />

        <div className="border-t-2 border-[var(--accent-color)]">
          {/* Header */}
          <div className="grid grid-cols-12 gap-0 border-b text-xs font-bold uppercase tracking-widest opacity-60 bg-[var(--secondary-bg)]" style={{ borderColor: 'var(--border-color)' }}>
            <div className="col-span-2 p-4 border-r" style={{ borderColor: 'var(--border-color)' }}>Time</div>
            <div className="col-span-2 p-4 border-r" style={{ borderColor: 'var(--border-color)' }}>Floor</div>
            <div className="col-span-6 p-4 border-r" style={{ borderColor: 'var(--border-color)' }}>Content</div>
            <div className="col-span-2 p-4">Type</div>
          </div>

          {/* Body */}
          {scheduleData.map((item, index) => (
            <div 
              key={index} 
              className="grid grid-cols-12 gap-0 border-b transition-colors group items-stretch hover:bg-[var(--secondary-bg)]"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <div className="col-span-2 p-4 border-r font-mono font-bold flex items-center text-[var(--accent-color)]" style={{ borderColor: 'var(--border-color)' }}>
                {item.time}
              </div>
              <div className="col-span-2 p-4 border-r flex items-center" style={{ borderColor: 'var(--border-color)' }}>
                <span className={`text-xs font-bold px-2 py-1 uppercase tracking-wider w-fit`}
                  style={{ 
                    backgroundColor: item.floor === 'VIP' ? 'var(--accent-color)' : item.floor === '6F' ? 'var(--text-color)' : 'var(--secondary-bg)',
                    color: item.floor === 'VIP' ? '#fff' : item.floor === '6F' ? 'var(--bg-color)' : 'var(--text-color)'
                  }}
                >
                    {item.floor}
                </span>
              </div>
              <div className="col-span-6 p-4 border-r flex flex-col justify-center" style={{ borderColor: 'var(--border-color)' }}>
                <h3 className="font-bold text-lg leading-tight group-hover:text-[var(--accent-color)] transition-colors uppercase font-display">
                  {item.title}
                </h3>
                {item.speaker && (
                  <p className="text-sm opacity-60 mt-1">
                     <span className="inline-block w-2 h-2 border border-current mr-2 rotate-45"></span>
                     {item.speaker}
                  </p>
                )}
              </div>
              <div className="col-span-2 p-4 flex items-center text-xs opacity-50 uppercase tracking-widest">
                {item.type}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};