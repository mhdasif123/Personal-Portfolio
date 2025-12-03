const skillCategories = [
  {
    title: 'Programming',
    skills: ['Python', 'C/C++', 'Java', 'SQL', 'Deluge', 'JavaScript']
  },
  {
    title: 'Backend Development',
    skills: ['Django', 'Flask', 'FastAPI', 'REST APIs', 'JWT Auth', 'Microservices', 'OAuth', 'Node.js', 'Express.js']
  },
  {
    title: 'Frontend Development',
    skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Web Platforms', 'WordPress', 'Elementor', 'Custom Themes & Plugins']
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'ORM', 'Database Design']
  },
  {
    title: 'ERP - Odoo',
    skills: ['Odoo Development', 'Python Programming', 'Odoo ORM', 'PostgreSQL', 'Odoo Module Development', 'Odoo XML Views', 'QWeb Templates', 'Odoo API Integration', 'JavaScript', 'Odoo Debugging', 'Git Version Control', 'Linux Server Management']
  },
  {
    title: 'ERP - Zoho',
    skills: ['Deluge scripting', 'Zoho CRM customization', 'Zoho Creator development', 'Zoho API integration', 'workflows & automation', 'custom functions', 'webhooks', 'Zoho Analytics', 'data migration', 'Zoho Connections', 'blueprints', 'documentation', 'debugging']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Google Cloud Platform', 'AWS', 'Docker', 'CI/CD', 'Unix/Linux']
  },
  {
    title: 'Tools & Utilities',
    skills: ['Git', 'GitHub', 'Postman', 'Visual Studio Code', 'PyCharm, Eclipse', 'Docker', 'MySQL Workbench', 'pgAdmin (PostgreSQL)', 'MongoDB Compass', 'Figma', 'Canva']
  },
  {
    title: 'Support',
    skills: ['API Monitoring', 'Debugging', 'Logs Analysis', 'L1/L2 Support', 'Troubleshooting', 'Issue Resolution', 'Production Support', 'Maintenance', 'Ticket Management', 'Client/User Assistance', 'Training', 'Performance Monitoring', 'Alerts Handling', 'Problem Analysis', 'Root Cause Identification']
  },
  {
    title: 'Current Exploring',
    skills: ['PHP','Laravel', 'C#', '.Net' ]
  },
  {
    title: 'Languages',
    skills: ['English - Professional', 'Malayalam - Native', 'Arabic - Beginner']
  },
  
];

import AnimatedSection from './AnimatedSection';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <AnimatedSection>
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={category.title} 
            className="bg-slate-800/50 border border-slate-700 rounded-lg p-5 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/10"
            style={{ 
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
            }}
          >
            <h3 className="text-lg font-semibold mb-3 text-emerald-400">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-slate-700 border border-slate-600 rounded-full text-xs text-slate-200 hover:border-emerald-500/50 hover:bg-slate-600 transition-all duration-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
