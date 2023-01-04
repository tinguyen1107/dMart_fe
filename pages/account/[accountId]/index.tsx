import React from 'react';
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Badge,
  Avatar,
  Image,
  HStack,
  VStack,
  Heading,
  Button,
  Spacer,
  SimpleGrid,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import {
  FaCopy,
  FaPlus,
  FaGlobe,
  FaDiscord,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import { TrendingCard, NFTcard, NavBar } from '../../../components';
import { AccountApi } from '../../../apis';
import { useAccountPage } from '../../../hooks';
import { useRouter } from 'next/router';
import { Optional } from '../../../core/types';
import { NFT, NFTMetadata } from '../../../dtos';

const ArtistPage = () => {
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

  const listNft = React.useMemo(() => {
    if (nftQuery.data?.pages.length) {
      let data = nftQuery.data.pages.reduce(
        (a: NFT[], b: NFT[]) => [...a, ...b],
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
    <Box bg="#2B2B2B" color={'whiteAlpha.900'} h="auto">
      <NavBar />
      <Box w="full" h="auto" pb="10px" paddingTop="100px">
        <Image src={profile.Wall_url} w="full" h="370px" />
        <Avatar src={profile.Avatar_url} size="2xl" ml="7%" mt="-54px" />
      </Box>
      <Box px="5%">
        <VStack spacing="24px" align={'left'}>
          <HStack pr="20px">
            <Heading size={'2xl'}>{profile.name}</Heading>
            <Spacer />
            <Button
              borderRadius={'2xl'}
              variant="solid"
              size={{ md: 'md', lg: 'lg' }}
              colorScheme="purple"
              leftIcon={<FaCopy />}
            >
              {profile.publicKey}
            </Button>
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

      <Tabs isFitted variant="unstyled" bg="#3B3B3B" mt="32px">
        <TabList color={'white'} bg="#2B2B2B" as="b">
          <Tab _selected={{ color: 'white', borderBottomWidth: '2px' }}>
            <Text> Created </Text>
            <Badge mx={4}>{profile.Created.length}</Badge>
          </Tab>
          <Tab _selected={{ color: 'white', borderBottomWidth: '2px' }}>
            <Text> Owned </Text>
            <Badge mx={4}>{profile.Owned.length}</Badge>
          </Tab>
          <Tab _selected={{ color: 'white', borderBottomWidth: '2px' }}>
            <Text> Collection </Text>
            <Badge mx={4}>{profile.Collection.length}</Badge>
          </Tab>
        </TabList>
        <TabPanels bg="#3B3B3B">
          <TabPanel>
            <SimpleGrid columns={[1, 2, 3]} gap="30px" mt="60px" px={'10%'}>
              {profile.Created.map((card) => (
                <GridItem key={card.id}>
                  <NFTcard {...card} />
                </GridItem>
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={[1, 2, 3]} gap="30px" mt="60px" px={'10%'}>
              {profile.Owned.map((card) => (
                <GridItem key={card.id}>
                  <NFTcard {...card} />
                </GridItem>
              ))}
              {!!listNft &&
                listNft.map((card, id) => (
                  <GridItem key={id}>{JSON.stringify(card)}</GridItem>
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
    </Box>
  );
};
export default ArtistPage;
