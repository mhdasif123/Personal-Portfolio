const experiences = [
  {
    role: 'Software Engineer',
    company: 'Overt Nexus PVT LTD | India',
    period: 'Jun 2024 - Present',
    description: 'Implementing Zoho Applications, Customizing Odoo Modules, and Developing Custom Software Solutions for Clients. Providing End-to-End Support, Data Migration, and Building Responsive Web Applications.',
    achievements: [
      'Customized and Implemented Zoho Applications Based on Client-Specific Business Requirements.',
      'Worked on most Major Zoho Apps and Successfully Implemented 20+ Applications across Multiple Clients in India and the UAE.',
      'Attended Client Meetings to Gather Detailed Requirements and Translate them into Functional Solutions.',
      'Provided End-to-End Training for Client Teams and Delivered Ongoing Online and Onsite Support.',
      'Performed Data Migration from Legacy Systems into Zoho Apps with Accuracy and Validation.',
      'Built Custom Features, Deluge Scripts, and Workflow Automations to Streamline Processes.',
      'Developed and Customized Odoo Web Modules Tailored to Client Workflows.',
      'Designed UI Layouts for Websites, Obtained Client Approval, and Developed full Responsive Websites.',
      'Delivered Custom Software and Web Application Solutions, Ensuring Functionality, Usability, and Performance.',
      'Developed Custom Software and Internal Web Applications to Support Company Operations and Workflows.',
      'Provided Comprehensive Software and Hardware Support, Ensuring Smooth Technical Operations for Clients andIinternal teams.',
    ]
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Doctosmart Enterprises PVT LTD | India',
    period: 'Jun 2023 - Mar 2024',
    description: 'Focused on Full-Stack Development, Building APIs and Improving Frontend Features while Learning best practices under Senior Developers.',
    achievements: [
      'Gained hands-on experience in full-stack development by working on live company projects.',
      'Built and optimized RESTful APIs using Python, Django, and MySQL, improving data processing efficiency.',
      'Enhanced frontend UI/UX with React.js,Angular.js, HTML, CSS and responsive web components.',
      'Collaborated with senior developers to implement backend features and write high-quality, well-structured code',
      'Assisted in designing and developing company project modules under mentor supervision.',
      'Participated in code reviews, testing, and debugging across backend and frontend tasks.',
      'Collaborated in an Agile environment, receiving guidance from senior developers and contributing to project delivery.',
      'Learned and applied core programming concepts, MVT architecture, API integration, and version control (Git).'
    ]
  }
];

import AnimatedSection from './AnimatedSection';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 max-w-6xl mx-auto">
      <AnimatedSection>
        <h2 className="text-4xl font-bold mb-4 text-center">Experience</h2>
        <p className="text-center text-emerald-400 text-xl mb-12">2+ Years in Software Development</p>
      </AnimatedSection>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <AnimatedSection key={index} delay={index * 100}>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-emerald-400">{exp.role}</h3>
                <p className="text-lg text-slate-300">{exp.company}</p>
              </div>
              <span className="text-slate-400 mt-2 md:mt-0">{exp.period}</span>
            </div>
            <p className="text-slate-300 mb-4">{exp.description}</p>
            <ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-emerald-400 mr-2">▹</span>
                  <span className="text-slate-300">{achievement}</span>
                </li>
              ))}
            </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
