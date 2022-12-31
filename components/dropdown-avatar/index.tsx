import React from 'react';
import NextLink from 'next/link';
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
} from '@chakra-ui/react';
import { CSSTransition } from 'react-transition-group';
import { FaAngleDown, FaEthereum } from 'react-icons/fa';
export const Dropdown_Ava: React.FunctionComponent = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaAngleDown />} bg="#858584" px="8px">
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          size={'sm'}
        />
      </MenuButton>
      <MenuList bg="#858584" px="4px">
        <MenuItem bg="#858584" fontWeight={'bold'}>
          <VStack alignItems={'left'} borderBottom="2px" w="full">
            <Text fontSize={'2xl'}>kevin.testnet</Text>
            <HStack>
              <Text>NEAR</Text>
              <Spacer />
              <Text>200</Text>
              <FaEthereum />
            </HStack>
          </VStack>
        </MenuItem>
        <NextLink href={'/mintnft'} passHref>
          <MenuItem bg="#858584">Create NFT</MenuItem>
        </NextLink>
        <MenuItem bg="#858584">Get Verified</MenuItem>
        <MenuItem bg="#858584">NFT aunction</MenuItem>
        <MenuItem bg="#858584">Mint Certificate NFT</MenuItem>
        <Box borderTop="2px">
          <MenuItem bg="#858584">My profile</MenuItem>
          <MenuItem bg="#858584">My offer</MenuItem>
        </Box>
      </MenuList>
    </Menu>
  );
};
