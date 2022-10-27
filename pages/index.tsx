import { Text } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactElement } from 'react';
import { MainLayout } from '../layouts';
import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Homepage - dWork</title>
        <meta name="description" content="dWork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text>THIS IS INIT PAGE</Text>
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
