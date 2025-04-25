'use client'

import React, { useState } from 'react'
import { Esagramma } from '../data/esagrammi'
import EsagrammaVisual from './EsagrammaVisual'
import Link from 'next/link'

interface EsagrammaDetailProps {
  esagramma: Esagramma
}

export default function EsagrammaDetail({ esagramma }: EsagrammaDetailProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  return (
    <div className="max-w-4xl mx-auto">
      {/* Navigazione superiore */}
      <div className="flex justify-between items-center mb-8">
        <Link
          href="/esagrammi"
          className="text-accent hover:underline flex items-center transition-all duration-300 hover:scale-105"
        >
          <span className="mr-2">←</span> Torna alla lista degli esagrammi
        </Link>
        <div className="flex gap-4">
          {esagramma.numero > 1 && (
            <Link
              href={`/esagrammi/${esagramma.numero - 1}`}
              className="text-accent hover:underline flex items-center transition-all duration-300 hover:scale-105"
            >
              <span className="mr-2">←</span> Precedente
            </Link>
          )}
          {esagramma.numero < 64 && (
            <Link
              href={`/esagrammi/${esagramma.numero + 1}`}
              className="text-accent hover:underline flex items-center transition-all duration-300 hover:scale-105"
            >
              Successivo <span className="ml-2">→</span>
            </Link>
          )}
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md relative overflow-hidden">
        {/* Sfondo decorativo con effetto aurora */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 via-pink-200 to-red-200 rounded-full -mr-48 -mt-48 opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200 via-cyan-200 to-green-200 rounded-full -ml-48 -mb-48 opacity-30 blur-3xl animate-pulse"></div>

        {/* Header con numero e nome */}
        <div className="text-center mb-8 relative">
          <div className="inline-block p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
            <span className="text-white text-sm font-medium">Esagramma {esagramma.numero}</span>
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">{esagramma.nomeItaliano}</h1>
          <p className="text-xl text-accent">{esagramma.nome}</p>
        </div>

        {/* Visualizzazione dell'esagramma con effetto hover */}
        <div className="flex justify-center mb-8 relative">
          <div className="transform hover:scale-110 transition-all duration-500 hover:rotate-3">
            <EsagrammaVisual esagramma={esagramma} size="large" />
          </div>
        </div>

        {/* Trigrammi con effetto glassmorphism */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div 
            className="text-center p-6 rounded-xl backdrop-blur-lg bg-white/30 border border-white/20 shadow-lg transform hover:scale-105 transition-all duration-300"
            onClick={() => setActiveSection(activeSection === 'superiore' ? null : 'superiore')}
          >
            <h3 className="text-lg font-semibold mb-2">Sopra: {esagramma.trigrammaSuperiore}</h3>
            <p className="text-primary text-xl">{esagramma.trigrammaSuperiore}</p>
          </div>
          <div 
            className="text-center p-6 rounded-xl backdrop-blur-lg bg-white/30 border border-white/20 shadow-lg transform hover:scale-105 transition-all duration-300"
            onClick={() => setActiveSection(activeSection === 'inferiore' ? null : 'inferiore')}
          >
            <h3 className="text-lg font-semibold mb-2">Sotto: {esagramma.trigrammaInferiore}</h3>
            <p className="text-primary text-xl">{esagramma.trigrammaInferiore}</p>
          </div>
        </div>

        {/* Responso con effetto glassmorphism */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Responso</h3>
          <div className="backdrop-blur-lg bg-white/30 p-6 rounded-xl border border-white/20 shadow-lg">
            <p className="text-gray-700 leading-relaxed mb-4">{esagramma.significato}</p>
          </div>
        </div>

        {/* Commento con effetto glassmorphism */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Commento</h3>
          <div className="backdrop-blur-lg bg-white/30 p-6 rounded-xl border border-white/20 shadow-lg">
            <p className="text-gray-700 leading-relaxed mb-4">{esagramma.interpretazione.testo}</p>
            <p className="text-sm text-gray-500 italic">Fonte: {esagramma.interpretazione.fonte}</p>
          </div>
        </div>

        {/* L'Immagine con effetto glassmorphism */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">L'Immagine</h3>
          <div className="backdrop-blur-lg bg-white/30 p-6 rounded-xl border border-white/20 shadow-lg">
            <p className="text-gray-700 leading-relaxed mb-4">{esagramma.immagine}</p>
          </div>
        </div>

        {/* Linee con Interpretazioni e effetto glassmorphism */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Linee e loro Significato</h3>
          <div className="space-y-4">
            {esagramma.linee.map((linea, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl backdrop-blur-lg bg-white/30 border border-white/20 shadow-lg transform hover:scale-105 transition-all duration-300 ${
                  linea === "9" ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20" : "bg-gradient-to-r from-blue-500/20 to-cyan-500/20"
                }`}
              >
                <p className="font-medium mb-2 text-lg">
                  Linea {6 - index}: {linea === "9" ? "Yang" : "Yin"}
                </p>
                <p className="text-gray-700">{esagramma.lineeInterpretazione[index]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigazione inferiore */}
        <div className="flex justify-between items-center">
          <Link
            href="/esagrammi"
            className="text-accent hover:underline flex items-center transition-all duration-300 hover:scale-105"
          >
            <span className="mr-2">←</span> Torna alla lista degli esagrammi
          </Link>
          <div className="flex gap-4">
            {esagramma.numero > 1 && (
              <Link
                href={`/esagrammi/${esagramma.numero - 1}`}
                className="text-accent hover:underline flex items-center transition-all duration-300 hover:scale-105"
              >
                <span className="mr-2">←</span> Precedente
              </Link>
            )}
            {esagramma.numero < 64 && (
              <Link
                href={`/esagrammi/${esagramma.numero + 1}`}
                className="text-accent hover:underline flex items-center transition-all duration-300 hover:scale-105"
              >
                Successivo <span className="ml-2">→</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 