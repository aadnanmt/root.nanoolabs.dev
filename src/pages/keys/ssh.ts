import type { APIRoute } from 'astro'
const sshKey =
  'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIGd/pwkdi4bBavWeYOx2QHe3mq5u1kHvkS+SQZmAVarp adnan@nanoolabs.dev'
export const GET: APIRoute = () => {
  return new Response(sshKey, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
