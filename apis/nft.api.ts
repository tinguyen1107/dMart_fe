import { BN } from 'bn.js';
import { parseNearAmount } from 'near-api-js/lib/utils/format';
import { Container } from '../core';
import { AccountDto } from '../dtos';

enum ContractMethods {
  mint_nft = 'mint_nft',
}

export const NftApi = Object.freeze({
  async mintNft(title: string, description: string): Promise<void> {
    await Container.bcConnector.callChangeMethod({
      methodName: ContractMethods.mint_nft,
      args: {
        account_id: Container.bcConnector.wallet.getAccountId(),
        title,
        description,
        media: String,
        nft_type: String,
      },
      attachedDeposit: new BN(parseNearAmount('0.2') ?? 0),
    });
  },
});
