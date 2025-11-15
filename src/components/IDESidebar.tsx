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
        className="md:hidden fixed top-2 left-2 z-50 text-content-secondary hover:text-content-primary hover:bg-interactive-hover transition-colors"
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
          bg-surface-subtle text-content-secondary border-r border-border 
          overflow-y-auto transition-all duration-300 ease-in-out
          ${sidebarOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full md:w-56 md:translate-x-0'}
        `}
      >
        {/* Explorer Header */}
        <div className="p-3 text-xs uppercase font-semibold tracking-wider text-content-tertiary mt-10 md:mt-0">
          Explorer
        </div>
        
        {/* Portfolio Project */}
        <div className="mb-4">
          <div 
            className="flex items-center px-3 py-2 hover:bg-interactive-hover cursor-pointer transition-colors"
            onClick={(e) => toggleFolder('portfolio', e)}
          >
            <div className="flex-shrink-0 mr-1 text-content-tertiary">
              {expandedFolders.portfolio ? 
                <ChevronDown size={16} /> : 
                <ChevronRight size={16} />
              }
            </div>
            <div className="flex-shrink-0 mr-2 text-content-primary">
              {expandedFolders.portfolio ? 
                <FolderOpen size={16} /> : 
                <Folder size={16} />
              }
            </div>
            <span className="text-sm overflow-hidden text-ellipsis whitespace-nowrap text-content-primary">portfolio</span>
          </div>
          
          {/* Only render child content when expanded */}
          {expandedFolders.portfolio && (
            <>
              {/* Components Folder */}
              <div className="pl-6">
                <div 
                  className="flex items-center px-3 py-1 hover:bg-interactive-hover cursor-pointer transition-colors"
                  onClick={(e) => toggleFolder('components', e)}
                >
                  <div className="flex-shrink-0 mr-1 text-content-tertiary">
                    {expandedFolders.components ? 
                      <ChevronDown size={16} /> : 
                      <ChevronRight size={16} />
                    }
                  </div>
                  <div className="flex-shrink-0 mr-2 text-content-primary">
                    {expandedFolders.components ? 
                      <FolderOpen size={16} /> : 
                      <Folder size={16} />
                    }
                  </div>
                  <span className="text-sm overflow-hidden text-ellipsis whitespace-nowrap text-content-secondary">components</span>
                </div>
                
                {/* Files - only show when components folder is expanded */}
                {expandedFolders.components && (
                  <div className="pl-6">
                    {menuItems.map((item) => (
                      <div 
                        key={item.id}
                        onClick={() => handleNavigation(item.id)}
                        className={`
                          flex items-center px-3 py-2 hover:bg-interactive-hover cursor-pointer transition-colors
                          ${activeSection === item.id ? 'bg-interactive-active text-content-primary' : 'text-content-secondary'}
                        `}
                      >
                        <div className={`mr-2 flex-shrink-0 ${activeSection === item.id ? 'text-content-primary' : 'text-content-tertiary'}`}>
                          {item.icon}
                        </div>
                        <span className={`text-sm overflow-hidden text-ellipsis whitespace-nowrap ${activeSection === item.id ? 'text-content-primary' : 'text-content-secondary'}`}>{`${item.label}.tsx`}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Assets Folder */}
              <div className="pl-6">
                <div 
                  className="flex items-center px-3 py-1 hover:bg-interactive-hover cursor-pointer transition-colors"
                  onClick={(e) => toggleFolder('assets', e)}
                >
                  <div className="flex-shrink-0 mr-1 text-content-tertiary">
                    {expandedFolders.assets ? 
                      <ChevronDown size={16} /> : 
                      <ChevronRight size={16} />
                    }
                  </div>
                  <div className="flex-shrink-0 mr-2 text-content-primary">
                    {expandedFolders.assets ? 
                      <FolderOpen size={16} /> : 
                      <Folder size={16} />
                    }
                  </div>
                  <span className="text-sm overflow-hidden text-ellipsis whitespace-nowrap text-content-secondary">assets</span>
                </div>
                
                {/* Only show assets content when expanded */}
                {expandedFolders.assets && (
                  <div className="pl-6">
                    <div className="flex items-center px-3 py-1 text-sm text-content-tertiary">
                      <span className="ml-5">images/</span>
                    </div>
                    <div className="flex items-center px-3 py-1 text-sm text-content-tertiary">
                      <span className="ml-5">fonts/</span>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Utils Folder */}
              <div className="pl-6">
                <div 
                  className="flex items-center px-3 py-1 hover:bg-interactive-hover cursor-pointer transition-colors"
                  onClick={(e) => toggleFolder('utils', e)}
                >
                  <div className="flex-shrink-0 mr-1 text-content-tertiary">
                    {expandedFolders.utils ? 
                      <ChevronDown size={16} /> : 
                      <ChevronRight size={16} />
                    }
                  </div>
                  <div className="flex-shrink-0 mr-2 text-content-primary">
                    {expandedFolders.utils ? 
                      <FolderOpen size={16} /> : 
                      <Folder size={16} />
                    }
                  </div>
                  <span className="text-sm overflow-hidden text-ellipsis whitespace-nowrap text-content-secondary">utils</span>
                </div>
                
                {/* Only show utils content when expanded */}
                {expandedFolders.utils && (
                  <div className="pl-6">
                    <div className="flex items-center px-3 py-1 text-sm text-content-tertiary">
                      <span className="ml-5">helpers.ts</span>
                    </div>
                    <div className="flex items-center px-3 py-1 text-sm text-content-tertiary">
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