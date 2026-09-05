import placeholder from '../../assets/people/placeholder.svg'
import type { HistoricalPerson } from '../../types/historicalPerson'
import type { PersonTranslation } from '../personTranslations'

export const person: HistoricalPerson = {
  image: placeholder,
  ...{
  "id": "liu-hui",
  "name": "Liu Hui",
  "lifespan": "3rd century",
  "summary": "Chinese mathematician whose commentary on the Nine Chapters explained the reasoning behind algorithms and developed methods for geometry and surveying.",
  "sections": [
    {
      "title": "A mathematician known through his works",
      "paragraphs": [
        "Liu Hui worked in third-century China, during the Three Kingdoms period. His birth and death dates are not securely known, and the standard dynastic histories contain no dedicated biography of him. His commentary on the Nine Chapters on the Mathematical Art, dated to 263, is therefore a more reliable starting point than reconstructed stories about his childhood or official career."
      ]
    },
    {
      "title": "Explaining why algorithms work",
      "paragraphs": [
        "The Nine Chapters was an inherited mathematical classic, not a book first composed by Liu Hui. He examined its procedures and supplied explanations using geometrical decomposition, definitions and reasoning. His commentary connects practical computation with general principles. It challenges the idea that Chinese mathematics consisted only of unproved recipes, while remaining rooted in its own terminology and computational practices rather than a Greek presentation of mathematics."
      ]
    },
    {
      "title": "Circles, volumes and measurement",
      "paragraphs": [
        "His circle-cutting method used polygons to approach a circle and justify calculations of its area. His work also investigated volumes and the geometric reasoning behind extraction of roots. These were methods with further possibilities, not a completed modern calculus. In particular, later achievements associated with Zu Chongzhi and his son must be distinguished from Liu Hui's earlier investigations that helped make them possible."
      ]
    },
    {
      "title": "Surveying and the life of a text",
      "paragraphs": [
        "The work later called the Sea Island Mathematical Manual develops surveying through repeated observations and differences between measurements. It is associated with Liu Hui's work on double differences, rather than evidence of a documented sea voyage. His writings became part of later mathematical education and survived through successive editions. Modern research consequently has to examine both the mathematical arguments and the history of the transmitted text."
      ]
    }
  ],
  "timeline": [
    {
      "date": "3rd century",
      "event": "Works in China during the Three Kingdoms period; exact birth and death dates are unknown."
    },
    {
      "date": "263",
      "event": "Produces his commentary on the Nine Chapters on the Mathematical Art."
    },
    {
      "date": "After his lifetime",
      "event": "His commentary and the work later called the Sea Island Mathematical Manual enter the tradition of mathematical education and textual transmission."
    }
  ],
  "sources": [
    {
      "title": "《科学文化》（Cultures of Science）刘徽纪念专刊出版",
      "publisher": "中国科学院自然科学史研究所；导言：邹大海、李朝晖、郭书春",
      "url": "https://ihns.cas.cn/xwdt/xsdt/202604/t20260408_8182719.html"
    },
    {
      "title": "2013年6月：《古代世界数学泰斗刘徽》简介",
      "publisher": "中国科学院自然科学史研究所",
      "url": "https://ihns.cas.cn/yjcg/xszz/zztj/202212/t20221207_6570672.html"
    },
    {
      "title": "九章算術",
      "publisher": "《四库全书》本 / 识典古籍",
      "url": "https://www.shidianguji.com/zh/book/SK1544/chapter/1k00iodpmvdie"
    },
    {
      "title": "是他们让国际数学界重新认识了刘徽",
      "publisher": "科技日报 / 中国科学院",
      "url": "https://www.cas.cn/cm/202412/t20241227_5043612.shtml"
    }
  ],
  "imageNotes": "No verified portrait is displayed. This is the project’s neutral silhouette, not an image of Liu Hui.",
  "imageChanges": "Existing project placeholder used without modification."
}
}

export const zh: PersonTranslation = {
  "name": "刘徽",
  "summary": "中国数学家，通过《九章算术注》阐明算法原理，并发展了几何计算与测量方法。",
  "sections": [
    {
      "title": "从著作认识其人",
      "paragraphs": [
        "刘徽活动于三国时期的公元三世纪，生卒年缺少确切记载，正史也没有为他单独立传。因此，作于 263 年的《九章算术注》，比后人重构的童年或仕宦故事更适合作为认识他的起点。"
      ]
    },
    {
      "title": "解释算法为何成立",
      "paragraphs": [
        "《九章算术》是刘徽继承的数学经典，并非由他首次编写。他审视其中的算法，运用几何分解、定义和推理加以解释，将实际计算与一般原理联系起来。这些注释表明，中国数学并非只有未经证明的操作口诀；同时，它们扎根于自身的术语和计算实践，而不是采用希腊数学的表述方式。"
      ]
    },
    {
      "title": "圆、体积与测量",
      "paragraphs": [
        "他的割圆术利用多边形逼近圆，论证圆面积的计算方法。他还研究体积以及开方算法背后的几何原理。这些方法包含进一步发展的可能性，但并不是已经完成的现代微积分。尤其应当区分祖冲之及其子的后续成就，与刘徽为这些成就奠定基础的早期探索。"
      ]
    },
    {
      "title": "测量方法与文本传承",
      "paragraphs": [
        "后来称为《海岛算经》的著作，通过重复观测和测量所得的差数发展测量方法。它与刘徽的重差研究相关，并不能证明他曾有一段有据可查的航海经历。他的著作成为后世数学教育的一部分，通过历代版本流传下来。因此，现代研究既要考察数学论证，也要考察传世文本的历史。"
      ]
    }
  ],
  "timelineEvents": [
    "活动于中国三国时期，确切生卒年不详。",
    "为《九章算术》作注。",
    "其注释及后来称为《海岛算经》的著作进入后世数学教育与文本传承体系。"
  ],
  "imageNotes": "此处未展示经核验的肖像，使用项目已有的中性剪影占位图，并非刘徽本人的形象。",
  "imageChanges": "使用项目已有占位图，未作修改。"
}
