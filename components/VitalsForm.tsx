"use client";

import React, { useState } from 'react';

export default function VitalsForm({ onClose }: { onClose: () => void }) {
  const [pulso, setPulso] = useState('');
  const [spo2, setSpo2] = useState('');
  const [sistolica, setSistolica] = useState('');
  const [diastolica, setDiastolica] = useState('');
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    try {
      const res = await fetch('/api/vitals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paciente_id: '2b4d3b9b-9b29-41cf-8247-e01db54cd426', // ID de Lía
          pulso: Number(pulso),
          spo2: Number(spo2),
          presion_sistolica: Number(sistolica),
          presion_diastolica: Number(diastolica),
          origen: 'mobile'
        }),
      });

      if (res.ok) {
        alert('Signos vitales guardados correctamente.');
        onClose();
        window.location.reload(); // Recarga rápido para ver reflejado el cambio
      } else {
        alert('Error al guardar los datos.');
      }
    } catch (err) {
      console.error(err);
      alert('Error de conexión con el servidor.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-t-2xl sm:rounded-2xl p-6 space-y-4 shadow-xl">
        <div className="flex justify-between items-center">
          <h3 className="text-base font-bold text-cyan-400 font-mono">❤️ Registrar Signos Vitales</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-200 p-1">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Pulso (LPM)</label>
              <input 
                type="number" required placeholder="ej. 80" value={pulso} onChange={e => setPulso(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 font-mono text-sm text-cyan-400 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Saturación (SpO₂ %)</label>
              <input 
                type="number" required placeholder="ej. 98" value={spo2} onChange={e => setSpo2(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 font-mono text-sm text-cyan-400 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="p-3 bg-slate-950/40 rounded-lg border border-slate-850/60 space-y-3">
            <span className="text-xs font-semibold text-slate-500 block">Presión Arterial (mmHg)</span>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Máxima (Sistólica)</label>
                <input 
                  type="number" required placeholder="ej. 120" value={sistolica} onChange={e => setSistolica(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 font-mono text-sm text-cyan-400 focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Mínima (Diastólica)</label>
                <input 
                  type="number" required placeholder="ej. 80" value={diastolica} onChange={e => setDiastolica(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 font-mono text-sm text-cyan-400 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>
          </div>

          <button 
            type="submit" disabled={enviando}
            className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 disabled:bg-slate-800 text-slate-950 font-bold rounded-xl transition text-sm font-mono mt-2"
          >
            {enviando ? 'Guardando...' : '💾 Guardar Registro'}
          </button>
        </form>
      </div>
    </div>
  );
}