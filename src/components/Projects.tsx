'use client'
import React, { type JSX } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Briefcase, BookOpen, Beaker, BookMarked, Cpu, FileCode } from 'lucide-react';
import { SiZoom } from "react-icons/si";
import Image from 'next/image';
import { Project } from '@/lib/info';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Link from 'next/link';

interface ProjectsProps {
  projects: Project[];
}

const iconMap: { [key: string]: JSX.Element } = {
  Code: <Code className="w-4 h-4 text-white" />,
  Briefcase: <Briefcase className="w-4 h-4 text-white" />,
  BookOpen: <BookOpen className="w-4 h-4 text-white" />,
  Beaker: <Beaker className="w-4 h-4 text-white" />,
  BookMarked: <BookMarked className="w-4 h-4 text-white" />,
  Cpu: <Cpu className="w-4 h-4 text-white" />,
  SiZoom: <SiZoom className="w-4 h-4 text-white" />
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const renderVideo = (video: string, i: number) => {
    const isYouTube = video.includes('youtube.com') || video.includes('youtu.be');
    if (isYouTube) {
      const videoId = video.split('v=')[1] || video.split('/').pop();
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      return (
        <iframe
          key={i}
          width="100%"
          height="200"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-md"
        ></iframe>
      );
    } else {
      return (
        <video key={i} controls className="w-full rounded-md">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 px-4 font-mono bg-background text-content-primary">
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
      <div className="container mx-auto max-w-container">
        {/* File header like a code comment */}
        <div className="mb-8 max-w-4xl mx-auto text-left bg-surface-muted p-4 md:p-6 rounded border-l-4 border-content-primary overflow-x-auto">
          <div className="flex items-center mb-2">
            <FileCode className="w-5 h-5 mr-2 text-content-primary" />
            <span className="text-lg font-semibold text-content-primary">Projects.tsx</span>
          </div>
          <pre className="text-content-secondary text-xs md:text-sm">
            <code>{`/**
 * Component: Projects
 * Description: Showcase of personal and professional projects
 * Last modified: ${new Date().toISOString().split('T')[0]}
 */`}</code>
          </pre>
        </div>
        
        {/* Function component code-like declaration */}
        <div className="max-w-4xl mx-auto mb-8 text-left">
          <div className="mb-3">
            <span className="text-content-tertiary">function </span>
            <span className="text-content-primary">ProjectsGallery</span>
            <span className="text-content-secondary">() {`{`}</span>
          </div>
          
          <div className="pl-4 mb-2">
            <span className="text-content-tertiary">return </span>
            <span className="text-content-secondary">{"("}</span>
          </div>
        </div>

        <div className="text-center mb-6">
          <Link 
            href="/projects" 
            className="text-content-primary hover:text-content-primary/80 transition-colors bg-surface-subtle px-4 py-2 rounded border border-border inline-flex items-center hover:bg-interactive-hover"
          >
            <span>View Interactive Projects</span>
            <span className="ml-2">→</span>
          </Link>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-surface-subtle rounded border border-border hover:border-content-primary p-4 md:p-5 transition-all duration-200 flex flex-col h-full"
              initial={{ opacity: 0 }}
              animate={isIntersecting ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-grow">
                <div className="flex items-center mb-3 pb-2 border-b border-border">
                  <div className="bg-surface-overlay rounded p-1.5 mr-3 text-content-primary">
                    {iconMap[project.icon]}
                  </div>
                  <div>
                    <h3 className="subheading !mb-0 text-content-primary">{project.title}</h3>
                    <p className="caption text-content-tertiary">{project.date}</p>
                  </div>
                </div>
                {project.images && (
                  <div className="mb-4 flex gap-2 overflow-x-auto pb-2">
                    {project.images.map((img, i) => (
                      <Image key={i} src={img} alt={`${project.title} image ${i + 1}`} width={240} height={160} className="rounded border border-border" />
                    ))}
                  </div>
                )}
                {project.videos && (
                  <div className="mb-4">
                    {project.videos.map((video, i) => renderVideo(video, i))}
                  </div>
                )}
                <ul className="text-sm text-content-secondary mb-4 space-y-1">
                  {project.description.map((item, i) => (
                    <li key={i} className="line pl-2 border-l border-border hover:border-content-primary hover:bg-interactive-hover transition-colors body !mb-0">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-surface-white text-content-secondary caption rounded-sm border border-border">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-end mt-3 pt-2 border-t border-border">
                <a href={project.link} target='_blank' rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="bg-surface-subtle hover:bg-interactive-hover text-content-primary border-border transition-colors">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Close the component */}
        <div className="max-w-4xl mx-auto mt-10 text-left">
          <div className="pl-4">
            <span className="text-content-secondary">{")"}</span>
          </div>
          <div>
            <span className="text-content-secondary">{"};"}</span>
          </div>
        </div>
      </div>
      </motion.section>
    </section>
  );
};

export default Projects;