'use client'

import Link from "next/link"
import { Github, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="py-12 lg:py-0 lg:w-4/10 lg:fixed lg:max-w-sm">
      <h1 className="text-4xl font-bold tracking-tight font-serif">Joey Siy</h1>
      <h2 className="mt-4 text-xl font-semibold text-slate-700 font-serif">Software Engineer</h2>
      <p className="mt-4 text-slate-600">
        Hello! I&apos;m a soon-to-be Computer Science graduate from Western University, passionate about building impactful solutions for real-world problems.
      </p>
      <nav className="mt-16 space-y-2">
        {['about', 'experience', 'projects'].map((section) => (
          <Link
            key={section}
            href={`#${section}`}
            className={`block py-1.5 text-sm ${
              activeSection === section ? "text-[#A95E5E]" : "text-slate-600 hover:text-[#9E5454]"
            }`}
          >
            {section.toUpperCase()}
          </Link>
        ))}
      </nav>
      <div className="mt-8 flex gap-4">
        {[
          { href: "https://github.com/jsiy", icon: Github, label: "GitHub" },
          { href: "https://www.linkedin.com/in/joey-siy/", icon: Linkedin, label: "LinkedIn" },
          { href: "https://www.instagram.com/joeysiy/", icon: Instagram, label: "Instagram" },
          { href: "mailto:joeysiy8@gmail.com", icon: Mail, label: "Email" }
        ].map(({ href, icon: Icon, label }) => (
          <Link key={label} href={href} target="_blank" className="text-slate-600 hover:text-[#9E5454]">
            <Icon className="h-5 w-5" />
            <span className="sr-only">{label}</span>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Button variant="link" asChild className="p-0 text-slate-600 hover:text-[#9E5454]">
          <Link href="https://www.dropbox.com/scl/fi/rjkw9xkp0x1sirx57xbdy/joeysiy-resume.pdf?rlkey=d248k0qzlba7xwbfgqzluhpef&st=jxn0ct1f&dl=0" target="_blank">
            View resumé
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

