import { useInfiniteQuery, useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { CachePrefixKeys } from '../constants';
import { useBlockchain, useWalletAccountId } from '../core/hooks';
import { AccountRepo, NftRepo } from '../repos';
import { AccountApi, NftApi } from '../apis';
import { useHookstate } from '@hookstate/core';
import { AppState } from '../store';
import { OrderRepo } from '../repos/order.repo';

export const useAccountPage = ({ accountId }: { accountId?: string }) => {
  const router = useRouter();
  const appState = useHookstate(AppState);
  const { blockchainState, blockchainMethods } = useBlockchain();

  const accountQuery = useQuery(
    [CachePrefixKeys.ACCOUNT, accountId],
    () => AccountRepo.getUserInfo(accountId!),
    {
      enabled: !!accountId,
    }
  );

  // const nftQuery = useQuery(
  //   [CachePrefixKeys.LIST_NFT, accountId],
  //   () => NFTApi.fetchListNFTs(accountId!),
  //   {
  //     enabled: !!accountId,
  //   }
  // );
  // {
  // skip,
  // limit: FETCH_POSTS_LIMIT,
  // selector: buildWhereQuery({
  //   filter: { ...postFilter.filter, accountId },
  // },
  //   sort: buildSortQuery(postFilter),
  // }

  const listFavouriteQuery = useQuery(
    [CachePrefixKeys.LIST_FAVOURITE_NFTS],
    () => AccountRepo.getBookmarks(),
    { enabled: appState.value.ready && !!accountId }
  );
  const nftQuery = useQuery(
    [CachePrefixKeys.LIST_NFT, accountId],
    () => NftRepo.fetchListNFTs(accountId!),
    { enabled: appState.value.ready && !!accountId }
  );

  const listOrdersQuery = useQuery(
    [CachePrefixKeys.LIST_ORDERS, accountId],
    () => OrderRepo.fetchListAccountOrders(accountId!),
    { enabled: appState.value.ready && !!accountId }
  );

  return {
    accountPageState: {
      accountQuery,
      listFavouriteQuery,
      nftQuery,
      listOrdersQuery,
    },
    accountPageMethods: {},
  };
};
