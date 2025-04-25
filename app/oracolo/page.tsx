'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Oraculo() {
  const [monete, setMonete] = useState<number[]>([])
  const [risultato, setRisultato] = useState<number | null>(null)

  const lanciaMonete = () => {
    const nuovoLancio = Array.from({ length: 3 }, () => Math.floor(Math.random() * 2))
    setMonete(nuovoLancio)
    
    // Calcola il valore della linea
    const somma = nuovoLancio.reduce((acc, val) => acc + val, 0)
    const valoreLinea = somma === 0 ? 6 : somma === 3 ? 9 : somma === 1 ? 7 : 8
    setRisultato(valoreLinea)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Consulta l'Oracolo</h1>
      
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <button
            onClick={lanciaMonete}
            className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Lancia le Monete
          </button>
        </div>

        {monete.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Risultato del lancio:</h2>
            <div className="flex justify-center gap-4">
              {monete.map((moneta, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white"
                >
                  {moneta === 0 ? '⚪' : '⚫'}
                </div>
              ))}
            </div>
            <p className="text-center mt-4">
              Valore della linea: {risultato}
            </p>
          </div>
        )}

        <div className="text-center">
          <Link
            href="/esagrammi"
            className="text-primary hover:underline"
          >
            Vedi tutti gli esagrammi
          </Link>
        </div>
      </div>
    </div>
  )
} 