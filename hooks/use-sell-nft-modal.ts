import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useForm } from 'react-hook-form';
import { useDisclosure, useToast } from '@chakra-ui/react';
import {
  AuthUtils,
  getMessageFromExecutionError,
  IPFSUtils,
  ModalUtils,
} from '../utils';
import { NftRepo } from '../repos';
import { MintNftInput } from '../apis';
import { NFT } from '../dtos';
// import { PlaceChestInput } from '../apis/chest.api';

export const useSellNftModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedNft, setSelectedNft] = useState<NFT | undefined>(undefined);
  const queryClient = useQueryClient();
  const mintNftForm = useForm<MintNftInput>();
  const [mintNftPublishing, setMintNftPublishing] = useState(false);
  const toast = useToast();

  const priceInputRef = useRef<any>();

  const uploadFileMutation = useMutation(async () => {
    if (priceInputRef.current?.files) {
      const file = priceInputRef.current.files[0];
      await IPFSUtils.uploadFileToIPFS({
        file,
        onSuccess: async (url) => {
          return mintNftForm.setValue('media', url);
        },
      });
    }
  });

  const handleMintNftFormSubmit = useMemo(
    () =>
      mintNftForm.handleSubmit(async (data: MintNftInput) => {
        AuthUtils.authCheckAndExec(async () => {
          setMintNftPublishing(true);

          try {
            await NftRepo.mintArtNft(data);

            queryClient.invalidateQueries('get_chests_by_account_id');
            ModalUtils.placeChest.onClose();
            mintNftForm.reset();

            toast({
              title: 'Mint NFT successfully',
              position: 'bottom-left',
              status: 'success',
              isClosable: true,
              duration: 3000,
            });

            // router
            //     .push(createPostRedirect)
            /* .finally(() => */
            /*     localStorage.removeItem(CREATE_POST_REDIRECT) */
            /* ); */
          } catch (error: any) {
            console.error(error);
            const message = getMessageFromExecutionError(
              error.kind.ExecutionError
            );
            toast({
              title: 'Mint NFT failed',
              description: message,
              position: 'bottom-left',
              status: 'error',
              isClosable: true,
              duration: 3000,
            });
          } finally {
            setMintNftPublishing(false);
          }
        });
      }),
    []
  );

  const openFileImport = useCallback(async () => {
    priceInputRef.current?.click();
  }, []);

  const onRemove = useCallback(async (e: any) => {
    console.log('ting clo', mintNftForm.getValues('media'));
    e.stopPropagation();
    mintNftForm.setValue('media', '');
    mintNftForm.trigger('media');
  }, []);

  const handleOpen = useCallback((data: NFT) => {
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

      mintNftForm,
      mintNftPublishing,
    },
    sellNftModalMethods: {
      onOpen,
      onClose,
      onRemove,
      openFileImport,
      uploadFileMutation,
      handleMintNftFormSubmit,
    },
  };
};
