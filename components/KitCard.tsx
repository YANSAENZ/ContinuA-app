"use client";

import React, { useState } from 'react';

export default function KitCard() {
  const [items, setItems] = useState([
    { id: 1, txt: 'Manta liviana o chal (Neurología)', check: true },
    { id: 2, txt: 'Pantuflas o calzado antideslizante', check: false },
    { id: 3, txt: 'Saquito o campera con cierre', check: false },
    { id: 4, txt: 'Elementos de higiene (cepillo, crema, jabón)', check: true },
    { id: 5, txt: 'Anteojos y prótesis (con estuche)', check: false },
    { id: 6, txt: 'Lista de medicación habitual', check: true },
    { id: 7, txt: 'Cargador de celular', check: false },
    { id: 8, txt: 'Cuaderno y lapicera (para partes médicos)', check: true },
  ]);

  const toggle = (id: number) => {
    setItems(items.map(i => i.id === id ? { ...i, check: !i.check } : i));
  };

  return (
    <div id="bolso-seccion" className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 space-y-3 scroll-mt-4">
      <h3 className="text-sm font-semibold text-slate-400 flex items-center gap-2">
        <span>🎒</span> Bolso de Internación (Control Familiar)
      </h3>
      <div className="grid grid-cols-1 gap-2 text-xs font-mono">
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => toggle(item.id)}
            className={`w-full text-left p-2 rounded-lg border transition flex items-center gap-3 ${
              item.check 
                ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-400 line-through' 
                : 'bg-slate-950/40 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <span>{item.check ? '✅' : '🔲'}</span>
            {item.txt}
          </button>
        ))}
      </div>
    </div>
  );
}