import React from 'react';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-300/50">&copy; {new Date().getFullYear()} Patrick Nguyen. All rights reserved.</p>
        <p className=" text-xs text-gray-500 dark:text-gray-300/50 mt-2">Built with Next.js, Tailwind CSS, Framer Motion, Resend | Powered by Gemini 1.5 Flash | Inspired by ByteGrad.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="https://github.com/Phat0101" target='_blank' className="text-gray-400/50 hover:text-gray-600 dark:hover:text-gray-200">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/patrick-nguyen-44766a188/" target='_blank' className="text-gray-400/50 hover:text-gray-600 dark:hover:text-gray-200">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;