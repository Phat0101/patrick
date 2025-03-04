import React from 'react';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Terminal, Github, Linkedin, Youtube, MoreHorizontal } from 'lucide-react';
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
    <div className="flex justify-between items-center h-10 bg-[#333333] text-gray-300 px-3 md:px-4 border-b border-gray-700">
      <div className="flex items-center space-x-4 md:space-x-6">
        <span className="font-mono text-sm font-semibold text-green-400 ml-6 md:ml-0">Patrick.dev</span>
        <div className="hidden md:flex space-x-4 text-xs">
          <span className="hover:text-white cursor-pointer">File</span>
          <span className="hover:text-white cursor-pointer">Edit</span>
          <span className="hover:text-white cursor-pointer">View</span>
          <span className="hover:text-white cursor-pointer">Help</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-1 md:space-x-2">
        <div className="relative sm:hidden group">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-300 hover:text-white">
            <MoreHorizontal size={16} />
          </Button>
          <div className="absolute right-0 top-full mt-1 bg-[#252526] border border-gray-700 rounded shadow-lg hidden group-hover:block z-50">
            <Link href="https://github.com/Phat0101" target="_blank" className="flex items-center px-4 py-2 hover:bg-[#2d2d2d] text-sm">
              <Github size={14} className="mr-2" /> GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/patrick-nguyen-44766a188/" target="_blank" className="flex items-center px-4 py-2 hover:bg-[#2d2d2d] text-sm">
              <Linkedin size={14} className="mr-2" /> LinkedIn
            </Link>
            <Link href="https://www.youtube.com/@patricknguyen-0101" target="_blank" className="flex items-center px-4 py-2 hover:bg-[#2d2d2d] text-sm">
              <Youtube size={14} className="mr-2" /> YouTube
            </Link>
          </div>
        </div>
        
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