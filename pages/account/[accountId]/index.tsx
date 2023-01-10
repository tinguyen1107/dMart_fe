import React from 'react';
import Header from 'next/head';
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Avatar,
  Image,
  HStack,
  VStack,
  Heading,
  Button,
  SimpleGrid,
  GridItem,
  AspectRatio,
  Center,
} from '@chakra-ui/react';
import {
  FaPlus,
  FaGlobe,
  FaDiscord,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import { NftCard, OrderCard } from '../../../components';
import { useAccountPage } from '../../../hooks';
import { useRouter } from 'next/router';
import { Optional } from '../../../core/types';
import { MainLayout } from '../../../layouts';

const AccountPage = () => {
  const profile = {
    name: 'AnimaKid',
    Volume: '250k',
    publicKey: '0xc0E3...B79C',
    SoldNFT: '50k',
    Followers: '3000',
    Wall_url:
      'https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=2000',
    Avatar_url:
      'http://www.playtoearn.online/wp-content/uploads/2021/10/Bored-Ape-Yacht-Club-NFT-avatar.png',
    Bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    Links: ['', '', '', ''],
  };
  const router = useRouter();

  const accountId = router.query?.accountId as Optional<string>;
  const {
    accountPageState: {
      accountQuery,
      listFavouriteQuery,
      listOrdersQuery,
      nftQuery,
    },
  } = useAccountPage({ accountId });

  const { data: account } = accountQuery;

  const listNft = React.useMemo(() => {
    console.log('List nft:', nftQuery.data);
    if (nftQuery.data?.length) {
      return nftQuery.data;
    } else return [];
  }, [nftQuery.data]);

  return (
    <>
      <Header>
        <title>DMart</title>
      </Header>
      <MainLayout>
        <Box h="100px" />
        <Box bg="var(--bgPrimary)" borderRadius="12px">
          <Box w="full" pos="relative">
            <AspectRatio ratio={4 / 1}>
              <Image
                src={
                  account?.accountInfo.thumbnail ??
                  'https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=2000'
                }
                w="full"
                h="400px"
                borderTopRadius="12px"
                objectFit="cover"
              />
            </AspectRatio>
            <Avatar
              src={
                account?.accountInfo.avatar ??
                'http://www.playtoearn.online/wp-content/uploads/2021/10/Bored-Ape-Yacht-Club-NFT-avatar.png'
              }
              size="2xl"
              ml="7%"
              mt="-64px"
            />
          </Box>
          <Box p="20px 30px 30px" color="var(--textPrimary)">
            <VStack spacing="24px" align="left">
              <HStack pr="20px" justifyContent="start">
                <Box>
                  <Heading color="var(--textHeader)" size={'2xl'}>
                    {account?.accountInfo.displayName}
                  </Heading>
                  <Text mt="5px">@{account?.id}</Text>
                </Box>
              </HStack>
              <HStack spacing={'50px'}>
                <VStack alignItems={'left'}>
                  <Text fontWeight={'bold'} fontSize="xl">
                    {profile.Volume}
                  </Text>
                  <Text fontSize="lg">Volume</Text>
                </VStack>
                <VStack alignItems={'left'}>
                  <Text fontWeight={'bold'} fontSize="xl">
                    {profile.SoldNFT}
                  </Text>
                  <Text fontSize="lg">NFTs Sold</Text>
                </VStack>
                <VStack alignItems={'left'}>
                  <Text fontWeight={'bold'} fontSize="xl">
                    {profile.Followers}
                  </Text>
                  <Text fontSize="lg">Followers</Text>
                </VStack>
              </HStack>
            </VStack>
          </Box>
        </Box>

        <Box
          bg="var(--bgPrimary)"
          color="var(--textPrimary)"
          mt="20px"
          borderRadius="12px"
        >
          <Box p="20px 30px 30px">
            <VStack spacing="24px" align="left">
              <Text textColor={'gray'} fontWeight="bold" fontSize="xl">
                Bio
              </Text>
              <Text fontSize="lg">{profile.Bio}</Text>
              <Text textColor={'gray'} fontWeight="bold" fontSize="xl">
                Links
              </Text>
              <HStack spacing="16px">
                <FaGlobe size={'32px'} />
                <FaDiscord size={'32px'} />
                <FaYoutube size={'32px'} />
                <FaTwitter size={'32px'} />
                <FaInstagram size={'32px'} />
              </HStack>
            </VStack>
          </Box>
        </Box>

        <Box bg="var(--bgSecondary)" mt="20px" borderRadius="12px">
          <Tabs isFitted variant="unstyled" minH="600px">
            <TabList
              color={'white'}
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
                <Text>{`Favourites (${
                  listFavouriteQuery.data?.length ?? 0
                })`}</Text>
              </Tab>
              <Tab
                _selected={{
                  color: '#fe8668',
                  borderBottomWidth: '2px',
                  borderBottomColor: '#fe8668',
                }}
              >
                <Text>{`Bag (${listNft.length})`}</Text>
              </Tab>
              <Tab
                _selected={{
                  color: '#fe8668',
                  borderBottomWidth: '2px',
                  borderBottomColor: '#fe8668',
                }}
              >
                <Text>{`Selling (${listOrdersQuery.data?.length ?? 0})`}</Text>
                <Text></Text>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {/* Favourite */}
                {listFavouriteQuery.data?.length == 0 ? (
                  <Center h="240px">
                    <Text fontSize="xl" fontWeight="600" color="#fff5">
                      Empty
                    </Text>
                  </Center>
                ) : (
                  <SimpleGrid columns={[1, 2, 3]} gap="30px">
                    {!!listFavouriteQuery.data &&
                      listFavouriteQuery.data?.map((nft, id) => (
                        <GridItem key={id}>
                          <NftCard data={nft} />
                        </GridItem>
                      ))}
                  </SimpleGrid>
                )}
              </TabPanel>
              <TabPanel>
                {/* Bag */}
                {listNft.length == 0 ? (
                  <Center h="240px">
                    <Text fontSize="xl" fontWeight="600" color="#fff5">
                      Empty
                    </Text>
                  </Center>
                ) : (
                  <SimpleGrid columns={[1, 2, 3]} gap="30px">
                    {listNft.map((nft, id) => (
                      <GridItem key={id}>
                        <NftCard data={nft} />
                      </GridItem>
                    ))}
                  </SimpleGrid>
                )}
              </TabPanel>
              <TabPanel>
                {/* Selling */}
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
            </TabPanels>
          </Tabs>
        </Box>
      </MainLayout>
    </>
  );
};
export default AccountPage;
