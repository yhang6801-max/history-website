import portrait from '../../assets/people/werner-heisenberg.webp'
import type { HistoricalPerson } from '../../types/historicalPerson'
import type { PersonTranslation } from '../personTranslations'

export const person: HistoricalPerson = {
 image: portrait,
 ...{
  "id": "werner-heisenberg",
  "name": "Werner Heisenberg",
  "lifespan": "1901–1976",
  "summary": "A German physicist central to matrix mechanics and the uncertainty principle, whose career also included leadership in wartime nuclear research and postwar scientific institutions.",
  "sections": [
    {
      "title": "Training in a changing discipline",
      "paragraphs": [
        "Werner Heisenberg was born in Würzburg in 1901. He studied with Arnold Sommerfeld in Munich, completing a doctorate on turbulence in 1923, and worked with Max Born in Göttingen and Niels Bohr in Copenhagen. These centres connected mathematical methods with difficult questions about atomic spectra. His early career illustrates how the new quantum mechanics arose through intensive exchanges across institutions rather than within a single laboratory."
      ]
    },
    {
      "title": "Constructing matrix mechanics",
      "paragraphs": [
        "In 1925 Heisenberg developed a new calculation scheme based on quantities associated with atomic transitions rather than imagined classical electron paths. Born and Pascual Jordan recognized its matrix structure, and the three physicists developed the formalism together. The order of multiplication mattered, departing from ordinary numerical algebra. Matrix mechanics provided a workable framework for atomic problems and was subsequently connected with Schrödinger's wave formulation."
      ]
    },
    {
      "title": "Uncertainty and academic recognition",
      "paragraphs": [
        "Heisenberg formulated the uncertainty relation in 1927, the year he became a professor in Leipzig. Quantum theory places a limit on how narrowly the distributions of certain paired quantities, such as position and momentum, can both be defined in the same state. This is more than a statement about clumsy instruments. He received the Nobel Prize in Physics for 1932 for his contribution to quantum mechanics, while Born and Jordan's essential collaboration remained part of the theory's history."
      ]
    },
    {
      "title": "The German uranium project",
      "paragraphs": [
        "Heisenberg remained in Germany under Nazi rule and became a leading participant in the uranium project during the Second World War. He took over the Kaiser Wilhelm Institute for Physics in 1942. The project investigated nuclear energy, but Germany did not produce an atomic bomb during the war. Institutional records document technical and strategic limitations; they do not justify turning the outcome into an uncomplicated story of deliberate sabotage or moral resistance."
      ]
    },
    {
      "title": "Rebuilding research after the war",
      "paragraphs": [
        "After the war, Allied forces detained Heisenberg with other German nuclear scientists at Farm Hall in England. He returned to Germany in 1946 and directed the physics institute in Göttingen, later associated with Munich. He continued theoretical research and helped rebuild scientific institutions until his later years, dying in 1976. His scientific influence and his wartime responsibilities remain distinct but connected parts of his historical assessment."
      ]
    }
  ],
  "timeline": [
    {
      "date": "1901",
      "event": "Born in Würzburg."
    },
    {
      "date": "1923",
      "event": "Completed his doctorate in Munich and worked with Born in Göttingen."
    },
    {
      "date": "1925",
      "event": "Initiated the approach developed with Born and Jordan into matrix mechanics."
    },
    {
      "date": "1927",
      "event": "Formulated the uncertainty relation and became a professor in Leipzig."
    },
    {
      "date": "1932",
      "event": "Nobel Prize in Physics award year."
    },
    {
      "date": "1942",
      "event": "Took over the Kaiser Wilhelm Institute for Physics during wartime uranium research."
    },
    {
      "date": "1946",
      "event": "Returned to Germany after detention in England."
    },
    {
      "date": "1976",
      "event": "Died after a long career in theoretical physics and scientific administration."
    }
  ],
  "sources": [
    {
      "title": "Werner Heisenberg — Biography",
      "publisher": "MacTutor, University of St Andrews",
      "url": "https://mathshistory.st-andrews.ac.uk/Biographies/Heisenberg/"
    },
    {
      "title": "Time-line",
      "publisher": "Max Planck Institute for Physics",
      "url": "https://www.mpp.mpg.de/en/about-us/history/time-line/"
    },
    {
      "title": "Documents of the German uranium project, 1939–1945",
      "publisher": "Archives of the Max Planck Society",
      "url": "https://www.archiv-berlin.mpg.de/uranprojekt-en"
    },
    {
      "title": "German nuclear scientists express doubts about the feasibility of an atomic bomb",
      "publisher": "Max-Planck-Gesellschaft",
      "url": "https://www.mpg.de/947011/1942-german-nuclear-scientists-express-doubts-about-the-feasibility-of-an-atomic-bomb"
    }
  ],
  "imageAttribution": {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:Werner_Heisenberg_Portrait.jpg",
  "author": "Bundesarchiv, Bild 183-R57262 / Unknown author",
  "licenseName": "CC BY-SA 3.0 DE",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/de/",
  "notes": "Portrait photograph of Werner Heisenberg, dated 1933 in the archive caption. Credit: Bundesarchiv, Bild 183-R57262 / Unknown author / CC-BY-SA 3.0. This cropped version is shared under the same license.",
  "changes": "Cropped, resized to 900 × 1200, and converted to WebP.",
  "title": "Werner Heisenberg",
  "credit": "Bundesarchiv, Bild 183-R57262 / Unknown author / CC-BY-SA 3.0"
}
}
}

