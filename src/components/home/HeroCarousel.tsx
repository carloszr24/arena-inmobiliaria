'use client'

import Image from 'next/image'

export function HeroCarousel() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-stone-950" aria-hidden="true">
      <div className="absolute inset-3 sm:inset-4 md:inset-6 overflow-hidden">
        <Image
          src="/images/jerez-frontera.jpeg"
          alt="Vista de Jerez de la Frontera"
          fill
          priority
          className="object-cover scale-[1.03]"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-stone-950/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/55 to-stone-950/85" />
      <div className="absolute inset-0 bg-brand-cyan-dark/15 mix-blend-multiply" />
    </div>
  )
}
