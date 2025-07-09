import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What are the benefits of using a cheap web hosting provider in India?',
    answer: 'Benefits include cost-effectiveness, sufficient resources for small sites, local support, and faster load times for local users.',
  },
  {
    question: 'What should I consider when selecting a cheap web hosting provider?',
    answer: 'Look for uptime guarantees, customer support, features, scalability, and customer reviews.',
  },
  {
    question: 'How do I choose the best cheap web hosting provider in India?',
    answer: 'Compare features, pricing, user reviews, and try to get a free trial or money-back guarantee.',
  },
  {
    question: 'What are the most important features of a cheap web hosting plan?',
    answer: 'Key features include uptime, storage, bandwidth, customer support, control panel, and SSL.',
  },
  {
    question: 'Web Hosting vs Domain Registration',
    answer: 'Web hosting stores your website files, while domain registration is your website\'s address.',
  },
  {
    question: 'Why should I invest in a dedicated server in India?',
    answer: 'A dedicated server offers better performance, control, security, and is ideal for high-traffic sites.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-center text-cyan-600 text-lg font-medium">Do You Have</h2>
      <h1 className="text-center text-3xl font-bold mb-8">Any Questions?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-sm bg-white">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center hover:text-cyan-600 transition-colors"
            >
              <span>{faq.question}</span>
              <ChevronDown 
                className={`w-5 h-5 text-cyan-600 transition-transform duration-200 flex-shrink-0 ml-2 ${openIndex === index ? 'rotate-180' : ''}`}
              />
            </button>
            {openIndex === index && (
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-base text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;