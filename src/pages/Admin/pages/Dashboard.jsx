import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  FileText,
  Bookmark,
  Award,
  Play,
  HelpCircle,
  Users,
  Settings,
  Mail,
  Shield,
  ArrowRight,
  Plus
} from 'lucide-react';
import { fetchStats } from '../../../store/slices/settingsSlice';

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { stats, statsLoading, error } = useSelector((state) => state.settings);
  const { adminInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchStats());
  }, [dispatch]);

  if (statsLoading && !stats) {
    return (
      <div className="flex items-center justify-center min-h-[70vh] bg-[#FAF9F5]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0A4D27]"></div>
      </div>
    );
  }

  // Statistics fallbacks
  const tArticles = stats?.totalArticles || 0;
  const tFatwas = stats?.totalFatwas || 0;
  const tPublications = stats?.totalPublications || 0;
  const tLectures = stats?.totalLectures || 0;
  const tQuestions = stats?.totalQuestions || 0;
  const pQuestions = stats?.pendingQuestions || 0;
  const tMessages = stats?.totalMessages || 0;
  const eVisitors = stats?.estimatedVisitors || 0;

  const statCards = [
    { label: 'Total Articles', count: tArticles, icon: <FileText className="w-6 h-6 text-[#0A4D27]" />, color: 'bg-emerald-50 border-emerald-100', link: '/admin/articles' },
    { label: 'Total Fatwas', count: tFatwas, icon: <Bookmark className="w-6 h-6 text-[#0A4D27]" />, color: 'bg-yellow-50 border-yellow-100', link: '/admin/fatwas' },
    { label: 'Total Publications', count: tPublications, icon: <Award className="w-6 h-6 text-[#0A4D27]" />, color: 'bg-blue-50 border-blue-100', link: '/admin/publications' },
    { label: 'Total Lectures', count: tLectures, icon: <Play className="w-6 h-6 text-[#0A4D27]" />, color: 'bg-rose-50 border-rose-100', link: '/admin/lectures' },
    { label: 'Total Q&As', count: tQuestions, countSub: `${pQuestions} Pending`, icon: <HelpCircle className="w-6 h-6 text-[#0A4D27]" />, color: 'bg-purple-50 border-purple-100', link: '/admin/questions' },
    { label: 'Total Messages', count: tMessages, icon: <Mail className="w-6 h-6 text-[#0A4D27]" />, color: 'bg-slate-50 border-slate-100', link: '/admin/dashboard' },
    { label: 'Total Website Visitors', count: eVisitors, icon: <Users className="w-6 h-6 text-[#0A4D27]" />, color: 'bg-[#E5C05E]/10 border-[#E5C05E]/20', link: '/' },
  ];

  return (
    <div className="bg-[#FAF9F5] py-10 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-fade-in">
        
        {/* Dashboard Header banner */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#EAE3CF]/50 pb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#0A4D27] flex items-center justify-center text-[#D4AF37] shadow">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#0A4D27] font-serif">Admin Dashboard</h1>
              <p className="text-xs text-slate-400 font-light">Welcome back, {adminInfo?.username || 'Administrator'}</p>
            </div>
          </div>

          {/* Quick link button to global settings */}
          <Link
            to="/admin/settings"
            className="flex items-center gap-1.5 px-4 py-2 border border-[#EAE3CF] bg-white rounded text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-xs uppercase tracking-wider font-serif"
          >
            <Settings className="w-3.5 h-3.5" />
            Website Settings
          </Link>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {statCards.map((card, idx) => (
            <Link
              key={idx}
              to={card.link}
              className={`p-6 bg-white border border-[#EAE3CF] rounded-lg shadow-sm hover:shadow transition-all group flex flex-col justify-between`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2.5 rounded ${card.color} shrink-0`}>
                  {card.icon}
                </div>
                {card.countSub ? (
                  <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded">
                    {card.countSub}
                  </span>
                ) : (
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#0A4D27] transition-all group-hover:translate-x-1" />
                )}
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">{card.label}</span>
                <span className="block text-3xl font-extrabold text-[#0A4D27] font-serif mt-1">{card.count}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick actions tiles grid */}
        <div className="bg-white border border-[#EAE3CF] rounded-lg p-6 shadow-sm">
          <h2 className="text-md font-bold text-slate-800 font-serif mb-5 pb-2 border-b border-slate-100 uppercase tracking-wide">
            Quick Content Operations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Create Article */}
            <Link
              to="/admin/articles"
              className="flex items-center gap-3 p-4 border border-[#EAE3CF] rounded hover:border-[#0A4D27] transition-all bg-[#0A4D27]/5 text-[#0A4D27] group"
            >
              <div className="w-8 h-8 rounded-full bg-[#0A4D27] text-white flex items-center justify-center shrink-0">
                <Plus className="w-4.5 h-4.5" />
              </div>
              <div className="text-left">
                <span className="block text-sm font-bold">Write New Article</span>
                <span className="block text-[10px] text-[#C5A85C] font-semibold">Publish Islamic Rulings</span>
              </div>
            </Link>

            {/* Create Fatwa */}
            <Link
              to="/admin/fatwas"
              className="flex items-center gap-3 p-4 border border-[#EAE3CF] rounded hover:border-[#0A4D27] transition-all bg-yellow-500/5 text-amber-800 group"
            >
              <div className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center shrink-0">
                <Plus className="w-4.5 h-4.5" />
              </div>
              <div className="text-left">
                <span className="block text-sm font-bold">Add New Fatwa</span>
                <span className="block text-[10px] text-[#C5A85C] font-semibold">Jurisprudence Solutions</span>
              </div>
            </Link>

            {/* Answer Questions */}
            <Link
              to="/admin/questions"
              className="flex items-center gap-3 p-4 border border-[#EAE3CF] rounded hover:border-[#0A4D27] transition-all bg-purple-500/5 text-purple-900 group"
            >
              <div className="w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center shrink-0">
                <HelpCircle className="w-4.5 h-4.5" />
              </div>
              <div className="text-left">
                <span className="block text-sm font-bold">Review Questions</span>
                <span className="block text-[10px] text-[#C5A85C] font-semibold">{pQuestions} Pending Inbox</span>
              </div>
            </Link>

            {/* Upload Publication */}
            <Link
              to="/admin/publications"
              className="flex items-center gap-3 p-4 border border-[#EAE3CF] rounded hover:border-[#0A4D27] transition-all bg-blue-500/5 text-blue-900 group"
            >
              <div className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center shrink-0">
                <Plus className="w-4.5 h-4.5" />
              </div>
              <div className="text-left">
                <span className="block text-sm font-bold">Add Publication</span>
                <span className="block text-[10px] text-[#C5A85C] font-semibold">Link Google Drive Files</span>
              </div>
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}
