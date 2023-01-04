/* eslint-disable react/no-unescaped-entities */
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useCallback, useEffect } from 'react';
import { useMutation } from 'react-query';
import { ModalUtils } from '../../utils';
import { BalanceRepo } from '../../repos';
import { useIsRegistered } from '../../hooks';

type AddStorageBalanceModalProps = {};

export type AddStorageBalanceModalDataType = {
  onClick: (...args: any) => any;
};

export const AddStorageBalanceModal: React.FunctionComponent<
  AddStorageBalanceModalProps
> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isRegistered } = useIsRegistered();

  const depositMutation = useMutation(BalanceRepo.storageDeposit);

  useEffect(() => {
    ModalUtils.addStorageBalance.onOpen = onOpen;
    ModalUtils.addStorageBalance.onClose = onClose;
  }, []);

  const continueBtnClick = useCallback(async () => {
    depositMutation.mutate();
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text>
            {isRegistered
              ? 'Not enough storage balance!'
              : 'Need to register on smart contract'}
          </Text>
        </ModalHeader>
        <ModalCloseButton _focus={{ boxShadow: 'none' }} />
        <ModalBody height="fit-content">
          <Alert
            status="warning"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
            borderRadius="8px"
            bg="transparent"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              {isRegistered
                ? 'Not enough storage balance!'
                : 'Need to register on smart contract'}
            </AlertTitle>
            <AlertDescription maxWidth="sm" mb="15px">
              {isRegistered
                ? 'Add storage balance to be able to interact with this dapp.'
                : 'Register on Smart contract by first storage deposit to create an account.'}
            </AlertDescription>
          </Alert>
        </ModalBody>
        <ModalFooter>
          <HStack>
            <Button
              variant="primary"
              size="sm"
              isLoading={depositMutation.isLoading}
              onClick={continueBtnClick}
              padding="8px 16px"
            >
              Continue
            </Button>
            <Button
              borderColor="#333"
              variant="secondary"
              size="sm"
              onClick={onClose}
              padding="8px 16px"
            >
              Cancel
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
