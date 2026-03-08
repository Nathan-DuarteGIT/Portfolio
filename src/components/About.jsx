export default function About() {
  return (
    <section id="about" className="py-24 max-w-5xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Lado do Texto */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Sobre <span className="text-cyan-400">Mim</span>
          </h2>
          
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              Sou um entusiasta do desenvolvimento Back-End e estudante de <span className="text-white font-medium">TeSP</span>, 
              focado em construir a "espinha dorsal" de aplicações robustas. 
              A minha jornada é movida pela curiosidade de entender como sistemas complexos comunicam entre si.
            </p>
            
            <p>
              Atualmente, estou a expandir os meus horizontes técnicos ao explorar ferramentas como <span className="text-white font-medium">Docker</span> e <span className="text-white font-medium">Python</span>. 
              Mais do que dominar uma tecnologia específica, o meu objetivo é aprender as melhores práticas de estruturação de código e segurança.
            </p>

            <p>
              Encaro cada projeto académico como um desafio para transformar teoria em prática, 
              sempre com o intuito de evoluir as minhas capacidades e entregar software de qualidade.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl">
              <h4 className="text-cyan-400 font-bold text-xl">TeSP</h4>
              <p className="text-xs text-slate-500 uppercase">Formação em Curso</p>
            </div>
            <div className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl text-center">
              <h4 className="text-cyan-400 font-bold text-xl">Projetos</h4>
              <p className="text-xs text-slate-500 uppercase">Foco Académico</p>
            </div>
          </div>
        </div>

        {/* O container do código */}
          <div className="aspect-square bg-slate-900/20 rounded-3xl border border-slate-800 flex items-center justify-center overflow-hidden relative z-10">
            {/* Código JS com cores baseadas nos teus prints */}
            <code className="text-xs md:text-sm font-mono p-6">
              <span className="text-purple-400">const</span> <span className="text-cyan-400">nathan</span> = &#123;<br/>
              &nbsp;&nbsp;<span className="text-cyan-400">status</span>: <span className="text-yellow-200">"Learning"</span>,<br/>
              &nbsp;&nbsp;<span className="text-cyan-400">learning_now</span>: [<span className="text-yellow-200">"Docker"</span>, <span className="text-yellow-200">"Python"</span>],<br/>
              &nbsp;&nbsp;<span className="text-cyan-400">main_projects</span>: [<span className="text-yellow-200">"OptiSpace"</span>, <span className="text-yellow-200">"O-Meu-Bolso"</span>],<br/>
              &nbsp;&nbsp;<span className="text-cyan-400">ready_to_grow</span>: <span className="text-white">true</span><br/>
              &#125;;
            </code>
          </div>

          {/* DECORAÇÃO DE FUNDO REPOSICIONADA - O Brilho de volta */}
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full z-0"></div>
        
      </div>
    </section>
  );
}