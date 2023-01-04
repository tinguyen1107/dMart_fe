import { useMutation } from 'react-query';
import { AccountRepo } from '../repos';
import { useCallback, useRef } from 'react';

export const useStorageWithdraw = () => {
  const amountInputRef = useRef<any>();
  const useStorageWithdrawMutation = useMutation(() =>
    AccountRepo.storageWithdraw(amountInputRef.current.value)
  );

  const withdraw = useCallback(
    () => useStorageWithdrawMutation.mutateAsync(),
    []
  );

  return {
    storageWithdrawState: {
      isLoading: useStorageWithdrawMutation.isLoading,
      data: useStorageWithdrawMutation.data,
      amountInputRef,
    },
    storageWithdrawMethods: {
      withdraw,
    },
  };
};
