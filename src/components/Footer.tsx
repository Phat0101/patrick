import React from 'react';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-300">&copy; {new Date().getFullYear()} Patrick Nguyen. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="https://github.com/Phat0101" target='_blank' className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/patrick-nguyen-44766a188/" target='_blank' className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;