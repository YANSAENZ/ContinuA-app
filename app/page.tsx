"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import PatientCard from '../components/PatientCard';
import VitalsCard from '../components/VitalsCard';
import TimelineCard from '../components/TimelineCard';
import BottomNav from '../components/BottomNav';
import VitalsForm from '../components/VitalsForm';
import EvolutionForm from '../components/EvolutionForm';
import KitCard from '../components/KitCard';

export default function Home() {
  const [isVitalsOpen, setIsVitalsOpen] = useState(false);
  const [isEvolutionOpen, setIsEvolutionOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 pb-24">
      <Header />

      <main className="max-w-md mx-auto p-4 space-y-4">
        <PatientCard />

        {/* Botones de acción principal */}
        <div className="grid grid-cols-2 gap-2">
          <button 
            onClick={() => setIsVitalsOpen(true)}
            className="p-3 text-sm rounded-lg border border-cyan-500/30 bg-cyan-950/20 hover:bg-cyan-950/40 transition text-left flex items-center gap-2 text-cyan-400"
          >
            <span>➕</span> Registrar Vitales
          </button>
          <button 
            onClick={() => setIsEvolutionOpen(true)}
            className="p-3 text-sm rounded-lg border border-amber-500/30 bg-amber-950/20 hover:bg-amber-950/40 transition text-left flex items-center gap-2 text-amber-400"
          >
            <span>📝</span> Nota de Evolución
          </button>
        </div>

        <VitalsCard />
        
        {/* Historial de eventos */}
        <TimelineCard />

        {/* Control del Bolso de Internación */}
        <KitCard />
      </main>

      <BottomNav />

      {/* Formularios emergentes */}
      {isVitalsOpen && <VitalsForm onClose={() => setIsVitalsOpen(false)} />}
      {isEvolutionOpen && <EvolutionForm onClose={() => setIsEvolutionOpen(false)} />}
    </div>
  );
}