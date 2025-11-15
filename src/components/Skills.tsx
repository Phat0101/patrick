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
      className="py-16 md:py-24 px-4 font-mono bg-background text-content-primary"
    >
      <div className="container mx-auto max-w-container">
        {/* File header like a code comment */}
        <div className="mb-8 max-w-4xl mx-auto text-left bg-surface-muted p-4 md:p-6 rounded border-l-4 border-content-primary overflow-x-auto">
          <div className="flex items-center mb-2">
            <FileCode className="w-5 h-5 mr-2 text-content-primary" />
            <span className="text-lg font-semibold text-content-primary">Skills.tsx</span>
          </div>
          <pre className="text-content-secondary text-xs md:text-sm">
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
            <Code className="w-5 h-5 mr-2 text-content-primary" />
            <span className="heading !mb-0 text-content-primary">Technical Expertise</span>
          </div>
          
          <div className="pl-4 mb-4">
            <span className="text-content-tertiary">const </span>
            <span className="text-content-primary">skills </span>
            <span className="text-content-secondary">= </span>
            <span className="text-content-primary">{"{"}</span>
          </div>
          
          <div className="bg-surface-subtle p-4 md:p-6 rounded border border-border mb-8">
            {/* Render skills as JSON-like structure */}
            {Object.entries(skillGroups).map(([category, categorySkills], groupIndex) => (
              <div key={category} className="mb-4 last:mb-0">
                <div className="mb-2">
                  <span className="text-content-primary pl-4">{category}</span>
                  <span className="text-content-secondary">: </span>
                  <span className="text-content-tertiary">{"["}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 pl-6 md:pl-8 mb-2">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="bg-surface-white border border-border hover:border-content-primary rounded-sm 
                               px-3 py-1 text-content-primary cursor-default transition-all duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: (groupIndex * 0.1) + (index * 0.05) }}
                    >
                      <span className="text-content-secondary">&quot;</span>
                      {skill}
                      <span className="text-content-secondary">&quot;</span>
                      {index < categorySkills.length - 1 && <span className="text-content-secondary">,</span>}
                    </motion.div>
                  ))}
                </div>
                
                <div className="pl-4">
                  <span className="text-content-tertiary">{"]"}</span>
                  {groupIndex < Object.keys(skillGroups).length - 1 && <span className="text-content-secondary">,</span>}
                </div>
              </div>
            ))}
          </div>
          
          <div>
            <span className="text-content-primary">{"}"}</span><span className="text-content-secondary">;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;