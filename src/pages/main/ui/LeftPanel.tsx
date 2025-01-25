import { Box, Button, Stack, Typography } from '@mui/material';

import { useRoleStore } from '@/entities/role';

export const LeftPanel = () => {
  const { role, setRole } = useRoleStore();

  return (
    <Stack gap={4} width={200} sx={{ boxShadow: 4, padding: 4 }}>
      <Box>
        <Typography>Role: {role}</Typography>
      </Box>
      <Button variant='contained' onClick={() => setRole('director')}>
        Set Director
      </Button>
      <Button variant='contained' onClick={() => setRole('actor')}>
        Set Actor
      </Button>
      <Button variant='contained' onClick={() => setRole('unset')}>
        Reset role
      </Button>
    </Stack>
  );
};
