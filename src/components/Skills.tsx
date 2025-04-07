'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { FileCode, Code } from 'lucide-react';

interface SkillsProps {
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  // Group skills by category
  const skillGroups = {
    'languages': skills.filter(s => 
      ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'HTML', 'CSS', 'SQL'].includes(s)),
    'frameworks': skills.filter(s => 
      ['React.js', 'Next.js', 'Node.js', 'Express', 'Django', 'Flask', 'Vue.js', 'Angular', "FastAPI"].includes(s)),
    'cloud': skills.filter(s => 
      ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Serverless', "CI/CD"].includes(s)),
    'ai': skills.filter(s => 
      ['TensorFlow', 'PyTorch', 'Langchain', 'Hugging Face', 'OpenAI', 'ML', 'LLMs', 'Langgraph'].includes(s)),
    'other': skills.filter(s => 
      !['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'HTML', 'CSS', 'SQL',
        'React.js', 'Next.js', 'Node.js', 'Express', 'Django', 'Flask', 'Vue.js', 'Angular',
        'AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Serverless',
        'TensorFlow', 'PyTorch', 'Hugging Face', 'OpenAI', 'ML', 'LLMs', 'Langgraph', "FastAPI", "CI/CD", "Langchain"].includes(s))
  };

  return (
    <section
      ref={ref}
      id="skills"
      className="py-16 px-4 font-mono bg-white dark:bg-[#1e1e1e] text-gray-800 dark:text-gray-200"
    >
      <div className="container mx-auto">
        {/* File header like a code comment */}
        <div className="mb-8 max-w-4xl mx-auto text-left bg-gray-100 dark:bg-[#2d2d2d] p-4 rounded-md border-l-4 border-green-500 overflow-x-auto">
          <div className="flex items-center mb-2">
            <FileCode className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" />
            <span className="text-lg font-semibold text-green-600 dark:text-green-400">Skills.tsx</span>
          </div>
          <pre className="text-green-600 dark:text-green-400">
            <code>{`/**
 * Component: Skills
 * Description: Technical skills organized by category
 * Last modified: ${new Date().toISOString().split('T')[0]}
 */`}</code>
          </pre>
        </div>

        {/* Skills as JSON object declaration */}
        <div className="max-w-4xl mx-auto mb-8 text-left">
          <div className="mb-4 flex items-center">
            <Code className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-semibold text-blue-600 dark:text-blue-400">Technical Expertise</span>
          </div>
          
          <div className="pl-4 mb-4">
            <span className="text-purple-600 dark:text-purple-400">const </span>
            <span className="text-blue-600 dark:text-blue-400">skills </span>
            <span className="text-gray-600 dark:text-gray-400">= </span>
            <span className="text-orange-500 dark:text-orange-300">{"{"}</span>
          </div>
          
          <div className="bg-gray-100 dark:bg-[#2a2a2a] p-4 rounded-md border border-gray-300 dark:border-gray-700 mb-8">
            {/* Render skills as JSON-like structure */}
            {Object.entries(skillGroups).map(([category, categorySkills], groupIndex) => (
              <div key={category} className="mb-4 last:mb-0">
                <div className="mb-2">
                  <span className="text-green-600 dark:text-green-400 pl-4">{category}</span>
                  <span className="text-gray-600 dark:text-gray-400">: </span>
                  <span className="text-purple-600 dark:text-purple-400">{"["}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 pl-8 mb-2">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="bg-white dark:bg-[#1e1e1e] border border-gray-300 dark:border-gray-700 hover:border-blue-500 rounded-sm 
                               px-3 py-1 text-blue-500 dark:text-blue-300 cursor-default transition-all duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: (groupIndex * 0.1) + (index * 0.05) }}
                    >
                      <span className="text-gray-600 dark:text-gray-400">&quot;</span>
                      {skill}
                      <span className="text-gray-600 dark:text-gray-400">&quot;</span>
                      {index < categorySkills.length - 1 && <span className="text-gray-600 dark:text-gray-400">,</span>}
                    </motion.div>
                  ))}
                </div>
                
                <div className="pl-4">
                  <span className="text-purple-600 dark:text-purple-400">{"]"}</span>
                  {groupIndex < Object.keys(skillGroups).length - 1 && <span className="text-gray-600 dark:text-gray-400">,</span>}
                </div>
              </div>
            ))}
          </div>
          
          <div>
            <span className="text-orange-500 dark:text-orange-300">{"}"}</span><span className="text-gray-600 dark:text-gray-400">;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;