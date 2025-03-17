'use client';

import { useState } from 'react';

export default function FaqSection() {
  const faqs = [
    {
      question: "What services do you provide?",
      answer: "We offer a comprehensive range of services including web development, mobile app development, UI/UX design, cloud solutions, data analytics, and cybersecurity."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on scope and complexity. We provide detailed estimates after initial consultation."
    },
    {
      question: "What is your development process?",
      answer: "Our process includes requirements gathering, planning, design, development, testing, and deployment, with regular client communication throughout."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          FREQUENTLY ASKED QUESTIONS
          <span className="ml-2 inline-block w-2 h-2 bg-orange-500"></span>
        </h2>
        
        <div className="space-y-4 max-w-3xl">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-800 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
