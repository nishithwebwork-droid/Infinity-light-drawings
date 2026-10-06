import { 
  Project, 
  Philosophy, 
  BTSItem, 
  CategorizedReelItem, 
  NewsArticle, 
  TeamMember, 
  ClientPartner, 
  Testimonial,
  CaseStudy,
  AdFilmDriveArchive
} from '../types';
import corporateFilmsImage from '../assets/images/regenerated_image_1788547016393.png';
import clientSlot3Image from '../assets/images/regenerated_image_1788630358257.png';
import clientSlot4Image from '../assets/images/regenerated_image_1788630239245.png';
import clientSlot5Image from '../assets/images/regenerated_image_1788700573748.jpg';
import clientSlot6Image from '../assets/images/regenerated_image_1788700804589.jpg';
import clientSlot7Image from '../assets/images/regenerated_image_1788701742669.png';
import clientSlot8Image from '../assets/images/regenerated_image_1788701899916.jpg';
import clientSlot9Image from '../assets/images/regenerated_image_1788702088189.webp';
import clientSlot10Image from '../assets/images/regenerated_image_1790688906914.png';
import newsLastDropImage from '../assets/images/regenerated_image_1788789848889.jpg';
import newsBpftioImage from '../assets/images/regenerated_image_1788789998138.png';
import newsMonologueImage from '../assets/images/regenerated_image_1788790765363.png';
import zwigatoCoverImage from '../assets/images/regenerated_image_1788807649089.png';
import jengaburuCoverImage from '../assets/images/regenerated_image_1788808258731.jpg';
import nandaMasterCoverImage from '../assets/images/regenerated_image_1789481077952.png';
import nandaMasterPosterImage from '../assets/images/nanda_master_chatasali_poster_hd.jpg';
import baghuniCoverImage from '../assets/images/regenerated_image_1789480280288.jpg';
import gramVikasCoverImage from '../assets/images/regenerated_image_1789481294593.png';
import tataSteelCoverImage from '../assets/images/regenerated_image_1789482223290.png';
import dustbinCoverImage from '../assets/images/dustbin_cover_maxres.jpg';
import founderNishithImage from '../assets/images/regenerated_image_1789565836612.avif';
import sachinPattanayakImage from '../assets/images/regenerated_image_1789566395635.jpg';
import fmSankarImage from '../assets/images/regenerated_image_1789567026097.jpg';
import aswiniJenaImage from '../assets/images/regenerated_image_1789567641738.jpg';
import souravMahapatraImage from '../assets/images/regenerated_image_1789568301810.jpg';
import btsStillNightImage from '../assets/images/regenerated_image_1789569315855.jpg';
import btsCineSetImage from '../assets/images/regenerated_image_1789652594693.jpg';
import btsGoldenHourCommsImage from '../assets/images/regenerated_image_1789654390526.jpg';
import btsLocationPlaybackImage from '../assets/images/regenerated_image_1789655235317.jpg';
import btsMorningExteriorRigImage from '../assets/images/regenerated_image_1789655940108.jpg';
import btsOutdoorStagingImage from '../assets/images/regenerated_image_1789995419713.jpg';
import adFilmsTvcsCoverImage from '../assets/images/regenerated_image_1790345050246.png';
import ngoSocialImpactPosterImage from '../assets/images/ngo-social-impact-poster.jpg';
import ngoSocialImpactImage from '../assets/images/regenerated_image_1791293162563.png';
import shortFilmsCoverImage from '../assets/images/short_films_cover.jpg';
const odishaTourismImage = adFilmsTvcsCoverImage;

export const STUDIO_INFO = {
  name: 'INFINITY LIGHT DRAWINGS',
  shortName: 'INFINITY LIGHT DRAWINGS',
  taglineQuote: 'EVERY FILM IS AN EXPERIENCE, AND EVERY EXPERIENCE CAN BE UNFORGETTABLE.',
  founderQuote: 'CINEMA HAS BEEN A FRIEND, A COMPANION, A GURU—EVERYTHING TO ME.',
  founder: {
    name: 'Nishith Sahasransu Ray',
    signature: 'NISHITH S. RAY',
    title: 'Filmmaker & Creative Director',
    roleTag: 'VISIONARY',
    bio: "Welcome! I'm Nishith Sahasransu Ray, a filmmaker driven by a passion for stories that resonate beyond the screen. Here, you're looking for someone who can bring your vision to life—and that's exactly what I do.",
    experienceSnippet: 'With experience across diverse genres and formats, I have developed a deep understanding of filmmaking, from script development to post-production. My work reflects my commitment to creating content that resonates with audiences and makes an impact.',
    almaMater: 'Biju Pattanaik Film and Television Institute of Odisha (BPFTIO)',
    image: founderNishithImage,
  },
  stats: [
    { value: '5+', label: 'INDEPENDENT FILMS', sub: 'PRODUCED & DIRECTED' },
    { value: '10+', label: 'GLOBAL FESTIVAL', sub: 'SELECTIONS & AWARDS' },
    { value: '7+', label: 'YEARS OF VISUAL', sub: 'ARTISTRY' },
    { value: '25+', label: 'COMMERCIAL & NGO', sub: 'DELIVERED NARRATIVES' }
  ],
  locations: {
    mumbai: {
      city: 'MUMBAI STUDIO',
      address: 'Next to Billabong High School, Jankalyan Nagar, Malad West, Mumbai - 400095',
      phone: '+91 82494 95660',
      email: 'infinitylightdrawings@gmail.com',
      coordinates: '19.1860° N, 72.8250° E'
    },
    odisha: {
      city: 'ODISHA HUB',
      address: 'Link Road, Kataka, Odisha',
      phone: '+91 82494 95660',
      email: 'infinitylightdrawings@gmail.com',
      coordinates: '20.4625° N, 85.8828° E'
    }
  },
  generalEmail: 'infinitylightdrawings@gmail.com',
  directPhone: '+91 82494 95660',
  whatsappPhone: '+91 96924 58263',
  whatsappLink: 'https://wa.me/919692458263'
};

