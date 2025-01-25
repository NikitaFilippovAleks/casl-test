import {
  CardContent,
  CardProps,
  Card as MUICard,
  Typography
} from '@mui/material';
import { FC } from 'react';

interface IProps {
  title: string;
}

export const Card: FC<IProps & CardProps> = ({ title, ...otherProps }) => {
  return (
    <MUICard {...otherProps}>
      <CardContent>
        <Typography>{title}</Typography>
      </CardContent>
    </MUICard>
  );
};
