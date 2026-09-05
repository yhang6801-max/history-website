import portrait from '../../assets/people/archimedes.webp'
import type { HistoricalPerson } from '../../types/historicalPerson'
import type { PersonTranslation } from '../personTranslations'

export const person: HistoricalPerson = {
 image: portrait,
 ...{
  "id": "archimedes",
  "name": "Archimedes",
  "lifespan": "c. 287–212 BCE",
  "summary": "Mathematician and engineer of Syracuse whose work connected rigorous geometry with equilibrium, buoyancy and mechanical methods.",
  "sections": [
    {
      "title": "Syracuse and the limits of biography",
      "paragraphs": [
        "Archimedes lived in Syracuse in Sicily and died when Roman forces captured the city in 212 BCE. His birth around 287 BCE is a conventional estimate from much later evidence, not a securely recorded date. His own writings offer firmer evidence of his mathematical interests than popular anecdotes. His father Phidias is identified as an astronomer in The Sand Reckoner."
      ]
    },
    {
      "title": "Geometry through demonstration",
      "paragraphs": [
        "Using exhaustion arguments, Archimedes established results about areas and volumes without the later notation of calculus. On the Sphere and Cylinder compares these solids, while Measurement of a Circle bounds the ratio of circumference to diameter. These achievements relied on controlled approximation and proof. Describing him as a precursor of integral calculus should not erase the differences between ancient geometry and later mathematical analysis."
      ]
    },
    {
      "title": "Mechanics and war",
      "paragraphs": [
        "His writings investigate centres of gravity, the equilibrium of planes and floating bodies. Mechanical reasoning could suggest a result that still required a geometrical proof. Ancient accounts associate him with machines used in Syracuse's defence against Rome. The details of spectacular inventions and famous discovery stories are less secure than the mathematical works and should not be treated as contemporary eyewitness records."
      ]
    },
    {
      "title": "Recovering the written legacy",
      "paragraphs": [
        "The Archimedes Palimpsest preserves texts copied centuries after his death and later overwritten with prayers. Modern conservation and imaging recovered important readings, including material from The Method and the Stomachion. This manuscript shows how fragile the transmission of ancient science could be: our understanding depends both on what an author wrote and on what later copyists preserved and researchers recovered."
      ]
    }
  ],
  "timeline": [
    {
      "date": "Around 287 BCE",
      "event": "Conventionally estimated birth in Syracuse; the year is uncertain."
    },
    {
      "date": "3rd century BCE",
      "event": "Develops mathematical works on geometry, equilibrium and floating bodies; individual composition dates are uncertain."
    },
    {
      "date": "212 BCE",
      "event": "Dies during the Roman capture of Syracuse."
    }
  ],
  "sources": [
    {
      "title": "Archimedes of Syracuse",
      "publisher": "J. J. O’Connor and E. F. Robertson / MacTutor, University of St Andrews",
      "url": "https://mathshistory.st-andrews.ac.uk/Biographies/Archimedes/"
    },
    {
      "title": "Archimedes",
      "publisher": "Complete Dictionary of Scientific Biography / Charles Scribner's Sons",
      "url": "https://mathshistory.st-andrews.ac.uk/DSB/Archimedes.pdf"
    },
    {
      "title": "Overview: The Importance of the Palimpsest to the Study of Archimedes",
      "publisher": "Reviel Netz / The Archimedes Palimpsest",
      "url": "https://archimedespalimpsest.org/about/scholarship/archimedes-manuscript.php"
    }
  ],
  "imageAttribution": {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:Archimedes_Siracus._Photogravure_by_R._Paulussen_after_N._Barabino.jpg",
  "author": "R. Paulussen, after N. Barabino / Wellcome Library, London / Wellcome Images",
  "licenseName": "CC BY 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
  "notes": "Archimedes Siracus, a photogravure by R. Paulussen after N. Barabino, from the Wellcome Collection. This is a later artistic representation, not an authenticated lifetime likeness. Credit: Wellcome Library, London / Wellcome Images. Licensed CC BY 4.0.",
  "changes": "Cropped, resized to 900 × 1200, and converted to WebP.",
  "title": "Archimedes Siracus. Photogravure by R. Paulussen after N. Barabino",
  "credit": "Wellcome Library, London / Wellcome Images"
}
}
}

export const zh: PersonTranslation = {
  "name": "阿基米德",
  "summary": "叙拉古的数学家与工程师，将严密的几何研究与平衡、浮力及力学方法的探索联系起来。",
  "sections": [
    {
      "title": "叙拉古与生平史料的局限",
      "paragraphs": [
        "阿基米德生活于西西里岛的叙拉古，在罗马军队于公元前 212 年攻陷该城时去世。约公元前 287 年出生是依据很晚才出现的资料形成的通行估计，并非确切记载的日期。他本人的著作比流行轶事更能可靠地反映其数学兴趣。《数沙者》提到他的父亲菲迪亚斯是一位天文学家。"
      ]
    },
    {
      "title": "通过证明研究几何",
      "paragraphs": [
        "阿基米德运用穷竭论证研究面积和体积，当时尚无后来的微积分记号。《论球和圆柱》比较这两种立体，《圆的度量》则给出圆周与直径之比的上下界。这些成就依靠有控制的近似与证明。将他称为积分学的先驱，不应抹去古代几何与后来数学分析之间的区别。"
      ]
    },
    {
      "title": "力学与战争",
      "paragraphs": [
        "他的著作探讨重心、平面图形的平衡和浮体。力学推理可以提示一个结果，但结果仍需几何证明。古代记载将他与叙拉古抵抗罗马时使用的器械联系起来。某些神奇发明和著名发现故事的细节，不如数学著作可靠，不宜当作同时代的目击记录。"
      ]
    },
    {
      "title": "重现著作的传承",
      "paragraphs": [
        "《阿基米德重写本》保存了他去世数百年后抄录、后来又被祈祷文覆盖的文本。现代保护和成像技术恢复了重要内容，包括《方法》和《胃痛游戏》的部分文字。这部抄本体现出古代科学传播的脆弱性：我们对作者的理解，既取决于他写过什么，也取决于后世抄写者保存了什么，以及研究者恢复了什么。"
      ]
    }
  ],
  "timelineEvents": [
    "通常估计约在叙拉古出生，年份不确定。",
    "撰写有关几何、平衡与浮体的数学著作，各书具体写作年代不详。",
    "在罗马攻陷叙拉古时去世。"
  ],
  "imageNotes": "《Archimedes Siracus》，R. Paulussen 根据 N. Barabino 作品制作的照相凹版画，来自 Wellcome Collection。这是阿基米德的后世艺术形象，并非经过确证的生前肖像。署名：Wellcome Library, London / Wellcome Images。采用 CC BY 4.0 许可。",
  "imageChanges": "已裁剪、缩放至 900 × 1200，并转换为 WebP 格式。"
}
