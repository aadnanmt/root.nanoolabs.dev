import type { APIRoute } from 'astro'
const gpgKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEanDpEBYJKwYBBAHaRw8BAQdAbiI0x/fMefozWBEeHlHV1Vt5nGgkztLPDEAU
Sd1mdjO0KUFkbmFuIFNsYW1ldCBXaWJvd28gPGFkbmFuQG5hbm9vbGFicy5kZXY+
iJYEExYKAD4WIQQxiYFHT8jrm1Qf5oTQV6W6s31/ZgUCanDpEAIbAwUJA8JnAAUL
CQgHAgYVCgkICwIEFgIDAQIeAQIXgAAKCRDQV6W6s31/Zlu4AP98oMpO3+zul0O0
/8GB6djHd8wQ1/6e3B06+YcZ27JoCwEAkGGEu4knv31SDbNfkVcq1n8l0xHx6bSI
xEOB/WpAfQK4OARqcOkQEgorBgEEAZdVAQUBAQdAHNeGL1CDOdHIJnULwY0Ba+2E
lvYW0bL3zfd0udUQyjwDAQgHiH4EGBYKACYWIQQxiYFHT8jrm1Qf5oTQV6W6s31/
ZgUCanDpEAIbDAUJA8JnAAAKCRDQV6W6s31/Zgt6AP992P4uXSa6c8wMSdYl+kIh
UPgvfYLSDdyWNBYDl5o08wEAqTNSz7Pz6sBmCrIn3ntLedsaLi9FdOIamtooLl6j
agE=
=BDWt

-----END PGP PUBLIC KEY BLOCK-----`
export const GET: APIRoute = () => {
  return new Response(gpgKey, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
