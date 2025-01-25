import { FC, ReactNode } from 'react';
import { TRole } from '../model/types';
import { useRoleStore } from '../model/store';

interface IProps {
  children: { [key in TRole]?: ReactNode };
}

export const RoleElement: FC<IProps> = ({ children }) => {
  const role = useRoleStore(state => state.role);

  return children[role];
};
