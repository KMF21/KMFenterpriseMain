import React from 'react'
import Link from 'next/link'
import { ChevronsRight } from 'lucide-react'

function NavLanding({ props }: { props: string }) {
  return (
    <div className="bg-brand-panel text-white py-14">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-display font-medium text-3xl">{props}</h2>
          <p className="text-sm text-[#A9B3A4] mt-2">
            The unique solutions for your business
          </p>
        </div>
        <ul className="flex items-center gap-2 text-sm text-[#A9B3A4]">
          <li>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
          </li>
          <li className="flex items-center gap-2 text-white">
            <ChevronsRight size={14} />
            {props}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavLanding