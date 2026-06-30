"use client";

import React from 'react';

export default function PatientCard() {
  // Cálculo automático de la edad en base al nacimiento real (30/06/1954)
  const calcularEdad = (fechaNacimiento: string) => {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date(); // Junio 2026
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  };

  const edadReal = calcularEdad("1954-06-30");

  return (
    <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur space-y-3">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-slate-200">Samaniego, Lía Dora</h2>
          <p className="text-xs text-slate-400">Edad: {edadReal} años | DNI: 11.184.205</p>
          <p className="text-xs text-cyan-400 font-mono mt-1">PAMI: 150694507801</p>
        </div>
        <div className="text-right text-xs">
          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 block mb-1 text-center">
            Observación
          </span>
          <p className="text-slate-300 font-semibold">Sala Común N°27</p>
          <p className="text-[11px] text-slate-500">Hosp. Gaspar M. Campos</p>
        </div>
      </div>
      
      <div className="pt-2 border-t border-slate-800/60 grid grid-cols-2 gap-2 text-[11px]">
        <div>
          <p className="text-slate-500">Ingreso: <span className="text-slate-300 font-mono">28/06/2026</span></p>
          <p className="text-slate-500">Servicio: <span className="text-slate-300">Neurología</span></p>
        </div>
        <div className="text-right">
          <p className="text-slate-500">Médica: <span className="text-slate-300">Dr. Fernandez G.</span></p>
          <p className="text-slate-500">Tel: <span className="text-slate-300 font-mono">02261-442222</span></p>
        </div>
      </div>
    </div>
  );
}