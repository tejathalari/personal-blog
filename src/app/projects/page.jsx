import { SimpleLayout } from '@/components/SimpleLayout';
import { Card } from '@/components/Card';

const projects = [
  {
    name: 'Home Rental Management System',
    description: 'Developed a comprehensive home rental management system with a focus on a seamless user experience and robust backend functionality. The frontend is powered by Vue.js and styled with Tailwind CSS for a modern, responsive design. The backend utilizes Adonis.js and Node.js to deliver a scalable RESTful API, while PostgreSQL manages dynamic data storage efficiently. Enhanced performance and SEO through server-side rendering (SSR) and maintained deployment consistency with CI/CD pipelines.',
    link: { href: 'https://github.com/tejathalari/airbnb', label: 'github.com' },
    image: 'https://media.istockphoto.com/id/2151006627/photo/3d-house-on-winner-podium.webp?b=1&s=170667a&w=0&k=20&c=7liBzuAncJQOeCehYbOVp1B8Ee2W_uexhMQsfC1cCcc=',  // Real estate
  },
  {
    name: 'Music Streaming Application',
    description: 'Designed a music streaming application using Vue.js for a responsive single-page experience and Tailwind CSS for modern design. Integrated Axios for efficient API interactions and Vuex for state management, ensuring a smooth user experience. Employed lazy loading and code-splitting to enhance performance and reduce initial load times. Implemented real-time data streaming with WebSocket for live music updates and user interactions.',
    link: { href: 'https://github.com/tejathalari/spotify-clone', label: 'github.com' },
    image: 'https://media.istockphoto.com/id/1665699201/photo/radio-broadcasting-station-professional-equipment.webp?b=1&s=170667a&w=0&k=20&c=NBq_X2hLhe_pDVFoyHMTcWtBubv_NiyOprVMW68n1-M=',  // Music
  },
  {
    name: 'Infinite Image Scroller',
    description: 'Developed an Infinite Image Scroller to provide a seamless and dynamic content experience. Utilized infinite scrolling techniques to automatically load and display images as users scroll through the interface. This project improved my skills in JavaScript, HTML, and CSS, and offered valuable insights into enhancing user experience and performance optimization.',
    link: { href: 'https://tejathalari.github.io/infinite-gallery/', label: 'Live Demo' },
    image: 'https://media.istockphoto.com/id/865452250/photo/surreal-enigmatic-picture-on-canvas.webp?b=1&s=170667a&w=0&k=20&c=jnTqz1R1xycItHfVJMU3KPfuoT0e4dHFb8RrBPvi_cM=',  // Scrolling images
  },
  {
    name: 'Full Stack E-commerce Website',
    description: 'Developed a comprehensive e-commerce platform featuring a Vue.js frontend and a robust Laravel backend. Integrated Stripe for secure and efficient payment processing. Utilized Pinia for state management, ensuring a reliable and smooth user experience. The project highlights my skills in building scalable and functional full-stack applications.',
    link: { href: 'https://github.com/tejathalari/Easycart-E-com-', label: 'github.com' },
    image: 'https://media.istockphoto.com/id/1265958240/photo/concepts-of-online-shopping-and-product-price-reductions.webp?b=1&s=170667a&w=0&k=20&c=xJFh8UM6NFxf30HCkApEcqfCkVV4jjc-uoXvgniDMmk=',  // E-commerce
  },
  {
    name: 'AI-Powered Image Generation Platform',
    description: 'Developed a cutting-edge image generation platform utilizing PHP and Laravel, incorporating OpenAI’s API to create unique images based on user inputs. Designed a sophisticated backend system to handle user interactions and manage API communication efficiently. This project showcases advanced PHP development skills and expertise in integrating AI technologies.',
    link: { href: '', label: '' },
    image: 'https://media.istockphoto.com/id/1324545024/photo/artificial-intelligence-technology-machine-learning-business-concept.webp?b=1&s=170667a&w=0&k=20&c=mvQpvMZXx6ZP4lcnyilSGQy7WAExPwvqMedB87rQNV8=',  // AI concept
  },
  {
    name: 'Spam Email Detection Using Machine Learning',
    description: 'Developed a sophisticated spam email detection system leveraging machine learning techniques. Utilized Python and popular libraries such as Scikit-learn to build and train models for identifying spam emails with high accuracy. The project involved data preprocessing, feature extraction, and model evaluation, demonstrating the ability to handle real-world data and improve email filtering processes.',
    link: { href: '#', label: '' },
    image: 'https://media.istockphoto.com/id/1455658894/photo/system-hacked-warning-alert-on-notebook-cyber-attack-on-computer-network-virus-spyware.webp?b=1&s=170667a&w=0&k=20&c=8owR3Wusnr8dWF3zqijbsocanyzBVH2LeMj2AnOKdT4=',  // Spam detection
  },
  {
    name: 'Plant Disease Identification Using Leaf Images',
    description: 'Developed an advanced machine learning application to identify plant diseases from leaf images. Utilized convolutional neural networks (CNNs) and data augmentation techniques to improve model accuracy. This tool aids farmers and agricultural professionals in early disease detection, potentially enhancing crop yield and reducing losses.',
    link: { href: '#', label: '' },
    image: 'https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbnQlMjBkaXNlYXNlJTIwaWRlbnRpZmljYXRpb24lMjBwbGF0Zm9ybXxlbnwwfHwwfHx8MA%3D%3D',  // Plant disease
  },
  {
    name: 'Diabetes Prediction Using Artificial Intelligence',
    description: 'Created an AI-driven model to predict the likelihood of diabetes based on patient data. Implemented using Python with libraries such as TensorFlow for building the neural network, and pandas and numpy for data preprocessing and analysis. This model assists in early diagnosis and personalized healthcare by analyzing key health indicators.',
    link: { href: '', label: '' },
    image: 'https://media.istockphoto.com/id/1796947698/photo/doctor-connecting-continuous-glucose-monitor-with-smartphone-to-check-blood-sugar-level-in.webp?b=1&s=170667a&w=0&k=20&c=nXvH1LIderWdmcRKR-7f7eKuei1RQ5i1lDs3d85Ylps=',  // Diabetes prediction
  },
  {
    name: 'Data Querying with MongoDB Compass and Atlas',
    description: 'Developed a project utilizing MongoDB Compass and Atlas to efficiently query and analyze a dataset. The project involved creating complex queries to extract and manipulate data, enhancing my skills in data handling and cloud-based data management.',
    link: { href: '#', label: '' },
    image: 'https://media.istockphoto.com/id/2123155246/photo/database-management-concept-businessman-uses-tablet-on-global-networking-data-analysis.webp?b=1&s=170667a&w=0&k=20&c=jBlAlK_pLO-aHSxL2QVqvPkiv7bzCr2Bm90aju9ln2c=',  // Data querying
  }
];

export default function Projects() {
  return (
    <SimpleLayout
      title="My Projects"
      intro="I’ve worked on a variety of projects over the years, and these are the ones I’m most proud of. Each project demonstrates my expertise in different areas, from frontend development to full-stack solutions. These projects highlight my skills, problem-solving abilities, and commitment to creating high-quality work. If you’d like to learn more about any of these projects or discuss my work in detail, feel free to get in touch."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link.href}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md dark:bg-zinc-800 dark:text-zinc-100 transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="mt-4 text-xl font-semibold text-center">{project.name}</h2>
            <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
          </a>
        ))}
      </ul>
    </SimpleLayout>
  );
}