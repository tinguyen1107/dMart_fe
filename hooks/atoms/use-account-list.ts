import { useMutation, useQuery, useQueryClient } from 'react-query';
import { AccountRepo } from '../../repos';

export const useAccountList = () => {
  const listAccountsQuery = useQuery(['list_accounts'], () =>
    AccountRepo.fetchAccounts()
  );

  return {
    accountListState: {
      listAccountsQuery,
    },
  };
};
