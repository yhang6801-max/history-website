import portrait from '../../assets/people/max-planck.webp'
import type { HistoricalPerson } from '../../types/historicalPerson'
import type { PersonTranslation } from '../personTranslations'

export const person: HistoricalPerson = {
 image: portrait,
 ...{
  "id": "max-planck",
  "name": "Max Planck",
  "lifespan": "1858–1947",
  "summary": "A German theoretical physicist whose work on thermal radiation introduced the quantum of action and helped open the path to quantum physics.",
  "sections": [
    {
      "title": "A problem in thermal physics",
      "paragraphs": [
        "Max Planck approached physics through thermodynamics and the search for general laws. His decisive work concerned the distribution of radiation emitted by a body in thermal equilibrium. Matching a mathematical description to increasingly precise experiments led him to a new constant and to discrete energy elements. This was an important beginning of quantum theory, not a complete statement of the quantum mechanics developed by a later generation."
      ]
    },
    {
      "title": "Training and early career",
      "paragraphs": [
        "Planck was born in Kiel on 23 April 1858. He studied in Munich and Berlin and completed a doctorate on the second law of thermodynamics in Munich in 1879. After years of unpaid university teaching, he obtained a professorship in Kiel in 1885 and later moved to Berlin. His early investigations of entropy and heat made the radiation problem a continuation of a long research programme rather than a sudden departure from physics."
      ]
    },
    {
      "title": "The quantum hypothesis",
      "paragraphs": [
        "In 1900 Planck formulated a radiation law that agreed with the observed spectrum and presented a statistical derivation using energy elements proportional to frequency. The proportionality factor became known as Planck's constant. The physical meaning of this step developed through subsequent debates and through work by Einstein and others. Planck initially hoped to understand the result within established physics; it should not be confused with a finished theory of light particles."
      ]
    },
    {
      "title": "Recognition and scientific institutions",
      "paragraphs": [
        "Planck received the Nobel Prize in Physics for 1918 and became an influential organizer of German science. He served as president of the Kaiser Wilhelm Society from 1930 to 1937. Under National Socialism, he tried to preserve scientific institutions and supported some threatened colleagues, including through a memorial event for Fritz Haber. These actions did not prevent the persecution and exclusion of Jewish scientists or the society's subordination to the regime."
      ]
    },
    {
      "title": "War and the final years",
      "paragraphs": [
        "War brought Planck both personal loss and the destruction of the scientific world in which he had worked. His son Erwin was executed in 1945 after involvement in the plot against Hitler. Planck briefly resumed institutional leadership after the war and died in Göttingen on 4 October 1947. The research society bearing his name commemorates his scientific importance, while his institutional career also raises difficult questions about accommodation and responsibility under dictatorship."
      ]
    }
  ],
  "timeline": [
    {
      "date": "1858",
      "event": "Born in Kiel on 23 April."
    },
    {
      "date": "1879",
      "event": "Completed his doctorate on thermodynamics in Munich."
    },
    {
      "date": "1885",
      "event": "Became a professor at Kiel."
    },
    {
      "date": "1900",
      "event": "Presented his radiation law and its quantum-based derivation."
    },
    {
      "date": "1918",
      "event": "Nobel Prize in Physics award year."
    },
    {
      "date": "1930–1937",
      "event": "Served as president of the Kaiser Wilhelm Society."
    },
    {
      "date": "1947",
      "event": "Died in Göttingen on 4 October."
    }
  ],
  "sources": [
    {
      "title": "Max Planck — a biographical overview",
      "publisher": "Max-Planck-Gesellschaft",
      "url": "https://www.mpg.de/19252700/max-planck-biographical-overview"
    },
    {
      "title": "Max Karl Ernst Ludwig Planck — Biography",
      "publisher": "MacTutor, University of St Andrews",
      "url": "https://mathshistory.st-andrews.ac.uk/Biographies/Planck/"
    },
    {
      "title": "Max Planck",
      "publisher": "Max-Planck-Gesellschaft",
      "url": "https://www.mpg.de/8241451/max-planck-kwg"
    }
  ],
  "imageAttribution": {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_183-R0116-504,_Max_Planck.jpg",
  "author": "Bundesarchiv, Bild 183-R0116-504 / Photographer not identified",
  "licenseName": "CC BY-SA 3.0 DE",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/de/",
  "notes": "Photograph of Max Planck supplied by the German Federal Archive. Credit: Bundesarchiv, Bild 183-R0116-504 / CC-BY-SA 3.0. The historical archive caption contains an erroneous reference to a chemistry prize; it is not reproduced as biographical fact. This cropped version is shared under the same license.",
  "changes": "Cropped, resized to 900 × 1200, and converted to WebP.",
  "title": "Max Planck",
  "credit": "Bundesarchiv, Bild 183-R0116-504 / CC-BY-SA 3.0"
}
}
}

