import React from 'react';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import {
  Image,
  Stack,
  Heading,
  Text,
  Flex,
  Spacer,
  Box,
} from '@chakra-ui/react';
const NFTcard = (props: any) => {
  return (
    <Box maxW="420px" bg="#2B2B2B" borderRadius={'2xl'} color="white">
      <Image src={props.imgUrl} alt="picture of NFTs" objectFit="cover" />
      <Stack mx={4} my="2" spacing="2" p={3} color={'white'}>
        <Heading size="lg">{props.title}</Heading>
        <Flex my={'16px'}>
          <Image boxSize="26px" src={props.ava} borderRadius="full" />
          <Text px={2} fontSize={{ md: '12', lg: '16' }}>
            {props.artist}
          </Text>
        </Flex>
        <Flex w="full">
          <Stack>
            <Text color={'gray'} fontSize={{ md: '12', lg: '14' }}>
              Price
            </Text>
            <Text color={'white'} fontSize={{ md: '12', lg: '18' }}>
              {props.price} ETH
            </Text>
          </Stack>
          <Spacer />
          <Stack>
            <Text color={'gray'} fontSize={{ md: '12', lg: '14' }}>
              Highest Bid
            </Text>
            <Text color={'white'} fontSize={{ md: '12', lg: '18' }}>
              {props.hbid} ETH
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default NFTcard;
