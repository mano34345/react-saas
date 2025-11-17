import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaShieldAlt, FaChartLine, FaUsers, FaCog, FaCloud } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <FaRocket />,
      title: 'Lightning Fast',
      description: 'Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology stack.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee. Your data is protected with bank-level encryption.'
    },
    {
      icon: <FaChartLine />,
      title: 'Advanced Analytics',
      description: 'Get deep insights with comprehensive analytics and reporting tools to make data-driven decisions.'
    },
    {
      icon: <FaUsers />,
      title: 'Team Collaboration',
      description: 'Seamlessly collaborate with your team members with real-time updates and shared workspaces.'
    },
    {
      icon: <FaCog />,
      title: 'Customizable',
      description: 'Tailor the platform to your specific needs with extensive customization options and integrations.'
    },
    {
      icon: <FaCloud />,
      title: 'Cloud-Native',
      description: 'Built for the cloud with automatic scaling, backups, and disaster recovery capabilities.'
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
    <section id="features" className="features">
      <div className="features-container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Powerful Features</h2>
          <p>Everything you need to streamline your workflow and boost productivity</p>
        </motion.div>
        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
