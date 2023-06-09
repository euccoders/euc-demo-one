import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewBudget } from 'src/sections/overview/overview-budget';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { OverviewLatestProducts } from 'src/sections/overview/overview-latest-products';
import { OverviewSales } from 'src/sections/overview/overview-sales';
import { OverviewTasksProgress } from 'src/sections/overview/overview-tasks-progress';
import { OverviewTotalCustomers } from 'src/sections/overview/overview-total-customers';
import { OverviewTotalProfit } from 'src/sections/overview/overview-total-profit';
import { OverviewTraffic } from 'src/sections/overview/overview-traffic';
import { CompanyCardList } from 'src/sections/companies/company-card-list';


const now = new Date();

const companiesEntertainment = [
  {
    id: '2569ce0d517a7f06d3ea1f24',
    createdAt: '27/03/2019',
    description: 'Entertainment',
    logo: '/assets/logos/Netflix.png',
    title: 'Netflix',
    downloads: '594',
    monthlyAmount: '$9.99',
    originalAnnualAmount: '$119.99',
    discountedAnnualAmount: '$99.99'
  },
  {
    id: 'ed2b900870ceba72d203ec15',
    createdAt: '31/03/2019',
    description: 'Entertainment',
    logo: '/assets/logos/Hulu.png',
    title: 'Hulu',
    downloads: '625',
    monthlyAmount: '$10.83',
    originalAnnualAmount: '$129.99',
    discountedAnnualAmount: '$79.99'
  },
  {
    id: 'a033e38768c82fca90df3db7',
    createdAt: '03/04/2019',
    description: 'Entertainment',
    logo: '/assets/logos/ParamountPlus.png',
    title: 'Paramount+',
    downloads: '857',
    monthlyAmount: '$11.67',
    originalAnnualAmount: '$139.99',
    discountedAnnualAmount: '$89.99'
  },
  {
    id: 'a033e38768c82fca90df3db7',
    createdAt: '03/04/2019',
    description: 'Entertainment',
    logo: '/assets/logos/ESPN.png',
    title: 'ESPN',
    downloads: '857',
    monthlyAmount: '$9.17',
    originalAnnualAmount: '$109.99',
    discountedAnnualAmount: '$69.99'
  },
  {
    id: 'a033e38768c82fca90df3db7',
    createdAt: '03/04/2019',
    description: 'Entertainment',
    logo: '/assets/logos/DisneyPlus.png',
    title: 'Disney+',
    downloads: '857',
    monthlyAmount: '$8.33',
    originalAnnualAmount: '$99.99',
    discountedAnnualAmount: '$59.99'
  }
];

const companiesMusic = [
  {
    id: '1efecb2bf6a51def9869ab0f',
    createdAt: '04/04/2019',
    description: 'Music',
    logo: '/assets/logos/Music/AppleMusic.png',
    title: 'Apple Music',
    downloads: '406',
    originalAnnualAmount: '$129.99',
    discountedAnnualAmount: '$99.99',
    monthlyAmount: '$10.83'
  },
  {
    id: '1ed68149f65fbc6089b5fd07',
    createdAt: '04/04/2019',
    description: 'Music',
    logo: '/assets/logos/Music/Spotify.png',
    title: 'Spotify',
    downloads: '835',
    originalAnnualAmount: '$99.00',
    discountedAnnualAmount: '$79.99',
    monthlyAmount: '$8.25'
  },
  {
    id: '5dab321376eff6177407e887',
    createdAt: '04/04/2019',
    description: 'Music',
    logo: '/assets/logos/Music/YoutubeMusic.png',
    title: 'Youtube Music',
    downloads: '835',
    originalAnnualAmount: '$149.99',
    discountedAnnualAmount: '$119.99',
    monthlyAmount: '$12.50'
  },
  {
    id: '5dab321376eff6177407e887',
    createdAt: '04/04/2019',
    description: 'Music',
    logo: '/assets/logos/Music/GooglePlayMusic.png',
    title: 'Google Play Music',
    downloads: '835',
    originalAnnualAmount: '$109.99',
    discountedAnnualAmount: '$89.99',
    monthlyAmount: '$9.17'
  },
  {
    id: '5dab321376eff6177407e887',
    createdAt: '04/04/2019',
    description: 'Music',
    logo: '/assets/logos/Music/Pandora.png',
    title: 'Pandora',
    downloads: '835',
    originalAnnualAmount: '$79.99',
    discountedAnnualAmount: '$69.99',
    monthlyAmount: '$6.67'
  },
  {
    id: '5dab321376eff6177407e887',
    createdAt: '04/04/2019',
    description: 'Music',
    logo: '/assets/logos/Music/SoundCloud.png',
    title: 'Sound Cloud',
    downloads: '835',
    originalAnnualAmount: '$89.99',
    discountedAnnualAmount: '$79.99',
    monthlyAmount: '$7.50'
  }
];

