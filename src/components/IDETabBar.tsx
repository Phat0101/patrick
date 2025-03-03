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
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex overflow-x-auto bg-[#252526] text-gray-400 border-b border-gray-700 min-h-[40px]">
      {menuItems.map((item) => {
        const tabName = `${item.label}.tsx`;
        const isActive = activeTab === `${item.id}.tsx`;
        
        return (
          <div
            key={item.id}
            onClick={() => handleTabClick(item.id)}
            className={`
              flex items-center px-4 py-2 border-r border-gray-700 cursor-pointer min-w-[120px] max-w-[200px]
              ${isActive ? 'bg-[#1e1e1e] text-white' : 'hover:bg-[#2d2d2d]'}
            `}
          >
            <div className="flex items-center space-x-2 overflow-hidden">
              {item.icon}
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
  );
};

export default IDETabBar; 