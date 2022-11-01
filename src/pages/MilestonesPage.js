import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
// @mui
import { useTheme } from '@mui/material/styles';
import { Card, CardHeader, CardContent, Box, Stack, Button, Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import { ProductList } from '../sections/@dashboard/products';
import newLogo from '../assets/images/takeoffbig.png';

const PRODUCT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

// ----------------------------------------------------------------------

const PRODUCTS = [...Array(4)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/assets/images/covers/cover_${setIndex + 20}.jpg`,
    name: faker.company.catchPhrase(),
    company: 'My company',
    price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 }),
    priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: sample(['sale', 'new', '', '']),
  };
});
// ----------------------------------------------------------------------

export default function MilestonesPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Takeoff</title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="My milestones"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.company.bs(),
                description: '',
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Progress"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: ['Lauch company', 'Go live', 'Secure an investment', 'Marketing compain', 'Improve feautures'][
                  index
                ],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="My tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardHeader title="Upgrade" />
              <CardContent>
                <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
                  <Stack alignItems="center" spacing={3} sx={{ pt: 5, borderRadius: 2, position: 'relative' }}>
                    <Box
                      component="img"
                      src="/assets/illustrations/illustration_avatar.png"
                      sx={{ width: 100, position: 'absolute', top: -50 }}
                    />

                    <Box sx={{ textAlign: 'center' }}>
                      <Typography gutterBottom variant="h6">
                        Get more?
                      </Typography>

                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        From only $169
                      </Typography>
                    </Box>

                    <Button target="_blank" variant="contained">
                      Upgrade to Premium
                    </Button>
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Card>
              <CardHeader title="My products" />
              <CardContent>
                <ProductList products={PRODUCTS} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
