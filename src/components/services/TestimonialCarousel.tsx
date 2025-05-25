import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCarousel: React.FC = () => {
  const testimonial = {
    quote: "Ballast Financial transformed our financial operations. Their expertise and guidance have been invaluable as we've scaled.",
    author: "Sarah Chen",
    title: "CEO, TechStart Inc."
  };

  return (
    <section className="py-20 bg-secondary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                <div
                  className="w-full h-full rounded-full bg-[url('/ballast-brand-background.svg')] bg-cover bg-center"
                  aria-hidden="true"
                />
              </div>
              <div>
                <p className="text-xl md:text-2xl italic text-primary-500 mb-6">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-bold text-primary-500">{testimonial.author}</p>
                  <p className="text-primary-500/80">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
