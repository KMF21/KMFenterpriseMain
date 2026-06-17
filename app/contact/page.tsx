'use client'

import React from 'react'
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

type Inputs = {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}

const Page = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const mailBody = `
KMF ENTERPRISE CONTACT FORM SUBMISSION

Full Name: ${data.name}
Email Address: ${data.email}
Phone Number: ${data.phone}
Subject: ${data.subject}

Message:
${data.message}

---
This message was sent via the KMF Enterprise website contact form.
    `.trim()

    const mailtoLink = `mailto:info@kmfenterprise.ng?subject=${encodeURIComponent(
      `KMF Enterprise Inquiry - ${data.subject}`
    )}&body=${encodeURIComponent(mailBody)}`

    toast.success('Opening your email app...', {
      position: 'top-right',
      autoClose: 3000,
      onClose: () => {
        window.location.href = mailtoLink
        reset()
      },
    })
  }

  return (
    <div>
      {/* Breadcrumb */}
      <section className="w3l-about-breadcrumb text-left">
        <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
          <div className="container">
            <h2 className="title">Contact</h2>
            <ul className="breadcrumbs-custom-path mt-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="active">
                <span className="fa fa-arrow-right mx-2" aria-hidden="true" />
                Contact
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div className="contact-form py-5" id="contact">
        <div className="container py-lg-5 py-md-4">
          <h3 className="hny-title mb-lg-5 mb-4">Get in touch</h3>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <input type="hidden" name="_captcha" value="false" />

            <div className="main-input">
              <input
                {...register('name', { required: 'Name is required' })}
                placeholder="Your Name"
              />
              {errors.name && <p>{errors.name.message}</p>}

              <input
                {...register('phone', { required: 'Phone is required' })}
                placeholder="Phone Number"
              />
              {errors.phone && <p>{errors.phone.message}</p>}

              <input
                {...register('email', { required: 'Email is required' })}
                placeholder="Email"
              />
              {errors.email && <p>{errors.email.message}</p>}

              <input
                {...register('subject', { required: 'Subject is required' })}
                placeholder="Subject"
              />
              {errors.subject && <p>{errors.subject.message}</p>}
            </div>

            <textarea
              {...register('message', { required: 'Message is required' })}
              placeholder="Message"
            />
            {errors.message && <p>{errors.message.message}</p>}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  )
}

export default Page
