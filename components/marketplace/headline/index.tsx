import React from 'react';
import {
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Box,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
const HeadLine = () => {
  return (
    <Box p="50px" bg="#2B2B2B" paddingTop="100px" color="white" mt="auto">
      <Box px="60px" py="8px">
        <Text fontSize="4xl" as="b">
          Browse Marketplace
        </Text>
        <Text mt={2}>
          Browse through more than 50k NFTs on the NFT Marketplace.
        </Text>
        <Box z-index="1">
          <InputGroup mt={4} borderColor="gray" background-attachment="fixed">
            <Input placeholder="Search your favorite NFTs" size="md" />
            <InputRightElement>
              <FaSearch />
            </InputRightElement>
          </InputGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default HeadLine;
