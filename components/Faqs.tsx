import React from 'react'

const faqData = [
  {
    question: 'What is custom software development?',
    answer:
      'Custom software development refers to the process of designing, creating, deploying, and maintaining software tailored specifically to meet the unique needs and requirements of a business or organization.',
  },
  {
    question:
      'Why should I choose custom software over off-the-shelf solutions?',
    answer:
      'Custom software offers several advantages, including tailored functionality, scalability, and integration with existing systems, ensuring it meets your specific business needs unlike generic off-the-shelf solutions.',
  },
  {
    question: 'How long does it take to develop custom software?',
    answer:
      'The timeline for custom software development varies based on the complexity and scope of the project. Typically, it can take anywhere from a few weeks to several months. We provide a detailed timeline during the discovery phase.',
  },
  {
    question: 'What technologies do you use for custom software development?',
    answer:
      'We utilize a wide range of technologies, including but not limited to Java, .NET, PHP, Python, React, Angular, and various database systems, depending on the specific requirements and objectives of your project.',
  },
  {
    question: 'How do you ensure the quality of the software?',
    answer:
      'We implement a robust quality assurance process that includes continuous testing throughout the development cycle, user feedback, and performance evaluation to ensure the software is functional, reliable, and meets your expectations.',
  },
  {
    question: 'Can you integrate custom software with existing systems?',
    answer:
      'Yes, we specialize in integrating custom software with your existing systems and third-party applications. Our team ensures smooth data flow and operational efficiency through effective integration strategies.',
  },
  {
    question: 'What kind of support do you offer after deployment?',
    answer:
      'We offer ongoing maintenance, updates, bug fixes, and support services to ensure your software continues to run smoothly and adapts to evolving business needs.',
  },
]

const QuestionIcon = () => (
  <svg
    className="bi bi-question-circle-fill text-primary me-2"
    fill="currentColor"
    height={24}
    width={24}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
  </svg>
)

const Faqs = () => {
  return (
    <section className="py-5" id="faqs">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="text-uppercase text-muted">FAQs</h6>
          <h2 className="fw-bold">Frequently Asked Questions</h2>
        </div>

        <div className="accordion" id="faqAccordion">
          {faqData.map((faq, index) => {
            const headingId = `faqHeading${index}`
            const collapseId = `faqCollapse${index}`
            const isOpen = index === 0 // open first item by default

            return (
              <div className="accordion-item mb-3" key={index}>
                <h2 className="accordion-header" id={headingId}>
                  <button
                    className={`accordion-button ${!isOpen ? 'collapsed' : ''}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded={isOpen}
                    aria-controls={collapseId}
                  >
                    <QuestionIcon />
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={collapseId}
                  className={`accordion-collapse collapse ${
                    isOpen ? 'show' : ''
                  }`}
                  aria-labelledby={headingId}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faqs