const companiesHealth = [
  {
    id: '1efecb2bf6a51def9869ab0f',
    createdAt: '04/04/2019',
    description: 'Health & Wellness',
    logo: '/assets/logos/Health/LaFitness.png',
    title: 'LaFitness',
    downloads: '406',
    originalAnnualAmount: '$139.99',
    discountedAnnualAmount: '$109.99',
    monthlyAmount: '$11.67'
  },
  {
    id: '1ed68149f65fbc6089b5fd07',
    createdAt: '04/04/2019',
    description: 'Health & Wellness',
    logo: '/assets/logos/Health/YMCA.png',
    title: 'YMCA',
    downloads: '835',
    originalAnnualAmount: '$99.00',
    discountedAnnualAmount: '$79.99',
    monthlyAmount: '$8.25'
  },
  {
    id: '5dab321376eff6177407e887',
    createdAt: '04/04/2019',
    description: 'Health & Wellness',
    logo: '/assets/logos/Health/HelloFresh.png',
    title: 'Hello Fresh',
    downloads: '835',
    originalAnnualAmount: '$149.99',
    discountedAnnualAmount: '$119.99',
    monthlyAmount: '$12.50'
  },
  {
    id: '1ed68149f65fbc6089b5fd07',
    createdAt: '04/04/2019',
    description: 'Health & Wellness',
    logo: '/assets/logos/Health/DoorDash.png',
    title: 'Door Dash',
    downloads: '835',
    originalAnnualAmount: '$129.99',
    discountedAnnualAmount: '$99.99',
    monthlyAmount: '$10.83'
  },
  {
    id: '1ed68149f65fbc6089b5fd07',
    createdAt: '04/04/2019',
    description: 'Health & Wellness',
    logo: '/assets/logos/Health/GNC.png',
    title: 'GNC',
    downloads: '835',
    originalAnnualAmount: '$79.99',
    discountedAnnualAmount: '$69.99',
    monthlyAmount: '$6.67'
  },
  {
    id: '1ed68149f65fbc6089b5fd07',
    createdAt: '04/04/2019',
    description: 'Health & Wellness',
    logo: '/assets/logos/Health/Instacart.png',
    title: 'Instacart',
    downloads: '835',
    originalAnnualAmount: '$89.99',
    discountedAnnualAmount: '$79.99',
    monthlyAmount: '$7.50'
  },
  {
    id: '1ed68149f65fbc6089b5fd07',
    createdAt: '04/04/2019',
    description: 'Health & Wellness',
    logo: '/assets/logos/Health/MyFitnessPal.png',
    title: 'MyFitnessPal',
    downloads: '835',
    originalAnnualAmount: '$109.99',
    discountedAnnualAmount: '$89.99',
    monthlyAmount: '$9.17'
  },
  {
    id: '1ed68149f65fbc6089b5fd07',
    createdAt: '04/04/2019',
    description: 'Health & Wellness',
    logo: '/assets/logos/Health/Peloton.png',
    title: 'Peloton',
    downloads: '835',
    originalAnnualAmount: '$119.99',
    discountedAnnualAmount: '$99.99',
    monthlyAmount: '$10.00'
  }
];

