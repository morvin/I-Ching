import { Esagramma } from '../data/esagrammi'
import Link from 'next/link'

interface EsagrammaCardProps {
  esagramma: Esagramma
}

export default function EsagrammaCard({ esagramma }: EsagrammaCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-semibold">Esagramma {esagramma.numero}</h2>
          <h3 className="text-xl text-primary">{esagramma.nome}</h3>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Trigramma Superiore: {esagramma.trigrammaSuperiore}</p>
          <p className="text-sm text-gray-600">Trigramma Inferiore: {esagramma.trigrammaInferiore}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-lg font-medium text-accent mb-2">{esagramma.significato}</p>
        <p className="text-gray-600">{esagramma.descrizione}</p>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2">Linee:</h4>
        <div className="flex gap-2">
          {esagramma.linee.map((linea, index) => (
            <div
              key={index}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                linea === "9" ? "bg-primary text-white" : "bg-gray-200"
              }`}
            >
              {linea}
            </div>
          ))}
        </div>
      </div>

      <Link
        href={`/esagrammi/${esagramma.numero}`}
        className="inline-block text-accent hover:underline"
      >
        Leggi di più
      </Link>
    </div>
  )
} 