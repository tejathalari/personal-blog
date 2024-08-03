import { 
  AcademicCapIcon, 
  GlobeAltIcon, 
  UserIcon, 
  Cog8ToothIcon, 
  PhotoIcon, 
  PuzzlePieceIcon, 
  MusicNoteIcon as MusicNoteAltIcon // Renaming the non-existent MusicNoteIcon
} from '@heroicons/react/24/outline';
import { SimpleLayout } from '@/components/SimpleLayout';
import { Card } from '@/components/Card';

const projects = [
  {
    name: 'Home Rental Management System',
    description: 'Developed a comprehensive home rental management system with a focus on a seamless user experience and robust backend functionality. The frontend is powered by Vue.js and styled with Tailwind CSS for a modern, responsive design. The backend utilizes Adonis.js and Node.js to deliver a scalable RESTful API, while PostgreSQL manages dynamic data storage efficiently. Enhanced performance and SEO through server-side rendering (SSR) and maintained deployment consistency with CI/CD pipelines.',
    link: { href: 'https://github.com/tejathalari/airbnb', label: 'github.com' },
    icon: <GlobeAltIcon className="h-12 w-12 text-orange-500" />,  // Icon representing real estate and global
  },
  {
    name: 'Music Streaming Application',
    description: 'Designed a music streaming application using Vue.js for a responsive single-page experience and Tailwind CSS for modern design. Integrated Axios for efficient API interactions and Vuex for state management, ensuring a smooth user experience. Employed lazy loading and code-splitting to enhance performance and reduce initial load times. Implemented real-time data streaming with WebSocket for live music updates and user interactions.',
    link: { href: 'https://github.com/tejathalari/spotify-clone', label: 'github.com' },
    icon: <Cog8ToothIcon className="h-12 w-12 text-teal-500" />,  // Icon representing technology and streaming
  },
  {
    name: 'Infinite Image Scroller',
    description: 'Developed an Infinite Image Scroller to provide a seamless and dynamic content experience. Utilized infinite scrolling techniques to automatically load and display images as users scroll through the interface. This project improved my skills in JavaScript, HTML, and CSS, and offered valuable insights into enhancing user experience and performance optimization.',
    link: { href: 'https://tejathalari.github.io/infinite-gallery/', label: 'Live Demo' },
    icon: <PhotoIcon className="h-12 w-12 text-indigo-500" />,  // Icon representing images
  },
  {
    name: 'Full Stack E-commerce Website',
    description: 'Developed a comprehensive e-commerce platform featuring a Vue.js frontend and a robust Laravel backend. Integrated Stripe for secure and efficient payment processing. Utilized Pinia for state management, ensuring a reliable and smooth user experience. The project highlights my skills in building scalable and functional full-stack applications.',
    link: { href: 'https://github.com/tejathalari/Easycart-E-com-', label: 'github.com' },
    icon: <GlobeAltIcon className="h-12 w-12 text-gray-500" />,  // Icon representing commerce and global reach
  },
  {
    name: 'AI-Powered Image Generation Platform',
    description: 'Developed a cutting-edge image generation platform utilizing PHP and Laravel, incorporating OpenAI’s API to create unique images based on user inputs. Designed a sophisticated backend system to handle user interactions and manage API communication efficiently. This project showcases advanced PHP development skills and expertise in integrating AI technologies.',
    link: { href: '', label: '' },
    icon: <Cog8ToothIcon className="h-12 w-12 text-yellow-500" />,  // Icon representing AI and technology
  },
  {
    name: 'Spam Email Detection Using Machine Learning',
    description: 'Developed a sophisticated spam email detection system leveraging machine learning techniques. Utilized Python and popular libraries such as Scikit-learn to build and train models for identifying spam emails with high accuracy. The project involved data preprocessing, feature extraction, and model evaluation, demonstrating the ability to handle real-world data and improve email filtering processes.',
    link: { href: '#', label: '' },
    icon: <Cog8ToothIcon className="h-12 w-12 text-blue-500" />,  // Icon representing machine learning and AI
  },
  {
    name: 'Plant Disease Identification Using Leaf Images',
    description: 'Developed an advanced machine learning application to identify plant diseases from leaf images. Utilized convolutional neural networks (CNNs) and data augmentation techniques to improve model accuracy. This tool aids farmers and agricultural professionals in early disease detection, potentially enhancing crop yield and reducing losses.',
    link: { href: '#', label: '' },
    icon: <PhotoIcon className="h-12 w-12 text-green-500" />,  // Icon representing image analysis
  },
  {
    name: 'Diabetes Prediction Using Artificial Intelligence',
    description: 'Created an AI-driven model to predict the likelihood of diabetes based on patient data. Implemented using Python with libraries such as TensorFlow for building the neural network, and pandas and numpy for data preprocessing and analysis. This model assists in early diagnosis and personalized healthcare by analyzing key health indicators.',
    link: { href: '', label: '' },
    icon: <UserIcon className="h-12 w-12 text-red-500" />,  // Icon representing health and medical
  },
  {
    name: 'Data Querying with MongoDB Compass and Atlas',
    description: 'Developed a project utilizing MongoDB Compass and Atlas to efficiently query and analyze a dataset. The project involved creating complex queries to extract and manipulate data, enhancing my skills in data handling and cloud-based data management.',
    link: { href: '#', label: '' },
    icon: <PuzzlePieceIcon className="h-12 w-12 text-blue-600" />,  // Icon representing data and queries
  }
];

export default function Projects() {
  return (
    <SimpleLayout
      title="My Work"
      intro="I’ve worked on a variety of projects over the years, and these are the ones I’m most proud of. Each project demonstrates my expertise in different areas, from frontend development to full-stack solutions. These projects highlight my skills, problem-solving abilities, and commitment to creating high-quality work. If you’d like to learn more about any of these projects or discuss my work in detail, feel free to get in touch."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              {project.icon}
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  );
}
