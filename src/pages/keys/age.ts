import type { APIRoute } from 'astro'
import { getRawKey } from '@data/keys'

export const GET: APIRoute = () => {
  return new Response(getRawKey('age'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
