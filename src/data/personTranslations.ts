import { additionalTranslations } from './additionalPeople.ts'
import { curieZh } from './curie.zh-CN.ts'
import { newtonZh } from './newton.zh-CN.ts'
import { lincolnZh } from './lincoln.zh-CN.ts'
import { washingtonZh } from './washington.zh-CN.ts'
import { yangChenNingZh } from './yangChenNing.zh-CN.ts'
import { luXunZh } from './luXun.zh-CN.ts'
import { duFuZh } from './duFu.zh-CN.ts'
import { liBaiZh } from './liBai.zh-CN.ts'
import { sunYatSenZh } from './sunYatSen.zh-CN.ts'
import { yongleZh } from './yongle.zh-CN.ts'
import { hongwuZh } from './hongwu.zh-CN.ts'
import { wudiZh } from './wudi.zh-CN.ts'
import { taizongZh } from './taizong.zh-CN.ts'
import { qinShiHuangZh } from './qinShiHuang.zh-CN.ts'
import { confuciusZh } from './confucius.zh-CN.ts'
import { formatPersonDate } from './personDates.ts'
import { zh as stalinZh } from './additions/joseph-stalin.ts'
import { juliusCaesarZh } from './juliusCaesar.zh-CN.ts'
import type { HistoricalPerson } from '../types/historicalPerson'
import type { Language } from '../i18n/language'

// English stays in historicalPeople.ts. Translations never duplicate identity,
// dates, images, source URLs, author names, or licenses.
export interface PersonTranslation {
  name: string
  summary: string
  sections: readonly { title: string; paragraphs: readonly string[] }[]
  timelineEvents: readonly string[]
  imageNotes?: string
  imageChanges?: string
}

