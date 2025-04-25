import { trigrammi } from '../app/data/trigrammi'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

interface Esagramma {
  numero: number
  nome: string
  nomeItaliano: string
  significato: string
  trigrammaSuperiore: string
  trigrammaInferiore: string
  linee: string[]
  descrizione: string
  immagine: string
  interpretazione: {
    testo: string
    fonte: string
  }
  lineeInterpretazione: string[]
  consigli: string[]
  relazioni: string[]
}

// Definizione degli esagrammi nell'ordine corretto
const esagrammiOrdine = [
  { sup: "Cielo", inf: "Cielo", nome: "Ch'ien", nomeIt: "Il Creativo", significato: "La Forza Creativa" },
  { sup: "Terra", inf: "Terra", nome: "K'un", nomeIt: "Il Ricettivo", significato: "La Forza Ricettiva" },
  { sup: "Acqua", inf: "Tuono", nome: "Chun", nomeIt: "La Difficoltà Iniziale", significato: "Il Germogliare" },
  { sup: "Montagna", inf: "Acqua", nome: "Meng", nomeIt: "La Stoltezza Giovanile", significato: "L'Inesperienza" },
  { sup: "Acqua", inf: "Cielo", nome: "Hsu", nomeIt: "L'Attesa", significato: "L'Attesa" },
  { sup: "Cielo", inf: "Acqua", nome: "Sung", nomeIt: "La Lite", significato: "Il Conflitto" },
  { sup: "Terra", inf: "Acqua", nome: "Shih", nomeIt: "L'Esercito", significato: "La Forza Militare" },
  { sup: "Acqua", inf: "Terra", nome: "Pi", nomeIt: "L'Unione", significato: "L'Unione" },
  { sup: "Vento", inf: "Cielo", nome: "Hsiao Ch'u", nomeIt: "Il Potere Domestico", significato: "La Forza Domestica" },
  { sup: "Cielo", inf: "Lago", nome: "Lu", nomeIt: "Il Procedere", significato: "Il Cammino" },
  { sup: "Cielo", inf: "Terra", nome: "T'ai", nomeIt: "La Pace", significato: "La Prosperità" },
  { sup: "Terra", inf: "Cielo", nome: "P'i", nomeIt: "La Stagnazione", significato: "Il Blocco" },
  { sup: "Cielo", inf: "Fuoco", nome: "T'ung Jen", nomeIt: "La Comunione", significato: "L'Unione" },
  { sup: "Fuoco", inf: "Cielo", nome: "Ta Yu", nomeIt: "Il Possesso", significato: "La Ricchezza" },
  { sup: "Terra", inf: "Montagna", nome: "Ch'ien", nomeIt: "La Modestia", significato: "L'Umiltà" },
  { sup: "Tuono", inf: "Terra", nome: "Yu", nomeIt: "L'Entusiasmo", significato: "La Gioia" },
  { sup: "Lago", inf: "Tuono", nome: "Sui", nomeIt: "Il Seguire", significato: "L'Adattamento" },
  { sup: "Montagna", inf: "Vento", nome: "Ku", nomeIt: "Il Lavoro", significato: "La Corruzione" },
  { sup: "Terra", inf: "Lago", nome: "Lin", nomeIt: "L'Avvicinamento", significato: "L'Approccio" },
  { sup: "Vento", inf: "Terra", nome: "Kuan", nomeIt: "La Contemplazione", significato: "L'Osservazione" },
  { sup: "Fuoco", inf: "Tuono", nome: "Shih Ho", nomeIt: "Il Morso", significato: "La Masticazione" },
  { sup: "Montagna", inf: "Fuoco", nome: "Pi", nomeIt: "L'Adornamento", significato: "La Bellezza" },
  { sup: "Montagna", inf: "Terra", nome: "Po", nomeIt: "Lo Spezzare", significato: "La Disintegrazione" },
  { sup: "Terra", inf: "Montagna", nome: "Fu", nomeIt: "Il Ritorno", significato: "Il Ritorno" },
  { sup: "Cielo", inf: "Tuono", nome: "Wu Wang", nomeIt: "L'Innocenza", significato: "L'Innocenza" },
  { sup: "Montagna", inf: "Cielo", nome: "Ta Ch'u", nomeIt: "Il Potere", significato: "La Forza" },
  { sup: "Montagna", inf: "Tuono", nome: "I", nomeIt: "Le Commessure", significato: "L'Alimentazione" },
  { sup: "Tuono", inf: "Montagna", nome: "Ta Kuo", nomeIt: "Il Passaggio", significato: "Il Superamento" },
  { sup: "Acqua", inf: "Acqua", nome: "K'an", nomeIt: "L'Abisso", significato: "Il Pericolo" },
  { sup: "Fuoco", inf: "Fuoco", nome: "Li", nomeIt: "L'Adesione", significato: "La Luce" },
  { sup: "Montagna", inf: "Lago", nome: "Hsien", nomeIt: "L'Influenza", significato: "L'Attrazione" },
  { sup: "Tuono", inf: "Vento", nome: "Heng", nomeIt: "La Durata", significato: "La Perseveranza" },
  { sup: "Montagna", inf: "Cielo", nome: "Tun", nomeIt: "La Ritirata", significato: "La Fuga" },
  { sup: "Cielo", inf: "Montagna", nome: "Ta Chuang", nomeIt: "La Forza", significato: "La Potenza" },
  { sup: "Fuoco", inf: "Terra", nome: "Chin", nomeIt: "Il Progresso", significato: "L'Avanzamento" },
  { sup: "Terra", inf: "Fuoco", nome: "Ming I", nomeIt: "L'Oscurità", significato: "La Lesione" },
  { sup: "Fuoco", inf: "Vento", nome: "Chia Jen", nomeIt: "La Famiglia", significato: "La Famiglia" },
  { sup: "Vento", inf: "Fuoco", nome: "K'uei", nomeIt: "L'Opposizione", significato: "L'Opposizione" },
  { sup: "Montagna", inf: "Acqua", nome: "Chien", nomeIt: "L'Ostacolo", significato: "L'Impedimento" },
  { sup: "Acqua", inf: "Montagna", nome: "Hsieh", nomeIt: "La Liberazione", significato: "La Soluzione" },
  { sup: "Montagna", inf: "Terra", nome: "Sun", nomeIt: "La Diminuzione", significato: "La Perdita" },
  { sup: "Terra", inf: "Montagna", nome: "I", nomeIt: "L'Aumento", significato: "Il Guadagno" },
  { sup: "Lago", inf: "Cielo", nome: "Kuai", nomeIt: "La Risolutezza", significato: "La Decisione" },
  { sup: "Cielo", inf: "Lago", nome: "Kou", nomeIt: "L'Incontro", significato: "L'Incontro" },
  { sup: "Terra", inf: "Vento", nome: "Ts'ui", nomeIt: "La Raccolta", significato: "L'Adunata" },
  { sup: "Vento", inf: "Terra", nome: "Sheng", nomeIt: "L'Ascesa", significato: "L'Ascesa" },
  { sup: "Lago", inf: "Acqua", nome: "K'un", nomeIt: "L'Oppressione", significato: "La Costrizione" },
  { sup: "Acqua", inf: "Lago", nome: "Ching", nomeIt: "Il Pozzo", significato: "Il Pozzo" },
  { sup: "Fuoco", inf: "Vento", nome: "Ko", nomeIt: "La Rivoluzione", significato: "Il Cambiamento" },
  { sup: "Vento", inf: "Fuoco", nome: "Ting", nomeIt: "Il Calderone", significato: "Il Vaso" },
  { sup: "Tuono", inf: "Tuono", nome: "Chen", nomeIt: "Il Tuono", significato: "L'Eccitazione" },
  { sup: "Montagna", inf: "Montagna", nome: "Ken", nomeIt: "L'Arresto", significato: "L'Immobilità" },
  { sup: "Vento", inf: "Montagna", nome: "Chien", nomeIt: "Lo Sviluppo", significato: "Il Progresso" },
  { sup: "Montagna", inf: "Vento", nome: "Kuei Mei", nomeIt: "La Ragazza", significato: "La Sposa" },
  { sup: "Tuono", inf: "Fuoco", nome: "Feng", nomeIt: "L'Abbondanza", significato: "La Ricchezza" },
  { sup: "Fuoco", inf: "Tuono", nome: "Lu", nomeIt: "Il Viandante", significato: "Il Viaggio" },
  { sup: "Vento", inf: "Vento", nome: "Sun", nomeIt: "Il Vento", significato: "La Penetrazione" },
  { sup: "Lago", inf: "Lago", nome: "Tui", nomeIt: "Il Lago", significato: "La Gioia" },
  { sup: "Vento", inf: "Acqua", nome: "Huan", nomeIt: "La Dissoluzione", significato: "La Dispersione" },
  { sup: "Acqua", inf: "Vento", nome: "Chieh", nomeIt: "La Limitazione", significato: "La Moderazione" },
  { sup: "Vento", inf: "Lago", nome: "Chung Fu", nomeIt: "La Verità", significato: "La Fiducia" },
  { sup: "Lago", inf: "Vento", nome: "Hsiao Kuo", nomeIt: "Il Passaggio", significato: "Il Superamento" },
  { sup: "Acqua", inf: "Fuoco", nome: "Chi Chi", nomeIt: "Il Compimento", significato: "Il Completamento" },
  { sup: "Fuoco", inf: "Acqua", nome: "Wei Chi", nomeIt: "L'Incompiuto", significato: "L'Incompletezza" }
]

