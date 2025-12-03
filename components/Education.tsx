const education = [
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'MGM College of Engineering and Pharmaceutical Sciences',
    university: 'APJ Abdul Kalam Technological University',
    period: 'Jun 2019 - Jun 2023',
    details: 'Relevant coursework: Data Structures and Algorithms, Operating Systems, DBMS, Computer Networks, OOP, Software Engineering, Computer Architecture, Digital Logic, AI/ML, Compiler Design, Cloud Computing, Information Security'
    }
];

import AnimatedSection from './AnimatedSection';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 max-w-6xl mx-auto">
      <AnimatedSection>
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
      </AnimatedSection>
      <div className="max-w-3xl mx-auto">
        {education.map((edu, index) => (
          <AnimatedSection key={index} delay={200}>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-emerald-400 mb-2">{edu.degree}</h3>
                <p className="text-lg text-slate-300 mb-2">{edu.institution}</p>
                <p className="text-lg text-slate-300 mb-2">{edu.university}</p>
                <p className="text-slate-400 mb-4">{edu.period}</p>
                <p className="text-slate-300">
                  <span className="font-semibold">Relevant coursework:</span> {edu.details.replace('Relevant coursework: ', '')}
                </p>
              </div>
            </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
