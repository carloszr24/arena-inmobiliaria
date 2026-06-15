export const AGENT = {
  name: 'Arena Inmobiliaria',
  title: 'Agencia inmobiliaria',
  city: 'Jerez de la Frontera',
  tagline: 'Asesoramiento personalizado para compra, venta y alquiler en Jerez y la provincia de Cádiz.',
} as const

export const CONTACT = {
  address: {
    line1: 'Res. Tres Olivos I, Av. Rey Juan Carlos I, Local 7',
    line2: '11406 Jerez de la Frontera, Cádiz',
    full: 'Res. Tres Olivos I, Av. Rey Juan Carlos I, Local 7, 11406 Jerez de la Frontera, Cádiz',
    mapsQuery: 'Res.+Tres+Olivos+I,+Av.+Rey+Juan+Carlos+I,+Local+7,+11406+Jerez+de+la+Frontera,+Cadiz',
  },
  phone: {
    display: '675 02 00 23',
    e164: '+34675020023',
    wa: '34675020023',
  },
  email: '',
} as const

export const OPENING_HOURS = [
  { day: 'Lunes', hours: '9:30–13:30 · 17:00–20:00' },
  { day: 'Martes', hours: '9:30–13:30 · 17:00–20:00' },
  { day: 'Miércoles', hours: '9:30–13:30 · 17:00–20:00' },
  { day: 'Jueves', hours: '9:30–13:30 · 17:00–20:00' },
  { day: 'Viernes', hours: '9:30–13:30 · 17:00–20:00' },
  { day: 'Sábado', hours: 'Cerrado' },
  { day: 'Domingo', hours: 'Cerrado' },
] as const

export const mapsHref = `https://maps.google.com/?q=${CONTACT.address.mapsQuery}`
export const phoneHref = `tel:${CONTACT.phone.e164}`
export const whatsappHref = `https://wa.me/${CONTACT.phone.wa}`
export const hasEmail = CONTACT.email.trim().length > 0
export const emailHref = hasEmail ? `mailto:${CONTACT.email}` : ''
export const whatsappDisplay = `+34 ${CONTACT.phone.display}`

export const scheduleSummary = 'Lun–Vie: 9:30–13:30 · 17:00–20:00 · Sáb y Dom: Cerrado'