export const personTranslations: Readonly<Record<string, Partial<Record<Language, PersonTranslation>>>> = {
  'julius-caesar': { 'zh-CN': juliusCaesarZh },
  'joseph-stalin': { 'zh-CN': stalinZh },
  'confucius': { 'zh-CN': confuciusZh },
  'qin-shi-huang': { 'zh-CN': qinShiHuangZh },
  'emperor-taizong-of-tang': { 'zh-CN': taizongZh },
  'emperor-wu-of-han': { 'zh-CN': wudiZh },
  'hongwu-emperor': { 'zh-CN': hongwuZh },
  'yongle-emperor': { 'zh-CN': yongleZh },
  'sun-yat-sen': { 'zh-CN': sunYatSenZh },
  'li-bai': { 'zh-CN': liBaiZh },
  'du-fu': { 'zh-CN': duFuZh },
  'lu-xun': { 'zh-CN': luXunZh },
  'yang-chen-ning': { 'zh-CN': yangChenNingZh },
  'george-washington': { 'zh-CN': washingtonZh },
  'abraham-lincoln': { 'zh-CN': lincolnZh },
  'isaac-newton': { 'zh-CN': newtonZh },
  'marie-curie': { 'zh-CN': curieZh },
  ...additionalTranslations,
  'napoleon-bonaparte': {
    'zh-CN': {
      name: '拿破仑·波拿巴',
      summary: '从革命时期的将军成为皇帝，他重塑了法国国家体制，并在最终战败前使欧洲大片地区处于法国势力之下。',
      sections: [
        {
          title: '概述',
          paragraphs: [
            '拿破仑·波拿巴从一名外省炮兵军官崛起，先后成为第一执政和法兰西人的皇帝。他的军队打破了欧洲的力量均势；与此同时，他的政府通过中央集权的行政体系、重组的教育制度和《民法典》，巩固了法国大革命的若干成果。他的生涯将卓越的军事与政治能力、威权统治和几乎持续不断的战争结合在一起。正因如此，人们既将他铭记为推动现代化的政治家，也将他视为一个野心给法国、欧洲及殖民地社会带来巨大代价的征服者。',
          ],
        },
        {
          title: '早年生活与背景',
          paragraphs: [
            '拿破仑于 1769 年 8 月 15 日出生在科西嘉岛的阿雅克肖，当时该岛刚从热那亚转归法国控制。他的家庭属于科西嘉小贵族，为他争取到了在法国本土学校就读的机会。他先后在布里埃纳和巴黎的 École Militaire（军事学校）学习，接受炮兵训练，并于 1785 年获授军官职衔。大革命为有才能的年轻军官打开了晋升之门。1793 年，波拿巴家族与科西嘉领袖帕斯夸莱·保利的冲突迫使他们离开该岛，此后拿破仑将自己的前途寄托于法国。',
          ],
        },
        {
          title: '权力的崛起',
          paragraphs: [
            '1793 年的土伦围城战使拿破仑首次受到全国关注。他提出的炮兵作战方案帮助共和国军队收复港口，也使他晋升为准将。1795 年 10 月，他参与镇压了巴黎的一次保王党起义。1796 年获任意大利军团司令后，他凭借快速行动、集中兵力和积极机动，击败了人数更多的奥地利及其盟军，同时精心宣传自己的胜利。1798 年的埃及远征意在打击英国利益，也推动了重要的学术研究，但海战和叙利亚战场上的挫折暴露了其战略局限。返回局势动荡的法国后，拿破仑参与了 1799 年 11 月 9 日的雾月十八日政变，推翻督政府，成为第一执政。',
          ],
        },
        {
          title: '军事征战与政治成就',
          paragraphs: [
            '担任第一执政期间，拿破仑于 1800 年在马伦戈击败奥地利，并通过有关宪制的公民投票巩固权威，使权力日益集中于自己手中。他的政府创建法兰西银行，任命省长管理各省，扩充公立中等学校，于 1801 年与教廷达成《政教协定》，并于 1804 年颁布《民法典》。1804 年 12 月 2 日加冕为皇帝后，他在奥斯特里茨、耶拿—奥尔施泰特、弗里德兰和瓦格拉姆取得了著名胜利。然而，特拉法尔加海战后英国的海上优势挫败了入侵计划；大陆封锁体系也未能在不损害欧洲经济的情况下孤立英国。半岛战争演变为一场耗损巨大的占领战争，伴随着游击抵抗和暴行；1812 年入侵俄国则以灾难性的撤退告终。1813 年在莱比锡的失败，使法国面临被入侵的危险。',
          ],
        },
        {
          title: '领导方式与历史意义',
          paragraphs: [
            '拿破仑擅长组织军队、判断战场态势，并以足够迅速的调动击败分散的对手。他奖掖人才，激励忠诚，但也要求服从，而且越来越低估政治抵抗、后勤问题以及敌人的适应能力。在国内，他使仕途更向有能力者开放，规范税制与法律，并建立了在其政权结束后仍然延续的制度。与此同时，审查制度、警察监控、受操纵的选举和王朝式任命又与代议政治的理想相矛盾。他的国家保留了部分革命原则，却将其置于个人统治和高度集权的君主制之下。',
          ],
        },
        {
          title: '战败、流放与逝世',
          paragraphs: [
            '反法同盟军队进入巴黎后，拿破仑于 1814 年 4 月退位，被送往厄尔巴岛统治该岛。1815 年 2 月，他逃离厄尔巴岛，返回法国，并在“百日王朝”期间重新掌权。6 月 18 日，惠灵顿与布吕歇尔率领的盟军在滑铁卢击败了他，其最后一次战役由此结束。他再次退位并向英国投降，随后被英国人流放到偏远的圣赫勒拿岛。晚年，他口述自己的经历，这些叙述帮助塑造了他的传奇形象。1821 年 5 月 5 日，他在长期患病后于岛上去世；胃部疾病是最主要的解释，但有关其健康与治疗的某些问题一直存在争论。',
          ],
        },
        {
          title: '历史遗产与争议',
          paragraphs: [
            '拿破仑确立的法律和行政制度影响了法国以外许多国家，《民法典》至今仍是多种法律传统的核心。他的征战传播了改革，削弱了部分贵族特权，激发了民族主义，并重新划定疆界；但占领也常常意味着征兵、征税、强制统治和文化掠夺。1802 年，他的政府在革命立法曾废除奴隶制的法国殖民地恢复了奴隶制，这一决定与试图重新控制加勒比地区的暴力行动密不可分。战争造成大量军人和平民死亡或流离失所。赞赏者强调任人唯才、国家治理能力和军事天才；批评者强调独裁、恢复殖民统治和扩张战争。理解他持久的历史影响，离不开这两方面。',
          ],
        },
      ],
      timelineEvents: [
        '8 月 15 日出生于科西嘉岛阿雅克肖。',
        '在巴黎求学后获授炮兵军官职衔。',
        '在土伦战役和镇压巴黎保王党起义后，在共和国军队中崛起。',
        '率领首次意大利战役取得胜利，成为全国性的政治人物。',
        '参与雾月十八日政变，成为第一执政。',
        '颁布《民法典》，并加冕为法兰西人的皇帝。',
        '取得包括奥斯特里茨、耶拿—奥尔施泰特、弗里德兰和瓦格拉姆在内的重大胜利。',
        '俄国远征的灾难及反法同盟的胜利导致他首次退位，并被流放至厄尔巴岛。',
        '重返法国建立“百日王朝”，在滑铁卢战败，最终在圣赫勒拿岛流放期间去世。',
      ],
      imageNotes: '“Portrait of General Bonaparte”（《波拿巴将军肖像》），图片来源：Web Gallery of Art。Commons 依据 PD-Art (PD-old-100) 将其认定为公有领域作品：画家于 1825 年去世，已超过作者终身加 100 年的保护期；在美国，对二维公有领域作品的忠实复制也被视为属于公有领域。',
      imageChanges: '已裁剪、缩放至 900 × 1200，并转换为 WebP 格式。',
    },
  },
}

export function getLocalizedPerson(person: HistoricalPerson, language: Language) {
  const translation = personTranslations[person.id]?.[language]
  // Reject incomplete translations as a whole: never render blank biography
  // fields, mismatched event counts, or an unnoticed mixture of languages.
  const complete = translation
    && translation.name.trim() && translation.summary.trim()
    && translation.sections.length === person.sections.length
    && translation.sections.every((section, index) => section.title.trim()
      && section.paragraphs.length === person.sections[index].paragraphs.length
      && section.paragraphs.every((paragraph) => paragraph.trim()))
    && translation.timelineEvents.length === person.timeline.length
    && translation.timelineEvents.every((event) => event.trim())
  const localized = complete ? translation : undefined
  return {
    ...person,
    name: localized?.name ?? person.name,
    lifespan: localized ? formatPersonDate(person.lifespan, language) : person.lifespan,
    summary: localized?.summary ?? person.summary,
    sections: localized?.sections ?? person.sections,
    timeline: person.timeline.map((entry, index) => ({
      date: localized ? formatPersonDate(entry.date, language) : entry.date,
      event: localized?.timelineEvents[index] ?? entry.event,
    })),
    contentLanguage: localized ? language : 'en',
    isFallback: language !== 'en' && !localized,
    imageNotes: localized?.imageNotes ?? person.imageAttribution?.notes ?? person.imageNotes,
    imageNotesLanguage: localized?.imageNotes ? language : 'en',
    imageChanges: localized?.imageChanges ?? person.imageAttribution?.changes ?? person.imageChanges,
    imageChangesLanguage: localized?.imageChanges ? language : 'en',
  }
}

