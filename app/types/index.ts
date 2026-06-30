export type EstadoEvolucion = 'Crítico' | 'Observación' | 'Estable' | 'Recuperación'

export interface EvolucionMedica {
  id: string
  creado_at: string
  fecha: string
  hora: string
  evento: string
  estado: EstadoEvolucion
  signos_sintomas: string
  intervencion_tratamiento: string
  medico: string
  notas: string
}

export interface EstadisticasEstado {
  'Crítico': number
  'Observación': number
  'Estable': number
  'Recuperación': number
}