import portrait from '../../assets/people/antoine-lavoisier.webp'
import type { HistoricalPerson } from '../../types/historicalPerson'
import type { PersonTranslation } from '../personTranslations'

export const person: HistoricalPerson = {
 image: portrait,
 ...{
  "id": "antoine-lavoisier",
  "name": "Antoine Lavoisier",
  "lifespan": "1743–1794",
  "summary": "A French chemist who helped replace phlogiston theory with a quantitative account of combustion and developed new chemical language through collaboration.",
  "sections": [
    {
      "title": "Measurement and chemical change",
      "paragraphs": [
        "Antoine-Laurent Lavoisier made careful weighing central to an influential reform of chemistry. By following materials through reactions, including gases that could otherwise escape notice, he helped establish a quantitative account of chemical change. His work promoted conservation of mass in chemical reactions and challenged older accounts of combustion. It was a collective transformation involving new instruments, disputed experiments, revised language and the work of several chemists."
      ]
    },
    {
      "title": "A laboratory within public life",
      "paragraphs": [
        "Born in Paris in 1743, Lavoisier trained in law but pursued natural science. In 1768 he joined the Academy of Sciences and invested in the Ferme Générale, the private tax-collection organization serving the monarchy. His wealth helped support expensive research. Appointment to the Gunpowder Commission in 1775 brought him a laboratory at the Paris Arsenal, linking scientific work with state administration and military supply."
      ]
    },
    {
      "title": "Combustion, air and water",
      "paragraphs": [
        "Lavoisier interpreted combustion and the calcination of metals as combination with a component of air, which he called oxygen, rather than the release of phlogiston. The investigations of Joseph Priestley, Carl Wilhelm Scheele and other researchers were crucial to the wider study of gases. He also helped establish water as a compound rather than an elementary substance. His theoretical system was powerful but not infallible: oxygen is not, as its name originally suggested, essential to every acid."
      ]
    },
    {
      "title": "Collaboration and a new vocabulary",
      "paragraphs": [
        "Marie-Anne Paulze Lavoisier contributed to experiments, notebooks, scientific translation and illustrations of apparatus. In 1787 Lavoisier worked with Guyton de Morveau, Berthollet and Fourcroy on chemical nomenclature that connected names with composition. His Traité élémentaire de chimie appeared in 1789, presenting the new framework through systematic discussion and experimental descriptions. The laboratory's written and visual records helped others examine and communicate the proposed changes."
      ]
    },
    {
      "title": "Revolution and execution",
      "paragraphs": [
        "The French Revolution transformed the institutions and privileges on which Lavoisier's career had depended. As a member of the Ferme Générale, he was arrested during the Terror, tried by the Revolutionary Tribunal and executed on 8 May 1794. His scientific legacy survived through publications, instruments and the preservation of records. His career therefore belongs both to the history of chemical knowledge and to the fiscal and political structures of the old monarchy."
      ]
    }
  ],
  "timeline": [
    {
      "date": "1743",
      "event": "Born in Paris."
    },
    {
      "date": "1768",
      "event": "Joined the Academy of Sciences and the Ferme Générale."
    },
    {
      "date": "1775",
      "event": "Became a commissioner responsible for gunpowder production."
    },
    {
      "date": "1787",
      "event": "Collaborated on a new chemical nomenclature."
    },
    {
      "date": "1789",
      "event": "Published Traité élémentaire de chimie."
    },
    {
      "date": "1794",
      "event": "Tried and executed on 8 May."
    }
  ],
  "sources": [
    {
      "title": "The Chemical Revolution of Antoine-Laurent Lavoisier",
      "publisher": "American Chemical Society",
      "url": "https://www.acs.org/education/whatischemistry/landmarks/lavoisier.html"
    },
    {
      "title": "Antoine-Laurent Lavoisier",
      "publisher": "Science History Institute",
      "url": "https://www.sciencehistory.org/education/scientific-biographies/antoine-laurent-lavoisier/"
    }
  ],
  "imageAttribution": {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:David_-_Portrait_of_Monsieur_Lavoisier_(cropped).jpg",
  "author": "Jacques-Louis David / The Metropolitan Museum of Art",
  "licenseName": "Public domain (PD-Art; PD-old-100-expired)",
  "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
  "notes": "Detail of Jacques-Louis David's portrait of Antoine-Laurent Lavoisier and his wife Marie-Anne, held by The Metropolitan Museum of Art (1977.10). This extract depicts Antoine-Laurent; it is a painting, not a photograph. Commons marks the painting and faithful reproduction public domain.",
  "changes": "Cropped, resized to 900 × 1200, and converted to WebP.",
  "title": "Portrait of Monsieur de Lavoisier and his Wife, chemist Marie-Anne Pierrette Paulze"
}
}
}

