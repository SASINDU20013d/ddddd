// ============================================================
// Site Configuration
// ============================================================

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "SpiceCraft - Premium Spices & Kitchen Products",
  description: "Discover the finest selection of premium spices, herbs, and kitchen essentials. Sourced from around the world, delivered to your kitchen.",
  language: "en",
};

// ============================================================
// Navigation
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  brandName: string;
  links: NavLink[];
  searchPlaceholder: string;
  searchHint: string;
  searchAriaLabel: string;
  closeSearchAriaLabel: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "SpiceCraft",
  links: [
    { label: "Products", href: "#products" },
    { label: "Categories", href: "#categories" },
    { label: "Kitchen", href: "#kitchen" },
    { label: "Our Story", href: "#story" },
    { label: "Team", href: "#team" },
    { label: "Gallery", href: "#gallery" },
  ],
  searchPlaceholder: "Search spices, herbs, kitchen tools...",
  searchHint: "Press Enter to search or ESC to close",
  searchAriaLabel: "Search",
  closeSearchAriaLabel: "Close search",
};

// ============================================================
// Hero Section
// ============================================================

export interface HeroConfig {
  date: string;
  titleLine1: string;
  titleLine2: string;
  readTime: string;
  description: string;
  ctaText: string;
  image: string;
  imageAlt: string;
}

export const heroConfig: HeroConfig = {
  date: "Est. 1985",
  titleLine1: "Authentic Flavors",
  titleLine2: "From Around the World",
  readTime: "Premium Quality",
  description: "For nearly four decades, SpiceCraft has been sourcing the finest spices, herbs, and kitchen essentials from the world's most renowned growing regions. Every product tells a story of tradition, quality, and passion for exceptional cooking.",
  ctaText: "Explore Collection",
  image: "/hero-spices.jpg",
  imageAlt: "Premium exotic spices arranged artistically",
};

// ============================================================
// Latest Articles (Horizontal Scroll) -> Featured Products
// ============================================================

export interface ArticleItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  category: string;
}

export interface LatestArticlesConfig {
  sectionTitle: string;
  articles: ArticleItem[];
}

export const latestArticlesConfig: LatestArticlesConfig = {
  sectionTitle: "Featured Products",
  articles: [
    {
      id: 1,
      title: "Golden Turmeric",
      subtitle: "Premium Grade A from India",
      image: "/product-turmeric.jpg",
      category: "Single Spices",
    },
    {
      id: 2,
      title: "Green Cardamom",
      subtitle: "Hand-picked from Guatemala",
      image: "/product-cardamom.jpg",
      category: "Aromatic Spices",
    },
    {
      id: 3,
      title: "Kashmiri Chili",
      subtitle: "Vibrant color, mild heat",
      image: "/product-chili.jpg",
      category: "Peppers & Chilies",
    },
    {
      id: 4,
      title: "Ceylon Cinnamon",
      subtitle: "True cinnamon from Sri Lanka",
      image: "/product-cinnamon.jpg",
      category: "Bark Spices",
    },
    {
      id: 5,
      title: "Persian Saffron",
      subtitle: "The world's most precious spice",
      image: "/product-saffron.jpg",
      category: "Luxury Spices",
    },
  ],
};

// ============================================================
// Art Category Section -> Product Categories with Branch Locations
// ============================================================

export interface EventItem {
  date: string;
  title: string;
  location: string;
}

export interface GridArticle {
  id: number;
  title: string;
  category: string;
  readTime: string;
}

export interface ArtCategoryConfig {
  sectionTitle: string;
  categoriesLabel: string;
  eventsLabel: string;
  categories: string[];
  events: EventItem[];
  featuredImage: string;
  featuredImageAlt: string;
  featuredLabel: string;
  featuredTitle: string;
  featuredDescription: string;
  featuredCtaText: string;
  gridArticles: GridArticle[];
  readSuffix: string;
}

