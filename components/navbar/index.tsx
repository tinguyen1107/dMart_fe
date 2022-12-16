import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
// import {CloseIcon, MenuIcon} from 'react-icons/fa'
import { BiMenu, BiX } from 'react-icons/bi';
import Logo from '../logo';
import { LoginButton } from '../login-button';

export const NavBar = (props: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        wrap="wrap"
        color={['white', 'white', 'primary.500', 'primary.500']}
      />

      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/marketplace">Marketplace</MenuItem>
        <MenuItem to="/ranking">Ranking</MenuItem>
        <MenuItem to="/wallet">Connect Wallet</MenuItem>
        <LoginButton />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
      </Stack>
    </NavBarContainer>
  );
};

const NavBarContainer = ({ children, ...props }: any) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      position="fixed"
      backdropFilter="saturate(180%) blur(5px)"
      p={8}
      bg={['#2B2B2B', '#2B2B2B', '#2B2B2B', '#2B2B2B']}
      color={['white', 'white', 'primary.700', 'primary.700']}
      {...props}
    >
      {children}
    </Flex>
  );
};

const MenuItem = ({ children, isLast, to = '/', ...rest }: any) => {
  return (
    <Link href={to}>
      <Text display={{ sm: 'none', base: 'none', md: 'block' }}>
        {children}
      </Text>
    </Link>
  );
};

const MenuToggle = ({ toggle, isOpen }: any) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <BiMenu size={20} /> : <BiX size={20} />}
    </Box>
  );
};