export const zh: PersonTranslation = {
  "name": "马克斯·普朗克",
  "summary": "德国理论物理学家，对热辐射的研究引入了作用量子，为量子物理开辟了道路。",
  "sections": [
    {
      "title": "热学中的难题",
      "paragraphs": [
        "马克斯·普朗克从热力学和寻求普遍规律出发研究物理。他的关键工作涉及处于热平衡的物体所发辐射的分布。为了让数学描述与日益精密的实验相符，他引入了一个新常数和离散的能量单元。这是量子理论的重要开端，而不是后来一代人发展出的量子力学的完整表述。"
      ]
    },
    {
      "title": "学术训练与早期任职",
      "paragraphs": [
        "普朗克于 1858 年 4 月 23 日出生于基尔。他在慕尼黑和柏林求学，1879 年在慕尼黑完成有关热力学第二定律的博士论文。在大学无薪任教数年后，他于 1885 年获得基尔的教授职位，后来转赴柏林。他早期对熵与热的探索，使辐射问题成为长期研究计划的延续，而不是突然脱离原有物理学的转向。"
      ]
    },
    {
      "title": "量子假说",
      "paragraphs": [
        "1900 年，普朗克提出与观测光谱相符的辐射定律，并使用与频率成正比的能量单元给出统计推导。这个比例系数后来被称为普朗克常数。这一步的物理意义，通过后续讨论以及爱因斯坦等人的研究逐渐展开。普朗克起初希望在已有物理学框架内理解结果，因此不应把它混同于一套已经完成的光粒子理论。"
      ]
    },
    {
      "title": "荣誉与科学机构",
      "paragraphs": [
        "普朗克获得了 1918 年度诺贝尔物理学奖，并成为德国科学界有影响力的组织者。1930 至 1937 年，他担任威廉皇帝学会会长。在纳粹统治下，他试图维持科学机构，并支持部分受到威胁的同事，包括为弗里茨·哈伯举办纪念活动。但这些行动未能阻止对犹太科学家的迫害与排斥，也未能阻止学会受制于政权。"
      ]
    },
    {
      "title": "战争与晚年",
      "paragraphs": [
        "战争给普朗克带来个人丧失，也摧毁了他长期工作的科学环境。他的儿子埃尔温因参与反希特勒密谋，于 1945 年被处决。战后普朗克短暂恢复了机构领导工作，1947 年 10 月 4 日在哥廷根去世。以其姓名命名的研究学会纪念他的科学贡献，而他的机构领导经历也留下了有关独裁统治下妥协与责任的复杂问题。"
      ]
    }
  ],
  "timelineEvents": [
    "4 月 23 日出生于基尔。",
    "在慕尼黑完成热力学博士论文。",
    "成为基尔的教授。",
    "提出辐射定律及采用量子假说的推导。",
    "诺贝尔物理学奖的获奖年度。",
    "担任威廉皇帝学会会长。",
    "10 月 4 日在哥廷根去世。"
  ],
  "imageNotes": "德国联邦档案馆提供的马克斯·普朗克照片。署名：Bundesarchiv, Bild 183-R0116-504 / CC-BY-SA 3.0。原始档案图注误提化学奖，这里不将该文字作为生平事实引用。本裁剪版本沿用相同许可。",
  "imageChanges": "已裁剪、缩放至 900 × 1200，并转换为 WebP 格式。"
}
