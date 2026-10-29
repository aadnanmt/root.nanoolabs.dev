import type { APIRoute } from 'astro'
import { SITE } from '@consts'

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      status: 'ok',
      site: SITE.URL,
      timestamp: new Date().toISOString(),
    }),
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    },
  )
}
