import portrait from '../../assets/people/dmitri-mendeleev.webp'
import type { HistoricalPerson } from '../../types/historicalPerson'
import type { PersonTranslation } from '../personTranslations'

export const person: HistoricalPerson = {
 image: portrait,
 ...{
  "id": "dmitri-mendeleev",
  "name": "Dmitri Mendeleev",
  "lifespan": "1834–1907",
  "summary": "A Russian chemist whose periodic system organized the elements and made testable predictions about substances that had not yet been discovered.",
  "sections": [
    {
      "title": "Education and chemical order",
      "paragraphs": [
        "Dmitri Ivanovich Mendeleev was born in Tobolsk, Siberia, in 1834. His family faced financial difficulties, and his mother helped him pursue education in St Petersburg. His later studies included time in Heidelberg. At the Karlsruhe Congress in 1860, discussions about atomic weights helped clarify a problem essential to chemical classification: chemists needed comparable numerical values before reliable patterns among the elements could emerge."
      ]
    },
    {
      "title": "A system built through teaching",
      "paragraphs": [
        "Appointed to the chemistry chair at St Petersburg in 1867, Mendeleev worked on a textbook that would organize a rapidly growing body of knowledge. In 1869 he published a periodic arrangement relating chemical properties to atomic weights. He was not the first to seek such patterns: Newlands, de Chancourtois and Lothar Meyer had developed important arrangements. Mendeleev's system became especially influential because he used its relationships to guide judgments about incomplete evidence."
      ]
    },
    {
      "title": "Gaps that became predictions",
      "paragraphs": [
        "Rather than forcing every known element into a rigid sequence, Mendeleev allowed gaps and predicted properties of missing elements. His revised table in 1871 developed this approach further. Discoveries of gallium, scandium and germanium subsequently provided notable tests. Their agreement with several predictions increased confidence in the periodic law, although the history should not be reduced to a claim that all of his predictions were correct or that other chemists merely followed him."
      ]
    },
    {
      "title": "Atomic weights and later explanations",
      "paragraphs": [
        "Chemical similarities sometimes led Mendeleev to place elements out of strict atomic-weight order, as with tellurium and iodine. This was an empirical judgment rather than knowledge of the proton structure of atoms. After his death, Moseley's work in 1913 helped establish atomic number as the organizing principle. Modern periodic tables retain the power of periodic classification while incorporating discoveries about atomic structure unavailable to Mendeleev."
      ]
    },
    {
      "title": "Beyond a single table",
      "paragraphs": [
        "Mendeleev also taught, wrote widely and pursued practical interests in agriculture and industrial chemistry. These activities connected the ordering of chemical knowledge with questions about production and national development. He died in 1907. His legacy includes a method of using regularities to identify what is missing, and a reminder that scientific classifications can be revised without losing their capacity to organize evidence and suggest new investigations."
      ]
    }
  ],
  "timeline": [
    {
      "date": "1834",
      "event": "Born in Tobolsk, Siberia."
    },
    {
      "date": "1860",
      "event": "Attended the Karlsruhe Congress on chemistry."
    },
    {
      "date": "1867",
      "event": "Became professor of chemistry at St Petersburg."
    },
    {
      "date": "1869",
      "event": "Published his first periodic system of the elements."
    },
    {
      "date": "1871",
      "event": "Published a revised table and developed predictions for missing elements."
    },
    {
      "date": "1875–1886",
      "event": "Discoveries of gallium, scandium and germanium tested important predictions."
    },
    {
      "date": "1907",
      "event": "Died before atomic number supplied a later explanation of the periodic order."
    }
  ],
  "sources": [
    {
      "title": "Julius Lothar Meyer and Dmitri Ivanovich Mendeleev",
      "publisher": "Science History Institute",
      "url": "https://www.sciencehistory.org/education/scientific-biographies/julius-lothar-meyer-and-dmitri-ivanovich-mendeleev/"
    },
    {
      "title": "Development of the periodic table",
      "publisher": "Royal Society of Chemistry",
      "url": "https://periodic-table.rsc.org/about/the-story-and-the-meaning/"
    },
    {
      "title": "The periodic tables of Mendeleev",
      "publisher": "RSC Education",
      "url": "https://edu.rsc.org/feature/the-periodic-tables-of-mendeleev/2020258.article"
    }
  ],
  "imageAttribution": {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:Dmitri_Mendeleev._Photograph._Wellcome_M0002600.jpg",
  "author": "Photographer not identified / Wellcome Library, London / Wellcome Images",
  "licenseName": "CC BY 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
  "notes": "Photograph identified as Dmitri Mendeleev by the Wellcome Collection, image M0002600. The file page does not name the original photographer. Credit: Wellcome Library, London / Wellcome Images. Licensed CC BY 4.0.",
  "changes": "Cropped, resized to 900 × 1200, and converted to WebP.",
  "title": "Dmitri Mendeleev. Photograph.",
  "credit": "Wellcome Library, London / Wellcome Images"
}
}
}

