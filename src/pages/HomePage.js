import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box, Grid } from '@mui/material';
import { faker } from '@faker-js/faker';
import { AppOrderTimeline } from '../sections/@dashboard/app';
import HomeNav from '../components/nav-home/HomeNav';

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '80vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> Home - TakeOff </title>
      </Helmet>

      <HomeNav />

      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Typography variant="h3" paragraph>
                Manage & Grow your company
              </Typography>

              <Typography marginBottom={10} sx={{ color: 'text.secondary' }}>
                Ready to establish a strong foundation for your company, compete in the market and make a virtuous
                business?
              </Typography>

              <Button to="/register" size="large" variant="contained" component={RouterLink}>
                Get started
              </Button>
            </StyledContent>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Box
                component="img"
                src="/assets/illustrations/addcompany.png"
                sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
              />
            </StyledContent>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
