import { useMutation } from 'react-query';
import { AccountRepo } from '../repos';
import { useCallback, useRef } from 'react';

export const useStorageWithdraw = () => {
  const amountRef = useRef<any>();
  const useStorageDepositMutation = useMutation(() =>
    AccountRepo.storageWithdraw(amountRef.current.value)
  );

  const deposit = useCallback(
    () => useStorageDepositMutation.mutateAsync(),
    []
  );

  return {
    storageDepositState: {
      isLoading: useStorageDepositMutation.isLoading,
      data: useStorageDepositMutation.data,
    },
    storageDepositMethods: {
      deposit,
    },
  };
};
