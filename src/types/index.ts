export type NavPage =
  | 'home'
  | 'biography'
  | 'timeline'
  | 'vision'
  | 'quotes'
  | 'gallery'
  | 'tribute'
  | 'tour'
  | 'studio';

export interface TimelineItem {
  id: string;
  year: string;
  exactDate: string;
  title: string;
  subtitle: string;
  description: string;
  detailedText: string;
  image: string;
  category: 'Early Life' | 'Legal Career' | 'Politics' | 'Pakistan Movement' | 'Independence';
  location: string;
  quoteExcerpt?: string;
}

export interface QuoteItem {
  id: string;
  quote: string;
  quoteUrdu?: string;
  attribution: string;
  occasion: string;
  year: string;
  category: string;
  highlightWord?: string;
}

export interface VisionPillar {
  id: string;
  title: string;
  titleUrdu: string;
  corePrinciple: string;
  description: string;
  historicReference: string;
  speechDate: string;
  keyPoints: string[];
  iconName: string;
  color: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  year: string;
  location: string;
  category: 'Quaid-e-Azam' | 'Pakistan Movement' | 'Independence' | 'Historical Moments' | 'Memorials';
  imageUrl: string;
  description: string;
  archivalSource: string;
}

export interface LeaderTribute {
  id: string;
  speaker: string;
  role: string;
  nationality: string;
  tributeText: string;
  source: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  isSummaryQuestion?: boolean;
  summaryTitle?: string;
  summaryPassage?: string;
  summaryPassageUrdu?: string;
}

export interface CitizenTributeMessage {
  id: string;
  name: string;
  city: string;
  message: string;
  timestamp: string;
  likes: number;
  badge?: string;
}
