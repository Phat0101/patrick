import React from 'react';
import { X } from 'lucide-react';

interface MenuItemType {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface IDETabBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  menuItems: MenuItemType[];
}

const IDETabBar: React.FC<IDETabBarProps> = ({ 
  activeTab, 
  setActiveTab,
  menuItems
}) => {
  const handleTabClick = (tabId: string) => {
    setActiveTab(`${tabId}.tsx`);
    // Find the content container - the parent div with overflow-auto
    const contentContainer = document.querySelector('.flex-grow.overflow-auto');
    const element = document.getElementById(tabId);
    
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
    }
  };

  return (
    <div className="flex overflow-x-auto scrollbar-hide bg-[#252526] text-gray-400 border-b border-gray-700 min-h-[40px] touch-pan-x">
      <div className="flex min-w-full">
        {menuItems.map((item) => {
          const tabName = `${item.label}.tsx`;
          const isActive = activeTab === `${item.id}.tsx`;
          
          return (
            <div
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`
                flex items-center px-3 py-2 border-r border-gray-700 cursor-pointer
                min-w-[100px] max-w-[160px] sm:min-w-[120px] sm:max-w-[200px] sm:px-4
                ${isActive ? 'bg-[#1e1e1e] text-white' : 'hover:bg-[#2d2d2d]'}
              `}
            >
              <div className="flex items-center space-x-2 overflow-hidden">
                <span className="shrink-0">{item.icon}</span>
                <span className="truncate text-sm">{tabName}</span>
              </div>
              
              {isActive && (
                <div className="ml-auto">
                  <X size={14} className="opacity-50 hover:opacity-100" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IDETabBar; 