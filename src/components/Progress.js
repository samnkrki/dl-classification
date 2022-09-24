import { CircularProgress, Stack } from '@mui/material';

export function ProgressComponent() {
  return (
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="inherit" />
    </Stack>
  );
}

ProgressComponent.propTypes = {};
