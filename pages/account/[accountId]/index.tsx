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
  Grid,
  GridItem,
  AspectRatio,
} from '@chakra-ui/react';
import {
  FaPlus,
  FaGlobe,
  FaDiscord,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import { TrendingCard, NftCard } from '../../../components';
import { useAccountPage } from '../../../hooks';
import { useRouter } from 'next/router';
import { Optional } from '../../../core/types';
import { NftDto } from '../../../dtos';
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
    Created: [
      {
        id: 1,
        imgUrl: 'https://i.ibb.co/FD1yD06/1.png',
        title: 'distant galaxy',
        artist: 'Moon Dancer',
        price: '1,63',
        hbid: '0.33',
        ava: 'https://bit.ly/dan-abramov',
      },
    ],
    Owned: [
      {
        id: 1,
        imgUrl: 'https://i.ibb.co/FD1yD06/1.png',
        title: 'distant galaxy',
        artist: 'Moon Dancer',
        price: '1,63',
        hbid: '0.33',
        ava: 'https://bit.ly/dan-abramov',
      },
    ],
    Collection: [
      {
        label: '1',
        top: 'https://i.ibb.co/3NKh8HX/top.png',
        left: 'https://i.ibb.co/3NKh8HX/top.png',
        mid: 'https://i.ibb.co/3NKh8HX/top.png',
        right: 'https://i.ibb.co/3NKh8HX/top.png',
      },
    ],
  };
  const router = useRouter();

  const accountId = router.query?.accountId as Optional<string>;
  const {
    accountPageState: { accountQuery, nftQuery },
  } = useAccountPage({ accountId });

  const { data: account } = accountQuery;

  const listNft = React.useMemo(() => {
    if (nftQuery.data?.pages.length) {
      let data = nftQuery.data.pages.reduce(
        (a: NftDto[], b: NftDto[]) => [...a, ...b],
        []
      );
      // .map((val) => {
      //   if (postState.value.filter.type != 'all')
      //     return { ...val, showParent: false };
      //
      //   let showParent = false;
      //   if (originRep.current.includes(val.id)) return;
      //   if (val.postType.type == 'Reply') {
      //     showParent = !originRep.current.includes(val.postType.post_id!);
      //     if (showParent) originRep.current.push(val.postType.post_id!);
      //   }
      //   return { ...val, showParent };
      // });
      console.log('List nft:', data);
      return data;
    } else return undefined;
  }, [nftQuery.data?.pages]);
  return (
    <>
      <Header>
        <title>DMart</title>
      </Header>
      {/* <Box pos="absolute">
        <Box w="full" h="auto" pb="10px" pos="relative">
          <Box
            pos="absolute"
            h="100%"
            w="100%"
            bg="linear-gradient(to top, var(--bgPrimary) 25%, transparent 60%)"
          />
          <Image
            src={
              account?.accountInfo.thumbnail ??
              'https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=2000'
            }
            w="full"
            h="400px"
            objectFit="cover"
          />
        </Box>
      </Box> */}
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
          <Box p="20px 30px 30px">
            <VStack spacing="24px" align="left">
              <HStack pr="20px" justifyContent="space-between">
                <Box>
                  <Heading size={'2xl'}>
                    {account?.accountInfo.displayName}
                  </Heading>
                  <Text mt="5px">@{account?.id}</Text>
                </Box>
                <Button
                  borderRadius={'2xl'}
                  variant="outline"
                  size={{ md: 'md', lg: 'lg' }}
                  colorScheme="purple"
                  leftIcon={<FaPlus />}
                >
                  Follow
                </Button>
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

        <Tabs isFitted variant="unstyled" mt="20px" minH="600px">
          <TabList color={'white'} as="b">
            <Tab
              _selected={{
                color: '#fe8668',
                borderBottomWidth: '2px',
                borderBottomColor: '#fe8668',
              }}
            >
              <Text> My Bag </Text>
            </Tab>
            <Tab
              _selected={{
                color: '#fe8668',
                borderBottomWidth: '2px',
                borderBottomColor: '#fe8668',
              }}
            >
              <Text> Selling </Text>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SimpleGrid columns={[1, 2, 3]} gap="30px" mt="60px" px={'10%'}>
                {!!listNft &&
                  listNft.map((nft, id) => (
                    <GridItem key={id}>
                      <NftCard data={nft} />
                    </GridItem>
                  ))}
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <Grid
                templateColumns="repeat(3, 1fr)"
                gap={{ sm: '5', md: '5', lg: '30' }}
                mt="60px"
                px={'10%'}
              >
                {profile.Collection.map((child) => (
                  <GridItem
                    key={child.label}
                    w="auto"
                    h="auto"
                    bg="#2B2B2B"
                    borderRadius="3xl"
                  >
                    <TrendingCard {...child} />
                  </GridItem>
                ))}
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </MainLayout>
    </>
  );
};
export default AccountPage;
