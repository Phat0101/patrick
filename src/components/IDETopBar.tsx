import React from 'react';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Terminal, Github, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';

interface IDETopBarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  toggleTerminal: () => void;
}

const IDETopBar: React.FC<IDETopBarProps> = ({ 
  darkMode, 
  toggleDarkMode,
  toggleTerminal
}) => {
  return (
    <div className="flex justify-between items-center h-10 bg-[#333333] text-gray-300 px-4 border-b border-gray-700">
      <div className="flex items-center space-x-6">
        <span className="font-mono text-sm font-semibold text-green-400">Patrick.dev</span>
        <div className="hidden md:flex space-x-4 text-xs">
          <span className="hover:text-white cursor-pointer">File</span>
          <span className="hover:text-white cursor-pointer">Edit</span>
          <span className="hover:text-white cursor-pointer">View</span>
          <span className="hover:text-white cursor-pointer">Help</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Link href="https://github.com/Phat0101" target="_blank" className="hidden sm:block">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-300 hover:text-white">
            <Github size={16} />
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/patrick-nguyen-44766a188/" target="_blank" className="hidden sm:block">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-300 hover:text-white">
            <Linkedin size={16} />
          </Button>
        </Link>
        <Link href="https://www.youtube.com/@PatrickNguyen01" target="_blank" className="hidden sm:block">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-300 hover:text-white">
            <Youtube size={16} />
          </Button>
        </Link>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleTerminal}
          className="h-8 w-8 text-gray-300 hover:text-white"
        >
          <Terminal size={16} />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleDarkMode}
          className="h-8 w-8 text-gray-300 hover:text-white"
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </Button>
      </div>
    </div>
  );
};

export default IDETopBar; 