'use client'

import { ArrowUpRight, Github, Instagram, Linkedin } from 'lucide-react'
import Link from "next/link"
import { useEffect, useState } from "react"
import { Noto_Serif, Roboto } from 'next/font/google'

const notoSerif = Noto_Serif({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-noto-serif'
})
const roboto = Roboto({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
})

export default function Component() {
  const [activeSection, setActiveSection] = useState("about")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section.id)
        }
      })
      setScrollPosition(window.scrollY)
    }
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className={`min-h-screen bg-[radial-gradient(ellipse_at_top_left,_rgba(255,248,244,1)_0%,rgba(255,240,236,1)_40%,rgba(255,232,228,1)_100%)] 0 text-slate-900 relative ${roboto.variable} ${notoSerif.variable} font-sans overflow-visible`}>
      {/* Cursor glow effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y  + scrollPosition}px, rgba(255, 120, 120, 0.09), transparent 80%)`,
        }}
      />

      {/* First layer: Base gradient with more colors */}
      <div className="absolute inset-0 bg-gradient-to-tl from-rose-200/30 via-rose-100 to-rose-200/30" />
      
      {/* Second layer: More pronounced noise texture */}
      <div 
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIj4KPGZpbHRlciBpZD0iYSIgeD0iMCIgeT0iMCI+CjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIuNzUiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPgo8L2ZpbHRlcj4KPHJlY3Qgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNTAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjMiLz4KPC9zdmc+')]"
        style={{
          opacity: 1.0,
          mixBlendMode: 'multiply'
        }}
      />

      {/* Third layer: Additional grain for more texture */}
      <div 
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIj4KPGZpbHRlciBpZD0iYSIgeD0iMCIgeT0iMCI+CjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIxLjUiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPgo8L2ZpbHRlcj4KPHJlY3Qgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNTAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjIiLz4KPC9zdmc+')]"
        style={{
          opacity: 0.15,
          mixBlendMode: 'multiply'
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-8 lg:py-24">
          {/* Left Column - Fixed on Desktop */}
          <div className="py-12 lg:py-0 lg:w-4/10 lg:fixed lg:max-w-sm">
            <h1 className="text-4xl font-bold tracking-tight font-serif">Joey Siy</h1>
            <h2 className="mt-4 text-xl font-semibold text-slate-700 font-serif">Software Engineer</h2>
            <p className="mt-4 text-slate-600">
            Hello! I'm a soon-to-be Computer Science graduate from Western University, passionate about building impactful solutions for real-world problems.
            </p>
            <nav className="mt-16 space-y-2">
              <Link
                href="#about"
                className={`block py-1.5 text-sm ${
                  activeSection === "about" ? "text-[#A95E5E]" : "text-slate-600 hover:text-[#9E5454]"
                }`}
              >
                ABOUT
              </Link>
              <Link
                href="#experience"
                className={`block py-1.5 text-sm ${
                  activeSection === "experience" ? "text-[#A95E5E]" : "text-slate-600 hover:text-[#9E5454]"
                }`}
              >
                EXPERIENCE
              </Link>
              <Link
                href="#projects"
                className={`block py-1.5 text-sm ${
                  activeSection === "projects" ? "text-[#A95E5E]" : "text-slate-600 hover:text-[#9E5454]"
                }`}
              >
                PROJECTS
              </Link>
              <Link
                href="#contact"
                className={`block py-1.5 text-sm ${
                  activeSection === "contact" ? "text-[#A95E5E]" : "text-slate-600 hover:text-[#9E5454]"
                }`}
              >
                CONTACT
              </Link>
            </nav>
            <div className="mt-8 flex gap-4">
              <Link href="https://github.com" className="text-slate-600 hover:text-[#9E5454]">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com" className="text-slate-600 hover:text-[#9E5454]">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://instagram.com" className="text-slate-600 hover:text-[#9E5454]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Right Column - Scrollable Content */}
          <div className="lg:ml-[40%] lg:w-6/10 pb-24">
            <div className="max-w-2xl">
              <section id="about">
                <h2 className="sr-only">About</h2>
                <p className="text-lg leading-relaxed text-slate-700">
                Nice to meet you! I’m a soon-to-be graduate from Western University with an Honours BSc in Computer Science, passionate about using technology to create real-world impact. I’m eager to join a dynamic team where I can grow, contribute meaningfully, and build solutions that make a difference.
                </p>
                <p className="text-lg leading-relaxed text-slate-700 mt-5">
                Most recently as a Software Engineer Intern at{' '}
                  <Link href="#" className="font-semibold hover:text-[#A95E5E] inline-flex items-center">
                    CashEx
                  </Link>
                , I gained hands-on experience in full-stack development. I built a React webapp for internal tooling, designed our app’s notification architecture, and implemented front-end pages reaching over 100K users — A unique experience that has deeply strengthened my technical skills and adaptability.
                </p>
                <p className="text-lg leading-relaxed text-slate-700 mt-5">
                Outside of work and school, I’m passionate about language learning! I speak a little bit of Tagalog, Mandarin, and Japanese; I love exploring new cultures and their food and I’m probably currently writing my latest review on{' '}
                <Link href="#" className="font-semibold hover:text-[#A95E5E] inline-flex items-center">
                    beli
                </Link>
                </p>
                
              </section>

              <section id="experience" className="py-24">
                <h2 className="text-2xl font-bold mb-8 font-serif">Experience</h2>
                <div className="space-y-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-rose-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                    <header className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                      2022 — 2023
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-900">
                        <div>
                          <Link href="#" className="inline-flex items-baseline font-medium leading-tight text-slate-900 hover:text-[#A95E5E] focus-visible:text-[#A95E5E] group/link text-base font-serif">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                            Software Engineer Intern • CashEx
                          </Link>
                        </div>
                      </h3>
                      <p className="mt-2 text-sm leading-normal text-slate-600">
                        Developed internal tooling through a React web app used by all teams at the company. Implemented backend logic to be accessed by app and tools through API calls. Designed and built front-end pages on our app, reaching all 100K+ users. Worked closely with cross-functional teams to implement lean and effective solutions for the startup's needs.
                      </p>
                      <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-rose-100 px-3 py-1 text-xs font-medium leading-5 text-[#A95E5E]">
                            React
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-rose-100 px-3 py-1 text-xs font-medium leading-5 text-[#A95E5E]">
                            Python
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-rose-100 px-3 py-1 text-xs font-medium leading-5 text-[#A95E5E]">
                            SQL
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-rose-100 px-3 py-1 text-xs font-medium leading-5 text-[#A95E5E]">
                            Flutter
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-rose-100 px-3 py-1 text-xs font-medium leading-5 text-[#A95E5E]">
                            GCP
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="projects" className="py-24">
                <h2 className="text-2xl font-bold mb-8 font-serif">Projects</h2>
                <div className="space-y-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-rose-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-900">
                        <div>
                          <Link href="#" className="inline-flex items-baseline font-medium leading-tight text-slate-900 hover:text-[#A95E5E] focus-visible:text-[#A95E5E] group/link text-base font-serif">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                            eBook Translator
                          </Link>
                        </div>
                      </h3>
                      <p className="mt-2 text-sm leading-normal text-slate-600">
                      Developing a SaaS eBook translation web app that allows users to translate EPUB files between languages using OpenAI's API. Built with Next.js, Tailwind CSS, and FastAPI, the app features a streamlined interface for file uploads, LLM model selection, and real-time progress tracking. Backend logic splits EPUB files, maintains translation context, and reassembles outputs with original formatting. RESTful APIs manage tasks like pausing, resuming, and editing translations. Hosted on Vercel, leveraging serverless architecture for global deployment and scalability.                      </p>
                    </div>
                  </div>
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-rose-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-900">
                        <div>
                          <Link href="#" className="inline-flex items-baseline font-medium leading-tight text-slate-900 hover:text-[#A95E5E] focus-visible:text-[#A95E5E] group/link text-base font-serif">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                            LobbyIQ
                          </Link>
                        </div>
                      </h3>
                      <p className="mt-2 text-sm leading-normal text-slate-600">
                      Developed a PDF export feature, enabling users to generate print-ready documents from complex data visualizations. Using Puppeteer, converted React web pages into polished formats and integrated the service with existing frontend and backend systems via RESTful APIs. Collaborated with stakeholders and developers in an Agile workflow to create a seamless and user-friendly experience.
                      </p>
                    </div>
                  </div>

                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-rose-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-900">
                        <div>
                          <Link href="#" className="inline-flex items-baseline font-medium leading-tight text-slate-900 hover:text-[#A95E5E] focus-visible:text-[#A95E5E] group/link text-base font-serif">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                            Hack the 6ix
                          </Link>
                        </div>
                      </h3>
                      <p className="mt-2 text-sm leading-normal text-slate-600">
                      Built the landing page and hacker dashboard front-ends for Toronto’s largest student-led summer hackathon, attracting 1,500+ applicants annually. Developed these pages using a custom React component library and collaborated with UI/UX designers and developers to translate Figma prototypes into functional, user-friendly interfaces.
                      </p>
                    </div>
                  </div>

                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-rose-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-900">
                        <div>
                          <Link href="#" className="inline-flex items-baseline font-medium leading-tight text-slate-900 hover:text-[#A95E5E] focus-visible:text-[#A95E5E] group/link text-base font-serif">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                            BridgeML
                          </Link>
                        </div>
                      </h3>
                      <p className="mt-2 text-sm leading-normal text-slate-600">
                      Developed and deployed a Flask web app that translates ASL signs into plain text using a TensorFlow Keras model trained on the Kaggle ASL dataset. Visualized model performance with Matplotlib and led a team of three students through Agile development, ensuring timely completion through sprint planning and SCRUM meetings. Overcame technical challenges by diving deep into concepts like RNNs, computer vision, and CNNs.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="contact" className="py-24">
                <h2 className="text-2xl font-bold mb-8 font-serif">Get In Touch</h2>
                <p className="text-slate-600">
                  I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'm always opening to connecting!
                </p>
                <div className="mt-8">
                <Link
                  href="mailto:joeysiy8@example.com"
                  className="inline-flex items-center justify-center rounded-md 
                  bg-[#B76A6A] px-4 py-2 text-sm font-medium text-white 
                  hover:bg-[#9E5454] focus:outline-none focus-visible:ring-2 
                  focus-visible:ring-[#A95E5E] focus-visible:ring-offset-2"
                >
                  Say Hello
                </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}