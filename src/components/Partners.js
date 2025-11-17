import React from 'react';
import { motion } from 'framer-motion';
import './Partners.css';

const Partners = () => {
  const partners = [
    'Google', 'Microsoft', 'Amazon', 'Apple', 'Meta', 'Netflix',
    'Tesla', 'Spotify', 'Adobe', 'Salesforce', 'Slack', 'Zoom'
  ];

  return (
    <section className="partners">
      <div className="partners-container">
        <motion.div
          className="partners-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Trusted by Industry Leaders</h3>
        </motion.div>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="partner-logo"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
