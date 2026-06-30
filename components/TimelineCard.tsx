export default function TimelineCard() {
  return (
    <div id="historial-seccion" className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 space-y-4 scroll-mt-4">
      
      {/* Selector de Estado del Caso sugerido */}
      <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 space-y-2">
        <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500">Estado Actual del Caso</p>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-xs font-bold text-amber-400 uppercase font-mono tracking-wide">
            🟠 Esperando resultado / En traslado
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center pt-2">
        <h3 className="text-sm font-semibold text-slate-400 flex items-center gap-2">
          <span>📅</span> Historia y Evolución Cronológica
        </h3>
        <span className="text-[10px] text-slate-500 font-mono">Completo</span>
      </div>
      
      <div className="border-l border-slate-800 pl-4 space-y-5 text-xs">
        
        {/* PENDIENTE */}
        <div className="relative">
          <div className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-slate-600 border border-slate-900" />
          <div className="flex justify-between text-[11px] font-mono text-slate-500">
            <span>Próximamente</span>
            <span className="font-semibold">⏳ Registros Pendientes</span>
          </div>
          <p className="font-semibold text-slate-400 mt-0.5">Informe de Angio-RMN en Necochea</p>
          <p className="text-slate-500 text-[11px] mt-0.5">
            A la espera de: hora exacta de ingreso, realización del estudio, informe del neurólogo y conducta terapéutica a seguir.
          </p>
        </div>

        {/* 01/07/2026 - DÍA 3 */}
        <div className="relative">
          <div className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-cyan-500 ring-4 ring-cyan-500/20 animate-pulse" />
          <div className="flex justify-between text-[11px] font-mono">
            <span className="text-cyan-400 font-bold">01/07 (Hoy) - 14:00</span>
            <span className="text-cyan-400 font-semibold flex items-center gap-1">🚑 Traslado Alta Complejidad</span>
          </div>
          <p className="font-semibold text-slate-200 mt-0.5">Derivación hacia Necochea</p>
          <p className="text-slate-400 text-[11px] mt-0.5">
            Traslado en ambulancia para Angiorresonancia cerebral con contraste. Objetivo: descartar aneurisma, malformación vascular, trombosis o sangrado.
          </p>
          <p className="text-slate-500 text-[11px] mt-1 italic">
            Mañana: Persistió inquieta y desorientada. Acompañada por familiares; Esteban estuvo de guardia en el ala médica.
          </p>
        </div>

        {/* 30/06/2026 - DÍA 2 */}
        <div className="relative">
          <div className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-amber-500" />
          <div className="flex justify-between text-[11px] font-mono text-slate-400">
            <span>30/06 - Todo el día</span>
            <span className="text-amber-500">Fluctuación Clínica</span>
          </div>
          <p className="font-semibold text-slate-300 mt-0.5">Cuadro Confusional y Sospecha de Edema</p>
          <p className="text-slate-400 text-[11px] mt-0.5">
            Presentó alucinaciones visuales y desorientación (se quitó el suero reiteradas veces). Se administró sedación y recolección de orina de 24 hs. Se programó derivación.
          </p>
          <p className="text-emerald-500 text-[11px] mt-1 font-medium">
            ✓ Bloque Matutino: Mostró mejoría motora transitoria, caminó al baño con ayuda, intentó comer y reconoció a la familia.
          </p>
        </div>

        {/* 29/06/2026 - DÍA 1 */}
        <div className="relative">
          <div className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-red-500" />
          <div className="flex justify-between text-[11px] font-mono text-slate-400">
            <span>29/06 - Internación</span>
            <span className="text-red-500 font-bold">🚨 Evento Agudo</span>
          </div>
          <p className="font-semibold text-slate-300 mt-0.5">Convulsión e Ingreso Hospitalario</p>
          <p className="text-slate-400 text-[11px] mt-0.5">
            Empeoramiento brusco con movimientos involuntarios prolongados. Traslado urgente al Hosp. Municipal de Lobería. TC de cerebro arrojó lesión compatible con edema. Se inició Fenitoína. Noche de agotamiento extremo y pico de 154 mmHg.
          </p>
        </div>

        {/* SEMANAS PREVIAS */}
        <div className="relative">
          <div className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-slate-700" />
          <div className="flex justify-between text-[11px] font-mono text-slate-500">
            <span>Semanas previas</span>
            <span>Prodromo / Prerregistro</span>
          </div>
          <p className="font-semibold text-slate-400 mt-0.5">Cefaleas Recurrentes e Insomnio</p>
          <p className="text-slate-500 text-[11px] mt-0.5">
            Dolor de cabeza continuo y dificultad para dormir de corrido. Diagnóstico presuntivo inicial de ITU tratado con cefalexina sin remisión de la cefalea.
          </p>
        </div>

      </div>
    </div>
  );
}