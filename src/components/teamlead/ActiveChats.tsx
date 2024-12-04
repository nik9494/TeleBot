import React from 'react';
import { Chat, Message } from '../../types';
import ChatInterface from '../Chat/ChatInterface';

const ActiveChats: React.FC = () => {
  const mockChat: Chat = {
    id: 1,
    femaleId: 1,
    maleId: 2,
    isOnline: true
  };

  const mockMessages: Message[] = [
    {
      id: 1,
      senderId: 1,
      receiverId: 2,
      content: "Hello! How are you today?",
      type: 'text',
      timestamp: new Date().toISOString()
    },
    {
      id: 2,
      senderId: 2,
      receiverId: 1,
      content: "I'm doing great, thanks! How about you?",
      type: 'text',
      timestamp: new Date().toISOString()
    }
  ];

  const handleSendMessage = (content: string) => {
    console.log('Message sent:', content);
  };

  return (
    <div className="h-screen bg-gray-50">
      <ChatInterface messages={mockMessages} onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ActiveChats;