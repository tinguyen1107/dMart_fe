import { Box, 
  HStack, 
  Text, } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactElement } from 'react';
import { LoginButton, Footer, NavBar} from '../components';
import { MainLayout } from '../layouts';
import { NextPageWithLayout } from './_app';


const HomePage: NextPageWithLayout = () => {
  return (
    <>
    <NavBar />

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

      <Footer/>
      
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
