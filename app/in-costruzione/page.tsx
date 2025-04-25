import Link from 'next/link'

export default function InCostruzione() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Pagina in Costruzione</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-6">
            <svg className="w-24 h-24 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          
          <p className="text-xl text-gray-700 mb-8">
            Stiamo lavorando per portarti contenuti di qualità. Questa sezione sarà presto disponibile.
          </p>
          
          <Link 
            href="/"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
          >
            Torna alla Home
          </Link>
        </div>
      </div>
    </div>
  )
} 