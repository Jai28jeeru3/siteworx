import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What are the benefits of using a cheap web hosting provider in India?',
    answer: (
      <span>
        Choosing the best and cheap web hosting provider is one of the most crucial steps to successfully launch your business online. There are multiple benefits of using the services of cheap web hosting providers in India. Significantly, if your business is offering services in India, using a cheap web hosting provider in India is the best decision.<br /><br />
        <strong>Benefits of using a cheap web hosting provider in India:</strong>
        <ul className="list-disc pl-6 mt-2">
          <li>Low-Cost Plans</li>
          <li>Flexible Payment Options</li>
          <li>Money-Back Guarantee</li>
          <li>Reliability</li>
          <li>High Uptime Guarantee</li>
          <li>Fast Server Response Time</li>
          <li>Secure Servers</li>
        </ul>
      </span>
    ),
  },
  {
    question: 'What should I consider when selecting a cheap web hosting provider?',
    answer: (
      <span>
        Selecting a web host is one of the important decisions if you want to build the right foundation for your business’s website. It is only with a reliable web hosting service that you can build an effective online presence. Selecting a hosting plan can be really confusing when you have multiple web hosting providers available in the market that are promising awesome features at cheap prices. That is the reason, we recommend having clear expectations before beginning this search process. If you choose the wrong web hosting provider, you may end up in unnecessary troubles and expenses.<br /><br />
        Things to consider when selecting a cheap web hosting provider can include your objectives and budget. It must also include your website’s security needs, 24/7 support and features like uptime guarantee, server performance, efficient response time, intuitive dashboard and many more, needed to set up and maintain your website.
      </span>
    ),
  },
  {
  question: 'How do I choose the best cheap web hosting provider in India?',
  answer: (
    <span>
      There are several web hosting providers in the market offering cheap web hosting services. This makes finding a cheap web hosting provider in India quite easy but finding one that offers the best hosting services in India isn’t. However, there are some criterias to keep in mind when choosing the best one.<br /><br />
      To help ease your search process, we list below these criteria:
      <ul className="list-disc pl-6 mt-2">
        <li>Determine Your Hosting Needs</li>
        <li>Website Size and Traffic</li>
        <li>Technical Requirements</li>
        <li>Scalability</li>
        <li>Compare Plans and Pricing</li>
        <li>Features and Add-Ons</li>
        <li>Pricing and Payment Options</li>
        <li>Contract Length and Renewal</li>
      </ul>
      Always look out for these criterias and choose the best web host for your business’s online website. Once you find a reliable and cheap web hosting provider that meets all your requirements, you are one step closer to launching your business online. You can also look out for SiteWorx’s range of web hosting services.
    </span>
  ),
},
  {
    question: 'What are the most important features of a cheap web hosting plan?',
    answer:( <span>
  Millions of new businesses are appearing online with each passing day. If you are also planning to expand your business by leveraging the potential of the Internet you can affordably do so with a web hosting company. There are a lot of things service providers promise to their customers to help them get the best hosting experience.<br /><br />
  Here are some of the most important features of a cheap web hosting plan that you can expect with a web hosting company:
  <ul className="list-disc pl-6 mt-2">
    <li>Optimal Server Performance</li>
    <li>99.9% Uptime Guarantee</li>
    <li>Quick Server Response Time</li>
    <li>Best Server Location</li>
    <li>24/7 Availability</li>
    <li>Bespoke Customer Support</li>
    <li>Multiple Support Channels</li>
    <li>Advanced Security Features</li>
  </ul>
  <br />
  Our goal at SiteWorx is to offer all these in our web hosting services. As a result, our customers get fast services with important features and 99.9% uptime at cheap prices.
</span>
    ),
  },
  {
    question: 'Web Hosting vs Domain Registration',
    answer: ( <span>
 Web Hosting and Domain Registration are the segments that work hand-in-hand. This is why it is vital to understand the difference between them if you are planning to build a successful website for your business.
 <h1>Differences between Hosting and Domain</h1>
 <p>One of the main differences between web hosting and domain registration is that: </p>
  <ul className="list-disc pl-6 mt-2">
    <li>Hosting is an engine powering your website. It is also the place that stores all your website’s files.
    </li>
    <li>Domain is more of a permanent address that visitors use to find websites in the online world.
    </li>
    </ul>
  <br />
  To successfully run a website, you will need both hosting and domain in place. You can not build your website without a domain registration although you can have a domain before building your website.
</span>
    ),
},
  {
    question: 'Why should I invest in a dedicated server in India?',
    answer: ( <span>
The first suggestion every business owner gets is to choose shared hosting as it is cheap. But with a cheap price comes a few things that you have to compromise. You will be sharing this server with thousands of other businesses. This also compromises security. Whether you decide to build a small or large website for your business, data security is always one of its crucial aspects. And if you have important client information on your server, you need to have high security levels for your website.

With dedicated server hosting in place, it becomes easy for your website to prevent possible malware and data breaches. As the server is priced comparatively high you will be getting better resources. You will also be the sole user on this server.

Considering the benefits that your host will offer if you choose a dedicated server, you shouldn’t have any doubts on why to invest in a dedicated server in India.

    </span>


    ),
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