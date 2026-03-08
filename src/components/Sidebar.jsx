import { useEffect, useState } from 'react';
import { Home, User, Briefcase, Send, Layers, Info } from 'lucide-react'; // Adicionado Info

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('hero');

  const icons = [
    { icon: <Home size={20} />, id: 'hero' },
    { icon: <Info size={20} />, id: 'about' },     // Nova Secção
    { icon: <User size={20} />, id: 'skills' },
    { icon: <Briefcase size={20} />, id: 'projects' },
    { icon: <Layers size={20} />, id: 'services' }, 
    { icon: <Send size={20} />, id: 'contact' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 } // Ajustado para 0.4 para detetar melhor secções menores
    );

    icons.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 w-12 py-6 bg-slate-900/40 backdrop-blur-md border border-cyan-500/20 rounded-full flex flex-col items-center gap-6 shadow-[0_0_20px_rgba(6,182,212,0.1)] z-50">
      {icons.map((item) => (
        <div
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`cursor-pointer transition-all duration-300 hover:text-cyan-400 ${
            activeSection === item.id ? 'text-cyan-400 scale-125' : 'text-slate-500'
          }`}
        >
          {item.icon}
        </div>
      ))}
    </nav>
  );
}