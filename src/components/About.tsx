import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './TextTransition';

const About: React.FC = () => {
  const textLines = [
    "I'm a Computer Science student at Western Sydney University, majoring in AI with a minor in Cloud Computing. I'm passionate about developing innovative solutions and have experience in various programming languages and web technologies. My goal is to leverage my skills in software engineering and AI to create impactful applications that solve real-world problems."
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-pink-50 to-purple-50 dark:from-blue-900 dark:to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">About Me</h2>
          <div className="max-w-5xl mx-auto text-center">
            {textLines.map((line, index) => (
              <AnimatedText
                key={index}
                text={line}
                className="text-lg text-gray-600 dark:text-gray-300 mb-2"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;