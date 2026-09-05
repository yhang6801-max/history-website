import portrait from '../../assets/people/carl-friedrich-gauss.webp'
import type { HistoricalPerson } from '../../types/historicalPerson'
import type { PersonTranslation } from '../personTranslations'

export const person: HistoricalPerson = {
 image: portrait,
 ...{
  "id": "carl-friedrich-gauss",
  "name": "Carl Friedrich Gauss",
  "lifespan": "1777–1855",
  "summary": "German mathematician and astronomer whose research linked number theory and geometry with orbital calculation, surveying and the measurement of Earth's magnetic field.",
  "sections": [
    {
      "title": "Education and early research",
      "paragraphs": [
        "Gauss was born in Brunswick in 1777. Financial support from the Duke of Brunswick enabled advanced study, including time at Göttingen. His 1799 doctorate at Helmstedt examined the fundamental theorem of algebra. His early work also established the compass-and-straightedge constructibility of a regular seventeen-sided polygon. The famous childhood calculation stories are less important to understanding his research than these documented mathematical achievements."
      ]
    },
    {
      "title": "Arithmetic and astronomy",
      "paragraphs": [
        "Disquisitiones Arithmeticae, published in 1801, organized major work in number theory. In the same year his orbital calculations helped astronomers recover Ceres after Giuseppe Piazzi's initial observations. Gauss did not discover Ceres himself: his contribution was mathematical prediction from limited observational data. Astronomy remained central to his career after he became director of the Göttingen Observatory in 1807."
      ]
    },
    {
      "title": "Measurement and the geometry of surfaces",
      "paragraphs": [
        "Surveying work in Hanover brought abstract geometry into contact with instruments, terrain and observational error. Gauss developed methods for analysing measurements and investigated the geometry of curved surfaces. His work illustrates how theoretical advances can grow from practical problems. Conversely, exact mathematical relations did not remove the need to assess imperfect observations and the limitations of instruments used in the field."
      ]
    },
    {
      "title": "Collaboration with Wilhelm Weber",
      "paragraphs": [
        "After Weber's appointment at Göttingen, the two researchers collaborated on terrestrial magnetism and its quantitative measurement. In 1833 they built an electromagnetic telegraph connecting their workplaces. This was a joint undertaking within a wider history of electrical communication, not the invention of all telegraphy by Gauss alone. Their magnetic research likewise depended on instruments, shared observations and cooperation beyond one individual."
      ]
    },
    {
      "title": "Publication and legacy",
      "paragraphs": [
        "Gauss died in Göttingen in 1855. His publications, notebooks and correspondence reveal a broader range of investigations than the works he chose to print during his lifetime. Private reflections and published demonstrations are different kinds of evidence, especially in discussions of priority. His enduring importance rests on influential results and methods, but also on the research traditions continued by other mathematicians and scientists."
      ]
    }
  ],
  "timeline": [
    {
      "date": "1777",
      "event": "Born in Brunswick on 30 April."
    },
    {
      "date": "1799",
      "event": "Receives his doctorate at Helmstedt with work on the fundamental theorem of algebra."
    },
    {
      "date": "1801",
      "event": "Publishes Disquisitiones Arithmeticae and calculates an orbit that helps recover Ceres."
    },
    {
      "date": "1807",
      "event": "Becomes director of the Göttingen Observatory."
    },
    {
      "date": "1820s",
      "event": "Undertakes geodetic work in Hanover and develops related mathematical investigations."
    },
    {
      "date": "1833",
      "event": "Builds an electromagnetic telegraph with Wilhelm Weber."
    },
    {
      "date": "1855",
      "event": "Dies in Göttingen on 23 February."
    }
  ],
  "sources": [
    {
      "title": "Johann Carl Friedrich Gauss",
      "publisher": "J. J. O’Connor and E. F. Robertson / MacTutor, University of St Andrews",
      "url": "https://mathshistory.st-andrews.ac.uk/Biographies/Gauss/"
    },
    {
      "title": "Gauß und Weber",
      "publisher": "Georg-August-Universität Göttingen",
      "url": "https://www.uni-goettingen.de/de/32449.html"
    },
    {
      "title": "Gauß-Bibliothek – Sammlungskatalog",
      "publisher": "Niedersächsische Staats- und Universitätsbibliothek Göttingen",
      "url": "https://sub.sammlungen.uni-goettingen.de/gaus-bibliothek/"
    }
  ],
  "imageAttribution": {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:Carl_Friedrich_Gauss_1840_by_Jensen.jpg",
  "author": "Christian Albrecht Jensen",
  "licenseName": "Public domain (PD-Art; PD-old-auto-expired)",
  "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
  "notes": "Portrait of Carl Friedrich Gauss painted by Christian Albrecht Jensen in 1840. This is a reproduction of Jensen's painting, not the later copy by Gottlieb Biermann.",
  "changes": "Cropped, resized to 900 × 1200, and converted to WebP.",
  "title": "Portrait of Carl Friedrich Gauß (1777-1855)"
}
}
}

