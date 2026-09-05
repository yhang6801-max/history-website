import portrait from '../../assets/people/nicolaus-copernicus.webp'
import type { HistoricalPerson } from '../../types/historicalPerson'
import type { PersonTranslation } from '../personTranslations'

export const person: HistoricalPerson = {
 image: portrait,
 ...{
  "id": "nicolaus-copernicus",
  "name": "Nicolaus Copernicus",
  "lifespan": "1473–1543",
  "summary": "Renaissance astronomer who developed a mathematical system in which Earth rotates and travels around the Sun, transforming debates about the structure of the heavens.",
  "sections": [
    {
      "title": "Education across Europe",
      "paragraphs": [
        "Copernicus was born in Toruń in 1473. After his father's death, his uncle Lucas Watzenrode supported his education. He studied in Kraków and later in Bologna and Padua, combining astronomical interests with law and medicine. In 1503 he obtained a doctorate in canon law at Ferrara. His education was broader than astronomy and helped prepare him for practical responsibilities within church institutions."
      ]
    },
    {
      "title": "A canon with administrative duties",
      "paragraphs": [
        "A cathedral canonry at Frombork provided his livelihood. He also served his uncle as a medical adviser and secretary and administered estates belonging to the cathedral chapter. These activities placed him within the political and economic life of Warmia. His astronomical research developed alongside professional obligations rather than in a modern research institute devoted exclusively to science."
      ]
    },
    {
      "title": "Putting Earth in motion",
      "paragraphs": [
        "His system explained the daily appearance of the sky through Earth's rotation and placed Earth among the planets moving around the Sun. This reorganized the interpretation of planetary motion instead of treating Earth as a stationary central reference. It was a mathematical proposal with substantial consequences, not a complete account of modern celestial mechanics. Later work would change the model's details and supply further evidence."
      ]
    },
    {
      "title": "Publication and reception",
      "paragraphs": [
        "De revolutionibus orbium coelestium appeared in 1543, the year of his death. Its publication depended on supporters and intermediaries, including Georg Joachim Rheticus and Tiedemann Giese. Acceptance was gradual rather than immediate. Mathematical objections, available observations and religious interpretation all shaped the debate, which continued well beyond Copernicus's lifetime."
      ]
    },
    {
      "title": "A beginning for further discoveries",
      "paragraphs": [
        "Copernicus did not supply Kepler's elliptical orbits or Newton's gravitational theory. Galileo's telescopic observations and Kepler's use of Tycho Brahe's measurements later altered the evidential and mathematical landscape. Distinguishing these contributions helps explain the change as a historical process involving many investigators. Copernicus's significance lies in making a moving Earth central to a systematic astronomical alternative."
      ]
    }
  ],
  "timeline": [
    {
      "date": "1473",
      "event": "Born in Toruń on 19 February."
    },
    {
      "date": "1491",
      "event": "Begins studies at the Kraków Academy."
    },
    {
      "date": "1496",
      "event": "Begins studies in Bologna, pursuing law alongside astronomical interests."
    },
    {
      "date": "1503",
      "event": "Receives a doctorate in canon law at Ferrara."
    },
    {
      "date": "1516–1519",
      "event": "Administers estates belonging to the Warmia cathedral chapter."
    },
    {
      "date": "1536",
      "event": "Cardinal Schönberg urges him to publish his astronomical work."
    },
    {
      "date": "1543",
      "event": "De revolutionibus is published; Copernicus dies in Frombork on 24 May."
    }
  ],
  "sources": [
    {
      "title": "Copernicus, Nicolas",
      "publisher": "Richard S. Westfall / The Galileo Project, Rice University",
      "url": "https://galileo.library.rice.edu/Catalog/NewFiles/coprnics.html"
    },
    {
      "title": "Short biography of Nicolaus Copernicus",
      "publisher": "Nicolaus Copernicus Astronomical Center, Polish Academy of Sciences",
      "url": "https://www.camk.edu.pl/en/about/copernicus/"
    },
    {
      "title": "Planetary Motion: The History of an Idea That Launched the Scientific Revolution",
      "publisher": "Holli Riebeek / NASA Earth Observatory",
      "url": "https://science.nasa.gov/earth/earth-observatory/planetary-motion/"
    }
  ],
  "imageAttribution": {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:Nikolaus_Kopernikus.jpg",
  "author": "Artist not identified / District Museum in Toruń",
  "licenseName": "Public domain (PD-Art; PD-art-100)",
  "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
  "notes": "Anonymous portrait of Nicolaus Copernicus, circa 1580, from the Town Hall collection in Toruń. Painted after his death in 1543, it is a later representation, not a reliably documented portrait made during his lifetime.",
  "changes": "Cropped, resized to 900 × 1200, and converted to WebP.",
  "title": "Nikolaus Kopernikus"
}
}
}

