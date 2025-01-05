import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './TextTransition';
import { BookOpen, Code, TabletSmartphone, GraduationCap, Brain } from 'lucide-react';

const About: React.FC = () => {
  const textLines = [
    "I'm a Computer Science student at Western Sydney University, majoring in AI with a minor in Cloud Computing. I'm passionate about developing innovative solutions and have experience in various programming languages and web technologies. My goal is to leverage my skills in software engineering and AI to create impactful applications that solve real-world problems."
  ];

  const cards = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education",
      description: "Bachelor Computer Science (Advanced) at Western Sydney University - 6.5/7",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "Next.js, React.js, TypeScript, and modern web technologies",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Development",
      description: "TensorFlow, Langchain, Langgraph, LLMs, and AI-powered Systems",
    },
    {
      icon: <TabletSmartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "React Native, iOS/Android Integration, and Cross-platform Solutions",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Interests",
      description: "AWS, GCP, System Architectures, Machine Learning, and AI Development",
    },
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
          <div className="max-w-5xl mx-auto text-center mb-16">
            {textLines.map((line, index) => (
              <AnimatedText
                key={index}
                text={line}
                className="text-lg text-gray-600 dark:text-gray-300 mb-2"
              />
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-6 max-w-7xl mx-auto px-2 sm:px-4">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/70 dark:bg-gray-800/50 rounded-xl p-3 sm:p-6 hover:shadow-xl transition-all duration-300 
                          hover:transform hover:-translate-y-1 hover:bg-white dark:hover:bg-gray-800"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-2 sm:mb-4 text-purple-600 dark:text-purple-400">
                    {card.icon}
                  </div>
                  <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-base text-gray-600 dark:text-gray-300">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;