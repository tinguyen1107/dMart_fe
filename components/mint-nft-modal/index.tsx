import {
  Box,
  Button,
  FormControl,
  Stack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  VStack,
  ModalHeader,
  Textarea,
  HStack,
  useDisclosure,
  LinkBox,
  ControlBox,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
// import { usePlaceChest, usePlaceChestModal } from '../../hooks';
// import { Wrapper } from '../wrapper';
// import { ChestDto } from '../../dtos';
import { useHookstate } from '@hookstate/core';
// import { ChestState } from '../../store';
import ResizeTextarea from 'react-textarea-autosize';
import { ModalUtils } from '../../utils';
//
export const MintNftModal: React.FunctionComponent<{}> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const {
  //   blockchainMethods: { signIn },
  // } = useBlockchain();
  // const {
  //   wallet: { loading, logged },
  // } = useWallet();

  // const [data, setData] = useState<PostMoreProps>();

  // const handleOpen = useCallback((payload: PostMoreProps) => {
  //   setData(payload);
  //   onOpen();
  // }, []);

  useEffect(() => {
    ModalUtils.mintNft.onOpen = onOpen;
    ModalUtils.mintNft.onClose = onClose;
  }, []);
  // const chestState = useHookstate(ChestState);
  // const [centerPosition, _setCenterPosition] = useState<Position | undefined>();
  //
  // const {
  //   placeChestModalMethods: { onClose, onOpen: _ },
  //   placeChestModalState: { isOpen },
  // } = usePlaceChestModal();
  //
  // const { placeChestForm, createPostPublishing, handlePlaceChestFormSubmit } =
  //   usePlaceChest();
  //
  // useEffect(() => {
  //   switch (chestState.value.action) {
  //     case 'place':
  //       placeChestForm.reset();
  //       break;
  //     case 'replace':
  //       placeChestForm.setValue('id', chestState.value.chestId);
  //       break;
  //   }
  //   placeChestForm.setValue('action', chestState.value.action!);
  // }, [chestState.value.action, chestState.value.chestId]);
  //
  // const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  // const [isLargerThan990] = useMediaQuery('(min-width: 992px)');
  //
  // const isExtendModal = false;
  //
  // const [placeChest, setPlaceChest] = useState<Location | undefined>();
  //
  // useEffect(() => {
  //   if (placeChest == undefined) return;
  //   const place_chest = {
  //     lat: placeChest.position.lat,
  //     lng: placeChest.position.lng,
  //     label: placeChest.place_id,
  //   };
  //   console.log('place chest: ', place_chest);
  //
  //   placeChestForm.setValue('location', place_chest);
  // }, [placeChest]);
  //
  // const MAX_MESSAGE_CHARACTERS = 280;
  // const MAX_TITLE_CHARACTERS = 80;
  //
  // const indicatorNameCharacters = React.useMemo(
  //   () => ({
  //     remain:
  //       MAX_TITLE_CHARACTERS - (placeChestForm.watch('name')?.length ?? 0),
  //     percent:
  //       ((placeChestForm.watch('name')?.length ?? 0) / MAX_TITLE_CHARACTERS) *
  //       100,
  //   }),
  //   [placeChestForm.watch('name')?.length]
  // );
  //
  // const indicatorMessageCharacters = React.useMemo(
  //   () => ({
  //     remain:
  //       MAX_MESSAGE_CHARACTERS - (placeChestForm.watch('message')?.length ?? 0),
  //     percent:
  //       ((placeChestForm.watch('message')?.length ?? 0) /
  //         MAX_MESSAGE_CHARACTERS) *
  //       100,
  //   }),
  //   [placeChestForm.watch('message')?.length]
  // );
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent bg="transparent">
        <Box
          borderRadius="12px"
          color="var(--textPrimary)"
          bg="var(--bgPrimary)"
          flex={1}
        >
          <ModalHeader>
            <Text fontWeight="800" fontSize="16px" color="var(--textHeader)">
              Mint NFT
            </Text>
            <Text
              mt="4px"
              fontWeight="400"
              fontSize="12px"
              color="textPrimary"
            ></Text>
          </ModalHeader>
          <ModalCloseButton
            color="textSloganHomepage"
            _focus={{ boxShadow: 'none' }}
          />
          <form>
            <Stack pt="8px" direction={{ base: 'column', lg: 'row' }}>
              <ModalBody flex={1}>
                <VStack spacing="1em" w="100%" fontSize="12px" fontWeight="800">
                  <FormControl>
                    <Box w="100%">
                      <HStack justifyContent="space-between">
                        <Text pl="4px">Title</Text>
                        <Text
                          fontWeight="400"
                          fontSize="11px"
                          color={
                            undefined
                            // indicatorNameCharacters.remain > 20
                            //   ? undefined
                            //   : indicatorNameCharacters.remain >= 0
                            //   ? 'orange'
                            //   : 'red'
                            // {placeChestForm.watch('name')?.length ?? 0}/
                            // {MAX_TITLE_CHARACTERS}
                            // {...placeChestForm.register('name')}
                          }
                        >
                          0
                        </Text>
                      </HStack>
                      <Input
                        variant="primary"
                        py="11px"
                        placeholder="Enter recipient's name"
                        h="40px"
                        as={ResizeTextarea}
                        resize="none"
                      />
                    </Box>
                  </FormControl>
                  <FormControl>
                    <Box w="100%">
                      <Text pl="4px">Code (optional)</Text>
                      <Input variant="primary" placeholder="Place a key code" />
                    </Box>
                  </FormControl>
                  <FormControl>
                    <Box w="100%">
                      <HStack justifyContent="space-between">
                        <Text pl="4px">Message (optional)</Text>
                        <Text fontWeight="400" fontSize="11px">
                          0
                        </Text>
                      </HStack>
                      <Textarea
                        as={ResizeTextarea}
                        resize="none"
                        variant="primary"
                        placeholder="Message for the person opening this chest."
                        background="bgSecondary"
                        fontSize="12px"
                        fontWeight="400"
                        padding="14px 8px"
                        color="textPrimary"
                        mt="4px"
                        _placeholder={{
                          color: 'textSecondary',
                        }}
                      />
                    </Box>
                  </FormControl>
                </VStack>
              </ModalBody>
            </Stack>
            <ModalFooter>
              <Button
                w="100%"
                variant="primary"
                padding="8px 16px"
                isLoading={
                  false //createPostPublishing
                }
                type="submit"
                isDisabled={
                  true
                  // indicatorMessageCharacters.remain < 0 ||
                  // indicatorNameCharacters.remain < 0
                }
              >
                Place
              </Button>
            </ModalFooter>
          </form>
        </Box>
      </ModalContent>
    </Modal>
  );
};
//{...placeChestForm.register('message', {})}
