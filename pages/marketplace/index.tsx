import React from 'react';
import Header from 'next/head';
import { MainLayout } from '../../layouts';
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Badge,
  Grid,
  GridItem,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import { NavBar, NftCard, HeadLine, TrendingCard } from '../../components';

const marketplace = () => {
  const nfts = [
    {
      id: 1,
      imgUrl: 'https://i.ibb.co/FD1yD06/1.png',
      title: 'distant galaxy',
      artist: 'Moon Dancer',
      price: '1,63',
      hbid: '0.33',
      ava: 'https://bit.ly/dan-abramov',
    },
    {
      id: 2,
      imgUrl: 'https://i.ibb.co/FD1yD06/1.png',
      title: 'distant galaxy',
      artist: 'Moon Dancer 2',
      price: '1,63',
      hbid: '0.33',
      ava: 'https://bit.ly/dan-abramov',
    },
    {
      id: 3,
      imgUrl: 'https://i.ibb.co/FD1yD06/1.png',
      title: 'distant galaxy',
      artist: 'Moon Dancer 3',
      price: '1,63',
      hbid: '0.33',
      ava: 'https://bit.ly/dan-abramov',
    },
    {
      id: 4,
      imgUrl: 'https://i.ibb.co/FD1yD06/1.png',
      title: 'distant galaxy',
      artist: 'Moon Dancer 2',
      price: '1,63',
      hbid: '0.33',
      ava: 'https://bit.ly/dan-abramov',
    },
  ];
  const collections = [
    {
      label: '1',
      top: 'https://i.ibb.co/3NKh8HX/top.png',
      left: 'https://i.ibb.co/3NKh8HX/top.png',
      mid: 'https://i.ibb.co/3NKh8HX/top.png',
      right: 'https://i.ibb.co/3NKh8HX/top.png',
    },
    {
      label: '3',
      top: 'https://i.ibb.co/3NKh8HX/top.png',
      left: 'https://i.ibb.co/3NKh8HX/top.pngh',
      mid: 'https://i.ibb.co/3NKh8HX/top.png',
      right: 'https://i.ibb.co/3NKh8HX/top.png',
    },
    {
      label: '4',
      top: 'https://i.ibb.co/3NKh8HX/top.png',
      left: 'https://i.ibb.co/3NKh8HX/top.png',
      mid: 'https://i.ibb.co/3NKh8HX/top.png',
      right: 'https://i.ibb.co/3NKh8HX/top.png',
    },
  ];
  // {nfts.map((card) => (
  //   <GridItem key={card.id}>
  //     <NftCard {...card} />
  //   </GridItem>
  // ))}
  return (
    <>
      <Header>
        <title>DMart</title>
      </Header>
      <MainLayout>
        <Stack spacing="0">
          <HeadLine />
          <Tabs isFitted variant="unstyled">
            <TabList color={'gray'} bg="#2B2B2B" as="b">
              <Tab _selected={{ color: 'white', borderBottomWidth: '2px' }}>
                <Text> NFTs </Text>
                <Badge mx={4}>{nfts.length}</Badge>
              </Tab>
              <Tab _selected={{ color: 'white', borderBottomWidth: '2px' }}>
                <Text> Collections </Text>
                <Badge mx={4}>{collections.length}</Badge>
              </Tab>
            </TabList>
            <TabPanels bg="#3B3B3B">
              <TabPanel>
                <SimpleGrid
                  columns={[1, 2, 3]}
                  gap="30px"
                  mt="60px"
                ></SimpleGrid>
              </TabPanel>
              <TabPanel>
                <Grid
                  templateColumns="repeat(3, 1fr)"
                  gap={{ sm: '5', md: '5', lg: '30' }}
                  mt="60px"
                >
                  {collections.map((child) => (
                    <GridItem key={child.label}>
                      <TrendingCard {...child} />
                    </GridItem>
                  ))}
                </Grid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </MainLayout>
      <NavBar />
    </>
  );
};

export default marketplace;
