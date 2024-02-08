import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logofacebook from '@/images/logos/facebook.svg'

const projects = [
  {
    name: 'Spam email detection using machine learning',
    description:
      'Designed and developed an spam email detection system using Python, focusing on improving email filtering accuracy.',
    link: { href: '#', label: '' },
    logo: logoPlanetaria,
  },
  {
    name: 'Plant Disease Identification Using Leaf Image',
    description:
      'Designed and developed a machine learning-based application for plant disease identification using leaf images as input.',
    link: { href: '#', label: 'github.com' },
    logo: logoAnimaginary,
  },
  {
    name: 'Diabetes Prediction Using Artificial Intelligence',
    description:
      'Developed an AI model to predict diabetes, leveraging Python and key libraries, including TensorFlow, pandas, and numpy',
    link: { href: '#', label: 'github.com' },
    logo: logoHelioStream,
  },
  {
    name: 'Cloud Computing MongoDB Project: Navigating the Cloud with MongoDB Compass and Atlas',
    description:
      'Embarking on a cloud computing journey, I orchestrated a MongoDB project using the dynamic duo of MongoDB Compass and MongoDB Atlas. This seamless integration allowed me to learn the database, query language a little bit more in the cloud.',
    link: { href: '#', label: '' },
    logo: logofacebook,
  },
  {
    name: 'Airbnb Clone - placely',
    description:
      'Crafted an immersive travel experience with Placely, where the world is just a click away. The frontend, developed using Vue.js and Tailwind CSS, offers a sleek and responsive user interface. For the backend, Adonis.js powers the robust infrastructure, while PostgreSQL handles the dynamic database. Explore, discover, and plan your next adventure with Placely!',
    link: { href: 'https://github.com/tejathalari/airbnb', label: 'github.com' },
    logo: logoCosmos,
  },
  {
    name: 'spotify clone',
    description:
      'Crafting the Spotify Clone has been a transformative journey for me. This project served as a pivotal moment where the intricacies of frontend development truly crystallized. Designing and implementing the frontend not only honed my technical skills in HTML, CSS, and Vue.js but also deepened my understanding of creating immersive user experiences.',
    link: { href: 'https://github.com/tejathalari/spotify-clone', label: 'github.com' },
    logo: logoOpenShuttle,
  },
  {
    name: 'Infinite Image Scroller',
    description:
      'The Infinite Image Scroller project was an exciting endeavor that delved into the realm of dynamic content presentation. Through this project, I explored the implementation of infinite scrolling techniques to seamlessly load and display images as the user navigates the interface. This project not only enhanced my proficiency in frontend technologies like JavaScript, HTML, and CSS but also provided insights into optimizing user experience and performance.',
    link: { href: 'https://github.com/tejathalari/infinite-gallery', label: 'github.com' },
    link: { href: 'https://tejathalari.github.io/infinite-gallery/', label: 'Live Demo' },
    logo: "logoInfiniteScroller"
  }
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'My Work',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="My Work"
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            {index >= 4 ? (
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            ) : null}
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
