import stitchImg from '../assets/stitch.jpg'
import suitsImg from '../assets/suits.jpg'
import atelierImg from '../assets/atelier.jpg'
import suit1 from '../assets/suit1.png'
import suit2 from '../assets/suit2.png'
import suit3 from '../assets/suit3.png'
import suit4 from '../assets/suit4.png'
import suit5 from '../assets/suit5.png'
import suit6 from '../assets/suit6.png'
import suit7 from '../assets/suit7.png'
import suit8 from '../assets/suit8.png'
import suit9 from '../assets/suit9.png'
import watch1 from '../assets/wwatch1.png'
import watch2 from '../assets/watch2.png'
import watch3 from '../assets/watch3.png'
import glasses1 from '../assets/glasses1.png'
import glasses2 from '../assets/glasses2.png'
import glasses3 from '../assets/glasses3.png'
import cardPocket1 from '../assets/cardpocket1.png'
import cardPocket2 from '../assets/cardpocket2.png'
import cardPocket3 from '../assets/cardpocket3.png'

export const siteInfo = {
  name: 'Monsieur Style',
  tagline: 'Precision tailoring for a life well-dressed.',
  phone: '+216 25 944 398',
  email: 'bespoke@monsieurstyle.com',
  address: 'Sahloul 4, Sousse, Tunisia',
  copyright: `© ${new Date().getFullYear()} Monsieur Style. All rights reserved.`,
  developer: { name: 'Aziz Tounsi', url: 'https://aziz-tounsi.github.io/' },
  social: {
    instagram: '#',
    facebook: '#',
    linkedin: '#',
    pinterest: '#',
  },
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Collections', path: '/collections' },
  { label: 'Lookbook', path: '/lookbook' },
  { label: 'Journal', path: '/journal' },
  { label: 'Contact', path: '/contact' },
]

export const marqueeLines = [
  'TAILORED • TIMELESS • REFINED • MONSIEUR STYLE • BESPOKE • HERITAGE • MODERN •',
]

export const heroData = {
  title: 'Tailored for the Modern Gentleman',
  subtitle: 'Where heritage craftsmanship meets contemporary edge — your signature style, crafted in Sousse.',
  cta: 'Explore Collections',
  ctaSecondary: 'Book Consultation',
}

export const aboutIntro = {
  title: 'Crafted with Precision, Worn with Confidence',
  text: 'At Monsieur Style, we believe a garment is more than fabric and thread — it is a statement. Our atelier in the heart of Sousse has been dressing discerning gentlemen for over two decades, blending time-honored tailoring traditions with a distinctly modern sensibility.',
  text2: 'Every suit, shirt, and overcoat that leaves our workshop carries the imprint of master craftspeople who treat each stitch as a signature. From the selection of premium Italian and English fabrics to the final pressing, no detail is too small.',
  image: stitchImg,
  imageCaption: 'Our master atelier in Sousse',
}

export const values = [
  { icon: 'ruler', title: 'Precision Fit', description: 'Every garment is built around your unique measurements, ensuring a silhouette that feels like a second skin.' },
  { icon: 'sparkles', title: 'Artisanal Craft', description: 'Hand-stitched details, canvas construction, and techniques passed down through generations of master tailors.' },
  { icon: 'shirt', title: 'Premium Materials', description: 'We source only the finest mills — Vitale Barberis, Loro Piana, and Holland & Sherry — for fabrics of uncompromising quality.' },
  { icon: 'user', title: 'Personal Service', description: 'From initial consultation to final fitting, you work directly with your dedicated master tailor.' },
]

export const collections = [
  { id: 'suits-blazers', icon: 'shirt', title: 'Suits & Blazers', description: 'Discover handcrafted business suits and tailored blazers designed for modern gentlemen. Premium fabrics, precise cuts, and timeless elegance.', image: suit1, link: '/collections/suits-blazers' },
  { id: 'light-summer-suits', icon: 'sparkles', title: 'Light & Summer Suits', description: 'Lightweight tailoring crafted for warm-weather sophistication. Breathable fabrics, relaxed construction, and effortless elegance.', image: suit2, link: '/collections/light-summer-suits' },
  { id: 'statement-formal-suits', icon: 'heart', title: 'Statement Formal Suits', description: 'Bold tailored suits designed for weddings, galas, and special occasions. Distinctive colors with refined craftsmanship.', image: suit4, link: '/collections/statement-formal-suits' },
  { id: 'watches', icon: 'clock', title: 'Watches', description: 'Premium timepieces crafted for the discerning gentleman. Swiss movements, elegant designs, timeless sophistication.', image: watch1, link: '/collections/watches' },
  { id: 'glasses', icon: 'eye', title: 'Glasses', description: 'Handcrafted eyewear frames combining optical precision with luxury style. From classic acetate to modern titanium.', image: glasses1, link: '/collections/glasses' },
  { id: 'card-pockets', icon: 'credit-card', title: 'Card Pockets', description: 'Exquisite leather card holders and pocket organisers. Slim, refined, and crafted from the finest full-grain leather.', image: cardPocket1, link: '/collections/card-pockets' },
]