export const zh: PersonTranslation = {
  "name": "德米特里·门捷列夫",
  "summary": "俄国化学家，以元素周期体系组织元素知识，并对尚未发现的物质作出可检验的预言。",
  "sections": [
    {
      "title": "求学与化学秩序",
      "paragraphs": [
        "德米特里·伊万诺维奇·门捷列夫于 1834 年出生在西伯利亚托博尔斯克。家庭遭遇经济困难后，母亲帮助他前往圣彼得堡求学。他后来的学习经历还包括在海德堡的研究。1860 年卡尔斯鲁厄会议上有关原子量的讨论，帮助厘清了化学分类的关键问题：只有获得可相互比较的数值，元素之间可靠的规律才可能显现。"
      ]
    },
    {
      "title": "在教学中形成的体系",
      "paragraphs": [
        "1867 年出任圣彼得堡化学教授后，门捷列夫着手编写教材，以组织迅速增长的知识。1869 年，他发表周期性排列，将化学性质与原子量联系起来。他并非第一个寻找这类规律的人：纽兰兹、德尚古多和洛塔尔·迈耶都提出过重要的排列方式。门捷列夫的体系尤其有影响力，在于他用其中的关系指导对不完整证据的判断。"
      ]
    },
    {
      "title": "由空位形成预言",
      "paragraphs": [
        "门捷列夫没有把每种已知元素硬塞进固定序列，而是允许留下空位，并预言缺失元素的性质。1871 年修订的表格进一步发展了这一方法。随后镓、钪和锗的发现提供了重要检验。它们与若干预言相符，增强了人们对周期律的信心；但不应把这段历史简化为他的所有预言都正确，或其他化学家只是追随者。"
      ]
    },
    {
      "title": "原子量与后来的解释",
      "paragraphs": [
        "化学性质的相似性有时促使门捷列夫不严格按原子量排列元素，例如碲与碘。这是经验判断，而不是基于原子中质子结构的知识。他去世后，莫塞莱于 1913 年开展的研究帮助确立原子序数这一排列依据。现代周期表保留了周期分类的解释力，同时纳入了门捷列夫当时还无法掌握的原子结构知识。"
      ]
    },
    {
      "title": "不止一张表格",
      "paragraphs": [
        "门捷列夫还长期教学、广泛写作，并关注农业与工业化学中的实际问题。这些活动将化学知识的整理，与生产和国家发展的议题联系起来。他于 1907 年去世。其遗产包括利用规律寻找缺失事物的方法，也提醒人们：科学分类可以被修订，同时仍保有组织证据和提出新研究方向的能力。"
      ]
    }
  ],
  "timelineEvents": [
    "出生于西伯利亚托博尔斯克。",
    "参加卡尔斯鲁厄化学会议。",
    "成为圣彼得堡的化学教授。",
    "发表最初的元素周期体系。",
    "发表修订表格，进一步预言缺失元素的性质。",
    "镓、钪和锗的发现检验了若干重要预言。",
    "去世；以原子序数解释周期顺序是后来才取得的进展。"
  ],
  "imageNotes": "Wellcome Collection 明确标识为德米特里·门捷列夫的照片，图片编号 M0002600。文件页未列出原摄影师。署名：Wellcome Library, London / Wellcome Images。采用 CC BY 4.0 许可。",
  "imageChanges": "已裁剪、缩放至 900 × 1200，并转换为 WebP 格式。"
}
