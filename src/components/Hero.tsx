import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button'; // Adjust the import path
import { Github, Linkedin, Download } from 'lucide-react'; // Adjust the import path
import profile from '../../public/profile.jpg';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  return (
    <section id="hero" className="py-20 bg-gradient-to-b from-blue-50 to-pink-50 dark:from-gray-900 dark:to-blue-900">
      <div className="mt-20 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Hello, I&apos;m Patrick Nguyen
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              I&apos;m a software engineer passionate about building modern web applications.
            </p>
            <div className="flex justify-center md:justify-start space-x-2 sm:space-x-4">
              <Link href="https://github.com/Phat0101" target='_blank' >
                <Button
                  variant="outline"
                  className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/patrick-nguyen-44766a188/" target='_blank' >
                <Button
                  variant="outline"
                  className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </Link>
              <a href="/Patrick_Resume.pdf" download>
                <Button
                  variant="default"
                  className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </a>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-10 md:mt-0"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={profile} // Adjust the path if necessary
              alt="Patrick Nguyen"
              width={400}
              height={400}
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;