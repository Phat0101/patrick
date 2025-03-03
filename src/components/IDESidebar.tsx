import React from 'react';
import { ChevronDown, FolderOpen, FileCode } from 'lucide-react';

interface MenuItemType {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface IDESidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  menuItems: MenuItemType[];
}

const IDESidebar: React.FC<IDESidebarProps> = ({ 
  activeSection, 
  setActiveSection,
  menuItems
}) => {
  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="w-16 md:w-56 bg-[#252526] text-gray-300 border-r border-gray-700 flex-shrink-0 overflow-y-auto">
      {/* Explorer Header */}
      <div className="p-3 text-xs uppercase font-semibold tracking-wider text-gray-400 hidden md:block">
        Explorer
      </div>
      
      {/* Portfolio Project */}
      <div className="mb-4">
        <div className="flex items-center px-3 py-2 hover:bg-[#2a2d2e] cursor-pointer">
          <ChevronDown size={16} className="mr-1" />
          <FolderOpen size={16} className="mr-2 text-blue-400" />
          <span className="text-sm hidden md:inline">portfolio</span>
        </div>
        
        {/* Components Folder */}
        <div className="pl-6">
          <div className="flex items-center px-3 py-1 hover:bg-[#2a2d2e] cursor-pointer">
            <ChevronDown size={16} className="mr-1" />
            <FolderOpen size={16} className="mr-2 text-yellow-400" />
            <span className="text-sm hidden md:inline">components</span>
          </div>
          
          {/* Files */}
          <div className="pl-6">
            {menuItems.map((item) => (
              <div 
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`flex items-center px-3 py-1 hover:bg-[#2a2d2e] cursor-pointer ${
                  activeSection === item.id ? 'bg-[#094771] hover:bg-[#094771]' : ''
                }`}
              >
                <FileCode size={16} className={`mr-2 ${activeSection === item.id ? 'text-white' : 'text-blue-400'}`} />
                <span className="text-sm whitespace-nowrap hidden md:inline">{`${item.label}.tsx`}</span>
                {/* Mobile view - just show icon */}
                <span className="md:hidden">{item.icon}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Assets Folder */}
        <div className="pl-6">
          <div className="flex items-center px-3 py-1 hover:bg-[#2a2d2e] cursor-pointer">
            <ChevronDown size={16} className="mr-1" />
            <FolderOpen size={16} className="mr-2 text-green-400" />
            <span className="text-sm hidden md:inline">assets</span>
          </div>
        </div>
        
        {/* Utils Folder */}
        <div className="pl-6">
          <div className="flex items-center px-3 py-1 hover:bg-[#2a2d2e] cursor-pointer">
            <ChevronDown size={16} className="mr-1" />
            <FolderOpen size={16} className="mr-2 text-orange-400" />
            <span className="text-sm hidden md:inline">utils</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDESidebar; 