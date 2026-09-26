import {
  TimelineItem,
  QuoteItem,
  VisionPillar,
  GalleryItem,
  LeaderTribute,
  QuizQuestion,
  CitizenTributeMessage,
} from '../types';

// High-Res Historic Imagery (ESM imports so Vite bundles & hashes them correctly for production/publish)
import HERO_IMAGE from '../assets/images/quaid_portrait_hero_1790250578370.jpg';
import MAZAR_IMAGE from '../assets/images/mazar_e_quaid_tribute_1790250599581.jpg';
import LAHORE_RESOLUTION_IMAGE from '../assets/images/lahore_resolution_1940_1790250615421.jpg';
import SPEECH_11_AUGUST_IMAGE from '../assets/images/quaid_11august_speech_1790250632202.jpg';
import YOUTH_IMAGE from '../assets/images/quaid_youth_dialogue_1790250645095.jpg';
import QUAID_SUIT_IMAGE from '../assets/images/quaid_monocle_suit_1790251549503.jpg';
import QUAID_FATIMA_IMAGE from '../assets/images/quaid_fatima_jinnah_1790251566888.jpg';
import ZIARAT_RESIDENCY_IMAGE from '../assets/images/quaid_ziarat_residency_1790251583034.jpg';
import MAZAR_INTERIOR_IMAGE from '../assets/images/mazar_interior_chandelier_1790251948901.jpg';
import STAMP_IMAGE from '../assets/images/quaid_postal_stamp_1790251969612.jpg';

export {
  HERO_IMAGE,
  MAZAR_IMAGE,
  LAHORE_RESOLUTION_IMAGE,
  SPEECH_11_AUGUST_IMAGE,
  YOUTH_IMAGE,
  QUAID_SUIT_IMAGE,
  QUAID_FATIMA_IMAGE,
  ZIARAT_RESIDENCY_IMAGE,
  MAZAR_INTERIOR_IMAGE,
  STAMP_IMAGE,
};

export const PORTRAIT_OPTIONS = [
  { id: 'sherwani', title: 'Formal Sherwani & Karakuli Cap', image: HERO_IMAGE, subtitle: 'Iconic State Leader Portrait' },
  { id: 'suit', title: 'Savile Row Suit & Monocle', image: QUAID_SUIT_IMAGE, subtitle: 'Young Barrister & Constitutional Titan' },
  { id: 'fatima', title: 'Quaid with Madar-e-Millat Fatima Jinnah', image: QUAID_FATIMA_IMAGE, subtitle: 'Championing Women Leadership' },
  { id: 'ziarat', title: 'Historic Ziarat Residency, Balochistan', image: ZIARAT_RESIDENCY_IMAGE, subtitle: 'Summer Headquarters & Memorial' },
];

export interface TourHotspot {
  id: string;
  x: number;
  y: number;
  title: string;
  titleUrdu: string;
  description: string;
  historicalFact: string;
}

export interface LandmarkTourItem {
  id: string;
  name: string;
  nameUrdu: string;
  city: string;
  image: string;
  overview: string;
  hotspots: TourHotspot[];
}

export const LANDMARK_TOURS: LandmarkTourItem[] = [
  {
    id: 'mazar-interior',
    name: 'Mazar-e-Quaid Interior Sanctuary',
    nameUrdu: 'مزارِ قائد - اندرونی ہال اور فانوس',
    city: 'Karachi, Sindh',
    image: MAZAR_INTERIOR_IMAGE,
    overview: 'The inner sanctum of Mazar-e-Quaid featuring the four-tiered Chinese crystal chandelier and pure white Italian marble sarcophagus.',
    hotspots: [
      {
        id: 'hs-chandelier',
        x: 50,
        y: 28,
        title: 'Four-Tiered Crystal Chandelier',
        titleUrdu: 'عظیم الشان کرسٹل فانوس',
        description: 'An 80-foot grand crystal chandelier gifted to Pakistan by the Muslims of the People’s Republic of China and Premier Zhou Enlai in 1970.',
        historicalFact: 'It weighs over 2.3 tons and contains 48 lamps arranged in concentric tiers symbolizing friendship and reverence.'
      },
      {
        id: 'hs-cenotaph',
        x: 50,
        y: 72,
        title: 'Sacred White Marble Cenotaph',
        titleUrdu: 'سفید سنگِ مرمر کا تعویذ',
        description: 'The ceremonial sarcophagus carved with Quranic calligraphy and intricate floral arabesques over the subterranean burial chamber.',
        historicalFact: 'The actual grave of Quaid-e-Azam rests directly beneath this cenotaph in an underground chamber.'
      },
      {
        id: 'hs-railing',
        x: 28,
        y: 65,
        title: 'Silver Ceremonial Jali Railing',
        titleUrdu: 'نقش دار چاندی کی جالی',
        description: 'Intricately handcrafted solid silver railing with Moorish geometric latticework surrounding the sacred resting space.',
        historicalFact: 'Crafted by master Pakistani silversmiths to preserve solemn protocol and architectural grandeur.'
      },
      {
        id: 'hs-guard',
        x: 74,
        y: 60,
        title: 'Ceremonial Guard of Honour',
        titleUrdu: 'گارڈ آف آنر اور سلامی',
        description: 'Cadets of Pakistan Military Academy (PMA) Kakul and Pakistan Air Force maintain a solemn 24/7 vigil.',
        historicalFact: 'The changing of the guards on 25 December is one of the most prestigious national military ceremonies in Pakistan.'
      }
    ]
  },
  {
    id: 'ziarat-residency',
    name: 'Historic Quaid Residency',
    nameUrdu: 'قائد اعظم ریزیڈنسی، زیارت',
    city: 'Ziarat, Balochistan',
    image: ZIARAT_RESIDENCY_IMAGE,
    overview: 'The tranquil wooden heritage residence nestled among 2,000-year-old juniper forests where Quaid-e-Azam spent his memorable final months in 1948.',
    hotspots: [
      {
        id: 'hs-balcony',
        x: 48,
        y: 38,
        title: 'Panoramic Wooden Balcony',
        titleUrdu: 'لکڑی کا تاریخی جھروکا',
        description: 'The first-floor wooden balcony where Quaid-e-Azam dictated state correspondence while breathing the pure mountain juniper air.',
        historicalFact: 'Quaid was attended here by Dr. Ilahi Bakhsh and his devoted sister Fatima Jinnah.'
      },
      {
        id: 'hs-gardens',
        x: 25,
        y: 75,
        title: 'Ancient Juniper Arboretum',
        titleUrdu: 'صدیوں پرانے صنوبر کے باغات',
        description: 'One of the oldest and largest juniper forest reserves in the world, surrounding the historic monument with natural serenity.',
        historicalFact: 'Preserved under national heritage protection as a sacred site of reflection.'
      }
    ]
  },
  {
    id: 'lahore-minar',
    name: 'Minar-e-Pakistan & Minto Park',
    nameUrdu: 'مینارِ پاکستان اور یادگارِ قرارداد',
    city: 'Lahore, Punjab',
    image: LAHORE_RESOLUTION_IMAGE,
    overview: 'The monumental park in Lahore where over 100,000 delegates gathered on 23 March 1940 to pass the historic Pakistan Resolution.',
    hotspots: [
      {
        id: 'hs-dais',
        x: 50,
        y: 50,
        title: '1940 Presidential Dais',
        titleUrdu: 'خطبہ صدارت کا تاریخی اسٹیج',
        description: 'The exact podium where Quaid-e-Azam delivered his historic two-hour address defining the distinct nationhood of Muslims.',
        historicalFact: 'His proclamation that "Musalmans are a nation" galvanized the entire freedom movement.'
      }
    ]
  }
];

