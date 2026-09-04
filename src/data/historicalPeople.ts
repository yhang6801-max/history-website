import albertEinsteinImage from '../assets/people/albert-einstein.webp'
import alexanderTheGreatImage from '../assets/people/alexander-the-great.webp'
import juliusCaesarImage from '../assets/people/julius-caesar.webp'
import napoleonBonaparteImage from '../assets/people/napoleon-bonaparte.webp'
import type { HistoricalPerson } from '../types/historicalPerson'

export const historicalPeople: readonly HistoricalPerson[] = [
  {
    id: 'napoleon-bonaparte',
    name: 'Napoleon Bonaparte',
    image: napoleonBonaparteImage,
    imageAttribution: {
      sourceUrl:
        'https://commons.wikimedia.org/wiki/File:Jacques-Louis_David_-_Portrait_of_General_Bonaparte_-_WGA06077.jpg',
      author: 'Jacques-Louis David',
      licenseName: 'Public domain (Public Domain Mark 1.0)',
      licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/',
      notes:
        '“Portrait of General Bonaparte”, image source: Web Gallery of Art. Commons identifies it as public domain under PD-Art (PD-old-100): the artist died in 1825, beyond the life-plus-100-year term; faithful reproductions of two-dimensional public-domain works are also considered public domain in the United States.',
      changes: 'Cropped, resized to 900 × 1200, and converted to WebP.',
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
      sourceUrl:
        'https://commons.wikimedia.org/wiki/File:Bust_of_Julius_Caesar.jpg',
      author: 'Wilfredor',
      authorUrl: 'https://commons.wikimedia.org/wiki/User:Wilfredor',
      licenseName: 'CC0 1.0 Universal',
      licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/legalcode',
      notes:
        '“Bust of Julius Caesar”. The photographer dedicated the work to the public domain under CC0 1.0.',
      changes: 'Cropped, resized to 900 × 1200, and converted to WebP.',
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
  {
    id: 'alexander-the-great',
    name: 'Alexander the Great',
    image: alexanderTheGreatImage,
    imageAttribution: {
      sourceUrl:
        'https://commons.wikimedia.org/wiki/File:Alexander_the_Great_mosaic.jpg',
      author: 'Unknown mosaic artist; photograph: DEA / G. NIMATALLAH',
      licenseName: 'Public domain (Commons PD-Art)',
      licenseUrl:
        'https://commons.wikimedia.org/wiki/File:Alexander_the_Great_mosaic.jpg#Licensing',
      notes:
        'Detail of “Alexander the Great mosaic”, sourced from The Guardian. Original photographic credit and copyright metadata: De Agostini/Getty Images. Commons considers it public domain in the United States because the anonymous ancient work is out of copyright (PD-anon-expired) and this is a faithful reproduction of a two-dimensional work (PD-Art); rights in reproductions may differ elsewhere.',
      changes:
        'Cropped to retain Alexander on the left, enlarged to 900 × 1200, and converted to WebP.',
    },
    lifespan: '356–323 BCE',
    summary:
      'The Macedonian king who conquered the Achaemenid Persian Empire and created a vast, short-lived realm linking the Mediterranean and Asia.',
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'Alexander III of Macedon inherited the strongest army in the Greek world and used it to destroy the Achaemenid Persian Empire. In little more than a decade he campaigned from the Balkans and Egypt to Central Asia and the Punjab, founding cities and claiming the authority of both Macedonian king and Asian monarch. He never established a stable succession, and his empire fractured soon after his death. Even so, the kingdoms created by his successors carried Greek language and institutions across a broad region, while local traditions reshaped the resulting Hellenistic cultures. His reputation combines tactical brilliance with the violence and instability of conquest.',
        ],
      },
      {
        title: 'Early life and background',
        paragraphs: [
          'Alexander was born in 356 BCE at Pella to King Philip II of Macedon and Olympias of Epirus. Philip transformed Macedonia through diplomacy, conquest, and a professional army built around the long-piked phalanx and elite cavalry. Alexander received an aristocratic education; Aristotle was among his tutors, although later stories about their relationship are often embellished. As a teenager Alexander served as regent and gained military experience, and he fought in Philip’s decisive victory over Athens and Thebes at Chaeronea in 338 BCE. His achievements therefore rested on formidable institutions and plans developed before he became king.',
        ],
      },
      {
        title: 'Rise to power',
        paragraphs: [
          'Philip was assassinated in 336 BCE, and the twenty-year-old Alexander secured the throne amid a dangerous succession. He eliminated or neutralized rivals, won recognition from the League of Corinth, and campaigned north of Macedonia to restore authority in the Balkans. When Thebes revolted in 335, he captured and destroyed most of the city, killing or enslaving many inhabitants. The severity discouraged further resistance in Greece and allowed him to resume Philip’s planned invasion of Persian territory. Antipater remained in Macedonia to manage European affairs while Alexander crossed the Hellespont into Asia in spring 334 BCE.',
        ],
      },
      {
        title: 'Conquest of the Persian Empire',
        paragraphs: [
          'Alexander defeated Persian satrapal forces at the Granicus in 334 and King Darius III at Issus in 333. He then secured the eastern Mediterranean coast, taking Tyre after a seven-month siege and capturing Gaza before entering Egypt, where he was recognized as pharaoh and founded Alexandria. At Gaugamela in 331 his smaller army broke Darius’s forces, opening Babylon, Susa, and the Persian heartland. Persepolis was looted and its palace complex burned in 330, an act whose purpose remains debated. After Darius was killed by his own officers, Alexander presented himself as his avenger and successor. Resistance continued for years in Bactria and Sogdiana; Alexander combined harsh counterinsurgency with alliances, including his marriage to Roxane.',
        ],
      },
      {
        title: 'Leadership and rule',
        paragraphs: [
          'Alexander led from the front, adapted formations quickly, and coordinated infantry, cavalry, engineers, and siegecraft with exceptional skill. His personal courage strengthened loyalty but also exposed the army to the risk of losing its king. Governing conquest proved harder. He retained parts of the Achaemenid provincial system, appointed some Iranian elites, adopted elements of Persian royal dress and ceremony, and recruited Asian troops. These policies may have been pragmatic efforts to rule a diverse empire, but many Macedonians saw them as rejection of customary kingship. The executions of Philotas and Parmenion, the killing of Cleitus during a quarrel, and the attempted introduction of proskynesis deepened fears of autocracy.',
        ],
      },
      {
        title: 'India, final years, and death',
        paragraphs: [
          'In 326 BCE Alexander crossed into the Punjab and defeated King Porus at the Hydaspes, then restored Porus as a subordinate ruler. At the Hyphasis his exhausted troops refused to march farther east, forcing a return. Part of the army sailed down the Indus, while a difficult march through the Gedrosian desert caused severe losses. Back in the imperial center, Alexander staged mass marriages at Susa, confronted a mutiny at Opis, and prepared new campaigns, including one toward Arabia. He died at Babylon in June 323 BCE, aged thirty-two, after a sudden illness. Ancient accounts do not establish a certain cause, and modern diagnoses remain speculative.',
        ],
      },
      {
        title: 'Legacy and controversies',
        paragraphs: [
          'Alexander’s generals and family could not preserve a unified succession. Their wars divided his conquests into major Hellenistic kingdoms, including the Ptolemaic and Seleucid realms. New and expanded cities connected trade, administration, scholarship, and migration, helping Greek become a common language across much of the eastern Mediterranean and Near East. This exchange was never simply one-way: Egyptian, Iranian, Mesopotamian, Central Asian, and South Asian traditions shaped the new societies. Heroic traditions celebrate an undefeated commander and cultural bridge, but that image can conceal massacres, enslavement, forced settlement, and the destruction of communities from Thebes to Tyre and the Persian heartland. Iranian and other regional memories have therefore judged him very differently from many Greek and European narratives.',
        ],
      },
    ],
    timeline: [
      {
        date: '356 BCE',
        event: 'Born at Pella to Philip II of Macedon and Olympias.',
      },
      {
        date: '336–335 BCE',
        event:
          'Succeeded Philip, secured Greece and the Balkans, and destroyed Thebes after its revolt.',
      },
      {
        date: '334 BCE',
        event:
          'Crossed into Asia and won his first major victory over Persian forces at the Granicus.',
      },
      {
        date: '333–332 BCE',
        event:
          'Defeated Darius III at Issus, captured Tyre and Gaza, and entered Egypt.',
      },
      {
        date: '331–330 BCE',
        event:
          'Won at Gaugamela, occupied the Persian capitals, and advanced after the death of Darius.',
      },
      {
        date: '329–327 BCE',
        event:
          'Fought prolonged resistance in Central Asia and married Roxane.',
      },
      {
        date: '326 BCE',
        event:
          'Defeated Porus at the Hydaspes; his troops then refused to advance beyond the Hyphasis.',
      },
      {
        date: '325–324 BCE',
        event:
          'Returned through the Indus and Gedrosia, reorganized the empire, and faced the mutiny at Opis.',
      },
      {
        date: '323 BCE',
        event:
          'Died in Babylon without a settled adult successor; his empire soon divided.',
      },
    ],
    sources: [
      {
        title: 'Alexander the Great',
        publisher: 'Encyclopaedia Britannica',
        url: 'https://www.britannica.com/biography/Alexander-the-Great',
      },
      {
        title: 'Alexander the Great',
        publisher: 'Encyclopaedia Iranica',
        url: 'https://www.iranicaonline.org/articles/alexander-the-great-356-23-bc/',
      },
      {
        title: 'Alexander the Great',
        publisher: 'Livius',
        url: 'https://www.livius.org/articles/person/alexander-the-great/',
      },
      {
        title: 'Art of the Hellenistic Age and the Hellenistic Tradition',
        publisher: 'The Metropolitan Museum of Art',
        url: 'https://www.metmuseum.org/essays/art-of-the-hellenistic-age-and-the-hellenistic-tradition',
      },
    ],
  },
  {
    id: 'albert-einstein',
    name: 'Albert Einstein',
    image: albertEinsteinImage,
    imageAttribution: {
      sourceUrl:
        'https://commons.wikimedia.org/wiki/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
      author: 'Ferdinand Schmutzer; restoration: Adam Cuerden',
      licenseName: 'Public domain (Public Domain Mark 1.0)',
      licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/',
      notes:
        'Photograph taken in Vienna in 1921. Original image source: Bern Historical Museum; photographic studies held by the Austrian National Library. Commons cites PD-Austria and expiration of the author’s copyright term (Schmutzer died in 1928). The restorer also grants an irrevocable license for unrestricted use if needed and requests attribution.',
      changes:
        'Commons restoration, proportionally resized to 1200 × 1576 through an image proxy, then cropped, resized to 900 × 1200, and converted to WebP.',
    },
    lifespan: '1879–1955',
    summary:
      'A theoretical physicist who transformed ideas of space, time, gravity, and light, while using his international fame to speak on war, persecution, and intellectual freedom.',
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'Albert Einstein changed the foundations of modern physics through work on relativity, the quantum nature of light, and the motion of atoms. His special and general theories of relativity replaced familiar assumptions about absolute time and gravity with a different account of the physical world. The 1921 Nobel Prize in Physics recognized his contributions to theoretical physics, especially his explanation of the photoelectric effect. Beyond science, Einstein became an internationally recognized public figure whose life was shaped by migration, antisemitism, and arguments over the responsibilities of scientists.',
        ],
      },
      {
        title: 'Early life and education',
        paragraphs: [
          'Einstein was born on 14 March 1879 in Ulm, Germany, to a Jewish family and grew up in Munich. After his family moved to Italy, he continued his education in Switzerland, attending school in Aarau before entering the Federal Polytechnic in Zurich in 1896. He graduated in 1900 and became a Swiss citizen in 1901. Unable at first to secure a permanent academic position, he found work examining patent applications in Bern. He married his former classmate Mileva Marić in 1903, and received his doctorate from the University of Zurich in 1905. Their marriage ended in 1919, when he married Elsa Löwenthal.',
        ],
      },
      {
        title: 'The breakthrough papers of 1905',
        paragraphs: [
          'While working at the patent office, Einstein published four papers that opened new directions in physics. He proposed that light could exchange energy in discrete packets, helping explain why light must exceed a threshold frequency to release electrons from a metal. His account of Brownian motion connected the irregular movement of suspended particles to collisions with molecules, strengthening the evidence for atoms. Special relativity reconciled electromagnetic theory with the principle that physical laws are the same for observers moving uniformly relative to one another. A further paper connected changes in mass and energy, a relationship now expressed as E = mc².',
        ],
      },
      {
        title: 'General relativity and international recognition',
        paragraphs: [
          'Einstein moved into academic posts in Zurich and Prague before settling in Berlin in 1914. His effort to extend relativity to gravity culminated in the general theory of relativity in 1915. It described gravity through the geometry of spacetime, with matter and energy influencing that geometry. Observations of starlight during the 1919 solar eclipse supported a key prediction and helped make him famous far beyond scientific circles. The 1921 Nobel Prize, awarded in 1922, specifically highlighted the law of the photoelectric effect rather than relativity. His success reflected several distinct contributions, rather than a single discovery.',
        ],
      },
      {
        title: 'Quantum theory and the search for unity',
        paragraphs: [
          'Einstein helped establish quantum physics, yet questioned whether its mathematical description captured all of physical reality. His disagreement concerned the completeness and interpretation of the theory, not a refusal to acknowledge its successful predictions. In 1935 he collaborated with Boris Podolsky and Nathan Rosen on the paper now known as EPR, which made correlations between separated systems central to that debate. At the Institute for Advanced Study he also pursued a unified account of gravity and electromagnetism. That search did not produce an accepted unified theory, but it remained a central commitment of his later scientific life.',
        ],
      },
      {
        title: 'Exile, war, and public commitments',
        paragraphs: [
          'After the Nazis took power in 1933, Einstein settled in the United States and joined the Institute for Advanced Study in Princeton, New Jersey. He supported refugees from Nazi persecution and became an American citizen in 1940. Fear that Germany might develop nuclear weapons led him to sign a 1939 letter to President Franklin D. Roosevelt, encouraged by Leo Szilard and fellow physicists, urging attention to uranium research. Einstein did not work on the Manhattan Project or design the atomic bomb. His opposition to racism and political intimidation also brought him into public disputes: in 1953 he urged teacher William Frauenglass to resist a Senate investigation that threatened freedom of thought and teaching.',
        ],
      },
      {
        title: 'Final years and legacy',
        paragraphs: [
          'Einstein continued scientific work and public advocacy in Princeton during his final years. He supported nuclear disarmament, civil liberties, and international cooperation, and declined an offer to become president of Israel in 1952. He died in Princeton on 18 April 1955. His reputation as a symbol of genius can obscure both the range of his work and its unfinished ambitions. The physicist who helped create quantum theory also became one of its most persistent critics, while the pacifist who warned Roosevelt about atomic weapons later argued against nuclear danger. His career links scientific imagination with difficult questions about political responsibility.',
        ],
      },
    ],
    timeline: [
      {
        date: '1879',
        event: 'Born in Ulm, Germany, on 14 March.',
      },
      {
        date: '1896–1901',
        event:
          'Studied at the Federal Polytechnic in Zurich, graduated in 1900, and became a Swiss citizen in 1901.',
      },
      {
        date: '1905',
        event:
          'Completed his doctorate and published papers on light quanta, Brownian motion, special relativity, and mass–energy equivalence.',
      },
      {
        date: '1914–1915',
        event:
          'Moved to Berlin and completed the general theory of relativity.',
      },
      {
        date: '1919',
        event:
          'Eclipse observations supported the predicted bending of starlight and brought worldwide recognition.',
      },
      {
        date: '1921–1922',
        event:
          'Awarded the 1921 Nobel Prize in Physics in 1922, especially for the law of the photoelectric effect.',
      },
      {
        date: '1933–1935',
        event:
          'Joined the Institute for Advanced Study in Princeton; later coauthored the EPR paper with Podolsky and Rosen.',
      },
      {
        date: '1939–1940',
        event:
          'Signed the letter to Roosevelt about nuclear research and became an American citizen the following year.',
      },
      {
        date: '1952–1955',
        event:
          'Declined the presidency of Israel, continued scientific and public work, and died in Princeton on 18 April 1955.',
      },
    ],
    sources: [
      {
        title: 'Albert Einstein — Biographical',
        publisher: 'Nobel Prize',
        url: 'https://www.nobelprize.org/prizes/physics/1921/einstein/biographical/',
      },
      {
        title: 'Albert Einstein — Facts',
        publisher: 'Nobel Prize',
        url: 'https://www.nobelprize.org/prizes/physics/1921/einstein/facts/',
      },
      {
        title: 'Albert Einstein: In Brief',
        publisher: 'Institute for Advanced Study',
        url: 'https://www.ias.edu/albert-einstein-brief',
      },
      {
        title: 'Albert Einstein: The Great Works',
        publisher: 'Institute for Advanced Study',
        url: 'https://www.ias.edu/albert-einstein-great-works',
      },
      {
        title: 'The Advent and Fallout of EPR',
        publisher: 'Institute for Advanced Study',
        url: 'https://www.ias.edu/ideas/2013/epr-fallout',
      },
      {
        title: 'Manhattan Project Pioneers: Albert Einstein',
        publisher: 'U.S. National Park Service',
        url: 'https://www.nps.gov/people/manhattan-project-pioneers-albert-einstein.htm',
      },
      {
        title: 'Einstein, Plumbers, and McCarthyism',
        publisher: 'Institute for Advanced Study',
        url: 'https://www.ias.edu/ideas/2017/einstein-mccarthyism',
      },
    ],
  },
]

export function getHistoricalPersonById(
  id: string,
): HistoricalPerson | undefined {
  return historicalPeople.find((person) => person.id === id)
}
