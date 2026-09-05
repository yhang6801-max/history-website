import portrait from '../../assets/people/srinivasa-ramanujan.webp'
import type { HistoricalPerson } from '../../types/historicalPerson'
import type { PersonTranslation } from '../personTranslations'

export const person: HistoricalPerson = {
 image: portrait,
 ...{
  "id": "srinivasa-ramanujan",
  "name": "Srinivasa Ramanujan",
  "lifespan": "1887–1920",
  "summary": "Indian mathematician whose discoveries in number theory, infinite series and partitions continued to stimulate research long after his short life.",
  "sections": [
    {
      "title": "An unconventional education",
      "paragraphs": [
        "Ramanujan was born in Erode in 1887. He developed much of his mathematics through independent study, but difficulty with other college subjects interrupted his formal education. His notebooks contained many identities and conjectures. Being largely self-taught did not mean having no support: Indian teachers, patrons and mathematical networks helped his work reach a wider audience."
      ]
    },
    {
      "title": "From Madras to Cambridge",
      "paragraphs": [
        "While working at the Madras Port Trust, he sought recognition for his results. His 1913 letter to G. H. Hardy led to correspondence and, in 1914, a move to Cambridge. Hardy and J. E. Littlewood recognized exceptional ideas while asking for proofs. Their collaboration brought together different mathematical habits, rather than simply transferring knowledge from one scholar to another."
      ]
    },
    {
      "title": "Partitions and proof",
      "paragraphs": [
        "His research included continued fractions, modular equations and the partition function, which counts ways to express an integer as a sum of positive integers without regard to order. With Hardy he developed an asymptotic formula for partitions. His records included known results, new theorems and statements requiring proof or correction. Their importance does not imply that every formula is valid without conditions."
      ]
    },
    {
      "title": "Recognition and illness",
      "paragraphs": [
        "Cambridge awarded him a research degree in 1916. In 1918 he became a Fellow of the Royal Society and a Fellow of Trinity College. Serious illness overshadowed his later years in Britain. He returned to India in 1919 and died in 1920. Retrospective explanations of his illness remain debated, so no single modern diagnosis is treated here as an established fact."
      ]
    },
    {
      "title": "An unfinished legacy",
      "paragraphs": [
        "Near the end of his life he communicated examples of mock theta functions. Later mathematicians placed these objects within a broader theory, rather than merely repeating a complete theory already supplied by him. His papers and notebooks are complementary records: published work presents developed arguments, while the notebooks preserve insights and problems that required generations of further investigation."
      ]
    }
  ],
  "timeline": [
    {
      "date": "1887",
      "event": "Born in Erode on 22 December."
    },
    {
      "date": "1912",
      "event": "Begins clerical work at the Madras Port Trust while continuing mathematics."
    },
    {
      "date": "1913",
      "event": "Writes to G. H. Hardy about his results."
    },
    {
      "date": "1914",
      "event": "Travels to Cambridge and begins working with Hardy."
    },
    {
      "date": "1916",
      "event": "Receives a Cambridge research degree for work including highly composite numbers."
    },
    {
      "date": "1918",
      "event": "Is elected to the Royal Society and to a fellowship at Trinity College."
    },
    {
      "date": "1919",
      "event": "Returns to India in poor health."
    },
    {
      "date": "1920",
      "event": "Communicates work on mock theta functions in his final months and dies on 26 April."
    }
  ],
  "sources": [
    {
      "title": "Srinivasa Ramanujan",
      "publisher": "J. J. O’Connor and E. F. Robertson / MacTutor, University of St Andrews",
      "url": "https://mathshistory.st-andrews.ac.uk/Biographies/Ramanujan/"
    },
    {
      "title": "1918 — Certificates of Election: Ramanujan",
      "publisher": "The Royal Society",
      "url": "https://catalogues.royalsociety.org/CalmView/Record.aspx?id=EC%2F1918%2F18&src=CalmView.Catalog"
    },
    {
      "title": "Life and Work",
      "publisher": "The Institute of Mathematical Sciences, Chennai",
      "url": "https://www.imsc.res.in/~rao/ramanujan/newnow/papofram.htm"
    },
    {
      "title": "Ramanujan’s mock theta functions",
      "publisher": "Ken Ono / Proceedings of the National Academy of Sciences",
      "url": "https://doi.org/10.1073/pnas.1300345110"
    }
  ],
  "imageAttribution": {
    "title": "Srinivasa Ramanujan — Oberwolfach Photo Collection",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Srinivasa_Ramanujan_-_OPC_-_1.jpg",
    "author": "Photographer not identified / Oberwolfach Photo Collection; Commons corrections credited to Jacek Halicki",
    "licenseName": "Public domain (PD-UK-unknown; PD-US-expired)",
    "licenseUrl": "https://commons.wikimedia.org/wiki/File:Srinivasa_Ramanujan_-_OPC_-_1.jpg#Licensing",
    "notes": "Photograph of Srinivasa Ramanujan made before 1920, from the Oberwolfach Photo Collection. The original photographer is not identified. The Commons file records permission ticket 2008042410024381 and public-domain grounds for the United Kingdom and the United States. Its source warns that the scan quality is limited; this is not presented as a newly restored high-resolution portrait.",
    "changes": "Used the Commons archive version; cropped, resized to 900 × 1200, and converted to WebP."
  }
}
}

