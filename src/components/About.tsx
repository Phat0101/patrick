import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './TextTransition';
import { Code, GraduationCap, Brain, FileCode, Server, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  const textLines = [
    "I'm a Full-Stack Developer with a Bachelor's degree in Computer Science (Advanced) from Western Sydney University, majoring in AI with a minor in Cloud Computing. With professional experience across various domains including fintech, healthcare and risk management, I specialise in building robust, scalable applications using modern web technologies. My goal is to leverage my expertise in both frontend and backend development along with AI to create innovative solutions that address complex real-world challenges."
  ];

  const cards = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Professional",
      description: "Full-Stack Developer with experience in fintech, healthcare, and risk management",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      description: "Bachelor Computer Science (Advanced) at Western Sydney University - 6.5/7 GPA",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend",
      description: "React, Next.js, TypeScript, TailwindCSS, and modern UI frameworks",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend",
      description: "Node.js, Python, FastAPI, SQL/NoSQL databases, REST/GraphQL APIs",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Cloud",
      description: "TensorFlow, Langchain, LLMs, AWS, Docker, and CI/CD pipelines",
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
    <section id="about" className="py-16 px-4 font-mono bg-white dark:bg-[#1e1e1e] text-gray-800 dark:text-gray-200">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* File header like a code comment */}
          <div className="mb-8 max-w-4xl mx-auto text-left bg-gray-100 dark:bg-[#2d2d2d] p-4 rounded-md border-l-4 border-green-500 overflow-x-auto">
            <div className="flex items-center mb-2">
              <FileCode className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" />
              <span className="text-lg font-semibold text-green-600 dark:text-green-400">About.tsx</span>
            </div>
            <pre className="text-green-600 dark:text-green-400">
              <code>{`/**
 * Component: About
 * Description: Personal information and skills overview
 * Last modified: ${new Date().toISOString().split('T')[0]}
 */`}</code>
            </pre>
          </div>

          {/* Class definition styled like code */}
          <div className="max-w-4xl mx-auto mb-10 text-left">
            <div className="mb-2">
              <span className="text-purple-600 dark:text-purple-400">class </span>
              <span className="text-yellow-600 dark:text-yellow-400">About </span>
              <span className="text-purple-600 dark:text-purple-400">extends </span>
              <span className="text-blue-600 dark:text-blue-400">Component </span>
              <span className="text-gray-700 dark:text-gray-300">{'{'}</span>
            </div>
            
            <div className="mb-6 pl-6">
              <span className="text-purple-600 dark:text-purple-400">render</span>
              <span className="text-gray-700 dark:text-gray-300">() {'{'}  </span>
            </div>
            
            <div className="pl-12 mb-6 bg-gray-100 dark:bg-[#2a2a2a] p-4 rounded-md">
              {textLines.map((line, index) => (
                <AnimatedText
                  key={index}
                  text={line}
                  className="text-gray-700 dark:text-gray-300 mb-2"
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-100 dark:bg-[#2d2d2d] rounded-md p-4 border-l-2 border-blue-500 hover:border-l-4 hover:bg-gray-200 dark:hover:bg-[#252525] transition-all duration-200"
              >
                <div className="flex flex-col">
                  <div className="flex items-center mb-3">
                    <div className="text-blue-600 dark:text-blue-400 mr-2">
                      {card.icon}
                    </div>
                    <h3 className="text-base font-semibold text-blue-500 dark:text-blue-300">
                      {card.title}
                    </h3>
                  </div>
                  <div className="pl-4 border-l border-gray-300 dark:border-gray-600">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Close the class definition */}
          <div className="max-w-4xl mx-auto mt-10 text-left">
            <div className="pl-6">
              <span className="text-gray-700 dark:text-gray-300">{'}'}</span>
            </div>
            <div>
              <span className="text-gray-700 dark:text-gray-300">{'}'}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;