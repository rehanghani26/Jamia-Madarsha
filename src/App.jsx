import React, { useEffect } from 'react'
import TopBar from './components/TopBar'
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import FeatureCards from './components/FeatureCards'
import QuestionsSection from './components/QuestionsSection'
import ThreeColumns from './components/ThreeColumns'
import Footer from './components/Footer'

export default function App() {
  // Back-to-top button logic
  useEffect(() => {
    const btn = document.getElementById('back-top')
    const onScroll = () => btn?.classList.toggle('show', window.scrollY > 320)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#EFEFEF]">
      <TopBar />
      <Header />
      <main>
        <HeroSlider />
        <FeatureCards />
        <QuestionsSection />
        <ThreeColumns />
      </main>
      <Footer />

      {/* Back to top */}
      <button
        id="back-top"
        aria-label="اوپر جائیں"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-0 left-5 w-[46px] h-[46px] bg-[#8A6F52] text-white flex items-center justify-center text-[20px] z-[500] hover:bg-[#2F241C] transition-colors"
      >
        ⌃
      </button>
    </div>
  )
}
