import portrait from '../../assets/people/james-clerk-maxwell.webp'
import type { HistoricalPerson } from '../../types/historicalPerson'
import type { PersonTranslation } from '../personTranslations'

export const person: HistoricalPerson = {
 image: portrait,
 ...{
  "id": "james-clerk-maxwell",
  "name": "James Clerk Maxwell",
  "lifespan": "1831–1879",
  "summary": "A Scottish physicist who united electricity, magnetism and light in a mathematical theory and helped establish the statistical study of gases.",
  "sections": [
    {
      "title": "A mathematical view of nature",
      "paragraphs": [
        "James Clerk Maxwell connected phenomena that had often been studied separately. His electromagnetic theory treated light as a disturbance travelling through an electromagnetic field. His work on colour, gases and Saturn's rings likewise joined mathematical reasoning to physical problems. These achievements emerged from nineteenth-century research communities, including the experimental work of Michael Faraday, rather than from an isolated discovery that replaced everything before it."
      ]
    },
    {
      "title": "Education and academic work",
      "paragraphs": [
        "Born in Edinburgh on 13 June 1831, Maxwell grew up partly at the family estate of Glenlair. He studied in Edinburgh and then at Cambridge, graduating from Trinity College in 1854. He became professor at Marischal College in Aberdeen in 1856 and moved to King's College London in 1860. His career combined teaching, theoretical investigations and experiments; time spent back at Glenlair also supported sustained writing."
      ]
    },
    {
      "title": "Fields and light",
      "paragraphs": [
        "Faraday's lines of force supplied a starting point for Maxwell's mathematical treatment of electricity and magnetism. By examining how disturbances could propagate, Maxwell found a speed close to the measured speed of light and argued for their common physical character. His Treatise on Electricity and Magnetism appeared in 1873. Later researchers developed and reformulated the theory; its importance does not imply that every nineteenth-century mechanical model used to explain it survived."
      ]
    },
    {
      "title": "Colour, molecules and Saturn's rings",
      "paragraphs": [
        "Maxwell investigated colour perception and the quantitative mixing of colours. In gas theory he used statistics to describe a population of molecules instead of assigning the same motion to every particle; Ludwig Boltzmann also made fundamental contributions to this developing approach. His analysis of Saturn's rings argued that their stability required many separate particles, rather than a single rigid ring. The problems differed, but each required connecting a model with observable behaviour."
      ]
    },
    {
      "title": "Building the Cavendish Laboratory",
      "paragraphs": [
        "In 1871 Maxwell became Cambridge's first Cavendish Professor of Physics. He helped plan and establish the laboratory, which opened in 1874, and edited Henry Cavendish's unpublished electrical researches. He died in Cambridge on 5 November 1879. Alongside his theoretical work, the laboratory and his historical editing demonstrate the institutional and practical labour through which knowledge was tested, preserved and passed to later investigators."
      ]
    }
  ],
  "timeline": [
    {
      "date": "1831",
      "event": "Born in Edinburgh on 13 June."
    },
    {
      "date": "1854",
      "event": "Graduated from Trinity College, Cambridge."
    },
    {
      "date": "1856",
      "event": "Became professor at Marischal College, Aberdeen."
    },
    {
      "date": "1860",
      "event": "Moved to King's College London."
    },
    {
      "date": "1871",
      "event": "Became the first Cavendish Professor of Physics at Cambridge."
    },
    {
      "date": "1873–1874",
      "event": "Published his Treatise in 1873; the Cavendish Laboratory opened in 1874."
    },
    {
      "date": "1879",
      "event": "Died in Cambridge on 5 November."
    }
  ],
  "sources": [
    {
      "title": "Who was James Clerk Maxwell?",
      "publisher": "James Clerk Maxwell Foundation",
      "url": "https://www.clerkmaxwellfoundation.org/html/about_maxwell.html"
    },
    {
      "title": "James Clerk Maxwell — Biography",
      "publisher": "MacTutor, University of St Andrews",
      "url": "https://mathshistory.st-andrews.ac.uk/Biographies/Maxwell/"
    },
    {
      "title": "James Clerk Maxwell at Aberdeen",
      "publisher": "James Clerk Maxwell Foundation / University of Aberdeen",
      "url": "https://www.clerkmaxwellfoundation.org/aberdeen/homepages.abdn.ac.uk/j.s.reid/pages/Maxwell/index.html"
    }
  ],
  "imageAttribution": {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:James-clerk-maxwell3.jpg",
  "author": "Photographer not identified; scan: Benjamin Crowell; contrast and edge crop: Quibik",
  "licenseName": "Public domain (Public Domain Mark 1.0)",
  "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
  "notes": "Photograph of James Clerk Maxwell, reproduced in Practical Physics by Millikan and Gale (1920), scanned by Benjamin Crowell. Commons marks the image public domain; Quibik adjusted contrast and the right edge. The original photographer is not identified on the file page.",
  "changes": "Cropped, resized to 900 × 1200, and converted to WebP.",
  "title": "James-clerk-maxwell3"
}
}
}

