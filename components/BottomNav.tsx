"use client";

import React from 'react';

export default function BottomNav() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 px-2 py-2 z-50 shadow-xl">
      <div className="max-w-md mx-auto flex justify-between items-center text-center px-1">
        
        {/* Inicio */}
        <button 
          onClick={() => scrollToSection('top')}
          className="flex flex-col items-center justify-center flex-1 gap-0.5 text-cyan-400 p-1.5 active:scale-95 transition"
        >
          <span className="text-base">🏠</span>
          <span className="text-[10px] font-medium font-mono">Inicio</span>
        </button>

        {/* Vitales */}
        <button 
          onClick={() => scrollToSection('vitales-seccion')}
          className="flex flex-col items-center justify-center flex-1 gap-0.5 text-slate-400 hover:text-slate-200 p-1.5 active:scale-95 transition"
        >
          <span className="text-base">❤️</span>
          <span className="text-[10px] font-medium font-mono">Vitales</span>
        </button>

        {/* Neuro */}
        <button 
          onClick={() => alert('Sección de Parámetros Neurológicos (Próximamente).')}
          className="flex flex-col items-center justify-center flex-1 gap-0.5 text-slate-400 hover:text-slate-200 p-1.5 active:scale-95 transition"
        >
          <span className="text-base">🧠</span>
          <span className="text-[10px] font-medium font-mono">Neuro</span>
        </button>

        {/* Doc */}
        <button 
          onClick={() => scrollToSection('bolso-seccion')}
          className="flex flex-col items-center justify-center flex-1 gap-0.5 text-slate-400 hover:text-slate-200 p-1.5 active:scale-95 transition"
        >
          <span className="text-base">📁</span>
          <span className="text-[10px] font-medium font-mono">Doc</span>
        </button>

        {/* Timeline */}
        <button 
          onClick={() => scrollToSection('historial-seccion')}
          className="flex flex-col items-center justify-center flex-1 gap-0.5 text-slate-400 hover:text-slate-200 p-1.5 active:scale-95 transition"
        >
          <span className="text-base">📅</span>
          <span className="text-[10px] font-medium font-mono">Timeline</span>
        </button>

      </div>
    </nav>
  );
}