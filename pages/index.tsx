import { Box, 
  HStack, 
  Stack, 
  Text, } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactElement } from 'react';
import { LoginButton, Footer, NavBar, TrendingCardCollection} from '../components';
import { MainLayout } from '../layouts';
import { NextPageWithLayout } from './_app';
import { Banner } from '../components';

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Stack bg="#2B2B2B">
        <Box p='50px'><Text color='white' as='b' fontSize={{sm: '20',md: '30', lg: '40', xl: '50'}}>Trending Collection</Text></Box>
        <TrendingCardCollection />
      <Head>
        <title>Home page</title>
        <meta name="description" content="dMart" />
      </Head>
      <Box p="20px">
        <HStack>
          <Text fontSize="24px" fontWeight="700">
            DMart
          </Text>
          <Text fontSize="24px" fontWeight="700">
            Feature
          </Text>
        </HStack>
        <Text fontSize="20px" fontWeight="600">
          List NFT
        </Text>
      </Box>
      </Stack>
      <Footer/>
      
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
