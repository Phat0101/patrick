import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Briefcase, BookOpen, Beaker, BookMarked, Cpu } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/lib/info';

interface ProjectsProps {
  projects: Project[];
}

const iconMap: { [key: string]: JSX.Element } = {
  Code: <Code className="w-4 h-4 text-white" />,
  Briefcase: <Briefcase className="w-4 h-4 text-white" />,
  BookOpen: <BookOpen className="w-4 h-4 text-white" />,
  Beaker: <Beaker className="w-4 h-4 text-white" />,
  BookMarked: <BookMarked className="w-4 h-4 text-white" />,
  Cpu: <Cpu className="w-4 h-4 text-white" />
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-indigo-50 to-blue-50 dark:from-purple-900 dark:to-indigo-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-gray-800 dark:bg-gray-200 rounded-full p-2 mr-4">
                  {iconMap[project.icon]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.date}</p>
                </div>
              </div>
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
              {project.images && (
                <div className="mb-4 flex gap-2 overflow-x-auto">
                  {project.images.map((img, i) => (
                    <Image key={i} src={img} alt={`${project.title} image ${i + 1}`} width={300} height={200} className="rounded-lg" />
                  ))}
                </div>
              )}
              {project.videos && (
                <div className="mb-4">
                  {project.videos.map((video, i) => (
                    <video key={i} controls className="w-full rounded-lg">
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ))}
                </div>
              )}
              <Button variant="outline" size="sm">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Project
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;