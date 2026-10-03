export interface DemoWebsite {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  subCategory: string;
  shortDesc: string;
  previewImage: string;
  rating: number;
  reviewsCount: number;
  likes: number;
  views: number;
  themeColor: string;
  accentGradient: string;
  tags: string[];
  mockData: {
    heroTitle: string;
    heroSubtitle: string;
    primaryAction: string;
    secondaryAction: string;
    features: { title: string; desc: string; icon: string }[];
    sampleItems: { name: string; tag: string; priceOrHighlight: string; desc: string }[];
    stats: { label: string; value: string }[];
    contactInfo: { address: string; hours: string; phone: string };
  };
}

export interface FeedbackEntry {
  id: string;
  demoId?: string;
  demoName?: string;
  rating: number;
  comment: string;
  userName: string;
  userRole: string;
  userEmail?: string;
  createdAt: string;
  isVerified?: boolean;
}

export interface CustomerEnquiry {
  id: string;
  name: string;
  businessName?: string;
  email: string;
  phone: string;
  websiteType?: string;
  selectedDemo?: string;
  budgetRange?: string;
  projectDetails: string;
  status?: 'New' | 'Contacted' | 'In Discussion' | 'Completed';
  createdAt: string;
}

// Visual asset paths generated for ALTHAF
export const ASSETS = {
  heroShowcase: '/src/assets/images/hero_althaf_showcase_1790962035944.jpg',
  portrait: '/src/assets/images/althaf_designer_portrait_1790962049796.jpg',
  restaurantPreview: '/src/assets/images/demo_restaurant_preview_1790962125630.jpg',
  hotelPreview: '/src/assets/images/demo_hotel_preview_1790962140616.jpg',
  gymPreview: '/src/assets/images/demo_gym_fitness_preview_1790962152918.jpg',
};

