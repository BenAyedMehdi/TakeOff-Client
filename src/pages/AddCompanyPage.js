import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
import AddCompanyForm from '../sections/auth/add-company/AddCompanyForm';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';
// sections
import { RegisterForm } from '../sections/auth/register';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
  margin: 0,
  padding: 0,
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function AddCompanyPage() {
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Helmet>
        <title> Add company - TakeOff </title>
      </Helmet>

      <StyledRoot>
        {mdUp && (
          <StyledSection>
            <Box>
              <Logo dest="/home" />
            </Box>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome back
            </Typography>
            <img src="/assets/illustrations/addcompany.png" alt="login" />
          </StyledSection>
        )}

        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Add your company
            </Typography>

            <Typography variant="body2" sx={{ mb: 5 }}>
              Already have a company registred? {''}
              <Link href="login" variant="subtitle2">
                Login
              </Link>
            </Typography>

           

            <AddCompanyForm />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