export const processSteps = [
  { step: 1, title: 'Consultation', description: 'We discuss your style, occasion, and preferences in a relaxed one-on-one session.', icon: 'messageSquare' },
  { step: 2, title: 'Measurement', description: 'Over 30 precise measurements are taken to build your unique fit profile.', icon: 'ruler' },
  { step: 3, title: 'Design', description: 'Choose from hundreds of fabrics, linings, buttons, and styling details.', icon: 'sparkles' },
  { step: 4, title: 'Fitting', description: 'A basted fitting ensures every proportion is adjusted to perfection.', icon: 'shirt' },
  { step: 5, title: 'Delivery', description: 'Your finished garment is pressed, packed, and ready to wear.', icon: 'package' },
]

export const lookbookImages = [
  { id: 1, src: suit1, alt: 'Navy blue suit collection', category: 'Suits' },
  { id: 2, src: suit2, alt: 'Charcoal suit ensemble', category: 'Suits' },
  { id: 3, src: suit3, alt: 'Classic tailored suit', category: 'Suits' },
  { id: 4, src: suit4, alt: 'Premium suit styling', category: 'Suits' },
  { id: 5, src: suitsImg, alt: 'Formal evening suit', category: 'Formal' },
  { id: 6, src: stitchImg, alt: 'Hand-stitched formal details', category: 'Formal' },
  { id: 7, src: atelierImg, alt: 'Bespoke tailoring workshop', category: 'Bespoke' },
  { id: 8, src: suit4, alt: 'Hand-stitching details', category: 'Bespoke' },
  { id: 9, src: suit3, alt: 'Smart casual suits', category: 'Casual' },
  { id: 10, src: suit2, alt: 'Signature Monsieur Style look', category: 'Casual' },
]

