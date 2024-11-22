import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen } from 'lucide-react'
import liqlogo from '@/assets/images/liq-logo-recolor.png'
import ht6logo from '@/assets/images/ht6-logo-recolor.png'
import kagglelogo from '@/assets/images/kaggle-logo-recolor.png'

// Define the Project type
type Project = {
  title: string
  description: string
  icon?: React.ComponentType<{ className?: string }>; // This will be a React component type (e.g., lucide-react icons)
  image?: StaticImageData // Image source (URL or imported image path)
  link: string
}

// Define the projects array with the Project type
const projects: Project[] = [
  {
    title: "eBook Translator",
    description: "Developing a SaaS eBook translation web app that allows users to translate EPUB files between languages using OpenAI's API. Built with Next.js, Tailwind CSS, and FastAPI, the app features a streamlined interface for file uploads, LLM model selection, and real-time progress tracking. Backend logic splits EPUB files, maintains translation context, and reassembles outputs with original formatting. RESTful APIs manage tasks like pausing, resuming, and editing translations. Hosted on Vercel, leveraging serverless architecture for global deployment and scalability.",
    icon: BookOpen,
    link: ""
  },
  {
    title: "LobbyIQ",
    description: "Developed a PDF export feature, enabling users to generate print-ready documents from complex data visualizations. Using Puppeteer, converted React web pages into polished formats and integrated the service with existing frontend and backend systems via RESTful APIs. Collaborated with stakeholders and developers in an Agile workflow to create a seamless and user-friendly experience.",
    image: liqlogo,
    link: "https://ca.lobbyiq.org/"
  },
  {
    title: "Hack the 6ix",
    description: "Built the landing page and hacker dashboard front-ends for Toronto's largest student-led summer hackathon, attracting 1,500+ applicants annually. Developed these pages using a custom React component library and collaborated with UI/UX designers and developers to translate Figma prototypes into functional, user-friendly interfaces.",
    image: ht6logo,
    link: "https://2023.hackthe6ix.com/"
  },
  {
    title: "BridgeML",
    description: "Developed and deployed a Flask web app that translates ASL signs into plain text using a TensorFlow Keras model trained on the Kaggle ASL dataset. Visualized model performance with Matplotlib and led a team of three students through Agile development, ensuring timely completion through sprint planning and SCRUM meetings. Overcame technical challenges by diving deep into concepts like RNNs, computer vision, and CNNs.",
    image: kagglelogo,
    link: "https://github.com/jsiy/western-ai-asl"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-2xl font-bold mb-8 font-serif">Projects</h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <Card key={index} className="group shadow-none relative transition-all bg-transparent border-0 hover:bg-rose-100/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg">
            <Link href={project.link}>
              <CardContent className="p-6">
                <div className="grid gap-4 sm:grid-cols-8 sm:gap-8">
                  <div className="sm:col-span-2 flex justify-center items-center">
                    {project.icon ? (
                      <project.icon className="h-16 w-16 text-[#A95E5E]" />
                    ) : (
                      project.image && (
                        <Image
                          src={project.image}
                          alt={`${project.title} logo`}
                          width={80}
                          height={80}
                          className="rounded-lg"
                        />
                      )
                    )}
                  </div>
                  <div className="sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-900">
                      <p className="inline-flex items-baseline font-medium leading-tight text-slate-900 hover:text-[#A95E5E] focus-visible:text-[#A95E5E] group/link text-base font-serif">
                        {project.title}
                      </p>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-slate-600">
                      {project.description}
                    </p>
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
