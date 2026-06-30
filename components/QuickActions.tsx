export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <button className="p-3 text-sm rounded-lg border border-slate-800 bg-slate-900/20 hover:bg-slate-900/60 transition text-left flex items-center gap-2">
        <span>➕</span> Registrar Vitales
      </button>
      <button className="p-3 text-sm rounded-lg border border-slate-800 bg-slate-900/20 hover:bg-slate-900/60 transition text-left flex items-center gap-2">
        <span>📝</span> Nota de Evolución
      </button>
    </div>
  );
}