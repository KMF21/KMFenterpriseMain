'use client'

import React from 'react'
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'
import { Phone, Mail, MapPin } from 'lucide-react'
import NavbarSection from '../../components/NavbarSection'
import NavLanding from '../../components/landing/NavLanding'
import FooterSection from '../../components/FooterSection'

type Inputs = {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}

const inputClass =
  'w-full border border-black/10 rounded-md px-4 py-3 text-sm outline-none focus:border-brand-gold transition-colors'

// Same number as the agency's WhatsApp link in the footer.
const WHATSAPP_NUMBER = '2349110137795'

const Page = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const whatsappMessage = `KMF Enterprise Inquiry — ${data.subject}

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}

${data.message}`.trim()

    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`

    toast.success('Opening WhatsApp...', {
      position: 'top-right',
      autoClose: 2000,
      onClose: () => {
        window.open(whatsappLink, '_blank', 'noopener,noreferrer')
        reset()
      },
    })
  }

  return (
    <div className="pt-[76px]">
      <NavbarSection />
      <NavLanding props="Contact" />

      <section className="py-20 md:py-24">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10 grid lg:grid-cols-5 gap-14">
          <div className="lg:col-span-2">
            <h6 className="font-mono text-xs tracking-[0.16em] uppercase text-brand-goldDeep mb-3">
              Get in touch
            </h6>
            <h3 className="font-display font-medium text-[28px] md:text-[32px] leading-tight mb-8 text-brand-panel">
              Let&apos;s talk about what you&apos;re building
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-lg bg-brand-paper flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-brand-goldDeep" />
                </span>
                <div>
                  <p className="text-sm font-medium text-brand-panel">Address</p>
                  <p className="text-sm text-[#5C6459]">Abuja, Nigeria</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-lg bg-brand-paper flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-brand-goldDeep" />
                </span>
                <div>
                  <p className="text-sm font-medium text-brand-panel">Phone / WhatsApp</p>
                  <Link href="tel:+2349110137795" className="text-sm text-[#5C6459] hover:text-brand-goldDeep">
                    +234 911 013 7795
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-lg bg-brand-paper flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-brand-goldDeep" />
                </span>
                <div>
                  <p className="text-sm font-medium text-brand-panel">Email</p>
                  <Link href="mailto:info@kmfenterprise.ng" className="text-sm text-[#5C6459] hover:text-brand-goldDeep">
                    info@kmfenterprise.ng
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="lg:col-span-3 bg-brand-paper rounded-2xl p-8 md:p-10"
          >
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  {...register('name', { required: 'Name is required' })}
                  placeholder="Your name"
                  className={inputClass}
                />
                {errors.name && (
                  <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register('phone', { required: 'Phone is required' })}
                  placeholder="Phone number"
                  className={inputClass}
                />
                {errors.phone && (
                  <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <input
                {...register('email', { required: 'Email is required' })}
                placeholder="Email"
                className={inputClass}
              />
              {errors.email && (
                <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-4">
              <input
                {...register('subject', { required: 'Subject is required' })}
                placeholder="Subject"
                className={inputClass}
              />
              {errors.subject && (
                <p className="text-xs text-red-600 mt-1">{errors.subject.message}</p>
              )}
            </div>

            <div className="mb-6">
              <textarea
                {...register('message', { required: 'Message is required' })}
                placeholder="Message"
                rows={5}
                className={inputClass}
              />
              {errors.message && (
                <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-brand-gold text-brand-ink font-semibold text-sm px-7 py-3.5 rounded-md disabled:opacity-60"
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>
      </section>

      <FooterSection />
      <ToastContainer />
    </div>
  )
}

export default Page