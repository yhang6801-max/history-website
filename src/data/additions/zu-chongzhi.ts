import portrait from '../../assets/people/zu-chongzhi.webp'
import type { HistoricalPerson } from '../../types/historicalPerson'
import type { PersonTranslation } from '../personTranslations'

export const person: HistoricalPerson = {
 image: portrait,
 ...{
  "id": "zu-chongzhi",
  "name": "Zu Chongzhi",
  "lifespan": "429–500",
  "summary": "Mathematician and astronomer of China's Southern dynasties, known for precise bounds on pi and the Daming calendar.",
  "sections": [
    {
      "title": "Learning and service in the Southern dynasties",
      "paragraphs": [
        "Zu Chongzhi lived from 429 to 500 and served under the Liu Song and Southern Qi dynasties. He belonged to a family with a tradition of official service and astronomical learning. Mathematics and calendar-making were closely connected to government: a calendar coordinated practical affairs and expressed imperial authority. His work therefore developed within institutions where technical arguments could encounter political resistance."
      ]
    },
    {
      "title": "A more precise value of pi",
      "paragraphs": [
        "Later historical records credit him with placing pi between 3.1415926 and 3.1415927 and with the approximation 355/113. These are related but distinct results: the fraction is an exceptionally close approximation, not the exact value of pi. He built on a mathematical tradition that included Liu Hui. Since the relevant original exposition is lost, a modern reconstruction of his procedure should not be presented as a surviving calculation in his own hand."
      ]
    },
    {
      "title": "The Daming calendar",
      "paragraphs": [
        "In 462 Zu proposed adoption of the Daming calendar. It incorporated precession and used a cycle of 391 years with 144 intercalary months. He did not discover precession itself, which had already been investigated by Yu Xi. Opposition prevented immediate implementation. The calendar entered official use in 510, after Zu's death, with his son Zu Gengzhi contributing to its eventual adoption."
      ]
    },
    {
      "title": "A family legacy and missing texts",
      "paragraphs": [
        "Zu Chongzhi and his son are associated with the mathematical treatise Zhui Shu and work on volumes. Their contributions belong to a continuing exchange between geometry, computation and astronomy, rather than an isolated list of inventions. The loss of Zhui Shu limits what can be said about individual proofs and the division of work between father and son. Later accounts must be read with those gaps in mind."
      ]
    }
  ],
  "timeline": [
    {
      "date": "429",
      "event": "Born into a family with traditions of official service and astronomical learning."
    },
    {
      "date": "462",
      "event": "Proposes official use of the Daming calendar; the proposal meets opposition."
    },
    {
      "date": "5th century",
      "event": "Carries out mathematical work on pi and other subjects; exact dates for individual results are not securely known."
    },
    {
      "date": "500",
      "event": "Dies before the Daming calendar enters official use."
    },
    {
      "date": "510",
      "event": "The Daming calendar is adopted after his death, following efforts that included those of his son Zu Gengzhi."
    }
  ],
  "sources": [
    {
      "title": "Zu Chongzhi",
      "publisher": "Biographical Encyclopedia of Astronomers / Springer",
      "url": "https://mathshistory.st-andrews.ac.uk/BEA/zu_chongzhi_bea.pdf"
    },
    {
      "title": "Zu Chongzhi (429–500)",
      "publisher": "Heinz Klaus Strick; translated by John O’Connor / MacTutor, University of St Andrews",
      "url": "https://mathshistory.st-andrews.ac.uk/Strick/zu_chongzhi.pdf"
    },
    {
      "title": "Zu Chongzhi",
      "publisher": "J. J. O’Connor and E. F. Robertson / MacTutor, University of St Andrews",
      "url": "https://mathshistory.st-andrews.ac.uk/Biographies/Zu_Chongzhi/"
    }
  ],
  "imageAttribution": {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:昆山亭林公园祖冲之像.jpg",
  "author": "Gisling (photograph); sculptor not identified",
  "licenseName": "CC BY-SA 3.0 (photograph); FoP-China (sculpture)",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
  "notes": "A later commemorative statue of Zu Chongzhi in Tinglin Park, Kunshan, photographed by Gisling in 2011. The sculptor is not identified in the source. This is not a portrait made during Zu Chongzhi's lifetime. The photograph is licensed under CC BY-SA 3.0; the publicly displayed sculpture is reproduced under China's freedom-of-panorama provision.",
  "changes": "Cropped, resized to 900 × 1200, and converted to WebP.",
  "title": "昆山亭林公园祖冲之像"
}
}
}

export const zh: PersonTranslation = {
  "name": "祖冲之",
  "summary": "中国南朝数学家、天文学家，以圆周率的精密界限和《大明历》闻名。",
  "sections": [
    {
      "title": "南朝的学术与仕宦",
      "paragraphs": [
        "祖冲之生于 429 年，卒于 500 年，曾仕于刘宋和南齐。他的家族具有仕宦与天文研究的传统。数学和制历与治理密切相关：历法既协调实际事务，也体现皇权。因此，他的研究处于技术论证可能遭遇政治阻力的制度环境之中。"
      ]
    },
    {
      "title": "更精密的圆周率",
      "paragraphs": [
        "后世史籍记载，他将圆周率限定在 3.1415926 与 3.1415927 之间，并给出近似分数 355/113。两者相关但并不相同：这一分数是极为精密的近似值，而不是圆周率的精确值。他的工作继承了包括刘徽在内的数学传统。由于相关原始论述已佚，现代重构的计算过程不应被写成他本人留下的完整演算。"
      ]
    },
    {
      "title": "《大明历》",
      "paragraphs": [
        "462 年，祖冲之提出采用《大明历》。该历考虑岁差，以 391 年置 144 个闰月。岁差本身并非由他发现，虞喜此前已有研究。反对意见阻止了新历立即实施。直到他去世后的 510 年，《大明历》才正式施行，其子祖暅之为最终采用新历作出了贡献。"
      ]
    },
    {
      "title": "家学传承与佚失著作",
      "paragraphs": [
        "祖冲之父子与数学著作《缀术》及体积研究相关。他们的贡献属于几何、计算和天文不断相互促进的过程，而非一份孤立的发明清单。《缀术》的佚失，使具体证明过程以及父子之间的工作分工具有认识上的局限。阅读后世记载时，应当保留对这些缺环的认识。"
      ]
    }
  ],
  "timelineEvents": [
    "出生于具有仕宦和天文研究传统的家族。",
    "提出正式采用《大明历》，遭遇反对。",
    "研究圆周率等数学问题，各项成果的确切完成时间不详。",
    "去世，此时《大明历》尚未正式施行。",
    "在包括其子祖暅之在内的努力推动下，《大明历》于其身后正式施行。"
  ],
  "imageNotes": "Gisling 于 2011 年拍摄的昆山亭林公园祖冲之纪念像。来源未注明雕塑作者；这是后世纪念雕塑，并非祖冲之生前肖像。摄影作品采用 CC BY-SA 3.0 许可；公开陈列的雕塑依据中国关于公共场所艺术作品摄影的规定展示。",
  "imageChanges": "已裁剪、缩放至 900 × 1200，并转换为 WebP 格式。"
}
