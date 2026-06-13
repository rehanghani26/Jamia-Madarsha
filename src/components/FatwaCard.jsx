import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Eye, FileText, ArrowRight } from 'lucide-react';

export default function FatwaCard({ fatwa }) {
  const { _id, title, category, question, detailedAnswer, publishDate, viewCount } = fatwa;

  const formattedDate = new Date(publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  // Strip HTML tags for answer preview
  const plainAnswer = detailedAnswer
    ? detailedAnswer.replace(/<[^>]*>/g, '')
    : '';

  return (
    <div className="premium-card p-6 flex flex-col h-full group">
      
      {/* Category and stats metadata */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-700 shrink-0">
        <span className="bg-[#0A4D27]/10 dark:bg-emerald-950/30 text-[#0A4D27] dark:text-emerald-400 text-xs font-bold px-2.5 py-1 rounded">
          {category}
        </span>
        <div className="flex items-center gap-3.5 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#C5A85C] dark:text-amber-500" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5 text-[#C5A85C] dark:text-amber-500" />
            {viewCount} views
          </span>
        </div>
      </div>

      {/* Rulings Title */}
      <h3 className="text-md font-bold text-slate-900 dark:text-white group-hover:text-[#0A4D27] dark:group-hover:text-emerald-450 transition-colors leading-snug mb-3 font-serif flex items-start gap-2">
        <FileText className="w-5 h-5 text-[#C5A85C] dark:text-amber-500 shrink-0 mt-0.5" />
        <span className="line-clamp-2">{title}</span>
      </h3>

      {/* Visitor Question Query */}
      <div className="bg-slate-50 dark:bg-slate-800/80 border-l-2 border-[#D4AF37] p-3 rounded mb-4 shrink-0">
        <span className="block text-xs font-bold text-[#0A4D27] dark:text-emerald-450 mb-1">QUESTION:</span>
        <p className="text-slate-700 dark:text-slate-300 text-xs italic line-clamp-2 leading-relaxed">
          "{question}"
        </p>
      </div>

      {/* Rulings Answer Snippet */}
      <div className="flex-grow">
        <span className="block text-xs font-bold text-slate-500 dark:text-slate-450 mb-1">RULING SUMMARY:</span>
        <p className="text-slate-700 dark:text-slate-300 text-sm line-clamp-3 leading-relaxed mb-4 font-light">
          {plainAnswer}
        </p>
      </div>

      {/* Action CTA link */}
      <div className="mt-auto pt-2 shrink-0">
        <Link
          to={`/fatwas/${_id}`}
          className="inline-flex items-center gap-1 text-sm font-bold text-[#0A4D27] dark:text-emerald-400 hover:text-[#D4AF37] dark:hover:text-amber-400 transition-colors"
        >
          View Full Ruling
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

    </div>
  );
}
