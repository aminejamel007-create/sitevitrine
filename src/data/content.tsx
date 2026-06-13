import stitchImg from '../assets/stitch.jpg'
import suitsImg from '../assets/suits.jpg'
import atelierImg from '../assets/atelier.jpg'
import suit1 from '../assets/suit1.png'
import suit2 from '../assets/suit2.png'
import suit3 from '../assets/suit3.png'
import suit4 from '../assets/suit4.png'

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
  { id: 'suits-blazers', icon: 'shirt', title: 'Suits & Blazers', description: 'Discover handcrafted business suits and tailored blazers designed for modern gentlemen. Premium fabrics, precise cuts, and timeless elegance.', image: suit1, link: '#' },
  { id: 'light-summer-suits', icon: 'sparkles', title: 'Light & Summer Suits', description: 'Lightweight tailoring crafted for warm-weather sophistication. Breathable fabrics, relaxed construction, and effortless elegance.', image: suit2, link: '#' },
  { id: 'statement-formal-suits', icon: 'heart', title: 'Statement Formal Suits', description: 'Bold tailored suits designed for weddings, galas, and special occasions. Distinctive colors with refined craftsmanship.', image: suit4, link: '#' },
  { id: 'our-boutique', icon: 'scissors', title: 'Our Boutique', description: 'Experience the Monsieur Style showroom, where premium fabrics, expert guidance, and personalized service come together.', image: atelierImg, link: '#' },
  { id: 'bespoke-tailoring', icon: 'umbrella', title: 'Bespoke Tailoring', description: 'Fully customized garments crafted to your measurements and preferences. From fabric selection to final fitting.', image: suitsImg, link: '#' },
  { id: 'evening-collection', icon: 'sparkles', title: 'Evening Collection', description: 'Sophisticated eveningwear and occasion suits tailored to leave a lasting impression.', image: suit4, link: '#' },
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
