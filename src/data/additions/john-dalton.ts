import portrait from '../../assets/people/john-dalton.webp'
import type { HistoricalPerson } from '../../types/historicalPerson'
import type { PersonTranslation } from '../personTranslations'

export const person: HistoricalPerson = {
 image: portrait,
 ...{
  "id": "john-dalton",
  "name": "John Dalton",
  "lifespan": "1766–1844",
  "summary": "An English teacher and investigator whose studies of gases and chemical proportions helped establish modern atomic theory, alongside important work on weather and colour vision.",
  "sections": [
    {
      "title": "Teaching and systematic observation",
      "paragraphs": [
        "John Dalton was born into a Quaker family in Cumberland in 1766. Teaching supplied his livelihood, first in local schools and later in Manchester. He kept weather records from 1787 until his death, and published Meteorological Observations in 1793. The Manchester Literary and Philosophical Society gave him colleagues, an audience and laboratory facilities. His work grew from sustained measurements and practical questions about the atmosphere, not from direct observation of individual atoms."
      ]
    },
    {
      "title": "Gas mixtures and an atomic theory",
      "paragraphs": [
        "Dalton argued that each gas in a mixture contributes its own pressure, with the total equal to the sum of these partial pressures. Questions about gases led him toward a picture of matter made of different kinds of atoms. By the early nineteenth century he was explaining chemical combination through small whole-number groupings of such particles. His New System of Chemical Philosophy began appearing in 1808 and developed these ideas across volumes published through 1827."
      ]
    },
    {
      "title": "Useful calculations and mistaken assumptions",
      "paragraphs": [
        "Atomic theory made it possible to connect the measured mass proportions of compounds with proposed numbers and relative weights of atoms. Yet Dalton had no independent way to determine every molecular formula. His preference for the simplest possible combination led him to represent water as HO, an incorrect formula. Later evidence revised such assignments. The usefulness of the atomic approach therefore needs to be distinguished from the correctness of all the atomic weights and structures he calculated."
      ]
    },
    {
      "title": "Colour vision and a gradual legacy",
      "paragraphs": [
        "Dalton also investigated his own colour-vision difference and presented this subject to the Manchester society. This work helped make colour blindness a topic of scientific description, even though observation of a condition does not by itself establish its biological mechanism. He died in 1844. Acceptance of atoms remained a long process after his publications: later chemical, physical and microscopic evidence strengthened and transformed a theory that many contemporaries had initially treated with caution."
      ]
    }
  ],
  "timeline": [
    {
      "date": "1766",
      "event": "Born into a Quaker family in Cumberland."
    },
    {
      "date": "1787",
      "event": "Began the long series of daily weather records he maintained throughout his life."
    },
    {
      "date": "1793",
      "event": "Published Meteorological Observations."
    },
    {
      "date": "1799–1801",
      "event": "Presented meteorological papers while developing ideas about gases."
    },
    {
      "date": "1808–1827",
      "event": "Published New System of Chemical Philosophy in successive volumes."
    },
    {
      "date": "1844",
      "event": "Died after a lifetime of teaching and scientific investigation."
    }
  ],
  "sources": [
    {
      "title": "John Dalton",
      "publisher": "Science History Institute",
      "url": "https://www.sciencehistory.org/education/scientific-biographies/john-dalton/"
    },
    {
      "title": "John Dalton and the Scientific Method",
      "publisher": "Mark Michalovic, Science History Institute",
      "url": "https://www.sciencehistory.org/stories/magazine/john-dalton-and-the-scientific-method/"
    }
  ],
  "imageAttribution": {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:John_Dalton_by_Thomas_Phillips,_1835.jpg",
  "author": "Thomas Phillips / National Portrait Gallery, London",
  "licenseName": "Public domain (PD-Art; PD-old-auto-expired)",
  "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
  "notes": "Painted portrait of John Dalton by Thomas Phillips, 1835, from the National Portrait Gallery, London. Commons records the artist's death in 1845 and marks the work and faithful reproduction public domain. This is a painting made during Dalton's lifetime, not a photograph.",
  "changes": "Cropped, resized to 900 × 1200, and converted to WebP.",
  "title": "John Dalton"
}
}
}

export const zh: PersonTranslation = {
  "name": "约翰·道尔顿",
  "summary": "英国教师与研究者，以气体和化合比例研究推动近代原子论，也长期研究气象和颜色视觉。",
  "sections": [
    {
      "title": "教学与系统观察",
      "paragraphs": [
        "约翰·道尔顿于 1766 年出生在坎伯兰的贵格会家庭。他先在地方学校、后来在曼彻斯特以教学谋生。从 1787 年起直到去世，他持续记录天气，并于 1793 年出版《气象观测》（Meteorological Observations）。曼彻斯特文学与哲学学会为他提供了同事、听众和实验设施。他的研究源于持续测量及大气中的实际问题，而不是对单个原子的直接观察。"
      ]
    },
    {
      "title": "混合气体与原子论",
      "paragraphs": [
        "道尔顿提出，混合气体中的每种气体各自贡献压强，总压强等于这些分压之和。对气体的研究引导他形成了物质由不同种类原子构成的图景。到十九世纪初，他已用这些粒子按较小整数比例组合来解释化合。《化学哲学新体系》（New System of Chemical Philosophy）自 1808 年开始出版，并在直到 1827 年陆续问世的各卷中展开这些思想。"
      ]
    },
    {
      "title": "有用的计算与错误的假设",
      "paragraphs": [
        "原子论使人们能够把测得的化合物质量比例，与假定的原子数目和相对质量联系起来。但道尔顿没有独立的方法来确定所有分子式。他倾向于采用最简单的组合，因此把水写成 HO，这是一个错误的分子式。后来的证据修订了这类判断。所以，原子论方法的价值，需要与他所计算的全部原子量和结构是否正确区分开来。"
      ]
    },
    {
      "title": "颜色视觉与逐渐确立的影响",
      "paragraphs": [
        "道尔顿也研究自身颜色视觉的差异，并向曼彻斯特学会报告这一课题。这项工作帮助色盲成为科学描述的对象，尽管观察到一种状况，并不等于已经确定其生物机制。他于 1844 年去世。在他的著作发表之后，原子观念的接受仍经历了漫长过程；后来的化学、物理和显微研究证据，强化并改变了这套起初受到许多同时代人谨慎对待的理论。"
      ]
    }
  ],
  "timelineEvents": [
    "出生于坎伯兰的贵格会家庭。",
    "开始持续终身的每日天气记录。",
    "出版《气象观测》（Meteorological Observations）。",
    "发表气象学报告，同时发展有关气体的认识。",
    "陆续出版《化学哲学新体系》各卷。",
    "去世，此前一生从事教学与科学研究。"
  ],
  "imageNotes": "Thomas Phillips 于 1835 年绘制的约翰·道尔顿肖像，来源为 National Portrait Gallery, London。Commons 记载画家于 1845 年去世，并将作品及忠实复制标为公有领域。这是道尔顿在世时的绘画，不是照片。",
  "imageChanges": "已裁剪、缩放至 900 × 1200，并转换为 WebP 格式。"
}
