import type { Language } from '../i18n/language'

// Localize date descriptions, keeping canonical numbers, ranges and qualifiers.
export function formatPersonDate(date: string, language: Language): string {
  if (language !== 'zh-CN') return date
  if (date === 'After his lifetime') return '去世后'
  if (date === 'During his reign') return '在位期间'
  if (date === 'Dates uncertain') return '生卒年不详'
  if (date.startsWith('Active around ')) return '约 ' + formatPersonDate(date.slice(14), language) + ' 年活跃'
  if (date.startsWith('c. ')) return '约 ' + formatPersonDate(date.slice(3), language)
  if (date.startsWith('Around ') && date.endsWith(' BCE')) return '约 ' + formatPersonDate(date.slice(7), language)
  const bce = /^([0-9– /]+) BCE( \(traditional dates\))?$/.exec(date)
  if (bce) return `公元前 ${bce[1]}${bce[2] ? '（传统纪年）' : ''}`
  const century = /^(Early |Late )?(\d+)(?:st|nd|rd|th) century( BCE)?$/.exec(date)
  if (century) return `${century[3] ? '公元前 ' : ''}${century[2]} 世纪${century[1] === 'Early ' ? '早期' : century[1] === 'Late ' ? '晚期' : ''}`
  const approximate = /^Around (\d+)$/.exec(date)
  if (approximate) return '约 ' + approximate[1]
  const decade = /^(\d+)s$/.exec(date)
  if (decade) return `${decade[1]} 年代`
  return date
}
