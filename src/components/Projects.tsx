import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Briefcase, BookOpen, Beaker, BookMarked, Cpu } from 'lucide-react';
import { SiZoom } from "react-icons/si";
import Image from 'next/image';
import { Project } from '@/lib/info';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Link from 'next/link';

interface ProjectsProps {
  projects: Project[];
}

const iconMap: { [key: string]: JSX.Element } = {
  Code: <Code className="w-4 h-4 text-white dark:text-black" />,
  Briefcase: <Briefcase className="w-4 h-4 text-white dark:text-black" />,
  BookOpen: <BookOpen className="w-4 h-4 text-white dark:text-black" />,
  Beaker: <Beaker className="w-4 h-4 text-white dark:text-black" />,
  BookMarked: <BookMarked className="w-4 h-4 text-white dark:text-black" />,
  Cpu: <Cpu className="w-4 h-4 text-white dark:text-black" />,
  SiZoom: <SiZoom className="w-4 h-4 text-white dark:text-black" />
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
          className="rounded-lg"
        ></iframe>
      );
    } else {
      return (
        <video key={i} controls className="w-full rounded-lg">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-indigo-50 to-blue-50 dark:from-purple-900 dark:to-indigo-900">
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Projects</h2>
        <div className="text-center mb-10">
          <Link 
            href="/projects" 
            className="text-indigo-600 dark:text-indigo-500 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
          >
            View Interactive Projects 🐳
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/70 dark:bg-gray-500/30 rounded-lg shadow-xl p-6 hover:bg-white dark:hover:bg-gray-200/20 transition flex flex-col justify-between"
              initial={{ opacity: 0 }}
              animate={isIntersecting ? { opacity: 1} : {}}
              transition={{ duration: 1, delay: (index+1) * 0.5 }}
            >
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-gray-800 dark:bg-gray-200 rounded-full p-2 mr-4">
                    {iconMap[project.icon]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{project.date}</p>
                  </div>
                </div>
                {project.images && (
                  <div className="mb-4 flex gap-2 overflow-x-auto">
                    {project.images.map((img, i) => (
                      <Image key={i} src={img} alt={`${project.title} image ${i + 1}`} width={300} height={200} className="rounded-lg" />
                    ))}
                  </div>
                )}
                {project.videos && (
                  <div className="mb-4">
                    {project.videos.map((video, i) => renderVideo(video, i))}
                  </div>
                )}
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4">
                  {project.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-end mt-auto">
                <a href={project.link} target='_blank'>
                  <Button variant="outline" size="sm" className='bg-gray-300 hover:bg-gray-200 dark:bg-gray-600/50 border-none dark:hover:bg-gray-400/30'>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </motion.section>
    </section>
  );
};

export default Projects;