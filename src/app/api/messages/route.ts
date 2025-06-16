import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const property_id = searchParams.get('property_id')
  const user_id = searchParams.get('user_id')

  if (!property_id || !user_id) return NextResponse.json({ error: 'property_id and user_id required' }, { status: 400 })

  // Fetch all messages for this property where user is sender or receiver
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .eq('property_id', property_id)
    .filter('sender_id', 'eq', user_id)
    .or(`receiver_id.eq.${user_id}`)
    .order('created_at', { ascending: true })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json(data)
}

export async function POST(req: Request) {
  const body = await req.json()
  const { property_id, sender_id, receiver_id, content } = body
  if (!property_id || !sender_id || !receiver_id || !content) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const { data, error } = await supabase.from('messages').insert([{ property_id, sender_id, receiver_id, content }]).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json(data)
}

export async function PUT(req: Request) {
  const body = await req.json()
  const { id, read } = body
  if (!id) return NextResponse.json({ error: 'Message id required' }, { status: 400 })

  const { data, error } = await supabase.from('messages').update({ read }).eq('id', id).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json(data)
}
