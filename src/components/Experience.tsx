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
    <section id="experience" className="py-16 md:py-24 px-4 font-mono bg-background text-content-primary">
      <div className="container mx-auto max-w-container">
        {/* File header like a code comment */}
        <div className="mb-8 max-w-4xl mx-auto text-left bg-surface-muted p-4 md:p-6 rounded border-l-4 border-content-primary overflow-x-auto">
          <div className="flex items-center mb-2">
            <FileCode className="w-5 h-5 mr-2 text-content-primary" />
            <span className="text-lg font-semibold text-content-primary">Experience.tsx</span>
          </div>
          <pre className="text-content-secondary text-xs md:text-sm">
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
            <Briefcase className="w-5 h-5 mr-2 text-content-primary" />
            <span className="heading !mb-0 text-content-primary">Work History</span>
          </div>
          
          <div className="pl-4 mb-4">
            <span className="text-content-tertiary">const </span>
            <span className="text-content-primary">Experience </span>
            <span className="text-content-secondary">= </span>
            <span className="text-content-tertiary">{"{("}</span>
            <span className="text-content-primary">{"{"}</span>
            <span className="text-content-secondary"> experiences </span>
            <span className="text-content-primary">{"}"}</span>
            <span className="text-content-tertiary">{")"}</span>
            <span className="text-content-secondary"> ={">"} </span>
            <span className="text-content-secondary">{"{"}</span>
          </div>
        </div>
        
        {/* Timeline with Experience Items */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-border"></div>
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} index={index} />
          ))}
        </div>
        
        {/* Close the component */}
        <div className="max-w-4xl mx-auto mt-10 text-left">
          <div>
            <span className="text-content-secondary">{"};"}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;