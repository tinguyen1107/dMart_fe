import React from 'react';
import { AspectRatio, Button, HStack, VStack } from '@chakra-ui/react';
import { Image, Stack, Heading, Text, Box } from '@chakra-ui/react';
import { NFT } from '../../dtos';
import { Avatar } from '../avatar';
import { useAccountPage } from '../../hooks';
import { AuthUtils, ModalUtils } from '../../utils';

export const NftCard = ({ data }: { data: NFT }) => {
  const {
    accountPageState: { accountQuery },
  } = useAccountPage({ accountId: data.ownerId });

  const { data: account } = accountQuery;

  return (
    <Box maxW="420px" bg="var(--bgPrimary)" borderRadius="12px" color="white">
      <AspectRatio ratio={16 / 9}>
        <Image
          src={data.metadata.media}
          borderTopRadius="12px"
          alt="picture of NFTs"
          objectFit="cover"
        />
      </AspectRatio>
      <VStack p="10px" color="white" justifyContent="space-between" h="100%">
        <VStack spacing="2" w="100%" align="left">
          <Heading size="lg">{data.metadata.title}</Heading>
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

        <HStack w="100%" justifyContent="end">
          <Button
            variant="primary"
            py="5px"
            onClick={() => {
              AuthUtils.authCheckAndExec(() => {
                ModalUtils.sellNft.onOpen();
              });
            }}
          >
            Sell
          </Button>
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
      </VStack>
    </Box>
  );
};
