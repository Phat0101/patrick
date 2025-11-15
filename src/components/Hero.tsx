import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Download, Youtube } from 'lucide-react';
import profile from '../../public/profile-squared.png';
interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  return (
    <section id="home" className="py-16 md:py-24 px-4 bg-background text-content-primary font-mono">
      <div className="container mx-auto max-w-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div
            className="md:w-1/2 text-center md:text-left w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 text-left bg-surface-muted p-4 md:p-6 rounded border-l-4 border-content-primary overflow-x-auto">
              <pre className="text-content-secondary text-xs md:text-sm">
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
                <span className="text-content-tertiary">const </span>
                <span className="text-content-primary">developer </span>
                <span className="text-content-secondary">= </span>
                <span className="text-content-primary">{"{"}</span>
              </div>
              
              <div className="pl-4 md:pl-6 mb-6 space-y-2">
                <div>
                  <span className="text-content-primary">name</span>
                  <span className="text-content-secondary">: </span>
                  <span className="text-content-primary">&apos;Patrick Nguyen&apos;</span>
                  <span className="text-content-secondary">,</span>
                </div>
                <div>
                  <span className="text-content-primary">title</span>
                  <span className="text-content-secondary">: </span>
                  <span className="text-content-primary">&apos;Software Engineer&apos;</span>
                  <span className="text-content-secondary">,</span>
                </div>
                <div>
                  <span className="text-content-primary">specializes</span>
                  <span className="text-content-secondary">: </span>
                  <span className="text-content-primary">&apos;AI systems and modern web applications&apos;</span>
                  <span className="text-content-secondary">,</span>
                </div>
                <div>
                  <span className="text-content-primary">greeting</span>
                  <span className="text-content-secondary">: </span>
                  <span className="text-content-primary">&apos;👋 Hello World!&apos;</span>
                </div>
                <div>
                  <span className="text-content-primary">hobbies</span>
                  <span className="text-content-secondary">: </span>
                  <span className="text-content-primary">&apos; 📚 Reading, 💪 Gym, 🎧 Music&apos;</span>
                  <span className="text-content-secondary">,</span>
                </div>
              </div>
              
              <div className="mb-8">
                <span className="text-content-primary">{"}"}</span><span className="text-content-secondary">;</span>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start flex-wrap gap-2 md:gap-3">
              <Link href="https://github.com/Phat0101" target='_blank'>
                <Button
                  variant="outline"
                  className="bg-surface-subtle hover:bg-interactive-hover text-content-primary border-border transition-colors"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/patrick-nguyen-44766a188/" target='_blank'>
                <Button
                  variant="outline"
                  className="bg-surface-subtle hover:bg-interactive-hover text-content-primary border-border transition-colors"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </Link>
              <Link href="https://www.youtube.com/@patricknguyen-0101" target='_blank'>
                <Button
                  variant="outline"
                  className="bg-surface-subtle hover:bg-interactive-hover text-content-primary border-border transition-colors"
                >
                  <Youtube className="mr-2 h-4 w-4" />
                  YouTube
                </Button>
              </Link>
              <a href="/Patrick_Resume.pdf" download>
                <Button
                  variant="default"
                  className="bg-content-primary hover:bg-content-primary/90 text-content-inverse transition-colors"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            className="md:w-1/2 mt-10 md:mt-0 relative w-full"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-surface-subtle rounded-lg overflow-hidden shadow-xl max-w-md mx-auto">
              <div className="bg-surface-overlay px-4 py-2 flex items-center border-b border-border">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs text-center flex-grow text-content-tertiary">profile.jpg</div>
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