import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { WebApp } from '@twa-dev/sdk';
import { useStore } from './store';
import AdminDashboard from './pages/admin/Dashboard';
import FemaleDashboard from './pages/female/Dashboard';
import MaleDashboard from './pages/male/Dashboard';
import TeamLeadDashboard from './pages/teamlead/Dashboard';
import Layout from './components/Layout';
import { expandWebApp } from './utils/telegram';
import UnauthorizedPage from './components/UnauthorizedPage';

// Import all the required pages
import Reports from './pages/admin/Reports';
import BalanceRequests from './pages/admin/BalanceRequests';
import ActiveChats from './pages/admin/ActiveChats';
import AllGirls from './pages/admin/AllGirls';
import Settings from './pages/admin/Settings';
import FemaleChats from './pages/female/Chats';
import FemaleStats from './pages/female/Statistics';
import EnterCode from './pages/male/EnterCode';
import MaleChats from './pages/male/Chats';
import MaleBalance from './pages/male/Balance';
import TeamLeadGirlsStats from './pages/teamlead/GirlsStats';
import TeamLeadActiveChats from './pages/teamlead/ActiveChats';

function App() {
  const { user, setUser } = useStore();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeWebApp = async () => {
      try {
        expandWebApp();
        setTimeout(() => {
          setUser({
            id: 1,
            username: 'Test User',
            role: 'male',
            balance: 100
          });
          setIsInitialized(true);
        }, 1000);
      } catch (error) {
        console.error('Failed to initialize Telegram WebApp:', error);
        setIsInitialized(true);
        setUser({
          id: 1,
          username: 'Test User',
          role: 'male',
          balance: 100
        });
      }
    };

    initializeWebApp();
  }, [setUser]);

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const renderRoutes = () => {
    switch (user?.role) {
      case 'admin':
        return (
          <>
            <Route index element={<AdminDashboard />} />
            <Route path="reports" element={<Reports />} />
            <Route path="balance-requests" element={<BalanceRequests />} />
            <Route path="active-chats" element={<ActiveChats />} />
            <Route path="girls" element={<AllGirls />} />
            <Route path="settings" element={<Settings />} />
          </>
        );
      case 'female':
        return (
          <>
            <Route index element={<FemaleDashboard />} />
            <Route path="chats" element={<FemaleChats />} />
            <Route path="statistics" element={<FemaleStats />} />
          </>
        );
      case 'male':
        return (
          <>
            <Route index element={<MaleDashboard />} />
            <Route path="enter-code" element={<EnterCode />} />
            <Route path="chats" element={<MaleChats />} />
            <Route path="balance" element={<MaleBalance />} />
          </>
        );
      case 'teamlead':
        return (
          <>
            <Route index element={<TeamLeadDashboard />} />
            <Route path="girls-stats" element={<TeamLeadGirlsStats />} />
            <Route path="active-chats" element={<TeamLeadActiveChats />} />
          </>
        );
      default:
        return <Route index element={<Navigate to="/unauthorized" replace />} />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {renderRoutes()}
        </Route>
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;