export const INITIAL_CITIZEN_TRIBUTES: CitizenTributeMessage[] = [
  {
    id: 'msg-1',
    name: 'Barrister Daniyal Khan',
    city: 'Karachi',
    message: 'Quaid-e-Azam taught us that constitutional law and incorruptible integrity can defeat empires. As a young lawyer, your life remains my guiding star. Pakistan Zindabad!',
    timestamp: 'Just now',
    likes: 342,
    badge: 'Civic Leader'
  },
  {
    id: 'msg-2',
    name: 'Dr. Ayesha Siddiqui',
    city: 'Lahore',
    message: 'Your vision of women standing shoulder to shoulder with men inspires every female doctor, engineer, and scholar in Pakistan. Salam to Baba-e-Qaum!',
    timestamp: '5 mins ago',
    likes: 289,
    badge: 'Gold Patriot'
  },
  {
    id: 'msg-3',
    name: 'Farhan Ali & Family',
    city: 'Islamabad',
    message: '25 December is a day of renewing our pledge to Unity, Faith, and Discipline. May Almighty Allah bless the soul of our great founder!',
    timestamp: '12 mins ago',
    likes: 195,
    badge: 'Verified Citizen'
  },
  {
    id: 'msg-4',
    name: 'Zainab Baloch',
    city: 'Quetta',
    message: 'Visiting Ziarat Residency today filled our hearts with immense gratitude. Quaid’s words on minority rights and provincial fraternity are eternal.',
    timestamp: '25 mins ago',
    likes: 154,
    badge: 'Youth Delegate'
  },
  {
    id: 'msg-5',
    name: 'Hamza Afridi',
    city: 'Peshawar',
    message: 'Integrity, rule of law, and relentless devotion to duty — this is the Pakistan Quaid envisioned and this is the Pakistan we will build together.',
    timestamp: '40 mins ago',
    likes: 210,
    badge: 'National Pledger'
  }
];

