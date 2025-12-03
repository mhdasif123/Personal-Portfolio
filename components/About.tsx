import AnimatedSection from './AnimatedSection';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <AnimatedSection>
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
      </AnimatedSection>
      <AnimatedSection delay={200}>
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
          <p className="text-lg text-slate-300 leading-relaxed">
            I’m Mohammed Asif, a Software Engineer with <span className="text-emerald-400 font-semibold">2+ years of experience</span> building scalable backend systems, full-stack applications, and automated business workflows. I specialize in Python, Django, FastAPI, React.js, Odoo, and Zoho CRM, combining clean development practices with practical problem-solving.
            I enjoy creating efficient APIs, optimizing databases, and delivering smooth user experiences across web and ERP systems. My multi-role background from backend engineering to workflow automation helps me understand both technical and business needs.
            I’m currently based in Dubai and looking for opportunities where I can contribute to Python, Full-Stack, Odoo, Zoho, or Web Development teams. My goal is to build reliable, scalable solutions that make everyday work easier and smarter.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}
