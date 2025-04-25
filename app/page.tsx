import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">I Ching - Il Libro dei Cambiamenti</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Esplora gli Esagrammi */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Esplora gli Esagrammi</h2>
          <p className="mb-4">Scopri i 64 esagrammi dell'I Ching e il loro significato profondo.</p>
          <Link href="/esagrammi" className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-secondary transition-colors">
            Vedi tutti gli esagrammi
          </Link>
        </div>

        {/* Consulta l'Oracolo */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Consulta l'Oracolo</h2>
          <p className="mb-4">Lancia le monete e ricevi la tua risposta dall'I Ching.</p>
          <Link href="/oracolo" className="inline-block bg-accent text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
            Consulta l'oracolo
          </Link>
        </div>

        {/* Storia e Origini */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Storia e Origini</h2>
          <p className="mb-4">Scopri la storia millenaria dell'I Ching e le sue origini.</p>
          <Link href="/in-costruzione" className="inline-block bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 transition-colors">
            In costruzione
          </Link>
        </div>

        {/* Applicazioni Pratiche */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Applicazioni Pratiche</h2>
          <p className="mb-4">Come applicare la saggezza dell'I Ching nella vita quotidiana.</p>
          <Link href="/in-costruzione" className="inline-block bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 transition-colors">
            In costruzione
          </Link>
        </div>

        {/* Trasformazioni */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Trasformazioni</h2>
          <p className="mb-4">Scopri come gli esagrammi si trasformano e mutano.</p>
          <Link href="/in-costruzione" className="inline-block bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 transition-colors">
            In costruzione
          </Link>
        </div>

        {/* Meditazione */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Meditazione</h2>
          <p className="mb-4">Esercizi di meditazione basati sugli esagrammi.</p>
          <Link href="/in-costruzione" className="inline-block bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 transition-colors">
            In costruzione
          </Link>
        </div>

        {/* Simboli e Significati */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Simboli e Significati</h2>
          <p className="mb-4">I simboli dell'I Ching e il loro significato profondo.</p>
          <Link href="/in-costruzione" className="inline-block bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 transition-colors">
            In costruzione
          </Link>
        </div>

        {/* Esempi Storici */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Esempi Storici</h2>
          <p className="mb-4">Casi reali di interpretazione dell'I Ching nel passato.</p>
          <Link href="/in-costruzione" className="inline-block bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 transition-colors">
            In costruzione
          </Link>
        </div>

        {/* Consigli per la Lettura */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Consigli per la Lettura</h2>
          <p className="mb-4">Come interpretare l'I Ching in modo più profondo.</p>
          <Link href="/in-costruzione" className="inline-block bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 transition-colors">
            In costruzione
          </Link>
        </div>

        {/* Relazioni tra Esagrammi */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Relazioni tra Esagrammi</h2>
          <p className="mb-4">Come gli esagrammi si relazionano tra loro.</p>
          <Link href="/in-costruzione" className="inline-block bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 transition-colors">
            In costruzione
          </Link>
        </div>

        {/* Applicazioni Moderne */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Applicazioni Moderne</h2>
          <p className="mb-4">Come l'I Ching può essere applicato nel contesto contemporaneo.</p>
          <Link href="/in-costruzione" className="inline-block bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 transition-colors">
            In costruzione
          </Link>
        </div>

        {/* Esercizi Pratici */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Esercizi Pratici</h2>
          <p className="mb-4">Attività per comprendere meglio l'I Ching.</p>
          <Link href="/in-costruzione" className="inline-block bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 transition-colors">
            In costruzione
          </Link>
        </div>
      </div>
    </div>
  )
} 