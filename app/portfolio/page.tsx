import FooterSection from '@/components/FooterSection'
import NavLanding from '@/components/landing/NavLanding'
import NavbarSection from '@/components/NavbarSection'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <>
      <NavbarSection />
      <NavLanding props="Portfolio" />
      <div
        style={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          🚧 Under Development 🚧
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#555' }}>
          This portfolio page is currently being built. Please check back soon!
        </p>
        <div className="w3l-buttons d-sm-flex justify-content-end mt-4">
          <Link href="/home" className="btn btn-style btn-primary ms-sm-3">
            <i className="fas fa-arrow-left ms-lg-4 ms-2 " /> {''}Back To Home
          </Link>
        </div>
      </div>
      <FooterSection />
    </>
  )
}

export default Page