const Page = () => (
  <>
    <Head>
      <title>
        Overview | EUC
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={6}
            lg={3}
            paddingBottom={7}
          >
            <OverviewBudget
              difference={12}
              positive
              sx={{ height: '100%' }}
              value="585 Credits"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
            paddingBottom={7}
          >
            <OverviewTotalCustomers
              difference={16}
              positive
              sx={{ height: '100%' }}
              value="8 Services"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
            paddingBottom={7}

          >
            <OverviewTotalProfit
              difference={8}
              positive
              sx={{ height: '100%' }}
              value="$15k"
            />
          </Grid>
          <Grid
            container
            spacing={3}
            paddingBottom={7}
          >
          <Typography variant="h4">
                  Entertainment
                </Typography>
                <CompanyCardList companies={companiesEntertainment} />

          </Grid>
          <Grid
            container
            spacing={3}
            paddingBottom={7}
          >
          <Typography variant="h4">
                  Music
                </Typography>
                <CompanyCardList companies={companiesMusic} />

          </Grid>
          <Grid
            container
            spacing={3}
            paddingBottom={7}
          >
          <Typography variant="h4">
                  Health & Wellness
                </Typography>
                <CompanyCardList companies={companiesHealth} />

          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewLatestProducts
              products={[
                {
                  id: '5ece2c077e39da27658aa8a9',
                  image: '/assets/logos/Netflix.png',
                  name: 'Netflix',
                  updatedAt: subHours(now, 6).getTime()
                },
                {
                  id: '5ece2c0d16f70bff2cf86cd8',
                  image: '/assets/logos/Hulu.png',
                  name: 'Hulu',
                  updatedAt: subDays(subHours(now, 8), 2).getTime()
                },
                {
                  id: 'b393ce1b09c1254c3a92c827',
                  image: '/assets/logos/ParamountPlus.png',
                  name: 'Paramount+',
                  updatedAt: subDays(subHours(now, 1), 1).getTime()
                },
                {
                  id: 'a6ede15670da63f49f752c89',
                  image: '/assets/logos/DisneyPlus.png',
                  name: 'Disney+',
                  updatedAt: subDays(subHours(now, 3), 3).getTime()
                },
                {
                  id: 'bcad5524fe3a2f8f8620ceda',
                  image: '/assets/logos/ESPN.png',
                  name: 'ESPN',
                  updatedAt: subDays(subHours(now, 5), 6).getTime()
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={12}
            lg={8}
          >
            <OverviewLatestOrders
              orders={[
                {
                  id: 'f69f88012978187a6c12897f',
                  ref: 'ORD1049',
                  amount: 30.5,
                  customer: {
                    service: 'Netflix',
                    category: 'Entertainment'
                  },
                  createdAt: 1555016400000,
                  status: 'pending'
                },
                {
                  id: '9eaa1c7dd4433f413c308ce2',
                  ref: 'ORD1048',
                  amount: 25.1,
                  customer: {
                    service: 'Hulu',
                    category: 'Entertainment'
                  },
                  createdAt: 1555016400000,
                  status: 'active'
                },
                {
                  id: '01a5230c811bd04996ce7c13',
                  ref: 'ORD1047',
                  amount: 10.99,
                  customer: {
                    service: 'Paramount+',
                    category: 'Entertainment'
                  },
                  createdAt: 1554930000000,
                  status: 'expired'
                },
                {
                  id: '1f4e1bd0a87cea23cdb83d18',
                  ref: 'ORD1046',
                  amount: 96.43,
                  customer: {
                    service: 'Apple Music',
                    category: 'Music'
                  },
                  createdAt: 1554757200000,
                  status: 'pending'
                },
                {
                  id: '9f974f239d29ede969367103',
                  ref: 'ORD1045',
                  amount: 32.54,
                  customer: {
                    service: 'Spotify',
                    category: 'Music'
                  },
                  createdAt: 1554670800000,
                  status: 'active'
                },
                {
                  id: 'ffc83c1560ec2f66a1c05596',
                  ref: 'ORD1044',
                  amount: 16.76,
                  customer: {
                    service: 'YMCA',
                    category: 'Health & Wellness'
                  },
                  createdAt: 1554670800000,
                  status: 'active'
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            lg={8}
          >
            <OverviewSales
              chartSeries={[
                {
                  name: 'Allocated',
                  data: [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300]
                },
                {
                  name: 'Spent',
                  data: [250, 100, 45, 63, 210, 0, 421, 100, 120, 290, 130, 290]
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewTraffic
              chartSeries={[63, 15, 22]}
              labels={['Entertainment', 'Music', 'Wellness']}
              sx={{ height: '100%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
