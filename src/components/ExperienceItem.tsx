'use client'
import React, { type JSX } from 'react';
import { Button } from "@/components/ui/button";
import { Experience as ExperienceType } from '@/lib/info';
import { ExternalLink, Briefcase, Code, BookOpen, Beaker, BookMarked, Cpu, Shield, Container } from 'lucide-react';
import Image from 'next/image';


interface ExperienceItemProps {
  experience: ExperienceType;
  index: number;
}

const iconMap: { [key: string]: JSX.Element } = {
  Code: <Code className="w-4 h-4 text-blue-600 dark:text-white" />,
  Briefcase: <Briefcase className="w-4 h-4 text-blue-600 dark:text-white" />,
  BookOpen: <BookOpen className="w-4 h-4 text-blue-600 dark:text-white" />,
  Beaker: <Beaker className="w-4 h-4 text-blue-600 dark:text-white" />,
  BookMarked: <BookMarked className="w-4 h-4 text-blue-600 dark:text-white" />,
  Cpu: <Cpu className="w-4 h-4 text-blue-600 dark:text-white" />,
  Shield: <Shield className="w-4 h-4 text-blue-600 dark:text-white" />,
  Container: <Container className="w-4 h-4 text-blue-600 dark:text-white" />
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, index }) => {

  const renderVideo = (video: string, i: number) => {
    const isYouTube = video.includes('youtube.com') || video.includes('youtu.be');
    if (isYouTube) {
      const videoId = video.split('v=')[1] || video.split('/').pop();
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      return (
        <iframe
          key={i}
          width="100%"
          height="315"
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
    <div
      className={`mb-6 flex justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse md:left-timeline' : ''}`}
    >
      <div className="hidden md:block md:w-5/12"></div>
      <div className="z-20 flex items-center justify-center bg-gray-200 dark:bg-[#333333] shadow-lg w-8 h-8 rounded-full ml-[-13px] md:ml-0 relative">
        {iconMap[experience.icon]}
        <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 1 ? 'right-full mr-3 text-right' : 'left-full ml-3'} text-sm font-mono text-blue-600 dark:text-blue-400`}>
          {experience.date}
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-[#2d2d2d] border border-gray-300 dark:border-gray-700 hover:border-blue-500 rounded-md shadow-md w-full md:w-5/12 px-5 py-4 ml-4 md:ml-0 flex flex-col justify-between transition-all duration-200">
        <div className="mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
          <div className="flex items-center">
            <div className="text-yellow-600 dark:text-yellow-400 mr-2">
              {iconMap[experience.icon]}
            </div>
            <h3 className="font-mono text-lg font-semibold text-blue-600 dark:text-blue-400">{experience.title}</h3>
          </div>
          <h4 className="font-mono text-sm text-gray-600 dark:text-gray-400 mt-1">@{experience.company.replace(/\s+/g, '_').toLowerCase()}</h4>
          <p className="text-xs font-mono text-gray-500 md:hidden mt-1">{experience.date}</p>
        </div>

        <div className="line-numbers text-sm">
          {experience.images && (
            <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
              {experience.images.map((img, i) => (
                <div key={i} className="relative min-w-[160px] min-h-[120px] rounded-md border border-gray-300 dark:border-gray-700 overflow-hidden">
                  <Image 
                    src={img} 
                    alt={`${experience.title} image ${i + 1}`} 
                    quality={100}
                    style={{
                      objectFit: "fill",
                      width: "100%",
                      height: "120px"
                    }}
                    className="rounded-md bg-white" 
                  />
                </div>
              ))}
            </div>
          )}
          <ul className="mt-2 text-gray-700 dark:text-gray-300 space-y-1">
            {experience.description.map((item, i) => (
              <li key={i} className="line pl-2 border-l border-gray-300 dark:border-gray-700 hover:border-green-500 hover:bg-gray-200 dark:hover:bg-[#3a3a3a] transition-colors">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.skills.map((skill, i) => (
              <span key={i} className="px-2 py-1 bg-white dark:bg-[#1e1e1e] text-green-600 dark:text-green-400 text-xs rounded-sm border border-gray-300 dark:border-gray-700">
                {skill}
              </span>
            ))}
          </div>
          {experience.videos && (
            <div className="mt-4">
              {experience.videos.map((video, i) => renderVideo(video, i))}
            </div>
          )}
        </div>
        
        {experience.link && (
          <div className="flex justify-end mt-4 pt-2 border-t border-gray-300 dark:border-gray-700">
            <a href={experience.link} target='_blank' rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="bg-gray-100 dark:bg-[#2b2b2b] hover:bg-gray-200 dark:hover:bg-[#333333] text-blue-600 dark:text-blue-400 border-gray-300 dark:border-gray-700">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Project
              </Button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;