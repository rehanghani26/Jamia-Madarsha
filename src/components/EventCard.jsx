import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function EventCard({ event }) {
  const { title, description, eventDate, location, posterImage } = event;

  const parsedDate = new Date(eventDate);
  const monthName = parsedDate.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
  const dayNum = parsedDate.getDate();
  const yearNum = parsedDate.getFullYear();

  const formattedTime = parsedDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const isUpcoming = parsedDate.getTime() > Date.now();
  const placeholderPoster = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800';

  return (
    <div className="premium-card rounded-lg shadow-sm overflow-hidden flex flex-col h-full md:flex-row group">
      
      {/* Poster Image */}
      <div className="relative h-48 md:h-auto md:w-48 bg-slate-100 dark:bg-slate-900 shrink-0 overflow-hidden">
        <img
          src={posterImage || placeholderPoster}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Status Badge */}
        <div className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm ${
          isUpcoming ? 'bg-[#0A4D27] dark:bg-emerald-700 text-white' : 'bg-slate-500 text-white'
        }`}>
          {isUpcoming ? 'Upcoming' : 'Past Event'}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow md:flex-row items-stretch gap-5">
        
        {/* Date Stamp Block (Left Side on Desktop) */}
        <div className="flex flex-row md:flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#EAE3CF]/60 dark:border-slate-700 pb-3 md:pb-0 md:pr-5 shrink-0 text-center gap-2">
          <div className="w-12 md:w-16 h-12 md:h-16 rounded bg-[#0A4D27]/10 dark:bg-emerald-950/30 flex flex-col items-center justify-center text-[#0A4D27] dark:text-emerald-400">
            <span className="text-xl md:text-2xl font-bold leading-none">{dayNum}</span>
            <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">{monthName}</span>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{yearNum}</span>
        </div>

        {/* Textual Details */}
        <div className="flex flex-col flex-grow justify-between">
          <div>
            {/* Title */}
            <h3 className="text-md font-bold text-slate-900 dark:text-white group-hover:text-[#0A4D27] dark:group-hover:text-emerald-450 transition-colors leading-snug mb-2 font-serif">
              {title}
            </h3>

            {/* Description */}
            <p className="text-slate-700 dark:text-slate-300 text-xs font-light leading-relaxed line-clamp-3 mb-4">
              {description}
            </p>
          </div>

          {/* Time and Location markers */}
          <div className="flex flex-col gap-2 pt-2 border-t border-slate-100 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C5A85C] dark:text-amber-500 shrink-0" />
              {formattedTime}
            </span>
            <span className="flex items-start gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A85C] dark:text-amber-500 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{location}</span>
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}
