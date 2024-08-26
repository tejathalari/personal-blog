import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/IMG-main.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description: 'I’m Sai Teja Thalari, a recent Computer Science graduate from the University of Texas at San Antonio, seeking software engineering opportunities.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Portrait of Sai Teja Thalari"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi,I&rsquo;m
            <span className="text-red-500"> Sai Teja Thalari.</span>
            <br />Computer Science Graduate from the University of Texas at San Antonio.
          </h1>

          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <h3 className="text-2xl font-bold">About Me</h3>
            <p>
              I am a Computer Science graduate from the University of Texas at San Antonio, specializing in web development and software engineering. With a strong foundation in both frontend and backend technologies, I am passionate about building innovative and efficient web applications.
            </p>
            <p>
              During my academic career, I have developed and contributed to several projects that demonstrate my skills in designing responsive user interfaces, developing robust back-end systems, and solving complex programming challenges.
            </p>
            <p>
              I am eager to bring my technical expertise and enthusiasm to a dynamic team, where I can contribute to impactful projects and further my professional growth. I am currently seeking opportunities to apply my skills in a collaborative and forward-thinking environment.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/tejathalari" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.instagram.com/_sai._.teja/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/sai-teja-thalari-bb8263236/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:saitejathalari@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              saitejathalari@gmail.com
            </SocialLink>
            <li className="mt-8">
  <a
    href="/SaiTejaThalari.pdf"  // Path is relative to the public directory
    className="inline-block px-6 py-3 text-sm font-medium text-white bg-teal-500 rounded-lg shadow-md transition-colors duration-300 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
    target="_blank"
    rel="noopener noreferrer"
  >
    View My Resume
  </a>
</li>

          </ul>
        </div>
      </div>
    </Container>
  )
}
