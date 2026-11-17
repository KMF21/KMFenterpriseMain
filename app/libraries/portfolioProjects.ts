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
    slug: 'practical-skills-assessment-portal',
    tag: 'Institutional platform',
    title: 'Practical Skills Assessment Portal',
    description:
      'A role-based assessment system for community health students — Admin and Clinical Skills Assessor roles, draw-based practical exams across 15 clinical skills, per-exam scoring, and chapter-based project grading.',
    stack: ['Next.js', 'Supabase', 'Clerk'],
    href: 'https://psap-phi.vercel.app',
  },
  {
    slug: 'school-management-portal',
    tag: 'Institutional platform',
    title: 'KMF Schools — School Management Portal',
    description:
      'A full school management system spanning nursery through senior secondary — student records, staff management, subjects, and a unified report-card engine, built to be replicated across schools.',
    stack: ['Next.js', 'Supabase'],
    href: 'https://kmf-schools.vercel.app',
  },
  {
    slug: 'tsu-ipcm',
    tag: 'Institutional platform',
    title: 'TSU Institute of Peace & Conflict Management',
    description:
      "A website and student registration platform for Taraba State University's newly established peace institute — programme information, applications, and fee provisioning for certificate programmes.",
    stack: ['Next.js', 'Supabase'],
    href: 'https://ipcm.tsucpgs.com.ng',
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