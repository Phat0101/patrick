'use client'
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Terminal, Github, Linkedin, Youtube, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

interface IDETopBarProps {
  toggleDarkMode: () => void;
  toggleTerminal: () => void;
}

const IDETopBar: React.FC<IDETopBarProps> = ({ 
  toggleDarkMode,
  toggleTerminal
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render theme-specific elements after mounting
  // This avoids hydration mismatch between server and client
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex justify-between items-center h-10 bg-surface-subtle text-content-secondary px-3 md:px-4 border-b border-border">
      <div className="flex items-center space-x-4 md:space-x-6">
        <span className="font-mono text-sm font-semibold text-content-primary ml-6 md:ml-0">Patrick.dev</span>
        <div className="hidden md:flex space-x-4 text-xs">
          <span className="hover:text-content-primary cursor-pointer transition-colors">File</span>
          <span className="hover:text-content-primary cursor-pointer transition-colors">Edit</span>
          <span className="hover:text-content-primary cursor-pointer transition-colors">View</span>
          <span className="hover:text-content-primary cursor-pointer transition-colors">Help</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-1 md:space-x-2">
        <div className="relative sm:hidden group">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-content-secondary hover:text-content-primary hover:bg-interactive-hover transition-colors">
            <MoreHorizontal size={16} />
          </Button>
          <div className="absolute right-0 top-full mt-1 bg-surface-white border border-border rounded shadow-lg hidden group-hover:block z-50">
            <Link href="https://github.com/Phat0101" target="_blank" className="flex items-center px-4 py-2 hover:bg-interactive-hover text-sm text-content-primary transition-colors">
              <Github size={14} className="mr-2" /> GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/patrick-nguyen-44766a188/" target="_blank" className="flex items-center px-4 py-2 hover:bg-interactive-hover text-sm text-content-primary transition-colors">
              <Linkedin size={14} className="mr-2" /> LinkedIn
            </Link>
            <Link href="https://www.youtube.com/@patricknguyen-0101" target="_blank" className="flex items-center px-4 py-2 hover:bg-interactive-hover text-sm text-content-primary transition-colors">
              <Youtube size={14} className="mr-2" /> YouTube
            </Link>
          </div>
        </div>
        
        <Link href="https://github.com/Phat0101" target="_blank" className="hidden sm:block">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-content-secondary hover:text-content-primary hover:bg-interactive-hover transition-colors">
            <Github size={16} />
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/patrick-nguyen-44766a188/" target="_blank" className="hidden sm:block">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-content-secondary hover:text-content-primary hover:bg-interactive-hover transition-colors">
            <Linkedin size={16} />
          </Button>
        </Link>
        <Link href="https://www.youtube.com/@patricknguyen-0101" target="_blank" className="hidden sm:block">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-content-secondary hover:text-content-primary hover:bg-interactive-hover transition-colors">
            <Youtube size={16} />
          </Button>
        </Link>
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleTerminal}
          className="h-8 w-8 text-content-secondary hover:text-content-primary hover:bg-interactive-hover transition-colors"
        >
          <Terminal size={16} />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleDarkMode}
          className="h-8 w-8 text-content-secondary hover:text-content-primary hover:bg-interactive-hover transition-colors"
        >
          {mounted ? (
            theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />
          ) : (
            <span className="w-4 h-4"></span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default IDETopBar; 