import { useRouter } from '../router'
import './BlogPostPage.css'

const articles = {
  'wooden-interior-design-trends-2025': {
    title: '7 Wooden Interior Design Trends Dominating Hyderabad Homes in 2025',
    category: 'Design Trends',
    date: 'May 10, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=80',
    content: [
      {
        type: 'intro',
        text: 'Wood has always been at the heart of timeless interior design. In 2025, it\'s making a powerful comeback in Hyderabad homes — not just as flooring or furniture, but as a full design language. From textured wall panels to statement ceilings, here are the 7 wooden interior design trends our clients are most excited about this year.',
      },
      {
        type: 'heading',
        text: '1. Fluted & Reeded Wood Panels',
      },
      {
        type: 'paragraph',
        text: 'Fluted wood panels — with their vertical grooves and ridges — are one of the most requested features in our bedroom and living room projects. They add texture, depth, and a sculptural quality to plain walls. Whether used as a full wall treatment or as a bedhead accent, fluted panels instantly elevate a room\'s character.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=900&q=80',
        caption: 'Fluted wood panel bedroom — IHS Imperial Home Space, Hyderabad',
      },
      {
        type: 'heading',
        text: '2. Warm Walnut & Teak Finishes',
      },
      {
        type: 'paragraph',
        text: 'Cool greys and stark whites are giving way to warm, earthy wood tones. Walnut and teak finishes are dominating kitchens, wardrobes, and TV units in 2025. These rich, dark-brown tones pair beautifully with gold hardware and cream walls — a signature look we\'ve been delivering across Hyderabad villas and apartments.',
      },
      {
        type: 'heading',
        text: '3. Wood Slatted Ceilings',
      },
      {
        type: 'paragraph',
        text: 'One of the most dramatic transformations we\'ve been making in client homes is replacing plain POP ceilings with wood slatted ceiling designs. The horizontal or angled slats create visual interest, warmth, and a resort-like atmosphere in bedrooms and living areas. Combined with concealed LED lighting, the effect is truly breathtaking.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80',
        caption: 'Wood slatted ceiling design with concealed lighting',
      },
      {
        type: 'heading',
        text: '4. Japandi-Inspired Wood Minimalism',
      },
      {
        type: 'paragraph',
        text: 'The Japandi trend — a blend of Japanese minimalism and Scandinavian simplicity — is hugely popular in Hyderabad\'s urban apartments. It features light natural woods like ash and birch, clean lines, and a clutter-free approach. The result is a calm, meditative living environment that feels both luxurious and grounded.',
      },
      {
        type: 'heading',
        text: '5. Integrated Wood & Marble Combinations',
      },
      {
        type: 'paragraph',
        text: 'Pairing warm wood tones with cool marble surfaces creates a striking visual contrast that works beautifully in kitchens and bathrooms. A teak kitchen island with a white Carrara marble countertop, or a walnut vanity paired with a veined marble basin — these combinations feel both luxurious and natural.',
      },
      {
        type: 'heading',
        text: '6. Built-in Wooden Shelving & Niches',
      },
      {
        type: 'paragraph',
        text: 'Built-in shelving units and alcove niches crafted from wood are replacing bulky furniture in modern Hyderabad homes. They offer smart storage while becoming a design feature in themselves. Whether it\'s a reading nook, a display wall, or a TV unit — built-in wood joinery adds a bespoke, crafted feel to any space.',
      },
      {
        type: 'heading',
        text: '7. Outdoor-Inspired Wood Accents Indoors',
      },
      {
        type: 'paragraph',
        text: 'Bringing the outdoors in is a key 2025 trend. Reclaimed wood, raw timber accents, and live-edge wood pieces are being used as statement features in living rooms and home offices. A live-edge dining table or a reclaimed wood console can become the centrepiece of an entire room\'s design story.',
      },
      {
        type: 'cta',
        heading: 'Want Wooden Interiors in Your Home?',
        text: 'Our designers at IHS Imperial Home Space specialise in warm, wooden luxury interiors across Hyderabad. Book a free consultation today.',
      },
    ],
  },

  'modular-kitchen-guide': {
    title: 'The Complete Guide to Modular Kitchens for Indian Homes',
    category: 'Kitchen Design',
    date: 'April 22, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80',
    content: [
      {
        type: 'intro',
        text: 'The kitchen is the most used room in any Indian home — and one of the most important investments you\'ll make during a home renovation. A well-designed modular kitchen can transform your cooking experience, maximise storage, and add significant value to your property. Here\'s everything you need to know.',
      },
      {
        type: 'heading',
        text: 'What is a Modular Kitchen?',
      },
      {
        type: 'paragraph',
        text: 'A modular kitchen is built from pre-manufactured cabinet units — called modules — that are assembled on-site to create a custom kitchen layout. Unlike traditional carpenter-built kitchens, modular kitchens offer precision engineering, better finishes, and the ability to reconfigure or upgrade components over time.',
      },
      {
        type: 'heading',
        text: 'Popular Modular Kitchen Layouts',
      },
      {
        type: 'paragraph',
        text: 'The right layout depends entirely on the size and shape of your kitchen space. The most popular layouts we design in Hyderabad are: L-Shape (ideal for most Indian apartments, maximises corner space), U-Shape (three walls of cabinetry — maximum storage and countertop space), Straight / Single Wall (best for compact apartments and studio flats), Island Kitchen (requires a larger space but creates a premium, open-plan feel), and Parallel / Galley (two parallel counters — very efficient for cooking).',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=900&q=80',
        caption: 'U-shaped modular kitchen with island — IHS Imperial Home Space project',
      },
      {
        type: 'heading',
        text: 'Choosing the Right Material',
      },
      {
        type: 'paragraph',
        text: 'The material you choose for your kitchen cabinet shutters determines both the look and durability. The most popular options are: Marine Plywood with Laminate (most durable, moisture-resistant, wide colour range), MDF with PU Paint (smooth finish, no grain, great for contemporary kitchens), Acrylic Shutters (high-gloss, reflective surface — very modern look), and Membrane / PVC Foil (budget-friendly, available in wood-grain finishes). We always recommend marine plywood as the carcass material for Indian kitchens due to humidity resistance.',
      },
      {
        type: 'heading',
        text: 'Hardware Makes the Difference',
      },
      {
        type: 'paragraph',
        text: 'The quality of your kitchen hardware — hinges, drawer channels, and lift-up mechanisms — determines how your kitchen feels every single day. We work with premium brands like Hettich, Hafele, and Blum for smooth, silent, soft-close operation that lasts decades.',
      },
      {
        type: 'heading',
        text: 'Countertop Options',
      },
      {
        type: 'paragraph',
        text: 'Your kitchen countertop needs to be heat-resistant, scratch-resistant, and easy to clean. The best options for Indian kitchens are: Granite (natural stone, extremely durable, heat-resistant — the most popular choice in Hyderabad), Quartz (engineered stone, non-porous, stain-resistant — premium choice), Corian / Solid Surface (seamless, hygienic, can be shaped into sink integrations), and Stainless Steel (ultra-hygienic, used in professional-style kitchens).',
      },
      {
        type: 'heading',
        text: 'How Much Does a Modular Kitchen Cost in Hyderabad?',
      },
      {
        type: 'paragraph',
        text: 'Kitchen costs vary widely based on size, material, and brand. A basic laminate kitchen starts from ₹1.5 lakhs, a mid-range acrylic or PU finish kitchen ranges from ₹3–6 lakhs, and a premium kitchen with imported hardware and stone countertops can range from ₹8–20 lakhs. At IHS Imperial Home Space, we offer modular kitchen design packages for every budget.',
      },
      {
        type: 'cta',
        heading: 'Design Your Dream Kitchen With Us',
        text: 'Get a free modular kitchen design consultation from IHS Imperial Home Space. We design and execute modular kitchens across Hyderabad.',
      },
    ],
  },

  'luxury-bedroom-design-tips': {
    title: 'How to Design a Luxury Master Bedroom on Any Budget',
    category: 'Bedroom Design',
    date: 'April 8, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1400&q=80',
    content: [
      {
        type: 'intro',
        text: 'Your master bedroom should be your personal sanctuary — a space that feels calm, beautiful, and completely yours. The good news is that creating a luxury bedroom doesn\'t always require a massive budget. With the right design decisions, even a modest space can feel like a five-star hotel suite.',
      },
      {
        type: 'heading',
        text: '1. Start With a Strong Focal Point',
      },
      {
        type: 'paragraph',
        text: 'Every luxurious bedroom has one powerful focal point — usually the bed wall. This could be a textured wall panel, a wood-panelled headboard, a wallpaper feature wall, or an upholstered fabric wall. Choose one statement element and build the rest of the room around it.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=80',
        caption: 'Luxury master bedroom with wooden panel focal wall',
      },
      {
        type: 'heading',
        text: '2. Invest in Quality Lighting',
      },
      {
        type: 'paragraph',
        text: 'Lighting is the single most impactful and cost-effective upgrade you can make to any bedroom. Replace harsh overhead lights with layered lighting — a warm ceiling cove, bedside pendant lamps or sconces, and concealed strip lights behind the headboard. Warm white (2700-3000K) lighting makes every space feel more luxurious and relaxing.',
      },
      {
        type: 'heading',
        text: '3. Choose a Cohesive Colour Palette',
      },
      {
        type: 'paragraph',
        text: 'Luxury bedrooms typically use a restrained colour palette of 2-3 tones. Popular combinations in 2025 include: Warm Ivory + Walnut Brown + Gold accents, Charcoal Grey + White + Brushed Brass, Dusty Rose + Cream + Antique Bronze, and Deep Navy + Warm White + Natural Wood. Avoid too many competing colours — restraint is the hallmark of luxury.',
      },
      {
        type: 'heading',
        text: '4. Upgrade Your Storage',
      },
      {
        type: 'paragraph',
        text: 'A clutter-free bedroom instantly looks more luxurious. Invest in a well-designed wardrobe — either a built-in sliding wardrobe or a walk-in wardrobe if space permits. Integrated bedside tables with hidden drawers, an ottoman at the foot of the bed, and under-bed storage drawers all help keep the room clean and organised.',
      },
      {
        type: 'heading',
        text: '5. Use Texture to Add Depth',
      },
      {
        type: 'paragraph',
        text: 'Luxury isn\'t just about materials — it\'s about texture and how different surfaces interact with light. Layer different textures: a linen bedspread, velvet cushions, a wool rug, a wood panel wall, and a ceramic bedside lamp. The interplay of these textures creates visual richness without requiring expensive materials.',
      },
      {
        type: 'heading',
        text: '6. Don\'t Neglect the Ceiling',
      },
      {
        type: 'paragraph',
        text: 'The ceiling is the fifth wall of your bedroom — and most people completely ignore it. A simple false ceiling with a cove light can transform the entire feel of a room. For a truly dramatic effect, consider a wood slatted ceiling or a fabric-draped canopy above the bed area.',
      },
      {
        type: 'cta',
        heading: 'Design Your Dream Bedroom',
        text: 'Let our designers at IHS Imperial Home Space create a luxury master bedroom tailored to your taste and budget in Hyderabad.',
      },
    ],
  },

  'office-interior-design-productivity': {
    title: 'Designing Office Spaces That Boost Productivity and Employee Wellbeing',
    category: 'Office Design',
    date: 'March 28, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80',
    content: [
      {
        type: 'intro',
        text: 'The design of your workplace directly influences how your team feels, thinks, and performs. Research consistently shows that well-designed offices improve productivity by up to 20%, reduce absenteeism, and help attract and retain top talent. Here\'s how to design an office that truly works for your business.',
      },
      {
        type: 'heading',
        text: 'Prioritise Natural Light',
      },
      {
        type: 'paragraph',
        text: 'Natural light is the single most important factor in workplace wellbeing. Position workstations near windows wherever possible. Use glass partitions instead of solid walls to allow light to penetrate deeper into the office. Where natural light is limited, invest in high-quality daylight-spectrum LED lighting that mimics natural daylight cycles.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=900&q=80',
        caption: 'Open plan office with natural light and collaborative zones',
      },
      {
        type: 'heading',
        text: 'Create Zones for Different Work Modes',
      },
      {
        type: 'paragraph',
        text: 'Modern offices need to accommodate different types of work — focused individual work, collaborative team sessions, informal catch-ups, and private calls. Design your office with distinct zones: a quiet focus zone with acoustic panels, collaborative open spaces with flexible furniture, informal lounge areas, and private meeting pods or cabins.',
      },
      {
        type: 'heading',
        text: 'Acoustics Matter More Than You Think',
      },
      {
        type: 'paragraph',
        text: 'Noise is one of the top complaints in open-plan offices. Good acoustic design is essential. We use a combination of acoustic ceiling panels, fabric-wrapped wall panels, carpet tiles, and strategic placement of plants and soft furnishings to reduce noise levels without making the office feel closed or oppressive.',
      },
      {
        type: 'heading',
        text: 'Incorporate Biophilic Design',
      },
      {
        type: 'paragraph',
        text: 'Biophilic design — incorporating natural elements like plants, natural materials, and views of nature — has been proven to reduce stress and improve cognitive performance. Even simple additions like indoor plants, a living wall, natural wood surfaces, and stone accents can have a measurable positive impact on your team\'s wellbeing.',
      },
      {
        type: 'heading',
        text: 'Brand Your Space',
      },
      {
        type: 'paragraph',
        text: 'Your office should reflect your brand\'s identity and values. From the reception area to the meeting rooms, every element should communicate your company culture. This not only creates a stronger impression for clients and visitors but also reinforces your brand values with your own team every single day.',
      },
      {
        type: 'cta',
        heading: 'Transform Your Office in Hyderabad',
        text: 'IHS Imperial Home Space designs premium office interiors across Hyderabad that balance aesthetics, functionality, and employee wellbeing.',
      },
    ],
  },

  'false-ceiling-design-ideas': {
    title: '10 False Ceiling Design Ideas That Add Drama to Any Room',
    category: 'Ceiling Design',
    date: 'March 15, 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80',
    content: [
      {
        type: 'intro',
        text: 'The ceiling is one of the most overlooked design elements in Indian homes — yet it has the power to completely transform a room. A thoughtfully designed false ceiling can add height, drama, warmth, and personality to any space. Here are 10 ideas that our designers love working with.',
      },
      {
        type: 'heading',
        text: '1. Classic Cove Ceiling with Concealed Lighting',
      },
      {
        type: 'paragraph',
        text: 'The most popular false ceiling design in Indian homes — a recessed cove border around the perimeter of the room with LED strip lights hidden inside. The result is a soft, warm glow that makes any room feel more spacious and elegant. Works beautifully in living rooms and bedrooms.',
      },
      {
        type: 'heading',
        text: '2. Wood Slatted Ceiling',
      },
      {
        type: 'paragraph',
        text: 'Narrow wooden slats arranged in parallel rows across the ceiling create a stunning visual effect. The slats can be natural wood, veneer, or WPC (wood polymer composite). This design works particularly well in bedrooms, dining areas, and home offices — adding warmth and a boutique-hotel feel.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80',
        caption: 'Wood slatted ceiling in luxury bedroom — IHS Imperial Home Space',
      },
      {
        type: 'heading',
        text: '3. Coffered Ceiling',
      },
      {
        type: 'paragraph',
        text: 'A coffered ceiling features a grid of sunken panels — traditionally associated with grand colonial architecture. In a modern Indian home, a simplified coffered design in POP or wood adds architectural interest and a sense of grandeur to living rooms and dining areas.',
      },
      {
        type: 'heading',
        text: '4. Tray Ceiling',
      },
      {
        type: 'paragraph',
        text: 'A tray ceiling has a recessed central section that creates the illusion of height. It\'s ideal for bedrooms and dining rooms. The recessed section can be painted a contrasting colour or fitted with indirect lighting to create a dramatic focal point above the dining table or bed.',
      },
      {
        type: 'heading',
        text: '5. Backlit Ceiling Panels',
      },
      {
        type: 'paragraph',
        text: 'Frosted glass or acrylic panels with LED lighting behind them create a glowing, diffused light effect on the ceiling. This is particularly popular in home theatres, pooja rooms, and master bedrooms where a dramatic, mood-setting effect is desired.',
      },
      {
        type: 'heading',
        text: '6. Stretch Ceiling',
      },
      {
        type: 'paragraph',
        text: 'Stretch ceilings use a thin PVC membrane stretched across a frame. They can be printed with any design — a sky, a pattern, or an abstract artwork — and backlit for a truly unique effect. They\'re also moisture-resistant, making them ideal for bathrooms and kitchens.',
      },
      {
        type: 'heading',
        text: '7. Exposed Brick & Raw Ceiling',
      },
      {
        type: 'paragraph',
        text: 'For industrial or rustic-themed interiors, leaving the structural ceiling exposed — with visible beams, brick, or concrete — creates an authentic, raw aesthetic. This works particularly well in home offices, restaurants, and creative studio spaces.',
      },
      {
        type: 'cta',
        heading: 'Get a Custom Ceiling Design',
        text: 'Our designers at IHS Imperial Home Space can create a bespoke false ceiling design for any room in your Hyderabad home or office.',
      },
    ],
  },

  'wardrobe-design-guide': {
    title: 'Walk-in Wardrobe vs Built-in Wardrobe: Which is Right for Your Home?',
    category: 'Storage Design',
    date: 'March 2, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1400&q=80',
    content: [
      {
        type: 'intro',
        text: 'Storage is one of the most requested features in modern Indian homes. As apartments get smarter and lifestyles get busier, well-designed wardrobe solutions have become a priority for homeowners across Hyderabad. But should you go for a walk-in wardrobe or a built-in wardrobe? Here\'s a comprehensive guide to help you decide.',
      },
      {
        type: 'heading',
        text: 'Built-in Wardrobes: The Smart Space Solution',
      },
      {
        type: 'paragraph',
        text: 'Built-in wardrobes are custom-designed to fit exactly within the available wall space of your bedroom. They maximise storage from floor to ceiling and can be fitted with sliding or hinged doors. Built-in wardrobes are ideal for most Indian apartments where space is at a premium.',
      },
      {
        type: 'paragraph',
        text: 'The advantages of built-in wardrobes include: maximum use of available space, seamless integration with bedroom design, wide range of internal configurations (hanging, shelving, drawers, shoe racks), available in all finishes from laminate to lacquer to wood veneer, and more affordable than walk-in wardrobes.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1588267096684-12f0938e34e9?w=900&q=80',
        caption: 'Custom built-in wardrobe with sliding doors — IHS Imperial Home Space',
      },
      {
        type: 'heading',
        text: 'Walk-in Wardrobes: The Ultimate Luxury',
      },
      {
        type: 'paragraph',
        text: 'A walk-in wardrobe — or dressing room — is a dedicated room or alcove designed exclusively for storing and organising your clothing and accessories. It\'s a statement of luxury and a dream for many homeowners. Walk-in wardrobes require a minimum of 4x4 feet of dedicated floor space, though larger designs of 8x10 feet or more create a truly immersive dressing room experience.',
      },
      {
        type: 'heading',
        text: 'Key Considerations When Choosing',
      },
      {
        type: 'paragraph',
        text: 'Space available: Walk-in wardrobes need a dedicated room or alcove — at least 4-5 feet of depth is required. Budget: Walk-in wardrobes cost significantly more due to the additional space, lighting, and interior fittings required. Lifestyle: If you have an extensive wardrobe collection or share a bedroom with a partner, a walk-in wardrobe makes more practical sense. Resale value: Both options add value, but a well-designed walk-in wardrobe can be a major selling point for premium properties.',
      },
      {
        type: 'heading',
        text: 'Internal Organisation Tips',
      },
      {
        type: 'paragraph',
        text: 'Regardless of which type you choose, good internal organisation is key. Include a mix of long hanging space for dresses and shirts, double hanging space for shorter items, open shelving for folded clothes and bags, pull-out drawers for accessories and undergarments, shoe racks or cubbies, and a full-length mirror.',
      },
      {
        type: 'cta',
        heading: 'Design Your Perfect Wardrobe',
        text: 'IHS Imperial Home Space designs custom wardrobes — both walk-in and built-in — across Hyderabad. Book a free consultation today.',
      },
    ],
  },

  'interior-design-cost-hyderabad': {
    title: 'How Much Does Interior Design Cost in Hyderabad? A Complete Breakdown',
    category: 'Tips & Advice',
    date: 'February 18, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1400&q=80',
    content: [
      {
        type: 'intro',
        text: 'One of the most common questions we receive from clients is: "How much does interior design cost in Hyderabad?" The honest answer is — it depends. But in this article, we\'ll break down the typical costs for different types of interior design projects so you can plan your budget with confidence.',
      },
      {
        type: 'heading',
        text: 'How Interior Design is Priced',
      },
      {
        type: 'paragraph',
        text: 'Interior design projects in Hyderabad are typically priced in one of three ways: Per Square Foot (most common for full home interiors — the rate covers design, materials, and execution), Fixed Package Price (for specific rooms like kitchens or bedrooms), or Design Fee + Execution Cost (design fee charged separately, then materials and labour billed separately).',
      },
      {
        type: 'heading',
        text: 'Full Home Interior Design Costs',
      },
      {
        type: 'paragraph',
        text: 'For a complete home interior design project in Hyderabad, the typical per-square-foot rates are: Basic / Economy (₹800–1,200 per sq ft) — laminate finishes, standard hardware, basic lighting; Mid-Range (₹1,200–1,800 per sq ft) — premium laminates, acrylic or PU finishes, good quality hardware, designer lighting; Premium / Luxury (₹1,800–3,000+ per sq ft) — wood veneers, lacquered finishes, imported hardware, custom furniture, designer lighting and accessories.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=900&q=80',
        caption: 'Premium interior design project by IHS Imperial Home Space, Hyderabad',
      },
      {
        type: 'heading',
        text: 'Room-by-Room Cost Estimates',
      },
      {
        type: 'paragraph',
        text: 'Modular Kitchen: ₹1.5 lakhs to ₹15 lakhs depending on size and finish. Master Bedroom with Wardrobe: ₹1.5 lakhs to ₹6 lakhs. Living + Dining Area: ₹2 lakhs to ₹10 lakhs. Bathroom: ₹75,000 to ₹3 lakhs. Kids Bedroom: ₹1 lakh to ₹3 lakhs. These are indicative ranges — the actual cost depends on your specific requirements, materials chosen, and the scope of work.',
      },
      {
        type: 'heading',
        text: 'What Affects the Cost?',
      },
      {
        type: 'paragraph',
        text: 'Several factors influence the final cost of an interior design project: Quality of materials (the biggest variable), Size of the space, Complexity of the design, Brand of hardware and fittings, Custom vs. standard furniture, Structural changes required, and the experience level of your interior design firm.',
      },
      {
        type: 'heading',
        text: 'Tips to Manage Your Budget',
      },
      {
        type: 'paragraph',
        text: 'Prioritise the rooms you use most (kitchen and master bedroom). Invest in good hardware even if you save on other areas — hardware affects daily usability. Get a detailed quotation with material specifications before signing any contract. Include a 10–15% contingency buffer for unexpected costs. Choose a firm that offers end-to-end execution to avoid coordination issues.',
      },
      {
        type: 'cta',
        heading: 'Get a Free Cost Estimate',
        text: 'Use our online estimator tool or contact IHS Imperial Home Space for a detailed, transparent quotation for your Hyderabad home interior project.',
      },
    ],
  },

  'living-room-design-ideas-2025': {
    title: '8 Living Room Design Ideas for Modern Indian Apartments',
    category: 'Living Room',
    date: 'February 5, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1400&q=80',
    content: [
      {
        type: 'intro',
        text: 'The living room is the heart of every Indian home — it\'s where families gather, guests are entertained, and daily life unfolds. Designing a living room that is beautiful, functional, and personal requires careful thought. Here are 8 design ideas that our clients have loved in 2025.',
      },
      {
        type: 'heading',
        text: '1. Statement TV Unit with Fluted Panels',
      },
      {
        type: 'paragraph',
        text: 'The TV wall is the focal point of most Indian living rooms. In 2025, the most popular treatment is a full-wall unit featuring a combination of fluted wood panels, open display shelving, and integrated storage cabinets. The TV sits within a recessed alcove, flanked by warm wood panels and soft lighting.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80',
        caption: 'Modern Indian living room with statement TV unit — IHS Imperial Home Space',
      },
      {
        type: 'heading',
        text: '2. Open Plan Living + Dining',
      },
      {
        type: 'paragraph',
        text: 'Removing the wall between the living room and dining area creates a more spacious, connected feel — particularly in smaller apartments. The two zones are defined using different flooring materials, a change in ceiling design, or a half-wall / kitchen island rather than a full partition wall.',
      },
      {
        type: 'heading',
        text: '3. Warm Earthy Colour Palettes',
      },
      {
        type: 'paragraph',
        text: 'Cool greys are out — warm terracotta, warm beige, dusty sage, and caramel tones are dominating Indian living rooms in 2025. These earthy colours create a grounded, welcoming atmosphere and pair beautifully with natural wood furniture and woven textures.',
      },
      {
        type: 'heading',
        text: '4. Multifunctional Furniture',
      },
      {
        type: 'paragraph',
        text: 'In urban Hyderabad apartments, space efficiency is critical. Sofa beds, coffee tables with storage, ottomans that double as seating and storage, and modular sofa systems that can be reconfigured are all popular choices that maximise the utility of limited living room space.',
      },
      {
        type: 'heading',
        text: '5. Biophilic Elements',
      },
      {
        type: 'paragraph',
        text: 'Indoor plants have moved from an afterthought to a central design element. Statement plants like fiddle leaf figs, monstera, and bird of paradise add life, colour, and air-purifying qualities to the living room. A living plant wall or a collection of terracotta pots styled on open shelving can become a stunning design feature.',
      },
      {
        type: 'heading',
        text: '6. Layered Lighting Design',
      },
      {
        type: 'paragraph',
        text: 'Great living room lighting has three layers: ambient (overall illumination from ceiling lights or cove lighting), task (reading lamps, accent spotlights), and decorative (pendant lights, floor lamps, candles). The ability to control each layer independently — ideally with a smart dimmer system — gives you complete control over the room\'s atmosphere.',
      },
      {
        type: 'heading',
        text: '7. Handcrafted & Artisanal Accessories',
      },
      {
        type: 'paragraph',
        text: 'Mass-produced accessories are being replaced by handcrafted, artisanal pieces that tell a story. Handmade pottery, woven baskets, handblock-printed cushion covers, and locally sourced artwork add authenticity and character to the modern Indian living room.',
      },
      {
        type: 'heading',
        text: '8. False Ceiling with Indirect Lighting',
      },
      {
        type: 'paragraph',
        text: 'A well-designed false ceiling with concealed cove lighting is the most transformative upgrade you can make to an Indian living room. It instantly adds height, elegance, and a sense of luxury. Combined with recessed spotlights and a statement pendant or chandelier, it creates a layered lighting scheme that works perfectly for both day and evening entertaining.',
      },
      {
        type: 'cta',
        heading: 'Redesign Your Living Room',
        text: 'IHS Imperial Home Space designs beautiful, functional living rooms across Hyderabad. Book a free consultation with our design team today.',
      },
    ],
  },
}