export const zh: PersonTranslation = {
  "name": "安托万·拉瓦锡",
  "summary": "法国化学家，通过定量研究推动燃烧解释摆脱燃素说，并与合作者建立新的化学命名体系。",
  "sections": [
    {
      "title": "测量与化学变化",
      "paragraphs": [
        "安托万·洛朗·拉瓦锡将精确称量置于一场重要化学变革的中心。通过追踪反应中的物质，包括原本容易被忽略的气体，他推动了对化学变化的定量解释。他的工作推广了化学反应中质量守恒的观念，并挑战旧有的燃烧解释。这是一场集体变革，涉及新仪器、存在争议的实验、语言修订和多位化学家的工作。"
      ]
    },
    {
      "title": "公共事务中的实验室",
      "paragraphs": [
        "拉瓦锡于 1743 年出生在巴黎，虽接受法律训练，却投身自然科学。1768 年，他加入科学院，并投资为王室征税的私人包税组织。他的财富为昂贵的研究提供了支持。1775 年受任火药委员会委员后，他在巴黎兵工厂获得实验室，使科学研究与国家行政、军事供应联系在一起。"
      ]
    },
    {
      "title": "燃烧、空气与水",
      "paragraphs": [
        "拉瓦锡将燃烧和金属煅烧解释为与空气中的某种成分化合，他把这种成分称为氧，而不是认为反应释放了燃素。约瑟夫·普里斯特利、卡尔·威廉·舍勒及其他研究者的工作，对当时广泛开展的气体研究至关重要。他也帮助确立水是化合物而非基本元素的认识。他的理论体系很有解释力，却并非无误：氧并不像其名称最初暗示的那样，是所有酸必不可少的成分。"
      ]
    },
    {
      "title": "合作与新的化学语言",
      "paragraphs": [
        "玛丽-安娜·波尔兹·拉瓦锡参与了实验、笔记记录、科学翻译和仪器绘图。1787 年，拉瓦锡与居通·德·莫尔沃、贝托莱、富尔克鲁瓦合作制定化学命名法，将名称与组成联系起来。1789 年出版的《化学基础论》（Traité élémentaire de chimie），通过系统论述与实验描述呈现这一新框架。实验室的文字和图像记录，帮助其他人检视并传播这些变革。"
      ]
    },
    {
      "title": "革命与处决",
      "paragraphs": [
        "法国大革命改变了拉瓦锡事业所依赖的制度与特权。作为包税组织成员，他在恐怖统治期间被捕，经革命法庭审判后，于 1794 年 5 月 8 日被处决。他的科学遗产通过出版物、仪器与保存下来的记录延续。因此，他的生涯既属于化学知识史，也与旧王朝的财政和政治结构相连。"
      ]
    }
  ],
  "timelineEvents": [
    "出生于巴黎。",
    "加入科学院与包税组织。",
    "成为负责火药生产的委员会成员。",
    "与同事合作制定新的化学命名法。",
    "出版《化学基础论》（Traité élémentaire de chimie）。",
    "5 月 8 日受审并被处决。"
  ],
  "imageNotes": "Jacques-Louis David 所绘拉瓦锡与妻子玛丽-安娜肖像的局部，原画藏于 The Metropolitan Museum of Art（1977.10）。本局部描绘安托万-洛朗·拉瓦锡，是绘画而非照片。Commons 将画作及其忠实复制标为公有领域。",
  "imageChanges": "已裁剪、缩放至 900 × 1200，并转换为 WebP 格式。"
}