export const HISTORICAL_TIMELINE: TimelineItem[] = [
  {
    id: 'tl-1876',
    year: '1876',
    exactDate: '25 December 1876',
    title: 'Birth at Wazir Mansion, Karachi',
    subtitle: 'The dawn of a visionary leader',
    description: 'Muhammad Ali Jinnah was born into a prominent merchant family at Wazir Mansion in Kharadar, Karachi, Sindh.',
    detailedText: 'Born to Jinnahbhai Poonja and Mithibai, Muhammad Ali displayed remarkable intellect, independence of thought, and disciplined habits from early childhood. His birthplace, Wazir Mansion in Karachi, stands today as a preserved national museum and heritage monument.',
    image: HERO_IMAGE,
    category: 'Early Life',
    location: 'Karachi, Sindh',
    quoteExcerpt: 'Character, courage, industry, and perseverance are the four pillars on which the whole edifice of human life can be built.'
  },
  {
    id: 'tl-1892',
    year: '1892',
    exactDate: 'November 1892',
    title: 'Departure for England & Lincoln’s Inn',
    subtitle: 'The youngest Indian called to the Bar',
    description: 'At age 16, Jinnah sailed to London to join Lincoln’s Inn, captivated by the name of the Holy Prophet Muhammad (PBUH) inscribed at the entrance among the great lawgivers of human history.',
    detailedText: 'Passing his law examinations in record time, Jinnah was called to the Bar at just 19 years old. During his years in Britain, he closely observed British Parliamentary democracy, developed his legendary oratory skills, and adopted his impeccably tailored sartorial elegance.',
    image: QUAID_SUIT_IMAGE,
    category: 'Legal Career',
    location: 'London, United Kingdom'
  },
  {
    id: 'tl-1896',
    year: '1896',
    exactDate: '1896 - 1900',
    title: 'Legal Practice in Bombay',
    subtitle: 'Unsurpassed integrity and master of jurisprudence',
    description: 'Jinnah established his legal practice at the Bombay High Court, quickly rising to become one of the most sought-after and respected barristers in the subcontinent.',
    detailedText: 'Known for his absolute incorruptibility, razor-sharp legal acumen, and fearless advocacy, Jinnah never charged more than his agreed fee and never accepted a brief he did not believe in. Judges and peers alike marveled at his brevity, precision, and commanding courtroom presence.',
    image: QUAID_SUIT_IMAGE,
    category: 'Legal Career',
    location: 'Bombay (Mumbai)'
  },
  {
    id: 'tl-1906',
    year: '1906',
    exactDate: 'December 1906',
    title: 'Entry into Politics & Congress',
    subtitle: 'Advocate for constitutional self-governance',
    description: 'Jinnah served as private secretary to Dadabhai Naoroji at the Calcutta Congress, championing self-rule and civil liberties through constitutional pathways.',
    detailedText: 'Firmly convinced that constitutional dialogue and strict adherence to rule of law were the only civilized means of achieving independence, Jinnah was hailed as an enlightened patriot and constitutional titan.',
    image: HERO_IMAGE,
    category: 'Politics',
    location: 'Calcutta (Kolkata)'
  },
  {
    id: 'tl-1913',
    year: '1913',
    exactDate: 'October 1913',
    title: 'Joining All-India Muslim League',
    subtitle: 'Pledging allegiance to the rights of the Muslim nation',
    description: 'At the urging of Maulana Muhammad Ali Jauhar and Syed Wazir Hasan, Jinnah joined the All-India Muslim League with the solemn condition that his loyalty to the broader national cause would remain unhindered.',
    detailedText: 'For several years, Jinnah held dual membership in both the Congress and the Muslim League, striving tirelessly to forge lasting communal unity and political understanding across India.',
    image: LAHORE_RESOLUTION_IMAGE,
    category: 'Politics',
    location: 'London / Lucknow'
  },
  {
    id: 'tl-1916',
    year: '1916',
    exactDate: 'December 1916',
    title: 'The Lucknow Pact & Title of Unity Ambassador',
    subtitle: 'Hailed as "The Ambassador of Hindu-Muslim Unity"',
    description: 'Jinnah architected the historic Lucknow Pact between the Muslim League and Congress, securing separate electorates and mutual safeguards.',
    detailedText: 'Famous poet and nationalist Sarojini Naidu penned a glowing biography of Jinnah, honoring him as "The Ambassador of Hindu-Muslim Unity" for his exceptional statesmanship and commitment to minority safeguards.',
    image: HERO_IMAGE,
    category: 'Politics',
    location: 'Lucknow'
  },
  {
    id: 'tl-1929',
    year: '1929',
    exactDate: 'March 1929',
    title: 'The Famous 14 Points of Jinnah',
    subtitle: 'Constitutional blueprint for minority preservation',
    description: 'In response to the Nehru Report, Jinnah formulated his definitive 14 Points, outlining constitutional guarantees for Muslims in a federal India.',
    detailedText: 'Jinnah’s 14 Points demanded provincial autonomy, one-third Muslim representation in the Central Legislature, separate electorates, and statutory religious freedoms. It marked the moment where Jinnah recognized that the rights of Muslims required permanent constitutional entrenchment.',
    image: QUAID_SUIT_IMAGE,
    category: 'Politics',
    location: 'Delhi'
  },
  {
    id: 'tl-1940',
    year: '1940',
    exactDate: '23 March 1940',
    title: 'The Historic Lahore Resolution',
    subtitle: 'The formal proclamation of the Pakistan Movement',
    description: 'At Minto Park (now Iqbal Park), Lahore, the Muslim League adopted the Lahore Resolution demanding independent sovereign states for Muslims of the subcontinent.',
    detailedText: 'Quaid-e-Azam declared in his presidential address: "Musalmans are not a minority as it is commonly known and understood... Musalmans are a nation according to any definition of a nation, and they must have their homelands, their territory, and their State." This historic day gave birth to the concrete struggle for Pakistan.',
    image: LAHORE_RESOLUTION_IMAGE,
    category: 'Pakistan Movement',
    location: 'Lahore, Punjab',
    quoteExcerpt: 'Musalmans are a nation according to any definition of a nation, and they must have their homelands.'
  },
  {
    id: 'tl-1947-aug11',
    year: '1947',
    exactDate: '11 August 1947',
    title: 'Presidential Address to Constituent Assembly',
    subtitle: 'The Magna Carta of Pakistan’s inclusive and democratic vision',
    description: 'Quaid-e-Azam delivered his immortal address outlining absolute freedom of religion, equality before law, and eradication of corruption.',
    detailedText: 'Addressing the inaugural session of Pakistan’s Constituent Assembly in Karachi, Quaid-e-Azam declared: "You are free; you are free to go to your temples, you are free to go to your mosques or to any other place of worship in this State of Pakistan. You may belong to any religion, caste or creed — that has nothing to do with the business of the State."',
    image: SPEECH_11_AUGUST_IMAGE,
    category: 'Independence',
    location: 'Karachi, Sindh',
    quoteExcerpt: 'You are free; you are free to go to your temples, you are free to go to your mosques or to any other place of worship in this State of Pakistan.'
  },
  {
    id: 'tl-1947-aug14',
    year: '1947',
    exactDate: '14 August 1947',
    title: 'Emergence of Pakistan & 1st Governor-General',
    subtitle: 'The largest Muslim state on the world map',
    description: 'Pakistan achieved independence at midnight, and Quaid-e-Azam took oath as the first Governor-General of Pakistan.',
    detailedText: 'Against overwhelming geopolitical odds, Quaid-e-Azam altered the course of history through sheer constitutional mastery, legal will, and unbroken mass support. A new nation of 70 million souls was born on the map of the world without fired bullets, but through democratic votes and legal battles.',
    image: MAZAR_IMAGE,
    category: 'Independence',
    location: 'Karachi, Pakistan'
  },
  {
    id: 'tl-1948-jul',
    year: '1948',
    exactDate: '1 July 1948',
    title: 'Inauguration of State Bank of Pakistan',
    subtitle: 'Establishing financial independence and Islamic economic ethics',
    description: 'Quaid-e-Azam inaugurated the State Bank of Pakistan, outlining an economic vision free from predatory exploitation.',
    detailedText: 'In his final major public address, Quaid-e-Azam advised Pakistani economists to develop an economic system that promotes true human welfare and social justice rather than the unrestrained materialism of the Western debt cycle.',
    image: HERO_IMAGE,
    category: 'Independence',
    location: 'Karachi, Pakistan'
  },
  {
    id: 'tl-1948-sep',
    year: '1948',
    exactDate: '11 September 1948',
    title: 'Passing of the Father of the Nation',
    subtitle: 'An immortal legacy etched in the hearts of millions',
    description: 'Quaid-e-Azam breathed his last at the Governor-General’s House, Karachi, leaving behind a free nation and an eternal philosophy.',
    detailedText: 'Over one million people attended his state funeral. He was laid to rest in Karachi, where the magnificent white marble Mazar-e-Quaid now stands as a symbol of eternal gratitude from a grateful nation.',
    image: ZIARAT_RESIDENCY_IMAGE,
    category: 'Independence',
    location: 'Karachi / Ziarat, Pakistan'
  }
];

