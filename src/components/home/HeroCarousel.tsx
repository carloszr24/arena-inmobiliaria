'use client'

import Image from 'next/image'

export function HeroCarousel() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-stone-950" aria-hidden="true">
      <Image
        src="/images/jerez-frontera.jpeg"
        alt="Vista de Jerez de la Frontera"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-stone-950/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/75 via-stone-950/45 to-stone-950/80" />
      <div className="absolute inset-0 bg-brand-cyan-dark/10 mix-blend-multiply" />
    </div>
  )
}
