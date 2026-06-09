import React, { useState, useEffect, useCallback } from 'react'

/* ── Watermark Seal SVG ── */
function SlideSeal() {
  return (
    <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="110" cy="110" r="106" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="3"/>
      <circle cx="110" cy="110" r="94"  fill="none" stroke="rgba(255,255,255,0.3)"  strokeWidth="1.5"/>
      <g fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5">
        <polygon points="110,28 119,54 148,46 133,70 156,84 128,86 128,116 108,100 88,116 88,86 60,84 83,70 68,46 97,54"/>
      </g>
      <polygon points="110,50 116,70 136,64 126,82 140,92 120,92 118,112 108,98 98,112 96,92 76,92 90,82 80,64 100,70"
        fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
      <rect x="107" y="60" width="6" height="50" fill="rgba(255,255,255,0.6)"/>
      <polygon points="110,48 104,62 116,62" fill="rgba(255,255,255,0.7)"/>
      <circle cx="110" cy="44" r="7" fill="rgba(255,255,255,0.7)"/>
      <circle cx="110" cy="44" r="3" fill="rgba(220,190,120,0.8)"/>
      <path d="M86 120 Q110 112 134 120" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2"/>
      <path d="M86 120 L86 138 Q110 130 134 138 L134 120" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
      <line x1="110" y1="120" x2="110" y2="138" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
      <g stroke="rgba(220,190,120,0.45)" strokeWidth="1">
        <line x1="110" y1="4"   x2="110" y2="18"/>
        <line x1="110" y1="202" x2="110" y2="216"/>
        <line x1="4"   y1="110" x2="18"  y2="110"/>
        <line x1="202" y1="110" x2="216" y2="110"/>
        <line x1="20"  y1="20"  x2="30"  y2="30"/>
        <line x1="190" y1="20"  x2="180" y2="30"/>
        <line x1="20"  y1="200" x2="30"  y2="190"/>
        <line x1="190" y1="200" x2="180" y2="190"/>
      </g>
      <text x="110" y="160" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.65)" fontFamily="serif">جامعة العلوم الإسلامية</text>
      <text x="110" y="175" textAnchor="middle" fontSize="8"  fill="rgba(255,255,255,0.5)"  fontFamily="serif">علامہ بنوری ٹاؤن کراچی</text>
    </svg>
  )
}

/* ── Slide 1 SVG Scene ── */
function Slide1() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 420" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#c8a880"/>
          <stop offset="40%"  stopColor="#b89060"/>
          <stop offset="100%" stopColor="#8a5828"/>
        </linearGradient>
        <linearGradient id="wall1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#c08060"/>
          <stop offset="50%"  stopColor="#b06848"/>
          <stop offset="100%" stopColor="#904030"/>
        </linearGradient>
        <linearGradient id="court" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#e8dcc0"/>
          <stop offset="100%" stopColor="#c8b898"/>
        </linearGradient>
        <linearGradient id="dome1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#e8e0d0"/>
          <stop offset="100%" stopColor="#c0b8a8"/>
        </linearGradient>
      </defs>
      <rect width="1440" height="420" fill="url(#sky1)"/>
      <g opacity="0.4">
        <rect x="900" y="80"  width="80"  height="200" fill="#d0a878"/>
        <rect x="990" y="100" width="60"  height="180" fill="#c89868"/>
        <rect x="1060" y="60" width="100" height="220" fill="#d8b080"/>
        <rect x="1170" y="90" width="70"  height="190" fill="#c89060"/>
        <rect x="1250" y="110" width="90" height="170" fill="#d0a870"/>
        <rect x="1350" y="80" width="80"  height="200" fill="#c89060"/>
      </g>
      <rect x="0" y="160" width="920" height="260" fill="url(#wall1)"/>
      <g fill="#a05838">
        <rect x="0" y="148" width="920" height="18"/>
        {[30,70,110,150,190,230,270,310,350,390,430,470,510,550,590,630,670,710,750,790,830,870].map(x=>(
          <rect key={x} x={x} y="132" width="22" height="20"/>
        ))}
      </g>
      <rect x="60" y="168" width="600" height="180" fill="url(#court)" opacity="0.9"/>
      <line x1="60" y1="230" x2="660" y2="230" stroke="#b8a880" strokeWidth="1" opacity="0.5"/>
      <line x1="360" y1="168" x2="360" y2="348" stroke="#b8a880" strokeWidth="1" opacity="0.5"/>
      <g fill="#8a3820" opacity="0.75">
        {[80,120,160,200,240,280,320,380,420,460,500,540].map(x=>(
          <path key={x} d={`M${x} 130 L${x} 160 Q${x+10} 148 ${x+20} 160 L${x+20} 130 Z`}/>
        ))}
      </g>
      <rect x="670" y="100" width="230" height="248" fill="#b86040"/>
      <g fill="#8a3820">
        {[690,722,754,786,818,850].map(x=>(
          <path key={x} d={`M${x} 130 Q${x+10} 118 ${x+20} 130 L${x+20} 160 L${x} 160 Z`}/>
        ))}
      </g>
      <g fill="#8a3820" opacity="0.8">
        {[690,722,754,786,818,850].map(x=>(
          <path key={x+'r2'} d={`M${x} 175 Q${x+10} 163 ${x+20} 175 L${x+20} 205 L${x} 205 Z`}/>
        ))}
      </g>
      <ellipse cx="770" cy="100" rx="65" ry="44" fill="url(#dome1)"/>
      <rect x="730" y="100" width="80" height="30" fill="#e0d8c8"/>
      <ellipse cx="770" cy="98" rx="8" ry="4" fill="#c8c0b0"/>
      <circle cx="770" cy="93" r="3" fill="#b0a890"/>
      <rect x="648" y="260" width="8" height="120" fill="#6a4820"/>
      <ellipse cx="652" cy="255" rx="36" ry="18" fill="#2a5a18" transform="rotate(-18,652,255)"/>
      <ellipse cx="652" cy="260" rx="30" ry="14" fill="#3a6a22" transform="rotate(12,652,260)"/>
      <ellipse cx="30" cy="160" rx="28" ry="80" fill="#3a5a18" opacity="0.7"/>
      <rect x="0" y="370" width="920" height="50" fill="#9a6840" opacity="0.7"/>
      <rect width="1440" height="420" fill="rgba(130,65,18,0.42)"/>
    </svg>
  )
}

