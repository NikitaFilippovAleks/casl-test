import { Stack } from '@mui/material';

import { LeftPanel } from './LeftPanel';
import { RightPanel } from './RightPanel';

export const MainPage = () => {
  return (
    <Stack flexDirection='row' gap={4}>
      <LeftPanel />

      <RightPanel />
    </Stack>
  );
};
