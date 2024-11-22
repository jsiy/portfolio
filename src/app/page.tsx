'use client'

import { useState, useEffect } from 'react'
import { Sidebar } from '@/components/sidebar'
import { MainContent } from '@/components/main-content'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_rgba(255,248,244,1)_0%,rgba(255,240,236,1)_40%,rgba(255,232,228,1)_100%)] text-slate-900 relative overflow-visible">
      {/* Cursor glow effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y + scrollPosition}px, rgba(255, 120, 120, 0.09), transparent 80%)`,
        }}
      />
      <BackgroundLayers />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-8 lg:py-24">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </div>
  )
}

function BackgroundLayers() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-tl from-rose-200/30 via-rose-100 to-rose-200/30" />
      <div 
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIj4KPGZpbHRlciBpZD0iYSIgeD0iMCIgeT0iMCI+CjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIuNzUiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPgo8L2ZpbHRlcj4KPHJlY3Qgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNTAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjMiLz4KPC9zdmc+')]"
        style={{
          opacity: 1.0,
          mixBlendMode: 'multiply'
        }}
      />
      <div 
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIj4KPGZpbHRlciBpZD0iYSIgeD0iMCIgeT0iMCI+CjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIxLjUiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPgo8L2ZpbHRlcj4KPHJlY3Qgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNTAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjIiLz4KPC9zdmc+')]"
        style={{
          opacity: 0.15,
          mixBlendMode: 'multiply'
        }}
      />
    </>
  )
}

