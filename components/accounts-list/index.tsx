import { Text, Box, HStack, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { useAccountList } from '../../hooks';
import { Avatar } from '../avatar';

export const AccountsList: React.FunctionComponent<{}> = () => {
  const {
    accountListState: { listAccountsQuery },
  } = useAccountList();
  const router = useRouter();
  return (
    <Box bg="var(--bgPrimary)" borderRadius="12px" p="12px 20px">
      <Text fontSize="24" fontWeight="800" mb="12px">
        Users
      </Text>
      <HStack h="fit-content" mb="10px" overflowX="auto">
        {listAccountsQuery.data?.map((val, id) => (
          <VStack
            key={id}
            textAlign="center"
            w="120px"
            _hover={{ bg: '#fff2' }}
            p="15px 6px"
            borderRadius="10px"
            cursor="pointer"
            onClick={() => router.push(`/account/${val.id}`)}
          >
            <Box w="45px">
              <Avatar accountId={val.id} url={val.accountInfo.avatar} />
            </Box>
            <VStack spacing="0" w="100%">
              <Text fontSize="14px" fontWeight="800" w="100%" noOfLines={1}>
                {val.accountInfo.displayName}
              </Text>
              <Text fontSize="12px" fontWeight="500" w="100%" noOfLines={1}>
                NFT: {val.numNfts}
              </Text>
            </VStack>
          </VStack>
        ))}
      </HStack>
    </Box>
  );
};
