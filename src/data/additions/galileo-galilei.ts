import portrait from '../../assets/people/galileo-galilei.webp'
import type { HistoricalPerson } from '../../types/historicalPerson'
import type { PersonTranslation } from '../personTranslations'

export const person: HistoricalPerson = {
 image: portrait,
 ...{
  "id": "galileo-galilei",
  "name": "Galileo Galilei",
  "lifespan": "1564–1642",
  "summary": "Italian mathematician and natural philosopher whose studies of motion and telescopic observations reshaped astronomy and brought him into conflict with Church authorities.",
  "sections": [
    {
      "title": "From Pisa to Padua",
      "paragraphs": [
        "Born in Pisa in 1564, Galileo was the son of musician Vincenzo Galilei and Giulia Ammannati. He taught mathematics at Pisa before moving to Padua in 1592. There his interests included mechanics and practical instruments. Teaching, patronage and instrument-making supported a career in which mathematical reasoning was closely connected to experiments and material techniques."
      ]
    },
    {
      "title": "The telescope and new observations",
      "paragraphs": [
        "Galileo improved telescopes in 1609; he did not invent the instrument from nothing. His observations revealed an uneven lunar surface and four bodies orbiting Jupiter. Sidereus Nuncius publicized important findings in 1610. He also observed the phases of Venus. These discoveries challenged established accounts of the heavens, although individual observations did not by themselves settle every dispute about Earth's motion."
      ]
    },
    {
      "title": "Patronage and the Copernican debate",
      "paragraphs": [
        "In 1610 he became mathematician and philosopher to the Grand Duke of Tuscany. His support for a moving Earth led to disputes about astronomy and scriptural interpretation. In 1616 Cardinal Robert Bellarmine warned him against advocating Copernican astronomy. Galileo's religious commitments and relationships with churchmen make the conflict more complex than a simple opposition between all religion and all science."
      ]
    },
    {
      "title": "Trial and confinement",
      "paragraphs": [
        "The Dialogue Concerning the Two Chief World Systems appeared in 1632. The following year the Roman Inquisition condemned him and required him to abjure. His confinement eventually took the form of house arrest at Arcetri. The punishment restricted his freedom and circulation of his ideas, but did not end his intellectual activity. The famous defiant phrase about Earth still moving is not used here as a verified statement."
      ]
    },
    {
      "title": "Motion and the final work",
      "paragraphs": [
        "Two New Sciences was published in Leiden in 1638 as his eyesight failed. It brought together investigations of the strength of materials and motion, including mathematical treatment of falling bodies and projectiles. These studies contributed to later mechanics without containing all of Newton's subsequent theory. Galileo died at Arcetri in 1642, leaving writings and instruments that permit his achievements to be studied beyond the legends surrounding his life."
      ]
    }
  ],
  "timeline": [
    {
      "date": "1564",
      "event": "Born in Pisa on 15 February."
    },
    {
      "date": "1589",
      "event": "Takes up the mathematics chair at Pisa."
    },
    {
      "date": "1592",
      "event": "Moves to the mathematics chair at Padua."
    },
    {
      "date": "1609",
      "event": "Develops improved telescopes for observation."
    },
    {
      "date": "1610",
      "event": "Publishes Sidereus Nuncius and becomes mathematician and philosopher to the Tuscan grand duke."
    },
    {
      "date": "1616",
      "event": "Receives Bellarmine's warning concerning advocacy of Copernican astronomy."
    },
    {
      "date": "1632",
      "event": "Publishes the Dialogue Concerning the Two Chief World Systems."
    },
    {
      "date": "1633",
      "event": "Is condemned by the Roman Inquisition and eventually confined at Arcetri."
    },
    {
      "date": "1638",
      "event": "Two New Sciences is published in Leiden."
    },
    {
      "date": "1642",
      "event": "Dies at Arcetri on 8 January."
    }
  ],
  "sources": [
    {
      "title": "Galileo Galilei",
      "publisher": "Museo Galileo — Institute and Museum of the History of Science",
      "url": "https://catalogue.museogalileo.it/biography/GalileoGalilei.html"
    },
    {
      "title": "Life: Chronology of the main events of Galileo's biography",
      "publisher": "Museo Galileo",
      "url": "https://www.museogalileo.it/en/galileo/life.html"
    },
    {
      "title": "Galileo: A Biography",
      "publisher": "Museo Galileo",
      "url": "https://brunelleschi.imss.fi.it/itineraries/pdf/GalileoBiography.pdf"
    },
    {
      "title": "Instruments",
      "publisher": "Museo Galileo",
      "url": "https://www.museogalileo.it/en/galileo/instruments-en.html"
    }
  ],
  "imageAttribution": {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:Justus_Sustermans_-_Portrait_of_Galileo_Galilei_(Uffizi).jpg",
  "author": "Justus Sustermans / The Uffizi",
  "licenseName": "Public domain (PD-old-100)",
  "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
  "notes": "Portrait of Galileo Galilei by Justus Sustermans, dated 1635 by the Uffizi Galleries (inventory 1890 no. 745). A reproduction of an oil painting, not a photograph.",
  "changes": "Cropped, resized to 900 × 1200, and converted to WebP.",
  "title": "Portrait of Galileo Galilei"
}
}
}