export const HISTORICAL_QUOTES: QuoteItem[] = [
  {
    id: 'q-1',
    quote: 'With faith, discipline, and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.',
    quoteUrdu: 'ایمان، اتحاد اور تنظیم کے ساتھ اگر آپ خلوصِ نیت سے کام کریں تو کوئی ایسی چیز نہیں جسے آپ حاصل نہ کر سکیں۔',
    attribution: 'Quaid-e-Azam Muhammad Ali Jinnah',
    occasion: 'Address to Officers of the Armed Forces',
    year: '1947',
    category: 'Unity & Discipline',
    highlightWord: 'Devotion'
  },
  {
    id: 'q-2',
    quote: 'You are free; you are free to go to your temples, you are free to go to your mosques or to any other place of worship in this State of Pakistan. You may belong to any religion or caste or creed — that has nothing to do with the business of the State.',
    quoteUrdu: 'آپ آزاد ہیں، آپ اپنے مندروں میں جانے کے لیے آزاد ہیں، آپ اپنی مسجدوں یا پاکستان کی اس ریاست میں کسی بھی دوسری عبادت گاہ میں جانے کے لیے آزاد ہیں۔ آپ کا تعلق کسی بھی مذہب، ذات یا عقیدے سے ہو، اس کا ریاست کے کاروبار سے کوئی تعلق نہیں۔',
    attribution: 'Quaid-e-Azam Muhammad Ali Jinnah',
    occasion: 'Presidential Address to the Constituent Assembly',
    year: '11 August 1947',
    category: 'Minorities & Democracy',
    highlightWord: 'Freedom'
  },
  {
    id: 'q-3',
    quote: 'No nation can make any progress which neglects its women. No nation can rise to the height of glory unless your women are side by side with you.',
    quoteUrdu: 'کوئی بھی قوم اس وقت تک ترقی نہیں کر سکتی جو اپنی خواتین کو نظر انداز کرے۔ کوئی قوم اس وقت تک عروج حاصل نہیں کر سکتی جب تک اس کی عورتیں مردوں کے شانہ بشانہ کھڑی نہ ہوں۔',
    attribution: 'Quaid-e-Azam Muhammad Ali Jinnah',
    occasion: 'Speech at Muslim University, Aligarh',
    year: '1944',
    category: 'Women Empowerment',
    highlightWord: 'Women'
  },
  {
    id: 'q-4',
    quote: 'Pakistan not only means freedom and independence but the Muslim Ideology on which it has to be preserved, which has come to us as a precious gift and treasure.',
    quoteUrdu: 'پاکستان کا مطلب صرف آزادی اور خود مختاری ہی نہیں بلکہ وہ نظریہ بھی ہے جس کی بنیاد پر اس کی حفاظت کرنی ہے اور جو ہمارے پاس ایک قیمتی تحفہ اور امانت کے طور پر آیا ہے۔',
    attribution: 'Quaid-e-Azam Muhammad Ali Jinnah',
    occasion: 'Message to Frontier Muslim Students Federation',
    year: '18 June 1945',
    category: 'Faith & Nation',
    highlightWord: 'Ideology'
  },
  {
    id: 'q-5',
    quote: 'My young friends, I look forward to you as the real makers of Pakistan, do not be exploited and do not be misled. Create among yourselves complete unity and solidarity.',
    quoteUrdu: 'میرے نوجوان دوستو! میں آپ کو پاکستان کا اصل معمار سمجھتا ہوں۔ اپنے آپ کو کسی کے ہاتھوں استعمال نہ ہونے دیں اور نہ گمراہ ہوں۔ اپنے اندر مکمل اتحاد اور یکجہتی پیدا کریں۔',
    attribution: 'Quaid-e-Azam Muhammad Ali Jinnah',
    occasion: 'Address to Students at Dacca University',
    year: '21 March 1948',
    category: 'Youth & Education',
    highlightWord: 'Youth'
  },
  {
    id: 'q-6',
    quote: 'One of the biggest curses from which India is suffering is bribery and corruption. That really is a poison. We must put that down with an iron hand.',
    quoteUrdu: 'ایک سب سے بڑی لعنت جس کا شکار یہ خطہ رہا ہے، وہ رشوت ستانی اور بدعنوانی ہے۔ یہ دراصل زہر ہے۔ ہمیں آہنی ہاتھوں سے اس کا قلع قمع کرنا ہوگا۔',
    attribution: 'Quaid-e-Azam Muhammad Ali Jinnah',
    occasion: 'Inaugural Address to Constituent Assembly',
    year: '11 August 1947',
    category: 'Integrity & Law',
    highlightWord: 'Integrity'
  },
  {
    id: 'q-7',
    quote: 'Expect the best, prepare for the worst. There is no power on earth that can undo Pakistan.',
    quoteUrdu: 'بہترین کی امید رکھو اور بدترین کے لیے تیار رہو۔ دنیا کی کوئی طاقت پاکستان کو مٹا نہیں سکتی۔',
    attribution: 'Quaid-e-Azam Muhammad Ali Jinnah',
    occasion: 'Public Address at Karachi',
    year: '30 October 1947',
    category: 'Faith & Nation',
    highlightWord: 'Resolve'
  },
  {
    id: 'q-8',
    quote: 'Education is a matter of life and death for Pakistan. The world is progressing so rapidly that without requisite advance in education, not only shall we lag behind others but may be wiped out altogether.',
    quoteUrdu: 'تعلیم پاکستان کے لیے زندگی اور موت کا مسئلہ ہے۔ دنیا اتنی تیزی سے آگے بڑھ رہی ہے کہ تعلیم کے میدان میں ترقی کے بغیر ہم نہ صرف دوسروں سے پیچھے رہ جائیں گے بلکہ شاید ہمارا وجود ہی مٹ جائے۔',
    attribution: 'Quaid-e-Azam Muhammad Ali Jinnah',
    occasion: 'All Pakistan Educational Conference, Karachi',
    year: '27 November 1947',
    category: 'Youth & Education',
    highlightWord: 'Education'
  },
  {
    id: 'q-9',
    quote: 'Work, work, and work, and we are bound to succeed. We must have unity, faith and discipline as our guiding stars.',
    quoteUrdu: 'کام، کام اور بس کام؛ کامیابی لازماً ہمارے قدم چومے گی۔ اتحاد، ایمان اور نظم و ضبط کو ہمارا رہبر ہونا چاہیے۔',
    attribution: 'Quaid-e-Azam Muhammad Ali Jinnah',
    occasion: 'Message on 1st Independence Anniversary',
    year: '14 August 1948',
    category: 'Unity & Discipline',
    highlightWord: 'Work'
  }
];

