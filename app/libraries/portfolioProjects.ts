export type Project = {
  slug: string
  tag: string
  title: string
  description: string
  stack: string[]
  href: string
  image?: string // real screenshot path
  imageMobile?: string // optional companion mobile screenshot
  // 'device'    = image already has a white-backed laptop/phone mockup baked in
  // 'flat'      = plain webpage screenshot, needs a browser-chrome wrapper
  // 'full-bleed'= a fully composed marketing graphic (own background/gradient)
  imageStyle?: 'device' | 'flat' | 'full-bleed'
  featured?: boolean
  stats?: { label: string; value: string }[]
}

export const portfolioProjects: Project[] = [
  {
    slug: 'tsu-screening-portal',
    tag: 'Institutional platform',
    title: 'TSU Postgraduate Screening Portal',
    description:
      "A full application-to-exam pipeline for Taraba State University's College of Postgraduate Studies — account creation, ₦15,000 fee payment, programme selection, and a 50-question MCQ exam, handling 1,000+ applicants without a single manual touchpoint.",
    stack: ['Next.js 14', 'Supabase', 'Clerk', 'Paystack'],
    href: 'https://tsucpgs.com.ng',
    featured: true,
    image: '/assets/images/portfolio/tsu-screening-desktop.png',
    imageMobile: '/assets/images/portfolio/tsu-screening-mobile.png',
    imageStyle: 'device',
    stats: [
      { label: 'Applicants', value: '1,000+' },
      { label: 'Exam questions', value: '50' },
      { label: 'Step flow', value: '4' },
    ],
  },
  {
    slug: 'tsu-research-repository',
    tag: 'Digital repository',
    title: 'D.D.S Library — TSU Digital Research Repository',
    description:
      'Full-text searchable institutional archive with real faculty and programme data, serving 1,700+ readers across 37 departments, built with row-level security for controlled access.',
    stack: ['Next.js', 'Supabase', 'RLS'],
    href: 'https://tsu-library.vercel.app',
    image: '/assets/images/portfolio/tsu-repository.png',
    imageStyle: 'device',
  },
  {
    slug: 'rotary-jalingo-prestige',
    tag: 'Client website',
    title: 'Rotary Club of Jalingo Prestige',
    description:
      "A 7-page site for a Rotary chapter — leadership, initiatives, and event coverage, designed alongside the club's own visual identity.",
    stack: ['Next.js 14', 'Tailwind', 'TypeScript'],
    href: '#',
    image: '/assets/images/portfolio/rotary-jalingo.png',
    imageStyle: 'flat',
  },
  {
    slug: 'kmf-assist',
    tag: 'AI product',
    title: 'KMF-Assist',
    description:
      'A customizable AI-powered customer support agent with shareable links and real-time conversation management.',
    stack: ['Next.js', 'AI SDK'],
    href: '#',
    image: '/assets/images/g1b.jpg',
    imageStyle: 'full-bleed',
  },
  {
    slug: 'kmf-ecommerce',
    tag: 'E-commerce',
    title: 'KMF-Ecommerce',
    description:
      'A storefront and backend for custom print-on-demand retail — product catalogue, checkout, and order management.',
    stack: ['Next.js', 'Clerk'],
    href: '#',
    image: '/assets/images/g1bb.jpg',
    imageStyle: 'full-bleed',
  },
]

export const featuredProject = portfolioProjects.find((p) => p.featured)!
export const secondaryProjects = portfolioProjects.filter((p) => !p.featured)