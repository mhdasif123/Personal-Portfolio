const certifications = [
  {
    title: 'Prompt Engineering for AI Systems',
    issuer: 'Dubai Future Foundation',
    date: 'Mar 2025',
    link: 'https://drive.google.com/file/d/1S7RmZoRyfoyqGpW8UdFFDsRjrMbvYwxu/view?usp=sharing'
  },
  {
    title: 'Python + AI Training Bootcamp',
    issuer: 'Upcode',
    date: 'Feb 2025',
    link: 'https://drive.google.com/file/d/1WgZ_ncbO5GdBgplhovtZ5C15lyRMxjkK/view?usp=sharing'
  },
  {
    title: 'Software Development Bootcamp',
    issuer: 'Upcode',
    date: 'Jun 2024',
    link: 'https://drive.google.com/file/d/1WgZ_ncbO5GdBgplhovtZ5C15lyRMxjkK/view?usp=sharing'
  },
  {
    title: 'Full Stack  Developer Internship',
    issuer: 'Doctosmart Enterprises',
    date: '2024',
    link: 'https://drive.google.com/file/d/1UKRcoY1GviYB2-aG1bYZxdaOl2J6lLn6/view?usp=sharing'
  },
  {
    title: 'Python with AI and Machine Learning Internship',
    issuer: 'Pacelab',
    date: 'Oct 2022',
    link: 'https://drive.google.com/file/d/1Ts63BTlgQEqCDnV-1kFMisFoUBGex1Sm/view?usp=sharing'
  },
  {
    title: 'The Fundamentals of Digital Marketing',
    issuer: 'Google',
    date: 'Jul 2021',
    link: 'https://drive.google.com/file/d/1Q8RB33bSkotKCowvqpRrUROXhLKbuADX/view?usp=sharing'
  }
];

import AnimatedSection from './AnimatedSection';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 max-w-6xl mx-auto">
      <AnimatedSection>
        <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-emerald-500/50 transition-all duration-300 group flex flex-col h-full hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/10"
            style={{ 
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
            }}
          >
            <div className="flex items-start gap-3 mb-3 flex-1">
              <svg className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-emerald-400 mb-2 leading-tight">{cert.title}</h3>
                <p className="text-slate-300 text-sm mb-2">{cert.issuer}</p>
                <p className="text-slate-400 text-sm">{cert.date}</p>
              </div>
            </div>
            <div className="pl-9">
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 text-sm flex items-center gap-1 group-hover:gap-2 transition-all mt-auto"
              >
                View Certificate
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
