import { BN } from 'bn.js';
import { parseNearAmount } from 'near-api-js/lib/utils/format';
import { getContainer } from '../core';
import { TransactionAction } from '../core/types';
import { AccountDto } from '../dtos';

enum ContractMethods {
  storage_deposit = 'storage_deposit',
  is_registered = 'is_registered',
  user_info = 'user_info',
  storage_minimum_balance = 'storage_minimum_balance',
  is_admin = 'is_admin',
  get_account = 'get_account',
}

export const AccountApi = Object.freeze({
  async storageDeposit(): Promise<void> {
    await getContainer().bcConnector.callChangeMethod({
      methodName: ContractMethods.storage_deposit,
      args: {},
      attachedDeposit: new BN(parseNearAmount('0.2') ?? 0),
    });
  },
  async isRegistered(): Promise<boolean> {
    const res = await getContainer().bcConnector.callViewMethod({
      methodName: ContractMethods.is_registered,
      args: {
        account_id: getContainer().bcConnector.wallet.getAccountId(),
      },
    });
    return res;
  },
  async storageMinimumBalance(): Promise<number> {
    const res = await getContainer().bcConnector.callViewMethod({
      methodName: ContractMethods.storage_minimum_balance,
      args: {},
    });
    return res;
  },
  async getUserInfo(account_id: string): Promise<AccountDto> {
    const res = await getContainer().bcConnector.callViewMethod({
      methodName: ContractMethods.user_info,
      args: {
        account_id,
      },
    });
    return res;
  },
  async isAdmin(account_id: string): Promise<boolean> {
    const res = await getContainer().bcConnector.callViewMethod({
      methodName: ContractMethods.is_admin,
      args: {
        account_id,
      },
    });
    return res;
  },
  async fetchAccount(accountId: string): Promise<AccountDto> {
    let account: AccountDto = await getContainer().bcConnector.callViewMethod({
      methodName: ContractMethods.get_account,
      args: {
        account_id: accountId,
      },
    });
    console.log('account data', account);
    if (account) {
      return mapToAccount({ ...account, account_id: accountId });
    }
    throw new Error(`Account does not exist ${accountId}`);
  },
});

const mapToAccounts = (raws: any[]): AccountDto[] => {
  return raws.map<AccountDto>((item) => {
    return mapToRawAccount(item);
  });
};

const mapToRawAccount = (item: any): AccountDto => {
  return {
    id: item[0],
    avatar: item[1]?.avatar,
    thumbnail: item[1]?.thumbnail,
    bio: item[1]?.bio,
    displayName: item?.display_name,
    nfts: item[1]?.nfts,
  };
};

const mapToAccount = (item: any): AccountDto => {
  return {
    id: item.account_id,
    avatar: item.avatar,
    thumbnail: item.thumbnail,
    bio: item.bio,
    displayName: item.display_name,
    nfts: item?.nfts,
  };
};
