import { useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';
import { ModalUtils } from '../utils';
import { useStorageWithdraw } from './use-storage-withdraw';

export const useStorageWithdrawModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { storageWithdrawState, storageWithdrawMethods } = useStorageWithdraw();

  useEffect(() => {
    ModalUtils.storageDeposit.onOpen = onOpen;
    ModalUtils.storageDeposit.onClose = onClose;
  }, []);

  return {
    storageDepositModalState: { isOpen, storageWithdrawState },
    storageDepositModalMethods: { onOpen, onClose, storageWithdrawMethods },
  };
};
