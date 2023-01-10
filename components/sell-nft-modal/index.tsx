import {
  Box,
  Button,
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
} from '@chakra-ui/react';
import React from 'react';
import { useSellNftModal } from '../../hooks';
import { NftCard } from '../nft-card';

export const SellNftModal: React.FunctionComponent<{}> = () => {
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
    sellNftModalState: {
      isOpen,
      selectedNft,
      priceInputRef,
      sellNftPublishing,
    },
    sellNftModalMethods: { onOpen, onClose, handleBtnSellClick },
  } = useSellNftModal();
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
              Sell NFT
            </Text>
            <Text mt="4px" fontWeight="400" fontSize="12px" color="textPrimary">
              Put NFT into marketplace.
            </Text>
          </ModalHeader>
          <ModalCloseButton
            color="textSloganHomepage"
            _focus={{ boxShadow: 'none' }}
          />
          <ModalBody flex={1}>
            <VStack spacing="1em" w="100%" fontSize="12px" fontWeight="800">
              {!!selectedNft && (
                <Box
                  bg="#fff1"
                  p="20px"
                  borderRadius="12px"
                  maxW="390px"
                  w="100%"
                >
                  <NftCard data={selectedNft} />
                </Box>
              )}
              <Box>
                <Input type="number" placeholder="Amount" ref={priceInputRef} />
              </Box>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              w="100%"
              variant="primary"
              padding="8px 16px"
              isLoading={sellNftPublishing}
              type="submit"
              isDisabled={
                parseFloat(priceInputRef.current?.value ?? '') === NaN
              }
              onClick={handleBtnSellClick}
            >
              Sell
            </Button>
          </ModalFooter>
        </Box>
      </ModalContent>
    </Modal>
  );
};
//{...placeChestForm.register('message', {})}
