import Link from "next/link"

export function About() {
  return (
    <section id="about">
      <h2 className="sr-only">About</h2>
      <p className="text-lg leading-relaxed text-slate-700">
        Nice to meet you! I&apos;m a soon-to-be graduate from Western University with an Honours BSc in Computer Science, passionate about using technology to create real-world impact. I&apos;m eager to join a dynamic team where I can grow, contribute meaningfully, and build solutions that make a difference.
      </p>
      <p className="text-lg leading-relaxed text-slate-700 mt-5">
        Most recently as a Software Engineer at{' '}
        <Link href="https://www.cashex.app/" target="_blank" className="font-semibold hover:text-[#A95E5E] inline-flex items-center">
          CashEx
        </Link>
        , I gained hands-on experience in full-stack development. I built a React webapp for internal tooling, designed our app&apos;s notification architecture, built out back-end logic, and implemented front-end pages reaching over 100K users — A unique experience that has deeply strengthened my technical skills and adaptability.
      </p>
      <p className="text-lg leading-relaxed text-slate-700 mt-5">
        Outside of work and school, I&apos;m passionate about language learning! I speak a little bit of Tagalog, Mandarin, and Japanese; I love exploring new cultures and their food and I&apos;m probably currently writing my latest review on{' '}
        <Link href="https://beliapp.co/app/joeysiy" target="_blank" className="font-semibold hover:text-[#A95E5E] inline-flex items-center">
          beli
        </Link>
      </p>
    </section>
  )
}