export const products = [
  { id: 1, name: 'Navy Tailored Business Suit', description: 'Classic single-breasted navy suit in premium wool. Features notch lapels, two-button closure, and full canvas construction.', price: 1200, images: [suit1], collectionId: 'suits-blazers', sizes: ['46', '48', '50', '52', '54'], colors: ['Navy', 'Charcoal'], rating: 4.8 },
  { id: 2, name: 'Charcoal Executive Blazer', description: 'A refined charcoal blazer crafted from Italian wool. Perfect for boardroom meetings and formal occasions.', price: 950, images: [suit2], collectionId: 'suits-blazers', sizes: ['46', '48', '50', '52'], colors: ['Charcoal', 'Navy'], rating: 4.7 },
  { id: 3, name: 'Beige Summer Linen Suit', description: 'Lightweight linen suit in warm beige. Breathable and elegant, designed for Mediterranean summers.', price: 850, images: [suit2], collectionId: 'light-summer-suits', sizes: ['46', '48', '50', '52'], colors: ['Beige', 'Light Grey'], rating: 4.6 },
  { id: 4, name: 'Cotton Safari Jacket', description: 'Unstructured cotton jacket ideal for warm-weather sophistication. Pair with chinos or tailored trousers.', price: 720, images: [suit3], collectionId: 'light-summer-suits', sizes: ['48', '50', '52'], colors: ['Khaki', 'Navy'], rating: 4.5 },
  { id: 5, name: 'Burgundy Statement Suit', description: 'A bold burgundy suit for weddings and galas. Satin peak lapels and a tapered silhouette command attention.', price: 1500, images: [suit4], collectionId: 'statement-formal-suits', sizes: ['46', '48', '50', '52', '54'], colors: ['Burgundy', 'Deep Red'], rating: 4.9 },
  { id: 6, name: 'Classic Tuxedo', description: 'Timeless black tuxedo with satin peak lapels. The definitive choice for black-tie events.', price: 1800, images: [suitsImg], collectionId: 'statement-formal-suits', sizes: ['46', '48', '50', '52'], colors: ['Black', 'Midnight Blue'], rating: 4.9 },
  { id: 7, name: 'Bespoke Custom Suit', description: 'A fully personalized suit from first sketch to final stitch. Choose every detail — fabric, lining, buttons, lapels.', price: 2500, images: [suit5], collectionId: 'suits-blazers', sizes: ['Custom'], colors: ['Any'], rating: 5.0 },
  { id: 8, name: 'Premium Wool Overcoat', description: 'Luxurious wool overcoat in charcoal. Single-breasted with peak lapels, perfect for layering over suits.', price: 1600, images: [suit6], collectionId: 'suits-blazers', sizes: ['48', '50', '52', '54'], colors: ['Charcoal', 'Navy'], rating: 4.7 },
  { id: 9, name: 'Ivory Dinner Jacket', description: 'Elegant ivory dinner jacket for summer formal occasions. Shawl collar with satin trim and mother-of-pearl buttons.', price: 1400, images: [suit7], collectionId: 'statement-formal-suits', sizes: ['46', '48', '50', '52'], colors: ['Ivory', 'White'], rating: 4.8 },
  { id: 10, name: 'Navy Double-Breasted Suit', description: 'Timeless double-breasted navy suit with wide peak lapels. A powerful silhouette for the modern gentleman.', price: 1350, images: [suit8], collectionId: 'suits-blazers', sizes: ['46', '48', '50', '52', '54'], colors: ['Navy', 'Midnight Blue'], rating: 4.9 },
  { id: 11, name: 'Swiss Automatic Chronograph', description: 'Premium Swiss automatic chronograph with sapphire crystal and leather strap. Water-resistant to 100m.', price: 580, images: [watch1], collectionId: 'watches', sizes: ['One Size'], colors: ['Silver', 'Gold', 'Rose Gold'], rating: 4.9 },
  { id: 12, name: 'Classic Dress Watch', description: 'Elegant thin dress watch with sunburst dial and alligator leather strap. Hand-wound mechanical movement.', price: 520, images: [watch2], collectionId: 'watches', sizes: ['One Size'], colors: ['Silver', 'Black'], rating: 4.8 },
  { id: 13, name: 'Aviator Pilot Watch', description: 'Inspired by vintage cockpit instruments. Large crown, luminous hands, and a robust stainless steel case.', price: 450, images: [watch3], collectionId: 'watches', sizes: ['One Size'], colors: ['Stainless', 'Bronze'], rating: 4.7 },
  { id: 14, name: 'Acetate Optical Frame', description: 'Handcrafted acetate optical frame with gold-plated temples. Lightweight and comfortable for daily wear.', price: 420, images: [glasses1], collectionId: 'glasses', sizes: ['S', 'M', 'L'], colors: ['Black', 'Tortoise', 'Navy'], rating: 4.6 },
  { id: 15, name: 'Titanium Rimless Glasses', description: 'Ultra-lightweight titanium rimless frames with adjustable nose pads. Minimalist and sophisticated.', price: 550, images: [glasses2], collectionId: 'glasses', sizes: ['M', 'L'], colors: ['Silver', 'Gunmetal', 'Gold'], rating: 4.7 },
  { id: 16, name: 'Round Vintage Sunglasses', description: 'Classic round sunglasses in hand-polished acetate. Green CR-39 lenses with UV400 protection.', price: 350, images: [glasses3], collectionId: 'glasses', sizes: ['M', 'L'], colors: ['Black', 'Havana', 'Tortoise'], rating: 4.5 },
  { id: 17, name: 'Slim Leather Card Holder', description: 'Hand-stitched full-grain leather card holder with three slots. Fits up to 6 cards. Made in Tuscany.', price: 250, images: [cardPocket1], collectionId: 'card-pockets', sizes: ['One Size'], colors: ['Black', 'Brown', 'Navy'], rating: 4.8 },
  { id: 18, name: 'Executive Card Wallet', description: 'Premium calfskin card wallet with coin pocket and RFID protection. Slim profile fits any jacket.', price: 320, images: [cardPocket2], collectionId: 'card-pockets', sizes: ['One Size'], colors: ['Black', 'Dark Brown', 'Burgundy'], rating: 4.7 },
  { id: 19, name: 'Minimalist Metal Card Case', description: 'Brushed titanium card case with spring-loaded mechanism. Holds 4-8 cards in a ultra-slim 6mm profile.', price: 200, images: [cardPocket3], collectionId: 'card-pockets', sizes: ['One Size'], colors: ['Titanium', 'Black', 'Rose Gold'], rating: 4.6 },
]

