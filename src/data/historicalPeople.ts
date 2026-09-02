import placeholderImage from '../assets/people/placeholder.svg'
import type { HistoricalPerson } from '../types/historicalPerson'

export const historicalPeople: readonly HistoricalPerson[] = [
  {
    id: 'napoleon-bonaparte',
    name: 'Napoleon Bonaparte',
    image: placeholderImage,
    summary: 'A brief summary of Napoleon Bonaparte.',
    description: 'A short placeholder description of Napoleon Bonaparte.',
  },
  {
    id: 'julius-caesar',
    name: 'Julius Caesar',
    image: placeholderImage,
    summary: 'A brief summary of Julius Caesar.',
    description: 'A short placeholder description of Julius Caesar.',
  },
  {
    id: 'alexander-the-great',
    name: 'Alexander the Great',
    image: placeholderImage,
    summary: 'A brief summary of Alexander the Great.',
    description: 'A short placeholder description of Alexander the Great.',
  },
]

export function getHistoricalPersonById(
  id: string,
): HistoricalPerson | undefined {
  return historicalPeople.find((person) => person.id === id)
}
