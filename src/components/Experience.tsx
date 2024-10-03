import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Experience as ExperienceType } from '../app/info';
import { Briefcase, Code, BookOpen, Beaker, BookMarked, Cpu } from 'lucide-react';
import Image from 'next/image';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const iconMap: { [key: string]: JSX.Element } = {
  Code: <Code className="w-4 h-4 text-white dark:text-black" />,
  Briefcase: <Briefcase className="w-4 h-4 text-white dark:text-black" />,
  BookOpen: <BookOpen className="w-4 h-4 text-white dark:text-black" />,
  Beaker: <Beaker className="w-4 h-4 text-white dark:text-black" />,
  BookMarked: <BookMarked className="w-4 h-4 text-white dark:text-black" />,
  Cpu: <Cpu className="w-4 h-4 text-white dark:text-black" />
};

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-purple-50 to-indigo-50 dark:from-indigo-900 dark:to-purple-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">Experience</h2>
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gray-200 dark:bg-gray-700"></div>
          {experiences.map((exp, index) => (
            <motion.div
              ref={ref}
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse md:left-timeline' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="hidden md:block md:w-5/12"></div>
              <div className="z-20 flex items-center justify-center bg-gray-800 dark:bg-gray-200 shadow-xl w-8 h-8 rounded-full ml-[-13px] md:ml-0 relative">
                {iconMap[exp.icon]}
                <div className={`hidden w-40 md:block absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 1 ? 'right-full mr-2' : 'left-full ml-2'} text-base font-medium text-gray-500 dark:text-gray-400`}>
                  {exp.date}
                </div>
              </div> 
              <div className="order-1 bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 ml-4 md:ml-0">
                <h3 className="mb-3 font-bold text-gray-800 dark:text-white text-xl">{exp.title}</h3>
                <h4 className="mb-3 font-semibold text-gray-600 dark:text-gray-300">{exp.company}</h4>
                <p className="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400 md:hidden">{exp.date}</p>
                <ul className="list-disc list-inside mt-3 text-sm text-gray-600 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                {exp.images && (
                  <div className="mt-4 flex gap-2 overflow-x-auto">
                    {exp.images.map((img, i) => (
                      <Image key={i} src={img} alt={`${exp.title} image ${i + 1}`} width={200} height={200} className="rounded-lg" />
                    ))}
                  </div>
                )}
                {exp.videos && (
                  <div className="mt-4">
                    {exp.videos.map((video, i) => (
                      <video key={i} controls className="w-full rounded-lg">
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;