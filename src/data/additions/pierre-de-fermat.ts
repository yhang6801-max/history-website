import portrait from '../../assets/people/pierre-de-fermat.webp'
import type { HistoricalPerson } from '../../types/historicalPerson'
import type { PersonTranslation } from '../personTranslations'

export const person: HistoricalPerson = {
 image: portrait,
 ...{
  "id": "pierre-de-fermat",
  "name": "Pierre de Fermat",
  "lifespan": "17th century",
  "summary": "French magistrate and mathematician whose work on numbers, curves and chance helped shape number theory, analytic geometry and probability.",
  "sections": [
    {
      "title": "A legal career alongside mathematics",
      "paragraphs": [
        "Pierre de Fermat was born in Beaumont-de-Lomagne in the early seventeenth century. His exact birth date remains disputed, so a precise year should not be treated as settled. Trained in law, he became a councillor in the Parlement of Toulouse in 1631. This was a court of justice, not a modern elected parliament. Mathematics occupied his intellectual life alongside a long judicial career."
      ]
    },
    {
      "title": "Curves, tangents and correspondence",
      "paragraphs": [
        "Fermat related geometrical curves to algebraic equations independently of Descartes. His methods for maxima, minima and tangents were important predecessors of differential calculus, although they were not the later unified calculus of Newton and Leibniz. Much of his research circulated through letters rather than systematic books. Contact with Marin Mersenne in 1636 brought his problems and methods into a wider European mathematical exchange."
      ]
    },
    {
      "title": "Number theory and the limits of a claim",
      "paragraphs": [
        "Fermat explored properties of integers, primes and squares, drawing inspiration from Diophantus. He used infinite descent: an assumed solution would imply a smaller one, and repeatedly descending through positive integers would lead to a contradiction. He left influential assertions and challenges, but did not leave full demonstrations for all of them. Later proofs by other mathematicians must not be presented as his own completed work.",
        "The statement later called Fermat's Last Theorem rules out positive integer solutions to x^n + y^n = z^n when the integer exponent n is greater than 2. A marginal annotation attributed to Fermat claimed a proof without supplying it. No general proof by him is known. His name on the theorem records the historical claim, not a surviving proof of the full result."
      ]
    },
    {
      "title": "Probability and optics",
      "paragraphs": [
        "In 1654 Fermat and Blaise Pascal exchanged letters about games of chance, including how to divide the stakes when a game is interrupted. Their complementary methods helped establish mathematical probability; this was a collaborative development with earlier precedents, not a subject invented by one person alone. Fermat also investigated optics, relating the path of light to travel time. These contributions extended the reach of his mathematical reasoning beyond questions about whole numbers."
      ]
    },
    {
      "title": "Death, publication and later influence",
      "paragraphs": [
        "Fermat died in Castres on 12 January 1665. His son Samuel helped bring his writings to a wider readership after his death; the 1670 edition of Diophantus included his annotations. The mixture of methods, results and unproved challenges made his legacy productive but also demanded careful checking by later mathematicians.",
        "A complete proof of Fermat's Last Theorem was finally published in 1995. Andrew Wiles's main paper was accompanied by a joint paper with Richard Taylor that resolved a gap in the argument. This achievement used mathematical theories developed long after Fermat's lifetime. It should be credited to that later work rather than used to imply that Fermat's missing proof has been recovered."
      ]
    }
  ],
  "timeline": [
    {
      "date": "Early 17th century",
      "event": "Born in Beaumont-de-Lomagne; the exact birth date is disputed."
    },
    {
      "date": "1631",
      "event": "Becomes a councillor in the Parlement of Toulouse, combining a judicial career with mathematical research."
    },
    {
      "date": "1636",
      "event": "Begins his correspondence with Marin Mersenne and shares mathematical problems and methods."
    },
    {
      "date": "1654",
      "event": "Corresponds with Blaise Pascal on games of chance and the division of stakes."
    },
    {
      "date": "1665",
      "event": "Dies in Castres on 12 January."
    },
    {
      "date": "1670",
      "event": "His annotations appear in an edition of Diophantus published after his death through his son Samuel."
    },
    {
      "date": "1995",
      "event": "Wiles publishes a proof of Fermat's Last Theorem, completed with a companion paper by Taylor and Wiles."
    }
  ],
  "sources": [
    {
      "title": "Pierre de Fermat",
      "publisher": "MacTutor History of Mathematics, University of St Andrews; J. J. O'Connor and E. F. Robertson",
      "url": "https://mathshistory.st-andrews.ac.uk/Biographies/Fermat/"
    },
    {
      "title": "Pierre de Fermat",
      "publisher": "Musée Fermat",
      "url": "https://www.museefermat.com/pierre-de-fermat/"
    },
    {
      "title": "Pierre de Fermat — A Short Account of the History of Mathematics (1908)",
      "publisher": "W. W. Rouse Ball; hosted by Trinity College Dublin",
      "url": "https://www.maths.tcd.ie/pub/HistMath/People/Fermat/RouseBall/RB_Fermat.html"
    },
    {
      "title": "Fermat's last theorem",
      "publisher": "MacTutor History of Mathematics, University of St Andrews",
      "url": "https://mathshistory.st-andrews.ac.uk/HistTopics/Fermat's_last_theorem/"
    },
    {
      "title": "Published Proof of Fermat's Last Theorem",
      "publisher": "University of Toronto Mathematics Network",
      "url": "https://www.math.toronto.edu/mathnet/questionCorner/fermatstatus.html"
    }
  ],
  "imageAttribution": {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:Fermat_hochgehängt.JPG",
  "author": "Rolland Lefebvre (painting); Klaus Barner (photograph, 2005)",
  "licenseName": "CC BY-SA 3.0 (photograph); public-domain painting",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
  "notes": "Portrait de Pierre de Fermat, attributed to Rolland Lefebvre and dated 1640–1675 in the French Ministry of Culture catalogue (Narbonne, inventory 851.3.3). The painting's author died in 1677. Klaus Barner's 2005 photograph is separately released under CC BY-SA 3.0; the same license applies to this site's adapted image.",
  "changes": "Cropped, resized to 900 × 1200, and converted to WebP.",
  "title": "Portrait de Pierre de Fermat"
}
}
}