export const zh: PersonTranslation = {
  "name": "伽利略·伽利莱",
  "summary": "意大利数学家、自然哲学家，对运动的研究和望远镜观测改变了天文学，也使他与教会当局发生冲突。",
  "sections": [
    {
      "title": "从比萨到帕多瓦",
      "paragraphs": [
        "伽利略于 1564 年出生在比萨，父亲是音乐家温琴佐·伽利莱，母亲是朱利娅·阿曼纳蒂。他先在比萨教授数学，1592 年转往帕多瓦。在那里，他关注力学和实用仪器。教学、资助和仪器制作支撑了他的事业，数学推理与实验、实际技术密切相连。"
      ]
    },
    {
      "title": "望远镜与新观测",
      "paragraphs": [
        "伽利略于 1609 年改进望远镜，并非从无到有发明这种仪器。他的观测揭示了月面的凹凸起伏，以及绕木星运行的四个天体。1610 年出版的《星际信使》公布了重要发现。他还观测到金星的相位。这些发现挑战了既有的天界解释，但单项观测本身并不能解决有关地球运动的一切争论。"
      ]
    },
    {
      "title": "资助与哥白尼学说之争",
      "paragraphs": [
        "1610 年，他成为托斯卡纳大公的数学家和哲学家。他支持地球运动，引发了关于天文学和《圣经》解释的争执。1616 年，罗伯特·贝拉尔米诺枢机主教警告他不得宣扬哥白尼天文学。伽利略本人的宗教信仰及其与教会人士的关系，说明这场冲突不能简化为全部宗教与全部科学的对立。"
      ]
    },
    {
      "title": "审判与软禁",
      "paragraphs": [
        "《关于托勒密和哥白尼两大世界体系的对话》于 1632 年出版。次年，罗马宗教裁判所对他作出判决，要求他放弃相关主张。他最终被软禁于阿切特里。这一惩罚限制了他的自由和思想传播，却没有终止其学术活动。这里不把那句关于地球仍在运动的著名抗辩，当作已经证实的本人言论。"
      ]
    },
    {
      "title": "运动研究与晚年著作",
      "paragraphs": [
        "随着视力衰退，伽利略的《关于两门新科学的谈话和数学证明》于 1638 年在莱顿出版。该书汇集材料强度与运动研究，包括对落体和抛射体的数学处理。这些研究推动了后来的力学发展，但并不包含牛顿随后建立的全部理论。伽利略于 1642 年在阿切特里去世，留下的著作与仪器使人们能够超越生平传说，研究其实际成就。"
      ]
    }
  ],
  "timelineEvents": [
    "2 月 15 日出生于比萨。",
    "出任比萨大学数学教授。",
    "转任帕多瓦大学数学教授。",
    "制作改进的望远镜用于观测。",
    "出版《星际信使》，成为托斯卡纳大公的数学家和哲学家。",
    "收到贝拉尔米诺关于不得宣扬哥白尼天文学的警告。",
    "出版《关于托勒密和哥白尼两大世界体系的对话》。",
    "受到罗马宗教裁判所判决，最终被软禁于阿切特里。",
    "《关于两门新科学的谈话和数学证明》在莱顿出版。",
    "1 月 8 日在阿切特里去世。"
  ],
  "imageNotes": "Justus Sustermans 绘制的伽利略·伽利莱肖像。乌菲齐美术馆将其纪年列为 1635 年（馆藏编号 1890 no. 745）。这是油画的复制图，并非照片。",
  "imageChanges": "已裁剪、缩放至 900 × 1200，并转换为 WebP 格式。"
}