export const STUDIO_PHILOSOPHIES: Philosophy[] = [
  {
    id: 'cinematic-capture',
    title: 'CINEMATIC CAPTURE',
    subtitle: 'SENSOR CRAFT',
    description: 'Using industry standard RED and ARRI ecosystems for unparalleled visual depth, organic highlights, and true anamorphic texture.',
    icon: 'Camera',
    metric: '8K VV & Alexa LF'
  },
  {
    id: 'precision-post',
    title: 'PRECISION POST',
    subtitle: 'COLOR & RHYTHM',
    description: 'Expert DaVinci color grading and narrative-focused editing that preserves emotional nuance while elevating technical precision.',
    icon: 'Sliders',
    metric: 'ACES Color Pipeline'
  },
  {
    id: 'rapid-turnaround',
    title: 'RAPID TURNAROUND',
    subtitle: 'AGILE PRODUCTION',
    description: 'Efficient and battle-tested workflows that never compromise on the artistic soul or visual caliber of the film.',
    icon: 'Zap',
    metric: 'Zero Creative Friction'
  },
  {
    id: 'human-storytelling',
    title: 'HUMAN STORYTELLING',
    subtitle: 'EMPATHIC FOCUS',
    description: 'We do not simply shoot frames; we establish authentic human resonance. Every composition is a deliberate slice of the human condition.',
    icon: 'HeartHandshake',
    metric: 'Soul in Every Frame'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'the-jengaburu-curse',
    title: 'THE JENGABURU CURSE',
    subtitle: 'Cli-Fi Thriller Series',
    category: 'feature',
    categoryLabel: 'Feature / Series',
    director: 'Nila Madhab Panda',
    role: 'Assistant Director',
    year: '2023',
    duration: '7 Episodes / 280 min',
    aspectRatio: '2:1 Univisium',
    cameraRig: 'RED Monstro 8K VV / Master Primes',
    logFormat: 'REDCODE RAW 8K',
    posterImage: jengaburuCoverImage,
    backdropImage: jengaburuCoverImage,
    logline: 'A London-based analyst returns to Odisha in search of her missing father. Her quest leads to a conspiracy involving bauxite mining, secretly backed by an international nexus, leading to unexplained deaths and a displaced community.',
    synopsis: 'A London-based analyst returns to Odisha in search of her missing father. Her quest leads to a conspiracy involving bauxite mining, secretly backed by an international nexus, leading to unexplained deaths and a displaced community.\n\nCreated and directed by acclaimed filmmaker Nila Madhab Panda, The Jengaburu Curse is India\'s first climate-fiction thriller series streaming on Sony LIV. Filmed across deep red-soil opencast bauxite mines, London, and remote tribal terrains with an ensemble cast featuring Faria Abdullah, Nasser, Makrand Deshpande, and Sudev Nair. Nishith Sahasransu Ray served as Assistant Director across ground productions, managing high-risk mine locations and tribal community narrative realism.',
    awards: [
      'IMDb Rating: 7.6/10 (17,400+ Votes)',
      'Winner - Best Environmental Thriller, Filmfare OTT Nominee',
      'Special Recognition - London Eco Cinema Showcase'
    ],
    clientOrStudio: 'Sony LIV / Studio Next',
    trailerVideoId: 'kJ6v0Q0D9SA',
    trailerYoutubeUrl: 'https://www.youtube.com/watch?v=kJ6v0Q0D9SA',
    imdbUrl: 'https://www.imdb.com/title/tt27327718/',
    sampleVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    featured: true,
    stills: [
      jengaburuCoverImage,
      'https://m.media-amazon.com/images/M/MV5BYWNiZDU5ZGEtMDVkNy00NDM0LWFlODctZTlmN2NhODdiNzVjXkEyXkFqcGc@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNDQ1MjNlMzgtZGNhZC00MGUxLWE0ODAtZTk1Yzc3NmJjZjVkXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg'
    ],
    keyCredits: [
      { role: 'Creator & Director', name: 'Nila Madhab Panda' },
      { role: 'Assistant Director', name: 'Nishith S. Ray' },
      { role: 'Lead Cast', name: 'Faria Abdullah, Nassar, Makrand Deshpande, Sudev Nair' },
      { role: 'Director of Photography', name: 'Paulo Perez' },
      { role: 'Production & OTT', name: 'Studio Next / Sony LIV' }
    ]
  },
  {
    id: 'zwigato',
    title: 'ZWIGATO',
    subtitle: 'Feature Film • Social Realism Drama',
    category: 'feature',
    categoryLabel: 'Feature Film',
    director: 'Nandita Das',
    role: 'Assistant Director',
    year: '2023',
    duration: '105 min',
    aspectRatio: '2.39:1 Anamorphic',
    cameraRig: 'ARRI Alexa Mini LF / Cooke Anamorphic /i',
    logFormat: 'ARRIRAW 4.5K',
    posterImage: zwigatoCoverImage,
    backdropImage: zwigatoCoverImage,
    logline: 'After losing his job as a factory-floor manager during the pandemic, Manas becomes a food delivery rider, grappling with the world of ratings and incentives. To support the family, his wife begins to explore work opportunities.',
    synopsis: 'Premiered at the 47th Toronto International Film Festival (TIFF), Busan International Film Festival, and the International Film Festival of Kerala (IFFK). Written, produced, and directed by acclaimed auteur Nandita Das, Zwigato stars Kapil Sharma as Manas and Shahana Goswami as Pratima. Set against the vibrant urban landscape of Bhubaneswar, Odisha, the narrative provides an empathetic, unsparing exploration of relentless gig-economy precarity, algorithmic surveillance, and working-class resilience.\n\nNishith Sahasransu Ray served as Assistant Director across the Odisha production schedule, coordinating critical ground logistics, second-unit street realism, and authentic community engagement.',
    awards: [
      'IMDb Rating: 6.7/10 (Critically Acclaimed)',
      'Official Selection — Toronto International Film Festival (TIFF 2022)',
      'Official Selection — 27th Busan International Film Festival (BIFF)',
      'Official Selection — 27th International Film Festival of Kerala (IFFK)',
      'State Honor: Declared Tax-Free by Government of Odisha'
    ],
    clientOrStudio: 'Applause Entertainment & Nandita Das Initiatives',
    trailerVideoId: 'Cvw6ohO08lU',
    trailerYoutubeUrl: 'https://www.youtube.com/watch?v=Cvw6ohO08lU',
    imdbUrl: 'https://www.imdb.com/title/tt21998526/',
    sampleVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    featured: true,
    stills: [
      zwigatoCoverImage,
      'https://m.media-amazon.com/images/M/MV5BNjZkMDhjMjYtYWYzMS00MTcwLTgwYzMtYjliMDZkMmQ2MDI2XkEyXkFqcGc@._V1_QL75_UX1000_.jpg'
    ],
    keyCredits: [
      { role: 'Story, Screenplay & Direction', name: 'Nandita Das' },
      { role: 'Assistant Director', name: 'Nishith S. Ray' },
      { role: 'Lead Cast', name: 'Kapil Sharma, Shahana Goswami, Sayani Gupta' },
      { role: 'Cinematographer', name: 'Avinash Arun' },
      { role: 'Dialogues', name: 'Samir Patil, Nandita Das' },
      { role: 'Producers', name: 'Sameer Nair, Deepak Segal, Nandita Das' }
    ]
  },
  {
    id: 'nanda-master',
    title: 'Nanda Master nka chatasali',
    subtitle: 'Biographical Documentary Film',
    category: 'documentary',
    categoryLabel: 'Documentary',
    director: 'Pranab Kumar Aich',
    role: 'Assistant Director',
    year: '2023',
    duration: '1h 38m / 98 min',
    aspectRatio: '1.85:1',
    cameraRig: 'Sony FX9 / Zeiss CP.3 Cine Lenses',
    logFormat: 'S-Log3 10-bit 4:2:2',
    posterImage: nandaMasterPosterImage,
    backdropImage: nandaMasterCoverImage,
    logline: 'The inspiring true story of Padma Shri centenarian educator Nanda Prusty, chronicling over seven decades of selfless dedication providing free education to village children in his traditional open-air chatasali.',
    synopsis: "A hybrid biographical documentary chronicling the life and selfless pedagogical mission of Padma Shri awardee Nanda Kishore Prusty, affectionately revered as Nanda Master. For over seventy years, Nanda Master ran an open-air traditional village school ('Chatasali') in Jajpur, Odisha, educating three generations of rural children and illiterate elders completely free of cost.\n\nDirected by acclaimed filmmaker Pranab Kumar Aich with Nishith Sahasransu Ray serving as Assistant Director, the film weaves observational footage captured over two years with evocative dramatizations enacted by non-actors. Tracing his journey from amateur theatre to his steadfast commitment to village literacy, the narrative culminates in his national honor when he received the Padma Shri at the age of 103—touchingly blessing the President of India on stage—celebrating an extraordinary testament to human dignity and grassroots education.",
    awards: [
      'Winner — 15th Dada Saheb Phalke Film Festival (India)',
      'Official Selection — 29th Kolkata International Film Festival (KIFF)',
      'World Premiere at IFFPAC — 39th Kolkata International Film Festival',
      'Film Market Exclusives — 67th DOK Leipzig, Germany',
      'Bharat Parv Showcase — 77th Cannes Film Festival',
      'Official Selection — 19th Kanazawa Film Festival Japan',
      'Official Selection — 15th St. Louis International Film Festival',
      'Official Selection — 16th Habitat Film Festival India',
      'Official Selection — 3rd Tamil Nadu Film Festival India'
    ],
    clientOrStudio: 'Abhismita Films Presents',
    imdbUrl: 'https://www.imdb.com/title/tt32414572/',
    featured: true,
    stills: [
      nandaMasterCoverImage,
      nandaMasterPosterImage,
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80'
    ],
    keyCredits: [
      { role: 'Produced, Written & Directed by', name: 'Pranab Kumar Aich' },
      { role: 'Assistant Director', name: 'Nishith S. Ray' },
      { role: 'Conceptualized by', name: 'Arun Teacher, Chetananish Padamshee, Nanda Prusty' },
      { role: 'Cinematography', name: 'Shubhankar Bhar (ISC)' },
      { role: 'Editing', name: 'Akshay Anand (FTII)' },
      { role: 'Sound Design & Mix', name: 'Deepak Krishna' },
      { role: 'Music', name: 'Gaurab Chatterjee' },
      { role: 'Colourist', name: 'Nabarun Ghosh' },
      { role: 'Executive Producers', name: 'Susmita Das, Abhaya Pati' },
      { role: 'Subject / Centenarian Teacher', name: 'Padma Shri Nanda Kishore Prusty' }
    ]
  },
  {
    id: 'gram-vikas-springs',
    title: 'Last Drop',
    subtitle: 'Short Documentary • Water Conservation',
    category: 'documentary',
    categoryLabel: 'Documentary Short',
    director: 'Nishith Sahasransu Ray',
    role: 'Director, Writer & Producer',
    year: '2020',
    duration: '1 min',
    aspectRatio: '16:9 HD',
    cameraRig: 'Sony Alpha / Prime Lens',
    logFormat: 'S-Log',
    posterImage: gramVikasCoverImage,
    backdropImage: gramVikasCoverImage,
    logline: "Save water for your next generation, don't waste one drop of water. In every second India lost one drop of water from Street taps. My concept is if India lost in a second one drop of water from a tap. Then 1mint 60 drops fall. 1day 86,000 drops fall. Water is fallen in a day =5.7liters. To accurate the same amount of water women in Rajasthan walk for 12kms Everyday in Hot summer. They fight for one drop water. So please save water for the next generation.",
    synopsis: "Save water for your next generation, don't waste one drop of water. In every second India lost one drop of water from Street taps. My concept is if India lost in a second one drop of water from a tap. Then 1mint 60 drops fall. 1day 86,000 drops fall. Water is fallen in a day =5.7liters. To accurate the same amount of water women in Rajasthan walk for 12kms Everyday in Hot summer. They fight for one drop water. So please save water for the next generation.\n\n\"Last Drop\" ingeniously uses a simple premise—a leaking tap—to deliver a profound message about water conservation. Through its minimalist approach, the film poignantly illustrates societal apathy towards water wastage, where every second a drop is lost accumulating to liters daily while women walk kilometers across arid lands to fetch water.",
    awards: [
      'Official Selection — Central Illinois Feminist Film Festival (USA)',
      'Official Selection — Japan World\'s Tourism Film Festival (Japan)',
      'Honorable Mention — Cinemaking International Film Festival (Dhaka)',
      'Semi-Finalist — Miami 4 Social Change Youth Film Festival (USA)'
    ],
    clientOrStudio: 'Independent Short Documentary',
    imdbUrl: 'https://www.imdb.com/title/tt12504996/?ref_=nm_knf_t_1',
    sampleVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    featured: false,
    stills: [
      gramVikasCoverImage
    ],
    keyCredits: [
      { role: 'Writer, Director & Producer', name: 'Nishith Sahasransu Ray' },
      { role: 'Cinematographer', name: 'Swarup Ranjan' },
      { role: 'Sound Mixing', name: 'Pratap Kumar' }
    ]
  },
  {
    id: 'odisha-tourism-tvc',
    title: 'Baghuni: Dance Like a Tiger',
    subtitle: 'Feature Film • Indo-UK International Co-Production',
    category: 'feature',
    categoryLabel: 'Feature Film',
    director: 'Jitendra Mishra',
    role: 'Assistant Director / Production Team',
    year: '2025',
    duration: 'Feature Film',
    aspectRatio: '2.39:1 Anamorphic',
    cameraRig: 'ARRI Alexa Mini LF / Cooke Anamorphic /i',
    logFormat: 'ARRIRAW 4.5K',
    posterImage: baghuniCoverImage,
    backdropImage: baghuniCoverImage,
    logline: "A stirring tale of resistance, resilience, and unstoppable courage centering on a young woman who protests and fights for her rights within a male-dominated society, challenging deeply ingrained societal beliefs through the fierce spirit of Odisha's traditional Bagha Nacha (Tiger dance).",
    synopsis: "Official Selection at the 78th Festival de Cannes (Bharat Pavilion) and selected for the prestigious NFDC Film Bazaar Co-Production Market, 'Baghuni: Dance Like a Tiger' is a historic Indo-UK international co-production between the National Film Development Corporation of India (NFDC), Glocal Films UK Limited (Partha Panda), and Cinema4Good Pvt. Ltd. (Jitendra Mishra).\n\nWritten and directed by acclaimed filmmaker Jitendra Mishra and starring superstar Sabyasachi Mishra, the narrative is inspired by the silent strength of the director's mother as a profound tribute to women who break barriers with grace and resilience. The story centers on a young woman who rises in courageous defiance against entrenched conservative traditions and patriarchal expectations in a male-dominated society. Drawing vibrant metaphorical energy from Odisha's centuries-old 'Bagha Nacha' (Tiger dance), the film showcases the cultural heritage and resilient spirit of Odisha on a global cinematic canvas.",
    awards: [
      'Official Unveiling — 78th Cannes Film Festival (Bharat Pavilion)',
      'Official Selection — NFDC Film Bazaar Co-Production Market',
      'Historic Indo-UK International Co-Production'
    ],
    clientOrStudio: 'NFDC India & Glocal Films UK / Cinema4Good',
    imdbUrl: 'https://www.imdb.com/title/tt29629518/?ref_=ttfc_ov_bk',
    featured: false,
    stills: [
      baghuniCoverImage
    ],
    keyCredits: [
      { role: 'Writer & Director', name: 'Jitendra Mishra' },
      { role: 'Lead Actor', name: 'Sabyasachi Mishra' },
      { role: 'Producers', name: 'Partha Panda (Glocal Films UK), Prithul Kumar (NFDC), Jitendra Mishra (Cinema4Good)' },
      { role: 'Screenplay', name: 'Shankhajeet De, Dr. Sulagna Mohany, Utpal Borpujari' },
      { role: 'Dialogue', name: 'Susanta Mani' },
      { role: 'Sound Designer', name: 'Subash Sahoo (National Award Winner)' },
      { role: 'Production Designer', name: 'Sukant Panigrahy' },
      { role: 'Music Directors', name: 'Prem Anand, Srikanta Panda, Anurag Patnaik' },
      { role: 'Production Collective', name: 'Nishith S. Ray & Technical Team' }
    ]
  },
  {
    id: 'tata-steel-resilience',
    title: 'Trapped',
    subtitle: 'Short Film • Psychological Drama',
    category: 'short',
    categoryLabel: 'Short Film',
    director: 'Nishith Sahasransu Ray',
    role: 'Director, Writer & Cinematographer',
    year: '2020',
    duration: '2 min',
    aspectRatio: '16:9 HD',
    cameraRig: 'Cinema Prime / Handheld',
    logFormat: 'Cinematic Log',
    posterImage: tataSteelCoverImage,
    backdropImage: tataSteelCoverImage,
    logline: "In this covid-19 situations I am totally in my room and I have followed all the govt rules. How seriously pandemic can affect the psychology of a person. Let's not put our mind to a contaminated Zone. It's time to move on.",
    synopsis: "Trapped short film: In this covid-19 situations I am totally in my room and I have followed all the govt rules. How seriously pandemic can affect the psychology of a person. Let's not put our mind to a contaminated Zone. It's time to move on.\n\nCreated during the COVID-19 lockdown period under strict government safety regulations, 'Trapped' explores the psychological toll and emotional confinement experienced by an individual isolated inside their room.",
    awards: ['IMDb 9.9/10 Rated Short Film', 'Official Selection — Lockdown Film Showcase'],
    clientOrStudio: 'Independent Short Film',
    imdbUrl: 'https://www.imdb.com/title/tt13428532/?ref_=nm_knf_t_2',
    trailerYoutubeUrl: 'https://www.youtube.com/watch?v=K7fg9FRb6sQ',
    sampleVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    featured: false,
    stills: [
      tataSteelCoverImage
    ],
    keyCredits: [
      { role: 'Concept, Direction & Cinematography', name: 'Nishith Sahasransu Ray' },
      { role: 'Editing & Sound Mixing', name: 'Nishith Sahasransu Ray' }
    ]
  },
  {
    id: 'kaagi-last-drop',
    title: 'Dustbin',
    subtitle: 'Social Awareness Short Film',
    category: 'short',
    categoryLabel: 'Short Film',
    director: 'Nishith Sahasransu Ray',
    role: 'Director, Writer & Creator',
    year: '2019',
    duration: '6 min',
    aspectRatio: '16:9 HD',
    cameraRig: 'Cinema Prime / Handheld',
    logFormat: 'Cinematic Rec.709',
    posterImage: dustbinCoverImage,
    backdropImage: dustbinCoverImage,
    logline: 'IT is a social awareness film, Even a poor hungry boy does not leave his behaviour but we are not. The film was watched by Manmohan Mahapatra who got 8 national award & many international award... it was my first short film.',
    synopsis: "IT is a social awareness film, Even a poor hungry boy does not leave his behaviour but we are not. The film was watched by Manmohan Mahapatra who got 8 national award & many international award... it was my first short film so my output is amateur .....🙏 very very special thanks to those who helped in my project.\n\nA poignant social awareness short film exploring civic responsibility and character through the lens of a destitute young boy.",
    awards: [
      'Screened & Applauded by National Award Winner Manmohan Mahapatra',
      'Debut Short Film Selection'
    ],
    clientOrStudio: 'Nishith Ray Creation',
    trailerVideoId: 'sWdYUDqULg0',
    trailerYoutubeUrl: 'https://www.youtube.com/watch?v=sWdYUDqULg0',
    sampleVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    featured: false,
    stills: [
      dustbinCoverImage,
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80'
    ],
    keyCredits: [
      { role: 'Concept, Direction & Production', name: 'Nishith Sahasransu Ray' },
      { role: 'Banner', name: 'Nishith Ray Creation' }
    ]
  }
];

