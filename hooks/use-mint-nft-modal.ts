import { useMemo, useRef, useState } from 'react';
import { useQueryClient } from 'react-query';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';
import { getMessageFromExecutionError, ModalUtils } from '../utils';
import { NftRepo } from '../repos';
import { MintNftInput } from '../apis';
// import { PlaceChestInput } from '../apis/chest.api';

export const useMintNft = () => {
  const queryClient = useQueryClient();
  const mintNftForm = useForm<MintNftInput>();
  const [mintNftPublishing, setMintNftPublishing] = useState(false);
  const toast = useToast();

  const handleMintNftFormSubmit = useMemo(
    () =>
      mintNftForm.handleSubmit(async (data: MintNftInput) => {
        setMintNftPublishing(true);

        try {
          //   if (!data.name && data.name == '') data.name = 'No name';
          //
          //   console.log('Data: ', JSON.stringify(data, null, 2));
          //
          //   switch (chestAction) {
          //     case 'place':
          //       action = 'Place chest';
          //       await ChestRepo.placeChest(data);
          //       break;
          //     case 'replace':
          //       action = 'Replace chest';
          //       console.log('chest id ', data.id);
          //       if (!data.id) return;
          //       await ChestRepo.replaceChest(data.id, data);
          //       break;
          //   }

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
      }),
    []
  );

  return {
    mintNftForm,
    mintNftPublishing,
    handleMintNftFormSubmit,
  };
};
