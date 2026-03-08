import { Server, Database, Lock, Terminal, Layout } from 'lucide-react';

const services = [
  {
    title: "Desenvolvimento Back-End",
    desc: "Criação de lógica de servidor e arquiteturas escaláveis para suportar aplicações complexas.",
    icon: <Server className="text-cyan-400" size={28} />
  },
  {
    title: "Interfaces Modernas",
    desc: "Desenvolvimento de sites e aplicações web focados em design responsivo e experiência do utilizador.",
    icon: <Layout className="text-pink-400" size={28} />
  },
  {
    title: "Segurança & Autenticação",
    desc: "Implementação de camadas de proteção e gestão de acessos para garantir a integridade dos dados.",
    icon: <Lock className="text-purple-400" size={28} />
  },
  {
    title: "Soluções de Automação",
    desc: "Otimização de processos através de scripts e ferramentas de processamento de dados.",
    icon: <Terminal className="text-green-400" size={28} />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12">
        Minhas <span className="text-cyan-400">Especialidades</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div key={i} className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800 hover:border-cyan-500/30 transition-all group">
            <div className="mb-6 inline-block p-3 bg-slate-800/50 rounded-2xl group-hover:scale-110 transition-transform">
              {s.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}