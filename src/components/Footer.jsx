import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BookOpen, Mail, Phone, MapPin, Send, Facebook, Youtube, Twitter, Instagram, Shield } from 'lucide-react';

export default function Footer() {
  const { settings } = useSelector((state) => state.settings);

  const scholarName = settings?.scholarInfo?.fullName || 'Dr. Islamic Scholar';
  const scholarTitle = settings?.scholarInfo?.title || 'Mufti & Educator';
  
  const address = settings?.contactInfo?.address || 'Islamic Center, Knowledge Dist.';
  const phone = settings?.contactInfo?.phone || '+1 (800) 555-ISLAM';
  const whatsapp = settings?.contactInfo?.whatsapp || '+1 (800) 555-WHATS';
  const email = settings?.contactInfo?.email || 'scholar@islamicknowledge.com';

  const socialLinks = settings?.socialLinks || {};

  return (
    <footer className="bg-[#062413] text-emerald-100 islamic-pattern-dark relative border-t border-[#D4AF37]/30 pt-16 pb-8">
      {/* Metallic Gold Accent Top Line */}
      <div className="absolute top-0 left-0 right-0 h-1 gold-gradient-bg"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        
        {/* Column 1: Biography / Mission */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6 text-[#D4AF37]" />
            <span className="text-lg font-bold text-white tracking-wide font-serif">
              {scholarName.toUpperCase()}
            </span>
          </div>
          <p className="text-sm text-emerald-200/80 leading-relaxed mb-4 font-light">
            {settings?.homepageSettings?.heroMission || 'Dedicated to making authentic Islamic knowledge accessible, accurate, and actionable in accordance with traditional classical scholarship.'}
          </p>
          <div className="flex items-center gap-2.5">
            {socialLinks.facebook && (
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-emerald-950 text-[#D4AF37] hover:bg-emerald-900 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            )}
            {socialLinks.youtube && (
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-emerald-950 text-[#D4AF37] hover:bg-emerald-900 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            )}
            {socialLinks.twitter && (
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-emerald-950 text-[#D4AF37] hover:bg-emerald-900 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            )}
            {socialLinks.instagram && (
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-emerald-950 text-[#D4AF37] hover:bg-emerald-900 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Column 2: Sitemap Navigation */}
        <div>
          <h3 className="text-white font-semibold text-md mb-4 border-b border-[#D4AF37]/20 pb-2 font-serif uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm font-light">
            <li>
              <Link to="/about" className="hover:text-white hover:underline transition-all flex items-center gap-1">
                <span className="text-[#D4AF37]">›</span> Biography & Qualifications
              </Link>
            </li>
            <li>
              <Link to="/articles" className="hover:text-white hover:underline transition-all flex items-center gap-1">
                <span className="text-[#D4AF37]">›</span> Scholarly Articles
              </Link>
            </li>
            <li>
              <Link to="/fatwas" className="hover:text-white hover:underline transition-all flex items-center gap-1">
                <span className="text-[#D4AF37]">›</span> Fatwas & Rulings
              </Link>
            </li>
            <li>
              <Link to="/qa" className="hover:text-white hover:underline transition-all flex items-center gap-1">
                <span className="text-[#D4AF37]">›</span> Questions & Answers
              </Link>
            </li>
            <li>
              <Link to="/publications" className="hover:text-white hover:underline transition-all flex items-center gap-1">
                <span className="text-[#D4AF37]">›</span> Books & Studies
              </Link>
            </li>
            <li>
              <Link to="/lectures" className="hover:text-white hover:underline transition-all flex items-center gap-1">
                <span className="text-[#D4AF37]">›</span> Video & Audio Bayans
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact details */}
        <div>
          <h3 className="text-white font-semibold text-md mb-4 border-b border-[#D4AF37]/20 pb-2 font-serif uppercase tracking-wider">
            Contact Scholar
          </h3>
          <ul className="space-y-3.5 text-sm font-light">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <span className="text-emerald-200/90 leading-tight">{address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span className="text-emerald-200/90">{phone}</span>
            </li>
            {whatsapp && (
              <li className="flex items-center gap-2.5">
                <span className="text-emerald-600 font-bold text-xs bg-emerald-100 rounded px-1.5 py-0.5 border border-emerald-300">WhatsApp</span>
                <span className="text-emerald-200/90">{whatsapp}</span>
              </li>
            )}
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span className="text-emerald-200/90">{email}</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter Submission Mock */}
        <div>
          <h3 className="text-white font-semibold text-md mb-4 border-b border-[#D4AF37]/20 pb-2 font-serif uppercase tracking-wider">
            Stay Updated
          </h3>
          <p className="text-xs text-emerald-200/80 mb-4 font-light leading-relaxed">
            Subscribe to receive direct notifications when new Islamic articles, publications, or fatwas are posted.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-emerald-950/80 border border-[#D4AF37]/35 rounded-l text-emerald-100 text-xs px-3 py-2 w-full outline-none focus:border-[#D4AF37]"
            />
            <button
              type="submit"
              className="bg-[#D4AF37] hover:bg-[#B89047] text-slate-900 px-3.5 rounded-r transition-colors flex items-center justify-center"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

      </div>

      {/* Footer base metadata */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-emerald-950 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-300/85">
        <p className="mb-4 sm:mb-0 text-center sm:text-left">
          &copy; {new Date().getFullYear()} {scholarName}. All Rights Reserved. Derived from classical guidelines.
        </p>
        <div className="flex items-center gap-4">
          <Link to="/admin/login" className="hover:text-white transition-colors flex items-center gap-1 font-semibold text-[#D4AF37]/80 hover:text-[#D4AF37]">
            <Shield className="w-3.5 h-3.5" /> Admin Panel
          </Link>
        </div>
      </div>
    </footer>
  );
}
