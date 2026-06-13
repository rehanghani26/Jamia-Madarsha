import React from 'react';
import { Book, Download, ExternalLink, Calendar, Languages } from 'lucide-react';

export default function PublicationCard({ publication }) {
  const { title, description, category, language, author, publicationDate, googleDriveLink } = publication;

  const formattedDate = new Date(publicationDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });

  return (
    <div className="premium-card p-5 flex flex-col h-full hover:shadow-md transition-all group">
      
      {/* Category Badge & Book Icon */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100 dark:border-slate-700 shrink-0">
        <span className="bg-[#0A4D27]/10 dark:bg-emerald-950/30 text-[#0A4D27] dark:text-emerald-400 text-xs font-bold px-2 py-0.5 rounded">
          {category}
        </span>
        <Book className="w-5 h-5 text-[#C5A85C] dark:text-amber-500" />
      </div>

      {/* Book Metadata details */}
      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3 shrink-0">
        <span className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5 text-[#C5A85C] dark:text-amber-500" />
          {formattedDate}
        </span>
        <span className="flex items-center gap-1">
          <Languages className="w-3.5 h-3.5 text-[#C5A85C] dark:text-amber-500" />
          {language}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-md font-bold text-slate-900 dark:text-white group-hover:text-[#0A4D27] dark:group-hover:text-emerald-450 transition-colors leading-snug mb-2 font-serif line-clamp-2">
        {title}
      </h3>

      {/* Author Details */}
      <span className="block text-xs font-semibold text-[#C5A85C] dark:text-amber-500/90 mb-3 shrink-0">
        By {author}
      </span>

      {/* Description */}
      <div className="flex-grow">
        <p className="text-slate-700 dark:text-slate-300 text-xs font-light leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Drive Action link buttons */}
      <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between gap-3 shrink-0">
        <a
          href={googleDriveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-900 bg-[#E5C05E] hover:bg-[#D4AF37] rounded transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          View on Drive
        </a>
        <a
          href={googleDriveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-2 text-slate-600 dark:text-slate-300 hover:text-white bg-slate-100 dark:bg-slate-750 hover:bg-[#0A4D27] dark:hover:bg-emerald-700 rounded transition-colors"
          title="Download Document"
        >
          <Download className="w-4 h-4" />
        </a>
      </div>

    </div>
  );
}