export const zh: PersonTranslation = {
  "name": "斯里尼瓦瑟·拉马努金",
  "summary": "印度数学家，在数论、无穷级数和整数分拆方面作出重要发现，其短暂生命结束后，这些成果仍不断推动研究。",
  "sections": [
    {
      "title": "非典型的求学道路",
      "paragraphs": [
        "拉马努金于 1887 年出生在埃罗德。他主要通过独立学习发展数学能力，但在大学其他科目上的困难中断了正规教育。他的笔记包含许多恒等式和猜想。主要依靠自学并不意味着毫无支持：印度的教师、资助者和数学交流网络帮助他的成果获得了更广泛的关注。"
      ]
    },
    {
      "title": "从马德拉斯到剑桥",
      "paragraphs": [
        "在马德拉斯港务局工作期间，他努力让自己的成果得到认可。1913 年致 G. H. 哈代的信促成了通信，并使他于 1914 年前往剑桥。哈代和 J. E. 李特尔伍德认识到其中思想非凡，同时要求提供证明。他们的合作融合了不同的数学习惯，并非仅仅由一位学者向另一位传授知识。"
      ]
    },
    {
      "title": "分拆与证明",
      "paragraphs": [
        "他的研究涉及连分数、模方程和分拆函数；分拆函数计算把一个整数写成若干正整数之和、不计顺序的方式数。他与哈代共同发展了分拆数的渐近公式。他的记录既有已知结果，也有新定理，还有需要证明或修正的陈述。这些成果的重要性并不意味着每个公式都能不附条件地成立。"
      ]
    },
    {
      "title": "学术认可与疾病",
      "paragraphs": [
        "剑桥于 1916 年授予他研究学位。1918 年，他当选英国皇家学会会员及三一学院院士。重病笼罩了他在英国的最后几年。他于 1919 年返回印度，1920 年去世。后人对其疾病的解释仍有争论，因此这里不把某个现代诊断视为已经确立的事实。"
      ]
    },
    {
      "title": "未完的学术遗产",
      "paragraphs": [
        "在生命末期，他交流了模拟西塔函数的一些例子。后来的数学家将这些对象纳入更广泛的理论，而不是简单重复一套他已完整提供的理论。他的论文与笔记是互补的记录：发表的研究呈现经过发展的论证，笔记则保存了需要后世几代人继续探索的洞见与问题。"
      ]
    }
  ],
  "timelineEvents": [
    "12 月 22 日出生于埃罗德。",
    "开始在马德拉斯港务局任职员，同时继续数学研究。",
    "致信 G. H. 哈代，介绍自己的研究成果。",
    "前往剑桥，与哈代开展合作。",
    "凭包括高合成数在内的研究取得剑桥研究学位。",
    "当选英国皇家学会会员及三一学院院士。",
    "在健康状况不佳的情况下返回印度。",
    "在生命最后几个月交流模拟西塔函数研究，4 月 26 日去世。"
  ],
  "imageNotes": "摄于 1920 年之前的斯里尼瓦瑟·拉马努金照片，来源为 Oberwolfach Photo Collection，原摄影者未详。Commons 文件记载授权工单 2008042410024381，并列出英国与美国的公有领域依据。来源提醒原扫描质量有限，本站不将其称为新修复的高清肖像。",
  "imageChanges": "使用 Commons 档案版本，裁剪、缩放至 900 × 1200，并转换为 WebP 格式。"
}
