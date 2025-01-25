import { Box, Button, Card, CardContent, Stack, Typography } from '@mui/material';

import { useRoleStore } from '@/entities/role';

export const RightPanel = () => {
  const { role, setRole } = useRoleStore();

  return (
    <Stack gap={4}>
      <Card>
        <CardContent>
          <Typography>Actor Card</Typography>
        </CardContent>
      </Card>
    </Stack>
  );
};
