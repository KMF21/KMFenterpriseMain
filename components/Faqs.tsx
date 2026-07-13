'use client'
import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

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

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-brand-paper" id="faqs">
      <div className="max-w-[820px] mx-auto px-6">
        <div className="text-center mb-12">
          <h6 className="font-mono text-xs tracking-[0.16em] uppercase text-brand-goldDeep mb-2">
            FAQs
          </h6>
          <h2 className="font-display font-medium text-[28px] text-brand-panel">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="bg-white border border-black/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 font-medium text-[15px] text-brand-panel">
                    <HelpCircle size={18} className="text-brand-goldDeep shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-brand-panel/50 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 pl-12 text-sm text-[#5C6459] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
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