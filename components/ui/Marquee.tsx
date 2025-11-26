import React from 'react';

interface MarqueeProps {
  text: string;
  className?: string;
  reverse?: boolean;
  repeat?: number;
}

export const Marquee: React.FC<MarqueeProps> = ({ text, className = '', reverse = false, repeat = 20 }) => {
  return (
    <div className={`overflow-hidden w-full flex select-none ${className}`}>
      <div className={`flex whitespace-nowrap w-fit ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        <div className="flex">
          {Array.from({ length: repeat }).map((_, i) => (
            <div key={`a-${i}`} className="flex items-center mx-4">
              <span className="mr-8 font-bold tracking-tighter uppercase">{text}</span>
              <span className="w-2 h-2 bg-current rounded-full opacity-50"></span>
            </div>
          ))}
        </div>
        <div className="flex">
          {Array.from({ length: repeat }).map((_, i) => (
            <div key={`b-${i}`} className="flex items-center mx-4">
              <span className="mr-8 font-bold tracking-tighter uppercase">{text}</span>
              <span className="w-2 h-2 bg-current rounded-full opacity-50"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};