export const reviews = [
  { id: 1, productId: 1, name: 'Ahmed B.', rating: 5, text: 'The fit is impeccable. Best suit I have ever owned.', date: 'May 2026' },
  { id: 2, productId: 1, name: 'Karim M.', rating: 4, text: 'Excellent quality and craftsmanship. Worth every dinar.', date: 'April 2026' },
  { id: 3, productId: 5, name: 'Youssef T.', rating: 5, text: 'Wore this to my wedding — received endless compliments.', date: 'March 2026' },
  { id: 4, productId: 6, name: 'Mehdi K.', rating: 5, text: 'Perfect tuxedo. The satin lapels are stunning.', date: 'February 2026' },
  { id: 5, productId: 11, name: 'Amine J.', rating: 5, text: 'The chronograph is a masterpiece. Exceptional craftsmanship.', date: 'January 2026' },
  { id: 6, productId: 14, name: 'Sami H.', rating: 4, text: 'Elegant frames, very comfortable for all-day wear.', date: 'December 2025' },
  { id: 7, productId: 17, name: 'Youssef T.', rating: 5, text: 'Perfect slim card holder. The leather is sublime.', date: 'November 2025' },
]

export const testimonials = [
  { id: 1, name: 'Youssef Ben Amor', role: 'Business Executive', avatar: 'https://i.pravatar.cc/80?img=11', quote: 'Monsieur Style redefined what I thought possible in menswear. The attention to detail is extraordinary — every jacket, every shirt feels like it was made specifically for me. Because it was.' },
  { id: 2, name: 'Mehdi Khelil', role: 'Architect', avatar: 'https://i.pravatar.cc/80?img=12', quote: 'I have never experienced service like this. From fabric selection to the final fitting, the team guided me with expertise and patience. My wedding suit was nothing short of perfection.' },
  { id: 3, name: 'Amine Jaziri', role: 'Creative Director', avatar: 'https://i.pravatar.cc/80?img=7', quote: 'As someone in the creative industry, I demand a lot from my wardrobe. Monsieur Style delivers every time. Their understanding of silhouette and proportion is world-class.' },
]

export const stats = [
  { label: 'Years of Craft', value: 22, suffix: '+' },
  { label: 'Suits Delivered', value: 7400, suffix: '+' },
  { label: 'Happy Clients', value: 3200, suffix: '+' },
  { label: 'Master Tailors', value: 18, suffix: '' },
]