export const zh: PersonTranslation = {
  "name": "卡尔·弗里德里希·高斯",
  "summary": "德国数学家、天文学家，将数论和几何研究与轨道计算、大地测量及地磁测定联系起来。",
  "sections": [
    {
      "title": "教育与早期研究",
      "paragraphs": [
        "高斯于 1777 年出生在不伦瑞克。不伦瑞克公爵的资助使他得以继续深造，并曾在哥廷根学习。他于 1799 年在黑尔姆施泰特取得博士学位，论文探讨代数学基本定理。他的早期工作还证明了正十七边形可以用尺规作出。相较于著名的童年计算故事，这些有记录的数学成果更有助于理解他的研究。"
      ]
    },
    {
      "title": "算术与天文学",
      "paragraphs": [
        "1801 年出版的《算术研究》系统呈现了重要的数论成果。同年，在朱塞佩·皮亚齐最初观测之后，高斯的轨道计算帮助天文学家重新找到谷神星。谷神星并非由高斯本人发现；他的贡献是利用有限观测数据作出数学预测。1807 年出任哥廷根天文台台长后，天文学始终是其事业的重要部分。"
      ]
    },
    {
      "title": "测量与曲面几何",
      "paragraphs": [
        "汉诺威的测绘工作使抽象几何与仪器、地形和观测误差发生联系。高斯发展了分析测量结果的方法，并研究曲面几何。他的工作说明，理论进展可以源于实际问题。反过来，精确的数学关系也不能免除对不完善的观测和野外仪器局限的评估。"
      ]
    },
    {
      "title": "与威廉·韦伯合作",
      "paragraphs": [
        "韦伯到哥廷根任职后，两人合作研究地磁及其定量测量。1833 年，他们建造电磁电报装置，将工作地点联系起来。这是电通信发展历程中的合作项目，不能说成高斯独自发明了所有电报技术。他们的地磁研究同样依靠仪器、共同观测以及超越个人的协作。"
      ]
    },
    {
      "title": "发表与学术遗产",
      "paragraphs": [
        "高斯于 1855 年在哥廷根去世。出版物、笔记和书信呈现的研究范围，比他生前选择付印的成果更广。在讨论发现优先权时，私人思考与公开发表的证明尤其需要被视为不同性质的证据。他的长久影响既来自重要结果和方法，也来自其他数学家与科学家继续发展的研究传统。"
      ]
    }
  ],
  "timelineEvents": [
    "4 月 30 日出生于不伦瑞克。",
    "以代数学基本定理研究在黑尔姆施泰特取得博士学位。",
    "出版《算术研究》，并计算轨道，帮助重新找到谷神星。",
    "出任哥廷根天文台台长。",
    "在汉诺威开展大地测量，并发展相关数学研究。",
    "与威廉·韦伯合作建造电磁电报装置。",
    "2 月 23 日在哥廷根去世。"
  ],
  "imageNotes": "Christian Albrecht Jensen 于 1840 年绘制的卡尔·弗里德里希·高斯肖像。本图复制自 Jensen 的画作，并非 Gottlieb Biermann 后来绘制的临摹本。",
  "imageChanges": "已裁剪、缩放至 900 × 1200，并转换为 WebP 格式。"
}
