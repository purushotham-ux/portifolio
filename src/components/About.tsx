'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives me to create amazing web experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Working on laptop"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center">
              <p className="text-lg font-bold">5+ Years Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              A passionate <span className="text-primary">Web Developer</span> based in New York
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I am a full-stack developer with a passion for creating beautiful, functional, and user-friendly websites and applications. With over 5 years of experience in the industry, I have worked on a wide range of projects for clients across various sectors.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              My approach to design and development is centered around creating solutions that not only look great but also solve real problems for users and businesses. I believe in clean code, responsive design, and accessibility as core principles in everything I build.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="font-medium">Name:</p>
                <p className="text-gray-600 dark:text-gray-400">John Doe</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-gray-600 dark:text-gray-400">hello@example.com</p>
              </div>
              <div>
                <p className="font-medium">Location:</p>
                <p className="text-gray-600 dark:text-gray-400">New York, USA</p>
              </div>
              <div>
                <p className="font-medium">Availability:</p>
                <p className="text-gray-600 dark:text-gray-400">Freelance / Full-time</p>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 