export const zh: PersonTranslation = {
  "name": "尼古拉·哥白尼",
  "summary": "文艺复兴时期天文学家，建立地球自转并绕太阳运行的数学体系，深刻改变了关于天体结构的讨论。",
  "sections": [
    {
      "title": "跨越欧洲的求学",
      "paragraphs": [
        "哥白尼于 1473 年出生在托伦。父亲去世后，舅父卢卡斯·瓦岑罗德支持他的教育。他先在克拉科夫学习，后赴博洛尼亚和帕多瓦，将天文兴趣与法律、医学学习结合起来。1503 年，他在费拉拉取得教会法博士学位。他所受的教育并不限于天文学，也为承担教会机构内的实际职责作了准备。"
      ]
    },
    {
      "title": "教士的行政职责",
      "paragraphs": [
        "弗龙堡主教座堂的教士职位为他提供了生活来源。他还担任舅父的医疗顾问和秘书，并管理主教座堂教士会的地产。这些活动使他参与瓦尔米亚的政治与经济生活。他的天文研究与职业职责并行展开，而非在专门从事科学的现代研究机构中进行。"
      ]
    },
    {
      "title": "让地球进入运动体系",
      "paragraphs": [
        "他的体系用地球自转解释天空的每日视运动，并将地球列入绕太阳运行的行星之中。这重新组织了对行星运动的解释，不再以静止的地球作为中心参照。这是一项影响重大的数学主张，而不是现代天体力学的完整解释。后来的研究仍需修改模型细节并提供更多证据。"
      ]
    },
    {
      "title": "出版与传播",
      "paragraphs": [
        "《天体运行论》于 1543 年问世，同年哥白尼去世。该书的出版离不开支持者和中间人的帮助，包括格奥尔格·约阿希姆·雷蒂库斯和蒂德曼·吉泽。其主张是逐渐获得接受的，并未立即成为共识。数学上的异议、当时可用的观测和宗教解释共同影响了这场持续至他身后很久的争论。"
      ]
    },
    {
      "title": "后续发现的起点",
      "paragraphs": [
        "哥白尼并未提出开普勒的椭圆轨道或牛顿的引力理论。伽利略的望远镜观测，以及开普勒对第谷·布拉赫测量资料的运用，后来改变了证据和数学研究的格局。区分这些贡献，有助于理解这是一场众多研究者参与的历史变革。哥白尼的重要性，在于以运动的地球为关键，建立一套系统的天文学新方案。"
      ]
    }
  ],
  "timelineEvents": [
    "2 月 19 日出生于托伦。",
    "开始在克拉科夫学院学习。",
    "开始在博洛尼亚学习，在研习法律的同时关注天文学。",
    "在费拉拉取得教会法博士学位。",
    "管理瓦尔米亚主教座堂教士会的地产。",
    "舍恩贝格枢机主教敦促他出版天文学著作。",
    "《天体运行论》出版；哥白尼于 5 月 24 日在弗龙堡去世。"
  ],
  "imageNotes": "托伦市政厅馆藏的尼古拉·哥白尼肖像，作者未详，约绘于 1580 年。画作晚于他于 1543 年去世的时间，属于后世形象，并非有可靠记录的生前肖像。",
  "imageChanges": "已裁剪、缩放至 900 × 1200，并转换为 WebP 格式。"
}
