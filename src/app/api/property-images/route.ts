import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const property_id = searchParams.get('property_id')
  if (!property_id) return NextResponse.json({ error: 'property_id is required' }, { status: 400 })

  const { data, error } = await supabase.from('property_images').select('*').eq('property_id', property_id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json(data)
}

export async function POST(req: Request) {
  const body = await req.json()
  const { property_id, public_id, url } = body

  if (!property_id || !public_id || !url) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const { data, error } = await supabase.from('property_images').insert([{ property_id, public_id, url }]).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json(data)
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  if (!id) return NextResponse.json({ error: 'Image id is required' }, { status: 400 })

  const { error } = await supabase.from('property_images').delete().eq('id', id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ success: true })
}
