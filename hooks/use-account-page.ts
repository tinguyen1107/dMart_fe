import { useInfiniteQuery, useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { CachePrefixKeys } from '../constants';
import { useBlockchain, useWalletAccountId } from '../core/hooks';
import { AccountRepo, NftRepo } from '../repos';
import { NftApi } from '../apis';
import { useHookstate } from '@hookstate/core';
import { AppState } from '../store';

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
  const nftQuery = useInfiniteQuery(
    [CachePrefixKeys.LIST_NFT, accountId],
    ({ pageParam }) => {
      const skip = pageParam?.skip || 0;
      return NftRepo.fetchListNFTs(accountId!);
    },
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length < 100) return undefined;
        const skip = pages.length * 100;
        return {
          skip,
        };
      },
      keepPreviousData: true,
      enabled: !!accountId,
    }
  );

  return {
    accountPageState: {
      accountQuery,
      nftQuery,
    },
    accountPageMethods: {},
  };
};
