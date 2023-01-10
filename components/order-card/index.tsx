import React, { useCallback } from 'react';
import { AspectRatio, Button, HStack, VStack } from '@chakra-ui/react';
import { Image, Stack, Heading, Text, Box } from '@chakra-ui/react';
import { NftDto, OrderDto } from '../../dtos';
import { Avatar } from '../avatar';
import { useAccount, useAccountPage } from '../../hooks';
import { AuthUtils, ModalUtils } from '../../utils';
import { NftRepo } from '../../repos';
import { formatNearAmount } from 'near-api-js/lib/utils/format';
import { useOrderCard } from '../../hooks/use-order-card';

export const OrderCard = ({ data }: { data: OrderDto }) => {
  const {
    orderCardState: { account },
    orderCardMethods: { handleBtnBuyClick },
  } = useOrderCard(data);
  const { accountState, accountMethods } = useAccount();

  return (
    <Box maxW="420px" bg="var(--bgPrimary)" borderRadius="12px" color="white">
      <AspectRatio ratio={16 / 9}>
        <Image
          src={data.metadata?.media}
          borderTopRadius="12px"
          alt="picture of NFTs"
          objectFit="cover"
        />
      </AspectRatio>
      <VStack p="10px" color="white" justifyContent="space-between" h="100%">
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
                @{data.ownerId}
              </Text>
            </Box>
          </HStack>
        </VStack>
        <HStack w="100%" justifyContent="space-between">
          <HStack>
            <Text color={'gray'} fontSize={{ md: '12', lg: '14' }}>
              Price
            </Text>
            <Text
              color="white"
              fontWeight="700"
              fontSize={{ md: '16', lg: '18' }}
            >
              {formatNearAmount(data.price) + ' Ⓝ'}
            </Text>
          </HStack>

          {account?.id != accountState.profile.get()?.id && (
            <Button variant="primary" py="5px" onClick={handleBtnBuyClick}>
              Buy
            </Button>
          )}
        </HStack>
      </VStack>
    </Box>
  );
};
