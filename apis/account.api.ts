import { BN } from 'bn.js';
import { parseNearAmount } from 'near-api-js/lib/utils/format';
import { getContainer } from '../core';
import { TransactionAction } from '../core/types';
import { parseToUsername } from '../core/utils';
import { AccountDto, AccountInfoDto } from '../dtos';

enum ContractMethods {
  storage_deposit = 'storage_deposit',
  storage_withdraw = 'storage_withdraw',
  is_registered = 'is_registered',
  set_account_info = 'set_account_info',
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
  async storageWithdraw(amount: number): Promise<void> {
    console.log('payload ', amount, parseNearAmount(amount.toString()));
    await getContainer().bcConnector.callChangeMethod({
      methodName: ContractMethods.storage_withdraw,
      args: { amount: parseNearAmount(amount.toString()) ?? '0' },
      attachedDeposit: new BN(1),
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
  async setAccountInfo(payload: AccountInfoDto): Promise<void> {
    const args = {
      account_info: btoa(JSON.stringify(payload)),
    };

    await getContainer().bcConnector.callChangeMethod({
      methodName: ContractMethods.set_account_info,
      args,
    });
  },
});

const mapToAccounts = (raws: any[]): AccountDto[] => {
  return raws.map<AccountDto>((item) => {
    return mapToRawAccount(item);
  });
};

const mapToRawAccount = (item: any): AccountDto => {
  const accountInfo: AccountInfoDto = item[1]?.account_info
    ? JSON.parse(atob(item[1]?.account_info))
    : null;
  if (!accountInfo?.displayName)
    accountInfo.displayName = parseToUsername(item[0]);
  return {
    id: item[0],
    accountInfo,
    numFollowers: item[1]?.num_followers,
    numFollowing: item[1]?.num_following,
    numNfts: item[1]?.num_nfts,
    nfts: item[1]?.nfts,
  };
};

const mapToAccount = (item: any): AccountDto => {
  const accountInfo: AccountInfoDto = item?.account_info
    ? JSON.parse(atob(item?.account_info))
    : {};
  if (!accountInfo?.displayName)
    accountInfo.displayName = parseToUsername(item.account_id);
  return {
    id: item.account_id,
    accountInfo,
    numFollowers: item?.num_followers,
    numFollowing: item?.num_following,
    numNfts: item?.num_nfts,
    nfts: item?.nfts,
  };
};