export const BTS_ITEMS: BTSItem[] = [
  {
    id: 'bts-1',
    title: 'Directing the Night Sequence',
    category: 'film',
    image: btsStillNightImage,
    caption: 'Night exterior setup using 18K HMI and tungsten bounce on the backstreets of Malad.',
    gearNotes: 'ARRI Alexa Mini LF on Ronin 2 with Cooke Anamorphic 40mm',
    location: 'Mumbai Exterior',
    photographer: 'Sachin P.'
  },
  {
    id: 'bts-2',
    title: 'ON-SET RIGGING & MONITORING',
    category: 'film',
    image: btsCineSetImage,
    caption: 'Crew calibrating cinema rig, focus pulling system, and field monitor during an active production shoot.',
    gearNotes: 'Cine Camera Rig / Wireless Follow Focus / High-Bright Production Monitor',
    location: 'Production Set & Soundstage',
    photographer: 'Unit Stills'
  },
  {
    id: 'bts-3',
    title: 'GOLDEN HOUR ON-SET RADIO DISPATCH',
    category: 'film',
    image: btsGoldenHourCommsImage,
    caption: 'First Assistant Director coordinating crew cues and camera readiness over production walkie-talkie during magical sunset golden hour.',
    gearNotes: 'Motorola CP200d Two-Way Production Radio / Sunset Backlight Framing',
    location: 'Outdoor Location Shoot',
    photographer: 'Unit Stills Team'
  },
  {
    id: 'bts-4',
    title: 'LOCATION MONITORING & TAKE PLAYBACK',
    category: 'film',
    image: btsLocationPlaybackImage,
    caption: 'Reviewing raw shot rushes and framing composition on the field monitor with unit crew during a location setup.',
    gearNotes: 'Field Director Monitor / Wireless Video Feed / On-Location DIT Station',
    location: 'Exterior Film Location',
    photographer: 'Unit Stills Team'
  },
  {
    id: 'bts-5',
    title: 'LUSH EXTERIOR & NATURAL LIGHT DIFFUSION',
    category: 'film',
    image: btsMorningExteriorRigImage,
    caption: 'Cinematographer and camera department capturing outdoor sequences amidst lush green terrain, utilizing large daylight diffusion scrims and natural ambient bounce for organic scene lighting.',
    gearNotes: 'Cinema Camera Rig / Overhead Daylight Diffusion Scrim / Ultra-Bounce Reflector',
    location: 'Lush Forest Exterior',
    photographer: 'Unit Stills Team'
  },
  {
    id: 'bts-6',
    title: 'OUTDOOR BASECAMP & FIELD GEAR STAGING',
    category: 'film',
    image: btsOutdoorStagingImage,
    caption: 'Production crew and camera department organizing heavy support packages, flight cases, and field monitors at the outdoor location basecamp.',
    gearNotes: 'Heavy-Duty Cinema Tripods / Pelican Flight Cases / Field Monitor Cart Setup',
    location: 'Open-Air Location Basecamp',
    photographer: 'Unit Stills Team'
  }
];