export const artCategoryConfig: ArtCategoryConfig = {
  sectionTitle: "Product Categories",
  categoriesLabel: "Categories",
  eventsLabel: "Our Locations",
  categories: ["Whole Spices", "Ground Spices", "Herbs & Botanicals", "Spice Blends", "Kitchen Tools"],
  events: [
    { date: "Main Store", title: "SpiceCraft Flagship", location: "123 Market Street, New York" },
    { date: "Branch", title: "Downtown Outlet", location: "456 Commerce Ave, Brooklyn" },
    { date: "Branch", title: "Westside Location", location: "789 Harbor Blvd, Jersey City" },
    { date: "Online", title: "Nationwide Delivery", location: "www.spicecraft.com" },
  ],
  featuredImage: "/featured-shop.jpg",
  featuredImageAlt: "Elegant spice shop interior",
  featuredLabel: "Featured",
  featuredTitle: "Visit Our Flagship Store",
  featuredDescription: "Step into a world of aromatic wonders at our flagship location. Experience the sights, scents, and stories of over 500 premium spices and herbs. Our knowledgeable staff will guide you through our collection and help you discover new flavors for your culinary adventures.",
  featuredCtaText: "Plan Your Visit",
  gridArticles: [
    { id: 1, title: "Indian Spice Collection", category: "Regional", readTime: "45 varieties" },
    { id: 2, title: "Mediterranean Herbs", category: "Herbs", readTime: "28 varieties" },
    { id: 3, title: "Asian Spice Blends", category: "Blends", readTime: "32 varieties" },
    { id: 4, title: "Organic Line", category: "Premium", readTime: "60+ varieties" },
  ],
  readSuffix: " available",
};

// ============================================================
// Lifestyle Section -> Cooking Inspiration
// ============================================================

export interface LifestyleArticle {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  rotation: number;
  position: { x: number; y: number };
  baseZIndex?: number;
}

export interface LifestyleConfig {
  sectionTitle: string;
  viewMoreText: string;
  articles: LifestyleArticle[];
}

export const lifestyleConfig: LifestyleConfig = {
  sectionTitle: "Cooking Inspiration",
  viewMoreText: "View More Recipes",
  articles: [
    {
      id: 1,
      title: "The Art of Grinding",
      excerpt: "Discover why freshly ground spices make all the difference in your cooking.",
      image: "/lifestyle-cooking1.jpg",
      rotation: -6,
      position: { x: 0, y: 20 },
    },
    {
      id: 2,
      title: "Curry Mastery",
      excerpt: "Learn the secrets of creating authentic curries with our premium spice blends.",
      image: "/lifestyle-cooking2.jpg",
      rotation: 5,
      position: { x: 180, y: -20 },
    },
    {
      id: 3,
      title: "Fresh Herb Guide",
      excerpt: "How to select, store, and use fresh herbs for maximum flavor.",
      image: "/lifestyle-herbs.jpg",
      rotation: -3,
      position: { x: 80, y: 40 },
    },
    {
      id: 4,
      title: "Family Traditions",
      excerpt: "Passing down recipes through generations with quality ingredients.",
      image: "/lifestyle-family.jpg",
      rotation: 7,
      position: { x: 220, y: 30 },
    },
    {
      id: 5,
      title: "Ancient Techniques",
      excerpt: "Traditional methods that bring out the best in every spice.",
      image: "/lifestyle-traditional.jpg",
      rotation: -5,
      position: { x: 40, y: -10 },
    },
  ],
};

// ============================================================
// Design Section -> Kitchen Products
// ============================================================

export interface DesignItem {
  id: number;
  title: string;
  quote: string;
  image: string;
  size: string;
  gridColumn?: number;
}

export interface DesignConfig {
  sectionTitle: string;
  viewMoreText: string;
  items: DesignItem[];
}

