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
  SimpleGrid,
  Stack,
  Center,
  VStack,
} from '@chakra-ui/react';
import { NavBar, HeadLine, OrderCard, Avatar } from '../../components';
import { useAccountList, useMarketplacePage } from '../../hooks';
import { useRouter } from 'next/router';

const Marketplace = () => {
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
          <Box bg="var(--bgSecondary)" borderRadius="12px">
            <Tabs isFitted variant="unstyled">
              <TabList
                color={'gray'}
                as="b"
                h="60px"
                bg="var(--bgPrimary)"
                borderTopRadius="12px"
              >
                <Tab
                  _selected={{
                    color: '#fe8668',
                    borderBottomWidth: '2px',
                    borderBottomColor: '#fe8668',
                  }}
                >
                  <Text>{`NFTs (${listOrdersQuery.data?.length ?? 0})`}</Text>
                </Tab>
                <Tab
                  _selected={{
                    color: '#fe8668',
                    borderBottomWidth: '2px',
                    borderBottomColor: '#fe8668',
                  }}
                >
                  <Text>{`Creators (${listAccounts.length})`}</Text>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  {listOrdersQuery.data?.length == 0 ? (
                    <Center h="240px">
                      <Text fontSize="xl" fontWeight="600" color="#fff5">
                        Empty
                      </Text>
                    </Center>
                  ) : (
                    <SimpleGrid columns={[1, 2, 3]} gap="30px">
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
                    <SimpleGrid columns={[2, 4, 6]} gap="30px">
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
