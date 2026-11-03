import { SITE } from '@consts'

/** raw key material
 * yupp, update here when rotating keys */
const KEYS_RAW = {
  gpg: `-----BEGIN PGP PUBLIC KEY BLOCK-----

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
-----END PGP PUBLIC KEY BLOCK-----`,
  ssh: 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIGd/pwkdi4bBavWeYOx2QHe3mq5u1kHvkS+SQZmAVarp adnan@nanoolabs.dev',
  age: 'age15lcnlpxv8t6qqt82rcjcagx0h9sx85jdjhj5x3frqaa9u675x56qusmsgp',
} as const

/** public metadata for /keys page
 * references raw keys by type */
export const KEYS_META = [
  {
    type: 'gpg' as const,
    title: 'GPG',
    desc: 'Verify my signatures or encrypt messages to me.',
    fingerprint: '3189 8147 4FC8 EB9B 541F E684 D057 A5BA B37D 7F66',
    usage: `curl -s ${SITE.URL}/keys/gpg | gpg --import`,
  },
  {
    type: 'ssh' as const,
    title: 'SSH',
    desc: 'Add this to your authorized_keys for shell access.',
    fingerprint: 'SHA256:LW3y/QCQn79i/2md9XCqJGupe3wIPEOOZPxEzwsrf88',
    usage: `curl ${SITE.URL}/keys/ssh >> ~/.ssh/authorized_keys`,
  },
  {
    type: 'age' as const,
    title: 'Age',
    desc: 'Encrypt a file to me with:',
    fingerprint: 'none (using full public key above)',
    usage: `curl -s ${SITE.URL}/keys/age | age -R - -o file.age file.txt`,
  },
] as const

export type KeyType = (typeof KEYS_META)[number]['type']

export function getKey(type: KeyType) {
  const meta = KEYS_META.find((k) => k.type === type)
  if (!meta) throw new Error(`Unknown key type: ${type}`)
  return { ...meta, raw: KEYS_RAW[type] }
}

export function getRawKey(type: KeyType): string {
  return KEYS_RAW[type]
}
