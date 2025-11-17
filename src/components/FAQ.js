import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './FAQ.css';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const faqs = [
    {
      question: 'What is SaaSify and how does it work?',
      answer: 'SaaSify is a comprehensive business management platform that streamlines operations, enhances productivity, and provides powerful analytics. It works by integrating all your business tools into a single, intuitive dashboard with real-time collaboration features.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial with full access to all Pro features. No credit card required to get started. You can upgrade, downgrade, or cancel at any time during the trial period.'
    },
    {
      question: 'Can I integrate SaaSify with my existing tools?',
      answer: 'Absolutely! SaaSify supports over 100+ integrations including Slack, Google Workspace, Microsoft Office 365, Salesforce, and many more. Our API also allows for custom integrations.'
    },
    {
      question: 'How secure is my data?',
      answer: 'Security is our top priority. We use bank-level 256-bit SSL encryption, regular security audits, and comply with SOC 2, GDPR, and HIPAA standards. Your data is backed up multiple times daily.'
    },
    {
      question: 'What kind of customer support do you offer?',
      answer: 'We provide 24/7 customer support through multiple channels: live chat, email, phone, and comprehensive documentation. Pro and Enterprise plans include priority support and dedicated account managers.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your data remains accessible for 30 days after cancellation in case you change your mind.'
    }
  ];

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about SaaSify</p>
        </motion.div>
        <motion.div
          className="faq-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item"
              variants={itemVariants}
            >
              <button
                className="faq-question"
                onClick={() => toggleItem(index)}
              >
                <span>{faq.question}</span>
                {openItems.has(index) ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <motion.div
                className="faq-answer"
                initial={false}
                animate={{
                  height: openItems.has(index) ? 'auto' : 0,
                  opacity: openItems.has(index) ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <p>{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
