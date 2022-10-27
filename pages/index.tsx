import { Text } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactElement } from 'react';
import { MainLayout } from '../layouts';
import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = () => {
  // <link rel="icon" href="/favicon.ico" />
  return (
    <>
      <Head>
        <title>Homepage - dMart</title>
        <meta name="description" content="dMart" />
      </Head>
      <Text>THIS IS INIT PAGE</Text>
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
