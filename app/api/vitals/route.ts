import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

function calcularSeveridad(data: any) {
  const { pulso, spo2, presion_sistolica } = data

  if (spo2 < 92 || pulso > 120 || pulso < 45 || presion_sistolica > 180) {
    return "critico"
  }

  if (spo2 <= 94 || (pulso >= 100 && pulso <= 120)) {
    return "alerta"
  }

  return "estable"
}

export async function GET() {
  return NextResponse.json({ ok: true })
}

export async function POST(req: Request) {
  const body = await req.json()

  const {
    paciente_id,
    pulso,
    spo2,
    presion_sistolica,
    presion_diastolica,
    origen
  } = body

  const severidad = calcularSeveridad({
    pulso,
    spo2,
    presion_sistolica,
    presion_diastolica
  })

  const { data, error } = await supabase
    .from("eventos_clinicos")
    .insert({
      paciente_id,
      tipo_evento: "vitales",
      datos: { pulso, spo2, presion_sistolica, presion_diastolica },
      severidad,
      origen: origen || "mobile"
    })
    .select()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({
    ok: true,
    event: data?.[0],
    severidad
  })
}