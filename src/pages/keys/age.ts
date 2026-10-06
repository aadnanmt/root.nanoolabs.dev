import type { APIRoute } from 'astro'
const ageKey = 'age15lcnlpxv8t6qqt82rcjcagx0h9sx85jdjhj5x3frqaa9u675x56qusmsgp'
export const GET: APIRoute = () => {
  return new Response(ageKey, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
