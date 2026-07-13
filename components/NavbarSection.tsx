'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

function NavbarSection() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow ${
        scrolled ? 'shadow-[0_2px_20px_rgba(26,36,26,0.08)]' : ''
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <nav className="flex items-center justify-between h-[76px]">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/assets/images/logo.png"
              alt="KMF Enterprise"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="font-display font-medium text-lg text-brand-panel">
              KMF<span className="text-brand-gold">ENTERPRISE</span>
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-brand-gold'
                      : 'text-brand-panel/80 hover:text-brand-gold'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link
              href="https://calendly.com/ikoojojoseph817/30min"
              target="_blank"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-ink text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-goldDeep transition-colors"
            >
              Book a call
            </Link>
          </div>

          <button
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md bg-brand-panel text-white"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-white border-t border-black/10 ${
          menuOpen ? 'max-h-[420px]' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block py-2.5 text-[15px] font-medium ${
                  pathname === item.href ? 'text-brand-gold' : 'text-brand-panel'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="https://calendly.com/ikoojojoseph817/30min"
              target="_blank"
              className="block text-center bg-brand-gold text-brand-ink text-sm font-semibold px-5 py-3 rounded-md"
            >
              Book a call
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default NavbarSection