import { create } from 'zustand';

type TRole = 'actor' | 'director' | null;

type TState = {
  role: TRole;
};

type TActions = {
  setRole: (role: TRole) => void;
};

export const useRoleStore = create<TState & TActions>(set => ({
  role: null,
  setRole: role => set(() => ({ role }))
}));
