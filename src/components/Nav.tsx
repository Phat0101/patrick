import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Adjust the import path
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Nav: React.FC<NavProps> = ({ darkMode, toggleDarkMode, activeSection, setActiveSection }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-2 right-2 sm:left-8 sm:right-8 md:left-16 md:right-16 z-50"
    >
      <nav className="w-fit sm:w-auto bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 shadow-lg rounded-full">
        <div className="mx-auto w-fit sm:w-auto px-2 sm:px-6 py-3">
          <div className="flex justify-center sm:justify-between items-center">
          <Link href="/" className="ml-2 text-xl font-bold hidden sm:block animate-text-color">Patrick</Link>
          <ul className="flex space-x-2 md:space-x-6 items-center text-base">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors px-1 py-1 sm:px-3 sm:py-2 rounded-full ${activeSection === item.toLowerCase() ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
                    onClick={() => setActiveSection(item.toLowerCase())}
                  > 
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleDarkMode}
                  className=""
                >
                  {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
                  <span className="sr-only">Toggle dark mode</span>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </motion.div>

  );
};

export default Nav;