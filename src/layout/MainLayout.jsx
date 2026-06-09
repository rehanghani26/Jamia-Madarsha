import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MainLayout() {
  // Back-to-top button logic
  useEffect(() => {
    const btn = document.getElementById('back-top')
    const onScroll = () => btn?.classList.toggle('show', window.scrollY > 320)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#EFEFEF] flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />

      {/* Back to top */}
      <button
        id="back-top"
        aria-label="اوپر جائیں"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-5 left-5 w-[46px] h-[46px] bg-[#8A6F52] text-white flex items-center justify-center text-[20px] z-[500] hover:bg-[#2F241C] transition-colors rounded-full shadow-lg"
      >
        ⌃
      </button>
    </div>
  )
}
