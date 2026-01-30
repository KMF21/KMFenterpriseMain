'use client'

import React from 'react'
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type Inputs = {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}

const page = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const mailBody = `
Subject interested in:
${data.subject}

Hi, my name is ${data.name}.

Email: ${data.email}
Phone number: ${data.phone}

Message:
${data.message}
    `.trim()

    const mailtoLink = `mailto:realfasd2@gmail.com?subject=Contact Form Submission from ${encodeURIComponent(
      data.name
    )}&body=${encodeURIComponent(mailBody)}`

    toast.success('Redirecting to your email app to send the message!', {
      position: 'top-right',
      autoClose: 4000,
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
                <span className="fa fa-arrow-right mx-2" aria-hidden="true" />{' '}
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
          <div className="contacts12-main mb-5">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="contact-form"
              noValidate
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://yourwebsite.com/thank-you"
              />

              <div className="main-input">
                <div className="d-grid">
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    placeholder="Your Name"
                    className="contact-input"
                    aria-invalid={errors.name ? 'true' : 'false'}
                  />
                  {errors.name && (
                    <p className="text-danger small mt-1">
                      {errors.name.message}
                    </p>
                  )}

                  <input
                    {...register('phone', {
                      required: 'Phone number is required',
                    })}
                    type="tel"
                    placeholder="Phone Number"
                    className="contact-input"
                    aria-invalid={errors.phone ? 'true' : 'false'}
                  />
                  {errors.phone && (
                    <p className="text-danger small mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="d-grid">
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    type="email"
                    placeholder="Your Email"
                    className="contact-input"
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email && (
                    <p className="text-danger small mt-1">
                      {errors.email.message}
                    </p>
                  )}

                  <input
                    {...register('subject', {
                      required: 'Subject is required',
                    })}
                    type="text"
                    placeholder="Subject"
                    className="contact-input"
                    aria-invalid={errors.subject ? 'true' : 'false'}
                  />
                  {errors.subject && (
                    <p className="text-danger small mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="form-input">
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  placeholder="Type your message here"
                  className="contact-textarea"
                  aria-invalid={errors.message ? 'true' : 'false'}
                />
                {errors.message && (
                  <p className="text-danger small mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="btn btn-style btn-contact"
                  disabled={isSubmitting}
                >
                  {isSubmitting && (
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  )}
                  {isSubmitting ? 'Submitting...' : 'Submit Now'}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="row pt-lg-4">
            <div className="col-md-12">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="contact-address">
                    <ul>
                      <li className="icon-color">
                        <span className="fa fa-map-marker" />{' '}
                        <span>
                          Plot 48 Tungan Maje Extension,
                          <br />
                          Abuja.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                  <div className="contact-address">
                    <ul>
                      <li className="icon-color">
                        <span className="fa fa-phone" />{' '}
                        <span>
                          <Link href="tel:+2348059612526">
                            +(234) 805 961 2526
                          </Link>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                  <div className="contact-address">
                    <ul>
                      <li className="icon-color">
                        <span className="fa fa-mail-reply" />{' '}
                        <span>
                          <Link href="mailto:realfasd2@gmail.com">
                            realfasd2@gmail.com
                          </Link>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="maphny">
          <iframe
            width="100%"
            height={400}
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Abuja,%20FCT,%20Nigeria+(FASD)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>

      <ToastContainer />
    </div>
  )
}

export default page
