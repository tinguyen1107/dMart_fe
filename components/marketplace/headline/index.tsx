import React from 'react';
import {
  Center,
  VStack,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Flex,
  Container,
  Box,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
const HeadLine = () => {
  return (
    <Flex
      bg="#2B2B2B"
      color="white"
      w="full"
      h="30vh"
      justifyContent="center"
      alignItems="center"
      p={24}
    >
      <Flex direction={'column'} flex="1" position={'relative'}>
        <Text fontSize="4xl" as="b">
          Browse Marketplace
        </Text>
        <Text>Browse through more than 50k NFTs on the NFT Marketplace.</Text>
        <InputGroup mt={8} borderColor="gray">
          <Input placeholder="Search your favorite NFTs" size="md" />
          <InputRightElement children={<FaSearch />} />
        </InputGroup>
      </Flex>
    </Flex>
  );
};

export default HeadLine;
