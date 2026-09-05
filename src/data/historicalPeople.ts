import { additionalPeople } from './additionalPeople.ts'
import marieCurieImage from '../assets/people/marie-curie.webp'
import isaacNewtonImage from '../assets/people/isaac-newton.webp'
import abrahamLincolnImage from '../assets/people/abraham-lincoln.webp'
import georgeWashingtonImage from '../assets/people/george-washington.webp'
import yangChenNingImage from '../assets/people/yang-chen-ning.webp'
import luXunImage from '../assets/people/lu-xun.webp'
import duFuImage from '../assets/people/du-fu.webp'
import liBaiImage from '../assets/people/li-bai.webp'
import sunYatSenImage from '../assets/people/sun-yat-sen.webp'
import yongleEmperorImage from '../assets/people/yongle-emperor.webp'
import hongwuEmperorImage from '../assets/people/hongwu-emperor.webp'
import emperorWuOfHanImage from '../assets/people/emperor-wu-of-han.webp'
import emperorTaizongOfTangImage from '../assets/people/emperor-taizong-of-tang.webp'
import qinShiHuangImage from '../assets/people/qin-shi-huang.webp'
import confuciusImage from '../assets/people/confucius.webp'
import { person as stalinPerson } from './additions/joseph-stalin.ts'
import juliusCaesarImage from '../assets/people/julius-caesar.webp'
import napoleonBonaparteImage from '../assets/people/napoleon-bonaparte.webp'
import type { HistoricalPerson } from '../types/historicalPerson'