export const INITIAL_DEMOS: DemoWebsite[] = [
  {
    id: 'modern-furniture',
    name: 'Modern Furniture',
    subtitle: 'For Your Home',
    category: 'E-Commerce Store',
    subCategory: 'Online Shopping Website',
    shortDesc: 'Contemporary interior and home furniture shopping experience with clean product cards, cart drawer, and instant checkout.',
    previewImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80',
    rating: 4.9,
    reviewsCount: 28,
    likes: 214,
    views: 1180,
    themeColor: '#0284c7',
    accentGradient: 'from-sky-500 to-blue-600',
    tags: ['E-Commerce', 'Cart Drawer', 'Furniture', 'Stripe Ready'],
    mockData: {
      heroTitle: 'Modern Furniture For Your Home',
      heroSubtitle: 'Minimalist Scandinavian craftsmanship designed for timeless comfort and elevated living spaces.',
      primaryAction: 'Shop Collection',
      secondaryAction: 'View Lookbook',
      features: [
        { title: 'Solid Natural Oak', desc: 'Sustainably sourced certified hardwood timbers', icon: 'Sparkles' },
        { title: 'Free White-Glove Setup', desc: 'Doorstep assembly and packaging removal', icon: 'Truck' },
        { title: '10-Year Warranty', desc: 'Guaranteed structural integrity for a decade', icon: 'ShieldCheck' },
      ],
      sampleItems: [
        { name: 'Koto Ergonomic Lounge Chair', tag: 'Bestseller', priceOrHighlight: '$420', desc: 'Full grain aniline leather with walnut frame' },
        { name: 'Oslo Minimalist Travertine Table', tag: 'New Arrival', priceOrHighlight: '$680', desc: 'Brushed Italian travertine stone base' },
        { name: 'Aero Floating Media Console', tag: 'Living Room', priceOrHighlight: '$540', desc: 'Integrated cable management and soft-close slats' },
      ],
      stats: [
        { label: 'Happy Homes', value: '4,200+' },
        { label: 'Crafted Pieces', value: '120+' },
        { label: 'Customer Score', value: '4.9 ★' },
      ],
      contactInfo: {
        address: 'Design District, Avenue 14',
        hours: 'Mon - Sun: 10 AM - 8 PM',
        phone: '+91 8179176914',
      },
    },
  },
  {
    id: 'good-food-good-mood',
    name: 'Good Food Good Mood',
    subtitle: 'Restaurant Website',
    category: 'Restaurant Website',
    subCategory: 'Food & Restaurant',
    shortDesc: 'Delicious culinary food ordering and table reservation website with interactive digital menu, chef highlights, and reviews.',
    previewImage: ASSETS.restaurantPreview,
    rating: 4.9,
    reviewsCount: 34,
    likes: 248,
    views: 1350,
    themeColor: '#f59e0b',
    accentGradient: 'from-amber-500 to-rose-500',
    tags: ['Table Reservation', 'Digital Menu', 'Online Ordering', 'Chef Showcase'],
    mockData: {
      heroTitle: 'Delicious Food, Unforgettable Memories',
      heroSubtitle: 'Hand-crafted artisanal dining prepared by world-class chefs using fresh organic local ingredients.',
      primaryAction: 'Book a Table',
      secondaryAction: 'Explore Menu',
      features: [
        { title: 'Fine Dining Ambience', desc: 'Crafted acoustic architecture & panoramic garden views', icon: 'Sparkles' },
        { title: 'Private Dining Rooms', desc: 'Exclusive suites for family celebrations & corporate galas', icon: 'Users' },
        { title: 'Signature Sommelier', desc: 'Curated organic wine pairings by European master sommeliers', icon: 'GlassWater' },
      ],
      sampleItems: [
        { name: 'Pan-Seared King Salmon', tag: 'Chef Signature', priceOrHighlight: '$38', desc: 'Wild caught salmon, asparagus velouté, dill blossom oil' },
        { name: 'Wagyu Ribeye Steak (A5)', tag: 'Premium Cut', priceOrHighlight: '$64', desc: 'Truffle potato purée, charred shallots, red wine reduction' },
        { name: 'Truffle Wild Mushroom Risotto', tag: 'Vegetarian', priceOrHighlight: '$28', desc: 'Acquerello carnaroli rice, aged parmesan, fresh shaved black truffle' },
      ],
      stats: [
        { label: 'Rating', value: '4.9 ★' },
        { label: 'Daily Guests', value: '350+' },
        { label: 'Signature Dishes', value: '24' },
      ],
      contactInfo: {
        address: '84 Grand Avenue, Waterfront District',
        hours: 'Daily: 11:30 AM – 11:00 PM',
        phone: '+91 8179176914',
      },
    },
  },
  {
    id: 'grow-business',
    name: 'Grow Your Business',
    subtitle: 'With Us',
    category: 'Business Landing Page',
    subCategory: 'Corporate Website',
    shortDesc: 'High-converting business landing page built for advisory, software consultancy, and lead generation.',
    previewImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    rating: 4.8,
    reviewsCount: 19,
    likes: 176,
    views: 920,
    themeColor: '#2563eb',
    accentGradient: 'from-blue-600 to-indigo-600',
    tags: ['B2B Landing', 'Lead Funnel', 'Analytics', 'Conversion'],
    mockData: {
      heroTitle: 'Transforming Strategic Visions Into Real Scale',
      heroSubtitle: 'Helping modern brands build market authority, streamline workflows, and double inbound customer pipelines.',
      primaryAction: 'Book Strategy Call',
      secondaryAction: 'Case Studies',
      features: [
        { title: 'Data-Backed Strategy', desc: 'Analytical conversion optimization for high ROI', icon: 'TrendingUp' },
        { title: 'Global Execution', desc: 'Experienced digital delivery across 12 countries', icon: 'Globe' },
        { title: 'Dedicated Support', desc: 'Always reachable direct via Slack & WhatsApp', icon: 'ShieldCheck' },
      ],
      sampleItems: [
        { name: 'Brand Authority Redesign', tag: 'Case Study', priceOrHighlight: '+140% Leads', desc: 'Turnkey website overhaul with 99 Lighthouse performance' },
        { name: 'Enterprise SaaS Funnel', tag: 'Optimization', priceOrHighlight: '2.4x Conv.', desc: 'High-speed landing pages for paid ads and organic search' },
      ],
      stats: [
        { label: 'Client Pipeline', value: '$3.5M+' },
        { label: 'Average Growth', value: '+85%' },
        { label: 'Client Retention', value: '98%' },
      ],
      contactInfo: {
        address: 'Financial Plaza, 8th Floor',
        hours: 'Mon - Fri: 9 AM - 6 PM',
        phone: '+91 8179176914',
      },
    },
  },
  {
    id: 'creative-portfolio',
    name: 'Creative Portfolio',
    subtitle: 'Personal Portfolio',
    category: 'Portfolio Website',
    subCategory: 'Personal Portfolio',
    shortDesc: 'Dark modern portfolio for creators, designers, and software engineers with interactive animations and sleek project grids.',
    previewImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80',
    rating: 4.9,
    reviewsCount: 31,
    likes: 289,
    views: 1420,
    themeColor: '#8b5cf6',
    accentGradient: 'from-purple-500 to-indigo-600',
    tags: ['Portfolio', 'Minimalist', 'Interactive', 'Micro-Animations'],
    mockData: {
      heroTitle: 'Crafting Distinctive Digital Experiences',
      heroSubtitle: 'Designing and building digital products that blend high-performance engineering with memorable visual identity.',
      primaryAction: 'View Projects',
      secondaryAction: 'Get in Touch',
      features: [
        { title: '60fps Micro-Interactions', desc: 'Smooth GPU-accelerated motion and transitions', icon: 'Sparkles' },
        { title: 'Mobile-First Logic', desc: 'Pixel-perfect responsiveness across all screen sizes', icon: 'Smartphone' },
        { title: 'Semantic SEO', desc: 'Clean HTML5 structure and rich social previews', icon: 'Zap' },
      ],
      sampleItems: [
        { name: 'Kroma Studio Brand & Web', tag: 'Web App', priceOrHighlight: '2026 Award', desc: 'Next.js and Tailwind interactive creative site' },
        { name: 'Apex Athletic Club', tag: 'Client Site', priceOrHighlight: 'Live Production', desc: 'Gym landing page with live schedule integration' },
      ],
      stats: [
        { label: 'Awards Won', value: '12' },
        { label: 'Projects Shipped', value: '45+' },
        { label: 'Satisfaction', value: '100%' },
      ],
      contactInfo: {
        address: 'Global Remote Studio',
        hours: 'Mon - Sat: 9 AM - 8 PM',
        phone: '+91 8179176914',
      },
    },
  },
  {
    id: 'better-education',
    name: 'Better Education',
    subtitle: 'Brighter Future',
    category: 'School Website',
    subCategory: 'Education Website',
    shortDesc: 'Inspiring educational institution portal with academic programs, virtual tour, admissions form, and event updates.',
    previewImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
    rating: 4.8,
    reviewsCount: 22,
    likes: 195,
    views: 1040,
    themeColor: '#0ea5e9',
    accentGradient: 'from-sky-500 to-indigo-500',
    tags: ['Education', 'Admissions', 'Curriculum', 'Parent Portal'],
    mockData: {
      heroTitle: 'Inspiring Curiosity, Shaping Future Leaders',
      heroSubtitle: 'A comprehensive learning academy nurturing critical thinking, creative expression, and global academic excellence.',
      primaryAction: 'Apply for Admission',
      secondaryAction: 'Explore Campus',
      features: [
        { title: 'Interactive Learning Labs', desc: 'Advanced STEM facilities and creative arts studios', icon: 'Sparkles' },
        { title: 'Certified Master Educators', desc: 'Faculty with international accreditations and passion', icon: 'Users' },
        { title: 'Digital Parent Portal', desc: 'Live attendance, grades, and parent-teacher messaging', icon: 'Smartphone' },
      ],
      sampleItems: [
        { name: 'Primary & Middle School Foundation', tag: 'Grades 1-8', priceOrHighlight: 'Admissions Open', desc: 'Inquiry-based international curriculum' },
        { name: 'Advanced STEM & AI Academy', tag: 'High School', priceOrHighlight: 'Scholarships', desc: 'Robotics, competitive math, and coding electives' },
      ],
      stats: [
        { label: 'Students Enrolled', value: '1,800+' },
        { label: 'Graduation Rate', value: '100%' },
        { label: 'University Placements', value: '96%' },
      ],
      contactInfo: {
        address: 'Campus Hill, Academic Avenue',
        hours: 'Mon - Fri: 8 AM - 4 PM',
        phone: '+91 8179176914',
      },
    },
  },
];

