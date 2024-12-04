import React, { useState, useEffect } from 'react';
import { Send, Paperclip, Mic } from 'lucide-react';
import { getChatBackground } from '../../utils/timeUtils';
import { Message } from '../../types';

interface ChatInterfaceProps {
  messages: Message[];
  onSendMessage: (content: string) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ messages, onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [background, setBackground] = useState(getChatBackground());

  useEffect(() => {
    const interval = setInterval(() => {
      setBackground(getChatBackground());
    }, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className={`flex-1 overflow-y-auto p-4 ${background}`}>
        <div className="max-w-3xl mx-auto">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`mb-4 flex ${
                msg.senderId === 1 ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`rounded-lg px-4 py-2 max-w-[70%] ${
                  msg.senderId === 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-800'
                }`}
              >
                {msg.content}
                <div className="text-xs mt-1 opacity-70">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white border-t p-4">
        <div className="max-w-3xl mx-auto flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Paperclip className="w-6 h-6 text-gray-500" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Message"
            className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          {message ? (
            <button
              onClick={handleSend}
              className="p-2 hover:bg-blue-100 rounded-full"
            >
              <Send className="w-6 h-6 text-blue-500" />
            </button>
          ) : (
            <button className="p-2 hover:bg-blue-100 rounded-full">
              <Mic className="w-6 h-6 text-blue-500" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;