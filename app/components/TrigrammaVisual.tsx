import React from 'react'
import LineaVisual from './LineaVisual'

interface TrigrammaVisualProps {
  linee: string[]
  size?: 'small' | 'medium' | 'large'
}

export default function TrigrammaVisual({ linee, size = 'medium' }: TrigrammaVisualProps) {
  const sizeClasses = {
    small: 'w-16',
    medium: 'w-24',
    large: 'w-32'
  }

  return (
    <div className={`${sizeClasses[size]} mx-auto`}>
      <div className="flex flex-col gap-1">
        {linee.map((linea, index) => (
          <LineaVisual key={index} valore={linea} size={size} />
        ))}
      </div>
    </div>
  )
} 