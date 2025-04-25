import { trigrammi } from './trigrammi'
import esagrammiData from './esagrammi.json'

export interface Esagramma {
  numero: number;
  nome: string;
  nomeItaliano: string;
  significato: string;
  trigrammaSuperiore: string;
  trigrammaInferiore: string;
  linee: string[];
  descrizione: string;
  interpretazione: {
    testo: string;
    fonte: string;
  };
  immagine: string;
  lineeInterpretazione: string[];
  consigli: string[];
  relazioni: string[];
}

// Funzione per trovare un trigramma per nome
const trovaTrigramma = (nome: string) => {
  return trigrammi.find(t => t.nomeItaliano === nome)
}

// Funzione per comporre le linee di un esagramma dai suoi trigrammi
const componiLinee = (trigrammaSuperiore: string, trigrammaInferiore: string) => {
  const superiore = trovaTrigramma(trigrammaSuperiore)
  const inferiore = trovaTrigramma(trigrammaInferiore)
  if (!superiore || !inferiore) return []
  return [...superiore.linee, ...inferiore.linee]
}

export const esagrammi: Esagramma[] = esagrammiData.esagrammi; 