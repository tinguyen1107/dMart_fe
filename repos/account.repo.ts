import { AccountApi } from '../apis';
import { AccountDto, NftDto } from '../dtos';

export class AccountRepo {
  static async storageDeposit(): Promise<void> {
    return AccountApi.storageDeposit();
  }
  static async storageWithdraw(amount: number): Promise<void> {
    return AccountApi.storageWithdraw(amount);
  }
  static async isRegistered(): Promise<boolean> {
    return AccountApi.isRegistered();
  }
  static async storageMinimumBalance(): Promise<number> {
    return AccountApi.storageMinimumBalance();
  }
  static async getUserInfo(accountId: string): Promise<AccountDto> {
    return AccountApi.fetchAccount(accountId);
  }
  static async isAdmin(accountId: string): Promise<boolean> {
    return AccountApi.isAdmin(accountId);
  }
  static async fetchAccount(accountId: string): Promise<AccountDto> {
    return AccountApi.fetchAccount(accountId);
  }
  static async fetchAccounts(): Promise<AccountDto[]> {
    return AccountApi.fetchAccounts();
  }
  static async getBookmarks(): Promise<NftDto[]> {
    return AccountApi.getBookmarks();
  }
  static async addBookmark(nftId: string): Promise<void> {
    return AccountApi.addBookmark(nftId);
  }
  static async removeBookmark(nftId: string): Promise<void> {
    return AccountApi.removeBookmark(nftId);
  }
}
