export type ProjectCategory = 
  | 'all'
  | 'feature'
  | 'documentary'
  | 'commercial'
  | 'corporate'
  | 'ngo'
  | 'short';

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: ProjectCategory;
  categoryLabel: string;
  director: string;
  role: string;
  year: string;
  duration: string;
  aspectRatio: string;
  cameraRig: string;
  logFormat: string;
  posterImage: string;
  backdropImage: string;
  logline: string;
  synopsis: string;
  awards: string[];
  clientOrStudio?: string;
  trailerVideoId?: string; // YouTube or sample video
  trailerYoutubeUrl?: string;
  imdbUrl?: string;
  sampleVideoUrl?: string;
  featured: boolean;
  stills: string[];
  keyCredits: { role: string; name: string }[];
}

export interface Philosophy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  metric?: string;
}

export interface BTSItem {
  id: string;
  title: string;
  category: 'film' | 'corporate' | 'tvc' | 'ngo';
  image: string;
  caption: string;
  gearNotes: string;
  location: string;
  photographer: string;
}

export interface CategorizedReelItem {
  id: string;
  title: string;
  categoryKey: ProjectCategory;
  count: string;
  description: string;
  image: string;
  tags: string[];
  highlightProject: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  monthYear: string;
  source: string;
  tag: string;
  readTime: string;
  excerpt: string;
  fullBody: string[];
  image: string;
  festivalLaurels?: string[];
  externalUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  roleTag: string;
  bio: string;
  image: string;
  imagePosition?: string;
  credits: string[];
  equipmentSpecialty: string;
  socials?: {
    instagram?: string;
    vimeo?: string;
    linkedin?: string;
  };
}

export interface ClientPartner {
  id: string;
  name: string;
  category: 'Entertainment' | 'Corporate' | 'NGO & Social' | 'Government & Heritage';
  logoText: string;
  descriptor: string;
  featuredWork?: string;
  logoImage?: string; // Path or URL to company logo (placeholder or original)
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientTitle: string;
  projectReference: string;
  quote: string;
  rating: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  challenge: string;
  approach: string;
  outcome: string;
  heroImage: string;
  metrics: { label: string; value: string }[];
  stills: string[];
}

export interface AdFilmDriveArchive {
  id: string;
  title: string;
  categoryLabel: string;
  description: string;
  driveLink: string;
  tags?: string[];
  clientOrOrg?: string;
  highlightText?: string;
}
