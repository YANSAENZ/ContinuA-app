export default function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50 p-4">
      <div className="max-w-md mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wider text-cyan-400 font-mono">ContinuA</h1>
        <span className="px-2 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          Sincronizado
        </span>
      </div>
    </header>
  );
}