export const VISION_PILLARS: VisionPillar[] = [
  {
    id: 'vision-rule-of-law',
    title: 'Rule of Law & Constitutionalism',
    titleUrdu: 'آئین اور قانون کی حکمرانی',
    corePrinciple: 'Justice without fear or favor; equality of all citizens before the constitution.',
    description: 'Quaid-e-Azam believed that no society could flourish without uncompromising respect for the law, judicial independence, and equal protection for every citizen.',
    historicReference: '“No matter how high you are, the law is always above you. The judicial system must remain inviolable.”',
    speechDate: '1947 Presidential Address',
    keyPoints: [
      'Constitutional governance over authoritarianism',
      'Absolute equality of citizens regardless of rank or wealth',
      'Judicial independence and fearless administration of justice',
      'Zero tolerance for lawlessness or mob rule'
    ],
    iconName: 'Scale',
    color: '#10b981'
  },
  {
    id: 'vision-minorities',
    title: 'Religious Freedom & Minority Rights',
    titleUrdu: 'مذہبی آزادی اور اقلیتوں کے حقوق',
    corePrinciple: 'Full citizenship, absolute protection of worship places, and zero religious discrimination.',
    description: 'In his landmark 11 August 1947 address, Jinnah outlined a secular, non-discriminatory state model where faith is the personal business of the individual, not the state.',
    historicReference: '“You may belong to any religion, caste or creed — that has nothing to do with the business of the State.”',
    speechDate: '11 August 1947',
    keyPoints: [
      'White stripe in Pakistan flag intentionally honoring non-Muslims',
      'Equal constitutional rights and protection for all faiths',
      'Sanctity of temples, churches, gurdwaras, and mosques',
      'State impartiality in matters of personal faith'
    ],
    iconName: 'ShieldCheck',
    color: '#d4af37'
  },
  {
    id: 'vision-women',
    title: 'Women Empowerment & Equality',
    titleUrdu: 'خواتین کی خودمختاری اور شانہ بشانہ کردار',
    corePrinciple: 'No nation can rise to glory without women participating fully in public life.',
    description: 'At a time when female participation in politics was minimal across Asia, Quaid-e-Azam placed his sister Fatima Jinnah at the vanguard of the Pakistan Movement and championed women’s education and professional freedom.',
    historicReference: '“No nation can make any progress which neglects its women.”',
    speechDate: 'Aligarh, 1944',
    keyPoints: [
      'Active political, social, and economic mobilization of women',
      'Equal access to higher education and professional careers',
      'Rejection of medieval restrictions that impede female advancement',
      'Madar-e-Millat Fatima Jinnah as a living model of leadership'
    ],
    iconName: 'Users',
    color: '#34d399'
  },
  {
    id: 'vision-youth',
    title: 'Youth as the Nation’s Architects',
    titleUrdu: 'نوجوان: پاکستان کے حقیقی معمار',
    corePrinciple: 'Intellectual rigor, critical thinking, technical education, and steadfast patriotism.',
    description: 'Quaid-e-Azam invested his deepest hopes in the students and youth, urging them to master science, technology, commerce, and statecraft rather than getting enticed by destructive politics.',
    historicReference: '“My young friends, I look forward to you as the real makers of Pakistan.”',
    speechDate: 'Dacca, 1948',
    keyPoints: [
      'Focus on science, engineering, statecraft, and literature',
      'Immunity from sectarianism and divisive propaganda',
      'Constructive character building through service',
      'Leadership grounded in honesty and intellectual depth'
    ],
    iconName: 'GraduationCap',
    color: '#fbbf24'
  },
  {
    id: 'vision-integrity',
    title: 'Eradication of Corruption & Nepotism',
    titleUrdu: 'بدعنوانی اور اقرباء پروری کا خاتمہ',
    corePrinciple: 'Unsparing accountability, austere governance, and merit-based institutional design.',
    description: 'Quaid-e-Azam identified corruption, black-marketing, nepotism, and jobbery as mortal poisons threatening the new state, urging the administration to crush them with an iron hand.',
    historicReference: '“Nepotism and jobbery are evils that must be rooted out relentlessly.”',
    speechDate: '11 August 1947',
    keyPoints: [
      'Strict austerity in public expenditure and state offices',
      'Meritocracy over familial or tribal connections',
      'Total transparency in government appointments',
      'Personal incorruptibility exemplified by Quaid himself'
    ],
    iconName: 'Award',
    color: '#059669'
  },
  {
    id: 'vision-economy',
    title: 'Socio-Economic Justice & Self-Reliance',
    titleUrdu: 'معاشی خود انحصاری اور سماجی انصاف',
    corePrinciple: 'An economic system serving the common citizen, avoiding exploitation and debt traps.',
    description: 'Inaugurating the State Bank of Pakistan in 1948, Quaid-e-Azam called for an economic system rooted in social welfare, equity, and genuine human uplift rather than predatory capitalism.',
    historicReference: '“We must work our destiny in our own way and present to the world an economic system based on the true concept of equality of manhood and social justice.”',
    speechDate: '1 July 1948',
    keyPoints: [
      'Promotion of domestic industry and scientific agriculture',
      'Fair distribution of wealth and elimination of feudal abuse',
      'Sovereign currency and autonomous monetary policy',
      'Economic independence as the guardian of political liberty'
    ],
    iconName: 'Coins',
    color: '#f59e0b'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Great Leader — Formal Karakul Portrait',
    year: '1947',
    location: 'Karachi, Sindh',
    category: 'Quaid-e-Azam',
    imageUrl: HERO_IMAGE,
    description: 'A dignified studio portrait of Muhammad Ali Jinnah in his signature Karakuli cap and formal sherwani, embodying the grace and determination of the Father of the Nation.',
    archivalSource: 'National Archives of Pakistan'
  },
  {
    id: 'gal-2',
    title: 'Savile Row Suit & Monocle — Barrister Jinnah',
    year: 'Circa 1920s',
    location: 'London / Bombay',
    category: 'Quaid-e-Azam',
    imageUrl: QUAID_SUIT_IMAGE,
    description: 'Muhammad Ali Jinnah in his famous three-piece tailored suit and monocle, recognized as the most formidable and stylish advocate of his era in the British Empire.',
    archivalSource: 'Bombay High Court Historical Trust'
  },
  {
    id: 'gal-3',
    title: 'Quaid with Madar-e-Millat Fatima Jinnah',
    year: '1946',
    location: 'Delhi / Lahore',
    category: 'Quaid-e-Azam',
    imageUrl: QUAID_FATIMA_IMAGE,
    description: 'Quaid-e-Azam with his sister Fatima Jinnah, walking with stately elegance and championing the vanguard of women’s political participation in Pakistan.',
    archivalSource: 'Fatima Jinnah Women University Archives'
  },
  {
    id: 'gal-4',
    title: 'The 1940 Lahore Resolution Assembly',
    year: '23 March 1940',
    location: 'Minto Park (Iqbal Park), Lahore',
    category: 'Pakistan Movement',
    imageUrl: LAHORE_RESOLUTION_IMAGE,
    description: 'Over 100,000 delegates and patriots gathering under the green crescent banner to pass the historic Pakistan Resolution.',
    archivalSource: 'Punjab Public Library Archives'
  },
  {
    id: 'gal-5',
    title: 'Historic Address to Constituent Assembly',
    year: '11 August 1947',
    location: 'Sindh Assembly Hall, Karachi',
    category: 'Independence',
    imageUrl: SPEECH_11_AUGUST_IMAGE,
    description: 'Quaid-e-Azam delivering his immortal charter of religious liberty, rule of law, and equality to the founding assembly of Pakistan.',
    archivalSource: 'Radio Pakistan / Press Information Department'
  },
  {
    id: 'gal-6',
    title: 'Quaid with Muslim Students Federation',
    year: '1945',
    location: 'Aligarh / Lahore',
    category: 'Pakistan Movement',
    imageUrl: YOUTH_IMAGE,
    description: 'Muhammad Ali Jinnah addressing university students, whom he termed his "armor-bearers" and the future leaders of a free Pakistan.',
    archivalSource: 'All-India Muslim League Records'
  },
  {
    id: 'gal-7',
    title: 'Mazar-e-Quaid Illuminated at Dusk',
    year: 'National Monument',
    location: 'Karachi, Sindh',
    category: 'Memorials',
    imageUrl: MAZAR_IMAGE,
    description: 'The iconic white marble mausoleum designed by Yahya Merchant, gleaming under twilight skies with eternal ceremonial guard honor.',
    archivalSource: 'Mausoleum Heritage Trust'
  },
  {
    id: 'gal-8',
    title: 'Historic Quaid-e-Azam Residency, Ziarat',
    year: '1892 / 1948',
    location: 'Ziarat, Balochistan',
    category: 'Memorials',
    imageUrl: ZIARAT_RESIDENCY_IMAGE,
    description: 'The wooden heritage residency nestled among ancient juniper forests in Ziarat where Quaid-e-Azam spent his memorable final summer days.',
    archivalSource: 'Balochistan Heritage Department'
  },
  {
    id: 'gal-9',
    title: 'Grand Chandelier & Sanctuary Chamber of Mazar-e-Quaid',
    year: '1970 / National Memorial',
    location: 'Karachi, Sindh',
    category: 'Memorials',
    imageUrl: MAZAR_INTERIOR_IMAGE,
    description: 'The sublime interior sanctuary featuring the 80-foot Chinese crystal chandelier hanging above the pure white marble cenotaph of Quaid-e-Azam.',
    archivalSource: 'Mausoleum Heritage Trust Archives'
  }
];

