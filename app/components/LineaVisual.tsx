import React from 'react'

interface LineaVisualProps {
  valore: string
  size?: 'small' | 'medium' | 'large'
}

export default function LineaVisual({ valore, size = 'medium' }: LineaVisualProps) {
  const sizeClasses = {
    small: 'h-2',
    medium: 'h-3',
    large: 'h-4'
  }

  return (
    <div className="flex justify-center">
      {valore === "9" ? (
        <div className={`w-full ${sizeClasses[size]} bg-primary rounded`}></div>
      ) : (
        <div className="flex justify-between w-full">
          <div className={`w-5/12 ${sizeClasses[size]} bg-primary rounded`}></div>
          <div className={`w-5/12 ${sizeClasses[size]} bg-primary rounded`}></div>
        </div>
      )}
    </div>
  )
} 