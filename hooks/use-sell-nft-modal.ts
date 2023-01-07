import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useForm } from 'react-hook-form';
import { useDisclosure, useToast } from '@chakra-ui/react';
import {
  AuthUtils,
  getMessageFromExecutionError,
  IPFSUtils,
  ModalUtils,
  toastBaseConfig,
} from '../utils';
import { NftRepo } from '../repos';
import { MintNftInput } from '../apis';
import { NftDto } from '../dtos';
// import { PlaceChestInput } from '../apis/chest.api';

export const useSellNftModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedNft, setSelectedNft] = useState<NftDto | undefined>(undefined);
  const queryClient = useQueryClient();
  const [sellNftPublishing, setSellNftPublishing] = useState(false);
  const toast = useToast();

  const priceInputRef = useRef<any>();

  const handleBtnSellClick = useCallback(() => {
    AuthUtils.authCheckAndExec(async () => {
      setSellNftPublishing(true);

      try {
        if (!selectedNft?.tokenId) throw 'Failed to get token id';
        const payload = {
          nftId: selectedNft?.tokenId,
          price: priceInputRef.current.value,
        };
        console.log(payload);
        await NftRepo.sellNft({
          nftId: selectedNft?.tokenId,
          price: priceInputRef.current.value,
        });

        queryClient.invalidateQueries('get_chests_by_account_id');
        ModalUtils.sellNft.onClose();
        priceInputRef.current.value = 0;

        toast({
          title: 'Sell NFT successfully',
          status: 'success',
          ...toastBaseConfig,
        });

        // router
        //     .push(createPostRedirect)
        /* .finally(() => */
        /*     localStorage.removeItem(CREATE_POST_REDIRECT) */
        /* ); */
      } catch (error: any) {
        console.error(error);
        const message = getMessageFromExecutionError(
          error?.kind?.ExecutionError
        );
        toast({
          title: 'Sell NFT failed',
          description: message,
          status: 'error',
          ...toastBaseConfig,
        });
      } finally {
        setSellNftPublishing(false);
      }
    });
  }, [selectedNft]);

  const handleOpen = useCallback((data: NftDto) => {
    setSelectedNft(data);
    onOpen();
  }, []);

  const handleClose = useCallback(() => {
    onClose();
    setSelectedNft(undefined);
  }, []);

  useEffect(() => {
    ModalUtils.sellNft.onOpen = handleOpen;
    ModalUtils.sellNft.onClose = handleClose;
  }, []);

  return {
    sellNftModalState: {
      isOpen,
      selectedNft,
      priceInputRef,
      sellNftPublishing,
    },
    sellNftModalMethods: {
      onOpen,
      onClose,
      handleBtnSellClick,
    },
  };
};
