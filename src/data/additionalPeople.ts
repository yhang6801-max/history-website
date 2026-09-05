import { person as p0, zh as z0 } from './additions/james-clerk-maxwell.ts'
import { person as p1, zh as z1 } from './additions/michael-faraday.ts'
import { person as p2, zh as z2 } from './additions/max-planck.ts'
import { person as p3, zh as z3 } from './additions/niels-bohr.ts'
import { person as p4, zh as z4 } from './additions/werner-heisenberg.ts'
import { person as p5, zh as z5 } from './additions/erwin-schrodinger.ts'
import { person as p6, zh as z6 } from './additions/antoine-lavoisier.ts'
import { person as p7, zh as z7 } from './additions/dmitri-mendeleev.ts'
import { person as p8, zh as z8 } from './additions/john-dalton.ts'
import { person as p9, zh as z9 } from './additions/robert-boyle.ts'
import { person as p10, zh as z10 } from './additions/dorothy-hodgkin.ts'
import { person as p11, zh as z11 } from './additions/stephen-hawking.ts'
import { person as p12, zh as z12 } from './additions/mahatma-gandhi.ts'
import { person as p13, zh as z13 } from './additions/pierre-de-fermat.ts'
import { person as p14, zh as z14 } from './additions/winston-churchill.ts'
import { person as p15, zh as z15 } from './additions/leonhard-euler.ts'
import { person as p16, zh as z16 } from './additions/carl-friedrich-gauss.ts'
import { person as p17, zh as z17 } from './additions/srinivasa-ramanujan.ts'
import { person as p18, zh as z18 } from './additions/nicolaus-copernicus.ts'
import { person as p19, zh as z19 } from './additions/galileo-galilei.ts'
import type { HistoricalPerson } from '../types/historicalPerson'
import type { PersonTranslation } from './personTranslations'
export const additionalPeople: readonly HistoricalPerson[] = [p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19]
export const additionalTranslations: Readonly<Record<string, { 'zh-CN': PersonTranslation }>> = {
  'james-clerk-maxwell': { 'zh-CN': z0 },
  'michael-faraday': { 'zh-CN': z1 },
  'max-planck': { 'zh-CN': z2 },
  'niels-bohr': { 'zh-CN': z3 },
  'werner-heisenberg': { 'zh-CN': z4 },
  'erwin-schrodinger': { 'zh-CN': z5 },
  'antoine-lavoisier': { 'zh-CN': z6 },
  'dmitri-mendeleev': { 'zh-CN': z7 },
  'john-dalton': { 'zh-CN': z8 },
  'robert-boyle': { 'zh-CN': z9 },
  'dorothy-hodgkin': { 'zh-CN': z10 },
  'stephen-hawking': { 'zh-CN': z11 },
  'mahatma-gandhi': { 'zh-CN': z12 },
  'pierre-de-fermat': { 'zh-CN': z13 },
  'winston-churchill': { 'zh-CN': z14 },
  'leonhard-euler': { 'zh-CN': z15 },
  'carl-friedrich-gauss': { 'zh-CN': z16 },
  'srinivasa-ramanujan': { 'zh-CN': z17 },
  'nicolaus-copernicus': { 'zh-CN': z18 },
  'galileo-galilei': { 'zh-CN': z19 },
}
