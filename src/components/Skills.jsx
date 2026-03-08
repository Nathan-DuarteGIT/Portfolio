import { Binary, Globe, Database, Terminal, Cpu } from 'lucide-react';
import SkillCircle from './components/SkillCircle';

const mySkills = [
  { name: "Python", percent: 80, icon: Terminal }, 
  { name: "PHP", percent: 75, icon: Globe },      
  { name: "Java", percent: 70, icon: Cpu },        
  { name: "Node.js", percent: 65, icon: Binary },  
  { name: "C", percent: 60, icon: Database },      
];

// No retorno do App.jsx, substitua a seção de skills por:
<section className="py-20 max-w-5xl mx-auto px-4">
  <h2 className="text-3xl font-bold mb-12 text-center md:text-left">Technical Proficiency</h2>
  <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
    {mySkills.map((skill) => (
      <SkillCircle key={skill.name} {...skill} />
    ))}
  </div>
  
  {/* Destaque de Engenharia baseado no relatório */}
  <div className="mt-16 p-6 glass-card border-l-4 border-cyan-500 bg-cyan-500/5">
    <p className="text-sm text-slate-400 italic">
      "Focado em automação assíncrona, arquitetura escalável e segurança com JWT." 
      <span className="text-cyan-400 ml-2">— Insight do meu Perfil GitHub</span> 
    </p>
  </div>
</section>