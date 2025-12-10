const projects = [
  {
    title: 'Personal Portfolio',
    description: 'Built a Personal Portfolio Website using Next.js, TailwindCSS, and TypeScript. It showcases my Projects, Skills, and Contact Information.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/project1.png', // Add your screenshot here
    liveLink: 'https://your-demo-link.com',
    githubLink: 'https://github.com/yourusername/project1'
  },
  {
    title: 'Sip and Snacks',
    description: 'A Modern Web Application for Managing Tea and Snack Orders in a Company. Employees can Place Orders, and Admins can Manage Orders, Employees, and Menu Items.',
    tech: ['React 18', 'TypeScript', 'React Router', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT' , 'Vite'],
    image: '/project2.png',
    liveLink: 'https://github.com/mhdasif123/SipandSnacks-Software/blob/main/README.md',
    githubLink: 'https://github.com/mhdasif123/SipandSnacks-Software'
  },
  {
    title: 'SurgiTrack',
    description: 'A Real-Time Surgical Tracking System that gives Families instant, secure updates and helps Hospitals improve Transparency.',
    tech: ['React 19', 'Tailwind CSS', 'React Router', 'Context API', 'Gemini AI', 'Vite'],
    image: '/project3.png', // Add your screenshot here
    liveLink: 'https://surgitrack.netlify.app/',
    githubLink: 'https://github.com/mhdasif123/SurgiTrack'
  },
  {
    title: 'AI-Dubai-Travel-Planner-Chatbot',
    description: 'An AI-powered Dubai Travel Planner that Provides Real-Time Flight, Hotel, Itinerary, and Budget-Friendly Recommendations using Python and Streamlit.',
    tech: ['Python', 'OpenAI API', 'LLM', 'Streamlit'],
    image: '/project4.png', // Add your screenshot here
    liveLink: 'https://github.com/mhdasif123/AI-Dubai-Travel-Planner-Chatbot/blob/main/README.md',
    githubLink: 'https://github.com/mhdasif123/AI-Dubai-Travel-Planner-Chatbot'
  },
  {
    title: 'Overt Nexus Company Website',
    description: 'Developed the Official Overt Nexus Website with My Team, Delivering a Modern, Responsive Platform to Present their Services.',
    tech: ['Odoo','Python', 'XML', 'Javascript', 'HTML', 'CSS'],
    image: '/project5.png', // Add your screenshot here
    liveLink: 'https://www.overtnexus.com/',
    githubLink: 'https://www.overtnexus.com/'
  },
  {
    title: 'MSTM Arts and Science College',
    description: 'Developed a Modern, Responsive Website for MSTM Arts and Science College to Showcase their Academic Services.',
    tech: ['Odoo','Python', 'XML', 'Javascript', 'HTML', 'CSS'],
    image: '/project15.png', // Add your screenshot here
    liveLink: 'https://www.mstm.in/',
    githubLink: 'https://www.mstm.in/'
  },
  {
    title: 'Oak Architects & Interior',
    description: 'Built a Modern, Responsive Website for Oak Architects & Interior that Showcases their Architectural and Interior-Design Services with a Clean, Professional Layout.',
    tech: ['Odoo','Python', 'XML', 'Javascript', 'HTML', 'CSS'],
    image: '/project6.png', // Add your screenshot here
    liveLink: 'https://www.oakarchitects.in/',
    githubLink: 'https://www.oakarchitects.in/'
  },
  {
    title: 'R+A Architects',
    description: 'Built a Modern, Responsive Website for R+A Architects that Showcases their Architectural and Interior-Design Services with a Clean, Professional Layout.',
    tech: ['Odoo','Python', 'XML', 'Javascript', 'HTML', 'CSS'],
    image: '/project7.png', // Add your screenshot here
    liveLink: 'https://www.rplusaarchitects.com/',
    githubLink: 'https://www.rplusaarchitects.com/'
  },
  {
    title: 'Leaf and Stem',
    description: 'A Responsive Website for Leaf and Stem Trading LLC, Highlighting their Fresh, Vacuum-Packed Produce and Wholesale Services in Dubai.',
    tech: ['Odoo','Python', 'XML', 'Javascript', 'HTML', 'CSS'],
    image: '/project8.png', // Add your screenshot here
    liveLink: 'https://www.leafandstem.ae/',
    githubLink: 'https://www.leafandstem.ae/'
  },
  {
    title: 'Global Eye Hospitals',
    description: 'Built and Maintained Global Eye Hospital’s Website, Ensuring a Responsive and User-Friendly Online Presence.',
    tech: ['Odoo','Python', 'XML', 'Javascript', 'HTML', 'CSS'],
    image: '/project9.png', // Add your screenshot here
    liveLink: 'https://www.globaleyehospitals.com/',
    githubLink: 'https://www.globaleyehospitals.com/'
  },
  {
    title: 'Easy Lift Transport & Heavy Equipment Rental',
    description: 'Developed and Maintained the Website for Easy Lift, Showcasing their Heavy Equipment Rental Services across the UAE with a Focus on Usability and Service Clarity.',
    tech: ['Odoo','Python', 'XML', 'Javascript', 'HTML', 'CSS'],
    image: '/project10.png', // Add your screenshot here
    liveLink: 'https://www.easylift.ae/',
    githubLink: 'https://www.easylift.ae/'
  },
  {
    title: 'Gleam and Glisten',
    description: 'Built and Optimized Gleam and Glisten Cleaning Services Website, Creating a Professional and User-Friendly Platform for their Residential and Commercial Cleaning Services in Abu Dhabi.',
    tech: ['Odoo','Python', 'XML', 'Javascript', 'HTML', 'CSS'],
    image: '/project11.png', // Add your screenshot here
    liveLink: 'https://www.ggcleaning.ae/',
    githubLink: 'https://www.ggcleaning.ae/'
  },
  {
    title: 'Scrub & Spray',
    description: 'Designed and Managed the Website for Scrub & Spray Cleaning Services, Highlighting their Cleaning and Pest Control Solutions for Residential, Commercial, and Industrial Clients in Abu Dhabi.',
    tech: ['Odoo','Python', 'XML', 'Javascript', 'HTML', 'CSS'],
    image: '/project12.png', // Add your screenshot here
    liveLink: 'https://www.scrubandspray.ae/',
    githubLink: 'https://www.scrubandspray.ae/'
  },
  {
    title: 'Amazon-Website-Clone',
    description: 'Developed an Amazon Clone Web Application using HTML, CSS, and JavaScript, Featuring Responsive Design, and core E-Commerce Functionalities.',
    tech: ['HTML', 'CSS', 'Javascript'],
    image: '/project13.png', // Add your screenshot here
    liveLink: 'https://github.com/mhdasif123/Amazon-Website-Clone/blob/main/README.md',
    githubLink: 'https://github.com/mhdasif123/Amazon-Website-Clone'
  },
  {
    title: 'URL-Shortener',
    description: 'This application allows you to shorten long URLs into simple, easy-to-share links for quick access.',
    tech: ['Django', 'SQLite', 'Pillow', 'qrcode'],
    image: '/project14.png', // Add your screenshot here
    liveLink: 'https://github.com/mhdasif123/django-url-shortener/blob/main/README.md',
    githubLink: 'https://github.com/mhdasif123/django-url-shortener'
  },
];

import AnimatedSection from './AnimatedSection';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <AnimatedSection>
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={`${project.title}-${index}`}
            className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 flex flex-col"
            style={{ 
              animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
            }}
          >
            <div className="w-full h-48 bg-slate-700/50 rounded-lg mb-4 overflow-hidden">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-500">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-emerald-400 line-clamp-2">{project.title}</h3>
            <p className="text-slate-300 mb-4 flex-grow line-clamp-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4 mt-auto">
              {project.tech.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-emerald-600/20 text-emerald-400 rounded text-sm border border-emerald-600/30">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a 
                href={project.liveLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
