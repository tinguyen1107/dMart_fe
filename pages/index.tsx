import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactElement } from 'react';
import {
  LoginButton,
  Footer,
  NavBar,
  TrendingCardCollection,
} from '../components';
import { MainLayout } from '../layouts';
import { NextPageWithLayout } from './_app';
import { Banner } from '../components';

import { AccountApi } from '../apis';

import { DiscoverMoreNFT } from '../components/discover-more';
import { BiddingCard } from '../components/bidding-card';


const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Stack bg="#2B2B2B">
        <Box p="50px">
          <Text
            color="white"
            as="b"
            fontSize={{ sm: '20', md: '30', lg: '40', xl: '50' }}
          >
            Trending Collection
          </Text>
        </Box>
        <TrendingCardCollection />
        <Box p="50px">
          <Text
            color="white"
            as="b"
            fontSize={{ sm: '20', md: '30', lg: '40', xl: '50' }}
          >
            Discover more NFT
          </Text>
        </Box>
        <DiscoverMoreNFT/>
        <Box p="50px">
          <Text
            color="white"
            as="b"
            fontSize={{ sm: '20', md: '30', lg: '40', xl: '50' }}
          >
            NFT Auction
          </Text>
        </Box>
        <BiddingCard/>
      
        <Footer />
      </Stack>
      
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
