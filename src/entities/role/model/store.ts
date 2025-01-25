import { create } from 'zustand';
import { TRole } from './types';

type TState = {
  role: TRole;
};

type TActions = {
  setRole: (role: TRole) => void;
};

export const useRoleStore = create<TState & TActions>(set => ({
  role: 'unset',
  setRole: role => set(() => ({ role }))
}));
