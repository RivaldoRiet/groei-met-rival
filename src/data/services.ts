export interface Service {
  id: string;
  title: string;
  description: string;
  platform: string;
  price_per_unit: number;
  minimum_order: number;
  maximum_order: number;
  unit: string;
  icon: string;
  gradient: string;
  category: string;
  url?: string;
  price_options?: {
    [key: string]: number;
  };
}

export const services: Service[] = [
  // Existing services
  {
    id: "instagram-usa-followers",
    title: "Instagram USA Followers",
    description: "Krijg echte Amerikaanse volgers voor je Instagram account - boost je bereik in de USA!",
    platform: "Instagram",
    price_per_unit: 0.014, // 7.0 * 2 / 1000
    minimum_order: 50,
    maximum_order: 100000,
    unit: "followers",
    icon: "Users",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram USA Followers, USA Services",
    url: "https://buyshazam.com/product/instagram-usa-followers/"
  },
  {
    id: "youtube-live-stream-views-120",
    title: "Youtube Live Stream Views stay 120 mins",
    description: "Boost je livestream direct met views die 120 minuten blijven kijken!",
    platform: "YouTube",
    price_per_unit: 0.0044, // 2.2 * 2 / 1000
    minimum_order: 100,
    maximum_order: 400000,
    unit: "views",
    icon: "Eye",
    gradient: "from-red-500 to-red-600",
    category: "Youtube, Youtube Live Stream Views stay 120 mins",
    url: "https://buyshazam.com/product/youtube-live-stream-views-stay-120-mins/"
  },
  {
    id: "instagram-views",
    title: "Instagram Views",
    description: "Laat je video's viral gaan met meer views! Views zijn cruciaal voor het Instagram algoritme.",
    platform: "Instagram",
    price_per_unit: 0.0014, // 7.0 * 2 / 1000 (using the Views option)
    minimum_order: 300,
    maximum_order: 60000,
    unit: "views",
    icon: "Eye",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram Views",
    url: "https://buyshazam.com/product/instagram-views/"
  },
  {
    id: "instagram-nigeria-random-comments",
    title: "Instagram Nigeria Random Comments",
    description: "Nigerian random comments voor je Instagram posts - authentieke engagement uit Nigeria!",
    platform: "Instagram",
    price_per_unit: 0.11, // 55.0 * 2 / 1000
    minimum_order: 50,
    maximum_order: 20000,
    unit: "comments",
    icon: "MessageCircle",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram Nigeria Random Comments",
    url: "https://buyshazam.com/product/instagram-nigeria-random-comments/"
  },
  {
    id: "instagram-automatic-likes",
    title: "Instagram Automatic Likes",
    description: "Automatische likes voor nieuwe posts - stel het één keer in en krijg direct likes op elke nieuwe post!",
    platform: "Instagram",
    price_per_unit: 0.006, // 3.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 100000,
    unit: "likes",
    icon: "Heart",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram Automatic, Instagram Automatic Likes",
    url: "https://buyshazam.com/product/instagram-automatic-likes"
  },
  {
    id: "tiktok-auto-views",
    title: "TikTok Auto Views",
    description: "Automatische views voor je TikTok videos - zorg dat je content direct momentum krijgt!",
    platform: "TikTok",
    price_per_unit: 0.01, // 5.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 99999,
    unit: "views",
    icon: "Eye",
    gradient: "from-purple-500 to-pink-500",
    category: "TikTok, TikTok Auto Views",
    url: "https://buyshazam.com/product/tiktok-auto-views/"
  },
  {
    id: "instagram-automatic-saves",
    title: "Instagram Automatic Saves",
    description: "Automatische saves voor nieuwe posts - verhoog je engagement rate automatisch!",
    platform: "Instagram",
    price_per_unit: 0.006, // 3.0 * 2 / 1000
    minimum_order: 20,
    maximum_order: 30000,
    unit: "saves",
    icon: "Bookmark",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram Automatic, Instagram Automatic Saves",
    url: "https://buyshazam.com/product/instagram-automatic-saves"
  },
  {
    id: "threads-custom-comments",
    title: "Threads Custom Comments",
    description: "Custom comments voor je Threads posts - personaliseer je engagement!",
    platform: "Threads",
    price_per_unit: 0.03, // 15.0 * 2 / 1000
    minimum_order: 5,
    maximum_order: 500,
    unit: "comments",
    icon: "MessageCircle",
    gradient: "from-gray-500 to-black",
    category: "Instagram Threads, Threads Custom Comments",
    url: "https://buyshazam.com/product/threads-custom-comments/"
  },
  {
    id: "youtube-subscribers-2",
    title: "Youtube Subscribers #2",
    description: "Meer abonnees voor je YouTube kanaal - groei je community met kwalitatieve subscribers!",
    platform: "YouTube",
    price_per_unit: 0.09, // 45.0 * 2 / 1000
    minimum_order: 50,
    maximum_order: 20000,
    unit: "subscribers",
    icon: "Users",
    gradient: "from-red-500 to-red-600",
    category: "Youtube, Youtube Subscribers #2",
    url: "https://buyshazam.com/product/youtube-subscribers-2/"
  },
  {
    id: "instagram-story-views",
    title: "Instagram Story Views",
    description: "Meer views voor je Instagram Stories - zorg dat je verhalen door meer mensen gezien worden!",
    platform: "Instagram",
    price_per_unit: 0.001, // 5.0 * 2 / 1000 (using the rate from the product)
    minimum_order: 100,
    maximum_order: 350000,
    unit: "views",
    icon: "Eye",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram Story Views",
    url: "https://buyshazam.com/product/instagram-story-views/"
  },
  {
    id: "tiktok-livestream-views-24h",
    title: "TikTok Livestream Views stay 24 hours",
    description: "Livestream views die 24 uur blijven - perfect voor lange streams!",
    platform: "TikTok",
    price_per_unit: 0.362, // 181.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 10000,
    unit: "views",
    icon: "Eye",
    gradient: "from-purple-500 to-pink-500",
    category: "TikTok, TikTok Livestream Views stay 24 hours",
    url: "https://buyshazam.com/product/tiktok-livestream-views-stay-24-hours/"
  },
  {
    id: "tiktok-usa-followers",
    title: "TikTok USA Followers",
    description: "Amerikaanse TikTok volgers voor je account - bereik de Amerikaanse markt!",
    platform: "TikTok",
    price_per_unit: 0.09, // 45.0 * 2 / 1000
    minimum_order: 50,
    maximum_order: 30000,
    unit: "followers",
    icon: "Users",
    gradient: "from-purple-500 to-pink-500",
    category: "TikTok USA Followers",
    url: "https://buyshazam.com/product/tiktok-usa-followers/"
  },
  {
    id: "youtube-views",
    title: "Youtube Views",
    description: "Meer views voor je YouTube videos - boost je zichtbaarheid en bereik!",
    platform: "YouTube",
    price_per_unit: 0.0058, // 29.0 * 2 / 1000
    minimum_order: 1000,
    maximum_order: 10000000,
    unit: "views",
    icon: "Eye",
    gradient: "from-red-500 to-red-600",
    category: "Youtube, Youtube Views",
    url: "https://buyshazam.com/product/youtube-views/"
  },
  {
    id: "linkedin-followers",
    title: "Linkedin Followers",
    description: "Professionele LinkedIn volgers voor je netwerk - versterk je zakelijke aanwezigheid!",
    platform: "LinkedIn",
    price_per_unit: 0.022, // 11.0 * 2 / 1000
    minimum_order: 200,
    maximum_order: 500000,
    unit: "followers",
    icon: "Users",
    gradient: "from-blue-600 to-blue-700",
    category: "Linkedin, Linkedin Followers",
    url: "https://buyshazam.com/product/linkedin-followers/"
  },
  {
    id: "spotify-followers",
    title: "Spotify Followers",
    description: "Meer volgers voor je Spotify profiel - bouw je muzikale fanbase op!",
    platform: "Spotify",
    price_per_unit: 0.004, // 2.0 * 2 / 1000
    minimum_order: 1000,
    maximum_order: 1000000,
    unit: "followers",
    icon: "Users",
    gradient: "from-green-500 to-green-600",
    category: "Spotify, Spotify Followers",
    url: "https://buyshazam.com/product/spotify-followers/"
  },
  {
    id: "threads-likes",
    title: "Threads Likes",
    description: "Meer likes voor je Threads posts - boost je engagement op Meta's nieuwste platform!",
    platform: "Threads",
    price_per_unit: 0.01, // 5.0 * 2 / 1000
    minimum_order: 50,
    maximum_order: 25000,
    unit: "likes",
    icon: "Heart",
    gradient: "from-gray-500 to-black",
    category: "Instagram Threads, Threads Likes",
    url: "https://buyshazam.com/product/threads-likes/"
  },
  {
    id: "instagram-auto-impressions",
    title: "Instagram Auto Impressions",
    description: "Automatische impressions voor je posts - boost je zichtbaarheid automatisch!",
    platform: "Instagram",
    price_per_unit: 0.002, // 1.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 1000000,
    unit: "impressions",
    icon: "Eye",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram Auto Impressions, Instagram Automatic",
    url: "https://buyshazam.com/product/instagram-auto-impressions/"
  },
  {
    id: "youtube-live-stream-views-30",
    title: "Youtube Live Stream Views stay 30 mins",
    description: "Live stream views die 30 minuten blijven - perfect voor korte streams!",
    platform: "YouTube",
    price_per_unit: 0.0016, // 0.8 * 2 / 1000
    minimum_order: 100,
    maximum_order: 50000,
    unit: "views",
    icon: "Eye",
    gradient: "from-red-500 to-red-600",
    category: "Youtube, Youtube Live Stream Views stay 30 mins",
    url: "https://buyshazam.com/product/youtube-live-stream-views/"
  },
  {
    id: "youtube-live-stream-views-60",
    title: "Youtube Live Stream Views stay 60 mins",
    description: "Live stream views die 60 minuten blijven - ideaal voor gemiddelde streams!",
    platform: "YouTube",
    price_per_unit: 0.0024, // 1.2 * 2 / 1000
    minimum_order: 100,
    maximum_order: 400000,
    unit: "views",
    icon: "Eye",
    gradient: "from-red-500 to-red-600",
    category: "Youtube, Youtube Live Stream Views stay 60 mins",
    url: "https://buyshazam.com/product/youtube-live-stream-views-stay-60-mins/"
  },
  {
    id: "instagram-shares",
    title: "Instagram Shares",
    description: "Meer shares voor je Instagram posts - laat anderen je content delen!",
    platform: "Instagram",
    price_per_unit: 0.0011, // 0.55 * 2 / 1000
    minimum_order: 100,
    maximum_order: 5000000,
    unit: "shares",
    icon: "Share",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram Shares",
    url: "https://buyshazam.com/product/instagram-shares/"
  },
  {
    id: "youtube-shorts-comments",
    title: "Youtube Shorts Comments",
    description: "Comments voor je YouTube Shorts - boost de interactie op je korte content!",
    platform: "YouTube",
    price_per_unit: 0.01, // 5.0 * 2 / 1000
    minimum_order: 10,
    maximum_order: 5000,
    unit: "comments",
    icon: "MessageCircle",
    gradient: "from-red-500 to-red-600",
    category: "Youtube Shorts Comments",
    url: "https://buyshazam.com/product/youtube-shorts-comments/"
  },
  {
    id: "tiktok-video-shares",
    title: "TikTok Video Shares",
    description: "Meer shares voor je TikTok videos - laat je content viral gaan!",
    platform: "TikTok",
    price_per_unit: 0.004, // 2.0 * 2 / 1000
    minimum_order: 50,
    maximum_order: 10000000,
    unit: "shares",
    icon: "Share",
    gradient: "from-purple-500 to-pink-500",
    category: "TikTok, TikTok Video Shares",
    url: "https://buyshazam.com/product/tiktok-video-shares/"
  },
  {
    id: "youtube-shorts-views",
    title: "Youtube Shorts Views",
    description: "Meer views voor je YouTube Shorts - maak je korte videos populair!",
    platform: "YouTube",
    price_per_unit: 0.0042, // 21.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 10000000,
    unit: "views",
    icon: "Eye",
    gradient: "from-red-500 to-red-600",
    category: "Youtube, Youtube Shorts Views",
    url: "https://buyshazam.com/product/youtube-shorts-views/"
  },
  {
    id: "instagram-automatic-comments",
    title: "Instagram Automatic Comments",
    description: "Automatische comments voor nieuwe posts - creëer direct interactie!",
    platform: "Instagram",
    price_per_unit: 0.01, // 5.0 * 2 / 1000
    minimum_order: 10,
    maximum_order: 10000,
    unit: "comments",
    icon: "MessageCircle",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram Automatic, Instagram Automatic Comments",
    url: "https://buyshazam.com/product/instagram-automatic-comments"
  },
  {
    id: "tiktok-livestream-likes",
    title: "TikTok Livestream Likes",
    description: "Likes voor je TikTok livestreams - boost je live engagement!",
    platform: "TikTok",
    price_per_unit: 0.0008, // 0.4 * 2 / 1000
    minimum_order: 10,
    maximum_order: 1000000,
    unit: "likes",
    icon: "Heart",
    gradient: "from-purple-500 to-pink-500",
    category: "TikTok, TikTok Livestream Likes",
    url: "https://buyshazam.com/product/tiktok-livestream-likes/"
  },
  {
    id: "linkedin-likes",
    title: "LinkedIn Likes",
    description: "Meer likes voor je LinkedIn posts - versterk je professionele netwerk!",
    platform: "LinkedIn",
    price_per_unit: 0.022, // 11.0 * 2 / 1000
    minimum_order: 50,
    maximum_order: 1000,
    unit: "likes",
    icon: "ThumbsUp",
    gradient: "from-blue-600 to-blue-700",
    category: "Linkedin, LinkedIn Likes",
    url: "https://buyshazam.com/product/linkedin-likes/"
  },
  {
    id: "threads-followers",
    title: "Threads Followers",
    description: "Meer volgers voor je Threads account - bouw je aanwezigheid op Meta's nieuwe platform!",
    platform: "Threads",
    price_per_unit: 0.01, // 5.0 * 2 / 1000
    minimum_order: 50,
    maximum_order: 25000,
    unit: "followers",
    icon: "Users",
    gradient: "from-gray-500 to-black",
    category: "Instagram Threads, Threads Followers",
    url: "https://buyshazam.com/product/threads-followers/"
  },
  {
    id: "tiktok-livestream-views-360",
    title: "TikTok Livestream Views stay 360 mins",
    description: "Livestream views die 360 minuten blijven - perfect voor uitgebreide streams!",
    platform: "TikTok",
    price_per_unit: 0.038, // 19.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 10000,
    unit: "views",
    icon: "Eye",
    gradient: "from-purple-500 to-pink-500",
    category: "TikTok, TikTok Livestream Views stay 360 mins",
    url: "https://buyshazam.com/product/tiktok-livestream-views-stay-360-mins/"
  },
  {
    id: "youtube-comments",
    title: "Youtube Comments",
    description: "Meer comments voor je YouTube videos - boost de discussie onder je content!",
    platform: "YouTube",
    price_per_unit: 0.19, // 95.0 * 2 / 1000
    minimum_order: 20,
    maximum_order: 100000,
    unit: "comments",
    icon: "MessageCircle",
    gradient: "from-red-500 to-red-600",
    category: "Youtube Comments",
    url: "https://buyshazam.com/product/youtube-comments/"
  },
  {
    id: "instagram-likes",
    title: "Instagram Likes",
    description: "Meer likes voor je Instagram posts - de basis voor goede engagement!",
    platform: "Instagram",
    price_per_unit: 0.0032, // 1.6 * 2 / 1000
    minimum_order: 100,
    maximum_order: 25000,
    unit: "likes",
    icon: "Heart",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram Likes",
    url: "https://buyshazam.com/product/instagram-likes/"
  },
  {
    id: "youtube-shorts-likes",
    title: "Youtube Shorts Likes",
    description: "Meer likes voor je YouTube Shorts - boost je korte content!",
    platform: "YouTube",
    price_per_unit: 0.0026, // 13.0 * 2 / 1000
    minimum_order: 50,
    maximum_order: 50000,
    unit: "likes",
    icon: "ThumbsUp",
    gradient: "from-red-500 to-red-600",
    category: "Youtube Shorts Likes",
    url: "https://buyshazam.com/product/youtube-shorts-likes/"
  },
  {
    id: "tiktok-livestream-views-60",
    title: "TikTok Livestream Views stay 60 mins",
    description: "Livestream views die 60 minuten blijven - perfect voor gemiddelde streams!",
    platform: "TikTok",
    price_per_unit: 0.09, // 45.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 30000,
    unit: "views",
    icon: "Eye",
    gradient: "from-purple-500 to-pink-500",
    category: "TikTok, TikTok Livestream Views stay 60 mins",
    url: "https://buyshazam.com/product/tiktok-livestream-views/"
  },
  {
    id: "spotify-playlist-followers",
    title: "Spotify Playlist Followers",
    description: "Meer volgers voor je Spotify playlists - laat je muziekcollecties door meer mensen gevolgd worden!",
    platform: "Spotify",
    price_per_unit: 0.09, // 45.0 * 2 / 1000
    minimum_order: 1000,
    maximum_order: 1000000,
    unit: "followers",
    icon: "Users",
    gradient: "from-green-500 to-green-600",
    category: "Spotify, Spotify Playlist Followers",
    url: "https://buyshazam.com/product/spotify-playlist-followers"
  },
  {
    id: "instagram-followers-verified",
    title: "Instagram Followers from Verified Accounts",
    description: "Extreem premium followers van geverifieerde accounts - de ultieme status boost!",
    platform: "Instagram",
    price_per_unit: 16.0, // 8000.0 * 2 / 1000
    minimum_order: 1,
    maximum_order: 13,
    unit: "followers",
    icon: "Users",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram Followers from Verified Accounts",
    url: "https://buyshazam.com/product/instagram-followers-from-verified-accounts/"
  },
  {
    id: "instagram-nigeria-followers-2",
    title: "Instagram Nigeria Followers #2",
    description: "Nigerian followers voor je Instagram account - bereik de Nigerian markt!",
    platform: "Instagram",
    price_per_unit: 0.018, // 9.0 * 2 / 1000
    minimum_order: 50,
    maximum_order: 10000,
    unit: "followers",
    icon: "Users",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram Nigeria Followers #2, Nigeria Services",
    url: "https://buyshazam.com/product/instagram-nigeria-followers-2/"
  },
  {
    id: "instagram-nigeria-likes",
    title: "Instagram Nigeria Likes",
    description: "Nigerian likes voor je Instagram posts - authentieke engagement uit Nigeria!",
    platform: "Instagram",
    price_per_unit: 0.058, // 29.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 2000,
    unit: "likes",
    icon: "Heart",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram Nigeria Likes, Nigeria Services",
    url: "https://buyshazam.com/product/instagram-nigeria-likes/"
  },
  {
    id: "tiktok-video-saves",
    title: "TikTok Video Saves",
    description: "Meer saves voor je TikTok videos - laat mensen je content opslaan!",
    platform: "TikTok",
    price_per_unit: 0.0008, // 4.0 * 2 / 1000
    minimum_order: 50,
    maximum_order: 100000,
    unit: "saves",
    icon: "Bookmark",
    gradient: "from-purple-500 to-pink-500",
    category: "TikTok, TikTok Video Saves",
    url: "https://buyshazam.com/product/tiktok-video-saves/"
  },
  {
    id: "instagram-reel-likes",
    title: "Instagram Reel Likes",
    description: "Meer likes voor je Instagram Reels - boost je korte video content!",
    platform: "Instagram",
    price_per_unit: 0.0028, // 1.4 * 2 / 1000
    minimum_order: 50,
    maximum_order: 10000,
    unit: "likes",
    icon: "Heart",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram Reel, Instagram Reel Likes",
    url: "https://buyshazam.com/product/instagram-reel-likes/"
  },
  {
    id: "instagram-live-video-views",
    title: "Instagram Live Video Views",
    description: "Views voor je Instagram live videos - boost je live streams!",
    platform: "Instagram",
    price_per_unit: 0.016, // 8.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 5000,
    unit: "views",
    icon: "Eye",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram Live Video Views",
    url: "https://buyshazam.com/product/instagram-live-video-views/"
  },
  {
    id: "instagram-likes-verified",
    title: "Instagram Likes from Verified Accounts",
    description: "Extreem premium likes van geverifieerde accounts - de ultieme engagement boost!",
    platform: "Instagram",
    price_per_unit: 2.6, // 1300.0 * 2 / 1000
    minimum_order: 3,
    maximum_order: 13,
    unit: "likes",
    icon: "Heart",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram Likes from Verified Accounts",
    url: "https://buyshazam.com/product/instagram-likes-from-verified-accounts/"
  },
  {
    id: "tiktok-comments-influencer",
    title: "TikTok Comments from Influencer Accounts",
    description: "Comments van influencer accounts voor je TikTok videos - premium engagement!",
    platform: "TikTok",
    price_per_unit: 0.166, // 83.0 * 2 / 1000
    minimum_order: 10,
    maximum_order: 20000,
    unit: "comments",
    icon: "MessageCircle",
    gradient: "from-purple-500 to-pink-500",
    category: "TikTok, TikTok Comments from Influencer Accounts",
    url: "https://buyshazam.com/product/tiktok-comments-from-influencer-accounts/"
  },
  {
    id: "tiktok-followers",
    title: "TikTok Followers",
    description: "Meer volgers voor je TikTok account - vergroot je bereik!",
    platform: "TikTok",
    price_per_unit: 0.11, // 55.0 * 2 / 1000
    minimum_order: 50,
    maximum_order: 40000,
    unit: "followers",
    icon: "Users",
    gradient: "from-purple-500 to-pink-500",
    category: "TikTok, TikTok Followers",
    url: "https://buyshazam.com/product/tiktok-followers/"
  },
  {
    id: "youtube-dislikes",
    title: "Youtube Dislikes",
    description: "Dislikes voor YouTube videos (voor speciale doeleinden) - gebruik met voorzichtigheid!",
    platform: "YouTube",
    price_per_unit: 0.03, // 15.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 20000,
    unit: "dislikes",
    icon: "ThumbsUp",
    gradient: "from-red-500 to-red-600",
    category: "Youtube, Youtube Dislikes",
    url: "https://buyshazam.com/product/youtube-dislikes/"
  },
  {
    id: "spotify-followers-server-2",
    title: "Spotify Followers Server 2",
    description: "Alternatieve Spotify followers van server 2 - meer volgers voor je profiel!",
    platform: "Spotify",
    price_per_unit: 0.064, // 32.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 1000000,
    unit: "followers",
    icon: "Users",
    gradient: "from-green-500 to-green-600",
    category: "Spotify, Spotify Followers Server 2",
    url: "https://buyshazam.com/product/spotify-followers-server-2/"
  },
  {
    id: "youtube-views-3",
    title: "Youtube Views #3",
    description: "YouTube views van server 3 - snelle views voor je video's!",
    platform: "YouTube",
    price_per_unit: 0.0062, // 31.0 * 2 / 1000
    minimum_order: 10000,
    maximum_order: 10000000,
    unit: "views",
    icon: "Eye",
    gradient: "from-red-500 to-red-600",
    category: "Youtube, Youtube Views #3",
    url: "https://buyshazam.com/product/youtube-views-3m-speed/"
  },
  {
    id: "tiktok-auto-likes",
    title: "TikTok Auto Likes",
    description: "Automatische likes voor je TikTok videos - consistent engagement voor nieuwe posts!",
    platform: "TikTok",
    price_per_unit: 0.02, // 10.0 * 2 / 1000
    minimum_order: 50,
    maximum_order: 160000,
    unit: "likes",
    icon: "Heart",
    gradient: "from-purple-500 to-pink-500",
    category: "TikTok, TikTok Auto Likes",
    url: "https://buyshazam.com/product/tiktok-auto-likes/"
  },
  {
    id: "tiktok-livestream-shares",
    title: "TikTok Livestream Shares",
    description: "Shares voor je TikTok livestreams - laat je live content viral gaan!",
    platform: "TikTok",
    price_per_unit: 0.002, // 1.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 10000000,
    unit: "shares",
    icon: "Share",
    gradient: "from-purple-500 to-pink-500",
    category: "TikTok, TikTok Livestream Shares",
    url: "https://buyshazam.com/product/tiktok-livestream-shares/"
  },
  {
    id: "instagram-live-video-random-comments",
    title: "Instagram Live Video Random Comments",
    description: "Random comments voor je Instagram live videos - boost interactie tijdens je streams!",
    platform: "Instagram",
    price_per_unit: 0.018, // 9.0 * 2 / 1000
    minimum_order: 50,
    maximum_order: 2000,
    unit: "comments",
    icon: "MessageCircle",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram Live Video Random Comments",
    url: "https://buyshazam.com/product/instagram-live-video-random-comments/"
  },
  {
    id: "instagram-live-video-likes",
    title: "Instagram Live Video Likes",
    description: "Likes voor je Instagram live videos - boost engagement tijdens je streams!",
    platform: "Instagram",
    price_per_unit: 0.002, // 1.0 * 2 / 1000
    minimum_order: 200,
    maximum_order: 10000,
    unit: "likes",
    icon: "Heart",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram Live Video Likes",
    url: "https://buyshazam.com/product/instagram-live-video-likes/"
  },
  {
    id: "instagram-saves",
    title: "Instagram Saves",
    description: "Meer saves voor je Instagram posts - verhoog je engagement rate!",
    platform: "Instagram",
    price_per_unit: 0.006, // 3.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 50000,
    unit: "saves",
    icon: "Bookmark",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram Saves",
    url: "https://buyshazam.com/product/instagram-saves/"
  },
  {
    id: "youtube-live-stream-views-240",
    title: "Youtube Live Stream Views stay 240 mins",
    description: "Live stream views die 240 minuten blijven - perfect voor lange streams!",
    platform: "YouTube",
    price_per_unit: 0.0078, // 3.9 * 2 / 1000
    minimum_order: 100,
    maximum_order: 400000,
    unit: "views",
    icon: "Eye",
    gradient: "from-red-500 to-red-600",
    category: "Youtube, Youtube Live Stream Views stay 240 mins",
    url: "https://buyshazam.com/product/youtube-live-stream-views-stay-240-mins/"
  },
  {
    id: "instagram-reel-random-comments",
    title: "Instagram Reel Random Comments",
    description: "Random comments voor je Instagram Reels - boost interactie op je korte videos!",
    platform: "Instagram",
    price_per_unit: 0.144, // 72.0 * 2 / 1000
    minimum_order: 10,
    maximum_order: 200,
    unit: "comments",
    icon: "MessageCircle",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram Reel, Instagram Reel Random Comments",
    url: "https://buyshazam.com/product/instagram-reel-random-comments/"
  },
  {
    id: "spotify-plays",
    title: "Spotify Plays",
    description: "Meer streams voor je Spotify tracks - laat je muziek door meer mensen gehoord worden!",
    platform: "Spotify",
    price_per_unit: 0.0028, // 14.0 * 2 / 1000
    minimum_order: 500,
    maximum_order: 10000000,
    unit: "plays",
    icon: "Play",
    gradient: "from-green-500 to-green-600",
    category: "Spotify Plays",
    url: "https://buyshazam.com/product/spotify-plays/"
  },
  {
    id: "instagram-random-comments",
    title: "Instagram Random Comments",
    description: "Random comments voor je Instagram posts - boost interactie met gevarieerde reacties!",
    platform: "Instagram",
    price_per_unit: 0.39, // 195.0 * 2 / 1000
    minimum_order: 10,
    maximum_order: 2000,
    unit: "comments",
    icon: "MessageCircle",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram Random Comments",
    url: "https://buyshazam.com/product/instagram-random-comments/"
  },
  {
    id: "threads-reshares",
    title: "Threads Reshares",
    description: "Reshares voor je Threads posts - laat je content door anderen gedeeld worden!",
    platform: "Threads",
    price_per_unit: 0.13, // 65.0 * 2 / 1000
    minimum_order: 10,
    maximum_order: 5000,
    unit: "reshares",
    icon: "Share",
    gradient: "from-gray-500 to-black",
    category: "Instagram Threads, Threads Reshares",
    url: "https://buyshazam.com/product/threads-reshares/"
  },
  {
    id: "tiktok-livestream-views-240",
    title: "TikTok Livestream Views stay 240 mins",
    description: "Livestream views die 240 minuten blijven - perfect voor uitgebreide streams!",
    platform: "TikTok",
    price_per_unit: 0.038, // 19.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 10000,
    unit: "views",
    icon: "Eye",
    gradient: "from-purple-500 to-pink-500",
    category: "TikTok, TikTok Livestream Views stay 240 mins",
    url: "https://buyshazam.com/product/tiktok-livestream-views-stay-240-mins/"
  },
  {
    id: "spotify-germany-plays",
    title: "Spotify Germany Plays",
    description: "Duitse Spotify plays - bereik de Duitse muziekmarkt!",
    platform: "Spotify",
    price_per_unit: 0.006, // 3.0 * 2 / 1000
    minimum_order: 500,
    maximum_order: 100000,
    unit: "plays",
    icon: "Play",
    gradient: "from-green-500 to-green-600",
    category: "Germany Services, Spotify Germany Plays",
    url: "https://buyshazam.com/product/spotify-germany-plays/"
  },
  {
    id: "instagram-reel-views",
    title: "Instagram Reel Views",
    description: "Meer views voor je Instagram Reels - boost je korte video content!",
    platform: "Instagram",
    price_per_unit: 0.0022, // 1.1 * 2 / 1000
    minimum_order: 100,
    maximum_order: 50000,
    unit: "views",
    icon: "Eye",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram Reel, Instagram Reel Views",
    url: "https://buyshazam.com/product/instagram-reel-views/"
  },
  {
    id: "instagram-custom-comments-2",
    title: "Instagram Custom Comments #2",
    description: "Custom comments voor je Instagram posts - personaliseer je engagement!",
    platform: "Instagram",
    price_per_unit: 0.29, // 145.0 * 2 / 1000
    minimum_order: 5,
    maximum_order: 1000,
    unit: "comments",
    icon: "MessageCircle",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram Custom Comments #2",
    url: "https://buyshazam.com/product/instagram-custom-comments-2/"
  },
  {
    id: "youtube-subscribers",
    title: "Youtube Subscribers",
    description: "Meer abonnees voor je YouTube kanaal - groei je community!",
    platform: "YouTube",
    price_per_unit: 0.014, // 7.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 100000,
    unit: "subscribers",
    icon: "Users",
    gradient: "from-red-500 to-red-600",
    category: "Youtube Subscribers",
    url: "https://buyshazam.com/product/youtube-subscribers/"
  },
  {
    id: "spotify-playlist-album-plays",
    title: "Spotify Playlist | Album Plays",
    description: "Plays voor je Spotify playlists en albums - boost je muziekcollecties!",
    platform: "Spotify",
    price_per_unit: 0.005, // 2.5 * 2 / 1000
    minimum_order: 1000,
    maximum_order: 1000000,
    unit: "plays",
    icon: "Play",
    gradient: "from-green-500 to-green-600",
    category: "Spotify Playlist | Album Plays",
    url: "https://buyshazam.com/product/spotify-playlist-album-plays/"
  },
  {
    id: "tiktok-comments",
    title: "TikTok Comments",
    description: "Meer comments voor je TikTok videos - boost de discussie onder je content!",
    platform: "TikTok",
    price_per_unit: 0.0028, // 14.0 * 2 / 1000
    minimum_order: 10,
    maximum_order: 10000,
    unit: "comments",
    icon: "MessageCircle",
    gradient: "from-purple-500 to-pink-500",
    category: "TikTok, TikTok Comments",
    url: "https://buyshazam.com/product/tiktok-comments/"
  },
  {
    id: "instagram-mentions",
    title: "Instagram Mentions",
    description: "Mentions voor je Instagram account - vergroot je zichtbaarheid!",
    platform: "Instagram",
    price_per_unit: 0.12, // 6.0 * 2 / 1000
    minimum_order: 2000,
    maximum_order: 30000,
    unit: "mentions",
    icon: "MessageCircle",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram Mentions",
    url: "https://buyshazam.com/product/instagram-mentions/"
  },
  {
    id: "instagram-reel-saves",
    title: "Instagram Reel Saves",
    description: "Saves voor je Instagram Reels - laat mensen je korte videos opslaan!",
    platform: "Instagram",
    price_per_unit: 0.0012, // 0.6 * 2 / 1000
    minimum_order: 100,
    maximum_order: 50000,
    unit: "saves",
    icon: "Bookmark",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram Reel, Instagram Reel Saves",
    url: "https://buyshazam.com/product/instagram-reel-saves/"
  },
  {
    id: "instagram-nigeria-followers",
    title: "Instagram Nigeria Followers",
    description: "Nigerian followers voor je Instagram account - bereik de Nigerian markt!",
    platform: "Instagram",
    price_per_unit: 0.058, // 29.0 * 2 / 1000
    minimum_order: 200,
    maximum_order: 2000,
    unit: "followers",
    icon: "Users",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram Nigeria Followers, Nigeria Services",
    url: "https://buyshazam.com/product/instagram-nigeria-followers/"
  },
  {
    id: "instagram-automatic-story-views",
    title: "Instagram Automatic Story Views",
    description: "Automatische story views voor 30 dagen - zorg dat je verhalen altijd gezien worden!",
    platform: "Instagram",
    price_per_unit: 0.07, // 35.0 * 2 / 1000
    minimum_order: 500,
    maximum_order: 10000,
    unit: "views",
    icon: "Eye",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram Automatic, Instagram Automatic Story Views",
    url: "https://buyshazam.com/product/instagram-automatic-story-views"
  },
  {
    id: "tiktok-views",
    title: "TikTok Views",
    description: "Meer views voor je TikTok videos - de basis voor virale content!",
    platform: "TikTok",
    price_per_unit: 0.0004, // 2.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 50000000,
    unit: "views",
    icon: "Eye",
    gradient: "from-purple-500 to-pink-500",
    category: "TikTok, TikTok Views",
    url: "https://buyshazam.com/product/tiktok-views/"
  },
  {
    id: "tiktok-video-downloads",
    title: "TikTok Video Downloads",
    description: "Meer downloads voor je TikTok videos - laat mensen je content opslaan!",
    platform: "TikTok",
    price_per_unit: 0.0008, // 4.0 * 2 / 1000
    minimum_order: 50,
    maximum_order: 30000,
    unit: "downloads",
    icon: "Share",
    gradient: "from-purple-500 to-pink-500",
    category: "TikTok, TikTok Video Downloads",
    url: "https://buyshazam.com/product/tiktok-video-downloads/"
  },
  {
    id: "instagram-power-likes",
    title: "Instagram Power Likes",
    description: "Premium power likes voor je Instagram posts - hoogwaardige engagement!",
    platform: "Instagram",
    price_per_unit: 0.007, // 3.5 * 2 / 1000
    minimum_order: 50,
    maximum_order: 5000,
    unit: "likes",
    icon: "Heart",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram Power Likes",
    url: "https://buyshazam.com/product/instagram-power-likes/"
  },
  {
    id: "instagram-tv-views",
    title: "Instagram TV Views",
    description: "Views voor je Instagram TV videos - boost je lange video content!",
    platform: "Instagram",
    price_per_unit: 0.0014, // 7.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 10000000,
    unit: "views",
    icon: "Eye",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram TV Views",
    url: "https://buyshazam.com/product/instagram-tv-views/"
  },
  {
    id: "instagram-comments-influencer",
    title: "Instagram Comments from Influencer Accounts",
    description: "Comments van influencer accounts - premium engagement voor je posts!",
    platform: "Instagram",
    price_per_unit: 0.36, // 180.0 * 2 / 1000
    minimum_order: 10,
    maximum_order: 30,
    unit: "comments",
    icon: "MessageCircle",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram Comments from Influencer Accounts",
    url: "https://buyshazam.com/product/instagram-comments-from-influencer-accounts/"
  },
  {
    id: "instagram-usa-likes",
    title: "Instagram USA Likes",
    description: "Amerikaanse likes voor je Instagram posts - bereik de USA markt!",
    platform: "Instagram",
    price_per_unit: 0.0042, // 2.1 * 2 / 1000
    minimum_order: 20,
    maximum_order: 15000,
    unit: "likes",
    icon: "Heart",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram USA Likes, USA Services",
    url: "https://buyshazam.com/product/instagram-usa-likes/"
  },
  {
    id: "youtube-usa-views",
    title: "Youtube USA Views",
    description: "Amerikaanse YouTube views - bereik de Amerikaanse markt!",
    platform: "YouTube",
    price_per_unit: 0.008, // 4.0 * 2 / 1000
    minimum_order: 1000,
    maximum_order: 100000,
    unit: "views",
    icon: "Eye",
    gradient: "from-red-500 to-red-600",
    category: "USA Services, Youtube USA Views",
    url: "https://buyshazam.com/product/youtube-usa-views/"
  },
  {
    id: "tiktok-pk-battle-points",
    title: "TikTok PK Battle Points",
    description: "PK Battle points voor TikTok - win je live battles!",
    platform: "TikTok",
    price_per_unit: 0.0018, // 0.9 * 2 / 1000
    minimum_order: 200,
    maximum_order: 10000,
    unit: "points",
    icon: "ThumbsUp",
    gradient: "from-purple-500 to-pink-500",
    category: "TikTok, TikTok PK Battle Points",
    url: "https://buyshazam.com/product/tiktok-pk-battle-points/"
  },
  {
    id: "instagram-comment-reply",
    title: "Instagram Comment Reply",
    description: "Replies op comments van je Instagram posts - boost interactie verder!",
    platform: "Instagram",
    price_per_unit: 0.79, // 395.0 * 2 / 1000
    minimum_order: 5,
    maximum_order: 1000,
    unit: "replies",
    icon: "MessageCircle",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram Comment Reply",
    url: "https://buyshazam.com/product/instagram-comment-reply/"
  },
  {
    id: "tiktok-livestream-views-180",
    title: "TikTok Livestream Views stay 180 mins",
    description: "Livestream views die 180 minuten blijven - perfect voor lange streams!",
    platform: "TikTok",
    price_per_unit: 0.0276, // 13.8 * 2 / 1000
    minimum_order: 100,
    maximum_order: 10000,
    unit: "views",
    icon: "Eye",
    gradient: "from-purple-500 to-pink-500",
    category: "TikTok, TikTok Livestream Views stay 180 mins",
    url: "https://buyshazam.com/product/tiktok-livestream-views-stay-180-mins/"
  },
  {
    id: "instagram-automatic-reel-likes",
    title: "Instagram Automatic Reel Likes",
    description: "Automatische likes voor je Instagram Reels - boost je korte content automatisch!",
    platform: "Instagram",
    price_per_unit: 0.004, // 2.0 * 2 / 1000
    minimum_order: 50,
    maximum_order: 10000,
    unit: "likes",
    icon: "Heart",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram Automatic, Instagram Automatic Reel Likes",
    url: "https://buyshazam.com/product/instagram-auto-reel-likes/"
  },
  {
    id: "youtube-views-2",
    title: "Youtube Views #2",
    description: "YouTube views van server 2 - alternatieve views voor je video's!",
    platform: "YouTube",
    price_per_unit: 0.0054, // 27.0 * 2 / 1000
    minimum_order: 1000,
    maximum_order: 1000000,
    unit: "views",
    icon: "Eye",
    gradient: "from-red-500 to-red-600",
    category: "Youtube, Youtube Views #2",
    url: "https://buyshazam.com/product/youtube-views-2/"
  },
  {
    id: "youtube-watchtime",
    title: "Youtube Watchtime",
    description: "Meer watchtime voor je YouTube videos - boost je video's in het algoritme!",
    platform: "YouTube",
    price_per_unit: 0.07, // 35.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 4000,
    unit: "uren",
    icon: "Play",
    gradient: "from-red-500 to-red-600",
    category: "Youtube, Youtube Watchtime",
    url: "https://buyshazam.com/product/youtube-watchtime/"
  },
  {
    id: "youtube-community-post-likes",
    title: "Youtube Community Post Likes",
    description: "Likes voor je YouTube community posts - boost engagement met je community!",
    platform: "YouTube",
    price_per_unit: 0.0028, // 1.4 * 2 / 1000
    minimum_order: 20,
    maximum_order: 100000,
    unit: "likes",
    icon: "ThumbsUp",
    gradient: "from-red-500 to-red-600",
    category: "Youtube, Youtube Community Post Likes",
    url: "https://buyshazam.com/product/youtube-community-post-likes/"
  },
  {
    id: "instagram-custom-comments",
    title: "Instagram Custom Comments",
    description: "Custom comments voor je Instagram posts - personaliseer je engagement!",
    platform: "Instagram",
    price_per_unit: 0.06, // 3.0 * 2 / 1000
    minimum_order: 20,
    maximum_order: 100,
    unit: "comments",
    icon: "MessageCircle",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram Custom Comments",
    url: "https://buyshazam.com/product/instagram-custom-comments/"
  },
  {
    id: "youtube-likes",
    title: "Youtube Likes",
    description: "Meer likes voor je YouTube videos - boost je video ranking!",
    platform: "YouTube",
    price_per_unit: 0.022, // 11.0 * 2 / 1000
    minimum_order: 20,
    maximum_order: 100000,
    unit: "likes",
    icon: "ThumbsUp",
    gradient: "from-red-500 to-red-600",
    category: "Youtube, Youtube Likes",
    url: "https://buyshazam.com/product/youtube-likes/"
  },
  {
    id: "linkedin-connections",
    title: "Linkedin Connections",
    description: "Professionele LinkedIn connecties - vergroot je zakelijke netwerk!",
    platform: "LinkedIn",
    price_per_unit: 0.18, // 90.0 * 2 / 1000
    minimum_order: 20,
    maximum_order: 2000,
    unit: "connections",
    icon: "Users",
    gradient: "from-blue-600 to-blue-700",
    category: "Linkedin, Linkedin Connections",
    url: "https://buyshazam.com/product/linkedin-connections/"
  },
  {
    id: "instagram-followers-2",
    title: "Instagram Followers #2",
    description: "Instagram followers van server 2 - alternatieve followers voor je account!",
    platform: "Instagram",
    price_per_unit: 0.126, // 63.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 350000,
    unit: "followers",
    icon: "Users",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram Followers #2",
    url: "https://buyshazam.com/product/instagram-followers-2/"
  },
  {
    id: "tiktok-livestream-comments-random",
    title: "TikTok Livestream Comments Random",
    description: "Random comments voor je TikTok livestreams - boost interactie tijdens je streams!",
    platform: "TikTok",
    price_per_unit: 0.01, // 5.0 * 2 / 1000
    minimum_order: 10,
    maximum_order: 10000,
    unit: "comments",
    icon: "MessageCircle",
    gradient: "from-purple-500 to-pink-500",
    category: "TikTok, TikTok Livestream Comments Random",
    url: "https://buyshazam.com/product/tiktok-live-stream-comments-random/"
  },
  {
    id: "instagram-automatic-power-likes",
    title: "Instagram Automatic Power Likes",
    description: "Automatische power likes voor nieuwe posts - premium automatische engagement!",
    platform: "Instagram",
    price_per_unit: 0.0058, // 2.9 * 2 / 1000
    minimum_order: 50,
    maximum_order: 10000,
    unit: "likes",
    icon: "Heart",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram Automatic, Instagram Automatic Power Likes",
    url: "https://buyshazam.com/product/instagram-automatic-power-likes"
  },
  {
    id: "instagram-automatic-views",
    title: "Instagram Automatic Views",
    description: "Automatische views voor nieuwe posts - zorg dat je content direct gezien wordt!",
    platform: "Instagram",
    price_per_unit: 0.006, // 3.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 1000000,
    unit: "views",
    icon: "Eye",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram Automatic, Instagram Automatic Views",
    url: "https://buyshazam.com/product/instagram-automatic-views"
  },
  {
    id: "instagram-comment-likes",
    title: "Instagram Comment Likes",
    description: "Likes voor je Instagram comments - boost je comment engagement!",
    platform: "Instagram",
    price_per_unit: 0.009, // 4.5 * 2 / 1000
    minimum_order: 20,
    maximum_order: 15000,
    unit: "likes",
    icon: "Heart",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram Comment Likes",
    url: "https://buyshazam.com/product/instagram-comment-likes/"
  },
  {
    id: "instagram-followers",
    title: "Instagram Followers",
    description: "Meer volgers voor je Instagram account - bouw je community op!",
    platform: "Instagram",
    price_per_unit: 0.0046, // 23.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 150000,
    unit: "followers",
    icon: "Users",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram Followers",
    url: "https://buyshazam.com/product/instagram-followers/"
  },
  {
    id: "instagram-comments-verified",
    title: "Instagram Comments from Verified Accounts",
    description: "Extreem premium comments van geverifieerde accounts - de ultieme engagement boost!",
    platform: "Instagram",
    price_per_unit: 4.0, // 2000.0 * 2 / 1000
    minimum_order: 1,
    maximum_order: 13,
    unit: "comments",
    icon: "MessageCircle",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram, Instagram Comments from Verified Accounts",
    url: "https://buyshazam.com/product/instagram-comments-from-verified-accounts/"
  },
  {
    id: "tiktok-likes",
    title: "TikTok Likes",
    description: "Meer likes voor je TikTok videos - essentieel voor goede engagement!",
    platform: "TikTok",
    price_per_unit: 0.001, // 0.5 * 2 / 1000
    minimum_order: 100,
    maximum_order: 15000,
    unit: "likes",
    icon: "Heart",
    gradient: "from-purple-500 to-pink-500",
    category: "TikTok, TikTok Likes",
    url: "https://buyshazam.com/product/tiktok-likes/"
  },
  {
    id: "spotify-saves",
    title: "Spotify Saves",
    description: "Meer saves voor je Spotify tracks - laat mensen je muziek opslaan!",
    platform: "Spotify",
    price_per_unit: 0.02, // 10.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 1000000,
    unit: "saves",
    icon: "Bookmark",
    gradient: "from-green-500 to-green-600",
    category: "Spotify Saves",
    url: "https://buyshazam.com/product/spotify-saves/"
  },
  {
    id: "youtube-custom-comments",
    title: "Youtube Custom Comments",
    description: "Custom comments voor je YouTube videos - personaliseer je engagement!",
    platform: "YouTube",
    price_per_unit: 0.01, // 5.0 * 2 / 1000
    minimum_order: 10,
    maximum_order: 5000,
    unit: "comments",
    icon: "MessageCircle",
    gradient: "from-red-500 to-red-600",
    category: "Youtube Custom Comments",
    url: "https://buyshazam.com/product/youtube-custom-comments/"
  },
  {
    id: "spotify-monthly-listeners",
    title: "Spotify Monthly Listeners",
    description: "Meer monthly listeners voor je Spotify profiel - boost je bereik!",
    platform: "Spotify",
    price_per_unit: 0.398, // 199.0 * 2 / 1000
    minimum_order: 1000,
    maximum_order: 100000,
    unit: "listeners",
    icon: "Users",
    gradient: "from-green-500 to-green-600",
    category: "Spotify Monthly Listeners",
    url: "https://buyshazam.com/product/spotify-monthly-listeners/"
  },
  {
    id: "youtube-live-stream-views-90",
    title: "Youtube Live Stream Views stay 90 mins",
    description: "Live stream views die 90 minuten blijven - perfect voor korte streams!",
    platform: "YouTube",
    price_per_unit: 0.0034, // 1.7 * 2 / 1000
    minimum_order: 100,
    maximum_order: 400000,
    unit: "views",
    icon: "Eye",
    gradient: "from-red-500 to-red-600",
    category: "Youtube, Youtube Live Stream Views stay 90 mins",
    url: "https://buyshazam.com/product/youtube-live-stream-views-stay-90-mins/"
  },
  {
    id: "spotify-germany-playlist-album-plays",
    title: "Spotify Germany Playlist Album Plays",
    description: "Duitse playlist en album plays - bereik de Duitse muziekmarkt!",
    platform: "Spotify",
    price_per_unit: 0.01, // 5.0 * 2 / 1000
    minimum_order: 1000,
    maximum_order: 1000000,
    unit: "plays",
    icon: "Play",
    gradient: "from-green-500 to-green-600",
    category: "Germany Services, Spotify Germany Playlist Album Plays",
    url: "https://buyshazam.com/product/spotify-germany-playlist-album-plays/"
  },
  {
    id: "youtube-adwords-views",
    title: "Youtube AdWords Views",
    description: "AdWords views voor je YouTube videos - boost je advertising performance!",
    platform: "YouTube",
    price_per_unit: 0.006, // 3.0 * 2 / 1000
    minimum_order: 10000,
    maximum_order: 10000000,
    unit: "views",
    icon: "Eye",
    gradient: "from-red-500 to-red-600",
    category: "Youtube, Youtube AdWords Views",
    url: "https://buyshazam.com/product/youtube-adwords-views/"
  }
];

