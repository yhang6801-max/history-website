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

export interface HistoricalPersonImageAttribution {
  title?: string
  credit?: string
  sourceUrl: string
  author: string
  authorUrl?: string
  licenseName: string
  licenseUrl: string
  notes?: string
  changes: string
}

export interface HistoricalPerson {
  id: string
  name: string
  image: string
  imageAttribution?: HistoricalPersonImageAttribution
  // Used for an explicitly identified project placeholder, without fabricated attribution.
  imageNotes?: string
  imageChanges?: string
  lifespan: string
  summary: string
  sections: readonly HistoricalPersonSection[]
  timeline: readonly HistoricalPersonTimelineEntry[]
  sources: readonly HistoricalPersonSource[]
}
