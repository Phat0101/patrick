import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-pink-50 to-purple-50 dark:from-blue-900 dark:to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">About Me</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I&apos;m a Computer Science student at Western Sydney University, majoring in AI with a minor in Cloud Computing.
            I&apos;m passionate about developing innovative solutions and have experience in various programming languages and web technologies.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My goal is to leverage my skills in software engineering and AI to create impactful applications that solve real-world problems.
          </p>
        </div>
        </motion.div>
      </div>
     
    </section>
  );
};

export default About;