import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ArrowRight } from 'lucide-react';
import { Event } from '../types';

const events: Event[] = [
  { id: '1', title: 'Night of Worship', date: 'OCT 24', location: 'The Warehouse', image: 'https://images.unsplash.com/photo-1506459225024-1428097a7e18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
  { id: '2', title: 'Street Outreach', date: 'NOV 02', location: 'Downtown Plaza', image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
  { id: '3', title: 'Creative Workshop', date: 'NOV 15', location: 'Studio B', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
];

interface EventsProps {
  scrollOffset?: number;
  onViewCalendar?: () => void;
}

const Events: React.FC<EventsProps> = ({ scrollOffset, onViewCalendar }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const event = events[0]; // Only show the next event

  return (
    <section className="w-full bg-brand-black relative">
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`
          relative w-full overflow-hidden 
          transition-all duration-700 ease-in-out
          cursor-pointer group border-y border-white/10
          ${isExpanded ? 'h-[70vh]' : 'h-[50vh]'}
        `}
      >
        {/* Background Image */}
        <img 
          src={event.image} 
          alt={event.title} 
          className={`
            absolute inset-0 w-full h-full object-cover transition-transform duration-1000
            ${isExpanded ? 'scale-105 grayscale-0 opacity-60' : 'scale-100 grayscale opacity-50 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-70'}
          `}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-transparent to-transparent" />

        {/* View Calendar Button (Top Left) */}
        {onViewCalendar && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onViewCalendar();
            }}
            className="absolute top-8 left-8 z-30 flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white hover:bg-brand-lime hover:text-black hover:border-brand-lime transition-all duration-300 group/btn"
          >
            <Calendar className="w-4 h-4" />
            <span className="hidden md:inline">View Calendar</span>
            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
          </button>
        )}

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
          <div className="max-w-4xl relative z-10 tech-reveal">
            
            {/* Header Badge */}
            <div className="flex items-center gap-4 mb-6">
               <span className="bg-brand-orange text-black font-bold text-sm px-3 py-1 transform -skew-x-12 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                 NEXT UP
               </span>
               <span className="text-brand-lime font-mono text-xs tracking-widest border border-brand-lime/30 px-2 py-1 rounded-full bg-brand-black/50 backdrop-blur-md">
                 {event.date} • 2024 SEASON
               </span>
            </div>

            {/* Title */}
            <h2 className={`
              text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white uppercase leading-[0.9] mb-4 
              transition-all duration-500 drop-shadow-2xl
              ${isExpanded ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400' : 'group-hover:text-brand-orange'}
            `}>
              {event.title}
            </h2>

            {/* Location & Details */}
            <div className={`flex items-center gap-6 text-gray-300 mb-6 transition-all duration-500 ${isExpanded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-80'}`}>
               <div className="flex items-center gap-2">
                 <MapPin className="w-5 h-5 text-brand-purple" />
                 <span className="text-lg font-light tracking-wide">{event.location}</span>
               </div>
               <div className="h-1 w-1 bg-gray-500 rounded-full" />
               <div className="flex items-center gap-2">
                 <Calendar className="w-5 h-5 text-brand-lime" />
                 <span className="text-lg font-light tracking-wide">Doors Open 7:00PM</span>
               </div>
            </div>

            {/* Expanded Content */}
            <div className={`
              overflow-hidden transition-all duration-700 ease-in-out border-l-2 border-brand-orange pl-6
              ${isExpanded ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}
            `}>
              <p className="text-xl text-gray-200 font-light leading-relaxed max-w-2xl mb-6">
                Join us for a night that sets the tone for the entire month. Expect high energy worship, real community, and a word that hits home. Bring the crew.
              </p>
              <button className="bg-white text-black px-8 py-3 font-bold uppercase tracking-widest hover:bg-brand-lime transition-colors flex items-center gap-2">
                Get Tickets <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Expand Indicator */}
          <div className={`absolute bottom-8 right-8 md:bottom-16 md:right-16 transition-all duration-500 ${isExpanded ? 'rotate-180' : 'group-hover:translate-y-2'}`}>
            <ChevronDown className={`w-8 h-8 ${isExpanded ? 'text-brand-orange' : 'text-gray-500'}`} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Events;