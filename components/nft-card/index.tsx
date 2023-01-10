import React from 'react';
import {
  AspectRatio,
  Button,
  Center,
  HStack,
  Spinner,
  VStack,
} from '@chakra-ui/react';
import { Image, Stack, Heading, Text, Box } from '@chakra-ui/react';
import { NftDto } from '../../dtos';
import { Avatar } from '../avatar';
import { useAccount, useAccountPage, useBookmark } from '../../hooks';
import { AuthUtils, ModalUtils } from '../../utils';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

export const NftCard = ({ data }: { data: NftDto }) => {
  const {
    accountPageState: { accountQuery },
  } = useAccountPage({ accountId: data.ownerId });
  const { accountState, accountMethods } = useAccount();

  const { data: account } = accountQuery;
  const {
    bookmarkState: { marked, accountBookmarksQuery, isLoading },
    bookmarkMethods: { addBookmark, removeBookmark },
  } = useBookmark(data.tokenId);

  return (
    <VStack
      maxW="350px"
      bg="var(--bgPrimary)"
      h="380px"
      borderRadius="12px"
      color="white"
      pos="relative"
    >
      <Box w="100%">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={data.metadata?.media}
            borderTopRadius="12px"
            alt="picture of NFTs"
            objectFit="cover"
          />
        </AspectRatio>
      </Box>
      <Box
        pos="absolute"
        top="5px"
        right="5px"
        borderRadius="full"
        p="3px"
        bg="#3333"
        backdropFilter="blur(10px)"
        cursor="pointer"
        _hover={{ opacity: 0.8 }}
        isDisable={isLoading}
        onClick={() => {
          if (marked) removeBookmark();
          else addBookmark();
        }}
      >
        {isLoading ? (
          <Center w="24px" h="24px">
            <Spinner size="sm" />
          </Center>
        ) : marked ? (
          <MdFavorite color="#f55" size="24px" />
        ) : (
          <MdFavoriteBorder size="24px" />
        )}
      </Box>
      <VStack
        w="100%"
        h="100%"
        p="10px"
        color="white"
        justifyContent="space-between"
      >
        <VStack spacing="2" w="100%" align="left">
          <Heading size="lg">{data.metadata?.title}</Heading>
          <HStack my={'16px'}>
            <Box w="32px" h="32px">
              <Avatar accountId={data.ownerId} url="" />
            </Box>
            <Box>
              <Text px={2} fontSize={{ md: '12px', lg: '16px' }}>
                {account?.accountInfo.displayName}
              </Text>
              <Text m="0" px={2} fontSize={{ md: '10px', lg: '12px' }}>
                @{account?.id}
              </Text>
            </Box>
          </HStack>
        </VStack>
        {account?.id == accountState.profile.get()?.id && (
          <HStack w="100%" justifyContent="end">
            <Button
              variant="primary"
              py="5px"
              onClick={() => {
                AuthUtils.authCheckAndExec(() => {
                  ModalUtils.sellNft.onOpen(data);
                });
              }}
            >
              Sell
            </Button>
          </HStack>
        )}
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
      </VStack>
    </VStack>
  );
};
