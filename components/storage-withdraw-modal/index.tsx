import {
  AlertDescription,
  AlertIcon,
  AlertTitle,
  ModalFooter,
  Alert,
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Input,
  Box,
  Text,
} from '@chakra-ui/react';
import { formatNearAmount } from 'near-api-js/lib/utils/format';
import { useMemo } from 'react';
import { useAccount } from '../../hooks';
import { useStorageWithdrawModal } from '../../hooks/use-storage-withdraw-modal';

export const StorageWithdrawModal = () => {
  const {
    storageWithdrawModalState: { isOpen, storageWithdrawState },
    storageWithdrawModalMethods: { onClose, storageWithdrawMethods },
  } = useStorageWithdrawModal();

  const { accountState } = useAccount();

  const balanceAvailable = useMemo(
    () => formatNearAmount(accountState.balance.get()?.available ?? '0', 2),
    [accountState.balance.get()]
  );

  // const isOverAmount = useMemo(
  //   () =>
  //     parseFloat(storageWithdrawState.amountInputRef.current?.value ?? 0) >
  //     parseFloat(balanceAvailable),
  //   [storageWithdrawState.amountInputRef.current]
  // );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Withdraw</ModalHeader>
        <ModalCloseButton _focus={{ boxShadow: 'none' }} />
        <ModalBody>
          <Box>
            <Input
              type="number"
              placeholder="Amount"
              ref={storageWithdrawState.amountInputRef}
            />
            <Text color="#444">Max: {balanceAvailable} NEAR</Text>
          </Box>
        </ModalBody>
        <ModalFooter>
          <HStack>
            <Button
              variant="primary"
              size="sm"
              isLoading={storageWithdrawState.isLoading}
              onClick={storageWithdrawMethods.withdraw}
              padding="8px 16px"
              bg="#000"
            >
              Confirm
            </Button>
            <Button
              bg="#000"
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
