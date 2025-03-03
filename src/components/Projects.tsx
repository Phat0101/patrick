import React from 'react';
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
    <section id="projects" className="py-16 px-4 font-mono bg-[#1e1e1e] text-gray-200">
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
      <div className="container mx-auto">
        {/* File header like a code comment */}
        <div className="mb-8 max-w-4xl mx-auto text-left bg-[#2d2d2d] p-4 rounded-md border-l-4 border-purple-500 overflow-x-auto">
          <div className="flex items-center mb-2">
            <FileCode className="w-5 h-5 mr-2 text-purple-400" />
            <span className="text-lg font-semibold text-purple-400">Projects.tsx</span>
          </div>
          <pre className="text-purple-400">
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
            <span className="text-purple-400">function </span>
            <span className="text-yellow-400">ProjectsGallery</span>
            <span className="text-gray-400">() {`{`}</span>
          </div>
          
          <div className="pl-4 mb-2">
            <span className="text-purple-400">return </span>
            <span className="text-gray-300">{"("}</span>
          </div>
        </div>

        <div className="text-center mb-6">
          <Link 
            href="/projects" 
            className="text-blue-400 hover:text-blue-300 transition-colors bg-[#2d2d2d] px-4 py-2 rounded-md border border-gray-700 inline-flex items-center"
          >
            <span>View Interactive Projects</span>
            <span className="ml-2">→</span>
          </Link>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#2d2d2d] rounded-md border border-gray-700 hover:border-purple-500 p-5 transition-all duration-200 flex flex-col h-full"
              initial={{ opacity: 0 }}
              animate={isIntersecting ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-grow">
                <div className="flex items-center mb-3 pb-2 border-b border-gray-700">
                  <div className="bg-[#333333] rounded-md p-1.5 mr-3 text-purple-400">
                    {iconMap[project.icon]}
                  </div>
                  <div>
                    <h3 className="text-base font-mono text-blue-400">{project.title}</h3>
                    <p className="text-xs text-gray-400">{project.date}</p>
                  </div>
                </div>
                {project.images && (
                  <div className="mb-4 flex gap-2 overflow-x-auto pb-2">
                    {project.images.map((img, i) => (
                      <Image key={i} src={img} alt={`${project.title} image ${i + 1}`} width={240} height={160} className="rounded-md border border-gray-700" />
                    ))}
                  </div>
                )}
                {project.videos && (
                  <div className="mb-4">
                    {project.videos.map((video, i) => renderVideo(video, i))}
                  </div>
                )}
                <ul className="text-sm text-gray-300 mb-4 space-y-1">
                  {project.description.map((item, i) => (
                    <li key={i} className="line pl-2 border-l border-gray-700 hover:border-blue-500 hover:bg-[#333333] transition-colors">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-[#1e1e1e] text-green-400 text-xs rounded-sm border border-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-end mt-3 pt-2 border-t border-gray-700">
                <a href={project.link} target='_blank' rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="bg-[#2b2b2b] hover:bg-[#333333] text-blue-400 border-gray-700">
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
            <span className="text-gray-300">{")"}</span>
          </div>
          <div>
            <span className="text-gray-300">{"};"}</span>
          </div>
        </div>
      </div>
      </motion.section>
    </section>
  );
};

export default Projects;