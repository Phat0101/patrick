import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Download, Youtube } from 'lucide-react';
import profile from '../../public/profile.jpg';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  return (
    <section id="home" className="py-16 px-4 bg-[#1e1e1e] text-gray-200 font-mono">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 text-left bg-[#2d2d2d] p-4 rounded-md border-l-4 border-blue-500 overflow-x-auto">
              <pre className="text-green-400">
                <code>{`/**
 * @file Home.tsx
 * @author Patrick Nguyen
 * @description Personal Portfolio
 * @version 1.0.0
 */`}</code>
              </pre>
            </div>
            
            <div className="text-left">
              <div className="mb-6">
                <span className="text-purple-400">const </span>
                <span className="text-blue-400">developer </span>
                <span className="text-gray-400">= </span>
                <span className="text-green-400">{"{"}</span>
              </div>
              
              <div className="pl-6 mb-6">
                <div className="mb-2">
                  <span className="text-blue-300">name</span>
                  <span className="text-gray-400">: </span>
                  <span className="text-orange-300">&apos;Patrick Nguyen&apos;</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="mb-2">
                  <span className="text-blue-300">title</span>
                  <span className="text-gray-400">: </span>
                  <span className="text-orange-300">&apos;Software Engineer&apos;</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="mb-2">
                  <span className="text-blue-300">specializes</span>
                  <span className="text-gray-400">: </span>
                  <span className="text-orange-300">&apos;AI systems and modern web applications&apos;</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="mb-2">
                  <span className="text-blue-300">greeting</span>
                  <span className="text-gray-400">: </span>
                  <span className="text-orange-300">&apos;👋 Hello World!&apos;</span>
                </div>
                <div className="mb-2">
                  <span className="text-blue-300">hobbies</span>
                  <span className="text-gray-400">: </span>
                  <span className="text-orange-300">&apos; 📚 Reading, 💪 Gym, 🎧 Music, 💸 Entrepreneurship&apos;</span>
                  <span className="text-gray-400">,</span>
                </div>
              </div>
              
              <div className="mb-8">
                <span className="text-green-400">{"}"}</span><span className="text-gray-400">;</span>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start flex-wrap gap-2">
              <Link href="https://github.com/Phat0101" target='_blank'>
                <Button
                  variant="outline"
                  className="bg-[#2b2b2b] hover:bg-[#3e3e3e] text-gray-300 hover:text-white border-gray-600"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/patrick-nguyen-44766a188/" target='_blank'>
                <Button
                  variant="outline"
                  className="bg-[#2b2b2b] hover:bg-[#3e3e3e] text-gray-300 hover:text-white border-gray-600"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </Link>
              <Link href="https://www.youtube.com/@patricknguyen-0101" target='_blank'>
                <Button
                  variant="outline"
                  className="bg-[#2b2b2b] hover:bg-[#3e3e3e] text-gray-300 hover:text-white border-gray-600"
                >
                  <Youtube className="mr-2 h-4 w-4" />
                  YouTube
                </Button>
              </Link>
              <a href="/Patrick_Resume.pdf" download>
                <Button
                  variant="default"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            className="md:w-1/2 mt-10 md:mt-0 relative"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#2d2d2d] rounded-lg overflow-hidden shadow-xl max-w-md mx-auto">
              <div className="bg-[#333333] px-4 py-2 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs text-center flex-grow text-gray-400">profile.jpg</div>
              </div>
              
              <div className="p-4">
                <Image
                  src={profile}
                  alt="Patrick Nguyen"
                  width={400}
                  height={400}
                  className="rounded-md mx-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;