// Utility functions
export const getServicesByPlatform = (platform: string): Service[] => {
  const mainServices = services.filter(service => service.platform === platform);
  const additionalServices = otherServices.filter(service => service.platform === platform);
  return [...mainServices, ...additionalServices];
};

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

// Platform data for navigation
export const platforms = [
  {
    name: "Instagram",
    path: "/instagram",
    icon: "Instagram",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    name: "YouTube",
    path: "/youtube",
    icon: "Youtube",
    gradient: "from-red-500 to-red-600"
  },
  {
    name: "TikTok",
    path: "/tiktok",
    icon: "Music",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "Spotify",
    path: "/spotify",
    icon: "Music",
    gradient: "from-green-500 to-green-600"
  },
  {
    name: "LinkedIn",
    path: "/linkedin",
    icon: "Linkedin",
    gradient: "from-blue-600 to-blue-700"
  },
  {
    name: "Threads",
    path: "/threads",
    icon: "MessageCircle",
    gradient: "from-gray-500 to-black"
  }
];

// New other services from the additional JSON data
export const otherServices: Service[] = [
  {
    id: "telegram-auto-reaction-positive",
    title: "Telegram Auto Reaction Positive 👍 ❤️ 🔥 🎉 😁",
    description: "Automatische positieve reacties voor je Telegram posts - boost engagement!",
    platform: "Telegram",
    price_per_unit: 0.014, // 7.0 * 2 / 1000
    minimum_order: 50,
    maximum_order: 2000000,
    unit: "reactions",
    icon: "Heart",
    gradient: "from-blue-400 to-blue-600",
    category: "Telegram, Telegram Auto Reaction Positive 👍 ❤️ 🔥 🎉 😁, Telegram Automation Services",
    url: "https://buyshazam.com/product/telegram-auto-reaction-positive/"
  },
  {
    id: "facebook-post-like-emoticons-love",
    title: "Facebook Post Like Emoticons LOVE",
    description: "Love emoticon likes voor je Facebook posts - toon liefde voor je content!",
    platform: "Facebook",
    price_per_unit: 0.0052, // 2.6 * 2 / 1000
    minimum_order: 100,
    maximum_order: 2000,
    unit: "likes",
    icon: "Heart",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook, Facebook Post Like Emoticons LOVE",
    url: "https://buyshazam.com/product/facebook-post-like-emoticons-love/"
  },
  {
    id: "imdb-reviews",
    title: "IMDb Reviews",
    description: "Professionele reviews voor je IMDb pagina - versterk je filmcredibiliteit!",
    platform: "IMDb",
    price_per_unit: 1.0, // 500.0 * 2 / 1000
    minimum_order: 1,
    maximum_order: 500,
    unit: "reviews",
    icon: "Star",
    gradient: "from-yellow-500 to-yellow-600",
    category: "IMDb, IMDb Reviews",
    url: "https://buyshazam.com/product/imdb-reviews/"
  },
  {
    id: "telegram-public-group-members",
    title: "Telegram Public Group Members",
    description: "Leden voor je publieke Telegram groep - bouw je community op!",
    platform: "Telegram",
    price_per_unit: 0.0038, // 1.9 * 2 / 1000
    minimum_order: 500,
    maximum_order: 30000,
    unit: "members",
    icon: "Users",
    gradient: "from-blue-400 to-blue-600",
    category: "Telegram, Telegram Public Group Members",
    url: "https://buyshazam.com/product/telegram-public-group-members/"
  },
  {
    id: "facebook-korea-page-likes",
    title: "Facebook Korea Page Likes",
    description: "Koreaanse page likes voor je Facebook pagina - bereik de Koreaanse markt!",
    platform: "Facebook",
    price_per_unit: 0.046, // 23.0 * 2 / 1000
    minimum_order: 10,
    maximum_order: 1000,
    unit: "likes",
    icon: "ThumbsUp",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook Korea Page Likes",
    url: "https://buyshazam.com/product/facebook-korea-page-likes/"
  },
  {
    id: "apple-music-plays",
    title: "Apple Music Plays",
    description: "Meer streams voor je Apple Music tracks - boost je muziek op Apple!",
    platform: "Apple Music",
    price_per_unit: 0.018, // 9.0 * 2 / 1000
    minimum_order: 500,
    maximum_order: 100000,
    unit: "plays",
    icon: "Play",
    gradient: "from-gray-600 to-gray-800",
    category: "Apple Music, Apple Music Plays",
    url: "https://buyshazam.com/product/apple-music-plays/"
  },
  {
    id: "twitter-retweets",
    title: "X - Twitter Retweets",
    description: "Meer retweets voor je X (Twitter) posts - vergroot je bereik!",
    platform: "Twitter",
    price_per_unit: 0.0042, // 2.1 * 2 / 1000
    minimum_order: 20,
    maximum_order: 500000,
    unit: "retweets",
    icon: "Share",
    gradient: "from-gray-700 to-black",
    category: "Twitter, Twitter Retweets",
    url: "https://buyshazam.com/product/twitter-retweets/"
  },
  {
    id: "facebook-live-stream-views-120",
    title: "Facebook Live Stream Views stay 120 Minutes",
    description: "Live stream views die 120 minuten blijven - perfect voor uitgebreide Facebook streams!",
    platform: "Facebook",
    price_per_unit: 0.0112, // 56.0 * 2 / 1000
    minimum_order: 50,
    maximum_order: 20000,
    unit: "views",
    icon: "Eye",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook Live Stream Views stay 120 Minutes",
    url: "https://buyshazam.com/product/facebook-live-stream-views-stay-120-minutes/"
  },
  {
    id: "telegram-post-reactions-fire-views",
    title: "Telegram Post Reactions 🔥 + Views",
    description: "Fire reactions + views voor je Telegram posts - maak je content hot!",
    platform: "Telegram",
    price_per_unit: 0.0008, // 0.4 * 2 / 1000
    minimum_order: 50,
    maximum_order: 1000000,
    unit: "reactions",
    icon: "Flame",
    gradient: "from-blue-400 to-blue-600",
    category: "Telegram, Telegram Post Reactions 🔥 + Views, Telegram Reaction",
    url: "https://buyshazam.com/product/telegram-post-reactions-fire-views/"
  },
  {
    id: "imdb-views",
    title: "IMDb Views",
    description: "Meer views voor je IMDb pagina - versterk je filmzichtbaarheid!",
    platform: "IMDb",
    price_per_unit: 0.012, // 6.0 * 2 / 1000
    minimum_order: 500,
    maximum_order: 10000000,
    unit: "views",
    icon: "Eye",
    gradient: "from-yellow-500 to-yellow-600",
    category: "IMDb Views",
    url: "https://buyshazam.com/product/imdb-views/"
  },
  {
    id: "rottentomatoes-votes",
    title: "Rottentomatoes Votes",
    description: "Votes voor je Rotten Tomatoes pagina - boost je film ratings!",
    platform: "Rotten Tomatoes",
    price_per_unit: 0.1, // 50.0 * 2 / 1000
    minimum_order: 50,
    maximum_order: 5000,
    unit: "votes",
    icon: "ThumbsUp",
    gradient: "from-red-600 to-red-800",
    category: "Rottentomatoes Votes",
    url: "https://buyshazam.com/product/rottentomatoes-votes/"
  },
  {
    id: "twitter-followers",
    title: "X - Twitter Followers",
    description: "Meer volgers voor je X (Twitter) account - bouw je sociale netwerk op!",
    platform: "Twitter",
    price_per_unit: 0.032, // 16.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 4000,
    unit: "followers",
    icon: "Users",
    gradient: "from-gray-700 to-black",
    category: "Twitter, Twitter Followers",
    url: "https://buyshazam.com/product/twitter-followers/"
  },
  {
    id: "facebook-comments",
    title: "Facebook Comments",
    description: "Meer comments voor je Facebook posts - boost de discussie!",
    platform: "Facebook",
    price_per_unit: 0.13, // 65.0 * 2 / 1000
    minimum_order: 10,
    maximum_order: 100,
    unit: "comments",
    icon: "MessageCircle",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook, Facebook Comments",
    url: "https://buyshazam.com/product/facebook-comments/"
  },
  {
    id: "reddit-upvotes",
    title: "Reddit Upvotes",
    description: "Meer upvotes voor je Reddit posts - boost je karma en zichtbaarheid!",
    platform: "Reddit",
    price_per_unit: 0.086, // 43.0 * 2 / 1000
    minimum_order: 20,
    maximum_order: 2000,
    unit: "upvotes",
    icon: "ArrowUp",
    gradient: "from-orange-500 to-orange-600",
    category: "Reddit, Reddit Upvotes",
    url: "https://buyshazam.com/product/reddit-upvotes/"
  },
  {
    id: "twitter-likes",
    title: "Twitter Likes",
    description: "Meer likes voor je X (Twitter) posts - boost je engagement!",
    platform: "Twitter",
    price_per_unit: 0.004, // 2.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 10000,
    unit: "likes",
    icon: "Heart",
    gradient: "from-gray-700 to-black",
    category: "Twitter, Twitter Likes",
    url: "https://buyshazam.com/product/twitter-likes/"
  },
  {
    id: "facebook-reels-likes",
    title: "Facebook Reels Likes",
    description: "Meer likes voor je Facebook Reels - boost je korte video content!",
    platform: "Facebook",
    price_per_unit: 0.0018, // 0.9 * 2 / 1000
    minimum_order: 100,
    maximum_order: 10000,
    unit: "likes",
    icon: "Heart",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook, Facebook Reels Likes",
    url: "https://buyshazam.com/product/facebook-reels-likes/"
  },
  {
    id: "facebook-live-stream-views-30",
    title: "Facebook Live Stream Views stay 30 Minutes",
    description: "Live stream views die 30 minuten blijven - perfect voor korte Facebook streams!",
    platform: "Facebook",
    price_per_unit: 0.002, // 1.0 * 2 / 1000
    minimum_order: 50,
    maximum_order: 20000,
    unit: "views",
    icon: "Eye",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook Live Stream Views stay 30 Minutes",
    url: "https://buyshazam.com/product/facebook-live-stream-views/"
  },
  {
    id: "soundclick-plays",
    title: "SoundClick Plays",
    description: "Meer plays voor je SoundClick tracks - boost je muziek!",
    platform: "SoundClick",
    price_per_unit: 0.008, // 4.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 1000000,
    unit: "plays",
    icon: "Play",
    gradient: "from-purple-500 to-purple-600",
    category: "SoundClick, SoundClick Plays",
    url: "https://buyshazam.com/product/soundclick-plays/"
  },
  {
    id: "telegram-auto-reaction-negative",
    title: "Telegram Auto Reaction Negative 👎 😱 💩 😢 🤮",
    description: "Automatische negatieve reacties voor je Telegram posts (voor speciale doeleinden)!",
    platform: "Telegram",
    price_per_unit: 0.014, // 7.0 * 2 / 1000
    minimum_order: 50,
    maximum_order: 2000000,
    unit: "reactions",
    icon: "ThumbsDown",
    gradient: "from-blue-400 to-blue-600",
    category: "Telegram, Telegram Auto Reaction Negative 👎 😱 💩 😢 🤮, Telegram Automation Services",
    url: "https://buyshazam.com/product/telegram-auto-reaction-negative/"
  },
  {
    id: "facebook-usa-post-likes",
    title: "Facebook USA Post Likes",
    description: "Amerikaanse post likes voor je Facebook posts - bereik de USA markt!",
    platform: "Facebook",
    price_per_unit: 0.006, // 3.0 * 2 / 1000
    minimum_order: 10,
    maximum_order: 1000,
    unit: "likes",
    icon: "ThumbsUp",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook USA Post Likes, USA Services",
    url: "https://buyshazam.com/product/facebook-usa-post-likes/"
  },
  {
    id: "facebook-story-views",
    title: "Facebook Story Views",
    description: "Meer views voor je Facebook Stories - zorg dat je verhalen gezien worden!",
    platform: "Facebook",
    price_per_unit: 0.019, // 95.0 * 2 / 1000
    minimum_order: 20,
    maximum_order: 1000,
    unit: "views",
    icon: "Eye",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook, Facebook Story Views",
    url: "https://buyshazam.com/product/facebook-story-views/"
  },
  {
    id: "facebook-nigeria-random-comments",
    title: "Facebook Nigeria Random Comments",
    description: "Nigerian random comments voor je Facebook posts!",
    platform: "Facebook",
    price_per_unit: 0.1, // 50.0 * 2 / 1000
    minimum_order: 20,
    maximum_order: 10000,
    unit: "comments",
    icon: "MessageCircle",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook Nigeria Random Comments",
    url: "https://buyshazam.com/product/facebook-nigeria-random-comments/"
  },
  {
    id: "telegram-premium-3-months",
    title: "Telegram Premium 3 Months",
    description: "3 maanden Telegram Premium - krijg alle premium features!",
    platform: "Telegram",
    price_per_unit: 37.0, // 18.5 * 2
    minimum_order: 1,
    maximum_order: 1,
    unit: "subscription",
    icon: "Crown",
    gradient: "from-blue-400 to-blue-600",
    category: "Telegram, Telegram Premium 3 Months",
    url: "https://buyshazam.com/product/telegram-premium-3-months/"
  },
  {
    id: "imdb-votes-review-helpful",
    title: "IMDb Votes Review Helpful",
    description: "Helpful votes voor je IMDb reviews - boost je review credibiliteit!",
    platform: "IMDb",
    price_per_unit: 0.08, // 40.0 * 2 / 1000
    minimum_order: 10,
    maximum_order: 10000,
    unit: "votes",
    icon: "ThumbsUp",
    gradient: "from-yellow-500 to-yellow-600",
    category: "IMDb Votes Review Helpful",
    url: "https://buyshazam.com/product/imdb-votes-review-helpful/"
  },
  {
    id: "facebook-korea-random-comments",
    title: "Facebook Korea Random Comments",
    description: "Koreaanse random comments voor je Facebook posts!",
    platform: "Facebook",
    price_per_unit: 0.074, // 37.0 * 2 / 1000
    minimum_order: 10,
    maximum_order: 150,
    unit: "comments",
    icon: "MessageCircle",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook Korea Random Comments",
    url: "https://buyshazam.com/product/facebook-korea-random-comments/"
  },
  {
    id: "facebook-page-likes-2",
    title: "Facebook Page Likes #2",
    description: "Page likes van server 2 voor je Facebook pagina!",
    platform: "Facebook",
    price_per_unit: 0.0058, // 2.9 * 2 / 1000
    minimum_order: 100,
    maximum_order: 200000,
    unit: "likes",
    icon: "ThumbsUp",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook, Facebook Page Likes #2",
    url: "https://buyshazam.com/product/facebook-page-likes-2/"
  },
  {
    id: "facebook-custom-comments",
    title: "Facebook Custom Comments",
    description: "Custom comments voor je Facebook posts - personaliseer je engagement!",
    platform: "Facebook",
    price_per_unit: 0.05, // 25.0 * 2 / 1000
    minimum_order: 10,
    maximum_order: 1000,
    unit: "comments",
    icon: "MessageCircle",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook, Facebook Custom Comments",
    url: "https://buyshazam.com/product/facebook-custom-comments/"
  },
  {
    id: "imdb-votes",
    title: "IMDb Votes",
    description: "Meer votes voor je IMDb pagina - boost je film ratings!",
    platform: "IMDb",
    price_per_unit: 0.44, // 220.0 * 2 / 1000
    minimum_order: 20,
    maximum_order: 10000,
    unit: "votes",
    icon: "ThumbsUp",
    gradient: "from-yellow-500 to-yellow-600",
    category: "IMDb, IMDb Votes",
    url: "https://buyshazam.com/product/imdb-votes/"
  },
  {
    id: "facebook-post-like-emoticons-angry",
    title: "Facebook Post Like Emoticons ANGRY",
    description: "Angry emoticon likes voor je Facebook posts!",
    platform: "Facebook",
    price_per_unit: 0.0052, // 2.6 * 2 / 1000
    minimum_order: 100,
    maximum_order: 2000,
    unit: "likes",
    icon: "Angry",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook, Facebook Post Like Emoticons ANGRY",
    url: "https://buyshazam.com/product/facebook-post-like-emoticons-angry/"
  },
  {
    id: "facebook-video-views",
    title: "Facebook Video Views",
    description: "Meer views voor je Facebook videos - boost je video content!",
    platform: "Facebook",
    price_per_unit: 0.0006, // 3.0 * 2 / 1000
    minimum_order: 500,
    maximum_order: 1000000,
    unit: "views",
    icon: "Eye",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook, Facebook Video Views",
    url: "https://buyshazam.com/product/facebook-video-views/"
  },
  {
    id: "telegram-premium-12-months",
    title: "Telegram Premium 12 Months",
    description: "12 maanden Telegram Premium - het complete premium pakket!",
    platform: "Telegram",
    price_per_unit: 78.0, // 39.0 * 2
    minimum_order: 1,
    maximum_order: 1,
    unit: "subscription",
    icon: "Crown",
    gradient: "from-blue-400 to-blue-600",
    category: "Telegram, Telegram Premium 12 Months",
    url: "https://buyshazam.com/product/telegram-premium-12-months/"
  },
  {
    id: "telegram-post-reactions-thumbdown-views",
    title: "Telegram Post Reactions 👎 + Views",
    description: "Thumbs down reactions + views voor je Telegram posts!",
    platform: "Telegram",
    price_per_unit: 0.0008, // 0.4 * 2 / 1000
    minimum_order: 50,
    maximum_order: 1000000,
    unit: "reactions",
    icon: "ThumbsDown",
    gradient: "from-blue-400 to-blue-600",
    category: "Telegram, Telegram Post Reactions 👎 + Views, Telegram Reaction",
    url: "https://buyshazam.com/product/telegram-post-reactions-thubdown-views/"
  },
  {
    id: "telegram-auto-views-30-days",
    title: "Telegram Auto Views 30 days Subscription",
    description: "30 dagen automatische views voor je Telegram posts!",
    platform: "Telegram",
    price_per_unit: 0.024, // 12.0 * 2 / 1000
    minimum_order: 500,
    maximum_order: 2000,
    unit: "views",
    icon: "Eye",
    gradient: "from-blue-400 to-blue-600",
    category: "Telegram, Telegram Auto Views 30 days Subscription, Telegram Automation Services",
    url: "https://buyshazam.com/product/telegram-auto-views-30-days-subscription/"
  },
  {
    id: "facebook-post-like",
    title: "Facebook Post Like",
    description: "Meer likes voor je Facebook posts - boost je engagement!",
    platform: "Facebook",
    price_per_unit: 0.0024, // 1.2 * 2 / 1000
    minimum_order: 100,
    maximum_order: 100000,
    unit: "likes",
    icon: "ThumbsUp",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook, Facebook Post Like",
    url: "https://buyshazam.com/product/facebook-post-like/"
  },
  {
    id: "facebook-page-nigeria-likes",
    title: "Facebook Page Nigeria Likes",
    description: "Nigerian page likes voor je Facebook pagina!",
    platform: "Facebook",
    price_per_unit: 0.106, // 53.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 2000,
    unit: "likes",
    icon: "ThumbsUp",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook, Facebook Page Nigeria Likes",
    url: "https://buyshazam.com/product/facebook-page-nigeria-likes/"
  },
  {
    id: "facebook-korea-post-likes",
    title: "Facebook Korea Post Likes",
    description: "Koreaanse post likes voor je Facebook posts!",
    platform: "Facebook",
    price_per_unit: 0.052, // 26.0 * 2 / 1000
    minimum_order: 10,
    maximum_order: 150,
    unit: "likes",
    icon: "ThumbsUp",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook Korea Post Likes",
    url: "https://buyshazam.com/product/facebook-korea-post-likes/"
  },
  {
    id: "facebook-post-like-emoticons-haha",
    title: "Facebook Post Like Emoticons HAHA",
    description: "Haha emoticon likes voor je Facebook posts!",
    platform: "Facebook",
    price_per_unit: 0.0052, // 2.6 * 2 / 1000
    minimum_order: 100,
    maximum_order: 2000,
    unit: "likes",
    icon: "Laugh",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook, Facebook Post Like Emoticons HAHA",
    url: "https://buyshazam.com/product/facebook-post-like-emoticons-haha/"
  },
  {
    id: "facebook-reels-views",
    title: "Facebook Reels Views",
    description: "Meer views voor je Facebook Reels - boost je korte video content!",
    platform: "Facebook",
    price_per_unit: 0.00498, // 2.49 * 2 / 1000
    minimum_order: 100,
    maximum_order: 1000000,
    unit: "views",
    icon: "Eye",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook, Facebook Reels Views",
    url: "https://buyshazam.com/product/facebook-reels-views/"
  },
  {
    id: "facebook-post-like-emoticons-wow",
    title: "Facebook Post Like Emoticons WOW",
    description: "Wow emoticon likes voor je Facebook posts!",
    platform: "Facebook",
    price_per_unit: 0.0052, // 2.6 * 2 / 1000
    minimum_order: 100,
    maximum_order: 2000,
    unit: "likes",
    icon: "Zap",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook, Facebook Post Like Emoticons WOW",
    url: "https://buyshazam.com/product/facebook-post-like-emoticons-wow/"
  },
  {
    id: "rottentomatoes-reviews",
    title: "Rottentomatoes Reviews",
    description: "Professionele reviews voor je Rotten Tomatoes pagina!",
    platform: "Rotten Tomatoes",
    price_per_unit: 1.0, // 500.0 * 2 / 1000
    minimum_order: 1,
    maximum_order: 500,
    unit: "reviews",
    icon: "Star",
    gradient: "from-red-600 to-red-800",
    category: "Rottentomatoes Reviews",
    url: "https://buyshazam.com/product/rottentomatoes-reviews/"
  },
  {
    id: "facebook-post-like-emoticons-sad",
    title: "Facebook Post Like Emoticons SAD",
    description: "Sad emoticon likes voor je Facebook posts!",
    platform: "Facebook",
    price_per_unit: 0.0052, // 2.6 * 2 / 1000
    minimum_order: 100,
    maximum_order: 2000,
    unit: "likes",
    icon: "Frown",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook, Facebook Post Like Emoticons SAD",
    url: "https://buyshazam.com/product/facebook-post-like-emoticons-sad/"
  },
  {
    id: "google-plays-music-plays",
    title: "Google Plays Music Plays",
    description: "Meer plays voor je Google Play Music tracks!",
    platform: "Google Play",
    price_per_unit: 0.05, // 25.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 500000,
    unit: "plays",
    icon: "Play",
    gradient: "from-green-500 to-green-600",
    category: "Google Plays, Google Plays Music Plays",
    url: "https://buyshazam.com/product/google-plays-music-plays/"
  },
  {
    id: "vimeo-views",
    title: "Vimeo Views",
    description: "Meer views voor je Vimeo videos - boost je professionele content!",
    platform: "Vimeo",
    price_per_unit: 0.003, // 1.5 * 2 / 1000
    minimum_order: 20,
    maximum_order: 1000000,
    unit: "views",
    icon: "Eye",
    gradient: "from-blue-400 to-blue-600",
    category: "Vimeo, Vimeo Views",
    url: "https://buyshazam.com/product/vimeo-views/"
  },
  {
    id: "facebook-post-like-emoticons-care",
    title: "Facebook Post Like Emoticons CARE",
    description: "Care emoticon likes voor je Facebook posts!",
    platform: "Facebook",
    price_per_unit: 0.0052, // 2.6 * 2 / 1000
    minimum_order: 100,
    maximum_order: 2000,
    unit: "likes",
    icon: "Heart",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook, Facebook Post Like Emoticons CARE",
    url: "https://buyshazam.com/product/facebook-post-like-emoticons-care/"
  },
  {
    id: "facebook-photo-likes",
    title: "Facebook Photo Likes",
    description: "Meer likes voor je Facebook foto's - boost je visuele content!",
    platform: "Facebook",
    price_per_unit: 0.0018, // 0.9 * 2 / 1000
    minimum_order: 50,
    maximum_order: 3000,
    unit: "likes",
    icon: "ThumbsUp",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook, Facebook Photo Likes",
    url: "https://buyshazam.com/product/facebook-photo-likes/"
  },
  {
    id: "facebook-page-likes-verified",
    title: "Facebook Page Likes from Verified Badge Accounts",
    description: "Premium page likes van geverifieerde accounts!",
    platform: "Facebook",
    price_per_unit: 400.0, // 200.0 * 2
    minimum_order: 1,
    maximum_order: 1,
    unit: "likes",
    icon: "Shield",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook, Facebook Page Likes from Verified Badge Accounts",
    url: "https://buyshazam.com/product/facebook-page-likes-from-verified-badge-accounts/"
  },
  {
    id: "twitch-clip-views",
    title: "Twitch Clip Views",
    description: "Meer views voor je Twitch clips - boost je gaming highlights!",
    platform: "Twitch",
    price_per_unit: 0.006, // 3.0 * 2 / 1000
    minimum_order: 1000,
    maximum_order: 100000000,
    unit: "views",
    icon: "Eye",
    gradient: "from-purple-600 to-purple-800",
    category: "Twitch, Twitch Clip Views",
    url: "https://buyshazam.com/product/twitch-clip-views/"
  },
  {
    id: "facebook-profile-followers",
    title: "Facebook Profile Followers",
    description: "Meer volgers voor je Facebook profiel - bouw je persoonlijke netwerk!",
    platform: "Facebook",
    price_per_unit: 0.007, // 3.5 * 2 / 1000
    minimum_order: 100,
    maximum_order: 10000,
    unit: "followers",
    icon: "Users",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook, Facebook Profile Followers",
    url: "https://buyshazam.com/product/facebook-profile-followers/"
  },
  {
    id: "telegram-post-reactions-thumbup-views",
    title: "Telegram Post Reactions 👍 + Views",
    description: "Thumbs up reactions + views voor je Telegram posts!",
    platform: "Telegram",
    price_per_unit: 0.0008, // 0.4 * 2 / 1000
    minimum_order: 50,
    maximum_order: 1000000,
    unit: "reactions",
    icon: "ThumbsUp",
    gradient: "from-blue-400 to-blue-600",
    category: "Telegram, Telegram Post Reactions 👍 + Views, Telegram Reaction",
    url: "https://buyshazam.com/product/telegram-post-reactions-thumbup-views/"
  },
  {
    id: "imdb-add-to-watchlist",
    title: "IMDb Add to Watchlist",
    description: "Voeg je film toe aan watchlists - boost je film zichtbaarheid!",
    platform: "IMDb",
    price_per_unit: 0.06, // 30.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 10000,
    unit: "additions",
    icon: "Plus",
    gradient: "from-yellow-500 to-yellow-600",
    category: "IMDb, IMDb Add to Watchlist",
    url: "https://buyshazam.com/product/imdb-add-to-watchlist/"
  },
  {
    id: "telegram-post-reactions-love-views",
    title: "Telegram Post Reactions ❤️ + Views",
    description: "Love reactions + views voor je Telegram posts!",
    platform: "Telegram",
    price_per_unit: 0.0008, // 0.4 * 2 / 1000
    minimum_order: 50,
    maximum_order: 1000000,
    unit: "reactions",
    icon: "Heart",
    gradient: "from-blue-400 to-blue-600",
    category: "Telegram, Telegram Post Reactions ❤️ + Views, Telegram Reaction",
    url: "https://buyshazam.com/product/telegram-post-reactions-love-views/"
  },
  {
    id: "twitch-live-views",
    title: "Twitch Live Views",
    description: "Live views voor je Twitch streams - boost je gaming streams!",
    platform: "Twitch",
    price_per_unit: 0.02, // 1.0 * 2 / 1000
    minimum_order: 10,
    maximum_order: 10000,
    unit: "views",
    icon: "Eye",
    gradient: "from-purple-600 to-purple-800",
    category: "Twitch, Twitch Live Views",
    url: "https://buyshazam.com/product/twitch-live-views/"
  },
  {
    id: "google-reviews",
    title: "Google Reviews",
    description: "Professionele Google reviews voor je bedrijf - boost je lokale SEO!",
    platform: "Google",
    price_per_unit: 1.0, // 500.0 * 2 / 1000
    minimum_order: 1,
    maximum_order: 60,
    unit: "reviews",
    icon: "Star",
    gradient: "from-red-500 to-yellow-500",
    category: "Google, Google Reviews",
    url: "https://buyshazam.com/product/google-reviews/"
  },
  {
    id: "telegram-subscribers",
    title: "Telegram Subscribers",
    description: "Meer subscribers voor je Telegram kanaal - bouw je community!",
    platform: "Telegram",
    price_per_unit: 0.003, // 1.5 * 2 / 1000
    minimum_order: 100,
    maximum_order: 10000,
    unit: "subscribers",
    icon: "Users",
    gradient: "from-blue-400 to-blue-600",
    category: "Telegram, Telegram Subscribers",
    url: "https://buyshazam.com/product/telegram-subscribers/"
  },
  {
    id: "twitch-followers",
    title: "Twitch Followers",
    description: "Meer volgers voor je Twitch kanaal - bouw je gaming community!",
    platform: "Twitch",
    price_per_unit: 0.012, // 6.0 * 2 / 1000
    minimum_order: 100,
    maximum_order: 500000,
    unit: "followers",
    icon: "Users",
    gradient: "from-purple-600 to-purple-800",
    category: "Twitch, Twitch Followers",
    url: "https://buyshazam.com/product/twitch-followers/"
  },
  {
    id: "facebook-page-like",
    title: "Facebook Page Like",
    description: "Meer page likes voor je Facebook pagina - bouw je bedrijfspagina!",
    platform: "Facebook",
    price_per_unit: 0.013, // 6.5 * 2 / 1000
    minimum_order: 100,
    maximum_order: 100000,
    unit: "likes",
    icon: "ThumbsUp",
    gradient: "from-blue-600 to-blue-800",
    category: "Facebook, Facebook Page Like",
    url: "https://buyshazam.com/product/facebook-page-like/"
  }
];

