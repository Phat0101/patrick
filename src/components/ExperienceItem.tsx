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
  Code: <Code className="w-4 h-4 text-content-primary" />,
  Briefcase: <Briefcase className="w-4 h-4 text-content-primary" />,
  BookOpen: <BookOpen className="w-4 h-4 text-content-primary" />,
  Beaker: <Beaker className="w-4 h-4 text-content-primary" />,
  BookMarked: <BookMarked className="w-4 h-4 text-content-primary" />,
  Cpu: <Cpu className="w-4 h-4 text-content-primary" />,
  Shield: <Shield className="w-4 h-4 text-content-primary" />,
  Container: <Container className="w-4 h-4 text-content-primary" />
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
      <div className="z-20 flex items-center justify-center bg-surface-overlay shadow-lg w-8 h-8 rounded-full ml-[-13px] md:ml-0 relative">
        {iconMap[experience.icon]}
        <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 1 ? 'right-full mr-3 text-right' : 'left-full ml-3'} caption font-mono text-content-secondary`}>
          {experience.date}
        </div>
      </div>
      <div className="bg-surface-subtle border border-border hover:border-content-primary rounded shadow-md w-full md:w-5/12 px-4 md:px-5 py-4 ml-4 md:ml-0 flex flex-col justify-between transition-all duration-200">
        <div className="mb-4 border-b border-border pb-2">
          <div className="flex items-center">
            <div className="text-content-primary mr-2">
              {iconMap[experience.icon]}
            </div>
            <h3 className="subheading !mb-0 text-content-primary">{experience.title}</h3>
          </div>
          <h4 className="caption text-content-secondary mt-1">@{experience.company.replace(/\s+/g, '_').toLowerCase()}</h4>
          <p className="caption md:hidden mt-1 text-content-tertiary">{experience.date}</p>
        </div>

        <div className="line-numbers text-sm">
          {experience.images && (
            <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
              {experience.images.map((img, i) => (
                <div key={i} className="relative min-w-[160px] min-h-[120px] rounded overflow-hidden bg-transparent dark:bg-white">
                  <Image 
                    src={img} 
                    alt={`${experience.title} image ${i + 1}`} 
                    quality={100}
                    style={{
                      objectFit: "fill",
                      width: "100%",
                      height: "120px"
                    }}
                    className="rounded" 
                  />
                </div>
              ))}
            </div>
          )}
          <ul className="mt-2 text-content-secondary space-y-1">
            {experience.description.map((item, i) => (
              <li key={i} className="line pl-2 border-l border-border hover:border-content-primary hover:bg-interactive-hover transition-colors body !mb-0">
                {item === "Clear.ai" ? (
                  <a 
                    href="https://www.clear.ai/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-content-primary hover:text-content-primary/80 transition-colors no-underline hover:underline"
                  >
                    {item}
                  </a>
                ) : (
                  item
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.skills.map((skill, i) => (
              <span key={i} className="px-2 py-1 bg-surface-white text-content-secondary caption rounded-sm border border-border">
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
          <div className="flex justify-end mt-4 pt-2 border-t border-border">
            <a href={experience.link} target='_blank' rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="bg-surface-subtle hover:bg-interactive-hover text-content-primary border-border transition-colors">
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