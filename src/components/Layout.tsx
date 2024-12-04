import React from 'react';
import { Outlet } from 'react-router-dom';
import { useStore } from '../store';
import Navigation from './Navigation';

const Layout = () => {
  const { user } = useStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;