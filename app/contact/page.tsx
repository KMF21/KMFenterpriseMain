'use client'

import React from 'react'
import Navbar from '@/components/NavbarSection'
import NavLanding from '@/components/landing/NavLanding'
import Link from 'next/link'
import Footer from '@/components/FooterSection'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type Inputs = {
  name: string
  email: string
  website?: string
  story: string
  services: string
  project: string
}

function Page() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const mailBody = `
Hi, my name is ${data.name}.

Email: ${data.email}
Website: ${data.website ?? 'N/A'}

Story:
${data.story}

Services interested in:
${data.services}

Project details:
${data.project}
    `.trim()

    const mailtoLink = `mailto:ikoojojoseph817@gmail.com?subject=Contact Form Submission from ${encodeURIComponent(
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
      <Navbar />
      <NavLanding props="Contact Us" />

      {/* inner-page */}
      <div className="map-iframe">
        <div style={{ width: '100%' }}>
          <iframe
            width="100%"
            height={400}
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Abuja,%20FCT,%20Nigeria+(KMFenterprice)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            title="Location Map"
          />
        </div>

        {/* contacts */}
        <section className="w3l-contact-2 py-5" id="contact">
          <div className="container py-lg-4 py-md-3 py-2">
            <div className="title-content text-center">
              <h6 className="title-subw3hny mb-1">Get in touch</h6>
              <h3 className="title-w3l mb-5">Apply to work with us</h3>
            </div>
            <div className="contact-grids d-grid mt-5 pt-lg-3">
              <div className="contact-left">
                <div className="cont-details">
                  <div className="cont-top margin-up">
                    <div className="cont-left text-center">
                      <span className="fas fa-map-marker-alt" />
                    </div>
                    <div className="cont-right">
                      <h6>Our head office address:</h6>
                      <p>Abuja, Nigeria</p>
                    </div>
                  </div>
                  <div className="cont-top margin-up">
                    <div className="cont-left text-center">
                      <span className="fas fa-phone-alt" />
                    </div>
                    <div className="cont-right">
                      <h6>Call for help :</h6>
                      <p>
                        <Link href="tel:+2349067831050">+234 911 013 7795</Link>
                      </p>
                      <p>
                        <Link href="tel:+2348163910146">+234 911 013 7795</Link>
                      </p>
                    </div>
                  </div>
                  <div className="cont-top margin-up">
                    <div className="cont-left text-center">
                      <span className="far fa-envelope" />
                    </div>
                    <div className="cont-right">
                      <h6>Mail us:</h6>
                      <p>
                        <Link href="mailto:support@mail.com" className="mail">
                          support@mail.com
                        </Link>
                      </p>
                      <p>
                        <Link href="mailto:contact@mail.com" className="mail">
                          contact@mail.com
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-right">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="signin-form"
                  noValidate
                >
                  {/* Optional Hidden Fields */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://yourwebsite.com/thank-you"
                  />

                  <div className="input-grids">
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      placeholder="Your Name*"
                      className="contact-input"
                      aria-invalid={errors.name ? 'true' : 'false'}
                    />
                    {errors.name && (
                      <p className="text-danger small mt-1">
                        {errors.name.message}
                      </p>
                    )}

                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      type="email"
                      placeholder="Your Email*"
                      className="contact-input"
                      aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email && (
                      <p className="text-danger small mt-1">
                        {errors.email.message}
                      </p>
                    )}

                    <input
                      {...register('website')}
                      type="text"
                      placeholder="Your Current Website (if you have one)"
                      className="contact-input"
                      aria-invalid={errors.website ? 'true' : 'false'}
                    />
                    {errors.website && (
                      <p className="text-danger small mt-1">
                        {errors.website.message}
                      </p>
                    )}
                  </div>

                  <div className="form-input">
                    <textarea
                      {...register('story', { required: 'Story is required' })}
                      placeholder="Tell us your story, what does your business do and how did you get here?*"
                      aria-invalid={errors.story ? 'true' : 'false'}
                      className="contact-input"
                    />
                    {errors.story && (
                      <p className="text-danger small mt-1">
                        {errors.story.message}
                      </p>
                    )}
                  </div>
                  <div className="form-input">
                    <textarea
                      {...register('services', {
                        required:
                          'Please specify the services you are interested in',
                      })}
                      placeholder="Which of our services are you interested in?*"
                      aria-invalid={errors.services ? 'true' : 'false'}
                      className="contact-input"
                    />
                    {errors.services && (
                      <p className="text-danger small mt-1">
                        {errors.services.message}
                      </p>
                    )}
                  </div>
                  <div className="form-input">
                    <textarea
                      {...register('project', {
                        required: 'Please tell us about your project and goals',
                      })}
                      placeholder="Tell us about your project — what problems are you hoping to solve and what does success look like for your business?*"
                      aria-invalid={errors.project ? 'true' : 'false'}
                      className="contact-input"
                    />
                    {errors.project && (
                      <p className="text-danger small mt-1">
                        {errors.project.message}
                      </p>
                    )}
                  </div>
                  <div className="d-flex justify-content-end ">
                    <button
                      className="btn btn-style btn-primary d-flex align-items-center"
                      type="submit"
                      disabled={isSubmitting}
                      aria-label="Send Message"
                    >
                      {isSubmitting && (
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                      )}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* /contact-form-2 */}
        {/* //contacts */}

        <Footer />
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  )
}

export default Page
