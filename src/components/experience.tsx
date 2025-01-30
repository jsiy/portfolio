import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import cashexlogo from '@/assets/images/cashex-logo.png'

type Experience = {
  title: string;
  company: string;
  logo: StaticImageData;
  period: string;
  description: string;
  link: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Full Stack Software Engineer",
    company: "CashEx",
    logo: cashexlogo,
    period: "2022 — 2023",
    description: "Developed internal tooling through a React web app used by all teams at the company. Implemented backend logic to be accessed by app and tools through API calls. Designed and built front-end pages on our app, reaching all 100K+ users. Worked closely with cross-functional teams to implement lean and effective solutions for the startup's needs.",
    link: "https://www.cashex.app/",
    technologies: ['React', 'Python', 'SQL', 'Flutter', 'GCP'],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <h2 className="text-2xl font-bold mb-8 font-serif">Experience</h2>
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <Card key={index} className="group shadow-none bg-transparent border-none relative transition-all hover:bg-rose-100/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg overflow-hidden">
            <Link href={experience.link} target="_blank" className="absolute inset-0 z-10">
              <span className="sr-only">View {experience.company} details</span>
            </Link>
            <Link href={experience.link} target="_blank">
            <CardContent className="p-6 relative z-20">
              <div className="grid gap-4 sm:grid-cols-8 sm:gap-8">
                <div className="sm:col-span-2 flex justify-center items-center">
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                </div>
                <div className="sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-900">
                    <p className="inline-flex items-baseline font-medium leading-tight text-slate-900 hover:text-[#A95E5E] focus-visible:text-[#A95E5E] group/link text-base font-serif">
                      {experience.title} • {experience.company}
                    </p>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-600">
                    {experience.period}
                  </p>
                  <p className="mt-2 text-sm leading-normal text-slate-600">
                    {experience.description}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2" aria-label="Technologies used">
                    {experience.technologies.map((tech) => (
                      <li key={tech}>
                        <Badge variant="secondary" className="bg-rose-100 text-[#A95E5E]">
                          {tech}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  )
}

