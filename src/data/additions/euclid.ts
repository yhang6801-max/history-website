import portrait from '../../assets/people/euclid.webp'
import type { HistoricalPerson } from '../../types/historicalPerson'
import type { PersonTranslation } from '../personTranslations'

export const person: HistoricalPerson = {
 image: portrait,
 ...{
  "id": "euclid",
  "name": "Euclid",
  "lifespan": "Active around 300 BCE",
  "summary": "Greek mathematician associated with Alexandria whose Elements organized geometry and number theory into an enduring deductive system.",
  "sections": [
    {
      "title": "A life known through later evidence",
      "paragraphs": [
        "Euclid is usually placed in Alexandria around 300 BCE. Secure details of his birth, family and death are lacking. Much of the familiar biographical tradition comes from writers who lived centuries later, including Proclus. Euclid the mathematician should not be confused with the earlier philosopher Euclid of Megara; confident-looking birth and death dates can conceal the limits of the evidence."
      ]
    },
    {
      "title": "The organization of the Elements",
      "paragraphs": [
        "The thirteen books of the Elements treat plane and solid geometry, proportion and properties of numbers. Definitions and initial assumptions support sequences of propositions and proofs. Euclid drew on earlier Greek mathematics, including work associated with Eudoxus and Theaetetus. His achievement was therefore not the solitary invention of every result, but the arrangement and development of a coherent mathematical exposition."
      ]
    },
    {
      "title": "Beyond a single textbook",
      "paragraphs": [
        "Other surviving works attributed to Euclid include the Data, Optics and Phaenomena. Their subjects extend from the conditions needed to determine geometrical objects to vision and spherical astronomy. They reveal the wider range of ancient mathematical investigation, although uncertainty about Euclid's life makes it difficult to reconstruct a precise sequence of his research or teaching."
      ]
    },
    {
      "title": "Manuscripts and a lasting legacy",
      "paragraphs": [
        "The Elements reached later readers through copying, editing, commentary and translation rather than an author's surviving manuscript. A Greek copy made in Constantinople in 888 by Stephen the Clerk for Arethas of Patras preserves all thirteen books. The first printed edition appeared in 1482. This long transmission helped make Euclid a central reference for mathematical education, while also requiring scholars to distinguish ancient text from later editorial layers."
      ]
    }
  ],
  "timeline": [
    {
      "date": "Around 300 BCE",
      "event": "Traditionally placed in Alexandria around this period; the Elements is associated with his mathematical work."
    },
    {
      "date": "888",
      "event": "A later Greek manuscript of all thirteen books is copied in Constantinople for Arethas of Patras."
    },
    {
      "date": "1482",
      "event": "The first printed edition of the Elements appears, long after Euclid's lifetime."
    }
  ],
  "sources": [
    {
      "title": "Euclid — Biography",
      "publisher": "J. J. O’Connor and E. F. Robertson / MacTutor, University of St Andrews",
      "url": "https://mathshistory.st-andrews.ac.uk/Biographies/Euclid/"
    },
    {
      "title": "Euclid's Elements",
      "publisher": "Clay Mathematics Institute",
      "url": "https://www.claymath.org/online-resources/euclids-elements/"
    }
  ],
  "imageAttribution": {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:Euclid_Wellcome_M0004267.jpg",
  "author": "Artist not identified / Wellcome Library, London / Wellcome Images",
  "licenseName": "CC BY 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
  "notes": "A later representation identified as Euclid in the Wellcome Collection, image M0004267. It is not an authenticated likeness made during his lifetime. The file page does not identify the artist. Credit: Wellcome Library, London / Wellcome Images. Licensed CC BY 4.0.",
  "changes": "Cropped, resized to 900 × 1200, and converted to WebP.",
  "title": "Euclid",
  "credit": "Wellcome Library, London / Wellcome Images"
}
}
}

export const zh: PersonTranslation = {
  "name": "欧几里得",
  "summary": "与亚历山大城相关的古希腊数学家，其《几何原本》将几何学与数论组织为影响深远的演绎体系。",
  "sections": [
    {
      "title": "后世记载中的生平",
      "paragraphs": [
        "欧几里得通常被认为于约公元前 300 年在亚历山大城活动。他的出生、家庭和去世情况缺少确切资料。许多广为流传的生平说法来自数百年后的作者，包括普罗克洛斯。数学家欧几里得不应与更早的哲学家麦加拉的欧几里得混为一谈；看似精确的生卒年可能掩盖史料的局限。"
      ]
    },
    {
      "title": "《几何原本》的组织方式",
      "paragraphs": [
        "《几何原本》十三卷讨论平面与立体几何、比例以及数的性质。定义和初始假设支撑起一系列命题与证明。欧几里得吸收了更早的希腊数学成果，包括与欧多克索斯和泰阿泰德相关的工作。因此，他的成就并非独自发明书中每项结果，而是组织、发展出一套连贯的数学论述。"
      ]
    },
    {
      "title": "不止于一部教科书",
      "paragraphs": [
        "传世且归于欧几里得名下的其他著作包括《已知数》《光学》和《现象》。其内容涉及确定几何对象所需的条件、视觉和球面天文学。这些作品呈现了古代数学研究更广的范围，但由于生平资料不确定，很难准确重建他的研究或教学顺序。"
      ]
    },
    {
      "title": "抄本传承与长久影响",
      "paragraphs": [
        "《几何原本》通过抄写、编辑、注释和翻译传至后世，并没有保存下来的作者手稿。888 年，书记员斯蒂芬在君士坦丁堡为帕特雷的阿雷塔斯抄写的希腊文抄本保存了全部十三卷。第一部印刷版于 1482 年问世。这种长期传承使欧几里得成为数学教育的重要参照，也要求学者区分古代文本与后来的编辑层次。"
      ]
    }
  ],
  "timelineEvents": [
    "传统上认为他约在这一时期于亚历山大城活动，《几何原本》与其数学工作相关。",
    "后世在君士坦丁堡为帕特雷的阿雷塔斯抄写了一部包含全部十三卷的希腊文抄本。",
    "在欧几里得生活的时代之后很久，《几何原本》的第一部印刷版问世。"
  ],
  "imageNotes": "Wellcome Collection 标识为欧几里得的后世形象，图片编号 M0004267，并非经过确证的生前容貌。文件页未列出画家。署名：Wellcome Library, London / Wellcome Images。采用 CC BY 4.0 许可。",
  "imageChanges": "已裁剪、缩放至 900 × 1200，并转换为 WebP 格式。"
}
