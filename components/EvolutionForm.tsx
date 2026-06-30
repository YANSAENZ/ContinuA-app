"use client";

import React, { useState } from 'react';

export default function EvolutionForm({ onClose }: { onClose: () => void }) {
  const [evento, setEvento] = useState('');
  const [estado, setEstado] = useState('Observación');
  const [sintomas, setSintomas] = useState('');
  const [tratamiento, setTratamiento] = useState('');
  const [medico, setMedico] = useState('');
  const [notas, setNotas] = useState('');
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    const ahora = new Date();
    const fechaIso = ahora.toISOString().split('T')[0]; // YYYY-MM-DD
    const horaIso = ahora.toTimeString().split(' ')[0]; // HH:MM:SS

    try {
      const res = await fetch('/api/evolution', { // Cambiar a tu endpoint correspondiente si difiere
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fecha: fechaIso,
          hora: horaIso,
          evento: evento,
          estado: estado,
          signos_sintomas: sintomas,
          intervencion_tratamiento: tratamiento,
          medico: medico || 'No especificado',
          notas: notas,
          registrado_por: 'Familiar (Mobile)'
        }),
      });

      if (res.ok) {
        alert('Nota de evolución registrada con éxito.');
        onClose();
        window.location.reload();
      } else {
        alert('Error al guardar la evolución.');
      }
    } catch (err) {
      console.error(err);
      alert('Error de red al intentar guardar.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-t-2xl sm:rounded-2xl p-6 space-y-4 shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center">
          <h3 className="text-base font-bold text-amber-400 font-mono">📝 Nueva Nota de Evolución</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-200 p-1">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 text-sm">
          <div>
            <label className="block text-xs text-slate-400 mb-1">Evento / Título principal</label>
            <input 
              type="text" required placeholder="ej. Cambio de estado mental, Control de rutina" value={evento} onChange={e => setEvento(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">Estado de Lía</label>
            <select 
              value={estado} onChange={e => setEstado(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-amber-500"
            >
              <option value="Estable">Estable</option>
              <option value="Observación">Observación</option>
              <option value="Crítico">Crítico</option>
              <option value="Recuperación">Recuperación</option>
            </select>
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">Signos y Síntomas</label>
            <textarea 
              rows={2} placeholder="Qué le pasa, qué refiere ver o sentir..." value={sintomas} onChange={e => setSintomas(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 text-xs focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">Intervención / Tratamiento</label>
            <input 
              type="text" placeholder="ej. Paracetamol 500mg, Administración de sedante" value={tratamiento} onChange={e => setTratamiento(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 text-xs focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Médico que atiende</label>
              <input 
                type="text" placeholder="Dr. García" value={medico} onChange={e => setMedico(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 text-xs focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Notas / Observaciones</label>
              <input 
                type="text" placeholder="ej. Informar al neurólogo" value={notas} onChange={e => setNotas(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 text-xs focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <button 
            type="submit" disabled={enviando}
            className="w-full py-3 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 disabled:bg-slate-800 text-slate-950 font-bold rounded-xl transition text-sm font-mono mt-2"
          >
            {enviando ? 'Guardando...' : '💾 Registrar Evolución'}
          </button>
        </form>
      </div>
    </div>
  );
}