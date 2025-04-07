'use client'
import React from 'react';
import { Experience as ExperienceType } from '@/lib/info';
import ExperienceItem from './ExperienceItem';
import { Briefcase, FileCode } from 'lucide-react';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  
  return (
    <section id="experience" className="py-16 px-4 font-mono bg-white dark:bg-[#1e1e1e] text-gray-800 dark:text-gray-200">
      <div className="container mx-auto">
        {/* File header like a code comment */}
        <div className="mb-8 max-w-4xl mx-auto text-left bg-gray-100 dark:bg-[#2d2d2d] p-4 rounded-md border-l-4 border-yellow-500 overflow-x-auto">
          <div className="flex items-center mb-2">
            <FileCode className="w-5 h-5 mr-2 text-yellow-600 dark:text-yellow-400" />
            <span className="text-lg font-semibold text-yellow-600 dark:text-yellow-400">Experience.tsx</span>
          </div>
          <pre className="text-yellow-600 dark:text-yellow-400">
            <code>{`/**
 * Component: Experience
 * Description: Professional experience timeline
 * Imports: ExperienceItem.tsx
 */`}</code>
          </pre>
        </div>
        
        {/* Function component definition */}
        <div className="max-w-4xl mx-auto mb-8 text-left">
          <div className="flex items-center mb-4">
            <Briefcase className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
            <span className="text-xl font-semibold text-purple-600 dark:text-purple-400">Work History</span>
          </div>
          
          <div className="pl-4 mb-4">
            <span className="text-purple-600 dark:text-purple-400">const </span>
            <span className="text-blue-600 dark:text-blue-400">Experience </span>
            <span className="text-gray-600 dark:text-gray-400">= </span>
            <span className="text-purple-600 dark:text-purple-400">{"{("}</span>
            <span className="text-orange-500 dark:text-orange-300">{"{"}</span>
            <span className="text-green-600 dark:text-green-400"> experiences </span>
            <span className="text-orange-500 dark:text-orange-300">{"}"}</span>
            <span className="text-purple-600 dark:text-purple-400">{")"}</span>
            <span className="text-gray-600 dark:text-gray-400"> ={">"} </span>
            <span className="text-gray-700 dark:text-gray-300">{"{"}</span>
          </div>
        </div>
        
        {/* Timeline with Experience Items */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gray-300 dark:bg-gray-700"></div>
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} index={index} />
          ))}
        </div>
        
        {/* Close the component */}
        <div className="max-w-4xl mx-auto mt-10 text-left">
          <div>
            <span className="text-gray-700 dark:text-gray-300">{"};"}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;