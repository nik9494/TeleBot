import { format } from 'date-fns';

export const getTimeOfDay = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 21) return 'evening';
  return 'night';
};

export const getChatBackground = () => {
  const timeOfDay = getTimeOfDay();
  const patterns = {
    morning: 'bg-gradient-to-b from-blue-50 to-white',
    afternoon: 'bg-gradient-to-b from-blue-100 to-white',
    evening: 'bg-gradient-to-b from-blue-900 to-blue-800',
    night: 'bg-gradient-to-b from-gray-900 to-blue-900'
  };
  return patterns[timeOfDay];
};