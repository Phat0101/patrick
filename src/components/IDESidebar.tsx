'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, FolderOpen, Folder, Menu, X } from 'lucide-react';
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
  
  // State to track which folders are expanded
  const [expandedFolders, setExpandedFolders] = useState({
    portfolio: true,
    components: true,
    assets: false,
    utils: false
  });

  const toggleFolder = (folder: keyof typeof expandedFolders, event: React.MouseEvent) => {
    // Prevent the event from bubbling up
    event.stopPropagation();
    
    setExpandedFolders(prev => ({
      ...prev,
      [folder]: !prev[folder]
    }));
  };

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
        className="md:hidden fixed top-2 left-2 z-50 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
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
          bg-gray-100 dark:bg-[#252526] text-gray-800 dark:text-gray-300 border-r border-gray-300 dark:border-gray-700 
          overflow-y-auto transition-all duration-300 ease-in-out
          ${sidebarOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full md:w-56 md:translate-x-0'}
        `}
      >
        {/* Explorer Header */}
        <div className="p-3 text-xs uppercase font-semibold tracking-wider text-gray-500 dark:text-gray-400 mt-10 md:mt-0">
          Explorer
        </div>
        
        {/* Portfolio Project */}
        <div className="mb-4">
          <div 
            className="flex items-center px-3 py-2 hover:bg-gray-200 dark:hover:bg-[#2a2d2e] cursor-pointer"
            onClick={(e) => toggleFolder('portfolio', e)}
          >
            <div className="flex-shrink-0 mr-1">
              {expandedFolders.portfolio ? 
                <ChevronDown size={16} /> : 
                <ChevronRight size={16} />
              }
            </div>
            <div className="flex-shrink-0 mr-2">
              {expandedFolders.portfolio ? 
                <FolderOpen size={16} className="text-blue-600 dark:text-blue-400" /> : 
                <Folder size={16} className="text-blue-600 dark:text-blue-400" />
              }
            </div>
            <span className="text-sm overflow-hidden text-ellipsis whitespace-nowrap">portfolio</span>
          </div>
          
          {/* Only render child content when expanded */}
          {expandedFolders.portfolio && (
            <>
              {/* Components Folder */}
              <div className="pl-6">
                <div 
                  className="flex items-center px-3 py-1 hover:bg-gray-200 dark:hover:bg-[#2a2d2e] cursor-pointer"
                  onClick={(e) => toggleFolder('components', e)}
                >
                  <div className="flex-shrink-0 mr-1">
                    {expandedFolders.components ? 
                      <ChevronDown size={16} /> : 
                      <ChevronRight size={16} />
                    }
                  </div>
                  <div className="flex-shrink-0 mr-2">
                    {expandedFolders.components ? 
                      <FolderOpen size={16} className="text-yellow-600 dark:text-yellow-400" /> : 
                      <Folder size={16} className="text-yellow-600 dark:text-yellow-400" />
                    }
                  </div>
                  <span className="text-sm overflow-hidden text-ellipsis whitespace-nowrap">components</span>
                </div>
                
                {/* Files - only show when components folder is expanded */}
                {expandedFolders.components && (
                  <div className="pl-6">
                    {menuItems.map((item) => (
                      <div 
                        key={item.id}
                        onClick={() => handleNavigation(item.id)}
                        className={`
                          flex items-center px-3 py-2 hover:bg-gray-200 dark:hover:bg-[#2a2d2e] cursor-pointer
                          ${activeSection === item.id ? 'bg-blue-100 dark:bg-[#094771] hover:bg-blue-100 dark:hover:bg-[#094771]' : ''}
                        `}
                      >
                        <div className={`mr-2 flex-shrink-0 ${activeSection === item.id ? 'text-blue-700 dark:text-white' : 'text-blue-600 dark:text-blue-400'}`}>
                          {item.icon}
                        </div>
                        <span className="text-sm overflow-hidden text-ellipsis whitespace-nowrap">{`${item.label}.tsx`}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Assets Folder */}
              <div className="pl-6">
                <div 
                  className="flex items-center px-3 py-1 hover:bg-gray-200 dark:hover:bg-[#2a2d2e] cursor-pointer"
                  onClick={(e) => toggleFolder('assets', e)}
                >
                  <div className="flex-shrink-0 mr-1">
                    {expandedFolders.assets ? 
                      <ChevronDown size={16} /> : 
                      <ChevronRight size={16} />
                    }
                  </div>
                  <div className="flex-shrink-0 mr-2">
                    {expandedFolders.assets ? 
                      <FolderOpen size={16} className="text-green-600 dark:text-green-400" /> : 
                      <Folder size={16} className="text-green-600 dark:text-green-400" />
                    }
                  </div>
                  <span className="text-sm overflow-hidden text-ellipsis whitespace-nowrap">assets</span>
                </div>
                
                {/* Only show assets content when expanded */}
                {expandedFolders.assets && (
                  <div className="pl-6">
                    <div className="flex items-center px-3 py-1 text-sm text-gray-600 dark:text-gray-400">
                      <span className="ml-5">images/</span>
                    </div>
                    <div className="flex items-center px-3 py-1 text-sm text-gray-600 dark:text-gray-400">
                      <span className="ml-5">fonts/</span>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Utils Folder */}
              <div className="pl-6">
                <div 
                  className="flex items-center px-3 py-1 hover:bg-gray-200 dark:hover:bg-[#2a2d2e] cursor-pointer"
                  onClick={(e) => toggleFolder('utils', e)}
                >
                  <div className="flex-shrink-0 mr-1">
                    {expandedFolders.utils ? 
                      <ChevronDown size={16} /> : 
                      <ChevronRight size={16} />
                    }
                  </div>
                  <div className="flex-shrink-0 mr-2">
                    {expandedFolders.utils ? 
                      <FolderOpen size={16} className="text-orange-600 dark:text-orange-400" /> : 
                      <Folder size={16} className="text-orange-600 dark:text-orange-400" />
                    }
                  </div>
                  <span className="text-sm overflow-hidden text-ellipsis whitespace-nowrap">utils</span>
                </div>
                
                {/* Only show utils content when expanded */}
                {expandedFolders.utils && (
                  <div className="pl-6">
                    <div className="flex items-center px-3 py-1 text-sm text-gray-600 dark:text-gray-400">
                      <span className="ml-5">helpers.ts</span>
                    </div>
                    <div className="flex items-center px-3 py-1 text-sm text-gray-600 dark:text-gray-400">
                      <span className="ml-5">constants.ts</span>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default IDESidebar; 