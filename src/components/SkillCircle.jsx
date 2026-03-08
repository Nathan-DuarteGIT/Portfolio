export default function SkillCircle({ percent, name, icon: Icon }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center group">
      <div className="relative flex items-center justify-center w-24 h-24">
        {/* Círculo de Fundo */}
        <svg className="absolute w-full h-full -rotate-90">
          <circle
            cx="48" cy="48" r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="6"
            className="text-slate-800"
          />
          {/* Círculo de Progresso Neon */}
          <circle
            cx="48" cy="48" r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="text-cyan-400 transition-all duration-1000 ease-out drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
          />
        </svg>
        
        {/* Ícone Centralizado */}
        <div className="z-10 text-slate-300 group-hover:text-cyan-400 transition-colors duration-300">
          <Icon size={32} />
        </div>
      </div>
      
      <span className="mt-4 font-semibold text-slate-200">{name}</span>
      <span className="text-xs text-cyan-500/80">{percent}%</span>
    </div>
  );
}