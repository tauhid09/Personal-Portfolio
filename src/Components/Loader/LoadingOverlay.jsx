import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import '../../App.css';


export default function LoadingOverlay() {
  const loadingRef = useRef(null)

  useEffect(() => {
    // simple loading counter animation
    let counter = 0
    const loadingEl = loadingRef.current
    const counterEl = loadingEl?.querySelector('.loading-counter')
    const interval = setInterval(() => {
      counter += Math.random() * 3 + 1
      if (counter >= 100) {
        counter = 100
        clearInterval(interval)
        // fade out
        gsap.to(loadingEl, { y: '-100%', duration: 3.2, ease: 'power3.inOut', onComplete: () => { loadingEl.style.display = 'none' } })
      }
      if (counterEl) counterEl.textContent = `${Math.round(counter).toString().padStart(2, '0')}%`
    }, 30)

    return () => {
      clearInterval(interval)
    }
  },[])

  return (
    <div ref={loadingRef} className="fixed top-0 left-0 w-full h-full bg-black/25 backdrop-blur-3xl text-white z-9999 flex justify-center items-center font-bold text-5xl font-fira">
      <span className=' md:text-[150px] font-Dynalight' >hello</span><span className="loading-counter absolute bottom-1 md:text-[100px] text-amber-50/45">00%</span>
    </div>
  )
}