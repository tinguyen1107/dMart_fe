import { useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';
import { ModalUtils } from '../utils';
import { useStorageWithdraw } from './use-storage-withdraw';

export const useStorageWithdrawModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { storageWithdrawState, storageWithdrawMethods } = useStorageWithdraw();

  useEffect(() => {
    ModalUtils.storageWithdraw.onOpen = onOpen;
    ModalUtils.storageWithdraw.onClose = onClose;
  }, []);

  return {
    storageWithdrawModalState: { isOpen, storageWithdrawState },
    storageWithdrawModalMethods: { onOpen, onClose, storageWithdrawMethods },
  };
};