export const designConfig: DesignConfig = {
  sectionTitle: "Kitchen Essentials",
  viewMoreText: "Explore All Products",
  items: [
    {
      id: 1,
      title: "Brass Spice Grinder",
      quote: "Traditional craftsmanship meets modern precision",
      image: "/kitchen-grinder.jpg",
      size: "wide",
    },
    {
      id: 2,
      title: "Wooden Spice Rack",
      quote: "Organize your collection in style",
      image: "/kitchen-rack.jpg",
      size: "normal",
    },
    {
      id: 3,
      title: "Ceramic Mortar & Pestle",
      quote: "The timeless tool for fresh grinding",
      image: "/kitchen-mortar.jpg",
      size: "tall",
    },
    {
      id: 4,
      title: "Copper Measuring Set",
      quote: "Precision in every measurement",
      image: "/kitchen-spoons.jpg",
      size: "normal",
    },
    {
      id: 5,
      title: "Glass Storage Jars",
      quote: "Preserve freshness, display beauty",
      image: "/kitchen-jars.jpg",
      size: "wide",
    },
    {
      id: 6,
      title: "Damascus Chef Knife",
      quote: "The perfect cut every time",
      image: "/kitchen-knife.jpg",
      size: "normal",
    },
  ],
};

// ============================================================
// Green Tribe Section -> Our Story & Founders
// ============================================================

export interface TribeMember {
  id: number;
  name: string;
  role: string;
  title: string;
  excerpt: string;
  avatar: string;
}

export interface GreenTribeConfig {
  sectionTitle: string;
  sectionDescription: string;
  readMoreText: string;
  joinTitle: string;
  joinDescription: string;
  emailPlaceholder: string;
  subscribeText: string;
  memberCountText: string;
  videoSrc: string;
  videoPoster: string;
  members: TribeMember[];
}

export const greenTribeConfig: GreenTribeConfig = {
  sectionTitle: "Our Story",
  sectionDescription: "From a small family business to a trusted name in kitchens across the nation, our journey has always been guided by a simple belief: quality ingredients create extraordinary meals.",
  readMoreText: "Read Full Story",
  joinTitle: "Join Our Community",
  joinDescription: "Subscribe for exclusive recipes, spice guides, and special offers delivered to your inbox.",
  emailPlaceholder: "Your email address",
  subscribeText: "Subscribe",
  memberCountText: "50,000+ home cooks have joined",
  videoSrc: "",
  videoPoster: "/featured-shop.jpg",
  members: [
    {
      id: 1,
      name: "Marcus Chen",
      role: "Co-Founder",
      title: "The Spice Pioneer",
      excerpt: "Marcus began his journey in 1985, traveling through spice markets of India, Morocco, and Turkey. His passion for authentic flavors built the foundation of SpiceCraft.",
      avatar: "/founder1.jpg",
    },
    {
      id: 2,
      name: "Elena Rodriguez",
      role: "Co-Founder",
      title: "The Quality Guardian",
      excerpt: "With her background in food science, Elena established our rigorous quality standards. Every spice that bears our name meets her exacting criteria.",
      avatar: "/founder2.jpg",
    },
    {
      id: 3,
      name: "David Park",
      role: "Master Blender",
      title: "Creator of Signature Blends",
      excerpt: "David has spent 20 years perfecting our proprietary spice blends, combining traditional recipes with modern palates.",
      avatar: "/team-chef1.jpg",
    },
  ],
};

// ============================================================
// Authors Section -> Culinary Team
// ============================================================

export interface Author {
  id: number;
  name: string;
  role: string;
  avatar: string;
  articles: number;
  social: { instagram: string; twitter: string };
}

export interface AuthorsConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  articlesSuffix: string;
  authors: Author[];
}

