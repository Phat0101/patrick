import React, { useState } from 'react';
import { ChevronDown, FolderOpen, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigation = (sectionId: string) => {
    // Find the content container - the parent div with overflow-auto
    const contentContainer = document.querySelector('.flex-grow.overflow-auto');
    const element = document.getElementById(sectionId);
    
    if (element && contentContainer) {
      // Calculate the top position of the element relative to the content container
      // Account for the height of the sticky headers (topbar + tabbar)
      const topBarHeight = 40; // Approximate height of the top bar
      const tabBarHeight = 40; // Approximate height of the tab bar
      const offsetTop = element.offsetTop - (topBarHeight + tabBarHeight);
      
      // Scroll the content container to show the element
      contentContainer.scrollTo({
        top: offsetTop > 0 ? offsetTop : 0,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      
      // Close sidebar on navigation on small screens
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    }
  };

  // Toggle sidebar visibility for mobile
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Mobile toggle button - only visible on small screens */}
      <Button 
        variant="ghost" 
        size="icon"
        onClick={toggleSidebar}
        className="md:hidden fixed top-2 left-2 z-50 text-gray-300 hover:text-white"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>

      {/* Mobile overlay - only appears when sidebar is open */}
      {sidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      
      {/* Sidebar */}
      <div 
        className={`
          fixed md:relative left-0 top-0 h-full z-50
          bg-[#252526] text-gray-300 border-r border-gray-700 
          overflow-y-auto transition-all duration-300 ease-in-out
          ${sidebarOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full md:w-56 md:translate-x-0'}
        `}
      >
        {/* Explorer Header */}
        <div className="p-3 text-xs uppercase font-semibold tracking-wider text-gray-400 mt-10 md:mt-0">
          Explorer
        </div>
        
        {/* Portfolio Project */}
        <div className="mb-4">
          <div className="flex items-center px-3 py-2 hover:bg-[#2a2d2e] cursor-pointer">
            <ChevronDown size={16} className="mr-1" />
            <FolderOpen size={16} className="mr-2 text-blue-400" />
            <span className="text-sm">portfolio</span>
          </div>
          
          {/* Components Folder */}
          <div className="pl-6">
            <div className="flex items-center px-3 py-1 hover:bg-[#2a2d2e] cursor-pointer">
              <ChevronDown size={16} className="mr-1" />
              <FolderOpen size={16} className="mr-2 text-yellow-400" />
              <span className="text-sm">components</span>
            </div>
            
            {/* Files */}
            <div className="pl-6">
              {menuItems.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`
                    flex items-center px-3 py-2 hover:bg-[#2a2d2e] cursor-pointer
                    ${activeSection === item.id ? 'bg-[#094771] hover:bg-[#094771]' : ''}
                  `}
                >
                  <div className={`mr-2 ${activeSection === item.id ? 'text-white' : 'text-blue-400'}`}>
                    {item.icon}
                  </div>
                  <span className="text-sm whitespace-nowrap">{`${item.label}.tsx`}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Assets Folder */}
          <div className="pl-6">
            <div className="flex items-center px-3 py-1 hover:bg-[#2a2d2e] cursor-pointer">
              <ChevronDown size={16} className="mr-1" />
              <FolderOpen size={16} className="mr-2 text-green-400" />
              <span className="text-sm">assets</span>
            </div>
          </div>
          
          {/* Utils Folder */}
          <div className="pl-6">
            <div className="flex items-center px-3 py-1 hover:bg-[#2a2d2e] cursor-pointer">
              <ChevronDown size={16} className="mr-1" />
              <FolderOpen size={16} className="mr-2 text-orange-400" />
              <span className="text-sm">utils</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IDESidebar; 