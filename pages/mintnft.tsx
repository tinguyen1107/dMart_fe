import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Button,
  Flex,
  Text,
  chakra,
  Box,
  Switch,
  IconButton,
  HStack,
  Avatar,
  VStack,
  Spacer,
  Center,
  Image,
  Input,
} from '@chakra-ui/react';
import {FaPlus} from 'react-icons/fa'
import { NavBar } from '../components';
const MintNFT = () => {
  return (
    <Box bg="#2B2B2B" color={'whiteAlpha.900'} h="100%">
      <NavBar />
      <Flex justifyContent={'center'} py="32px"   paddingTop="120px">
        <Box alignItems={'center'} px="10%" bg = '#3B3B3B' py = '32px'>
          <VStack
            spacing={'16px'}
            maxW="420px"
            bg="#2B2B2B"
            borderRadius={'2xl'}
            color="white"
            pb = '16px'
          >
            <Image
              src={'https://i.ibb.co/FD1yD06/1.png'}
              alt="picture of NFTs"
              objectFit="cover"
              w = '300px'
            />
            <Button
              borderRadius={'2xl'}
              variant="outline"
              size={{ md: 'md', lg: 'lg' }}
              colorScheme="purple"
              leftIcon={<FaPlus />}
            >
              Upload Image
            </Button>
          </VStack>
        </Box>

        <VStack py = '28px' px = '32px ' alignItems = {'left'} spacing={'10px'} color={'white'} bg="#374151">
          <Text fontSize={'3xl'} color={'white'}>Card Creation</Text>
          <Text mb='8px'>Title</Text>
          <Input w = '320x' placeholder="Enter title" borderRadius={'2xl'} />
          <Text mb='8px'>NFT type</Text>
          <Input placeholder="Nft type" borderRadius={'2xl'} />
          <Text mb='8px'>Description</Text>
          <Input placeholder=""  borderRadius={'2xl'} htmlSize={4} width='auto'  />
          <Button
              borderRadius={'2xl'}
              variant="solid"
              size={{ md: 'md', lg: 'lg' }}
              colorScheme="purple"
            >
              Mint NFT
            </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default MintNFT;
