import React from 'react'
import { ARTICLES, PRAYER_TIMES, BOOKS } from '../data/siteData'

function ColHeader({ title }) {
  return (
    <div className="pattern-bg py-[15px] px-5 text-center text-[23px] font-bold text-white">
      {title}
    </div>
  )
}

function ArticlesCol() {
  return (
    <div className="bg-white border-r border-[#D9D9D9]">
      <ColHeader title="مقالات" />
      {ARTICLES.map((a) => (
        <div key={a.id} className="flex items-start gap-3 p-[15px] px-[18px] border-b border-[#D9D9D9] last:border-b-0 hover:bg-[#fafaf6] transition-colors">
          <div className="flex-1 text-right">
            <div className="text-[16px] text-[#3A2C23] leading-[1.75] mb-1">{a.title}</div>
            <a href="#" className="inline-flex items-center gap-1 text-[14px] text-[#8A6F52] font-semibold hover:text-[#2F241C]">
              <span>›</span> پڑھنے کے لیے کلک کریں
            </a>
          </div>
          <div className="w-[58px] min-w-[58px] h-11 bg-gradient-to-br from-[#ddd5be] to-[#c8bfa8] border border-[#D9D9D9] shrink-0"/>
        </div>
      ))}
    </div>
  )
}

function PrayerCol() {
  const times = PRAYER_TIMES.times
  const rows = [[times[0], times[1]], [times[2], times[3]], [times[4], times[5]]]
  return (
    <div className="bg-white border-r border-[#D9D9D9]">
      <ColHeader title="نماز کے اوقات" />
      <div className="bg-[#F2EDD8] py-[11px] px-4 text-center text-[14px] text-[#2F241C] font-semibold border-b border-[#D9D9D9]">
        {PRAYER_TIMES.date}
      </div>
      <table className="w-full border-collapse">
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-[#D9D9D9] last:border-b-0">
              {row.map((p, ci) => (
                <React.Fragment key={ci}>
                  <td className="py-[13px] px-2.5 text-center align-middle font-mono text-[17px] text-[#333]" dir="ltr">{p.time}</td>
                  <td className="py-[13px] px-2.5 text-center align-middle text-[18px] font-semibold text-[#3A2C23]">{p.name}</td>
                  <td className="py-[13px] px-2.5 text-center align-middle text-[22px]">{p.icon}</td>
                  {ci === 0 && <td className="w-px bg-[#D9D9D9] p-0"/>}
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function BooksCol() {
  return (
    <div className="bg-white">
      <ColHeader title="کتابیں" />
      {BOOKS.map((b) => (
        <div key={b.id} className="flex items-start gap-3 p-[15px] px-[18px] border-b border-[#D9D9D9] last:border-b-0 hover:bg-[#fafaf6] transition-colors">
          <div className="flex-1 text-right">
            <div className="text-[15px] text-[#3A2C23] leading-[1.75] mb-1">{b.title}</div>
            <a href="#" className="inline-flex items-center gap-1 text-[14px] text-[#8A6F52] font-semibold hover:text-[#2F241C]">
              <span>›</span> پڑھنے کے لیے کلک کریں
            </a>
          </div>
          <div className="w-11 min-w-[44px] h-[60px] border border-[#D9D9D9] shrink-0 overflow-hidden" style={{ background: b.gradient }}>
            <svg width="44" height="60" viewBox="0 0 44 60">
              <rect x="4" y="4" width="36" height="52" rx="1" fill="rgba(255,255,255,0.1)"/>
              <rect x="2" y="0" width="6" height="60" fill="rgba(0,0,0,0.2)"/>
            </svg>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ThreeColumns() {
  return (
    <section className="px-4 pb-4 md:px-7 md:pb-7" aria-label="مقالات، نماز کے اوقات، کتابیں">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 border border-[#D9D9D9] border-t-0">
        <ArticlesCol />
        <PrayerCol />
        <BooksCol />
      </div>
    </section>
  )
}
