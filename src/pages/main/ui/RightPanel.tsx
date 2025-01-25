import { Stack } from '@mui/material';

import { ActorCard } from '@/entities/actor';
import { DirectorCard } from '@/entities/director';

import { Card } from '@/shared/ui/components/Card';
import { RoleElement } from '@/entities/role';

export const RightPanel = () => {
  return (
    <Stack gap={4} sx={{ boxShadow: 4, padding: 4 }}>
      <RoleElement>
        {{ actor: <ActorCard />, director: <DirectorCard /> }}
      </RoleElement>

      <Card title='Auth Card' sx={{ backgroundColor: 'burlywood' }} />

      <Card title='Common Card' sx={{ backgroundColor: 'cadetblue' }} />
    </Stack>
  );
};
