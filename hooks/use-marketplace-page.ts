import { useQuery } from 'react-query';
import { CachePrefixKeys } from '../constants';
import { AccountRepo } from '../repos';
import { useHookstate } from '@hookstate/core';
import { AccountState, AppState } from '../store';
import { OrderRepo } from '../repos/order.repo';

export const useMarketplacePage = () => {
  const appState = useHookstate(AppState);
  const accountState = useHookstate(AccountState);
  const accountQuery = useQuery(
    [CachePrefixKeys.ACCOUNT, accountState.value.profile?.id],
    () => AccountRepo.fetchAccount(accountState.value.profile?.id!),
    {
      enabled: !!accountState.value.profile?.id,
    }
  );

  const listOrdersQuery = useQuery(
    [CachePrefixKeys.LIST_ORDERS],
    () => OrderRepo.fetchListOrders(),
    { enabled: appState.value.ready }
  );

  return {
    marketplacePageState: {
      accountQuery,
      listOrdersQuery,
    },
  };
};
