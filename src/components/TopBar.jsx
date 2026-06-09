import React from 'react'
import { SITE } from '../data/siteData'

export default function TopBar() {
  return (
    <div className="bg-[#1E1E1E] h-11 flex items-center px-7 border-b border-[#2e2e2e] relative z-50">
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between">

        {/* Date — right side (RTL default) */}
        <div className="flex items-center text-[#d0d0d0] text-[13px] whitespace-nowrap">
          <span>{SITE.hijriDate}</span>
          <span className="mx-2 text-[#555]">·</span>
          <span>{SITE.gregDate}</span>
        </div>

        {/* Bismillah — absolute center */}
        <div className="absolute left-1/2 -translate-x-1/2 text-[#e8dfc8] text-[17px] whitespace-nowrap hidden md:block">
          {SITE.bismillah}
        </div>

        {/* Actions — left side (RTL = visually left) */}
        <div className="flex items-center mr-auto">
          <button className="bg-[#2d2d2d] text-[#bbb] border-none border-l border-[#3a3a3a] px-5 h-11 text-[14px] hover:bg-[#3a3a3a] hover:text-white transition-colors">
            لاگ ان
          </button>
          <button className="bg-[#8A6F52] text-white px-4 h-11 text-[14px] flex items-center gap-1.5 hover:bg-[#A08060] transition-colors">
            اردو <span className="text-[10px]">▾</span>
          </button>
        </div>

      </div>
    </div>
  )
}
