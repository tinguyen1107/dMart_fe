import {
  Box,
  Button,
  HStack,
  Text,
  useDisclosure,
  VStack,
  Avatar,
  DrawerCloseButton,
} from '@chakra-ui/react';
import React, { useCallback, useMemo } from 'react';
import { Dropdown } from 'rsuite';
import { HeaderAccountTitle } from '../header-account-title';
import { parseToUsername } from '../../core/utils';
import { useRouter } from 'next/router';
import { FiMoreVertical } from 'react-icons/fi';
import classes from './header-account.module.css';
import { AuthUtils, ModalUtils } from '../../utils';
import { IoMdWallet } from 'react-icons/io';
import { formatNearAmount } from 'near-api-js/lib/utils/format';
import { MdQrCode } from 'react-icons/md';
import { useAccount } from '../../hooks';

interface HeaderAccountProps {
  logoutLoading: boolean;
  requestLogout: () => void;
  accountName: string;
  avatarSrc?: string;
  display?: any;
  displayName?: string;
}

export const HeaderAccount: React.FunctionComponent<HeaderAccountProps> = ({
  logoutLoading,
  requestLogout,
  accountName,
  avatarSrc,
  display = 'block',
  displayName,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>();
  const router = useRouter();

  const { accountState } = useAccount();

  const balanceAvailable = useMemo(
    () => formatNearAmount(accountState.balance.get()?.available ?? '0', 2),
    [accountState.balance.get()]
  );

  const handleBtnDepositClick = useCallback(() => {
    AuthUtils.authCheckAndExec(() => {
      ModalUtils.storageDeposit.onOpen();
    });
  }, []);

  const handleBtnWithdrawClick = useCallback(() => {
    AuthUtils.authCheckAndExec(() => {
      ModalUtils.storageWithdraw.onOpen();
    });
  }, []);

  const handleBtnProfileClick = useCallback(() => {
    let profile = accountState.profile.get();
    if (!!profile) router.push(`/account/${profile.id}`);
  }, [accountState.profile]);

  const handleBtnMintNftClick = useCallback(() => {
    AuthUtils.authCheckAndExec(() => {
      ModalUtils.mintNft.onOpen();
    });
  }, []);

  const dropdownMenu = useMemo(
    () => (
      <Box
        borderRadius="12px"
        bg="var(--bgPrimary)"
        textColor="textPrimary"
        minW="240px"
      >
        <VStack bg="#555" p="15px" borderTopRadius="12px" fontWeight="800">
          <HStack w="100%" alignItems="top" justify="space-between">
            <Text textAlign="center" color="textSloganHomepage" fontSize="18px">
              Balance
            </Text>
            <VStack spacing="0" alignItems="end">
              <Text
                textAlign="center"
                color="textSloganHomepage"
                fontSize="16px"
              >
                {`${balanceAvailable} NEAR`}
              </Text>
              <Text
                textAlign="center"
                color="textSecondary"
                fontSize="10px"
                fontWeight="500"
              >
                Available Balance
              </Text>
            </VStack>
          </HStack>
          <HStack w="100%" justify="space-between">
            <Button
              variant="secondary"
              size="sm"
              py="8px"
              w="100%"
              fontWeight="800"
              bg="#fff"
              color="#000"
              onClick={handleBtnDepositClick}
            >
              Deposit
            </Button>
            <Button
              variant="primary"
              colorScheme="purple"
              size="sm"
              py="8px"
              bg="#000"
              w="100%"
              fontWeight="800"
              onClick={handleBtnWithdrawClick}
            >
              Withdraw
            </Button>
          </HStack>
        </VStack>
        <VStack align="stretch" spacing="0" w="100%">
          <Button variant="accountMenu" onClick={handleBtnProfileClick}>
            Profile
          </Button>
          <Button variant="accountMenu" onClick={handleBtnMintNftClick}>
            Mint NFT
          </Button>
          <Button
            variant="accountMenu"
            onClick={requestLogout}
            isLoading={logoutLoading}
            borderBottomRadius="12px"
          >
            Logout
          </Button>
        </VStack>
      </Box>
    ),
    [balanceAvailable, logoutLoading]
  );

  return (
    <Box className={classes.root} w="100%" display={display}>
      <HStack
        w="100%"
        justify="end"
        spacing="15px"
        display={{ base: 'none', md: 'flex' }}
      >
        <Dropdown
          w="100%"
          renderToggle={(props: any) => (
            <HeaderAccountTitle
              title={accountName}
              avatarSrc={avatarSrc}
              displayName={displayName}
              {...props}
            />
          )}
          placement="bottomEnd"
        >
          {dropdownMenu}
        </Dropdown>
      </HStack>
      {/* <Box display={{ base: 'inline-block', md: 'none' }}>
        <Center w="50px" h="50px" ref={btnRef} onClick={onOpen}>
          {/* <AiOutlineMenu size={25} /> 
          <Avatar src={avatarSrc} name={accountName} w="48px" h="48px" />
        </Center>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="full"
        >
          <DrawerOverlay />
          <DrawerContent bg="bgPrimary">
            <DrawerCloseButton />
            <DrawerHeader padding="15px">
              <HStack justify="space-between">
                <HStack spacing="15px">
                  <Avatar
                    name={accountName}
                    src={avatarSrc}
                    w="48px"
                    h="48px"
                  />
                  <VStack spacing="0">
                    <Text
                      color="textPrimary"
                      whiteSpace="nowrap"
                      textOverflow="ellipsis"
                      overflow="hidden"
                      fontSize="14"
                      maxW="100%"
                    >
                      {!!displayName
                        ? displayName
                        : parseToUsername(accountName)}
                    </Text>
                    <Text
                      noOfLines={1}
                      whiteSpace="normal"
                      color="textSecondary"
                      fontSize="12"
                    >
                      {`@${parseToUsername(accountName)}`}
                    </Text>
                  </VStack>
                </HStack>
              </HStack>
              <Box margin="0 -15px">{dropdownMenu}</Box>
            </DrawerHeader>
            <DrawerBody padding="15px">
              <MainMenu isSimplify={true} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box > */}
    </Box>
  );
};