const BlogPostPage = ({ slug }) => {
  const { navigate } = useRouter()
  const article = articles[slug]

  if (!article) {
    return (
      <div className="blogpost-not-found section container">
        <h2>Article not found</h2>
        <button className="btn-outline" onClick={() => navigate('blog')}>
          ← Back to Blog
        </button>
      </div>
    )
  }

  return (
    <>
      {/* Hero Banner */}
      <div className="blogpost-hero" style={{ backgroundImage: `url(${article.image})` }}>
        <div className="blogpost-hero-overlay" />
        <div className="blogpost-hero-content">
          <button className="blogpost-back" onClick={() => navigate('blog')}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Back to Blog
          </button>
          <span className="blogpost-category">{article.category}</span>
          <h1 className="blogpost-title">{article.title}</h1>
          <div className="blogpost-meta">
            <span>{article.date}</span>
            <span className="meta-dot">·</span>
            <span>{article.readTime}</span>
            <span className="meta-dot">·</span>
            <span>IHS Imperial Home Space</span>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <article className="blogpost-body section">
        <div className="blogpost-container">
          {article.content.map((block, i) => {
            if (block.type === 'intro') return (
              <p key={i} className="blogpost-intro">{block.text}</p>
            )
            if (block.type === 'heading') return (
              <h2 key={i} className="blogpost-heading">{block.text}</h2>
            )
            if (block.type === 'paragraph') return (
              <p key={i} className="blogpost-paragraph">{block.text}</p>
            )
            if (block.type === 'image') return (
              <figure key={i} className="blogpost-figure">
                <img src={block.src} alt={block.caption} loading="lazy" />
                <figcaption>{block.caption}</figcaption>
              </figure>
            )
            if (block.type === 'cta') return (
              <div key={i} className="blogpost-cta">
                <div className="blogpost-cta-inner">
                  <h3>{block.heading}</h3>
                  <p>{block.text}</p>
                  <button className="btn-primary" onClick={() => navigate('contact')}>
                    <span>Book a Free Consultation</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            )
            return null
          })}

          {/* Back to blog */}
          <div className="blogpost-footer">
            <button className="btn-outline" onClick={() => navigate('blog')}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>Back to All Articles</span>
            </button>
          </div>
        </div>
      </article>
    </>
  )
}

export default BlogPostPage
