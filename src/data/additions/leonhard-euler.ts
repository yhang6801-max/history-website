import portrait from '../../assets/people/leonhard-euler.webp'
import type { HistoricalPerson } from '../../types/historicalPerson'
import type { PersonTranslation } from '../personTranslations'

export const person: HistoricalPerson = {
 image: portrait,
 ...{
  "id": "leonhard-euler",
  "name": "Leonhard Euler",
  "lifespan": "1707–1783",
  "summary": "Swiss mathematician whose work shaped analysis, number theory and mechanics through research, textbooks and collaboration across European academies.",
  "sections": [
    {
      "title": "Basel and mathematical training",
      "paragraphs": [
        "Euler was born in Basel in 1707 and grew up near the city. His father was a Protestant minister, and his early university studies included philosophy and theology. Johann Bernoulli guided his mathematical reading and helped him pursue mathematics. This education placed Euler within an established network of scholars, rather than making his later achievements the product of learning in complete isolation."
      ]
    },
    {
      "title": "Between St Petersburg and Berlin",
      "paragraphs": [
        "He joined the St Petersburg Academy in 1727 and succeeded Daniel Bernoulli in its senior mathematics position in 1733. In 1741 he moved to Berlin, where research was accompanied by substantial administrative and practical duties. He retained Russian connections throughout this period and returned to St Petersburg in 1766. Court patronage supported these institutions but also brought political pressures and disputes."
      ]
    },
    {
      "title": "A connected mathematical programme",
      "paragraphs": [
        "Euler worked across number theory, differential equations, geometry and mechanics. For him, analytical methods and physical problems continually informed one another. His books helped organize mathematical knowledge for later generations and encouraged a systematic treatment of functions. His influence should not be reduced to a single celebrated formula, nor should every idea he developed from earlier mathematics be described as his sole invention."
      ]
    },
    {
      "title": "Science beyond abstract calculation",
      "paragraphs": [
        "His academy work extended to astronomy, navigation, shipbuilding and hydraulic problems. This range reflects the close relationship between eighteenth-century mathematical institutions and the needs of states. Technical projects, correspondence and long expositions all formed part of his scientific activity. The scale of his writings gave later readers a broad body of methods to adapt, debate and refine."
      ]
    },
    {
      "title": "Blindness and collaborative work",
      "paragraphs": [
        "Severe visual impairment eventually left Euler blind, but he continued working with assistance from family members and fellow mathematicians. Their help included developing calculations and preparing material, not merely taking dictation. He died in St Petersburg in 1783. The continuing publication of his work after his death reflects both his productivity and the institutions and collaborators that preserved it."
      ]
    }
  ],
  "timeline": [
    {
      "date": "1707",
      "event": "Born in Basel on 15 April."
    },
    {
      "date": "1727",
      "event": "Joins the St Petersburg Academy."
    },
    {
      "date": "1733",
      "event": "Succeeds Daniel Bernoulli in the Academy's senior mathematics position."
    },
    {
      "date": "1741",
      "event": "Moves to Berlin to work within the Prussian academy system."
    },
    {
      "date": "1766",
      "event": "Returns to St Petersburg, where he continues research despite worsening eyesight."
    },
    {
      "date": "1783",
      "event": "Dies in St Petersburg on 18 September."
    }
  ],
  "sources": [
    {
      "title": "Leonhard Euler",
      "publisher": "J. J. O’Connor and E. F. Robertson / MacTutor, University of St Andrews",
      "url": "https://mathshistory.st-andrews.ac.uk/Biographies/Euler/"
    },
    {
      "title": "Leonhard Euler (1707–1783)",
      "publisher": "ETH-Bibliothek, ETH Zürich",
      "url": "https://library.ethz.ch/sammlungen-und-archive/kurzportraets/leonhard-euler-1707-1783.html"
    }
  ],
  "imageAttribution": {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:Leonhard_Euler.jpg",
  "author": "Jakob Emanuel Handmann / Kunstmuseum Basel",
  "licenseName": "Public domain (PD-Art; PD-old-100-expired)",
  "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
  "notes": "Portrait of Leonhard Euler painted by Jakob Emanuel Handmann in 1753, in the Kunstmuseum Basel collection. A reproduction of a historical painting, not a photograph of Euler.",
  "changes": "Cropped, resized to 900 × 1200, and converted to WebP.",
  "title": "Portrait of Leonhard Euler (1707-1783)"
}
}
}

export const zh: PersonTranslation = {
  "name": "莱昂哈德·欧拉",
  "summary": "瑞士数学家，通过研究、教科书写作及欧洲科学院之间的合作，深刻影响了分析学、数论与力学。",
  "sections": [
    {
      "title": "巴塞尔与数学训练",
      "paragraphs": [
        "欧拉于 1707 年出生在巴塞尔，在城附近长大。父亲是一位新教牧师，他早期的大学学习包括哲学和神学。约翰·伯努利指导他的数学阅读，并帮助他走上数学研究道路。这种教育使欧拉置身于已有的学者网络之中，其后来的成就并非完全孤立自学的产物。"
      ]
    },
    {
      "title": "往来于圣彼得堡与柏林",
      "paragraphs": [
        "1727 年，他加入圣彼得堡科学院，并于 1733 年接替丹尼尔·伯努利担任资深数学职位。1741 年，他迁往柏林，在研究之外还承担大量行政和实际事务。在此期间，他一直保持与俄国的联系，并于 1766 年返回圣彼得堡。宫廷资助支持了这些机构，也带来了政治压力和争执。"
      ]
    },
    {
      "title": "相互联系的数学研究",
      "paragraphs": [
        "欧拉的研究涉及数论、微分方程、几何与力学。对他而言，分析方法与物理问题始终相互启发。他的著作为后世组织了数学知识，推动对函数的系统研究。他的影响不应被缩减为某个著名公式，也不应把他在前人数学基础上发展的每个思想都说成独立发明。"
      ]
    },
    {
      "title": "抽象计算之外的科学",
      "paragraphs": [
        "他在科学院的工作还涉及天文、航海、造船和水力问题。这种广度体现了十八世纪数学机构与国家需求之间的密切关系。技术项目、书信交流和长篇论述都属于他的科学活动。他的大量著作为后来的读者提供了广泛的方法，供人们运用、讨论和改进。"
      ]
    },
    {
      "title": "失明后的合作研究",
      "paragraphs": [
        "严重的视力损伤最终使欧拉失明，但他在家人和数学家同事的协助下继续研究。他们不仅记录口述，也参与计算和材料准备。他于 1783 年在圣彼得堡去世。其著作在身后继续出版，既体现了他的高产，也体现了保存这些成果的机构与合作者的作用。"
      ]
    }
  ],
  "timelineEvents": [
    "4 月 15 日出生于巴塞尔。",
    "加入圣彼得堡科学院。",
    "接替丹尼尔·伯努利担任科学院资深数学职位。",
    "迁往柏林，在普鲁士科学院体系内工作。",
    "返回圣彼得堡，尽管视力恶化，仍继续研究。",
    "9 月 18 日在圣彼得堡去世。"
  ],
  "imageNotes": "Jakob Emanuel Handmann 于 1753 年绘制的莱昂哈德·欧拉肖像，藏于巴塞尔美术馆。这是历史画作的复制图，并非欧拉的照片。",
  "imageChanges": "已裁剪、缩放至 900 × 1200，并转换为 WebP 格式。"
}
