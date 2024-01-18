import { Container, Grid } from '@mui/material';
import Register from './register';

export default function Home() {
  return (
    <Container component='main' maxWidth='sm'>
      <Grid sx={{ marginTop: 3, padding: 3, display: 'flex', flexDirection: 'column' }}>
        <Register />
      </Grid>
    </Container>
  );
}