export const WORLD_LEADER_TRIBUTES: LeaderTribute[] = [
  {
    id: 'trib-1',
    speaker: 'Stanley Wolpert',
    role: 'American Historian & Biographer',
    nationality: 'United States',
    tributeText: '“Few individuals significantly alter the course of history. Fewer still modify the map of the world. Hardly anyone can be credited with creating a nation-state. Mohammad Ali Jinnah did all three.”',
    source: 'Jinnah of Pakistan (1984)'
  },
  {
    id: 'trib-2',
    speaker: 'Lord Mountbatten',
    role: 'Last Viceroy of British India',
    nationality: 'United Kingdom',
    tributeText: '“If it could be said that any single man created Pakistan, it was Jinnah. He had an extraordinary constitutional mind and was completely incorruptible.”',
    source: 'Official Records of Viceroy’s Office'
  },
  {
    id: 'trib-3',
    speaker: 'Beverley Nichols',
    role: 'British Author & Journalist',
    nationality: 'United Kingdom',
    tributeText: '“He is the most important man in Asia. If Jinnah were in the British Empire he would be Prime Minister, if in America, President. He could talk the hind leg off a donkey.”',
    source: 'Verdict on India (1944)'
  },
  {
    id: 'trib-4',
    speaker: 'Sarojini Naidu',
    role: 'Poetess & Freedom Fighter',
    nationality: 'India',
    tributeText: '“Tall and stately, but with a face as sculptured as an ancient Greek mask... Jinnah is the embodiment of honesty and the champion of self-respect.”',
    source: 'Mohammad Ali Jinnah: An Ambassador of Unity (1918)'
  },
  {
    id: 'trib-5',
    speaker: 'John Biggs-Davison',
    role: 'British Member of Parliament',
    nationality: 'United Kingdom',
    tributeText: '“Although without an army, Jinnah fought on two fronts and won Pakistan against all odds. His single-minded devotion to constitutional liberty remains unmatched in modern history.”',
    source: 'House of Commons Address'
  }
];

