import { About } from './about'
import { Experience } from './experience'
import { Projects } from './projects'

export function MainContent() {
  return (
    <div className="lg:ml-[40%] lg:w-6/10 pb-24">
      <div className="max-w-2xl">
        <About />
        <Experience />
        <Projects />
      </div>
    </div>
  )
}

