import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import Button from '../components/common/Button';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About | Ballast Financial';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700 opacity-95" />
        <div className="absolute inset-0 bg-[url('/ballast-brand-background.svg')] bg-cover bg-center opacity-10" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our Mission
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-6">
                We're building the financial backbone for the next generation of innovative companies.
              </p>
              <p className="text-lg text-white/80 mb-8">
                Ballast Financial was founded with a clear purpose: to give founders and startup teams the financial clarity and infrastructure they need to focus on what they do best—building great products and growing their business.
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                to="/contact"
                className="w-fit px-8 py-4"
              >
                Schedule a Consultation
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img 
                src="/aboutus-hero.png" 
                alt="Team collaborating on financial analysis"
                className="rounded-xl shadow-xl w-full max-w-2xl mx-auto filter brightness-95 contrast-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <Section shade>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-6">Our Story</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg"
          >
            <p className="text-primary-500/80">
              What began as hatchconsulting, an exploration into helping startups find their footing, 
              has evolved into Ballast Financial – the steady weight that keeps ventures stable through rough waters. 
              Our deep understanding of startup challenges, combined with years of financial expertise, 
              has shaped our approach to providing comprehensive financial infrastructure.
            </p>
            <p className="text-primary-500/80">
              Through working with countless startups, we've refined our services to address the unique 
              challenges faced by growing ventures. Today, we're proud to serve as the financial backbone 
              for innovative companies across various sectors, providing the stability they need to thrive.
            </p>
            <div className="mt-12 text-center">
              <p className="text-xl font-medium italic text-primary-500 mb-8">
                "Our mission is to anchor growing startups with solid financial operations, 
                allowing founders to steer with confidence."
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Values Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-500">Our Values</h2>
            <p className="text-lg text-primary-500/80 max-w-2xl mx-auto">
              The principles that guide our work and relationships with clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Transparency",
                description: "We believe in complete financial clarity. We communicate openly about your financial position and performance, with no surprises."
              },
              {
                title: "Expertise",
                description: "Our team brings deep financial knowledge and startup experience to every client relationship, ensuring you get the best guidance."
              },
              {
                title: "Collaboration",
                description: "We work as an extension of your team, aligning our processes with your goals and adapting as your business evolves."
              },
              {
                title: "Innovation",
                description: "We continuously improve our processes and technology to deliver the most efficient and effective financial services."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-primary-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-primary-500">{value.title}</h3>
                <p className="text-primary-500/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-secondary-500 to-secondary-400">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-500/80 mb-8">
            Let's discuss how we can help your startup build a solid financial foundation.
          </p>
          <Button variant="primary" size="lg" to="/contact" className="w-fit">
            Schedule a Consultation
          </Button>
        </motion.div>
      </Section>
    </div>
  );
};

export default About;