// EXACTLY 15 COMPREHENSIVE QUESTIONS: 10 DIRECT QUESTIONS + 5 RICH SUMMARY COMPREHENSION PASSAGES
export const INITIAL_QUIZ_QUESTIONS: QuizQuestion[] = [
  // --- 5 SUMMARY / PASSAGE COMPREHENSION QUESTIONS (سمری خلاصہ سوالات) ---
  {
    id: 101,
    isSummaryQuestion: true,
    summaryTitle: 'Historical Summary 1: The Magna Carta of 11 August 1947',
    summaryPassage: 'On 11 August 1947, addressing the first Constituent Assembly of Pakistan in Karachi, Quaid-e-Azam Muhammad Ali Jinnah outlined the foundational charter of the state: "You are free; you are free to go to your temples, you are free to go to your mosques or to any other place of worship in this State of Pakistan. You may belong to any religion or caste or creed — that has nothing to do with the business of the State. In course of time, Hindus would cease to be Hindus and Muslims would cease to be Muslims, not in the religious sense, but in the political sense as citizens of the State."',
    summaryPassageUrdu: '11 اگست 1947 کو پہلی قانون ساز اسمبلی سے خطاب کرتے ہوئے قائد اعظم نے ریاست کا بنیادی نظریہ بیان کیا کہ پاکستان میں تمام شہریوں کو مکمل مذہبی آزادی اور مساوی حقوق حاصل ہوں گے اور ریاست کسی بھی شہری سے اس کے مذہب کی بنیاد پر تفریق نہیں کرے گی۔',
    question: 'Based on this historical summary, what did Quaid-e-Azam declare regarding religion and state business?',
    options: [
      'All citizens have equal rights and freedom of worship regardless of religion',
      'The state will enforce compulsory religious taxes on citizens',
      'Places of worship will be managed by foreign governments',
      'Only one community will have full political citizenship'
    ],
    correctIndex: 0,
    explanation: 'Quaid-e-Azam proclaimed complete religious freedom and state impartiality for every citizen in Pakistan.'
  },
  {
    id: 102,
    isSummaryQuestion: true,
    summaryTitle: 'Historical Summary 2: The 1940 Lahore Resolution & Nationhood',
    summaryPassage: 'On 23 March 1940 at Minto Park Lahore, Quaid-e-Azam delivered his historic presidential address defining the two-nation theory: "Musalmans are not a minority as it is commonly known and understood. Musalmans are a nation according to any definition of a nation, and they must have their homelands, their territory, and their State. We wish our people to develop to the fullest our spiritual, cultural, economic, social and political life in a way that we think best and in consonance with our own ideals."',
    summaryPassageUrdu: '23 مارچ 1940 کو منٹو پارک لاہور میں قائد اعظم نے دو قومی نظریے کی وضاحت کرتے ہوئے اعلان کیا کہ مسلمان اقلیت نہیں بلکہ ہر تعریف کے مطابق ایک مکمل قوم ہیں جن کا اپنا الگ وطن اور خودمختار ریاست ہونی چاہیے۔',
    question: 'According to this summary, on what basis did Quaid-e-Azam demand a sovereign homeland for Muslims?',
    options: [
      'Because Muslims constitute a distinct nation with unique culture and political ideals',
      'Because they wanted commercial trade routes to Central Asia',
      'Because of a territorial dispute with European powers',
      'Because of colonial administrative convenience'
    ],
    correctIndex: 0,
    explanation: 'Quaid established that Muslims possess distinct nationhood, culture, and civilization requiring a sovereign state.'
  },
  {
    id: 103,
    isSummaryQuestion: true,
    summaryTitle: 'Historical Summary 3: Lincoln’s Inn & Young Jinnah’s Inspiration',
    summaryPassage: 'In 1892 at the tender age of 16, Muhammad Ali Jinnah traveled to London to study law. Among all the Inns of Court in London, Jinnah chose Lincoln’s Inn. When asked later why he selected it, he revealed that as he walked through the main hall of Lincoln’s Inn, he noticed the name of the Holy Prophet Muhammad (PBUH) inscribed on the wall among the greatest lawgivers and legislators of human civilization. He completed his examinations and was called to the Bar at just 19 years old.',
    summaryPassageUrdu: '1892 میں جب قائد اعظم قانون کی تعلیم کے لیے لندن گئے تو انہوں نے لنکنز اِن کا انتخاب اس لیے کیا کیونکہ اس کے مرکزی دروازے پر دنیا کے عظیم قانون سازوں کی فہرست میں حضرت محمد ﷺ کا نام مبارک کندہ تھا۔',
    question: 'Why did young Muhammad Ali Jinnah specifically choose Lincoln’s Inn in London for his Bar studies?',
    options: [
      'The name of Prophet Muhammad (PBUH) was honored at the entrance among history’s greatest lawgivers',
      'It was the only college that accepted foreign students',
      'It was recommended by the British Viceroy of India',
      'It had the lowest tuition fees in Britain'
    ],
    correctIndex: 0,
    explanation: 'Jinnah was profoundly moved by the tribute paid to the Holy Prophet Muhammad (PBUH) as a supreme lawgiver at Lincoln’s Inn.'
  },
  {
    id: 104,
    isSummaryQuestion: true,
    summaryTitle: 'Historical Summary 4: Women’s Equality & Madar-e-Millat',
    summaryPassage: 'In his landmark speech at Aligarh Muslim University in 1944, Quaid-e-Azam declared: "No nation can make any progress which neglects its women. No nation can rise to the height of glory unless your women are side by side with you. We are victims of evil customs. It is a crime against humanity that our women are shut up within the four walls of the houses as prisoners." He demonstrated this by placing his sister Fatima Jinnah at the vanguard of the freedom struggle.',
    summaryPassageUrdu: '1944 میں علی گڑھ میں قائد اعظم نے فرمایا کہ کوئی قوم اس وقت تک ترقی نہیں کر سکتی جب تک اس کی خواتین مردوں کے شانہ بشانہ کھڑی نہ ہوں۔ انہوں نے خود اپنی بہن فاطمہ جناح کو تحریکِ آزادی کی صفِ اول میں رکھا۔',
    question: 'What fundamental message did Quaid-e-Azam deliver regarding women in national progress?',
    options: [
      'Women must participate side by side with men in education, politics, and national development',
      'Women should be restricted only to household chores',
      'Women should not participate in the freedom movement',
      'Higher education is only necessary for male citizens'
    ],
    correctIndex: 0,
    explanation: 'Quaid-e-Azam was a pioneer of female empowerment, asserting that no nation can achieve glory without women as equal partners.'
  },
  {
    id: 105,
    isSummaryQuestion: true,
    summaryTitle: 'Historical Summary 5: Inauguration of State Bank of Pakistan (1948)',
    summaryPassage: 'On 1 July 1948, despite frail health, Quaid-e-Azam traveled to Karachi to inaugurate the State Bank of Pakistan. In his address, he urged Pakistani economists to develop an indigenous economic system: "The economic system of the West has created almost insoluble problems for humanity... It has failed to do justice between man and man. We must work our destiny in our own way and present to the world an economic system based on the true concept of equality of manhood and social justice."',
    summaryPassageUrdu: 'یکم جولائی 1948 کو اسٹیٹ بینک آف پاکستان کا افتتاح کرتے ہوئے قائد اعظم نے مغربی استحصالی نظام کے بجائے اسلامی مساوات اور سماجی انصاف پر مبنی معاشی نظام اپنانے پر زور دیا۔',
    question: 'What type of economic model did Quaid-e-Azam advocate for Pakistan at the State Bank inauguration?',
    options: [
      'An economic system based on social justice, human equality, and ethical welfare',
      'An unregulated Western debt and speculative banking model',
      'A closed barter system without national currency',
      'Total state nationalization of all private businesses'
    ],
    correctIndex: 0,
    explanation: 'Quaid envisioned an ethical economic framework rooted in social justice, fair distribution, and human dignity.'
  },

  // --- 10 DIRECT HISTORICAL MILESTONE QUESTIONS ---
  {
    id: 1,
    question: 'When and where was Quaid-e-Azam Muhammad Ali Jinnah born?',
    options: [
      '25 December 1876 at Wazir Mansion, Karachi',
      '14 August 1880 at Lahore',
      '23 March 1876 at Rawalpindi',
      '25 December 1885 at Bombay'
    ],
    correctIndex: 0,
    explanation: 'Muhammad Ali Jinnah was born on 25 December 1876 at Wazir Mansion in Kharadar, Karachi, Sindh.'
  },
  {
    id: 2,
    question: 'What are the three core golden guiding principles given by Quaid-e-Azam?',
    options: [
      'Power, Wealth, Conquest',
      'Unity, Faith, Discipline (Ittehad, Yaqeen, Tanzeem)',
      'Peace, Commerce, Friendship',
      'Law, Order, Force'
    ],
    correctIndex: 1,
    explanation: 'Quaid-e-Azam famously bequeathed "Unity, Faith, and Discipline" (اتحاد، یقین، تنظیم) as the guiding pillars for the Pakistani nation.'
  },
  {
    id: 3,
    question: 'In which year did Quaid-e-Azam present his historic 14 Points in Delhi?',
    options: [
      '1929',
      '1940',
      '1916',
      '1935'
    ],
    correctIndex: 0,
    explanation: 'In March 1929, Jinnah formulated his famous 14 Points to safeguard the constitutional and political rights of Muslims in India.'
  },
  {
    id: 4,
    question: 'Where was the historic Pakistan Resolution (Lahore Resolution) passed on 23 March 1940?',
    options: [
      'Shahi Qila, Lahore',
      'Minto Park (now Iqbal Park), Lahore',
      'Quaid-e-Azam Residency, Ziarat',
      'Sindh Assembly Hall, Karachi'
    ],
    correctIndex: 1,
    explanation: 'The Lahore Resolution was passed at Minto Park (now Iqbal Park, where Minar-e-Pakistan stands) in Lahore on 23 March 1940.'
  },
  {
    id: 5,
    question: 'Which title was given to Muhammad Ali Jinnah by Sarojini Naidu after the 1916 Lucknow Pact?',
    options: [
      'Ambassador of Hindu-Muslim Unity',
      'Knight Commander of Asia',
      'Leader of the Nation',
      'Grand Barrister of the East'
    ],
    correctIndex: 0,
    explanation: 'Following his tireless efforts to forge political understanding in the 1916 Lucknow Pact, Sarojini Naidu honored him as "The Ambassador of Hindu-Muslim Unity".'
  },
  {
    id: 6,
    question: 'What did Quaid-e-Azam identify as "a poison" that must be put down with an iron hand?',
    options: [
      'Bribery, corruption, nepotism, and jobbery',
      'International trade and foreign embassies',
      'Industrial machinery and factories',
      'Higher education and scientific research'
    ],
    correctIndex: 0,
    explanation: 'In his 11 August 1947 address, Quaid explicitly named corruption, bribery, and nepotism as poison that must be crushed with an iron hand.'
  },
  {
    id: 7,
    question: 'In which picturesque town of Balochistan did Quaid-e-Azam spend his final summer days in 1948?',
    options: [
      'Ziarat',
      'Gwadar',
      'Quetta',
      'Chaman'
    ],
    correctIndex: 0,
    explanation: 'Quaid-e-Azam spent his memorable final months in the wooden Quaid-e-Azam Residency in Ziarat, Balochistan.'
  },
  {
    id: 8,
    question: 'What famous quote did American historian Stanley Wolpert write about Quaid-e-Azam Jinnah?',
    options: [
      '“Hardly anyone can be credited with creating a nation-state. Mohammad Ali Jinnah did all three.”',
      '“He was a simple military general”',
      '“He followed standard colonial policy”',
      '“He never took part in constitutional debates”'
    ],
    correctIndex: 0,
    explanation: 'Stanley Wolpert wrote: "Few individuals significantly alter the course of history. Fewer still modify the map of the world. Hardly anyone can be credited with creating a nation-state. Mohammad Ali Jinnah did all three."'
  },
  {
    id: 9,
    question: 'What is the grand chandelier inside Mazar-e-Quaid Karachi made of, and who gifted it to Pakistan in 1970?',
    options: [
      'Four-tiered Chinese crystal chandelier gifted by Premier Zhou Enlai & Muslims of China',
      'Brass lamp gifted by British Parliament',
      'Bronze lantern from Turkey',
      'Gold chandelier from Egypt'
    ],
    correctIndex: 0,
    explanation: 'The 80-foot 4-tier crystal chandelier was gifted by the Muslims of the People’s Republic of China and Premier Zhou Enlai in 1970.'
  },
  {
    id: 10,
    question: 'What was Quaid-e-Azam’s immortal motto regarding continuous effort and perseverance?',
    options: [
      '“Work, work and work, and we are bound to succeed”',
      '“Rest and wait for fortune”',
      '“Only trade brings power”',
      '“Accept every political compromise”'
    ],
    correctIndex: 0,
    explanation: 'Quaid-e-Azam delivered his immortal advice on Pakistan’s 1st independence anniversary: "Work, work and work, and we are bound to succeed."'
  }
];
