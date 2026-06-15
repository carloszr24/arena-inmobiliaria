import type { Property } from '@/types'

const now = new Date('2026-06-15T12:00:00.000Z')

/** Catálogo en archivo local. Añade propiedades cuando tengas el inventario listo. */
export const DEMO_PROPERTIES: Property[] = [
  {
    id: 'atico-rota-santo-tomas',
    title: 'Ático en venta en Calle Santo Tomás, Rota',
    price: 208_000,
    location: 'El Chorrillo - El Molino, Rota (Cádiz)',
    type: 'atico',
    operation: 'venta',
    status: 'disponible',
    description: `Ático a la venta en Rota, a tan solo 1 minuto de la playa del Rompidillo.

Consta de una habitación, salón-comedor con cocina abierta, baño, terraza de 25 m² y azotea de 38 m². Listo para entrar a vivir o perfecto para sacar una rentabilidad como alquiler vacacional.

Se encuentra próximo a comercios, zona de ocio y otros servicios. Segunda planta exterior sin ascensor.

Equipamiento: aire acondicionado y armarios empotrados. Segunda mano en buen estado.

Contacto para visitas: 675 02 00 23 o 856 61 08 71. También por WhatsApp o mensaje privado.

En cumplimiento del Decreto 218/2005 del 11 de octubre, se informa al cliente que los gastos notariales, registrales, ITP, honorarios de intermediación, gastos financieros y otros gastos inherentes a la compraventa no están incluidos en el precio.`,
    images: JSON.stringify([
      '/images/propiedad1jerez.png',
      '/images/propiedad1jerez-1.png',
      '/images/propiedad1jerez-2.png',
    ]),
    fotocasaUrl: null,
    bedrooms: 1,
    bathrooms: 1,
    sqMeters: 40,
    availability: 'Sin restricciones',
    condition: 'Buen estado',
    floor: '2ª planta exterior',
    elevator: 'No',
    furnished: 'No',
    featured: true,
    createdAt: now,
    updatedAt: now,
  },
]
