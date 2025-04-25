'use client'

import React from 'react'
import { Esagramma } from '../data/esagrammi'
import TrigrammaVisual from './TrigrammaVisual'

interface EsagrammaVisualProps {
  esagramma: Esagramma
  size?: 'small' | 'medium' | 'large'
}

export default function EsagrammaVisual({ esagramma, size = 'medium' }: EsagrammaVisualProps) {
  const trigrammaSuperiore = esagramma.linee.slice(0, 3)
  const trigrammaInferiore = esagramma.linee.slice(3)

  return (
    <div className="flex flex-col gap-2">
      <TrigrammaVisual linee={trigrammaSuperiore} size={size} />
      <TrigrammaVisual linee={trigrammaInferiore} size={size} />
    </div>
  )
} 