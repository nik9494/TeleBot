import create from 'zustand';
import { User } from '../types';

interface AppState {
  user: User | null;
  setUser: (user: User | null) => void;
  balance: number;
  setBalance: (balance: number) => void;
}

export const useStore = create<AppState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  balance: 0,
  setBalance: (balance) => set({ balance }),
}));