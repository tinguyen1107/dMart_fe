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
import { NftDto, OrderDto } from '../dtos';
import { useAccountPage } from './use-account-page';
// import { PlaceChestInput } from '../apis/chest.api';

export const useOrderCard = (data: OrderDto) => {
  const [selectedNft, setSelectedNft] = useState<NftDto | undefined>(undefined);
  const queryClient = useQueryClient();
  const [sellNftPublishing, setSellNftPublishing] = useState(false);
  const toast = useToast();

  const {
    accountPageState: { accountQuery },
  } = useAccountPage({ accountId: data.ownerId });

  const { data: account } = accountQuery;

  const handleBtnBuyClick = useCallback(() => {
    AuthUtils.authCheckAndExec(async () => {
      await NftRepo.buyNft(data);
    });
  }, [data]);

  return {
    orderCardState: {
      account,
    },
    orderCardMethods: {
      handleBtnBuyClick,
    },
  };
};
