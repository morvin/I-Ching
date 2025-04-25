'use client'

import React from 'react'
import EsagrammaVisual from '../components/EsagrammaVisual'
import Link from 'next/link'
import { esagrammi } from '../data/esagrammi'

export default function Esagrammi() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">I 64 Esagrammi</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {esagrammi.map((esagramma) => (
          <Link 
            key={esagramma.numero}
            href={`/esagrammi/${esagramma.numero}`}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-center mb-2">
              <EsagrammaVisual esagramma={esagramma} size="small" />
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-600">{esagramma.numero}</p>
              <p className="text-sm font-medium">{esagramma.nomeItaliano}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 