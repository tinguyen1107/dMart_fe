import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Grid,
  GridItem,
  HStack,
  Img,
  SimpleGrid,
} from '@chakra-ui/react';
import { NftCard } from '../nft-card';

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
  {
    id: 5,
    imgUrl: 'https://i.ibb.co/FD1yD06/1.png',
    title: 'distant galaxy',
    artist: 'Moon Dancer 2',
    price: '1,63',
    hbid: '0.33',
    ava: 'https://bit.ly/dan-abramov',
  },
  {
    id: 6,
    imgUrl: 'https://i.ibb.co/FD1yD06/1.png',
    title: 'distant galaxy',
    artist: 'Moon Dancer 2',
    price: '1,63',
    hbid: '0.33',
    ava: 'https://bit.ly/dan-abramov',
  },
  {
    id: 7,
    imgUrl: 'https://i.ibb.co/FD1yD06/1.png',
    title: 'distant galaxy',
    artist: 'Moon Dancer 2',
    price: '1,63',
    hbid: '0.33',
    ava: 'https://bit.ly/dan-abramov',
  },
];

export const DiscoverMoreNFT = (props: any) => {
  return (
    <HStack
      flexDirection="row"
      spacing="8px"
      overflowY="scroll"
      css={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    ></HStack>
  );
};
// {nfts.map((card, id) => (
//   <Box minW="300px" key={id}>
//     <NftCard {...card} />
//   </Box>
// ))}
