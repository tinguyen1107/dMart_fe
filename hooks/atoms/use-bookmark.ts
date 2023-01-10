import { useToast } from '@chakra-ui/react';
import React, { useCallback } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toastBaseConfig } from '../../utils';
import { useHookstate } from '@hookstate/core';
import { AccountState } from '../../store';
import { AccountRepo } from '../../repos';
import { CachePrefixKeys } from '../../constants';

export const useBookmark = (nftId?: string) => {
  const accountState = useHookstate(AccountState);
  const queryClient = useQueryClient();
  const toast = useToast();

  const accountBookmarksQuery = useQuery(
    [CachePrefixKeys.LIST_FAVOURITE_NFTS],
    () => AccountRepo.getBookmarks(),
    {
      enabled: !!accountState.value.profile?.id,
    }
  );

  const addBookmarkMutation = useMutation(
    () => AccountRepo.addBookmark(nftId!),
    {
      onSuccess: () => {
        toast({
          title: 'Add bookmark successfully',
          status: 'success',
          ...toastBaseConfig,
        });
        queryClient.invalidateQueries([CachePrefixKeys.LIST_FAVOURITE_NFTS]);
        accountBookmarksQuery.refetch();
      },
      onError: () => {
        toast({
          title: 'Add bookmark failed',
          status: 'error',
          ...toastBaseConfig,
        });
      },
    }
  );

  const removeBookmarkMutation = useMutation(
    () => AccountRepo.removeBookmark(nftId!),
    {
      onSuccess: () => {
        toast({
          title: 'Remove bookmark successfully',
          status: 'success',
          ...toastBaseConfig,
        });
        queryClient.invalidateQueries([CachePrefixKeys.LIST_FAVOURITE_NFTS]);
        accountBookmarksQuery.refetch();
      },
      onError: () => {
        toast({
          title: 'Remove bookmark failed',
          status: 'error',
          ...toastBaseConfig,
        });
      },
    }
  );

  const addBookmark = useCallback(async () => {
    addBookmarkMutation.mutate();
  }, [nftId]);

  const removeBookmark = useCallback(async () => {
    removeBookmarkMutation.mutate();
  }, [nftId]);

  const marked = React.useMemo(() => {
    console.log(
      'test',
      accountBookmarksQuery.data,
      !!accountBookmarksQuery.data?.find((item: any) => item.id === nftId)
    );
    return (
      !!accountBookmarksQuery.data &&
      !!accountBookmarksQuery.data?.find((item: any) => item.token_id === nftId)
    );
  }, [nftId, accountBookmarksQuery.data?.length]);

  return {
    bookmarkState: {
      marked,
      accountBookmarksQuery,
      isLoading:
        accountBookmarksQuery.isLoading ||
        addBookmarkMutation.isLoading ||
        removeBookmarkMutation.isLoading,
    },
    bookmarkMethods: {
      addBookmark,
      removeBookmark,
    },
  };
};
