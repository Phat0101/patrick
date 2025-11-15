import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './TextTransition';
import { Code, GraduationCap, Brain, FileCode, Server, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  const textLines = [
    "I’m Patrick, currently working as a software engineer at Clear.ai, Sydney. I graduated with a Computer Science (Advanced) degree, majoring in AI and minoring in Cloud Computing. With professional experience across various domains including fintech, healthcare and risk management, I specialise in building robust, scalable applications using modern web technologies. My goal is to leverage my expertise in both frontend and backend development along with AI to create innovative solutions that address complex real-world challenges."
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
      description: "Node.js, Django, FastAPI, SQL/NoSQL databases, REST/GraphQL APIs",
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
    <section id="about" className="py-16 md:py-24 px-4 font-mono bg-background text-content-primary">
      <div className="container mx-auto max-w-container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* File header like a code comment */}
          <div className="mb-8 max-w-4xl mx-auto text-left bg-surface-muted p-4 md:p-6 rounded border-l-4 border-content-primary overflow-x-auto">
            <div className="flex items-center mb-2">
              <FileCode className="w-5 h-5 mr-2 text-content-primary" />
              <span className="text-lg font-semibold text-content-primary">About.tsx</span>
            </div>
            <pre className="text-content-secondary text-xs md:text-sm">
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
              <span className="text-content-tertiary">class </span>
              <span className="text-content-primary">About </span>
              <span className="text-content-tertiary">extends </span>
              <span className="text-content-primary">Component </span>
              <span className="text-content-secondary">{'{'}</span>
            </div>
            
            <div className="mb-6 pl-4 md:pl-6">
              <span className="text-content-tertiary">render</span>
              <span className="text-content-secondary">() {'{'}  </span>
            </div>
            
            <div className="pl-8 md:pl-12 mb-6 bg-surface-subtle p-4 md:p-6 rounded">
              {textLines.map((line, index) => (
                <AnimatedText
                  key={index}
                  text={line}
                  className="body text-content-secondary mb-2"
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 max-w-6xl mx-auto">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface-subtle rounded p-4 md:p-6 border-l-2 border-content-primary hover:border-l-4 hover:bg-interactive-hover transition-all duration-200"
              >
                <div className="flex flex-col">
                  <div className="flex items-center mb-3">
                    <div className="text-content-primary mr-2">
                      {card.icon}
                    </div>
                    <h3 className="subheading !mb-0 text-content-primary">
                      {card.title}
                    </h3>
                  </div>
                  <div className="pl-4 border-l border-border">
                    <p className="caption text-content-secondary">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Close the class definition */}
          <div className="max-w-4xl mx-auto mt-10 text-left">
            <div className="pl-4 md:pl-6">
              <span className="text-content-secondary">{'}'}</span>
            </div>
            <div>
              <span className="text-content-secondary">{'}'}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;