import React from 'react';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-subtle border-t border-border py-8 md:py-12">
      <div className="container mx-auto max-w-container px-4 text-center">
        <p className="caption text-content-tertiary">&copy; {new Date().getFullYear()} Patrick Nguyen. All rights reserved.</p>
        <p className="caption text-content-tertiary mt-2">Built with Next.js, Tailwind CSS, Framer Motion, Resend | Powered by Google Gemini | Inspired by ByteGrad and Aga Kadela.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="https://github.com/Phat0101" target='_blank' className="text-content-tertiary hover:text-content-primary transition-colors">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/patrick-nguyen-44766a188/" target='_blank' className="text-content-tertiary hover:text-content-primary transition-colors">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;