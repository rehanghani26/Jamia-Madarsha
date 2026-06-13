import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Eye, ArrowRight } from 'lucide-react';

export default function ArticleCard({ article }) {
  const { title, slug, summary, category, featuredImage, publishDate, viewCount } = article;

  const formattedDate = new Date(publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const placeholderImage = 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800';

  return (
    <div className="premium-card flex flex-col h-full overflow-hidden group">
      
      {/* Featured Image */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-900 shrink-0">
        <img
          src={featuredImage || placeholderImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-[#0A4D27] dark:bg-emerald-700 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
          {category}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow">
        
        {/* Date and View Statistics */}
        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#C5A85C] dark:text-amber-500" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5 text-[#C5A85C] dark:text-amber-500" />
            {viewCount} views
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#0A4D27] dark:group-hover:text-emerald-450 transition-colors line-clamp-2 leading-snug mb-2 font-serif">
          {title}
        </h3>

        {/* Summary Description */}
        <p className="text-slate-700 dark:text-slate-300 text-sm line-clamp-3 leading-relaxed mb-4 font-light">
          {summary}
        </p>

        {/* Read More link */}
        <div className="mt-auto pt-2">
          <Link
            to={`/articles/${slug}`}
            className="inline-flex items-center gap-1 text-sm font-bold text-[#0A4D27] dark:text-emerald-400 hover:text-[#D4AF37] dark:hover:text-amber-400 transition-colors"
          >
            Read Article
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>

    </div>
  );
}