export const CATEGORIZED_REELS: CategorizedReelItem[] = [
  {
    id: 'corporate-films',
    title: 'CORPORATE FILMS',
    categoryKey: 'corporate',
    count: '14+ Films',
    description: 'High-stake brand statements, industrial legacy overviews, and executive leadership cinema that commands authority.',
    image: corporateFilmsImage,
    tags: ['Industrial', 'Brand Legacy', 'Executive Keynotes'],
    highlightProject: 'Tata Steel: Forged in Fire'
  },
  {
    id: 'ad-films-tvcs',
    title: 'AD FILMS & TVCS',
    categoryKey: 'commercial',
    count: '22+ Commercials',
    description: 'Sensory advertising campaigns engineered for television broadcast, OTT preroll, and high-impact digital placements.',
    image: odishaTourismImage,
    tags: ['Brand Spots', 'Tourism TVCs', 'Cinematic 4K HDR'],
    highlightProject: 'Odisha Tourism: Echoes of Heritage'
  },
  {
    id: 'ngo-social',
    title: 'NGO & SOCIAL',
    categoryKey: 'ngo',
    count: '18+ Narratives',
    description: 'Humanitarian reportage, grassroots environmental transformations, and tribal dignity documented without patronization.',
    image: gramVikasCoverImage,
    tags: ['Community Voice', 'Climate Resilience', 'UN Initiatives'],
    highlightProject: 'Last Drop (Short Doc)'
  },
  {
    id: 'documentaries',
    title: 'DOCUMENTARIES',
    categoryKey: 'documentary',
    count: '8+ Features & Docs',
    description: 'Deep investigative cinema, long-form character studies, and festival-circuit nonfiction recognized globally.',
    image: nandaMasterCoverImage,
    tags: ['Investigative', 'Festival Circuits', 'Docu-Drama'],
    highlightProject: 'Nanda Master nka chatasali'
  },
  {
    id: 'short-films',
    title: 'SHORT FILMS',
    categoryKey: 'short',
    count: '6+ Independent Works',
    description: 'Unconstrained narrative experiments, auteur voice showcases, and avant-garde short format storytelling.',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
    tags: ['Auteur Cinema', 'Chamber Pieces', 'Festival Selections'],
    highlightProject: 'The Monologue at Dusk'
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'bpftio-alumnus-roots',
    title: 'BPFTIO ALUMNUS, ODISHA ROOTS, GLOBAL RECOGNITION',
    date: 'OCT 2024',
    monthYear: 'October 2024',
    source: 'The Cine Herald & Orissa POST',
    tag: 'PROFILE',
    readTime: '4 min read',
    excerpt: 'Tracing filmmaker Nishith Sahasransu Ray’s cinematic trajectory from the classrooms of BPFTIO to major productions like Zwigato and Jengaburu.',
    fullBody: [
      'Bhubaneswar/Mumbai: In an industry often dominated by established generational dynasties, young filmmakers from Odisha are carving an indelible footprint on the global cinematic landscape.',
      'Nishith Sahasransu Ray, an alumnus of the esteemed Biju Pattanaik Film and Television Institute of Odisha (BPFTIO), has quickly emerged as one of the most versatile directorial talents bridging regional soil with Mumbai mainstream excellence.',
      'Having worked closely with veteran directors Nandita Das on the critically acclaimed "Zwigato" (starring Kapil Sharma) and Nila Madhab Panda on India\'s first ecological thriller series "Jengaburu" for Sony LIV, Ray has established Infinity Light Drawings as an agile, high-concept production collective.',
      '"Cinema for me has never been a static frame; it is light, shadow, and above all, the human pulse," Ray noted in a recent interview. With dual studio operations in Mumbai and Bhubaneswar, the studio aims to become the premier gateway for co-productions in Eastern India.'
    ],
    image: newsBpftioImage,
    festivalLaurels: ['TIFF Official Selection Coverage', 'Busan Spotlight']
  },
  {
    id: 'water-wastage-doc-circuit',
    title: "ODISHA YOUTH'S SHORT FILM GETS GLOBAL RECOGNITION",
    date: 'MAY 2020',
    monthYear: 'May 20, 2020',
    source: 'Orissa POST (Edition 832, Page 2)',
    tag: 'ORISSAPOST',
    readTime: '3 min read',
    excerpt: 'At a time when people badly need to wash their hands regularly to defeat coronavirus, every drop of water counts — and that is what young Bhubaneswar filmmaker Nishith Sahasransu Ray highlighted in "Last Drop", selected across USA, UK & Colombia film festivals.',
    fullBody: [
      'POST NEWS NETWORK — BHUBANESWAR: Hand-washing is one of the most effective ways to prevent the spread of coronavirus. Therefore, it is extremely important to save water, the source of life. In a bid to sensitise people, Bhubaneswar-based young filmmaker Nishith Sahasransu Ray has made Last Drop, a short film to highlight the looming water crisis.',
      'Significantly, the movie is selected for screening in three major international film festivals — Central Illinois Feminist Film Festival-2020 (USA), Lift-off Global Network Sessions Film Festival-2020 (UK) and III Muestra de Video Arte Faenza Film Festival-2020 (Colombia).',
      'While the less than one-minute duration movie has already been screened online in the first two festivals, it will be exhibited in a theatre during Muestra film festival after the end of corona crisis.',
      '“Every drop of water that gets wasted from a tap also matters. In our country, around five litres of water go in vain everyday from a single tap at many homes while several women in Rajasthan have to walk nearly 12 kms a day to collect the same amount of water. At a time when we need water to wash hands to defeat coronavirus, every drop counts and that is what I have highlighted in my film,” the filmmaker told Orissa POST.',
      'Ray, known as a self-learner, has mastered the art of movie making through trial and error methods. He along with his friends have shot quite a few shorts but they have never screened them because the end results, they considered, were not up to the mark.',
      '“I made my foray into filmmaking after being inspired by stalwarts of the likes of Satyajit Ray, Guru Dutt, Stanley Kubrick, Andrei Tarkovsky, Martin Scorsese, Christopher Nolan & many others,” said the alumnus of Biju Patnaik Film and Television Institute (BPFTI), Cuttack.',
      'Ray\'s first short film was Dustbin and he wants to make films on issues like energy, water and conservation of nature.',
      'Filmmaker Biswanath Rath, whose films have been screened in nearly 200 international festivals, acknowledging the effort says, “It is definitely a tough task to tell a story in less than one minute. However, Ray made it look so easy. It is an inspirational work and I am sure more people from the state would follow his path in future.”'
    ],
    image: newsLastDropImage,
    festivalLaurels: [
      'Central Illinois Feminist Film Festival 2020 (USA)',
      'Lift-Off Global Network Sessions 2020 (UK)',
      'III Muestra de Video Arte Faenza 2020 (Colombia)'
    ],
    externalUrl: 'https://odishapostepaper.com/edition/832/orissapost/page/2'
  },
  {
    id: 'international-festival-selection',
    title: 'ODIA YOUNGSTERS’ SHORT FILM SELECTED FOR CLERMONT-FERRAND & IFFI GOA',
    date: 'MAR 2024',
    monthYear: 'March 2024',
    source: 'National Film Dispatch',
    tag: 'SELECTION',
    readTime: '3 min read',
    excerpt: '"The Monologue at Dusk" earns competitive screenings at international short film markets for its bold 1.33:1 aesthetic.',
    fullBody: [
      'Infinity Light Drawings’ chamber short film "The Monologue at Dusk", directed by Nishith S. Ray and lensed by Sachin Ramesh Pattanayak, has been officially invited to the Clermont-Ferrand Short Film Market in France.',
      'The film, running 16 minutes, features veteran Odia theatre actors in a story set entirely during the final three hours before an ancient amphitheatre is brought down by bulldozers.',
      'The jury lauded the production for its disciplined use of Academy ratio framing, analog color science, and dynamic spatial audio design curated by FM Sankar.'
    ],
    image: newsMonologueImage,
    festivalLaurels: ['Clermont-Ferrand Market', 'IFFI Goa Indian Panorama']
  }
];

