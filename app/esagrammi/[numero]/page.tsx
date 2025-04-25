import React from 'react'
import { esagrammi } from '../../data/esagrammi'
import EsagrammaDetail from '../../components/EsagrammaDetail'
import Link from 'next/link'

export default function EsagrammaDetailPage({ params }: { params: { numero: string } }) {
  const numero = parseInt(params.numero)
  const esagramma = esagrammi.find(e => e.numero === numero)

  if (!esagramma) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Esagramma non trovato</h1>
            <p className="text-gray-600 mb-8">L'esagramma che stai cercando non esiste.</p>
            <Link 
              href="/esagrammi"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Torna alla lista degli esagrammi
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <EsagrammaDetail esagramma={esagramma} />
      </div>
    </div>
  )
} 