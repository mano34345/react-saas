import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import './Pricing.css';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Basic',
      monthlyPrice: 29,
      yearlyPrice: 290,
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 5 team members',
        '10GB storage',
        'Basic analytics',
        'Email support',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Pro',
      monthlyPrice: 79,
      yearlyPrice: 790,
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 team members',
        '100GB storage',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Custom integrations',
        'Advanced security'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited team members',
        'Unlimited storage',
        'Enterprise analytics',
        '24/7 phone support',
        'API access',
        'Custom integrations',
        'Advanced security',
        'Dedicated account manager',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="pricing" className="pricing">
      <div className="pricing-container">
        <motion.div
          className="pricing-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Choose Your Plan</h2>
          <p>Flexible pricing options to fit your business needs</p>
          <div className="pricing-toggle">
            <span className={!isYearly ? 'active' : ''}>Monthly</span>
            <button
              className={`toggle-switch ${isYearly ? 'yearly' : ''}`}
              onClick={() => setIsYearly(!isYearly)}
            >
              <div className="toggle-slider"></div>
            </button>
            <span className={isYearly ? 'active' : ''}>Yearly</span>
            <span className="discount">Save 20%</span>
          </div>
        </motion.div>
        <motion.div
          className="pricing-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="pricing-card-header">
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
              </div>
              <div className="pricing-card-price">
                <span className="currency">$</span>
                <span className="amount">
                  {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="period">/{isYearly ? 'year' : 'month'}</span>
              </div>
              <ul className="pricing-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <FaCheck className="check-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                className="pricing-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
