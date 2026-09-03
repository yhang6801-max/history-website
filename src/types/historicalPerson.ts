export interface HistoricalPersonSection {
  title: string
  paragraphs: readonly string[]
}

export interface HistoricalPersonTimelineEntry {
  date: string
  event: string
}

export interface HistoricalPersonSource {
  title: string
  publisher: string
  url: string
}

export interface HistoricalPerson {
  id: string
  name: string
  image: string
  lifespan: string
  summary: string
  sections: readonly HistoricalPersonSection[]
  timeline: readonly HistoricalPersonTimelineEntry[]
  sources: readonly HistoricalPersonSource[]
}
