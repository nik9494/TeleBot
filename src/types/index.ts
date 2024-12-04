export interface User {
  id: number;
  username: string;
  role: 'admin' | 'female' | 'male' | 'teamlead';
  balance?: number;
  uniqueCode?: string;
  avatar?: string;
}

export interface Message {
  id: number;
  senderId: number;
  receiverId: number;
  content: string;
  type: 'text' | 'video' | 'audio' | 'photo';
  timestamp: string;
  isBlurred?: boolean;
  cost?: number;
}

export interface Chat {
  id: number;
  femaleId: number;
  maleId: number;
  lastMessage?: Message;
  isOnline: boolean;
}

export interface Statistics {
  earnings: number;
  period: '1h' | '12h' | '24h' | '1m';
  actions: number;
}