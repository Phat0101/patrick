import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Experience as ExperienceType } from '@/lib/info';
import { ExternalLink, Briefcase, Code, BookOpen, Beaker, BookMarked, Cpu } from 'lucide-react';
import Image from 'next/image';

interface ExperienceItemProps {
  experience: ExperienceType;
  index: number;
}

const iconMap: { [key: string]: JSX.Element } = {
  Code: <Code className="w-4 h-4 text-white dark:text-black" />,
  Briefcase: <Briefcase className="w-4 h-4 text-white dark:text-black" />,
  BookOpen: <BookOpen className="w-4 h-4 text-white dark:text-black" />,
  Beaker: <Beaker className="w-4 h-4 text-white dark:text-black" />,
  BookMarked: <BookMarked className="w-4 h-4 text-white dark:text-black" />,
  Cpu: <Cpu className="w-4 h-4 text-white dark:text-black" />
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

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
    <motion.div
      ref={ref}
      className={`mb-2 flex justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse md:left-timeline' : ''}`}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <div className="hidden md:block md:w-5/12"></div>
      <div className="z-20 flex items-center justify-center bg-gray-800 dark:bg-gray-200 shadow-xl w-8 h-8 rounded-full ml-[-13px] md:ml-0 relative">
        {iconMap[experience.icon]}
        <div className={`hidden w-40 md:block absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 1 ? 'right-full mr-2' : 'left-full ml-2'} text-base font-medium text-gray-500 dark:text-gray-400`}>
          {experience.date}
        </div>
      </div>
      <div className="order-1 bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 ml-4 md:ml-0 border-2 border-transparent hover:border-current hover-animate-spin-border">
        <h3 className="mb-3 font-bold text-gray-800 dark:text-white text-xl">{experience.title}</h3>
        <h4 className="mb-3 font-semibold text-gray-600 dark:text-gray-300">{experience.company}</h4>
        <p className="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400 md:hidden">{experience.date}</p>

        {experience.images && (
          <div className="mt-4 flex gap-2 overflow-x-auto">
            {experience.images.map((img, i) => (
              <Image key={i} src={img} alt={`${experience.title} image ${i + 1}`} width={150} height={150}
                style={{
                  width: "auto",
                  height: "150px"
                }}
                className="rounded-lg" />
            ))}
          </div>
        )}
        <ul className="list-disc list-inside mt-3 text-sm text-gray-600 dark:text-gray-300">
          {experience.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {experience.skills.map((skill, i) => (
            <span key={i} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
              {skill}
            </span>
          ))}
        </div>
        {experience.videos && (
          <div className="mt-4">
            {experience.videos.map((video, i) => renderVideo(video, i))}
          </div>
        )}
        {experience.link && (
          <a href={experience.link} target='_blank'>
            <Button variant="outline" size="sm" className='mt-4'>
              <ExternalLink className="mr-2 h-4 w-4" />
              View Project
            </Button>
          </a>
        )}
      </div>

    </motion.div>
  );
};

export default ExperienceItem;