function trovaTrigramma(nome: string) {
  return trigrammi.find(t => t.nomeItaliano === nome)
}

function generaEsagrammi(): Esagramma[] {
  const esagrammi: Esagramma[] = []
  
  esagrammiOrdine.forEach((config, index) => {
    const numero = index + 1
    const trigrammaSuperiore = trovaTrigramma(config.sup)
    const trigrammaInferiore = trovaTrigramma(config.inf)
    
    if (!trigrammaSuperiore || !trigrammaInferiore) {
      console.error(`Trigramma non trovato per l'esagramma ${numero}`)
      return
    }

    // Per l'esagramma 2, assicuriamoci che sia Terra/Terra
    if (numero === 2) {
      const terra = trigrammi.find(t => t.nomeItaliano === "Terra")
      if (terra) {
        const linee = [...terra.linee, ...terra.linee]
        const esagramma: Esagramma = {
          numero: 2,
          nome: "2 - K'un",
          nomeItaliano: "Il Ricettivo",
          significato: "La Forza Ricettiva",
          trigrammaSuperiore: "Terra",
          trigrammaInferiore: "Terra",
          linee,
          descrizione: "L'esagramma 2 - Il Ricettivo rappresenta la Forza Ricettiva.",
          immagine: "Terra sopra Terra",
          interpretazione: {
            testo: "Il Ricettivo (K'un) - La Forza Ricettiva. Questo esagramma combina le qualità della Terra sopra e sotto.",
            fonte: "I Ching - Il Libro dei Mutamenti"
          },
          lineeInterpretazione: [
            "Linea 1: Yin",
            "Linea 2: Yin",
            "Linea 3: Yin",
            "Linea 4: Yin",
            "Linea 5: Yin",
            "Linea 6: Yin"
          ],
          consigli: [
            "Considera l'influenza della Terra dall'alto",
            "Considera l'influenza della Terra dal basso",
            "Rifletti sul significato della Forza Ricettiva"
          ],
          relazioni: [
            "Complementare all'esagramma 1",
            "Rappresenta l'interazione tra Terra e Terra"
          ]
        }
        esagrammi.push(esagramma)
        return
      }
    }

    const linee = [...trigrammaInferiore.linee, ...trigrammaSuperiore.linee]
    
    const esagramma: Esagramma = {
      numero,
      nome: `${numero} - ${config.nome}`,
      nomeItaliano: config.nomeIt,
      significato: config.significato,
      trigrammaSuperiore: trigrammaSuperiore.nomeItaliano,
      trigrammaInferiore: trigrammaInferiore.nomeItaliano,
      linee,
      descrizione: `L'esagramma ${numero} - ${config.nomeIt} rappresenta ${config.significato}.`,
      immagine: `${config.sup} sopra ${config.inf}`,
      interpretazione: {
        testo: `${config.nomeIt} (${config.nome}) - ${config.significato}. Questo esagramma combina le qualità di ${config.sup} sopra e ${config.inf} sotto.`,
        fonte: "I Ching - Il Libro dei Mutamenti"
      },
      lineeInterpretazione: [
        `Linea 1: ${trigrammaInferiore.linee[0] === "9" ? "Yang" : "Yin"}`,
        `Linea 2: ${trigrammaInferiore.linee[1] === "9" ? "Yang" : "Yin"}`,
        `Linea 3: ${trigrammaInferiore.linee[2] === "9" ? "Yang" : "Yin"}`,
        `Linea 4: ${trigrammaSuperiore.linee[0] === "9" ? "Yang" : "Yin"}`,
        `Linea 5: ${trigrammaSuperiore.linee[1] === "9" ? "Yang" : "Yin"}`,
        `Linea 6: ${trigrammaSuperiore.linee[2] === "9" ? "Yang" : "Yin"}`
      ],
      consigli: [
        `Considera l'influenza di ${config.sup} dall'alto`,
        `Considera l'influenza di ${config.inf} dal basso`,
        `Rifletti sul significato di ${config.significato}`
      ],
      relazioni: [
        `Complementare all'esagramma ${65 - numero}`,
        `Rappresenta l'interazione tra ${config.sup} e ${config.inf}`
      ]
    }

    esagrammi.push(esagramma)
  })

  return esagrammi
}

// Genera gli esagrammi
const esagrammi = generaEsagrammi()

// Salva nel file JSON
const outputPath = path.join(__dirname, '../app/data/esagrammi.json')
fs.writeFileSync(
  outputPath,
  JSON.stringify({ esagrammi }, null, 2)
)

console.log(`Generati ${esagrammi.length} esagrammi e salvati in ${outputPath}`) 