export const zh: PersonTranslation = {
  "name": "维尔纳·海森堡",
  "summary": "德国物理学家，对矩阵力学和不确定性原理作出核心贡献，也曾领导战时核研究并参与战后科学机构建设。",
  "sections": [
    {
      "title": "在变革中的学科里求学",
      "paragraphs": [
        "维尔纳·海森堡于 1901 年出生于维尔茨堡。他在慕尼黑师从阿诺德·索末菲，1923 年完成有关湍流的博士论文，又在哥廷根与马克斯·玻恩、在哥本哈根与尼尔斯·玻尔共事。这些中心把数学方法与原子光谱的难题联系起来。他的早期经历表明，新量子力学产生于跨机构的密切交流，而非单一实验室内部。"
      ]
    },
    {
      "title": "建立矩阵力学",
      "paragraphs": [
        "1925 年，海森堡建立新的计算方案，以与原子跃迁有关的量为基础，而不依靠想象中的电子经典轨迹。玻恩和帕斯夸尔·约尔当识别出其矩阵结构，三人共同发展了这一形式体系。乘法的先后次序会影响结果，这与普通数值代数不同。矩阵力学为原子问题提供了可用的框架，随后又与薛定谔的波动力学表述建立联系。"
      ]
    },
    {
      "title": "不确定性与学术荣誉",
      "paragraphs": [
        "海森堡于 1927 年提出不确定性关系，同年成为莱比锡的教授。量子理论限制了某些成对物理量，例如位置与动量，在同一状态中能够同时具有多窄的分布。这不只是有关仪器不够精良的说法。他因对量子力学的贡献获得 1932 年度诺贝尔物理学奖，而玻恩和约尔当不可缺少的合作仍是这一理论历史的一部分。"
      ]
    },
    {
      "title": "德国铀研究计划",
      "paragraphs": [
        "海森堡在纳粹统治时期留在德国，并在第二次世界大战期间成为铀研究计划的重要参与者。1942 年，他接掌威廉皇帝物理研究所。该计划研究核能，但德国在战争中没有造出原子弹。机构档案记录了技术与战略层面的限制；不能据此把结果简化成蓄意破坏计划或道德抵抗的故事。"
      ]
    },
    {
      "title": "战后重建研究",
      "paragraphs": [
        "战后，盟军将海森堡与其他德国核科学家拘留在英国的法姆霍尔。1946 年，他返回德国，领导哥廷根的物理研究所，该所后来迁往慕尼黑。他继续从事理论研究并帮助重建科学机构，1976 年去世。他的科学影响与战时责任，是历史评价中既应区分、又相互关联的两个方面。"
      ]
    }
  ],
  "timelineEvents": [
    "出生于维尔茨堡。",
    "在慕尼黑完成博士学位，并在哥廷根与玻恩共事。",
    "提出新方法，随后与玻恩、约尔当共同发展为矩阵力学。",
    "提出不确定性关系，并成为莱比锡的教授。",
    "诺贝尔物理学奖的获奖年度。",
    "在战时铀研究期间接掌威廉皇帝物理研究所。",
    "结束在英国的拘留后返回德国。",
    "去世，此前长期从事理论物理与科学管理工作。"
  ],
  "imageNotes": "维尔纳·海森堡的肖像照片，档案图注标注拍摄于 1933 年。署名：Bundesarchiv, Bild 183-R57262 / Unknown author / CC-BY-SA 3.0。本裁剪版本沿用相同许可。",
  "imageChanges": "已裁剪、缩放至 900 × 1200，并转换为 WebP 格式。"
}
