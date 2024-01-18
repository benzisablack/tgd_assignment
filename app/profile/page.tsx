'use client';
import { IRootState } from '@/lib/redux/types';
import { Container, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

export default function Page() {
  const user = useSelector((state: IRootState) => state.user);
  return (
    <Container component='main' maxWidth='sm'>
      <Grid sx={{ margin: 3 }}>
        <Typography variant='h5'>
          Hello {user.firstName} {user.firstName}
        </Typography>
      </Grid>
    </Container>
  );
}
