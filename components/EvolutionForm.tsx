"use client";

import React, { useState } from 'react';
import { supabase } from '@/app/lib/supabase';

interface EvolutionFormProps {
  onClose: () => void;
  onSuccess?: () => void;
}

export default function EvolutionForm({ onClose, onSuccess }: EvolutionFormProps) {
  const [autor, setAutor] = useState('');
  const [evento, setEvento] = useState('');
  const [estado, setEstado] = useState('Observación');
  const [sintomas, setSintomas] = useState('');
  const [tratamiento, setTratamiento] = useState('');
  const [medico, setMedico] = useState('');
  const [notas, setNotas] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState('');

  // Estados disponibles en Supabase
  const estadosDisponibles = [
    { value: 'Crítico', label: '🔴 Evento agudo' },
    { value: 'Observación', label: '🟡 En estudio / Esperando resultado' },
    { value: 'Estable', label: '🟢 Estable / Tratamiento médico' },
    { value: 'Recuperación', label: '⚫ Recuperación / Alta' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación: Nombre obligatorio
    if (!autor.trim()) {
      setError('⚠️ Es obligatorio ingresar tu nombre para registrar la nota.');
      return;
    }

    // Validación: Evento obligatorio
    if (!evento.trim()) {
      setError('⚠️ El campo "Evento" es obligatorio.');
      return;
    }

    setError('');
    setEnviando(true);

    // Formateo robusto de Fecha y Hora (Evita errores intermitentes de AM/PM en celulares)
    const ahora = new Date();
    
    const anio = ahora.getFullYear();
    const mes = String(ahora.getMonth() + 1).padStart(2, '0');
    const dia = String(ahora.getDate()).padStart(2, '0');
    const fechaIso = `${anio}-${mes}-${dia}`; // Produce YYYY-MM-DD estricto

    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    const horaIso = `${horas}:${minutos}:${segundos}`; // Produce HH:MM:SS de 24hs estricto

    try {
      // Insertar directamente en Supabase
      const { data, error: supabaseError } = await supabase
        .from('evolucion_medica')
        .insert([{
          fecha: fechaIso,
          hora: horaIso,
          evento: evento.trim(),
          estado: estado,
          signos_sintomas: sintomas.trim(),
          intervencion_tratamiento: tratamiento.trim(),
          medico: medico.trim() || 'No especificado',
          notas: notas.trim(),
          registrado_por: autor.trim()
        }])
        .select();

      if (supabaseError) {
        console.error('Error Supabase:', supabaseError);
        setError(`❌ Error al guardar: ${supabaseError.message}`);
        setEnviando(false);
        return;
      }

      // Éxito
      alert(`✅ ¡Registro guardado con éxito por ${autor.trim()}!`);

      if (onSuccess) {
        onSuccess();
      }

      onClose();
      window.location.reload();

    } catch (err) {
      console.error('Error inesperado:', err);
      setError('❌ Error de red. Intentá nuevamente.');
      setEnviando(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-4">
          <h2 className="text-xl font-bold text-gray-800">
            📝 Nueva Nota de Evolución
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors text-2xl"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Campo: Autor (OBLIGATORIO) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tu Nombre (Familiar) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Ej: Esteban, Yanina, etc."
              value={autor}
              onChange={(e) => {
                setAutor(e.target.value);
                if (e.target.value) setError('');
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              required
            />
          </div>

          {/* Campo: Evento (OBLIGATORIO) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Evento / Título <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Ej: Cambio de estado mental, Control de rutina"
              value={evento}
              onChange={(e) => setEvento(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Campo: Estado */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Estado del caso
            </label>
            <select
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            >
              {estadosDisponibles.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Campo: Signos y Síntomas */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Signos y Síntomas
            </label>
            <textarea
              rows={2}
              placeholder="Qué le pasa, qué refiere ver o sentir..."
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Campo: Intervención / Tratamiento */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Intervención / Tratamiento
            </label>
            <input
              type="text"
              placeholder="Ej: Paracetamol 500mg, Administración de sedante"
              value={tratamiento}
              onChange={(e) => setTratamiento(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Grid: Médico y Notas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Médico que atiende
              </label>
              <input
                type="text"
                placeholder="Dr. García"
                value={medico}
                onChange={(e) => setMedico(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Notas Adicionales
              </label>
              <input
                type="text"
                placeholder="Ej: Informar al neurólogo"
                value={notas}
                onChange={(e) => setNotas(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
          </div>

          {/* Mensaje de Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Botones */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={enviando}
              className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition shadow-lg shadow-blue-600/20"
            >
              {enviando ? 'Guardando...' : '💾 Registrar Evolución'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}