export const CORE_TEAM: TeamMember[] = [
  {
    id: 'nishith-ray',
    name: 'NISHITH S. RAY',
    title: 'Director & Creative Head / Founder',
    roleTag: 'DIRECTOR / FOUNDER',
    bio: 'Alumnus of BPFTIO. Directed and assisted on landmark Indian features and series including Zwigato and Jengaburu. Known for blending raw observational realism with high-end anamorphic color craft.',
    image: founderNishithImage,
    imagePosition: 'center 20%',
    credits: ['Zwigato (Asst. Director)', 'Jengaburu (Asst. Director)', 'Nanda Master nka chatasali (Asst. Director)', 'Kaagi (Director)'],
    equipmentSpecialty: 'ARRI Alexa LF, RED Monstro, Cooke Anamorphic /i',
    socials: {
      instagram: 'https://instagram.com/nishithray',
      vimeo: 'https://vimeo.com/nishithray',
      linkedin: 'https://linkedin.com/in/nishithray'
    }
  },
  {
    id: 'sachin-pattanayak',
    name: 'SACHIN RAMESH PATTANAYAK',
    title: 'Director of Photography & Lighting Designer',
    roleTag: 'CINEMATOGRAPHER',
    bio: 'Delhi College of Photography & Filmmaking pass out \nWorked with Bloom stays, Livespace, Impulsemumbai, Supreme Task, MeeMee, Invinto, Tresmod, RedTape, Cherise, Jameson',
    image: sachinPattanayakImage,
    credits: ['Kaagi', 'Odisha Tourism TVC', 'The Monologue at Dusk'],
    equipmentSpecialty: 'Steadicam M-2, Easyrig, Astera Titan Tubes, ARRI Skypanels',
    socials: {
      instagram: 'https://instagram.com/sachinpattanayak',
      linkedin: 'https://linkedin.com/in/sachinpattanayak',
      vimeo: 'https://vimeo.com/sachinp'
    }
  },
  {
    id: 'fm-sankar',
    name: 'FM SANKAR',
    title: 'Cinematographer / Photographer - Light Painting and Long Exposure',
    roleTag: 'CINEMATOGRAPHER / PHOTOGRAPHER',
    bio: 'Known for his expertise in light painting and long-exposure photography, Sankar captures the surreal beauty of time and motion.',
    image: fmSankarImage,
    credits: ['Light Painting Masterpieces', 'Long Exposure Series', 'The Monologue at Dusk'],
    equipmentSpecialty: 'Custom Light Blades, Pixelstick, ND Filters, ARRI & Sony FX Series',
    socials: {
      instagram: 'https://instagram.com/fmsankar',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'aswini-jena',
    name: 'ASWINI JENA',
    title: 'Editor | Post-Production Artist',
    roleTag: 'EDITOR / POST-PRODUCTION',
    bio: 'Crafts the final narrative by transforming raw footage into a seamless visual experience. With a sharp sense of timing, rhythm, and emotion, the editor shapes each project into a compelling story—balancing pace, mood, and visual flow. From subtle cuts to dynamic transitions, every detail is refined to deliver a powerful and immersive cinematic impact.',
    image: aswiniJenaImage,
    credits: ['Tata Steel: Forged in Fire', 'Odisha Tourism TVC', 'Kaagi'],
    equipmentSpecialty: 'DaVinci Resolve Advanced Panel, Flanders Scientific OLED, Premiere Pro',
    socials: {
      instagram: 'https://instagram.com/aswinijena',
      vimeo: 'https://vimeo.com/aswinijena',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'sourav-mahapatra',
    name: 'SOURAV MAHAPATRA',
    title: 'Creative Director & Management',
    roleTag: 'CREATIVE DIRECTOR & MANAGEMENT',
    bio: 'Known for The Jengaburu Curse (2023) and The Mountain Hockey (2021), he leads the creative vision while overseeing project execution and team management.',
    image: souravMahapatraImage,
    imagePosition: 'center 15%',
    credits: ['The Jengaburu Curse (2023)', 'The Mountain Hockey (2021)', 'Tata Steel Brand Spot'],
    equipmentSpecialty: 'Creative Direction, Executive Production, Team Management',
    socials: {
      instagram: 'https://instagram.com/souravmahapatra',
      linkedin: 'https://linkedin.com'
    }
  }
];

// CLIENT PARTNER LOGOS:
// Currently loaded with clean dummy logos in the placeholder slots.
// To insert your original company logos later:
// 1. Place your logo image files in public/logos/ or src/assets/ (e.g., /logos/my-logo.png or .svg)
// 2. Simply update the `logoImage` field below with the path or URL of your original logo.
export const CLIENT_PARTNERS: ClientPartner[] = [
  // Row 1
  { id: 'nfdc', name: 'NFDC India', category: 'Government & Heritage', logoText: 'NFDC', descriptor: 'National Film Development Corporation', logoImage: '/logos/client-nfdc.svg' },
  { id: 'sonyliv', name: 'Sony LIV', category: 'Entertainment', logoText: 'SONY LIV', descriptor: 'Original OTT Streaming Platform (Jengaburu)', logoImage: '/logos/client-sonyliv-official-app.svg' },
  { id: 'applause', name: 'Applause Entertainment', category: 'Entertainment', logoText: 'APPLAUSE', descriptor: 'Content & Feature Studio', logoImage: clientSlot3Image },
  { id: 'clapperboard', name: 'Cinema 4 Good India', category: 'Entertainment', logoText: 'CINEMA 4 GOOD', descriptor: 'Film & Feature Production', logoImage: clientSlot4Image },

  // Row 2
  { id: 'gramvikas', name: 'Gram Vikas', category: 'NGO & Social', logoText: 'GRAM VIKAS', descriptor: 'Rural Development Foundation', logoImage: clientSlot5Image },
  { id: 'ormas', name: 'ORMAS', category: 'Government & Heritage', logoText: 'ORMAS', descriptor: 'Odisha Rural Development & Marketing Society', logoImage: clientSlot6Image },
  { id: 'skilledinodisha', name: 'Skilled in Odisha', category: 'Government & Heritage', logoText: 'SKILLED IN ODISHA', descriptor: 'Odisha Skill Development Authority', logoImage: clientSlot7Image },
  { id: 'wcdodisha', name: 'W&CD Dept., Odisha', category: 'Government & Heritage', logoText: 'W&CD ODISHA', descriptor: 'Women & Child Development Department', logoImage: clientSlot8Image },

  // Row 3
  { id: 'fisheriesodisha', name: 'Fisheries & ARD Dept.', category: 'Government & Heritage', logoText: 'FISHERIES & ARD', descriptor: 'Fisheries & Animal Resources Development', logoImage: clientSlot9Image },
  { id: 'nacchhatrapur', name: 'NAC Chhatrapur', category: 'Government & Heritage', logoText: 'NAC CHHATRAPUR', descriptor: 'Notified Area Council, Ganjam', logoImage: clientSlot10Image }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'SHYAM SUNDAR',
    clientTitle: 'Production Head & Line Producer',
    projectReference: 'Production of Jengaburu (Sony LIV)',
    quote: 'Working with Nishith was a seamless experience. His vision for cinematic storytelling is exceptional, especially during the high-stakes production of Jengaburu across remote bauxite mines. He anticipates directorial needs three steps ahead.',
    rating: 4
  },
  {
    id: 't-2',
    clientName: 'AMRITA PATNAIK',
    clientTitle: 'Creative Lead & Communications',
    projectReference: 'Gram Vikas & WaterAid Campaign',
    quote: 'The way he captures human emotions in documentaries like Kaagi is truly moving. A storyteller who understands the soul of the subject rather than looking through an outsider’s tourist lens. His sensitivity on camera is unmatched.',
    rating: 5
  },
  {
    id: 't-3',
    clientName: 'RAJESH MOHANTY',
    clientTitle: 'Executive Producer',
    projectReference: 'Commercials & OTT Brand Spots',
    quote: 'His attention to detail and ability to handle large-scale productions while keeping the artistic essence alive is remarkable. Infinity Light Drawings sets the gold standard for visual discipline in Eastern India.',
    rating: 4
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'jengaburu-case',
    title: 'Capturing India’s First Ecological OTT Thriller',
    client: 'Sony LIV / Studio Next',
    category: 'OTT Series / Feature Production',
    year: '2023',
    challenge: 'Shooting in operational high-altitude opencast bauxite mines with extreme red dust, active heavy machinery, and severe heat while maintaining pristine 8K RAW digital capture.',
    approach: 'Deployed dual RED Monstro 8K cameras sealed in custom environmental housings. Utilized specialized ultra-wide glass to emphasize the sheer gargantuan scale of industrial extraction against fragile human figures. Coordinated seamless second-unit execution with indigenous tribal communities.',
    outcome: 'Streamed globally to critical acclaim across 100+ countries, garnering multiple OTT award nominations and sparking national dialogue on bauxite ecological stewardship.',
    heroImage: jengaburuCoverImage,
    metrics: [
      { label: 'Global Views', value: '18M+' },
      { label: 'Festival Nominees', value: '4 Major' },
      { label: 'Mine Schedule', value: '42 Days' }
    ],
    stills: [
      jengaburuCoverImage,
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'zwigato-case',
    title: 'Grounding Realism for Nandita Das’s Zwigato',
    client: 'Applause Entertainment',
    category: 'International Theatrical Feature',
    year: '2023',
    challenge: 'Replicating the authentic, chaotic pace of food delivery workers in urban India without disrupting live city traffic or compromising on cinematic lens depth.',
    approach: 'Executed swift street-level second unit camera tracking using low-profile gimbal rigs on modified electric scooters. Handled local talent casting and authentic dialect coaches for all supporting roles across Bhubaneswar.',
    outcome: 'Selected for World Premiere at TIFF, Asian Premiere at Busan International Film Festival, and hailed by critics globally for its tactile realism.',
    heroImage: zwigatoCoverImage,
    metrics: [
      { label: 'TIFF Premiere', value: '100% Sold Out' },
      { label: 'City Filming Days', value: '35 Days' },
      { label: 'Local Cast Hired', value: '140+ Actors' }
    ],
    stills: [
      zwigatoCoverImage,
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'wateraid-case',
    title: 'Transforming Awareness into Physical Aquifer Restoration',
    client: 'WaterAid & Gram Vikas',
    category: 'Non-Fiction Social Impact Film',
    year: '2024',
    challenge: 'Translating complex hydro-geological technicalities of mountain groundwater recharge into an emotionally gripping narrative that villagers and donors alike could champion.',
    approach: 'Followed three indigenous women water wardens over four seasons, using poetic time-lapses of mountain rain catchment combined with intimate fireside community meetings.',
    outcome: 'Raised over $450,000 in dedicated donor grants, directly funding spring rejuvenation for 40 hilltop tribal villages.',
    heroImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Direct Grants Mobilized', value: '$450K+' },
      { label: 'Springs Revived', value: '40 Systems' },
      { label: 'International Laurels', value: '3 Awards' }
    ],
    stills: [
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    phase: 'CONCEPT & SCRIPT DOCTORING',
    duration: 'Week 1 - 3',
    description: 'We dissect core character motives, cinematic world-building, narrative rhythm, and visual language before a single call sheet is printed.',
    deliverables: ['Director Treatment', 'Mood Reels', 'Floor Plans & Storyboards', 'Location Feasibility Dossier']
  },
  {
    step: '02',
    phase: 'PRE-PRODUCTION & CAMERA TESTS',
    duration: 'Week 3 - 6',
    description: 'Custom optical testing on RED and ARRI sensor rigs, lens aberration profiling, wardrobe palette alignment, and authentic local casting.',
    deliverables: ['Camera Test Dailies', 'Comprehensive Crew Roster', 'Permit Authorizations', 'Production Master Schedule']
  },
  {
    step: '03',
    phase: 'PRINCIPAL PHOTOGRAPHY',
    duration: 'Week 6 - 10',
    description: 'Meticulously planned shoot execution with dual-unit discipline, live calibrated client monitoring, and zero-compromise artistic focus.',
    deliverables: ['Dual-Redundant Backups', 'Live Color-Graded Dailies', 'Audio Sync Reports', 'Director Wrap Assemblies']
  },
  {
    step: '04',
    phase: 'ACES POST & SOUND MASTERING',
    duration: 'Week 10 - 14',
    description: 'High-precision DaVinci Resolve color grading, subtle invisible visual effects, Foley Foley recording, and theatrical Dolby Atmos mixes.',
    deliverables: ['DCP Theatrical Master', 'ProRes 4444 XQ Master', 'Social Aspect Cutdowns', 'Festival Delivery Archival Pack']
  }
];

export const AD_FILM_ARCHIVES: AdFilmDriveArchive[] = [
  {
    id: 'ad-films-tvc-portfolio',
    title: 'corporate films and ad films',
    categoryLabel: 'Corporate & Commercial',
    description: 'Comprehensive commercial campaign master repository, television commercials, brand identity spots, corporate cinema, and broadcast cutdowns.',
    driveLink: '',
    clientOrOrg: 'Broadcast & Commercial Clients',
    tags: ['TVC Master', 'Corporate Showcase', 'Broadcast 4K', 'Campaign Cutdowns'],
    highlightText: 'Master Broadcast Reel',
    coverImage: corporateFilmsImage,
    objectPosition: 'center 52%'
  },
  {
    id: 'ngo-social-impact-films',
    title: 'Ngo social impact films',
    categoryLabel: 'Social Impact',
    description: 'Grassroots documentary footage, humanitarian field stories, developmental transformations, and rural community voices.',
    driveLink: '',
    clientOrOrg: 'Development Agencies & NGOs',
    tags: ['Humanitarian', 'Rural Impact', 'Grassroots Voices'],
    highlightText: 'Impact Stories',
    coverImage: ngoSocialImpactImage
  },
  {
    id: 'corporate-films-archive',
    title: 'documentary',
    categoryLabel: 'Documentary',
    description: 'We create documentary films, stories and visual content that give voice to communities, inspire action and help your work reach more people.',
    driveLink: '',
    clientOrOrg: 'NGOs & Development Partners',
    tags: ['Documentary Films', 'Social Impact', 'Field Docs', 'Awareness Campaigns'],
    highlightText: 'Films That Amplify Impact',
    coverImage: ngoSocialImpactPosterImage
  },
  {
    id: 'the-diddle-productions',
    title: 'Short films',
    categoryLabel: 'Short Films',
    description: 'Big stories in tiny packages. Creative short narrative formats, boutique brand cinema, stylized digital stories, and festival-circuit productions.',
    driveLink: '',
    clientOrOrg: 'Original Productions & Shorts',
    tags: ['Short Films', 'Big Stories', 'Digital Formats', 'Original Productions'],
    highlightText: 'Big Stories in Tiny Packages',
    coverImage: shortFilmsCoverImage
  }
];

