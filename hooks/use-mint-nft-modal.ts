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
// import { PlaceChestInput } from '../apis/chest.api';

export const useMintNft = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const queryClient = useQueryClient();
  const mintNftForm = useForm<MintNftInput>();
  const [mintNftPublishing, setMintNftPublishing] = useState(false);
  const toast = useToast();

  const fileInputRef = useRef<any>();

  const uploadFileMutation = useMutation(async () => {
    if (fileInputRef.current?.files) {
      const file = fileInputRef.current.files[0];
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
            ModalUtils.mintNft.onClose();
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
    fileInputRef.current?.click();
  }, []);

  const onRemove = useCallback(async (e: any) => {
    console.log('ting clo', mintNftForm.getValues('media'));
    e.stopPropagation();
    mintNftForm.setValue('media', '');
    mintNftForm.trigger('media');
  }, []);

  useEffect(() => {
    ModalUtils.mintNft.onOpen = onOpen;
    ModalUtils.mintNft.onClose = onClose;
  }, []);

  return {
    mintNftModalState: {
      isOpen,
      fileInputRef,
      mintNftForm,
      mintNftPublishing,
    },
    mintNftModalMethods: {
      onOpen,
      onClose,
      onRemove,
      openFileImport,
      uploadFileMutation,
      handleMintNftFormSubmit,
    },
  };
};
