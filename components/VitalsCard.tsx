export default function VitalsCard() {
  return (
    <div id="vitales-seccion" className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 space-y-3 scroll-mt-4">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-semibold text-slate-400 flex items-center gap-2">
          <span>❤️</span> Últimos Signos Vitales
        </h3>
        <span className="text-[10px] text-amber-500 font-mono bg-amber-950/40 border border-amber-900/60 px-2 py-0.5 rounded">
          ⚠️ Registro de Pico: 154 mmHg
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-850">
          <p className="text-xs text-slate-500">Frec. Cardíaca</p>
          <p className="text-lg font-mono font-bold text-emerald-400">78 <span className="text-xs font-normal text-slate-400">LPM</span></p>
        </div>
        <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-850">
          <p className="text-xs text-slate-500">Presión Art.</p>
          <p className="text-lg font-mono font-bold text-cyan-400">120/80 <span className="text-xs font-normal text-slate-400">mmHg</span></p>
        </div>
      </div>
    </div>
  );
}