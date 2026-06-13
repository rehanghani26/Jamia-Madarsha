import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ArrowLeft, Save, AlertTriangle, Settings, CheckCircle, Info, PhoneCall, Globe, Search } from 'lucide-react';
import { fetchSettings, updateSettings, clearSettingsErrors } from '../../../store/slices/settingsSlice';

export default function ManageSettings() {
  const dispatch = useDispatch();
  const { settings, loading, error, updateSuccess } = useSelector((state) => state.settings);

  const [activeTab, setActiveTab] = useState('bio');

  // Form states mapping WebsiteSettings schema
  const [scholarInfo, setScholarInfo] = useState({
    fullName: '',
    title: '',
    bio: '',
    madrasah: '',
    university: '',
    qualifications: '',
    areasOfExpertise: '',
    teachingExperience: '',
    researchInterests: '',
    institutionsAssociatedWith: '',
    achievements: '',
  });

  const [contactInfo, setContactInfo] = useState({
    address: '',
    phone: '',
    whatsapp: '',
    email: '',
  });

  const [socialLinks, setSocialLinks] = useState({
    facebook: '',
    youtube: '',
    twitter: '',
    instagram: '',
  });

  const [homepageSettings, setHomepageSettings] = useState({
    heroName: '',
    heroTitle: '',
    heroIntroduction: '',
    heroMission: '',
  });

  const [seoSettings, setSeoSettings] = useState({
    metaTitle: '',
    metaDescription: '',
  });

  useEffect(() => {
    dispatch(fetchSettings());
  }, [dispatch]);

  // Load database settings into local state inputs
  useEffect(() => {
    if (settings) {
      const info = settings.scholarInfo || {};
      setScholarInfo({
        fullName: info.fullName || '',
        title: info.title || '',
        bio: info.bio || '',
        madrasah: info.education?.madrasah || '',
        university: info.education?.university || '',
        qualifications: info.qualifications ? info.qualifications.join(', ') : '',
        areasOfExpertise: info.areasOfExpertise ? info.areasOfExpertise.join(', ') : '',
        teachingExperience: info.teachingExperience || '',
        researchInterests: info.researchInterests ? info.researchInterests.join(', ') : '',
        institutionsAssociatedWith: info.institutionsAssociatedWith ? info.institutionsAssociatedWith.join(', ') : '',
        achievements: info.achievements ? info.achievements.join(', ') : '',
      });

      const contact = settings.contactInfo || {};
      setContactInfo({
        address: contact.address || '',
        phone: contact.phone || '',
        whatsapp: contact.whatsapp || '',
        email: contact.email || '',
      });

      const socials = settings.socialLinks || {};
      setSocialLinks({
        facebook: socials.facebook || '',
        youtube: socials.youtube || '',
        twitter: socials.twitter || '',
        instagram: socials.instagram || '',
      });

      const home = settings.homepageSettings || {};
      setHomepageSettings({
        heroName: home.heroName || '',
        heroTitle: home.heroTitle || '',
        heroIntroduction: home.heroIntroduction || '',
        heroMission: home.heroMission || '',
      });

      const seo = settings.seoSettings || {};
      setSeoSettings({
        metaTitle: seo.metaTitle || '',
        metaDescription: seo.metaDescription || '',
      });
    }
  }, [settings]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    dispatch(clearSettingsErrors());

    const splitHelper = (str) =>
      str
        ? str
            .split(',')
            .map((s) => s.trim())
            .filter((s) => s)
        : [];

    const payload = {
      scholarInfo: {
        fullName: scholarInfo.fullName,
        title: scholarInfo.title,
        bio: scholarInfo.bio,
        education: {
          madrasah: scholarInfo.madrasah,
          university: scholarInfo.university,
        },
        qualifications: splitHelper(scholarInfo.qualifications),
        areasOfExpertise: splitHelper(scholarInfo.areasOfExpertise),
        teachingExperience: scholarInfo.teachingExperience,
        researchInterests: splitHelper(scholarInfo.researchInterests),
        institutionsAssociatedWith: splitHelper(scholarInfo.institutionsAssociatedWith),
        achievements: splitHelper(scholarInfo.achievements),
      },
      contactInfo,
      socialLinks,
      homepageSettings,
      seoSettings,
    };

    dispatch(updateSettings(payload));
  };

  if (loading && !settings) {
    return (
      <div className="flex items-center justify-center min-h-[70vh] bg-[#FAF9F5]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0A4D27]"></div>
      </div>
    );
  }

  const tabs = [
    { id: 'bio', label: 'Biography Details', icon: <Info className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact Details', icon: <PhoneCall className="w-4 h-4" /> },
    { id: 'socials', label: 'Social Networks', icon: <Globe className="w-4 h-4" /> },
    { id: 'home', label: 'Home Page Hero', icon: <Settings className="w-4 h-4" /> },
    { id: 'seo', label: 'SEO Settings', icon: <Search className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-[#FAF9F5] py-10 min-h-[80vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Module Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#EAE3CF]/50 pb-5">
          <div className="flex items-center gap-3">
            <Link to="/admin/dashboard" className="p-2 border border-[#EAE3CF] bg-white rounded text-slate-500 hover:text-[#0A4D27] shrink-0">
              <ArrowLeft className="w-4.5 h-4.5" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-[#0A4D27] font-serif">Website Settings</h1>
              <p className="text-xs text-slate-400 font-light font-sans">Modify biography profiles, contact numbers, and SEO tags</p>
            </div>
          </div>
        </div>

        {/* Status Alerts */}
        {updateSuccess && (
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 flex items-start gap-2.5 text-emerald-800 text-xs shadow-xs">
            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Website settings updated successfully.</span>
          </div>
        )}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 flex items-start gap-2 text-red-700 text-xs shadow-xs">
            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Settings Tab Selector Bar */}
        <div className="flex flex-wrap border-b border-[#EAE3CF]/60 gap-1 shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                dispatch(clearSettingsErrors());
                setActiveTab(tab.id);
              }}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold border-b-2 transition-all uppercase tracking-wider font-serif ${
                activeTab === tab.id
                  ? 'border-[#0A4D27] text-[#0A4D27]'
                  : 'border-transparent text-slate-500 hover:text-[#0A4D27]'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Global Save Form */}
        <form onSubmit={handleFormSubmit} className="bg-white border border-[#EAE3CF] p-6 rounded-lg shadow-sm space-y-6">
          
          {/* TAB 1: Biography Details */}
          {activeTab === 'bio' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Scholar Full Name</label>
                  <input
                    type="text"
                    value={scholarInfo.fullName}
                    onChange={(e) => setScholarInfo({ ...scholarInfo, fullName: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-[#EAE3CF] rounded outline-none focus:border-[#0A4D27]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Honorary Islamic Title</label>
                  <input
                    type="text"
                    value={scholarInfo.title}
                    onChange={(e) => setScholarInfo({ ...scholarInfo, title: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-[#EAE3CF] rounded outline-none focus:border-[#0A4D27]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Detailed Biography Statement</label>
                <textarea
                  value={scholarInfo.bio}
                  onChange={(e) => setScholarInfo({ ...scholarInfo, bio: e.target.value })}
                  rows={5}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-[#EAE3CF] rounded outline-none focus:border-[#0A4D27] resize-y"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Madrasah Education</label>
                  <input
                    type="text"
                    value={scholarInfo.madrasah}
                    onChange={(e) => setScholarInfo({ ...scholarInfo, madrasah: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-[#EAE3CF] rounded outline-none focus:border-[#0A4D27]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">University Education</label>
                  <input
                    type="text"
                    value={scholarInfo.university}
                    onChange={(e) => setScholarInfo({ ...scholarInfo, university: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-[#EAE3CF] rounded outline-none focus:border-[#0A4D27]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Qualifications (Comma Separated)</label>
                <input
                  type="text"
                  value={scholarInfo.qualifications}
                  onChange={(e) => setScholarInfo({ ...scholarInfo, qualifications: e.target.value })}
                  placeholder="PhD in Shariah, Masters in Islamic Law"
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-[#EAE3CF] rounded outline-none focus:border-[#0A4D27]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Areas of Expertise (Comma Separated)</label>
                <input
                  type="text"
                  value={scholarInfo.areasOfExpertise}
                  onChange={(e) => setScholarInfo({ ...scholarInfo, areasOfExpertise: e.target.value })}
                  placeholder="Fiqh, Hadith, Islamic Banking"
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-[#EAE3CF] rounded outline-none focus:border-[#0A4D27]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Teaching Experience Synopsis</label>
                <input
                  type="text"
                  value={scholarInfo.teachingExperience}
                  onChange={(e) => setScholarInfo({ ...scholarInfo, teachingExperience: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-[#EAE3CF] rounded outline-none focus:border-[#0A4D27]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Research Interests (Comma Separated)</label>
                  <input
                    type="text"
                    value={scholarInfo.researchInterests}
                    onChange={(e) => setScholarInfo({ ...scholarInfo, researchInterests: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-[#EAE3CF] rounded outline-none focus:border-[#0A4D27]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Associated Institutions (Comma Separated)</label>
                  <input
                    type="text"
                    value={scholarInfo.institutionsAssociatedWith}
                    onChange={(e) => setScholarInfo({ ...scholarInfo, institutionsAssociatedWith: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-[#EAE3CF] rounded outline-none focus:border-[#0A4D27]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Key Achievements (Comma Separated)</label>
                <input
                  type="text"
                  value={scholarInfo.achievements}
                  onChange={(e) => setScholarInfo({ ...scholarInfo, achievements: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-[#EAE3CF] rounded outline-none focus:border-[#0A4D27]"
                />
              </div>
            </div>
          )}

          {/* TAB 2: Contact Details */}
          {activeTab === 'contact' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Office Address</label>
                <input
                  type="text"
                  value={contactInfo.address}
                  onChange={(e) => setContactInfo({ ...contactInfo, address: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-[#EAE3CF] rounded outline-none focus:border-[#0A4D27]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-[#EAE3CF] rounded outline-none focus:border-[#0A4D27]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">WhatsApp Number Link</label>
                  <input
                    type="text"
                    value={contactInfo.whatsapp}
                    onChange={(e) => setContactInfo({ ...contactInfo, whatsapp: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-[#EAE3CF] rounded outline-none focus:border-[#0A4D27]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email Address</label>
                <input
                  type="email"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-[#EAE3CF] rounded outline-none focus:border-[#0A4D27]"
                />
              </div>
            </div>
          )}

          {/* TAB 3: Social Links */}
          {activeTab === 'socials' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Facebook Profile URL</label>
                  <input
                    type="url"
                    value={socialLinks.facebook}
                    onChange={(e) => setSocialLinks({ ...socialLinks, facebook: e.target.value })}
                    placeholder="https://facebook.com/username"
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-[#EAE3CF] rounded outline-none focus:border-[#0A4D27]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">YouTube Channel URL</label>
                  <input
                    type="url"
                    value={socialLinks.youtube}
                    onChange={(e) => setSocialLinks({ ...socialLinks, youtube: e.target.value })}
                    placeholder="https://youtube.com/channel/..."
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-[#EAE3CF] rounded outline-none focus:border-[#0A4D27]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Twitter / X URL</label>
                  <input
                    type="url"
                    value={socialLinks.twitter}
                    onChange={(e) => setSocialLinks({ ...socialLinks, twitter: e.target.value })}
                    placeholder="https://twitter.com/username"
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-[#EAE3CF] rounded outline-none focus:border-[#0A4D27]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Instagram URL</label>
                  <input
                    type="url"
                    value={socialLinks.instagram}
                    onChange={(e) => setSocialLinks({ ...socialLinks, instagram: e.target.value })}
                    placeholder="https://instagram.com/username"
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-[#EAE3CF] rounded outline-none focus:border-[#0A4D27]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Homepage settings */}
          {activeTab === 'home' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Hero Title Name</label>
                  <input
                    type="text"
                    value={homepageSettings.heroName}
                    onChange={(e) => setHomepageSettings({ ...homepageSettings, heroName: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-[#EAE3CF] rounded outline-none focus:border-[#0A4D27]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Hero Title Designation</label>
                  <input
                    type="text"
                    value={homepageSettings.heroTitle}
                    onChange={(e) => setHomepageSettings({ ...homepageSettings, heroTitle: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-[#EAE3CF] rounded outline-none focus:border-[#0A4D27]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Hero Introduction Paragraph</label>
                <textarea
                  value={homepageSettings.heroIntroduction}
                  onChange={(e) => setHomepageSettings({ ...homepageSettings, heroIntroduction: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-[#EAE3CF] rounded outline-none focus:border-[#0A4D27] resize-y"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Scholar Mission Statement Text</label>
                <input
                  type="text"
                  value={homepageSettings.heroMission}
                  onChange={(e) => setHomepageSettings({ ...homepageSettings, heroMission: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-[#EAE3CF] rounded outline-none focus:border-[#0A4D27]"
                />
              </div>
            </div>
          )}

          {/* TAB 5: SEO settings */}
          {activeTab === 'seo' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Default Meta Title Tag</label>
                <input
                  type="text"
                  value={seoSettings.metaTitle}
                  onChange={(e) => setSeoSettings({ ...seoSettings, metaTitle: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-[#EAE3CF] rounded outline-none focus:border-[#0A4D27]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Default Meta Description Tag</label>
                <textarea
                  value={seoSettings.metaDescription}
                  onChange={(e) => setSeoSettings({ ...seoSettings, metaDescription: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-[#EAE3CF] rounded outline-none focus:border-[#0A4D27] resize-y"
                ></textarea>
              </div>
            </div>
          )}

          {/* Form Action save control */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-1.5 px-6 py-2.5 bg-[#0A4D27] hover:bg-emerald-950 text-white rounded text-xs font-bold shadow-sm transition-all uppercase tracking-wider font-serif disabled:opacity-50"
            >
              <Save className="w-4 h-4 text-[#D4AF37]" />
              {loading ? 'Saving Settings...' : 'Save Configuration'}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
