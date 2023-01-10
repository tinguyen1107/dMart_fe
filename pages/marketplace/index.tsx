import React, { useMemo } from 'react';
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
  Center,
  Divider,
  HStack,
  VStack,
} from '@chakra-ui/react';
import {
  NavBar,
  NftCard,
  HeadLine,
  TrendingCard,
  OrderCard,
  Avatar,
  AccountsList,
} from '../../components';
import { useAccountList, useMarketplacePage } from '../../hooks';
import { useRouter } from 'next/router';

const Marketplace = () => {
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

  const {
    marketplacePageState: { accountQuery, listOrdersQuery },
  } = useMarketplacePage();
  const {
    accountListState: { listAccountsQuery },
  } = useAccountList();
  const router = useRouter();

  const listAccounts = useMemo(() => {
    if (listAccountsQuery.data?.length)
      return listAccountsQuery.data.filter((account) => account.numNfts != 0);
    else return [];
  }, [listAccountsQuery.data]);

  return (
    <>
      <Header>
        <title>DMart</title>
      </Header>
      <MainLayout>
        <Box h="100px" />
        <Stack spacing="15px" color="#fff">
          <HeadLine />
          <Box bg="var(--bgPrimary)" borderRadius="12px">
            <Tabs isFitted variant="unstyled">
              <TabList color={'gray'} as="b" h="80px">
                <Tab _selected={{ color: 'white', borderBottomWidth: '2px' }}>
                  <Text> NFTs </Text>
                  <Badge mx={4}>{listOrdersQuery.data?.length ?? 0}</Badge>
                </Tab>
                <Tab _selected={{ color: 'white', borderBottomWidth: '2px' }}>
                  <Text> Creators </Text>
                  <Badge mx={4}>{listAccounts.length}</Badge>
                </Tab>
              </TabList>
              <Divider />
              <TabPanels>
                <TabPanel>
                  {listOrdersQuery.data?.length == 0 ? (
                    <Center h="240px">
                      <Text fontSize="xl" fontWeight="600" color="#fff5">
                        Empty
                      </Text>
                    </Center>
                  ) : (
                    <SimpleGrid columns={[1, 2, 3]} gap="30px" mt="60px">
                      {!!listOrdersQuery.data &&
                        listOrdersQuery.data.map((order, id) => (
                          <Box key={id}>
                            <OrderCard data={order} />
                          </Box>
                        ))}
                    </SimpleGrid>
                  )}
                </TabPanel>
                <TabPanel>
                  {listAccountsQuery.data?.length == 0 ? (
                    <Center h="240px">
                      <Text fontSize="xl" fontWeight="600" color="#fff5">
                        Empty
                      </Text>
                    </Center>
                  ) : (
                    <SimpleGrid columns={[2, 4, 6]} gap="30px" mt="40px">
                      {!!listAccountsQuery.data &&
                        listAccounts.map((account, id) => (
                          <Center key={id}>
                            <VStack
                              textAlign="center"
                              w="120px"
                              _hover={{ bg: '#fff2' }}
                              p="15px 6px"
                              borderRadius="10px"
                              cursor="pointer"
                              onClick={() =>
                                router.push(`/account/${account.id}`)
                              }
                            >
                              <Box w="45px">
                                <Avatar
                                  accountId={account.id}
                                  url={account.accountInfo.avatar}
                                />
                              </Box>
                              <VStack spacing="0" w="100%">
                                <Text
                                  fontSize="14px"
                                  fontWeight="800"
                                  w="100%"
                                  noOfLines={1}
                                >
                                  {account.accountInfo.displayName}
                                </Text>
                                <Text
                                  fontSize="12px"
                                  fontWeight="500"
                                  w="100%"
                                  noOfLines={1}
                                >
                                  NFT: {account.numNfts}
                                </Text>
                              </VStack>
                            </VStack>
                          </Center>
                        ))}
                    </SimpleGrid>
                  )}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Stack>
      </MainLayout>
      <NavBar />
    </>
  );
};

export default Marketplace;