export const historicalPeople: readonly HistoricalPerson[] = [
  ...additionalPeople,
  {
    id: 'napoleon-bonaparte',
    name: 'Napoleon Bonaparte',
    image: napoleonBonaparteImage,
    imageAttribution: {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:Jacques-Louis_David_-_Portrait_of_General_Bonaparte_-_WGA06077.jpg",
  "author": "Jacques-Louis David",
  "licenseName": "Public domain (Public Domain Mark 1.0)",
  "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
  "notes": "“Portrait of General Bonaparte”, image source: Web Gallery of Art. Commons identifies it as public domain under PD-Art (PD-old-100): the artist died in 1825, beyond the life-plus-100-year term; faithful reproductions of two-dimensional public-domain works are also considered public domain in the United States.",
  "changes": "Cropped, resized to 900 × 1200, and converted to WebP.",
  "title": "Portrait of General Bonaparte"
},
    lifespan: '1769–1821',
    summary:
      'A revolutionary general who became emperor, reshaped the French state, and brought much of Europe under French power before his final defeat.',
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'Napoleon Bonaparte rose from a provincial artillery officer to become First Consul and then Emperor of the French. His armies overturned the European balance of power, while his government consolidated several gains of the French Revolution through a centralized administration, a reorganized education system, and the Civil Code. His career joined exceptional military and political ability to authoritarian rule and almost continuous warfare. That combination explains why he has been remembered both as a modernizing statesman and as a conqueror whose ambitions imposed immense costs on France, Europe, and colonial societies.',
        ],
      },
      {
        title: 'Early life and background',
        paragraphs: [
          'Napoleon was born on 15 August 1769 in Ajaccio, Corsica, shortly after the island passed from Genoese to French control. His family belonged to the minor Corsican nobility and secured him places at schools in mainland France. He studied at Brienne and the École Militaire in Paris, trained in artillery, and received his commission in 1785. The Revolution opened opportunities for talented junior officers. After conflict between his family and the Corsican leader Pasquale Paoli forced the Bonapartes to leave the island in 1793, Napoleon committed his future to France.',
        ],
      },
      {
        title: 'Rise to power',
        paragraphs: [
          'Napoleon first attracted national attention at the siege of Toulon in 1793, where his artillery plan helped republican forces recover the port and earned him promotion to brigadier general. In October 1795 he helped suppress a royalist uprising in Paris. Appointed commander of the Army of Italy in 1796, he defeated larger Austrian and allied forces through speed, concentration, and aggressive maneuver, while carefully publicizing his victories. The Egyptian expedition of 1798 sought to damage British interests and encouraged important scholarship, but its naval and Syrian setbacks exposed strategic limits. Returning to an unstable France, Napoleon helped overthrow the Directory in the coup of 18 Brumaire, 9 November 1799, and became First Consul.',
        ],
      },
      {
        title: 'Campaigns and political achievements',
        paragraphs: [
          'As First Consul, Napoleon defeated Austria at Marengo in 1800 and stabilized his authority through constitutional plebiscites that increasingly concentrated power in his hands. His government founded the Bank of France, appointed prefects to administer departments, expanded state secondary schools, reached the Concordat of 1801 with the papacy, and promulgated the Civil Code in 1804. Crowned emperor on 2 December 1804, he won celebrated victories at Austerlitz, Jena-Auerstedt, Friedland, and Wagram. Yet British naval superiority after Trafalgar frustrated invasion plans, and the Continental System failed to isolate Britain without harming European economies. The Peninsular War became a draining occupation marked by guerrilla resistance and atrocities, while the 1812 invasion of Russia ended in a catastrophic retreat. Defeat at Leipzig in 1813 left France exposed to invasion.',
        ],
      },
      {
        title: 'Leadership and historical significance',
        paragraphs: [
          'Napoleon excelled at organizing armies, reading operational situations, and moving forces rapidly enough to defeat separated opponents. He rewarded talent and inspired loyalty, but he also demanded obedience and increasingly underestimated political resistance, logistics, and the capacity of enemies to adapt. At home he made careers more open to ability, regularized taxation and law, and built institutions that outlasted his regime. At the same time, censorship, police surveillance, managed elections, and dynastic appointments contradicted representative ideals. His state preserved selected revolutionary principles while placing them under a personal and highly centralized monarchy.',
        ],
      },
      {
        title: 'Defeat, exile, and death',
        paragraphs: [
          'After coalition armies entered Paris, Napoleon abdicated in April 1814 and was sent to rule the island of Elba. He escaped in February 1815, returned to France, and regained power during the Hundred Days. His final campaign ended when allied armies under Wellington and Blücher defeated him at Waterloo on 18 June. He abdicated again and surrendered to the British, who exiled him to remote Saint Helena. Napoleon spent his final years dictating accounts that helped shape his legend. He died there on 5 May 1821 after a prolonged illness; stomach disease is the leading explanation, although aspects of his health and treatment have continued to attract debate.',
        ],
      },
      {
        title: 'Legacy and controversies',
        paragraphs: [
          'Napoleon’s legal and administrative settlement influenced states far beyond France, and the Civil Code remains central to many legal traditions. His campaigns spread reforms, weakened some aristocratic privileges, stimulated nationalism, and redrew borders, but occupation frequently meant conscription, taxation, coercion, and cultural plunder. In 1802 his government restored slavery in French colonies where revolutionary legislation had abolished it, a decision inseparable from violent attempts to recover imperial control in the Caribbean. The wars killed and displaced enormous numbers of soldiers and civilians. Admirers emphasize merit, state capacity, and military genius; critics emphasize dictatorship, colonial restoration, and expansionist war. Both are essential to understanding his enduring importance.',
        ],
      },
    ],
    timeline: [
      {
        date: '1769',
        event: 'Born in Ajaccio, Corsica, on 15 August.',
      },
      {
        date: '1785',
        event: 'Commissioned as an artillery officer after studying in Paris.',
      },
      {
        date: '1793–1795',
        event:
          'Rose through the republican army after Toulon and the suppression of a royalist uprising in Paris.',
      },
      {
        date: '1796–1797',
        event:
          'Led the victorious first Italian campaign and became a national political figure.',
      },
      {
        date: '1799',
        event:
          'Participated in the coup of 18 Brumaire and became First Consul.',
      },
      {
        date: '1804',
        event:
          'Promulgated the Civil Code and was crowned Emperor of the French.',
      },
      {
        date: '1805–1809',
        event:
          'Won major victories including Austerlitz, Jena-Auerstedt, Friedland, and Wagram.',
      },
      {
        date: '1812–1814',
        event:
          'The Russian disaster and coalition victories led to his first abdication and exile to Elba.',
      },
      {
        date: '1815–1821',
        event:
          'Returned for the Hundred Days, lost at Waterloo, and died in exile on Saint Helena.',
      },
    ],
    sources: [
      {
        title: 'Napoleon I',
        publisher: 'Encyclopaedia Britannica',
        url: 'https://www.britannica.com/biography/Napoleon-I',
      },
      {
        title: 'Timeline: Consulate/First French Empire',
        publisher: 'Fondation Napoléon',
        url: 'https://www.napoleon.org/en/young-historians/napodoc/timeline-consulate1st-french-empire/',
      },
      {
        title: 'Napoléon I, Emperor of the French',
        publisher: 'The British Museum',
        url: 'https://www.britishmuseum.org/collection/term/BIOG39862',
      },
      {
        title: 'The Arts Under Napoleon',
        publisher: 'The Metropolitan Museum of Art',
        url: 'https://resources.metmuseum.org/resources/metpublications/pdf/The_Arts_Under_Napoleon.pdf',
      },
    ],
  },
  {
    id: 'julius-caesar',
    name: 'Julius Caesar',
    image: juliusCaesarImage,
    imageAttribution: {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:Julius_Caesar_Coustou_Louvre_MR1798.jpg",
  "author": "Nicolas Coustou (sculpture); Marie-Lan Nguyen / Jastrow (photograph, 2006)",
  "authorUrl": "https://commons.wikimedia.org/wiki/User:Jastrow",
  "licenseName": "Public-domain sculpture; PD-self (photograph)",
  "licenseUrl": "https://commons.wikimedia.org/wiki/Template:PD-self",
  "notes": "Jules César, a later commemorative sculpture by Nicolas Coustou (1658–1733), Louvre MR 1798. The museum dates the marble to 1696–1722; 1696 refers to the model, while the statue bears a 1722 signature. It is not a portrait made during Caesar's lifetime. Marie-Lan Nguyen made the photograph in 2006 and released it under PD-self, separately from the expired rights in the sculpture.",
  "changes": "Cropped from the full sculpture photograph, resized to 900 × 1200, and converted to WebP.",
  "title": "Jules César"
},
    lifespan: '100–44 BCE',
    summary:
      'A Roman general, politician, and author whose conquests and dictatorship transformed the late Republic and prepared the way for imperial rule.',
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'Gaius Julius Caesar combined military command, popular politics, literary skill, and personal ambition with extraordinary effect. His conquest of Gaul greatly expanded Roman power and gave him the army, wealth, and reputation needed to challenge his rivals. Victory in the civil war made him Rome’s dominant ruler, and his dictatorship produced lasting reforms while breaking republican conventions. Senators who feared permanent monarchy assassinated him in 44 BCE, but they did not restore the old political order. The ensuing wars elevated his adopted heir Octavian, the future Augustus, and made Caesar’s name an enduring title of sovereignty.',
        ],
      },
      {
        title: 'Early life and background',
        paragraphs: [
          'Caesar was born in July 100 BCE, traditionally on the twelfth or thirteenth day, into the patrician Julii. The family possessed ancient prestige but was not then among Rome’s most powerful houses. Through his aunt Julia and his marriage to Cornelia, Caesar was connected to the faction of Gaius Marius and Lucius Cornelius Cinna. The dictator Sulla ordered him to divorce Cornelia; Caesar refused, lost property and office, and briefly went into hiding. He later served in Asia Minor, won military distinction, studied rhetoric, and returned to pursue the sequence of elected offices expected of an ambitious Roman aristocrat.',
        ],
      },
      {
        title: 'Rise to power',
        paragraphs: [
          'Caesar advanced through the quaestorship, aedileship, and praetorship, often spending heavily to build public support. His election as pontifex maximus in 63 BCE gave him a prestigious lifetime priesthood. After governing Further Spain, he returned to seek the consulship for 59 BCE. He formed an informal political alliance with Pompey, Rome’s most celebrated general, and the immensely wealthy Crassus—an arrangement later called the First Triumvirate. As consul, Caesar forced through legislation benefiting his allies and secured a long provincial command in Gaul. The alliance bypassed senatorial opposition, but it depended on personal interests rather than a durable constitutional settlement.',
        ],
      },
      {
        title: 'Campaigns and political achievements',
        paragraphs: [
          'From 58 to 50 BCE Caesar conquered most of Gaul through campaigns against numerous peoples, crossed the Rhine, and led two expeditions to Britain. The siege of Alesia in 52 BCE, where Roman forces defeated the coalition led by Vercingetorix, became his defining victory. Caesar narrated the wars in polished commentaries that remain invaluable evidence but also presented his choices to Roman readers in the most favorable light. After Crassus died and Pompey aligned more closely with Caesar’s senatorial opponents, disputes over Caesar’s command became a constitutional crisis. He crossed the Rubicon with troops in January 49 BCE, beginning civil war. He defeated Pompey at Pharsalus in 48, intervened in Egypt alongside Cleopatra VII, and overcame remaining opposition at Zela, Thapsus, and Munda.',
        ],
      },
      {
        title: 'Leadership and historical significance',
        paragraphs: [
          'Caesar inspired unusual loyalty by sharing danger, rewarding soldiers, and acting rapidly when opponents hesitated. He could be pragmatic and famously offered clemency to some defeated Romans, although that policy also advertised his superior position. As dictator he reformed the calendar, adjusted debt and taxation arrangements, founded colonies for veterans and poorer citizens, expanded citizenship, and enlarged the Senate. Many measures addressed genuine problems created by conquest and social inequality. Yet repeated dictatorships, control over elections, accumulated honors, and the title dictator for life made republican competition increasingly symbolic and convinced enemies that his supremacy would become permanent.',
        ],
      },
      {
        title: 'Assassination and aftermath',
        paragraphs: [
          'On 15 March 44 BCE—the Ides of March—a group of senators led by figures including Brutus and Cassius attacked Caesar during a Senate meeting in the complex of Pompey’s theatre. The conspirators described the killing as an act against tyranny, but they had no effective plan for governing afterward. Caesar’s funeral and will strengthened popular anger against them; the will also revealed his posthumous adoption of his grandnephew Octavian. Renewed civil wars followed among the assassins, Mark Antony, Octavian, and other commanders. By 27 BCE Octavian had become Augustus, the first Roman emperor in conventional historical reckoning, ruling through institutions permanently altered by Caesar’s career.',
        ],
      },
      {
        title: 'Legacy and controversies',
        paragraphs: [
          'Caesar’s calendar reform, writings, political vocabulary, and military reputation endured for centuries. “Caesar” became an imperial title and ultimately contributed to words such as Kaiser and tsar. His responsibility for the Republic’s collapse remains debated: Rome already suffered violence, inequality, competitive provincial commands, and weak political norms, but Caesar chose armed rebellion and concentrated unprecedented power. His conquest of Gaul brought regions into the Roman world while causing mass killing, enslavement, displacement, and destruction; ancient numerical claims are difficult to verify, but the scale of coercion is not in doubt. Interpretations therefore range from reforming statesman and brilliant commander to opportunist, imperial conqueror, and autocrat.',
        ],
      },
    ],
    timeline: [
      {
        date: '100 BCE',
        event: 'Born in Rome, traditionally on 12 or 13 July.',
      },
      {
        date: '63 BCE',
        event: 'Elected pontifex maximus, Rome’s chief priest.',
      },
      {
        date: '60–59 BCE',
        event:
          'Allied with Pompey and Crassus and served as consul, forming the political arrangement later called the First Triumvirate.',
      },
      {
        date: '58–50 BCE',
        event:
          'Conquered Gaul, campaigned across the Rhine, and twice entered Britain.',
      },
      {
        date: '52 BCE',
        event:
          'Defeated Vercingetorix and a broad Gallic coalition at Alesia.',
      },
      {
        date: '49 BCE',
        event:
          'Crossed the Rubicon with his army, turning political conflict into civil war.',
      },
      {
        date: '48–45 BCE',
        event:
          'Defeated Pompey and the remaining republican armies from Greece to Spain.',
      },
      {
        date: '46 BCE',
        event:
          'Introduced the Julian calendar while consolidating rule as dictator.',
      },
      {
        date: '44 BCE',
        event:
          'Named dictator for life and assassinated on the Ides of March.',
      },
    ],
    sources: [
      {
        title: 'Julius Caesar',
        publisher: 'Encyclopaedia Britannica',
        url: 'https://www.britannica.com/biography/Julius-Caesar-Roman-ruler',
      },
      {
        title: 'Gaius Julius Caesar',
        publisher: 'Livius',
        url: 'https://www.livius.org/articles/person/caesar/',
      },
      {
        title: 'The Roman Republic',
        publisher: 'The Metropolitan Museum of Art',
        url: 'https://www.metmuseum.org/essays/the-roman-republic',
      },
      {
        title: 'The Life of Julius Caesar',
        publisher: 'Suetonius, University of Chicago edition',
        url: 'https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Suetonius/12Caesars/Julius%2A.html',
      },
    ],
  },
  stalinPerson,
  {
    id: 'confucius',
    name: 'Confucius',
    lifespan: '551–479 BCE (traditional dates)',
    summary: 'A teacher and philosopher whose ideas about humane conduct, learning, and responsible government shaped Chinese civilization and intellectual life across East Asia.',
    imageAttribution: {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:Confucius_Portrait,_Kongzi_(Confucius)_Family_Mansion,_Qufu_(13044335945).jpg",
  "author": "Unknown Ming-dynasty artist; photograph by Gary Todd",
  "authorUrl": "https://www.flickr.com/people/101561334@N08/",
  "licenseName": "CC0 1.0 Universal (photograph)",
  "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
  "notes": "Portrait of Confucius at Leisure, photographed at the Kong Family Mansion in Qufu in 2014; collection of the Confucius Museum. This Ming-dynasty painting is a later representation, not a contemporary likeness. Commons records Gary Todd's photograph as CC0, verified against its Flickr source.",
  "changes": "Source proportionally resized through an image proxy, then cropped, resized to 900 × 1200, and converted to WebP.",
  "title": "Portrait of Confucius at Leisure"
},
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'Confucius, known in Chinese as Kong Qiu or Master Kong, made moral education a central concern of public life. He lived as the authority of the Zhou kings weakened and regional rulers competed for power. His response was to ask how people could become trustworthy, considerate, and capable of fulfilling their responsibilities. Later generations developed his teaching into influential traditions of scholarship and government. The familiar English name comes from a Latin rendering of his Chinese honorific; his ideas reached readers far beyond China through centuries of commentary and translation.',
        ],
      },
      {
        title: 'Life in the state of Lu',
        paragraphs: [
          'Tradition places his birth in 551 BCE near present-day Qufu in Shandong. Early accounts describe a family with inherited social standing but limited means, and a young man interested in ritual and public service. He worked for leading families in Lu and travelled to other states seeking opportunities to advise rulers. The details of his official career differ among ancient sources, many written long after his lifetime. What emerges consistently is a teacher whose influence ultimately rested more on his students than on political office.',
        ],
      },
      {
        title: 'Learning and humane conduct',
        paragraphs: [
          'Confucius treated learning as an ongoing practice that joined study with reflection and the correction of one\'s own mistakes. Poetry, music, ritual, and inherited historical knowledge offered ways to develop judgment and sensitivity to others. The virtue often translated as humaneness, ren, connected personal character to conduct within families and communities. Ritual, li, was valuable when it expressed sincere respect rather than empty performance. His teaching encouraged students to examine what they really understood and to measure achievement through conduct, not simply rank or wealth.',
        ],
      },
      {
        title: 'The Analects and responsible leadership',
        paragraphs: [
          'The Analects preserves short conversations and sayings associated with Confucius and his followers. It grew through transmission and compilation rather than being a book he wrote himself. Its discussions connect good government with the ruler\'s example, the proper use of authority, and concern for those being governed. Duties within families provided a starting point for thinking about wider relationships, including obligations owed by superiors to others. His ideal cultivated person developed moral discipline through everyday decisions, making ethical improvement a practical task rather than a distant abstraction.',
        ],
      },
      {
        title: 'An enduring educational legacy',
        paragraphs: [
          'Confucius died in 479 BCE according to the traditional chronology. His followers preserved and debated his teachings, and later scholars gave them new interpretations. Classical learning became central to the education of officials and helped shape intellectual traditions in Korea, Japan, and Vietnam. In Qufu, the temple, cemetery, and Kong family residence record the long history of his commemoration. These sites and the continuing study of the Analects show how a teacher\'s questions about learning and responsibility became part of an international cultural inheritance.',
        ],
      },
    ],
    timeline: [
      {
        date: '551 BCE',
        event: 'Traditional date of birth near Qufu, in the state of Lu.',
      },
      {
        date: 'Late 6th century BCE',
        event: 'Developed expertise in ritual and served in local administration.',
      },
      {
        date: 'Early 5th century BCE',
        event: 'Travelled among regional states, teaching and seeking opportunities to advise rulers.',
      },
      {
        date: '479 BCE',
        event: 'Traditional date of death in Lu.',
      },
      {
        date: 'After his lifetime',
        event: 'Followers transmitted the conversations and teachings later collected in the Analects.',
      },
      {
        date: '1994',
        event: 'The temple, cemetery, and Kong family mansion at Qufu were inscribed on the World Heritage List.',
      },
    ],
    sources: [
      {
        title: 'Confucius',
        publisher: 'Stanford Encyclopedia of Philosophy',
        url: 'https://plato.stanford.edu/entries/confucius/',
      },
      {
        title: 'Selections from the Confucian Analects',
        publisher: 'Columbia University, Asia for Educators',
        url: 'https://afe.easia.columbia.edu/ps/cup/confucius_analects.pdf',
      },
      {
        title: 'Temple and Cemetery of Confucius and the Kong Family Mansion in Qufu',
        publisher: 'UNESCO World Heritage Centre',
        url: 'https://whc.unesco.org/en/list/704/',
      },
    ],
    image: confuciusImage,
  },
  {
    id: 'qin-shi-huang',
    name: 'Qin Shi Huang',
    lifespan: '259–210 BCE',
    summary: 'The first emperor of a unified China, whose administrative institutions and standards for writing, money, weights, and measures influenced later dynasties.',
    imageAttribution: {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:Qinshihuang.jpg",
  "author": "Unknown artist",
  "licenseName": "Public domain (Public Domain Mark 1.0)",
  "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
  "notes": "A later portrait, dated circa 1850 on Commons, reproduced in Yuan Zhongyi's China's Terracotta Army and the First Emperor's Mausoleum (2010), p. 140. Commons applies PD-Art / PD-old-100-expired: the artwork's term has expired and it was published before 1931. The Commons version includes earlier color adjustments and cropping; this is not a contemporary likeness.",
  "changes": "Source proportionally resized through an image proxy, then cropped with the upper portion retained, resized to 900 × 1200, and converted to WebP.",
  "title": "Qinshihuang"
},
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'Qin Shi Huang, born Ying Zheng, transformed the kingdom of Qin into the first unified Chinese empire in 221 BCE. His achievement gave a new political meaning to the title emperor and replaced a landscape of rival kingdoms with a centrally directed state. The dynasty itself was brief, but its administrative methods and common standards endured in later forms. His historical importance lies in this institutional transformation as well as in the extraordinary archaeological remains of his reign, especially the mausoleum and terracotta army near Xi\'an.',
        ],
      },
      {
        title: 'From king of Qin to emperor',
        paragraphs: [
          'Born in 259 BCE, Ying Zheng became king of Qin while still young. Qin already possessed strong armies, an organized administration, and a long record of territorial expansion. During his reign it conquered the other major Warring States, completing that process in 221 BCE. He adopted the title Shi Huangdi, or First Emperor, to express a new kind of sovereignty. The resulting state governed from Xianyang and drew together territories whose rulers had previously maintained separate courts, laws, and political traditions.',
        ],
      },
      {
        title: 'A common framework for government',
        paragraphs: [
          'The imperial administration relied on appointed officials governing territorial units, rather than simply leaving conquered kingdoms under their former royal houses. Standardization supported this political structure. Common forms of writing, coinage, weights, and measures made records and transactions more consistent across regions. Surviving bronze inscriptions provide direct evidence of the order to extend Qin measurement standards throughout the empire. A plaque in the National Museum of China records the decree of 221 BCE and a later addition by the Second Emperor, showing how the policy was communicated through practical objects.',
        ],
      },
      {
        title: 'Infrastructure and imperial craftsmanship',
        paragraphs: [
          'Roads and canals supported communication and movement across the newly unified territory. Frontier walls were linked or extended during his reign; these early works should not be confused with the much later masonry walls most familiar today. His mausoleum was conceived on an immense scale, with burial pits and structures surrounding the tomb mound. Its terracotta soldiers, horses, and bronze vehicles reveal skilled modelling, metalworking, and organized production. Differences in faces, equipment, and military roles make the figures valuable evidence for the people and crafts of the Qin world.',
        ],
      },
      {
        title: 'Death and lasting influence',
        paragraphs: [
          'Qin Shi Huang died in 210 BCE, and the dynasty soon collapsed amid struggles over succession and authority. Its short life did not erase its innovations: later dynasties adapted the centralized administrative framework and retained many unifying practices. The emperor\'s ambitious projects also depended on substantial demands for labour and resources. Since the terracotta army\'s discovery in 1974, archaeology has added a material record to accounts preserved by historians. The mausoleum\'s World Heritage recognition reflects both its artistic importance and its association with the formation of the imperial state.',
        ],
      },
    ],
    timeline: [
      {
        date: '259 BCE',
        event: 'Born Ying Zheng.',
      },
      {
        date: '246 BCE',
        event: 'Became king of Qin; work on his mausoleum began during his kingship.',
      },
      {
        date: '221 BCE',
        event: 'Completed the conquest of the rival states and adopted the title First Emperor.',
      },
      {
        date: '221–210 BCE',
        event: 'Extended common administrative, monetary, writing, and measurement standards across the empire.',
      },
      {
        date: '210 BCE',
        event: 'Died and was buried in his mausoleum near present-day Xi\'an.',
      },
      {
        date: '1974',
        event: 'Discovery of the terracotta army opened a major new chapter in the archaeology of his reign.',
      },
      {
        date: '1987',
        event: 'The mausoleum was inscribed on the World Heritage List.',
      },
    ],
    sources: [
      {
        title: 'Qin dynasty, 221–206 BCE',
        publisher: 'Smithsonian National Museum of Asian Art',
        url: 'https://asia-archive.si.edu/learn/for-educators/teaching-china-with-the-smithsonian/explore-by-dynasty/qin-dynasty/',
      },
      {
        title: 'Mausoleum of the First Qin Emperor',
        publisher: 'UNESCO World Heritage Centre',
        url: 'https://whc.unesco.org/en/list/441/',
      },
      {
        title: 'Bronze plaque with edicts of the First and Second Qin Emperors',
        publisher: 'National Museum of China',
        url: 'https://www.chnmuseum.cn/zp/zpml/csp/202008/t20200826_247416.shtml',
      },
    ],
    image: qinShiHuangImage,
  },
  {
    id: 'emperor-taizong-of-tang',
    name: 'Emperor Taizong of Tang',
    lifespan: '598–649',
    summary: 'Li Shimin, the second Tang emperor, helped establish the dynasty and became an influential model of attentive government, capable administration, and cultural patronage.',
    imageAttribution: {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:TangTaizong_(cropped).jpg",
  "author": "Unknown artist",
  "licenseName": "Public domain (Public Domain Mark 1.0)",
  "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
  "notes": "Detail of Standing Portrait of Emperor Tang Taizong (I), National Palace Museum, Taipei, accession 中-畫-000263-00000, sourced from the museum's Open Data. The parent file identifies this as a Ming-dynasty commemorative painting, not a portrait made during Taizong's lifetime. Commons applies PD-Art / PD-old-100 to the faithful reproduction of the public-domain painting.",
  "changes": "Commons supplied an existing crop of the painting. Source proportionally resized through an image proxy, then cropped, resized to 900 × 1200, and converted to WebP.",
  "title": "Standing Portrait of Emperor Tang Taizong (I)"
},
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'Emperor Taizong, whose personal name was Li Shimin, ruled the Tang dynasty from 626 to 649. He combined experience as a military commander with a sustained interest in the practical responsibilities of government. His reign helped consolidate the institutions on which the Tang\'s later prosperity rested. In Chinese historical writing, the Zhenguan era became a standard against which later rulers were judged, particularly for its association with capable ministers, administrative discipline, and the willingness of a sovereign to hear frank advice.',
        ],
      },
      {
        title: 'The founding of the Tang',
        paragraphs: [
          'Li Shimin was born in 598 into the family of Li Yuan, a prominent commander under the Sui. He played a major military role in his father\'s establishment of the Tang dynasty in 618 and in subsequent campaigns against competing powers. As Prince of Qin he commanded forces around Luoyang and elsewhere, building a reputation for decisive leadership. A struggle within the imperial family preceded his accession in 626. The consolidation of the dynasty therefore involved both success in the field and a difficult transition at court.',
        ],
      },
      {
        title: 'Administration and the value of advice',
        paragraphs: [
          'Taizong\'s reflections on government emphasized matching duties to an official\'s abilities and keeping channels of information open. A ruler living inside a palace, he recognized, could easily become isolated from conditions outside it. The advice attributed to him urged rulers to consider a sound argument regardless of the speaker\'s rank and to resist the appeal of flattering words. These principles connected personal judgment with institutional performance: effective authority depended on informed decisions and competent service, not solely on commands issued from the throne.',
        ],
      },
      {
        title: 'Learning, restraint, and public responsibility',
        paragraphs: [
          'The text On Effective Government, composed near the end of his reign, also treated education and cultural learning as essential work of the state. It encouraged study of different books and the cultivation of literary and practical arts. Its warnings about extravagance linked the ruler\'s consumption to taxation, labour demands, and the condition of farming households. Taizong\'s government revised and developed institutions inherited from the Sui and early Tang. His wider significance lies in the lasting connection drawn between orderly administration, the education of officials, and the ruler\'s responsibility for the people\'s livelihood.',
        ],
      },
      {
        title: 'Commemoration and historical influence',
        paragraphs: [
          'Taizong died in 649 and was succeeded by his son Gaozong. His mausoleum at Zhaoling preserves an unusually personal expression of imperial memory: six reliefs commemorate horses he rode during the campaigns that helped secure Tang rule. The relief of Saluzi recalls a wounded horse and the general who removed an arrow from it, joining a specific battlefield episode to public remembrance. Together with transmitted discussions of government, such works show the different forms his legacy took, from political instruction to enduring achievements of Tang art.',
        ],
      },
    ],
    timeline: [
      {
        date: '598',
        event: 'Born Li Shimin.',
      },
      {
        date: '618',
        event: 'Helped his father Li Yuan establish the Tang dynasty.',
      },
      {
        date: '621–622',
        event: 'Led major campaigns later commemorated in the horse reliefs at Zhaoling.',
      },
      {
        date: '626',
        event: 'Became the second Tang emperor.',
      },
      {
        date: '636',
        event: 'Selected the site of the Zhaoling mausoleum.',
      },
      {
        date: '648',
        event: 'Set out advice for his heirs in On Effective Government.',
      },
      {
        date: '649',
        event: 'Died; his son Gaozong succeeded him.',
      },
    ],
    sources: [
      {
        title: 'Emperor Taizong on Effective Government',
        publisher: 'Columbia University, Asia for Educators',
        url: 'https://afe.easia.columbia.edu/main_pop/ps/ps_china-taizong-effective.htm',
      },
      {
        title: 'Taizong Horses',
        publisher: 'University of Pennsylvania Museum',
        url: 'https://www.penn.museum/collections/highlights/asian/taizonghorses.php',
      },
      {
        title: 'Emperor Taizong of Tang',
        publisher: 'World History Encyclopedia',
        url: 'https://www.worldhistory.org/Emperor_Taizong_of_Tang/',
      },
    ],
    image: emperorTaizongOfTangImage,
  },
  {
    id: 'emperor-wu-of-han',
    name: 'Emperor Wu of Han',
    lifespan: '156–87 BCE',
    summary: 'Liu Che, the long-reigning Han emperor, strengthened imperial institutions, supported classical scholarship, and expanded connections between China and Central Asia.',
    imageAttribution: {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:三才圖會_漢武帝劉徹相.jpg",
  "author": "Wang Qi (Sancai Tuhui compiler); original engraver not identified",
  "licenseName": "Public domain (Public Domain Mark 1.0)",
  "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
  "notes": "Later printed portrait of Emperor Wu of Han from the Ming-dynasty encyclopedia Sancai Tuhui, credited on Commons to Wang Qi. The file cites a Baidu reproduction. Commons applies PD-old-70-expired, including publication before 1931 in the United States. The 2023 file date is the upload date, not the date of the historical portrait; this is not a contemporary likeness.",
  "changes": "Source proportionally resized through an image proxy, then cropped, resized to 900 × 1200, and converted to WebP.",
  "title": "三才圖會 漢武帝劉徹相"
},
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'Emperor Wu of Han, born Liu Che, ruled from 141 to 87 BCE and gave the Western Han state a more active role in administration, diplomacy, and scholarship. His long reign extended the reach of the imperial government and encouraged new connections with Central Asia. He is also associated with the growing prestige of Confucian classical learning in public service. These developments helped define the institutions and cultural ambitions of the Han, a dynasty whose influence became fundamental to later Chinese history.',
        ],
      },
      {
        title: 'Inheritance and central government',
        paragraphs: [
          'Born in 156 BCE, Liu Che succeeded his father, Emperor Jing, while still a teenager. He inherited a state strengthened by decades of recovery and economic growth, but with powerful regional kingdoms and persistent frontier concerns. His government reduced the ability of hereditary rulers to concentrate territorial power, including through subdivision of their holdings. Regional supervision and appointments extended the court\'s reach. These measures made the relationship between the central government and local administration more direct, while retaining and adapting institutions developed under earlier Han rulers.',
        ],
      },
      {
        title: 'Diplomacy and the Silk Roads',
        paragraphs: [
          'Emperor Wu sponsored Zhang Qian\'s journeys westward in search of potential allies against the Xiongnu. Although the original diplomatic objective proved elusive, the reports brought the court valuable information about Central Asian peoples, routes, and products. Military campaigns, frontier settlements, and further embassies increased contact across the region. Silk, horses, luxury goods, and knowledge travelled through a network shaped by many communities. His reign was an important stage in the development of these exchanges, rather than the creation of a single road by one individual.',
        ],
      },
      {
        title: 'Scholarship and economic organization',
        paragraphs: [
          'The establishment of an Imperial Academy strengthened the place of classical study in the preparation of officials. Scholars such as Dong Zhongshu helped connect inherited ethical learning with imperial government. The academy created opportunities for students to enter service through education, although it was not yet the examination system of later centuries. Economic measures included stronger control of coin production and state involvement in salt and iron. River works and frontier agriculture also formed part of the government\'s efforts to organize resources across a much larger sphere.',
        ],
      },
      {
        title: 'A lasting Han inheritance',
        paragraphs: [
          'Emperor Wu died in 87 BCE, leaving his young successor a powerful but demanding imperial structure. The expansion of the state required substantial resources, and later rulers reconsidered the balance between military commitments and economic recovery. His most durable contributions included the stronger standing of classical education, a more centralized administrative order, and wider diplomatic horizons. The resulting movement of ideas and objects across Eurasia left traces in Han art and material culture, connecting the history of his reign with a broader history of exchange.',
        ],
      },
    ],
    timeline: [
      {
        date: '156 BCE',
        event: 'Born Liu Che, son of Emperor Jing.',
      },
      {
        date: '141 BCE',
        event: 'Succeeded his father as emperor of the Han dynasty.',
      },
      {
        date: '2nd century BCE',
        event: 'Sponsored Zhang Qian\'s western missions and expanded diplomatic contact with Central Asia.',
      },
      {
        date: 'During his reign',
        event: 'Established an Imperial Academy and strengthened the role of classical learning in government.',
      },
      {
        date: 'Late 2nd century BCE',
        event: 'Expanded state involvement in currency, salt, and iron and consolidated frontier administration.',
      },
      {
        date: '87 BCE',
        event: 'Died after a reign of more than five decades; Emperor Zhao succeeded him.',
      },
    ],
    sources: [
      {
        title: 'Wudi',
        publisher: 'EBSCO Research Starters',
        url: 'https://www.ebsco.com/research-starters/history/wudi',
      },
      {
        title: 'Wu, Emperor of the Han Dynasty',
        publisher: 'Encyclopedia of China / Berkshire Publishing',
        url: 'https://www.berkshirepublishing.com/ecph-china/2017/12/31/wu-emperor-of-the-han-dynasty-156-87-bce/',
      },
      {
        title: 'Han dynasty, 206 BCE–220 CE',
        publisher: 'Smithsonian National Museum of Asian Art',
        url: 'https://asia-archive.si.edu/learn/for-educators/teaching-china-with-the-smithsonian/explore-by-dynasty/han-dynasty/',
      },
    ],
    image: emperorWuOfHanImage,
  },
  {
    id: 'hongwu-emperor',
    name: 'Hongwu Emperor',
    lifespan: '1328–1398',
    summary: 'Zhu Yuanzhang, founder of the Ming dynasty, rebuilt central government after the fall of the Yuan and made agricultural recovery and official responsibility priorities of his reign.',
    imageAttribution: {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:Hongwu_(closeup).jpg",
  "author": "Unknown Ming-dynasty court artist",
  "licenseName": "Public domain (Public Domain Mark 1.0)",
  "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
  "notes": "Detail of A Seated Portrait of Ming Emperor Taizu, National Palace Museum, Taipei; sourced from the museum's 2019 Oversize Scrolls of Painting and Calligraphy exhibition. Commons identifies the faithful reproduction as PD-Art / PD-old-100. This is a historical court painting, not a photograph of the emperor.",
  "changes": "Commons supplied a close-up crop. Source proportionally resized through an image proxy, then resized to 900 × 1200 with a slight aspect-ratio crop and converted to WebP.",
  "title": "A Seated Portrait of Ming Emperor Taizu"
},
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'The Hongwu Emperor, born Zhu Yuanzhang, founded the Ming dynasty in 1368 and ruled it for thirty years. His rise from an impoverished rural family to the throne was exceptional in Chinese history. He established Nanjing as the new capital and directed the reconstruction of a state weakened by warfare and the collapse of Yuan authority. Agricultural recovery, a closely supervised bureaucracy, and a durable framework of imperial institutions were central to his work. The dynasty he founded continued until 1644, shaping a major period of Chinese cultural and economic history.',
        ],
      },
      {
        title: 'Early life and rise to leadership',
        paragraphs: [
          'Zhu was born in 1328 in present-day Anhui. Family losses and poverty led him to a Buddhist monastery, and at times he supported himself by begging. In the upheavals of the late Yuan period, he joined the Red Turban movement and developed into an effective commander. He gained a base at Nanjing in 1356 and gradually overcame rival forces in the Yangzi region. The ability to work with administrators as well as soldiers helped turn his military following into the foundations of a government.',
        ],
      },
      {
        title: 'Rebuilding administration and agriculture',
        paragraphs: [
          'After proclaiming the Ming, Hongwu sought to restore cultivation and bring land and tax obligations into a more systematic register. Irrigation, the recovery of farmland, and the resettlement of devastated areas received official attention. He also promoted schools and restored civil service examinations, linking administration to classical education. The balance of central institutions changed during his reign, particularly when he abolished the chief minister\'s office in 1380. The resulting arrangements gave the emperor more direct responsibility for the work of government departments.',
        ],
      },
      {
        title: 'Official duty and public welfare',
        paragraphs: [
          'Hongwu\'s surviving edicts reveal a ruler preoccupied with the conduct of officials handling money, grain, and justice. He warned that private enrichment and the suppression of complaints could separate the court from the people it governed. His instructions linked an official\'s reputation to responsible service and presented personal restraint as a public duty. They also prescribed severe punishments, reflecting the highly coercive methods through which he enforced his aims. Read as political documents, the edicts show both his priorities and the importance he attached to control over local administration.',
        ],
      },
      {
        title: 'The foundations of Ming culture',
        paragraphs: [
          'Hongwu died in 1398 and was succeeded by his grandson, the Jianwen Emperor. His successors changed some policies, but continued to govern within institutions formed during the founding reign. Ming court patronage and expanding markets later supported achievements in painting, ceramics, textiles, and printed literature. These were the work of many generations, rather than accomplishments of the founder alone. Hongwu\'s place in that longer story is as the builder of a new political order whose recovery and institutional consolidation made later developments possible.',
        ],
      },
    ],
    timeline: [
      {
        date: '1328',
        event: 'Born Zhu Yuanzhang in present-day Anhui.',
      },
      {
        date: '1352',
        event: 'Joined the Red Turban movement during the decline of Yuan rule.',
      },
      {
        date: '1356',
        event: 'Established his power base at Nanjing.',
      },
      {
        date: '1368',
        event: 'Founded the Ming dynasty and became the Hongwu Emperor.',
      },
      {
        date: '1370',
        event: 'Restored the civil service examination system.',
      },
      {
        date: '1380',
        event: 'Abolished the chief minister\'s office and increased direct imperial supervision.',
      },
      {
        date: '1398',
        event: 'Died; his grandson succeeded as the Jianwen Emperor.',
      },
    ],
    sources: [
      {
        title: 'Hongwu Emperor',
        publisher: 'World History Encyclopedia',
        url: 'https://www.worldhistory.org/Hongwu_Emperor/',
      },
      {
        title: 'An Imperial Edict Restraining Officials from Evil',
        publisher: 'Columbia University, Asia for Educators',
        url: 'https://afe.easia.columbia.edu/main_pop/ps/ps_china-restraining-officials.htm',
      },
      {
        title: 'Ming dynasty, 1368–1644',
        publisher: 'Smithsonian National Museum of Asian Art',
        url: 'https://asia-archive.si.edu/learn/for-educators/teaching-china-with-the-smithsonian/explore-by-dynasty/ming-dynasty/',
      },
    ],
    image: hongwuEmperorImage,
  },
  {
    id: 'yongle-emperor',
    name: 'Yongle Emperor',
    lifespan: '1360–1424',
    summary: 'Zhu Di, the third Ming emperor, established Beijing as the imperial capital, commissioned the Yongle Encyclopedia, and sponsored Zheng He\'s maritime expeditions.',
    imageAttribution: {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:Yongle_(closeup).jpg",
  "author": "Unknown Ming-dynasty artist",
  "licenseName": "Public domain (Public Domain Mark 1.0)",
  "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
  "notes": "Close-up of Seated Portrait of Ming Emperor Chengzu, National Palace Museum, Taipei. Commons applies PD-Art / PD-old-70 to this faithful reproduction of the public-domain Ming painting. This is a historical painted representation, not a photograph of the emperor.",
  "changes": "Commons supplied a close-up crop. Source proportionally resized through an image proxy, then resized to 900 × 1200 with a slight aspect-ratio crop and converted to WebP.",
  "title": "Seated Portrait of Ming Emperor Chengzu"
},
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'The Yongle Emperor, born Zhu Di, was the third ruler of the Ming dynasty. His reign is closely associated with three lasting projects: the establishment of Beijing as the imperial capital, an immense compilation of Chinese learning, and the ocean voyages led by Zheng He. These undertakings joined the resources of the early Ming state to ambitions in architecture, scholarship, and diplomacy. Their effects can still be traced in the built landscape of Beijing, surviving manuscript collections, and the history of exchange around the Indian Ocean.',
        ],
      },
      {
        title: 'From Prince of Yan to emperor',
        paragraphs: [
          'Born in 1360, Zhu Di was a son of the Ming founder, Zhu Yuanzhang. As Prince of Yan he developed a strong military position in the north, around the future capital of Beijing. After a civil war with the Jianwen Emperor, he took the throne in 1402; the Yongle era began the following year. His experience of northern affairs remained important throughout his reign. He continued to direct campaigns while also using the established bureaucracy to organize large projects across the empire.',
        ],
      },
      {
        title: 'Beijing and the Grand Canal',
        paragraphs: [
          'Yongle\'s move of the capital to Beijing in 1421 reshaped China\'s political geography. The Forbidden City provided a monumental setting for court ceremony and administration, arranged around courtyards, gates, and halls. Its construction drew on the labour and skills of craftsmen from many regions. Supplying the northern capital required reliable transport, and improvements to the Grand Canal helped bring grain from the productive south. The palace and the waterway served different functions, but together show how architecture and logistical planning supported the new imperial centre.',
        ],
      },
      {
        title: 'An encyclopedia and an oceanic horizon',
        paragraphs: [
          'The Yongle Encyclopedia gathered material from a vast range of earlier writings, preserving knowledge in an enormous manuscript compilation completed in 1408. Surviving volumes, often from a later Ming copy, contain texts that might otherwise have disappeared. At sea, the emperor sponsored Zheng He\'s first six major voyages, beginning in 1405. The fleets visited ports across Southeast Asia and the Indian Ocean, carrying envoys, exchanging gifts, and demonstrating Ming power. The seventh voyage took place under a later emperor, so the entire series should not be attributed to Yongle alone.',
        ],
      },
      {
        title: 'Later years and historical legacy',
        paragraphs: [
          'Yongle died in 1424 during a northern campaign and was succeeded by his son, the Hongxi Emperor. The scale of his building and military programmes imposed heavy demands on the state, and his successors reassessed some commitments. Yet Beijing remained a central seat of imperial government, while the Forbidden City developed through later rebuilding and additions. His reign\'s enduring importance is therefore both material and intellectual: a capital, preserved writings, and records of maritime contact that connect Ming history with the wider world.',
        ],
      },
    ],
    timeline: [
      {
        date: '1360',
        event: 'Born Zhu Di, a son of the future Hongwu Emperor.',
      },
      {
        date: '1402–1403',
        event: 'Took the throne; the Yongle reign era began in 1403.',
      },
      {
        date: '1405',
        event: 'Dispatched the first of Zheng He\'s major maritime expeditions.',
      },
      {
        date: '1408',
        event: 'The Yongle Encyclopedia was completed.',
      },
      {
        date: '1420–1421',
        event: 'The new palace complex was completed and Beijing became the imperial capital.',
      },
      {
        date: '1424',
        event: 'Died during a northern campaign; the Hongxi Emperor succeeded him.',
      },
    ],
    sources: [
      {
        title: 'Yongle Emperor',
        publisher: 'World History Encyclopedia',
        url: 'https://www.worldhistory.org/Yongle_Emperor/',
      },
      {
        title: 'Yongle dadian: manuscript collection',
        publisher: 'British Library',
        url: 'https://searcharchives.bl.uk/catalog/032-002899011',
      },
      {
        title: 'Imperial Palaces of the Ming and Qing Dynasties',
        publisher: 'UNESCO World Heritage Centre',
        url: 'https://whc.unesco.org/en/list/439/',
      },
      {
        title: 'The Grand Canal',
        publisher: 'UNESCO World Heritage Centre',
        url: 'https://whc.unesco.org/en/list/1443/',
      },
    ],
    image: yongleEmperorImage,
  },
  {
    id: 'sun-yat-sen',
    name: 'Sun Yat-sen',
    lifespan: '1866–1925',
    summary: 'A physician, revolutionary organizer, and advocate of republican government whose political ideas and international networks helped shape the emergence of modern China.',
    imageAttribution: {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:孙中山肖像.jpg",
  "author": "Boer Photographic Studio, Shanghai",
  "licenseName": "Public domain (PD-China; US copyright expired)",
  "licenseUrl": "https://commons.wikimedia.org/wiki/Template:PD-China",
  "notes": "Portrait taken on 15 November 1922 at Shanghai's Boer Photographic Studio; Commons cites the Sun Yat-sen Memorial Hall as its source. The individual photographer is not identified. Commons marks the photograph PD-China and public domain in the United States through publication before 1931. The file's history includes earlier cropping.",
  "changes": "Source proportionally resized through an image proxy, then cropped, resized to 900 × 1200, and converted to WebP.",
  "title": "孙中山肖像"
},
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'Sun Yat-sen, also known as Sun Wen and Sun Zhongshan, was a leading advocate of the replacement of dynastic rule with a republic. He brought together political organizing, fundraising among overseas Chinese communities, and a programme for national reconstruction. Elected provisional president after the 1911 Revolution, he became a central figure in the founding of the Republic of China. His influence continued beyond his short presidency through the institutions he helped organize and the principles he developed for citizenship, national independence, and the people\'s livelihood.',
        ],
      },
      {
        title: 'Education and a wider world',
        paragraphs: [
          'Sun was born on 12 November 1866 in Xiangshan County, Guangdong. Education in Hawaii and Hong Kong exposed him to different languages, institutions, and forms of public life. He studied at the Hong Kong College of Medicine for Chinese from 1887 to 1892 and began a medical career. Contact with teachers, friends, and international ideas also encouraged his political interests. The networks he formed in Hong Kong later supported his work as an organizer, linking local supporters with communities elsewhere in China and overseas.',
        ],
      },
      {
        title: 'Organizing for a republic',
        paragraphs: [
          'In 1894 Sun established the Revive China Society in Honolulu. He subsequently developed an organizing base in Hong Kong, and in 1905 helped bring revolutionary groups together in the Tongmenghui in Tokyo. These organizations depended on travel, correspondence, publications, and financial support from widely dispersed communities. After the Qing state fractured during the 1911 Revolution, Sun returned to China and became provisional president in Nanjing in 1912. He later relinquished that office to Yuan Shikai as part of the settlement accompanying the end of imperial rule.',
        ],
      },
      {
        title: 'The Three Principles of the People',
        paragraphs: [
          'Sun\'s best-known political programme brought together nationalism, democracy, and people\'s livelihood. He continued to develop these ideas over time, including in lectures delivered in Guangzhou in 1924. His discussion of democracy distinguished the people\'s sovereignty from the government\'s capacity to administer public affairs. Elections, recall, initiative, and referendum were proposed as ways for citizens to exercise political power. These arguments show an effort to combine a capable modern state with mechanisms of popular participation, rather than treating national reconstruction as a change of rulers alone.',
        ],
      },
      {
        title: 'Later work and enduring influence',
        paragraphs: [
          'During the early republic, Sun continued to organize politically and to seek national unity amid regional division. In his final years he worked to strengthen the Nationalist Party and promote the programme he had outlined. He travelled to Beijing for discussions about the country\'s future and died there on 12 March 1925. His career left unfinished projects as well as lasting institutions and ideas. Schools, museums, and memorials preserve his story, while his advocacy of national renewal and republican government remains central to accounts of modern Chinese history.',
        ],
      },
    ],
    timeline: [
      {
        date: '1866',
        event: 'Born in Guangdong on 12 November.',
      },
      {
        date: '1887–1892',
        event: 'Studied at the Hong Kong College of Medicine for Chinese.',
      },
      {
        date: '1894',
        event: 'Founded the Revive China Society in Honolulu.',
      },
      {
        date: '1905',
        event: 'Helped establish the Tongmenghui in Tokyo.',
      },
      {
        date: '1912',
        event: 'Served as provisional president of the Republic of China.',
      },
      {
        date: '1924',
        event: 'Delivered lectures developing the Three Principles of the People.',
      },
      {
        date: '1925',
        event: 'Died in Beijing on 12 March.',
      },
    ],
    sources: [
      {
        title: 'A Short Biography of Dr. Sun Yat-sen (Annex A)',
        publisher: 'Hong Kong Home Affairs Bureau / Legislative Council',
        url: 'https://www.legco.gov.hk/yr03-04/english/brief/habc30232ptviii_20040221-e.pdf',
      },
      {
        title: 'Sun Yat-sen in Hong Kong',
        publisher: 'University of Hong Kong Libraries',
        url: 'https://www.lib.hku.hk/syshk/A.html',
      },
      {
        title: 'The Principle of Democracy (1924)',
        publisher: 'Columbia University, Asia for Educators',
        url: 'https://afe.easia.columbia.edu/main_pop/ps/ps_china-sun-yatsen-democracy.htm',
      },
      {
        title: 'The Death of Sun Yat-sen',
        publisher: 'Academy of Chinese Studies',
        url: 'https://chiculture.org.hk/en/photo-story/2764',
      },
    ],
    image: sunYatSenImage,
  },
  {
    id: 'li-bai',
    name: 'Li Bai',
    lifespan: '701–762',
    summary: 'A major Tang poet whose vivid imagination, musical language, and poems of friendship, travel, and the natural world became enduring models of Chinese lyric poetry.',
    imageAttribution: {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:LiBai.jpg",
  "author": "Liang Kai",
  "licenseName": "Public domain (Public Domain Mark 1.0)",
  "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
  "notes": "Li Bai in Stroll, a 13th-century ink painting by Liang Kai, Tokyo National Museum, accession TA-164. Commons cites the museum's image archive and applies PD-Art / PD-old-100-expired. This Southern Song painting was made centuries after Li Bai's lifetime and is an imaginative representation, not a contemporary likeness.",
  "changes": "Commons supplied a crop of the painting. Source proportionally resized through an image proxy, then cropped with the upper portion retained, resized to 900 × 1200, and converted to WebP.",
  "title": "Li Bai In Stroll"
},
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'Li Bai, also known as Li Bo or Li Po, is one of the most celebrated poets of the Tang dynasty. His poems move between rivers and mountains, journeys and farewells, convivial gatherings and moments of solitude. A striking imaginative freedom makes these scenes feel larger than their immediate setting. Alongside his younger contemporary Du Fu, he became a defining figure in Chinese literary memory. His surviving work has also travelled through translation, influencing writers and artists who encountered Tang poetry far beyond its original language and setting.',
        ],
      },
      {
        title: 'Travel and the imperial court',
        paragraphs: [
          'Born around 701, Li Bai grew up in Sichuan; his precise birthplace remains uncertain. As a young man he left home and began the extensive travels that became part of his literary identity. He spent a short period at the court of Emperor Xuanzong, serving at the Hanlin Academy as a poet and scholar rather than following a regular official career. In 744 he met Du Fu. Their friendship, recorded in poems, became one of the best-known relationships in Chinese literary history, connecting two markedly individual poetic voices.',
        ],
      },
      {
        title: 'Friendship and the natural world',
        paragraphs: [
          'In the farewell poem set at Yellow Crane Tower, Li Bai follows a friend\'s departing boat until it disappears into the distance. The movement from a particular human meeting to the broad river gives the brief scene emotional depth. Elsewhere, mountains and open skies offer a setting for freedom from social constraint. These landscapes are more than decoration: they allow a speaker to express longing, pleasure, distance, or release through the changing scale of the world around him. The poems often achieve this with remarkably economical language.',
        ],
      },
      {
        title: 'Imagination and poetic character',
        paragraphs: [
          'Drinking Alone under the Moon turns solitude into a fanciful gathering with the moon and the poet\'s shadow. Its humour does not erase loneliness; instead, the invented companions make that feeling visible. Such poems helped create Li Bai\'s remembered image as a free-spirited traveller. Later painters also shaped this identity. Liang Kai\'s Southern Song portrait, made centuries after the poet lived, uses a few expressive brushstrokes to suggest a figure absorbed in verse. It records the poet\'s cultural afterlife rather than his physical appearance.',
        ],
      },
      {
        title: 'Later years and international readership',
        paragraphs: [
          'The political upheavals of the mid-eighth century disrupted Li Bai\'s life. His association with Prince Yong led to exile, followed by a pardon in 759. He continued travelling and writing until his death in 762. Close to a thousand poems are associated with his name, preserving a wide range of moods and subjects. Later readers have repeatedly found new possibilities in their directness and imaginative reach. Translation introduced his work to international poets and composers, while his place in Chinese education and literary culture has remained exceptionally strong.',
        ],
      },
    ],
    timeline: [
      {
        date: '701',
        event: 'Born; he spent his youth in Sichuan, though his birthplace is uncertain.',
      },
      {
        date: 'Early 8th century',
        event: 'Began travelling along the Yangzi and through other parts of the Tang empire.',
      },
      {
        date: '740s',
        event: 'Spent a short period as a poet and scholar at the Hanlin Academy.',
      },
      {
        date: '744',
        event: 'Met Du Fu, beginning a friendship remembered through their poetry.',
      },
      {
        date: '759',
        event: 'Received a pardon after exile connected with Prince Yong\'s cause.',
      },
      {
        date: '762',
        event: 'Died, leaving a large body of poetry to later generations.',
      },
      {
        date: '13th century',
        event: 'Liang Kai portrayed him in a celebrated painting now in the Tokyo National Museum.',
      },
    ],
    sources: [
      {
        title: 'Li Bai',
        publisher: 'Academy of American Poets',
        url: 'https://poets.org/poet/li-bai',
      },
      {
        title: 'Selected Poems by Li Bo',
        publisher: 'Columbia University, Asia for Educators',
        url: 'https://afe.easia.columbia.edu/main_pop/ps/ps_china-libo-selected.htm',
      },
      {
        title: 'The Poet Li Bai Strolling',
        publisher: 'Tokyo National Museum',
        url: 'https://www.tnm.jp/modules/r_collection/index.php?colid=TA164&controller=dtl&lang=en',
      },
    ],
    image: liBaiImage,
  },
  {
    id: 'du-fu',
    name: 'Du Fu',
    lifespan: '712–770',
    summary: 'A master of Tang poetry whose precise language joined family life, the natural world, and concern for ordinary people, giving personal experience an enduring place in the record of his age.',
    imageAttribution: {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:Dufu.jpg",
  "author": "Artist not identified / former Qing palace collection",
  "licenseName": "Public domain (Public Domain Mark 1.0)",
  "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
  "notes": "Portrait of Du Fu from the former Qing palace collection. The exact creation date and artist are not identified in the source. The Commons file marks the historical painting and its faithful reproduction as PD-Art / PD-old-100. It is a later representation, not a contemporary likeness of Du Fu.",
  "changes": "Source proportionally resized through an image proxy, slightly cropped to the portrait ratio, resized to 900 × 1200, and converted to WebP.",
  "title": "唐名臣像-唐劍南節度參謀檢校工部員外杜甫"
},
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'Du Fu was a Tang-dynasty poet whose work brought exceptional attention to the relationship between individual lives and public events. His subjects include journeys, friendship, family separation, official service, and the small changes of a garden or riverbank. Later readers called him the Poet-Historian because his verse preserves the emotional texture of an unsettled period. That description captures only part of his achievement: he was also an inventive craftsman, capable of making an ordinary scene carry several kinds of meaning at once.',
        ],
      },
      {
        title: 'Education, friendship, and service',
        paragraphs: [
          'Born in 712 into a family with a tradition of scholarship and public service, Du Fu studied the classics and hoped for an official career. His path was uncertain, and travel occupied much of his early adulthood. He met Li Bai in 744 and remembered their friendship in poems. The An Lushan Rebellion interrupted his search for stable employment. Taken to rebel-held Chang\'an in 756, he escaped the following year and rejoined the Tang court. His experience gave his writing an unusually close connection to displacement and the responsibilities of government.',
        ],
      },
      {
        title: 'The human scale of history',
        paragraphs: [
          'In Views in Springtime, the renewal of plants and birds becomes inseparable from anxiety about a damaged city and news from home. A letter can matter more to the speaker than any grand account of events. On the River similarly places the desire to serve alongside age, bad weather, and solitude. These poems move between public duty and private vulnerability without resolving the tension between them. Their attention to immediate experience helps explain why readers far removed from Tang political life can still recognize the emotions they describe.',
        ],
      },
      {
        title: 'Compassion and poetic form',
        paragraphs: [
          'A Song of War Chariots gives space to families watching men depart for military service and to the burdens borne by those left behind. Its force comes from concrete voices and scenes rather than a detached account of policy. Du Fu\'s concern for people extended the range of subjects considered worthy of poetry. At the same time, he worked with demanding formal conventions, including balanced lines and carefully organized imagery. Learned allusions and everyday language could coexist in his verse, allowing a brief poem to suggest both a particular moment and a larger moral question.',
        ],
      },
      {
        title: 'Chengdu and later influence',
        paragraphs: [
          'Around 760 Du Fu made a home in a thatched cottage near Chengdu, supported by friends including Yan Wu. Domestic surroundings inspired important poems, although his final years again involved travel along the Yangzi region. He died in 770. His reputation grew substantially after his lifetime, and later poets studied the breadth of his subjects and the density of his language. The combination of artistic discipline, historical awareness, and sympathy for ordinary lives made his work a lasting resource for Chinese literature and, through translation, for readers across the world.',
        ],
      },
    ],
    timeline: [
      {
        date: '712',
        event: 'Born into a family associated with scholarship and official service.',
      },
      {
        date: '744',
        event: 'Met Li Bai and formed a friendship remembered in their poems.',
      },
      {
        date: '756–757',
        event: 'Was held in rebel-controlled Chang\'an, then escaped to rejoin the Tang court.',
      },
      {
        date: 'Around 760',
        event: 'Established his thatched-cottage home near Chengdu.',
      },
      {
        date: '764–765',
        event: 'Served on the staff of his friend and patron Yan Wu.',
      },
      {
        date: '770',
        event: 'Died after years of travel and sustained poetic work.',
      },
    ],
    sources: [
      {
        title: 'Du Fu',
        publisher: 'EBSCO Research Starters',
        url: 'https://www.ebsco.com/research-starters/biography/du-fu',
      },
      {
        title: 'Du Fu',
        publisher: 'Poetry Foundation',
        url: 'https://www.poetryfoundation.org/poets/tu-fu',
      },
      {
        title: 'Selected Poems by Du Fu',
        publisher: 'Columbia University, Asia for Educators',
        url: 'https://afe.easia.columbia.edu/ps/china/dufu_selected.pdf',
      },
      {
        title: 'A Song of War Chariots',
        publisher: 'Columbia University, Asia for Educators',
        url: 'https://afe.easia.columbia.edu/main_pop/ps/ps_china-dufu-songofwar.htm',
      },
    ],
    image: duFuImage,
  },
  {
    id: 'lu-xun',
    name: 'Lu Xun',
    lifespan: '1881–1936',
    summary: 'A foundational writer of modern Chinese literature whose fiction, essays, translations, and support for young artists expanded the possibilities of cultural expression and public reflection.',
    imageAttribution: {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:Lu_Xun_1936.jpg",
  "author": "Sha Fei (1912–1950)",
  "licenseName": "Public domain (PD-China / PD-1996)",
  "licenseUrl": "https://commons.wikimedia.org/wiki/Template:PD-China",
  "notes": "Photographed at a woodcut exhibition in Shanghai on 8 October 1936; Commons cites Fotomen's retrospective on Sha Fei. The file is tagged PD-China for expired photographic copyright and PD-1996 for its United States public-domain status under the stated publication and URAA conditions.",
  "changes": "Source proportionally resized through an image proxy, cropped with the upper portion retained, resized to 900 × 1200, and converted to WebP.",
  "title": "Lu Xun 1936"
},
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'Lu Xun, the pen name of Zhou Shuren, helped establish modern Chinese fiction as a medium for exploring both personal experience and social life. His writing includes short stories, essays, prose poetry, literary scholarship, and translation. He combined a sharp sense of irony with close attention to people whose dignity or possibilities were easily overlooked. His influence also extended beyond his own books: as an editor, correspondent, and supporter of younger writers and artists, he contributed to the cultural networks through which modern Chinese literature developed.',
        ],
      },
      {
        title: 'From Shaoxing to Sendai',
        paragraphs: [
          'Born in Shaoxing in 1881, Lu Xun received a classical education before studying subjects associated with modern science. He went to Japan and entered Sendai Medical College in 1904, an institution that later became part of Tohoku University. There he studied anatomy with Fujino Genkuro, whom he remembered with affection in an autobiographical essay. He eventually turned from medicine toward literature, seeing writing as another way to address the needs of his society. His years abroad also deepened his engagement with translation and ideas circulating between different literary cultures.',
        ],
      },
      {
        title: 'New possibilities for fiction',
        paragraphs: [
          'A Madman\'s Diary, published in 1918, became a landmark of the movement toward vernacular literature. Its distinctive narrative voice invited readers to question familiar assumptions. The True Story of Ah Q used a different kind of unsettling humour to examine self-deception and the position of a socially marginal man. These works helped make the short story central to modern Chinese writing. Their characters are memorable because the stories leave room for discomfort, recognition, and interpretation, rather than reducing a person to a simple lesson.',
        ],
      },
      {
        title: 'Collections and literary range',
        paragraphs: [
          'Call to Arms appeared in 1923, gathering stories written during the preceding years. Wandering followed in 1926, including works such as The New Year\'s Sacrifice and Regret for the Past. Together these collections demonstrate his interest in the pressures surrounding everyday relationships and choices. His creative range also included the prose poems of Wild Grass and recollections collected in Dawn Blossoms Plucked at Dusk. Alongside imaginative writing, his work on the history of Chinese fiction helped establish a field of scholarly study and connect modern experimentation with a much longer literary inheritance.',
        ],
      },
      {
        title: 'Supporting writers and visual artists',
        paragraphs: [
          'During his later years in Shanghai, Lu Xun encouraged young cultural workers through editing, correspondence, and practical support. His promotion of the modern woodcut movement was particularly significant. Prints could be made from inexpensive materials and communicate through direct, expressive images, reaching audiences beyond established literary circles. This interest joined his commitment to new writing with the possibilities of visual art. He died in Shanghai in 1936, leaving a body of work and a model of cultural engagement that continued to shape authors, teachers, translators, and artists.',
        ],
      },
    ],
    timeline: [
      {
        date: '1881',
        event: 'Born in Shaoxing, Zhejiang.',
      },
      {
        date: '1904',
        event: 'Entered Sendai Medical College in Japan.',
      },
      {
        date: '1918',
        event: 'Published A Madman\'s Diary under the pen name Lu Xun.',
      },
      {
        date: '1923',
        event: 'Published the short-story collection Call to Arms.',
      },
      {
        date: '1926',
        event: 'Published Wandering, his second major story collection.',
      },
      {
        date: '1930s',
        event: 'Supported younger writers and the modern woodcut movement in Shanghai.',
      },
      {
        date: '1936',
        event: 'Died in Shanghai on 19 October.',
      },
    ],
    sources: [
      {
        title: 'Lu Xun Biography',
        publisher: 'Ohio State University, MCLC Resource Center',
        url: 'https://u.osu.edu/mclc/online-series/lu-xun/',
      },
      {
        title: 'Celebrating 120 Years of International Students: Lu Xun\'s Legacy',
        publisher: 'Tohoku University',
        url: 'https://www.tohoku.ac.jp/en/news/university_news/celebrating_120_years_of_international_students.html',
      },
      {
        title: 'Rare Book Exhibition: Lu Xun\'s Works',
        publisher: 'Tsinghua University Library',
        url: 'https://lib.tsinghua.edu.cn/en/info/1152/1118.htm',
      },
      {
        title: 'Untitled by Yan Han: The Modern Woodcut Movement',
        publisher: 'The Metropolitan Museum of Art',
        url: 'https://www.metmuseum.org/art/collection/search/892928',
      },
    ],
    image: luXunImage,
  },
  {
    id: 'yang-chen-ning',
    name: 'Yang Chen-Ning',
    lifespan: '1922–2025',
    summary: 'A theoretical physicist whose work on parity, gauge theory, and statistical mechanics reshaped modern physics, and whose teaching and academic exchanges connected generations of researchers.',
    imageAttribution: {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:HD.3F.010_(11086446676)(Chen_Ning_Yang).jpg",
  "author": "U.S. Department of Energy (individual photographer unidentified)",
  "authorUrl": "https://www.flickr.com/photos/departmentofenergy/11086446676/",
  "licenseName": "Public domain (U.S. government work)",
  "licenseUrl": "https://commons.wikimedia.org/wiki/Template:PD-USGov-DOE",
  "notes": "Portrait extracted from the Department of Energy group photograph HD.3F.010, identifying Yang as the seated figure at left. Commons applies PD-USGov-DOE; its review of the original Flickr upload confirmed the United States Government Work designation. The photograph's date is not specified.",
  "changes": "Commons supplied a portrait crop. Source proportionally resized through an image proxy, resized to 900 × 1200 with a minimal aspect-ratio adjustment, and converted to WebP.",
  "title": "HD.3F.010 (Chen Ning Yang)"
},
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'Yang Chen-Ning, also known as Chen Ning Yang, was a theoretical physicist whose research changed how scientists understand symmetry and the fundamental interactions of matter. He shared the 1957 Nobel Prize in Physics with Tsung-Dao Lee for their investigation of parity. His work with Robert Mills became another major foundation of modern particle theory. Alongside these widely known achievements, Yang contributed to statistical mechanics and mathematical physics, while building research communities and encouraging international academic exchange over a career that extended across several generations.',
        ],
      },
      {
        title: 'Education and early research',
        paragraphs: [
          'Born in Hefei in 1922, Yang grew up in an academic family with close ties to Tsinghua University. He studied at the National Southwest Associated University during the war and received a master\'s degree from Tsinghua in 1944. He went to the United States in 1945, completed his doctorate at the University of Chicago in 1948, and joined the Institute for Advanced Study in Princeton in 1949. These institutions placed him among researchers developing the theories needed to interpret rapidly expanding evidence about particles and matter.',
        ],
      },
      {
        title: 'Testing the symmetry of nature',
        paragraphs: [
          'In 1956, Yang and Lee questioned whether the conservation of parity had actually been established for the weak interaction. Parity concerns the relationship between a physical process and its mirror image. They reviewed the evidence and proposed experiments that could distinguish between the possibilities. Chien-Shiung Wu and her collaborators performed the decisive cobalt-60 experiment, showing that the weak interaction does not preserve this mirror symmetry. The result transformed an accepted assumption into a new research programme and brought Yang and Lee the Nobel Prize the following year.',
        ],
      },
      {
        title: 'Gauge theory and mathematical connections',
        paragraphs: [
          'In 1954, Yang and Robert Mills developed a non-abelian gauge theory, extending the mathematical idea of symmetry in a way that later became central to the Standard Model. This framework provided a language for describing fundamental interactions; its wider physical importance emerged through the work of many subsequent researchers. Yang also made influential contributions to statistical mechanics and exactly solvable models, including work associated with the Yang–Baxter equation. His interest in the relationship between gauge theory and geometry helped deepen exchanges between physicists and mathematicians.',
        ],
      },
      {
        title: 'Research communities and education',
        paragraphs: [
          'Yang moved to Stony Brook in 1966 and founded its Institute for Theoretical Physics, helping develop an internationally significant centre of research. From the 1970s he also encouraged exchanges between Chinese and American scholars and supported renewed attention to basic science in China. He later made his home at Tsinghua, contributing to advanced study and the education of younger researchers. Yang died in Beijing on 18 October 2025, aged 103. His legacy includes both enduring theoretical ideas and the opportunities he helped create for others to pursue fundamental questions.',
        ],
      },
    ],
    timeline: [
      {
        date: '1922',
        event: 'Born in Hefei, Anhui.',
      },
      {
        date: '1944–1948',
        event: 'Received his master\'s degree at Tsinghua and doctorate at the University of Chicago.',
      },
      {
        date: '1954',
        event: 'Developed non-abelian gauge theory with Robert Mills.',
      },
      {
        date: '1956–1957',
        event: 'Investigated parity with Tsung-Dao Lee and shared the 1957 Nobel Prize in Physics.',
      },
      {
        date: '1966',
        event: 'Joined Stony Brook and founded its Institute for Theoretical Physics.',
      },
      {
        date: '1971',
        event: 'Visited China and began sustained efforts to strengthen academic exchanges.',
      },
      {
        date: '2025',
        event: 'Died in Beijing on 18 October, aged 103.',
      },
    ],
    sources: [
      {
        title: 'The Nobel Prize in Physics 1957: Award Ceremony Speech',
        publisher: 'Nobel Prize',
        url: 'https://www.nobelprize.org/prizes/physics/1957/ceremony-speech/',
      },
      {
        title: 'C.N. Yang',
        publisher: 'Stony Brook University, Physics and Astronomy',
        url: 'https://www.stonybrook.edu/physics/cn-yang/',
      },
      {
        title: 'Honoring the Life and Legacy of Professor Chen Ning Yang',
        publisher: 'Tsinghua University',
        url: 'https://www.tsinghua.edu.cn/en/info/1244/14521.htm',
      },
      {
        title: 'In Memory of Yang Zhenning',
        publisher: 'Tsinghua University',
        url: 'https://www.tsinghua.edu.cn/info/1173/121840.htm',
      },
    ],
    image: yangChenNingImage,
  },
  {
    id: 'george-washington',
    name: 'George Washington',
    lifespan: '1732–1799',
    summary: 'Commander of the Continental Army and the first president of the United States, Washington helped secure independence and establish enduring practices for constitutional government and the transfer of power.',
    imageAttribution: {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:George_Washington_Portrait_(3x4_cropped).jpg",
  "author": "Gilbert Stuart (1755–1828)",
  "licenseName": "Public domain (Public Domain Mark 1.0)",
  "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
  "notes": "George Washington, 1803, Clark Art Institute, accession 1955.16. This posthumous version is based on Stuart's earlier Athenaeum portrait painted from life. Commons cites the Clark scan and applies PD-Art / PD-old-100-expired, with pre-1931 publication documented.",
  "changes": "Commons supplied a portrait crop by Wabbuh. Source proportionally resized through an image proxy, resized to 900 × 1200 with a minimal aspect-ratio crop, and converted to WebP.",
  "title": "George Washington"
},
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'George Washington led the Continental Army during the American Revolution and served as the first president of the United States from 1789 to 1797. His public life linked the struggle for independence with the construction of a workable national government. Military persistence, an ability to cooperate with civilian leaders, and the authority of his reputation helped him hold together institutions under considerable strain. His decisions about how to exercise and relinquish office became influential precedents for the republic, even as its founding promises remained unevenly realized.',
        ],
      },
      {
        title: 'Virginia and the path to command',
        paragraphs: [
          'Born in Virginia in 1732, Washington began his working life as a surveyor and gained military experience during the French and Indian War. He later managed Mount Vernon and served in the House of Burgesses. As disputes between Britain and its American colonies intensified, he joined the Continental Congress. In 1775 Congress selected him to command the Continental Army. He faced the practical difficulty of sustaining a force with uncertain supplies, short enlistments, and limited experience against a powerful professional opponent.',
        ],
      },
      {
        title: 'Independence and civilian authority',
        paragraphs: [
          'Washington\'s wartime achievement depended on keeping the army in existence through setbacks as well as winning battles. Cooperation with French forces helped bring the decisive victory at Yorktown in 1781. After peace, he resigned his military commission in 1783 and returned home, affirming the army\'s responsibility to civilian government. He later presided over the Constitutional Convention of 1787. These transitions gave his career a significance beyond military success: he helped connect revolutionary leadership to institutions intended to outlast the individuals who first led them.',
        ],
      },
      {
        title: 'Establishing the presidency',
        paragraphs: [
          'Washington took the presidential oath in New York on 30 April 1789. With few established procedures to follow, even the public form of the inauguration required decisions by Congress and the new administration. His first inaugural address treated office as a public trust and placed the experiment in republican government within a wider moral responsibility. Over two terms, he worked with Congress and executive officers to turn the Constitution\'s framework into daily practice. His standing gave the new office credibility while its powers and relationships were still taking shape.',
        ],
      },
      {
        title: 'Retirement and a lasting example',
        paragraphs: [
          'In his 1796 Farewell Address, Washington urged citizens to consider shared national interests and warned about sectional division, factional hostility, and foreign interference. His decision to leave the presidency after two terms made the peaceful transfer of executive authority an especially visible part of his legacy. He returned to Mount Vernon in 1797 and died there in December 1799. Later generations repeatedly revisited his words and conduct; the Senate\'s continuing tradition of reading the Farewell Address is one example of that institutional memory.',
        ],
      },
    ],
    timeline: [
      {
        date: '1732',
        event: 'Born in Westmoreland County, Virginia, on 22 February.',
      },
      {
        date: '1775',
        event: 'Appointed commander in chief of the Continental Army.',
      },
      {
        date: '1781',
        event: 'Led American forces in the allied victory at Yorktown.',
      },
      {
        date: '1783',
        event: 'Resigned his military commission and returned to private life.',
      },
      {
        date: '1787',
        event: 'Presided over the Constitutional Convention.',
      },
      {
        date: '1789–1797',
        event: 'Served two terms as the first president of the United States.',
      },
      {
        date: '1799',
        event: 'Died at Mount Vernon on 14 December.',
      },
    ],
    sources: [
      {
        title: 'George Washington\'s Life',
        publisher: 'George Washington\'s Mount Vernon',
        url: 'https://www.mountvernon.org/george-washington/biography',
      },
      {
        title: 'First Inaugural Speech, 1789',
        publisher: 'U.S. National Archives',
        url: 'https://www.archives.gov/milestone-documents/president-george-washingtons-first-inaugural-speech',
      },
      {
        title: 'Washington\'s Farewell Address',
        publisher: 'United States Senate',
        url: 'https://www.senate.gov/artandhistory/history/minute/Washingtons_Farewell_Address.htm',
      },
    ],
    image: georgeWashingtonImage,
  },
  {
    id: 'abraham-lincoln',
    name: 'Abraham Lincoln',
    lifespan: '1809–1865',
    summary: 'The sixteenth president of the United States led the Union through the Civil War, advanced emancipation, and gave lasting expression to the responsibilities of democratic government.',
    imageAttribution: {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:Abraham_Lincoln_O-77_by_Gardner,_1863.jpg",
  "author": "Alexander Gardner (1821–1882); digital adjustments by Scewing",
  "licenseName": "Public domain (PD-US)",
  "licenseUrl": "https://commons.wikimedia.org/wiki/Template:PD-US",
  "notes": "Photographed in Washington, D.C., on 8 November 1863; Library of Congress, item scsm000793. Commons identifies the photograph as public domain in the United States. Scewing desaturated the scan, adjusted levels, removed minor artifacts, and corrected an artificial vertical elongation.",
  "changes": "Used the Commons-adjusted version. Source proportionally resized through an image proxy, cropped to 3:4, resized to 900 × 1200, and converted to WebP.",
  "title": "Abraham Lincoln O-77 by Gardner, 1863"
},
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'Abraham Lincoln served as president of the United States from 1861 until his death in 1865. His administration faced the Civil War and the question of whether the Union could survive secession. As the conflict developed, the destruction of slavery became increasingly central to its purpose. Lincoln\'s leadership joined political negotiation, military responsibility, and an exceptional ability to explain public principles in concise language. His speeches and decisions continue to shape discussions of freedom, citizenship, and the obligations of representative government.',
        ],
      },
      {
        title: 'A self-directed education',
        paragraphs: [
          'Lincoln was born near Hodgenville, Kentucky, in 1809 and grew up in a family that moved west in search of opportunity. His formal schooling was brief, but reading and self-directed study remained important throughout his life. In Illinois he entered local politics and built a legal career. The experience of speaking to voters, examining evidence, and presenting arguments helped prepare him for national leadership. His rise was gradual, drawing on years of work in communities and courts before he became a prominent figure in the debates over slavery\'s expansion.',
        ],
      },
      {
        title: 'Preserving the Union and advancing freedom',
        paragraphs: [
          'Elected president in 1860, Lincoln took office as Southern states left the Union. He initially defined the federal war effort around preserving the nation, but emancipation became a crucial part of Union policy. The Emancipation Proclamation took effect on 1 January 1863, declaring freedom for enslaved people in designated areas in rebellion. It did not immediately abolish slavery everywhere: its reach was limited and enforcement depended on Union success. It nevertheless changed the war\'s direction and authorized the enlistment of Black men in the federal armed forces.',
        ],
      },
      {
        title: 'Gettysburg and constitutional change',
        paragraphs: [
          'At Gettysburg on 19 November 1863, Lincoln used the dedication of a military cemetery to connect the sacrifices of war with the nation\'s founding commitment to equality. The address asked the living to continue work that the dead could no longer perform. He also supported a constitutional end to slavery, a more lasting legal foundation than an executive wartime measure. Congress passed the Thirteenth Amendment in January 1865. Ratified later that year, it abolished slavery and involuntary servitude, except as punishment for a crime after conviction.',
        ],
      },
      {
        title: 'The end of the war and remembrance',
        paragraphs: [
          'Lincoln won reelection in 1864 and began his second term as Union victory approached. His Second Inaugural Address combined reflection on the causes of war with an appeal for a generous peace and care for those who had suffered. He did not live to oversee the postwar settlement. Shot at Ford\'s Theatre on 14 April 1865, he died the next morning. His enduring importance rests both on the survival of the Union and on his part in a broader struggle for emancipation carried forward by enslaved people, soldiers, abolitionists, and political leaders.',
        ],
      },
    ],
    timeline: [
      {
        date: '1809',
        event: 'Born near Hodgenville, Kentucky, on 12 February.',
      },
      {
        date: '1830s',
        event: 'Entered Illinois politics and established his career in law.',
      },
      {
        date: '1860–1861',
        event: 'Elected president and took office as the Union faced secession.',
      },
      {
        date: '1863',
        event: 'Issued the Emancipation Proclamation and delivered the Gettysburg Address.',
      },
      {
        date: '1864',
        event: 'Won reelection to the presidency.',
      },
      {
        date: '1865',
        event: 'Supported the Thirteenth Amendment; died on 15 April after being shot the previous evening.',
      },
    ],
    sources: [
      {
        title: 'Life of Lincoln, 1809–1865',
        publisher: 'U.S. National Park Service',
        url: 'https://www.nps.gov/liho/learn/historyculture/life.htm',
      },
      {
        title: 'Emancipation Proclamation, 1863',
        publisher: 'U.S. National Archives',
        url: 'https://www.archives.gov/milestone-documents/emancipation-proclamation',
      },
      {
        title: 'Gettysburg Address',
        publisher: 'Library of Congress',
        url: 'https://www.loc.gov/exhibits/gettysburg-address/',
      },
      {
        title: 'Thirteenth Amendment, 1865',
        publisher: 'U.S. National Archives',
        url: 'https://www.archives.gov/milestone-documents/13th-amendment',
      },
    ],
    image: abrahamLincolnImage,
  },
  {
    id: 'isaac-newton',
    name: 'Isaac Newton',
    lifespan: '1642–1727',
    summary: 'A mathematician and natural philosopher whose laws of motion, theory of universal gravitation, work on calculus, and experiments with light became foundations of modern physical science.',
    imageAttribution: {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:Portrait_of_Sir_Isaac_Newton,_1689.jpg",
  "author": "Godfrey Kneller (1646–1723)",
  "licenseName": "Public domain (Public Domain Mark 1.0)",
  "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
  "notes": "Portrait of Isaac Newton, 1689, painted during his lifetime. Commons cites Cambridge University Library's Lines of Thought exhibition and applies PD-Art / PD-old-100-expired: Kneller died in 1723 and the work was published before 1931.",
  "changes": "Source proportionally resized through an image proxy, cropped to 3:4, resized to 900 × 1200, and converted to WebP.",
  "title": "Portrait of Isaac Newton (1642-1727)"
},
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'Isaac Newton brought mathematical analysis and experiment together in a body of work that transformed the study of nature. His account of motion and gravity connected phenomena on Earth with the paths of celestial bodies. He also investigated the composition of light, designed a practical reflecting telescope, and developed mathematical methods that became part of calculus. His achievements emerged through years of revision, correspondence, and debate. They provided later researchers with unusually powerful tools for asking precise questions about how the physical world behaves.',
        ],
      },
      {
        title: 'Woolsthorpe and Cambridge',
        paragraphs: [
          'Newton was born at Woolsthorpe in Lincolnshire on 25 December 1642 in the Julian calendar then used in England, equivalent to 4 January 1643 in the Gregorian calendar. He entered Trinity College, Cambridge, in 1661. When plague disrupted university life in the mid-1660s, he continued studying mathematics, light, and motion at home. He returned to Cambridge and became Lucasian Professor of Mathematics in 1669. His early work on changing quantities developed into his method of fluxions, an independent route to calculus alongside the work of Gottfried Wilhelm Leibniz.',
        ],
      },
      {
        title: 'Motion and universal gravitation',
        paragraphs: [
          'The Mathematical Principles of Natural Philosophy, usually called the Principia, appeared in 1687 with encouragement and financial support from Edmond Halley. Newton presented laws of motion and a mathematical theory of universal gravitation, showing how the same principles could account for falling bodies and orbital motion. The book replaced separate explanations for terrestrial and celestial events with a shared framework. It also demonstrated a demanding method of inquiry: derive consequences from mathematical principles and compare them with observations, allowing the theory to make testable predictions.',
        ],
      },
      {
        title: 'Light, colour, and instruments',
        paragraphs: [
          'Newton\'s prism experiments showed that white light contains rays that are refracted by different amounts, producing a spectrum of colours. This supported the view that colour was a property of the light itself rather than something simply added by the prism. His reflecting telescope used mirrors to reduce the colour problems associated with lenses and helped bring his work to the attention of the Royal Society. He published a paper on light and colour in 1672 and developed his optical investigations further in Opticks, first issued in 1704.',
        ],
      },
      {
        title: 'Public service and scientific legacy',
        paragraphs: [
          'In 1696 Newton became Warden of the Royal Mint during a major recoinage, and in 1699 he became its Master. He took an active role in administration and in investigating counterfeiting. Elected president of the Royal Society in 1703, he remained a central figure in British intellectual life until his death in 1727. His interests also included theology, chronology, and alchemy, reflecting a wider early modern search for order in nature and history. Later science revised parts of his physical framework while retaining its enormous practical and educational value.',
        ],
      },
    ],
    timeline: [
      {
        date: '1642 / 1643',
        event: 'Born on 25 December 1642 Julian, equivalent to 4 January 1643 Gregorian.',
      },
      {
        date: '1661',
        event: 'Entered Trinity College, Cambridge.',
      },
      {
        date: '1669',
        event: 'Became Lucasian Professor of Mathematics.',
      },
      {
        date: '1672',
        event: 'Joined the Royal Society and published his paper on light and colours.',
      },
      {
        date: '1687',
        event: 'Published the Principia.',
      },
      {
        date: '1696–1699',
        event: 'Became Warden and then Master of the Royal Mint.',
      },
      {
        date: '1704',
        event: 'Published Opticks.',
      },
      {
        date: '1727',
        event: 'Died in March and was buried in Westminster Abbey.',
      },
    ],
    sources: [
      {
        title: 'The Life and Work of Isaac Newton at a Glance',
        publisher: 'University of Oxford, The Newton Project',
        url: 'https://newtonproject.ox.ac.uk/his-life-and-work-at-a-glance',
      },
      {
        title: 'Work by Hand and Brain',
        publisher: 'Cambridge University Library',
        url: 'https://wwwe.lib.cam.ac.uk/CUL/exhibitions/Footprints_of_the_Lion/hand_brain.html',
      },
      {
        title: 'Isaac Newton, Warden and Master of the Royal Mint',
        publisher: 'The Royal Mint Museum',
        url: 'https://www.royalmintmuseum.org.uk/journal/people/isaac-newton/',
      },
      {
        title: 'Sir Isaac Newton',
        publisher: 'Fitzwilliam Museum, University of Cambridge',
        url: 'https://fitzmuseum.cam.ac.uk/explore-our-collection/highlights/context/stories-and-histories/sir-isaac-newton',
      },
    ],
    image: isaacNewtonImage,
  },
  {
    id: 'marie-curie',
    name: 'Marie Skłodowska Curie',
    lifespan: '1867–1934',
    summary: 'A Polish-born physicist and chemist whose research on radioactivity, discovery of polonium and radium, and development of scientific institutions earned Nobel Prizes in two sciences.',
    imageAttribution: {
  "sourceUrl": "https://commons.wikimedia.org/wiki/File:Marie_Curie_c._1920s.jpg",
  "author": "Henri Manuel (1874–1947); restoration by FMSky and Bammesk",
  "licenseName": "Public domain (Public Domain Mark 1.0)",
  "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
  "notes": "Portrait dated circa 1920 on Commons. The file records Henri Manuel as photographer and FMSky and Bammesk as restorers, and links to the unretouched original. Commons applies PD-old-75-expired: Manuel died in 1947 and the photograph was published before 1931.",
  "changes": "Used the Commons-restored version. Source proportionally resized through an image proxy, slightly cropped to 3:4, resized to 900 × 1200, and converted to WebP.",
  "title": "Marie Curie c. 1920s"
},
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'Marie Skłodowska Curie was a physicist and chemist whose investigations helped establish radioactivity as a major field of science. Born in Warsaw and later based in Paris, she combined careful measurement with the demanding chemical work needed to identify new substances. She shared the Nobel Prize in Physics in 1903 and received the Nobel Prize in Chemistry in 1911, becoming the first person to win two Nobel Prizes. Her career also helped expand opportunities for women in research and connected fundamental discoveries with scientific education and medical applications.',
        ],
      },
      {
        title: 'From Warsaw to Paris',
        paragraphs: [
          'Born in 1867 into a family of teachers, Maria Skłodowska pursued education with determination despite limited opportunities for women in her home country. She moved to Paris in 1891 and studied physics and mathematics at the Sorbonne. There she met Pierre Curie, whom she married in 1895. Their partnership brought together complementary scientific skills and a shared commitment to experimental work. Marie\'s choice of the radiation discovered by Henri Becquerel as a research subject opened a path toward discoveries that neither conventional chemical analysis nor observation alone could have established.',
        ],
      },
      {
        title: 'Polonium, radium, and measurement',
        paragraphs: [
          'Investigating uranium minerals, Curie found levels of activity that could not be explained by their uranium content alone. This suggested the presence of additional radioactive substances. In 1898 Marie and Pierre announced polonium, named for her native Poland, and radium. Identifying the elements was only the beginning: separating and characterizing tiny quantities required prolonged chemical processing and repeated measurements. The work showed how an apparently puzzling measurement could guide the search for something previously unknown. It also linked the study of radiation with new questions about the structure and behaviour of matter.',
        ],
      },
      {
        title: 'Recognition and research institutions',
        paragraphs: [
          'In 1903 Marie and Pierre Curie shared the Nobel Prize in Physics with Becquerel for research on radiation. After Pierre\'s death in 1906, Marie continued the work and took over his teaching position, becoming the first woman to hold a professorship in the Sorbonne\'s Faculty of Sciences. Her 1911 chemistry prize recognized her discoveries and work on radium. She directed the Curie Laboratory at the Radium Institute and supported the development of research facilities in Warsaw. These efforts gave other scientists access to training, equipment, and an expanding international research community.',
        ],
      },
      {
        title: 'Science in public service',
        paragraphs: [
          'During the First World War, Curie helped organize mobile X-ray services and train personnel, working with her daughter Irène and others to bring radiological examination closer to wounded soldiers. This work depended on adapting existing technology to urgent practical needs, rather than on the discovery of X-rays themselves. After the war she continued research and institution building. She died in France on 4 July 1934. Her lasting influence rests on experimental persistence, the sharing of scientific opportunity, and the conviction that knowledge could be put to useful public purposes.',
        ],
      },
    ],
    timeline: [
      {
        date: '1867',
        event: 'Born Maria Skłodowska in Warsaw on 7 November.',
      },
      {
        date: '1891',
        event: 'Moved to Paris to study at the Sorbonne.',
      },
      {
        date: '1895',
        event: 'Married Pierre Curie, her future research partner.',
      },
      {
        date: '1898',
        event: 'Announced the discoveries of polonium and radium with Pierre Curie.',
      },
      {
        date: '1903',
        event: 'Shared the Nobel Prize in Physics with Pierre Curie and Henri Becquerel.',
      },
      {
        date: '1906–1911',
        event: 'Became a professor at the Sorbonne and received the 1911 Nobel Prize in Chemistry.',
      },
      {
        date: '1914–1918',
        event: 'Helped provide radiological services and training during the First World War.',
      },
      {
        date: '1934',
        event: 'Died in France on 4 July.',
      },
    ],
    sources: [
      {
        title: 'Marie Curie: Biographical',
        publisher: 'Nobel Prize',
        url: 'https://www.nobelprize.org/prizes/chemistry/1911/marie-curie/biographical/',
      },
      {
        title: 'Marie Curie: Facts',
        publisher: 'Nobel Prize',
        url: 'https://www.nobelprize.org/prizes/physics/1903/marie-curie/',
      },
      {
        title: 'Marie Curie: War Duty, 1914–1919',
        publisher: 'American Institute of Physics',
        url: 'https://history.aip.org/exhibits/curie/war1.htm',
      },
      {
        title: 'Marie Curie, a Pioneer in Science',
        publisher: 'Institut Curie',
        url: 'https://presse.curie.fr/apres-le-pantheon-marie-curie-rejoint-le-musee-grevin/?lang=fr',
      },
    ],
    image: marieCurieImage,
  },
]

export function getHistoricalPersonById(
  id: string,
): HistoricalPerson | undefined {
  return historicalPeople.find((person) => person.id === id)
}
