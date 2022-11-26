import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactElement } from 'react';
import { LoginButton } from '../components';
import { MainLayout } from '../layouts';
import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="description" content="dMart" />
      </Head>
      <Box p="20px">
        <HStack>
          <Text fontSize="24px" fontWeight="700">
            DMart
          </Text>
          <LoginButton />
        </HStack>
        <Text fontSize="20px" fontWeight="600">
          List NFT
        </Text>
      </Box>
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
