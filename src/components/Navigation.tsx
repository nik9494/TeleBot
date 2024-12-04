import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const { user } = useStore();
  const [isOpen, setIsOpen] = React.useState(false);

  const getNavItems = () => {
    switch (user?.role) {
      case 'admin':
        return [
          { label: 'Dashboard', path: '/' },
          { label: 'Reports', path: '/reports' },
          { label: 'Balance Requests', path: '/balance-requests' },
          { label: 'Active Chats', path: '/active-chats' },
          { label: 'All Girls', path: '/girls' },
          { label: 'Settings', path: '/settings' }
        ];
      case 'female':
        return [
          { label: 'Dashboard', path: '/' },
          { label: 'My Chats', path: '/chats' },
          { label: 'Statistics', path: '/statistics' }
        ];
      case 'male':
        return [
          { label: 'Dashboard', path: '/' },
          { label: 'Enter Code', path: '/enter-code' },
          { label: 'My Chats', path: '/chats' },
          { label: 'Balance', path: '/balance' }
        ];
      case 'teamlead':
        return [
          { label: 'Dashboard', path: '/' },
          { label: 'Girls Statistics', path: '/girls-stats' },
          { label: 'Active Chats', path: '/active-chats' }
        ];
      default:
        return [];
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">Chat App</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {getNavItems().map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {getNavItems().map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;