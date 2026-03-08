import { Github, ExternalLink, ShieldCheck, Database, Layout } from 'lucide-react';

// Importação das imagens do diretório src/assets
import optispaceImg from '../assets/optispace.png';
import bolsoImg from '../assets/bolso.png';
import dpmImg from '../assets/dpm.png';

const myProjects = [
  {
    title: "OptiSpace",
    status: "Projeto Académico",
    desc: "Plataforma web para simplificar a gestão de recursos internos e reserva de salas.",
    tech: ["PHP", "MySQL", "Tailwind CSS"],
    highlight: "Integração com calendários e regras de libertação automática de reservas.",
    icon: <Database className="text-cyan-400" size={24} />,
    image: optispaceImg,
    github: "https://github.com/Nathan-DuarteGIT/OptiSpace",
    demo: "https://seu-link-da-demo.com" 
  },
  {
    title: "O-Meu-Bolso",
    status: "Projeto Full-Stack",
    desc: "Aplicação de gestão financeira pessoal para acompanhamento de despesas e receitas.",
    tech: ["Node.js", "Express", "JWT"],
    highlight: "Autenticação robusta garantida por JSON Web Tokens (JWT).",
    icon: <ShieldCheck className="text-purple-400" size={24} />,
    image: bolsoImg,
    github: "https://github.com/Nathan-DuarteGIT/O-Meu-Bolso",
    demo: null 
  },
  {
    title: "Projeto DPM",
    status: "Exercício Académico",
    desc: "Desenvolvimento de interfaces focado na aplicação de conceitos fundamentais de UI.",
    tech: ["HTML5", "CSS3", "JS"],
    highlight: "Construção da base de uma aplicação web com estrutura semântica.",
    icon: <Layout className="text-blue-400" size={24} />,
    image: dpmImg, 
    github: "https://github.com/Nathan-DuarteGIT/projetoDPM",
    demo: null 
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
      {/* Cabeçalho da Secção */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-4xl font-bold mb-2">Projetos <span className="text-cyan-400">Académicos</span></h2>
          <p className="text-slate-400 italic">Aplicação prática de conceitos de engenharia e desenvolvimento.</p>
        </div>
        <div className="h-[1px] flex-grow bg-slate-800 mx-8 hidden md:block mb-4"></div>
      </div>

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {myProjects.map((project, index) => (
          <div key={index} className="group flex flex-col h-full bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2">
            
            {/* ÁREA DA IMAGEM (Moldura com Zoom Interno) */}
            <div className="relative w-full aspect-video overflow-hidden bg-slate-800 border-b border-slate-800">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-70 group-hover:opacity-100"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"; }}
              />
              {/* Gradiente para suavizar a transição */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* CONTEÚDO DO CARD */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-800/50 rounded-2xl group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
                  {project.icon}
                </div>
                <span className="text-[10px] tracking-widest uppercase text-slate-500 font-bold border border-slate-800 px-2 py-1 rounded">
                  {project.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              
              {/* Descrição com flex-grow para empurrar o resto para baixo */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.desc}
              </p>

              {/* Highlight Técnico */}
              <div className="mb-6 py-3 px-4 bg-cyan-500/5 border-l-2 border-cyan-500 rounded-r-lg">
                <p className="text-[11px] text-cyan-300 font-mono italic">
                  {project.highlight}
                </p>
              </div>

              {/* Tags de Tecnologias */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-300 uppercase">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links de Ação (Alinhados na base) */}
              <div className="flex gap-6 mt-auto">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors"
                >
                  <Github size={18} /> Código
                </a>

                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink size={18} /> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}