export const teamMembers = [
  { name: 'Karim Mansour', role: 'Master Tailor', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', bio: '35 years of mastery in traditional tailoring.' },
  { name: 'Leila Ben Ammar', role: 'Head of Design', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80', bio: 'Brings contemporary vision to classic craft.' },
  { name: 'Sami Khedher', role: 'Fabric Curator', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80', bio: 'Selects the world\'s finest textiles for our collections.' },
  { name: 'Nadia Chaari', role: 'Pattern Master', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80', bio: 'Architect of the perfect fit, one pattern at a time.' },
]

export const journalPosts = [
  {
    id: 1, title: 'The Anatomy of a Bespoke Suit',
    excerpt: 'From canvas to lapels — an insider\'s guide to what makes a truly exceptional tailored jacket.',
    image: stitchImg,
    date: 'June 8, 2026', author: 'Monsieur Style', readTime: '6 min read',
    category: 'Craft', slug: 'anatomy-bespoke-suit',
    content: `## The Foundation: Canvas Construction\n\nThe difference between a good suit and a great one begins where you cannot see it — inside the chest and lapels. A full canvas construction, hand-stitched using horsehair and wool, allows the jacket to mold to your body over time while maintaining its structure.\n\nFused suits, common in off-the-rack garments, use adhesive that can bubble and delaminate. A canvassed jacket breathes, moves, and ages gracefully — developing a patina of wear that is uniquely yours.\n\n## The Shoulder\n\nThe shoulder is the architectural foundation of any jacket. A natural shoulder (soft, unstructured) offers a relaxed silhouette, while a roped shoulder (structured, with a slight ridge at the sleeve head) creates a more powerful, classic line.\n\nOur master tailor will guide you to the shoulder style that best complements your physique and personal aesthetic.\n\n## The Lapel\n\nThe lapel is the suit's signature — its most expressive element. Notch lapels are versatile and timeless, peak lapels command attention and formality, while shawl collars belong to the evening.\n\nWe work with you to select a lapel width and style that balances proportion with personality.\n\n## Sleeve & Button Details\n\nWorking buttonholes at the cuffs (surgeon's cuffs) are a hallmark of true bespoke tailoring. Each buttonhole is hand-stitched and functional, allowing you to roll back your sleeves or reveal a carefully selected cufflink.\n\nAt Monsieur Style, these are not optional extras — they are standard.`,
  },
  {
    id: 2, title: 'Fabric Focus: The World\'s Finest Mills',
    excerpt: 'A journey through the historic textile mills that supply the cloth for our collections.',
    image: suitsImg,
    date: 'May 25, 2026', author: 'Monsieur Style', readTime: '5 min read',
    category: 'Fabric', slug: 'finest-mills',
    content: `## Vitale Barberis Canonico\n\nFounded in 1663, Vitale Barberis Canonico is the world's oldest textile mill. Their woolens are the backbone of our suiting collection — offering durability, drape, and a subtle luster that only comes from centuries of refinement.\n\n## Loro Piana\n\nFor those who demand the extraordinary, Loro Piana provides fabrics of almost unreasonable luxury. Their Tasmanian wool, baby cashmere, and Lotus Flower fiber represent the summit of textile craftsmanship.\n\n## Holland & Sherry\n\nSince 1836, this English mill has supplied the world's most prestigious tailoring houses. Their worsted wool and mohair blends offer exceptional resilience with a refined finish, ideal for travel-friendly suiting.\n\n## Choosing Your Cloth\n\nOur fabric curator guides you through hundreds of options, considering season, occasion, and personal style. The right cloth transforms a garment from merely well-made to truly exceptional.`,
  },
  {
    id: 3, title: 'The Art of the Perfect Shirt Fit',
    excerpt: 'Essential tips for finding (or commissioning) shirts that look bespoke, even off the rack.',
    image: suit3,
    date: 'May 12, 2026', author: 'Monsieur Style', readTime: '4 min read',
    category: 'Style', slug: 'perfect-shirt-fit',
    content: `## The Collar: Your Frame\n\nThe collar frames your face and sets the tone for the entire shirt. It should fit snugly — two fingers should slide between collar and neck — without gaping when buttoned. A well-fitted collar maintains its structure throughout the day.\n\n## Shoulder Seam\n\nThe shoulder seam should sit precisely at the edge of your shoulder bone. A seam that falls down your arm indicates a shirt that is too large; one that sits too high restricts movement and pulls across the chest.\n\n## Sleeve Length\n\nYour shirt cuff should show approximately half an inch (1.25 cm) beyond your jacket sleeve. The cuff should be snug enough to stay in place but loose enough to slide a watch through.\n\n## The Body\n\nA common mistake is excess fabric through the torso. Your shirt should follow your body's contours without pulling or billowing. When tucked in, there should be no more than a pinch of fabric at the waist.\n\nAt Monsieur Style, we engineer each shirt to your exact proportions — because the perfect fit is the foundation of elegance.`,
  },
  {
    id: 4, title: 'Summer Wedding Style: A Gentleman\'s Guide',
    excerpt: 'Navigate warm-weather formalwear with confidence — from fabric choices to colour palettes.',
    image: suit4,
    date: 'April 28, 2026', author: 'Monsieur Style', readTime: '5 min read',
    category: 'Style', slug: 'summer-wedding-style',
    content: `## Fabric First\n\nFor summer weddings, lightweight wool, linen, and cotton blends are your allies. A 9oz to 10oz wool suiting offers breathability without sacrificing the drape and structure that formalwear demands.\n\nLinen is ideal for beach and garden ceremonies — its natural wrinkles are part of its charm. A linen-cotton blend offers the best of both worlds: breathability with reduced creasing.\n\n## Colour Palette\n\nLight greys, beige, and navy blue are the foundation of a summer wedding wardrobe. For the groom, a cream or ivory dinner jacket paired with black trousers creates a timeless warm-weather statement.\n\n## The Right Accessories\n\nA linen pocket square, cotton or silk knit tie, and loafers or suede shoes complete the look. Consider a lightweight waistcoat for ceremony formality that can be removed for the reception.\n\n## Formal vs. Festive\n\nAlways check the invitation for dress code guidance. Black tie remains formal regardless of season. For less formal celebrations, a light-coloured suit with a crisp white shirt and no tie strikes the perfect balance between elegant and relaxed.`,
  },
]
