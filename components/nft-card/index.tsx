import React from 'react';
import {
  AspectRatio,
  AvatarBadge,
  AvatarGroup,
  HStack,
} from '@chakra-ui/react';
import {
  Image,
  Stack,
  Heading,
  Text,
  Flex,
  Spacer,
  Box,
} from '@chakra-ui/react';
import { NFT } from '../../dtos';
import { Avatar } from '../avatar';

export const NftCard = ({ data }: { data: NFT }) => {
  return (
    <Box maxW="420px" bg="#2B2B2B" borderRadius="12px" color="white">
      <AspectRatio ratio={16 / 9}>
        <Image
          src={data.metadata.media}
          borderTopRadius="12px"
          alt="picture of NFTs"
          objectFit="cover"
        />
      </AspectRatio>
      <Stack mx={4} my="2" spacing="2" p={3} color={'white'}>
        <Heading size="lg">{data.metadata.title}</Heading>
        <HStack my={'16px'}>
          <Box w="24px" h="24px">
            <Avatar accountId="aa" url="" />
          </Box>
          <Text px={2} fontSize={{ md: '12', lg: '16' }}>
            {data.ownerId}
          </Text>
        </HStack>
        {/* 
        <Flex my={'16px'}>
          <Image boxSize="26px" src={props.ava} borderRadius="full" />
          <Text px={2} fontSize={{ md: '12', lg: '16' }}>
            {data.metadata.description}
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
        </Flex> */}
      </Stack>
    </Box>
  );
};
