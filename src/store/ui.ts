import { create } from 'zustand';

export interface ZusUIType {
  darkMode: boolean;
  tgoggleDarkMode: (param: boolean) => void;
}

export const useUIStore = create<ZusUIType>((set, _get) => ({
  darkMode: false,
  tgoggleDarkMode: (param: boolean) => set({ darkMode: param }),
}));