export const authorsConfig: AuthorsConfig = {
  sectionTitle: "Our Culinary Team",
  sectionSubtitle: "Meet the experts behind our spice selection",
  articlesSuffix: "recipes created",
  authors: [
    {
      id: 1,
      name: "Chef James Wong",
      role: "Executive Chef",
      avatar: "/team-chef1.jpg",
      articles: 127,
      social: { instagram: "#", twitter: "#" },
    },
    {
      id: 2,
      name: "Dr. Sarah Miller",
      role: "Nutritionist",
      avatar: "/team-nutritionist.jpg",
      articles: 89,
      social: { instagram: "#", twitter: "#" },
    },
    {
      id: 3,
      name: "Pierre Dubois",
      role: "Spice Sommelier",
      avatar: "/team-sommelier.jpg",
      articles: 156,
      social: { instagram: "#", twitter: "#" },
    },
    {
      id: 4,
      name: "Lisa Chen",
      role: "Recipe Developer",
      avatar: "/team-marketing.jpg",
      articles: 203,
      social: { instagram: "#", twitter: "#" },
    },
    {
      id: 5,
      name: "Marcus Chen",
      role: "Founder",
      avatar: "/founder1.jpg",
      articles: 78,
      social: { instagram: "#", twitter: "#" },
    },
  ],
};

// ============================================================
// Instagram Gallery Section -> Product Gallery
// ============================================================

export interface InstagramImage {
  id: number;
  image: string;
  likes: number;
}

export interface InstagramGalleryConfig {
  handle: string;
  handleUrl: string;
  description: string;
  followText: string;
  likesSuffix: string;
  images: InstagramImage[];
}

export const instagramGalleryConfig: InstagramGalleryConfig = {
  handle: "@spicecraft",
  handleUrl: "#",
  description: "Follow us for daily spice inspiration, cooking tips, and behind-the-scenes from our kitchens",
  followText: "Follow Us",
  likesSuffix: "likes",
  images: [
    { id: 1, image: "/gallery1.jpg", likes: 2453 },
    { id: 2, image: "/gallery2.jpg", likes: 1892 },
    { id: 3, image: "/gallery3.jpg", likes: 3241 },
    { id: 4, image: "/gallery4.jpg", likes: 2156 },
    { id: 5, image: "/gallery5.jpg", likes: 1789 },
    { id: 6, image: "/gallery6.jpg", likes: 2934 },
    { id: 7, image: "/gallery7.jpg", likes: 1654 },
    { id: 8, image: "/gallery8.jpg", likes: 2103 },
    { id: 9, image: "/gallery9.jpg", likes: 2876 },
    { id: 10, image: "/gallery10.jpg", likes: 1987 },
  ],
};

// ============================================================
// Footer
// ============================================================

export interface FooterConfig {
  brandWatermark: string;
  newsletterTitle: string;
  newsletterDescription: string;
  emailPlaceholder: string;
  subscribeText: string;
  subscribeSuccessMessage: string;
  categoriesLabel: string;
  categories: string[];
  pagesLabel: string;
  pages: string[];
  legalLabel: string;
  legalLinks: string[];
  socialLabel: string;
  socialLinks: {
    instagram: string;
    twitter: string;
    youtube: string;
  };
  backToTopText: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  brandWatermark: "SpiceCraft",
  newsletterTitle: "Stay Flavorful",
  newsletterDescription: "Subscribe for exclusive recipes, spice guides, and special offers.",
  emailPlaceholder: "Your email address",
  subscribeText: "Subscribe",
  subscribeSuccessMessage: "Welcome to the SpiceCraft family!",
  categoriesLabel: "Categories",
  categories: ["Whole Spices", "Ground Spices", "Herbs", "Blends", "Kitchen Tools", "Gift Sets"],
  pagesLabel: "Pages",
  pages: ["About Us", "Our Story", "Locations", "Recipes", "Blog", "Contact"],
  legalLabel: "Legal",
  legalLinks: ["Privacy Policy", "Terms of Service", "Shipping Info", "Returns"],
  socialLabel: "Follow Us",
  socialLinks: {
    instagram: "#",
    twitter: "#",
    youtube: "#",
  },
  backToTopText: "Back to Top",
  copyright: "© 2024 SpiceCraft. All rights reserved.",
  credit: "Crafted with passion for exceptional flavors",
};