export const zh: PersonTranslation = {
  "name": "詹姆斯·克拉克·麦克斯韦",
  "summary": "苏格兰物理学家，以数学理论联结电、磁与光，并推动了气体的统计研究。",
  "sections": [
    {
      "title": "以数学理解自然",
      "paragraphs": [
        "詹姆斯·克拉克·麦克斯韦把过去常被分别研究的现象联系起来。他的电磁理论把光视为在电磁场中传播的扰动。他对颜色、气体和土星环的研究，同样将数学推理与物理问题结合。这些成果产生于十九世纪的研究共同体，包括迈克尔·法拉第的实验工作，而非某个孤立发现取代了此前的一切。"
      ]
    },
    {
      "title": "求学与大学任职",
      "paragraphs": [
        "麦克斯韦于 1831 年 6 月 13 日出生在爱丁堡，童年的一部分时光在家族的格伦莱尔庄园度过。他先在爱丁堡学习，后赴剑桥，于 1854 年毕业于三一学院。1856 年，他出任阿伯丁马歇尔学院教授，1860 年转赴伦敦国王学院。他的工作兼具教学、理论探索与实验；返回格伦莱尔居住的时光也为持续写作提供了条件。"
      ]
    },
    {
      "title": "场与光",
      "paragraphs": [
        "法拉第的力线概念，为麦克斯韦以数学处理电与磁提供了出发点。他研究扰动如何传播，发现其速度接近测得的光速，因而提出二者具有共同的物理性质。他的《电磁通论》于 1873 年出版。后来的研究者继续发展并重新表述这一理论；它的重要性并不意味着用于解释它的每一种十九世纪力学模型都被保留了下来。"
      ]
    },
    {
      "title": "颜色、分子与土星环",
      "paragraphs": [
        "麦克斯韦研究颜色知觉及颜色混合的定量关系。在气体理论中，他用统计方法描述大量分子，而不是赋予每个粒子相同的运动；路德维希·玻尔兹曼也对这一发展中的方法作出了基础性贡献。他对土星环的分析指出，要保持稳定，环应由许多独立粒子组成，而不是一个刚性的整体。问题虽各不相同，却都要求把模型与可观测的行为联系起来。"
      ]
    },
    {
      "title": "建设卡文迪许实验室",
      "paragraphs": [
        "1871 年，麦克斯韦成为剑桥首任卡文迪许物理学教授。他协助规划并建立实验室，实验室于 1874 年开放；他还整理了亨利·卡文迪许未发表的电学研究。他于 1879 年 11 月 5 日在剑桥去世。除理论成果外，实验室建设与历史文稿整理，也展示了知识得以检验、保存并传给后来研究者所需的制度建设和实际劳动。"
      ]
    }
  ],
  "timelineEvents": [
    "6 月 13 日出生于爱丁堡。",
    "毕业于剑桥大学三一学院。",
    "出任阿伯丁马歇尔学院教授。",
    "转赴伦敦国王学院。",
    "成为剑桥首任卡文迪许物理学教授。",
    "1873 年出版《电磁通论》；卡文迪许实验室于 1874 年开放。",
    "11 月 5 日在剑桥去世。"
  ],
  "imageNotes": "詹姆斯·克拉克·麦克斯韦的照片，来自 Millikan 和 Gale 的《Practical Physics》（1920），由 Benjamin Crowell 扫描。Commons 标为公有领域；Quibik 调整了对比度和右侧边缘。文件页未注明原摄影师。",
  "imageChanges": "已裁剪、缩放至 900 × 1200，并转换为 WebP 格式。"
}
