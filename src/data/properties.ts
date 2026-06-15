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
  {
    id: 'chalet-adosado-chipiona-argentina',
    title: 'Chalet adosado en venta en Argentina, Chipiona',
    price: 260_000,
    location: 'Centro, Chipiona (Cádiz)',
    type: 'chalet',
    operation: 'venta',
    status: 'disponible',
    description: `Vivienda unifamiliar adosada en venta en Chipiona.

La vivienda se encuentra en una parcela de 129,95 m² y cuenta con 98 m² construidos distribuidos en recibidor, salón-comedor, cocina, lavadero, aseo y un dormitorio en planta baja. La planta alta se distribuye en distribuidor, tres habitaciones, cuarto de baño y una terraza que se ha convertido en vestidor del dormitorio principal.

La zona no edificada está destinada a patio delantero y patio trasero.

Equipamiento: aire acondicionado, jardín y armarios empotrados. Segunda mano en buen estado. Solo acceso exterior adaptado para personas con movilidad reducida.

Contacto para visitas: 675 02 00 23 o 856 61 08 71. También por WhatsApp o mensaje privado.

En cumplimiento del Decreto 218/2005 del 11 de octubre, se informa al cliente que los gastos notariales, registrales, ITP, honorarios de intermediación, gastos financieros y otros gastos inherentes a la compraventa no están incluidos en el precio.`,
    images: JSON.stringify([
      '/images/propiedad2jerez.png',
      '/images/propiedad2jerez-1.png',
      '/images/propiedad2jerez-2.png',
      '/images/propiedad2jerez-3.png',
    ]),
    fotocasaUrl: null,
    bedrooms: 4,
    bathrooms: 2,
    sqMeters: 98,
    availability: 'Sin restricciones',
    condition: 'Buen estado',
    floor: '2 plantas',
    elevator: 'No',
    furnished: 'No',
    featured: true,
    createdAt: new Date('2026-06-15T12:30:00.000Z'),
    updatedAt: new Date('2026-06-15T12:30:00.000Z'),
  },
  {
    id: 'piso-jerez-roci-milagrosa',
    title: 'Piso en venta en El Rocío - La Milagrosa, Jerez de la Frontera',
    price: 235_000,
    location: 'El Rocío - La Milagrosa, Jerez de la Frontera (Cádiz)',
    type: 'piso',
    operation: 'venta',
    status: 'disponible',
    description: `¿Buscas piso en Avenida Rey Juan Carlos I? Jerez de la Frontera.

Vivienda de dos habitaciones con armarios empotrados, salón-comedor con terraza, cocina, dos baños (uno de ellos en la habitación principal) y trastero.

Además cuenta con plaza de aparcamiento subterráneo.

Aire centralizado. Piscina comunitaria.

Ubicado en una de las zonas más demandadas de la ciudad, con varios supermercados muy próximos, múltiples comercios locales, colegios, institutos, parques, gimnasio, servicios públicos, etc.

Equipamiento: aire acondicionado, terraza, trastero y armarios empotrados. Segunda mano en buen estado. Solo acceso exterior adaptado para personas con movilidad reducida.

Contacto para visitas: 675 02 00 23 o 856 61 08 71. También por WhatsApp o mensaje privado.

En cumplimiento del Decreto 218/2005 del 11 de octubre, se informa al cliente que los gastos notariales, registrales, ITP, honorarios de intermediación, gastos financieros y otros gastos inherentes a la compraventa no están incluidos en el precio.`,
    images: JSON.stringify([
      '/images/propiedad3jerez.png',
      '/images/propiedad3jerez-1.png',
      '/images/propiedad3jerez-2.png',
    ]),
    fotocasaUrl: null,
    bedrooms: 2,
    bathrooms: 2,
    sqMeters: 78,
    availability: 'Sin restricciones',
    condition: 'Buen estado',
    floor: '1ª planta interior',
    garage: 'Plaza de garaje incluida',
    elevator: 'Sí',
    furnished: 'No',
    featured: true,
    createdAt: new Date('2026-06-15T13:00:00.000Z'),
    updatedAt: new Date('2026-06-15T13:00:00.000Z'),
  },
]