export const INITIAL_TESTIMONIALS: FeedbackEntry[] = [
  {
    id: 'test-1',
    userName: 'Fahad Khan',
    userRole: 'Business Owner',
    rating: 5,
    comment: 'Althaf delivered an amazing website for my business. The design is clean, fast and exactly what I wanted. Highly recommended!',
    createdAt: '2026-03-24',
    isVerified: true,
  },
  {
    id: 'test-2',
    userName: 'Priya Sharma',
    userRole: 'Restaurant Owner',
    rating: 5,
    comment: 'Very professional and easy to work with. He understood my requirements perfectly and delivered on time. The website looks great and brings more customers!',
    createdAt: '2026-03-18',
    isVerified: true,
  },
  {
    id: 'test-3',
    userName: 'Imran Ahmed',
    userRole: 'E-commerce Store Owner',
    rating: 5,
    comment: "The website is responsive, fast and user-friendly. Althaf's support even after the project was completed is really appreciated!",
    createdAt: '2026-03-02',
    isVerified: true,
  },
];

export const SERVICES_LIST = [
  {
    id: 'business-websites',
    title: 'Business & Corporate Websites',
    desc: 'High-converting custom web presences crafted to establish credibility, showcase services, and capture qualified client leads.',
    icon: 'Globe',
    turnaround: '3 - 5 Days',
    tags: ['Custom UI', 'Fast Load', 'Lead Capture'],
    features: ['Modern Responsive Layout', 'SEO & Speed Optimized', 'Contact & Lead Forms', 'Domain & Hosting Setup'],
  },
  {
    id: 'ecommerce-stores',
    title: 'E-Commerce Online Stores',
    desc: 'Seamless shopping experiences with product catalogs, shopping cart drawer, instant checkout, and payment gateway integration.',
    icon: 'ShoppingCart',
    turnaround: '5 - 7 Days',
    tags: ['Cart Drawer', 'Payment Ready', 'Inventory UI'],
    features: ['Product Filtering & Search', 'Secure Payment Integration', 'Order Notifications', 'Mobile-First Checkout'],
  },
  {
    id: 'restaurant-hospitality',
    title: 'Restaurant & Hotel Websites',
    desc: 'Visual gastronomy menus, direct table reservations, room showcase, location maps, and instant WhatsApp ordering.',
    icon: 'UtensilsCrossed',
    turnaround: '3 - 5 Days',
    tags: ['Online Menu', 'Table Booking', 'WhatsApp Order'],
    features: ['Interactive Food Menus', 'Reservation Booking Engine', 'Google Maps Location', 'Customer Reviews Carousel'],
  },
  {
    id: 'gym-fitness',
    title: 'Gym, Fitness & Health Clubs',
    desc: 'High-energy landing pages with class timetables, membership pricing tables, trainer profiles, and free trial booking.',
    icon: 'Zap',
    turnaround: '3 - 5 Days',
    tags: ['Schedules', 'Membership Plans', 'Trainer Bio'],
    features: ['Interactive Schedule Calendar', 'Tiered Pricing Comparison', 'Trial Class Registration', 'WhatsApp Quick Booking'],
  },
  {
    id: 'real-estate-construction',
    title: 'Real Estate & Construction',
    desc: 'High-impact project galleries, floor plan presentations, inquiry forms, and WhatsApp property tour scheduling.',
    icon: 'LayoutDashboard',
    turnaround: '4 - 6 Days',
    tags: ['Property Showcase', 'Floor Plans', 'Tour Booking'],
    features: ['Filterable Listings', 'High-Res Image Lightbox', 'Brochure Download CTAs', 'Agent Direct WhatsApp'],
  },
  {
    id: 'redesign-speed',
    title: 'Website Redesign & Speed Optimization',
    desc: 'Transform outdated, slow websites into lightning-fast, modern, mobile-friendly experiences scoring 95+ on Google Lighthouse.',
    icon: 'Rocket',
    turnaround: '2 - 4 Days',
    tags: ['95+ PageSpeed', 'Modern UI/UX', 'SEO Audit'],
    features: ['Modern Visual Overhaul', 'Core Web Vitals Boost', 'Mobile Layout Fixes', 'Clean Semantic Code'],
  },
];

export const WORK_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Brief',
    desc: 'Tell me about your business goals, target audience, preferred style, and key features needed.',
  },
  {
    step: '02',
    title: 'Choose a Design',
    desc: 'Select a demo you love or request a bespoke concept tailored exclusively for your brand.',
  },
  {
    step: '03',
    title: 'Custom Build & Code',
    desc: 'I develop your website with clean code, responsive layouts, animations, and fast loading performance.',
  },
  {
    step: '04',
    title: 'Review & Refine',
    desc: 'You test the live interactive preview on desktop and mobile, and I fine-tune every detail to perfection.',
  },
  {
    step: '05',
    title: 'Launch & Grow',
    desc: 'We launch your website on your custom domain with SEO setup and ongoing dedicated support.',
  },
];