// Combined service categories for navigation
export const serviceCategories = [
  {
    name: "Social Media",
    platforms: [
      { name: "Instagram", path: "/instagram", icon: "Instagram" },
      { name: "YouTube", path: "/youtube", icon: "Youtube" },
      { name: "TikTok", path: "/tiktok", icon: "Music" },
      { name: "LinkedIn", path: "/linkedin", icon: "Linkedin" },
      { name: "Threads", path: "/threads", icon: "MessageCircle" }
    ]
  },
  {
    name: "Music Platforms",
    platforms: [
      { name: "Spotify", path: "/spotify", icon: "Music" },
      { name: "Apple Music", path: "/apple-music", icon: "Music" },
      { name: "SoundClick", path: "/soundclick", icon: "Music" },
      { name: "Google Play", path: "/google-play", icon: "Music" }
    ]
  },
  {
    name: "Other Platforms",
    platforms: [
      { name: "Facebook", path: "/facebook", icon: "Facebook" },
      { name: "Twitter/X", path: "/twitter", icon: "Twitter" },
      { name: "Telegram", path: "/telegram", icon: "Send" },
      { name: "Twitch", path: "/twitch", icon: "Tv" },
      { name: "Reddit", path: "/reddit", icon: "MessageSquare" },
      { name: "IMDb", path: "/imdb", icon: "Film" },
      { name: "Rotten Tomatoes", path: "/rotten-tomatoes", icon: "Star" },
      { name: "Vimeo", path: "/vimeo", icon: "Video" },
      { name: "Google", path: "/google", icon: "Search" }
    ]
  }
];