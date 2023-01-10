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
  Center,
  AspectRatio,
  Image,
  Spinner,
  CloseButton,
  FormErrorMessage,
} from '@chakra-ui/react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { useHookstate } from '@hookstate/core';
import ResizeTextarea from 'react-textarea-autosize';
import { ModalUtils } from '../../utils';
import { useMintNft } from '../../hooks';
import { BiImageAdd } from 'react-icons/bi';
import { CheckBox } from '../checkbox';
export const MintNftModal: React.FunctionComponent<{}> = () => {
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

  const {
    mintNftModalState: { isOpen, fileInputRef, mintNftForm, mintNftPublishing },
    mintNftModalMethods: {
      onOpen,
      onClose,
      onRemove,
      openFileImport,
      uploadFileMutation,
      handleMintNftFormSubmit,
    },
  } = useMintNft();
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
  const MAX_MESSAGE_CHARACTERS = 280;
  const MAX_TITLE_CHARACTERS = 80;
  const indicatorNameCharacters = React.useMemo(
    () => ({
      remain: MAX_TITLE_CHARACTERS - (mintNftForm.watch('title')?.length ?? 0),
      percent:
        ((mintNftForm.watch('title')?.length ?? 0) / MAX_TITLE_CHARACTERS) *
        100,
    }),
    [mintNftForm.watch('title')?.length]
  );

  const indicatorDescriptionCharacters = React.useMemo(
    () => ({
      remain:
        MAX_MESSAGE_CHARACTERS -
        (mintNftForm.watch('description')?.length ?? 0),
      percent:
        ((mintNftForm.watch('description')?.length ?? 0) /
          MAX_MESSAGE_CHARACTERS) *
        100,
    }),
    [mintNftForm.watch('description')?.length]
  );

  const [opt, setOption] = useState<number>(0);

  const options = useMemo(() => ['Art', 'Certificate'], []);

  useEffect(() => {
    mintNftForm.setValue('extra', options[opt]);
  }, [opt]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: 'full', sm: 'md', md: '2xl' }}
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
            <Text fontWeight="800" fontSize="20px" color="var(--textHeader)">
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
          <form onSubmit={handleMintNftFormSubmit}>
            <Stack pt="8px" direction={{ base: 'column', lg: 'row' }}>
              <ModalBody flex={1}>
                <VStack spacing="8px" w="100%" fontSize="12px" fontWeight="800">
                  <FormControl>
                    <Box w="100%">
                      <HStack justifyContent="space-between">
                        <Text pl="4px">Title</Text>
                        <Text
                          fontWeight="400"
                          fontSize="11px"
                          color={
                            indicatorNameCharacters.remain > 20
                              ? undefined
                              : indicatorNameCharacters.remain >= 0
                              ? 'orange'
                              : 'red'
                          }
                        >
                          {mintNftForm.watch('title')?.length ?? 0}/
                          {MAX_TITLE_CHARACTERS}
                        </Text>
                      </HStack>
                      <Input
                        variant="primary"
                        py="11px"
                        bg="var(--bgSecondary)"
                        placeholder="Enter title of NFT"
                        h="40px"
                        as={ResizeTextarea}
                        resize="none"
                        {...mintNftForm.register('title')}
                      />
                    </Box>
                  </FormControl>
                  <FormControl>
                    <Box w="100%">
                      <HStack justifyContent="space-between">
                        <Text pl="4px">Description</Text>
                        <Text
                          fontWeight="400"
                          fontSize="11px"
                          color={
                            indicatorDescriptionCharacters.remain > 20
                              ? undefined
                              : indicatorDescriptionCharacters.remain >= 0
                              ? 'orange'
                              : 'red'
                          }
                        >
                          {mintNftForm.watch('description')?.length ?? 0}/
                          {MAX_TITLE_CHARACTERS}
                        </Text>
                      </HStack>
                      <Textarea
                        as={ResizeTextarea}
                        resize="none"
                        bg="var(--bgSecondary)"
                        variant="primary"
                        placeholder="Message for the person opening this chest."
                        fontSize="12px"
                        fontWeight="400"
                        padding="14px 8px"
                        color="textPrimary"
                        mt="4px"
                        _placeholder={{
                          color: 'textSecondary',
                        }}
                        {...mintNftForm.register('description')}
                      />
                    </Box>
                  </FormControl>
                  <VStack align="start" w="100%">
                    <Text pl="4px">NFT type:</Text>
                    <VStack align="start" w="100%" pl="12px">
                      {options.map((option, index) => (
                        <Box
                          key={index}
                          w="100%"
                          fontSize="14px"
                          fontWeight="600"
                          color="textSecondary"
                        >
                          <CheckBox
                            title={option}
                            isChecked={opt == index}
                            isToggle={false}
                            onChange={() => setOption(index)}
                          />
                        </Box>
                      ))}
                    </VStack>
                  </VStack>
                  {mintNftForm.watch('extra') == 'Certificate' && (
                    <FormControl
                      isInvalid={
                        !!mintNftForm.watch('receiverId') &&
                        !mintNftForm.watch('receiverId')?.includes('.testnet')
                      }
                    >
                      <Box w="100%">
                        <HStack justifyContent="space-between">
                          <Text pl="4px">Receiver Id</Text>
                        </HStack>
                        <Input
                          variant="primary"
                          py="11px"
                          bg="var(--bgSecondary)"
                          placeholder="Enter receiver id"
                          h="40px"
                          as={ResizeTextarea}
                          resize="none"
                          {...mintNftForm.register('receiverId')}
                        />
                      </Box>
                      <FormErrorMessage>Invalid account id</FormErrorMessage>
                    </FormControl>
                  )}
                  <VStack align="start" w="100%">
                    <Text pl="4px">Media</Text>
                    <Box
                      w="100%"
                      bg="var(--bgSecondary)"
                      borderRadius="10px"
                      cursor="pointer"
                      _hover={{ opacity: 0.75 }}
                      onClick={openFileImport}
                      minH="100px"
                      pos="relative"
                    >
                      {!mintNftForm.watch('media') ? (
                        uploadFileMutation.isLoading ? (
                          <Center minH="100px" h="100%">
                            <Spinner />
                          </Center>
                        ) : (
                          <AspectRatio ratio={16 / 9}>
                            <Center w="100%">
                              <BiImageAdd size="100" />
                            </Center>
                          </AspectRatio>
                        )
                      ) : (
                        <>
                          <CloseButton
                            borderRadius="full"
                            position="absolute"
                            top="10px"
                            right="10px"
                            color="white"
                            zIndex="1000"
                            bg="blackAlpha.500"
                            onClick={onRemove}
                          />
                          <Image
                            src={mintNftForm.getValues('media')}
                            borderRadius="10px"
                          />
                        </>
                      )}
                      <input
                        type="file"
                        ref={fileInputRef}
                        hidden
                        onChange={async () => {
                          await uploadFileMutation.mutateAsync();
                          mintNftForm.trigger('media');
                        }}
                      />
                    </Box>
                  </VStack>
                </VStack>
              </ModalBody>
            </Stack>
            <ModalFooter>
              <Button
                w="100%"
                variant="primary"
                padding="8px 16px"
                isLoading={mintNftPublishing}
                type="submit"
                isDisabled={
                  indicatorDescriptionCharacters.remain < 0 ||
                  indicatorNameCharacters.remain < 0 ||
                  !mintNftForm.watch('title') ||
                  !mintNftForm.watch('description') ||
                  !mintNftForm.watch('media') ||
                  !mintNftForm.watch('extra') ||
                  uploadFileMutation.isLoading
                }
              >
                Mint
              </Button>
            </ModalFooter>
          </form>
        </Box>
      </ModalContent>
    </Modal>
  );
};
//{...placeChestForm.register('message', {})}