export const zh: PersonTranslation = {
  "name": "皮埃尔·德·费马",
  "summary": "法国法官与数学家，对整数、曲线和机遇问题的研究推动了数论、解析几何与概率论的发展。",
  "sections": [
    {
      "title": "司法工作与数学研究",
      "paragraphs": [
        "皮埃尔·德·费马于 17 世纪初出生在博蒙德洛马涅。他的确切出生日期仍有争议，不宜将某个具体年份视为定论。他接受过法律教育，于 1631 年成为图卢兹高等法院的法官。这里的 Parlement 是司法机构，并非现代民选议会。在漫长的司法生涯之外，数学也是他持续投入的重要领域。"
      ]
    },
    {
      "title": "曲线、切线与书信交流",
      "paragraphs": [
        "费马独立于笛卡尔，将几何曲线与代数方程联系起来。他研究极大值、极小值和切线的方法是微分学的重要先驱，但还不是后来牛顿与莱布尼茨建立的统一微积分体系。他的许多研究通过书信传播，而非以系统专著出版。1636 年与马兰·梅森建立联系后，他提出的问题与方法进入了更广泛的欧洲数学交流网络。"
      ]
    },
    {
      "title": "数论探索与证明的界限",
      "paragraphs": [
        "费马从丢番图的著作中获得启发，研究整数、素数与平方数的性质。他运用无穷递降法：假设存在一个解，再由此推出一个更小的解；若能在正整数中不断递降，就会产生矛盾。他留下了许多影响深远的断言与挑战题，但并未为所有结论留下完整证明。后世数学家完成的证明，不能归为费马本人已经完成的工作。",
        "后来称为费马大定理的命题指出，当整数指数 n 大于 2 时，方程 x^n + y^n = z^n 不存在正整数解。一则归于费马的页边批注声称已有证明，却没有给出证明内容。目前没有已知的费马一般性证明。定理以他命名，反映的是这一历史命题的提出，而不是一份留存至今的完整证明。"
      ]
    },
    {
      "title": "概率与光学",
      "paragraphs": [
        "1654 年，费马与布莱兹·帕斯卡通过书信讨论机遇游戏，其中包括游戏中断后应如何分配赌注。他们相互补充的方法推动了数学概率论的建立；这一发展既包含合作，也有更早的研究先例，不能归功于某一个人独自创立了整个学科。费马还研究光学，将光的传播路径与所需时间联系起来。这些贡献使他的数学推理超出了整数问题的范围。"
      ]
    },
    {
      "title": "身后出版与持续影响",
      "paragraphs": [
        "费马于 1665 年 1 月 12 日在卡斯特尔去世。他的儿子萨缪尔帮助整理并传播其遗稿；1670 年出版的丢番图著作版本收录了费马的批注。他留下的方法、结论与未证问题激发了后续研究，也要求后世数学家对它们逐一核查。",
        "费马大定理的完整证明最终于 1995 年发表。安德鲁·怀尔斯的主要论文与他和理查德·泰勒合著的配套论文共同完成了证明，后者修补了论证中的缺口。这一成果依靠费马时代之后才发展起来的数学理论，应归功于后来的研究，不能据此声称费马遗失的证明已被找回。"
      ]
    }
  ],
  "timelineEvents": [
    "出生于博蒙德洛马涅，确切出生日期存在争议。",
    "成为图卢兹高等法院法官，在司法工作之外从事数学研究。",
    "开始与马兰·梅森通信，交流数学问题与方法。",
    "与布莱兹·帕斯卡通信，讨论机遇游戏与赌注分配。",
    "1 月 12 日在卡斯特尔去世。",
    "儿子萨缪尔在他去世后出版的丢番图著作版本中收录其批注。",
    "怀尔斯发表费马大定理的证明，并由泰勒与怀尔斯合著的配套论文补全。"
  ],
  "imageNotes": "Portrait de Pierre de Fermat（《皮埃尔·德·费马肖像》），法国文化部馆藏目录署名 Rolland Lefebvre，纪年为 1640—1675 年（纳博讷，馆藏编号 851.3.3）。画家于 1677 年去世。Klaus Barner 于 2005 年拍摄的照片另采用 CC BY-SA 3.0 许可；本站处理后的图片沿用该许可。",
  "imageChanges": "已裁剪、缩放至 900 × 1200，并转换为 WebP 格式。"
}
