import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      avatar: 'SJ',
      content: 'SaaSify has transformed our workflow completely. The intuitive interface and powerful features have increased our productivity by 40%. Highly recommended!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateLabs',
      avatar: 'MC',
      content: 'The analytics dashboard is incredible. We can now make data-driven decisions faster than ever. The customer support team is also top-notch.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Manager, GrowthCo',
      avatar: 'ER',
      content: 'Seamless integration with our existing tools and excellent scalability. SaaSify grows with our business needs perfectly.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Founder, StartupXYZ',
      avatar: 'DK',
      content: 'As a startup, we needed a solution that was both powerful and affordable. SaaSify delivered on both fronts. Game-changing platform!',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'Product Manager, EnterpriseCorp',
      avatar: 'LT',
      content: 'The enterprise features and security measures give us peace of mind. Our team collaboration has never been better.',
      rating: 5
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>What Our Customers Say</h2>
          <p>Join thousands of satisfied businesses using SaaSify</p>
        </motion.div>
        <div
          className="testimonials-carousel"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="carousel-btn prev" onClick={prevTestimonial}>
            <FaChevronLeft />
          </button>
          <div className="carousel-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="testimonial-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-content">{testimonials[currentIndex].content}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div className="author-info">
                    <h4>{testimonials[currentIndex].name}</h4>
                    <p>{testimonials[currentIndex].role}</p>
                  </div>
                </div>
                <div className="testimonial-rating">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <button className="carousel-btn next" onClick={nextTestimonial}>
            <FaChevronRight />
          </button>
        </div>
        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
