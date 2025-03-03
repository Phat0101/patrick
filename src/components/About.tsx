import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './TextTransition';
import { BookOpen, Code, TabletSmartphone, GraduationCap, Brain, FileCode } from 'lucide-react';

const About: React.FC = () => {
  const textLines = [
    "I'm a Computer Science student at Western Sydney University, majoring in AI with a minor in Cloud Computing. I'm passionate about developing innovative solutions and have experience in various programming languages and web technologies. My goal is to leverage my skills in software engineering and AI to create impactful applications that solve real-world problems."
  ];

  const cards = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      description: "Bachelor Computer Science (Advanced) at Western Sydney University - 6.5/7",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Next.js, React.js, TypeScript, and modern web technologies",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Development",
      description: "TensorFlow, Langchain, Langgraph, LLMs, and AI-powered Systems",
    },
    {
      icon: <TabletSmartphone className="w-6 h-6" />,
      title: "Mobile Development",
      description: "React Native, iOS/Android Integration, and Cross-platform Solutions",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
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
    <section id="about" className="py-16 px-4 font-mono bg-[#1e1e1e] text-gray-200">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* File header like a code comment */}
          <div className="mb-8 max-w-4xl mx-auto text-left bg-[#2d2d2d] p-4 rounded-md border-l-4 border-green-500 overflow-x-auto">
            <div className="flex items-center mb-2">
              <FileCode className="w-5 h-5 mr-2 text-green-400" />
              <span className="text-lg font-semibold text-green-400">About.tsx</span>
            </div>
            <pre className="text-green-400">
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
              <span className="text-purple-400">class </span>
              <span className="text-yellow-400">About </span>
              <span className="text-purple-400">extends </span>
              <span className="text-blue-400">Component </span>
              <span className="text-gray-300">{'{'}</span>
            </div>
            
            <div className="mb-6 pl-6">
              <span className="text-purple-400">render</span>
              <span className="text-gray-300">() {'{'}  </span>
            </div>
            
            <div className="pl-12 mb-6 bg-[#2a2a2a] p-4 rounded-md">
              {textLines.map((line, index) => (
                <AnimatedText
                  key={index}
                  text={line}
                  className="text-gray-300 mb-2"
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
                className="bg-[#2d2d2d] rounded-md p-4 border-l-2 border-blue-500 hover:border-l-4 hover:bg-[#252525] transition-all duration-200"
              >
                <div className="flex flex-col">
                  <div className="flex items-center mb-3">
                    <div className="text-blue-400 mr-2">
                      {card.icon}
                    </div>
                    <h3 className="text-base font-semibold text-blue-300">
                      {card.title}
                    </h3>
                  </div>
                  <div className="pl-4 border-l border-gray-600">
                    <p className="text-sm text-gray-300">
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
              <span className="text-gray-300">{'}'}</span>
            </div>
            <div>
              <span className="text-gray-300">{'}'}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;