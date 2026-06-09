import React from 'react'
import { SITE, FOOTER_SITEMAP, FOOTER_DEPTS, CONTACT } from '../data/siteData'
import LogoSeal from './LogoSeal'

export default function Footer() {
  return (
    <footer className="footer-pattern-bg pt-12 px-4 md:px-7 border-t-[3px] border-[#8A6F52] text-[#ccc]" aria-label="فٹر">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-11 pb-10 border-b border-white/[0.08]">

        {/* Col 1 — Brand + contact */}
        <div>
          <div className="flex items-center gap-3 mb-[18px]">
            <div className="leading-[1.4]">
              <span className="block text-[22px] text-white font-bold">{SITE.nameArabic}</span>
              <span className="block text-[12px] text-[#999]">{SITE.nameUrdu}</span>
            </div>
            <LogoSeal size={52} opacity={0.75} />
          </div>
          <ul className="space-y-1.5">
            <li className="text-[13px] text-[#888]">{CONTACT.poBox}</li>
            <li className="text-[14px] text-[#bbb]" dir="ltr">{CONTACT.phone1}</li>
            <li className="text-[14px] text-[#bbb]" dir="ltr">{CONTACT.phone2}</li>
            <li className="text-[14px] text-[#bbb]" dir="ltr">{CONTACT.email}</li>
          </ul>
        </div>

        {/* Col 2 — Sitemap */}
        <div>
          <div className="text-[18px] font-bold text-white mb-3.5 pb-2 border-b border-white/[0.12]">ویب سائٹ کا نقشہ</div>
          <ul className="space-y-2">
            {FOOTER_SITEMAP.map((item) => (
              <li key={item}>
                <a href="#" className="footer-link text-[14px] text-[#bbb] inline-flex items-center transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Departments */}
        <div>
          <div className="text-[18px] font-bold text-white mb-3.5 pb-2 border-b border-white/[0.12]">شعبہ جات</div>
          <ul className="space-y-2">
            {FOOTER_DEPTS.map((item) => (
              <li key={item}>
                <a href="#" className="footer-link text-[14px] text-[#bbb] inline-flex items-center transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Donation */}
        <div>
          <div className="text-[18px] font-bold text-white mb-3.5 pb-2 border-b border-white/[0.12]">طریقہ تعاون</div>
          <p className="text-[14px] text-[#bbb] leading-[2]">
            جامعہ سے صدقات، خیرات، عطیات اور زکوٰۃ وغیرہ کی مد میں تعاون کے لیے{' '}
            <a href="#" className="text-[#B8963E] underline">یہاں پر کلک</a> کریں۔
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto py-3.5 text-center text-[13px] text-[#666]">
        {SITE.copyright}
      </div>
    </footer>
  )
}