/* ── Slide 2 SVG Scene ── */
function Slide2() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 420" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#b89870"/>
          <stop offset="100%" stopColor="#7a4820"/>
        </linearGradient>
      </defs>
      <rect width="1440" height="420" fill="url(#sky2)"/>
      <rect x="100" y="140" width="900" height="280" fill="#b06040"/>
      <rect x="100" y="128" width="900" height="16" fill="#984830"/>
      <g fill="#984830">
        {[130,168,206,244,282,320,358,396,434,472,510,548,620,658,696,734,772,810,848,886,924].map(x=>(
          <rect key={x} x={x} y="110" width="20" height="22"/>
        ))}
      </g>
      <g fill="#8a3020" opacity="0.8">
        {[140,178,216,254,292,330,368,440,478,516,554,640,678,716,754,792,830,868,906].map(x=>(
          <path key={x} d={`M${x} 148 Q${x+10} 136 ${x+20} 148 L${x+20} 180 L${x} 180 Z`}/>
        ))}
      </g>
      <ellipse cx="590" cy="112" rx="70" ry="46" fill="#e0d8c8"/>
      <rect x="554" y="112" width="72" height="32" fill="#d8d0b8"/>
      <circle cx="590" cy="107" r="9" fill="#c0b8a0"/>
      <circle cx="590" cy="99" r="4" fill="#b0a888"/>
      <rect x="140" y="200" width="440" height="160" fill="#e0d0a8" opacity="0.7"/>
      <rect x="680" y="260" width="7" height="110" fill="#5a3a18"/>
      <ellipse cx="683" cy="255" rx="32" ry="16" fill="#2a5218" transform="rotate(-20,683,255)"/>
      <ellipse cx="683" cy="260" rx="28" ry="14" fill="#3a6020" transform="rotate(14,683,260)"/>
      <rect x="0" y="380" width="1440" height="40" fill="#9a6030" opacity="0.6"/>
      <rect width="1440" height="420" fill="rgba(110,52,10,0.45)"/>
    </svg>
  )
}

const SLIDES = [
  { id: 1, title: 'جامعة العلوم الإسلامية',    Scene: Slide1 },
  { id: 2, title: 'علامہ بنوری ٹاؤن کراچی',   Scene: Slide2 },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const total = SLIDES.length

  const goSlide = useCallback((n) => {
    setCurrent(((n % total) + total) % total)
  }, [total])

  useEffect(() => {
    const t = setInterval(() => goSlide(current + 1), 4500)
    return () => clearInterval(t)
  }, [current, goSlide])

  return (
    <section className="relative w-full h-[420px] overflow-hidden bg-[#7a4830]" aria-label="ہیرو سلائیڈر">
      <div className="relative w-full h-full">
        {SLIDES.map(({ id, title, Scene }, idx) => (
          <div key={id} className={`slide${current === idx ? ' active' : ''}`}>
            {/* SVG Scene */}
            <div className="w-full h-full relative overflow-hidden">
              <Scene />
            </div>
            {/* Brown tint overlay */}
            <div className="absolute inset-0 bg-[rgba(100,50,15,0.50)] z-[2]"/>
            {/* Watermark seal */}
            <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-[52%] w-[240px] h-[240px] z-[3] opacity-65">
              <SlideSeal />
            </div>
            {/* Slide title */}
            <div className="absolute bottom-14 right-20 z-[4] text-[38px] text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]" style={{fontFamily:"'Noto Nastaliq Urdu',serif"}}>
              {title}
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-[18px] left-1/2 -translate-x-1/2 flex gap-2.5 z-[5]">
          {SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => goSlide(idx)}
              aria-label={`سلائیڈ ${idx + 1}`}
              className={`w-3.5 h-3.5 rounded-full border-2 border-white/70 transition-colors p-0 ${current === idx ? 'bg-white/95' : 'bg-white/38'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
