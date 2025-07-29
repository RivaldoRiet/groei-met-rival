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
  {
    id: "instagram-views",
    title: "Instagram Views",
    description: "Vergroot de zichtbaarheid van je Instagram posts en verhoog je bereik organisch",
    platform: "Instagram",
    price_per_unit: 0.0007,
    minimum_order: 300,
    maximum_order: 60000,
    unit: "views",
    icon: "👁️",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram",
    url: "https://buyshazam.com/product/instagram-views/",
    price_options: {
      "Views + Impressions": 0.0003,
      "USA": 0.10,
      "UK": 0.10,
      "France": 0.10,
      "Japan": 0.10,
      "Dubai": 0.10,
      "Arab": 0.10
    }
  },
  {
    id: "instagram-likes",
    title: "Instagram Likes",
    description: "Krijg meer likes op je Instagram posts en verbeter je engagement rate",
    platform: "Instagram",
    price_per_unit: 0.0016,
    minimum_order: 100,
    maximum_order: 25000,
    unit: "likes",
    icon: "❤️",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram",
    url: "https://buyshazam.com/product/instagram-likes/",
    price_options: {
      "Female Likes": 0.0015,
      "Male Likes": 0.0015,
      "Dubai": 0.05,
      "French": 0.05,
      "Russia": 0.05
    }
  },
  {
    id: "instagram-followers",
    title: "Instagram Followers",
    description: "Bouw je Instagram gemeenschap op met echte en actieve followers",
    platform: "Instagram",
    price_per_unit: 0.0023,
    minimum_order: 100,
    maximum_order: 150000,
    unit: "followers",
    icon: "👥",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram",
    url: "https://buyshazam.com/product/instagram-followers/",
    price_options: {
      "Arab Iranian": 0.05,
      "Indian": 0.08,
      "Turkish": 0.05,
      "Brazil": 0.08
    }
  },
  {
    id: "instagram-story-views",
    title: "Instagram Story Views",
    description: "Verhoog de views op je Instagram Stories en vergroot je zichtbaarheid",
    platform: "Instagram",
    price_per_unit: 0.0005,
    minimum_order: 100,
    maximum_order: 350000,
    unit: "views",
    icon: "📱",
    gradient: "from-pink-500 to-rose-500",
    category: "Instagram",
    url: "https://buyshazam.com/product/instagram-story-views/"
  },
  {
    id: "youtube-views",
    title: "YouTube Views",
    description: "Verhoog je YouTube video views en vergroot je kanaal bereik",
    platform: "YouTube",
    price_per_unit: 0.0029,
    minimum_order: 1000,
    maximum_order: 10000000,
    unit: "views",
    icon: "📺",
    gradient: "from-red-500 to-red-600",
    category: "YouTube",
    url: "https://buyshazam.com/product/youtube-views/",
    price_options: {
      "UK": 0.099,
      "Canada": 0.099,
      "France": 0.099,
      "Germany": 0.099,
      "Italy": 0.099,
      "India": 0.099,
      "Japan": 0.099,
      "Spain": 0.099,
      "Russia": 0.099,
      "Brazil": 0.099,
      "Turkey": 0.099
    }
  },
  {
    id: "youtube-likes",
    title: "YouTube Likes",
    description: "Krijg meer likes op je YouTube video's en verbeter je video ranking",
    platform: "YouTube",
    price_per_unit: 0.011,
    minimum_order: 20,
    maximum_order: 100000,
    unit: "likes",
    icon: "👍",
    gradient: "from-red-500 to-red-600",
    category: "YouTube",
    url: "https://buyshazam.com/product/youtube-likes/",
    price_options: {
      "USA": 0.03,
      "UK": 0.03,
      "France": 0.03,
      "Canada": 0.03
    }
  },
  {
    id: "youtube-subscribers",
    title: "YouTube Subscribers",
    description: "Bouw je YouTube kanaal op met nieuwe subscribers en vergroot je community",
    platform: "YouTube",
    price_per_unit: 0.007,
    minimum_order: 100,
    maximum_order: 100000,
    unit: "subscribers",
    icon: "📋",
    gradient: "from-red-500 to-red-600",
    category: "YouTube",
    url: "https://buyshazam.com/product/youtube-subscribers/"
  },
  {
    id: "tiktok-views",
    title: "TikTok Views",
    description: "Maak je TikTok video's viral met meer views en verhoog je bereik",
    platform: "TikTok",
    price_per_unit: 0.0002,
    minimum_order: 100,
    maximum_order: 50000000,
    unit: "views",
    icon: "🎬",
    gradient: "from-purple-500 to-pink-500",
    category: "TikTok",
    url: "https://buyshazam.com/product/tiktok-views/"
  },
  {
    id: "tiktok-likes",
    title: "TikTok Likes",
    description: "Krijg meer likes op je TikTok video's en verbeter je engagement",
    platform: "TikTok",
    price_per_unit: 0.0005,
    minimum_order: 100,
    maximum_order: 15000,
    unit: "likes",
    icon: "💗",
    gradient: "from-purple-500 to-pink-500",
    category: "TikTok",
    url: "https://buyshazam.com/product/tiktok-likes/",
    price_options: {
      "USA": 0.05,
      "Canada": 0.05,
      "France": 0.05
    }
  },
  {
    id: "tiktok-followers",
    title: "TikTok Followers",
    description: "Bouw je TikTok community op met nieuwe followers en vergroot je bereik",
    platform: "TikTok",
    price_per_unit: 0.0055,
    minimum_order: 50,
    maximum_order: 40000,
    unit: "followers",
    icon: "👤",
    gradient: "from-purple-500 to-pink-500",
    category: "TikTok",
    url: "https://buyshazam.com/product/tiktok-followers/",
    price_options: {
      "Canada": 0.05,
      "France": 0.05
    }
  },
  {
    id: "spotify-plays",
    title: "Spotify Streams",
    description: "Verhoog je Spotify streams en bereik een groter publiek met je muziek",
    platform: "Spotify",
    price_per_unit: 0.0014,
    minimum_order: 500,
    maximum_order: 10000000,
    unit: "streams",
    icon: "🎵",
    gradient: "from-green-500 to-green-600",
    category: "Spotify",
    url: "https://buyshazam.com/product/spotify-plays/",
    price_options: {
      "USA": 0.06,
      "EUROPE": 0.165,
      "United Kingdom": 0.14,
      "Germany": 0.165,
      "France": 0.15,
      "Italy": 0.15,
      "Brazil": 0.15,
      "Switzerland": 0.15,
      "Turkey": 0.15,
      "Premium Saves": 0.08
    }
  },
  {
    id: "spotify-followers",
    title: "Spotify Followers",
    description: "Krijg meer followers op je Spotify profiel en vergroot je fanbase",
    platform: "Spotify",
    price_per_unit: 0.002,
    minimum_order: 1000,
    maximum_order: 1000000,
    unit: "followers",
    icon: "🎶",
    gradient: "from-green-500 to-green-600",
    category: "Spotify",
    url: "https://buyshazam.com/product/spotify-followers/",
    price_options: {
      "USA": 0.06,
      "EUROPE": 0.165,
      "United Kingdom": 0.14,
      "Germany": 0.165
    }
  }
];

export const getServicesByPlatform = (platform: string) => {
  return services.filter(service => service.platform === platform);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};