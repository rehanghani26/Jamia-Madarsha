import React from 'react'
import { NAV_ITEMS, SITE } from '../data/siteData'
import LogoSeal from './LogoSeal'

export default function Header() {
  return (
    <header className="bg-white border-b border-[#D9D9D9] px-7 sticky top-0 z-40 shadow-sm">
      <div className="max-w-[1440px] mx-auto h-[100px] flex items-center justify-between gap-4">

        {/* Logo — rightmost in RTL */}
        <div className="flex items-center gap-3.5 shrink-0">
          <div className="leading-[1.35]">
            <span className="block text-[30px] font-bold text-[#2F241C] leading-[1.2]">
              {SITE.nameArabic}
            </span>
            <span className="block text-[13px] text-[#8A6F52] mt-0.5">
              {SITE.nameUrdu}
            </span>
          </div>
          <LogoSeal size={76} />
        </div>

        {/* Navigation — center */}
        <nav className="flex-1 flex justify-center" aria-label="مرکزی نیویگیشن">
          <ul className="flex items-stretch h-[100px]">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="flex items-stretch">
                <a
                  href={item.href}
                  className={`nav-link flex items-center gap-1 px-[18px] text-[19px] text-[#3A2C23] whitespace-nowrap h-[100px] ${item.active ? 'active' : ''}`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <span className="text-[11px] text-[#8A6F52]">‹</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Search — leftmost in RTL */}
        <div className="flex items-center border border-[#ccc] h-[38px] bg-white shrink-0 overflow-hidden">
          <button className="bg-white border-none border-r border-[#ccc] w-[38px] h-[38px] flex items-center justify-center text-[15px] text-[#777] hover:bg-gray-50">
            🔍
          </button>
          <input
            type="text"
            placeholder="تلاش کریں"
            className="border-none outline-none px-3.5 text-[14px] text-[#3A2C23] w-[170px] direction-rtl bg-transparent font-[inherit] placeholder:text-[#aaa]"
            aria-label="تلاش"
          />
        </div>

      </div>
    </header>
  )
}
