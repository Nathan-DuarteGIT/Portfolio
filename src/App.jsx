import { useState, useEffect } from 'react'
import './App.css'
import Sidebar from './components/Sidebar';
import SkillCircle from './components/SkillCircle';
import Projects from './components/Projects';
import Services from './components/Services';
import About from './components/About';
import { Terminal, Globe, Cpu, Binary, Database, Send, User, Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-cyan-500/30">

      {/* Selo de Status Responsivo */}
      <div className="absolute -top-3 md:top-0 left-0 w-full md:w-auto p-4 md:p-10 z-[60] flex justify-center md:justify-start">
        <div className="flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-slate-900/50 backdrop-blur-md border border-green-500/30 shadow-[0_0_15px_rgba(74,222,128,0.1)] transition-all hover:border-green-500/60">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full mr-2 md:mr-3 animate-pulse"></span>
          <span className="text-white text-[9px] md:text-[10px] font-bold tracking-widest uppercase whitespace-nowrap">
            Aberto a Oportunidades
          </span>
        </div>
      </div>

      {/* Navegação Lateral */}
      <Sidebar />

      {/* SEÇÃO 1: HERO */}
      <main id="hero" className="relative flex flex-col items-center justify-center min-h-[100vh] text-center px-4 overflow-hidden">

        {/* Selos de Especialidade Técnicos */}
        <div className="flex gap-3 mb-6 z-10">
          <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/50 bg-cyan-500/10 text-[10px] uppercase tracking-widest text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
            Docker Containerized
          </span>
          <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/50 bg-purple-500/10 text-[10px] uppercase tracking-widest text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></div>
            Async Architecture
          </span>
        </div>

        {/* Efeito de Brilho de Fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full -z-10"></div>

        {/* Foto / Silhueta de Nathan */}
        <div className="w-64 h-80 bg-gradient-to-t from-[#020617] to-transparent relative mb-8">
          <div className="absolute inset-0 bg-slate-800/20 rounded-t-full border-x border-t border-cyan-500/10 shadow-[0_0_30px_rgba(34,211,238,0.05)]"></div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Olá, eu sou o <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Nathan</span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl mb-4 tracking-wide font-light">
          Back-End Developer | Estudante de TeSP
        </p>

        <p className="max-w-md text-slate-500 text-sm mb-12 italic leading-relaxed">
          "Focado em automação assíncrona e infraestrutura com Docker, dedicado a elevar a lógica funcional ao nível de engenharia profissional."
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="bg-cyan-500 hover:bg-cyan-400 text-white px-10 py-3 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 active:scale-95"
          >
            Ver Portfólio
          </button>
          <button className="border border-slate-700 hover:border-cyan-500/50 px-10 py-3 rounded-full font-bold transition-all bg-slate-900/20 hover:bg-slate-900/40">
            Download CV
          </button>
        </div>
      </main>

      {/* SEÇÃO SOBRE MIM */}
      <div id="about">
        <About />
      </div>

      {/* SEÇÃO 2: SKILLS (Proficiência Técnica) */}
      <section id="skills" className="py-24 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center md:text-left">
          Competências <span className="text-cyan-400">Técnicas</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-12">
          <SkillCircle name="HTML/CSS" percent={85} icon={Globe} />
          <SkillCircle name="Python" percent={80} icon={Terminal} />
          <SkillCircle name="PHP" percent={75} icon={Globe} />
          <SkillCircle name="Java" percent={70} icon={Cpu} />
          <SkillCircle name="JavaScript" percent={65} icon={Binary} />
          <SkillCircle name="C" percent={60} icon={Database} />
        </div>
      </section>

      {/* SEÇÃO 3: PROJETOS ACADÉMICOS */}
      <div id="projects" className="py-12">
        <Projects />
      </div>

      {/* SEÇÃO 4: ESPECIALIDADES (Serviços) */}
      <div id="services">
        <Services />
      </div>

      {/* SEÇÃO 5: CONTACTO & FOOTER */}
      <footer id="contact" className="py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Vamos construir algo <span className="text-cyan-400">juntos?</span></h2>
          <p className="text-slate-400 mb-12 text-lg">
            Estou disponível para novos desafios e colaborações técnicas em projetos de software.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a href="mailto:duartenathan@gmail.com" className="group flex items-center gap-3 px-8 py-4 bg-slate-900 rounded-2xl hover:bg-slate-800 transition-all border border-slate-800 hover:border-cyan-500/50">
              <Send size={20} className="text-cyan-400 group-hover:animate-bounce" />
              <span className="font-bold">E-mail</span>
            </a>
            <a href="https://www.linkedin.com/in/nathan-rafael-duarte/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-slate-900 rounded-2xl hover:bg-slate-800 transition-all border border-slate-800 hover:border-blue-500/50">
              <User size={20} className="text-blue-400" />
              <span className="font-bold">LinkedIn</span>
            </a>
            <a href="https://github.com/Nathan-DuarteGIT" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-slate-900 rounded-2xl hover:bg-slate-800 transition-all border border-slate-800 hover:border-white/50">
              <Github size={20} />
              <span className="font-bold">GitHub</span>
            </a>
          </div>

          <div className="mt-24 pt-8 border-t border-slate-900/50">
            <p className="text-slate-600 text-xs tracking-[0.2em] uppercase">
              © 2026 Nathan Duarte • Estudante de TeSP • Portugal
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;