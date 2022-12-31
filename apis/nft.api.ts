import { BN } from 'bn.js';
import { parseNearAmount } from 'near-api-js/lib/utils/format';
import { NFT_CONTRACT_NAME } from '../constants';
import { getContainer } from '../core';
import { Optional } from '../core/types';
import { NFTMetadata, NFT } from '../dtos';

enum ContractMethods {
  mint_nft = 'mint_nft',
  tokens_metadata_of_owner = 'tokens_metadata_of_owner',
  token_metadata = 'token_metadata',
}

export const NFTApi = Object.freeze({
  async fetchListNFTs(accountId: string): Promise<NFT[]> {
    const res = await getContainer().bcConnector.callViewMethod({
      contractId: NFT_CONTRACT_NAME,
      methodName: ContractMethods.tokens_metadata_of_owner,
      args: {
        owner_id: accountId,
      },
    });
    console.log('hhhh', res);

    return res.map((item: any) => {
      return {
        ...item,
        tokenId: item.token_id,
        metadata: {
          ...item.metadata,
          media: item.metadata.media.replace('gateway.pinata.cloud', ''),
        },
      };
    });
  },

  async fetchNFTMetadata(tokenId: string): Promise<Optional<NFTMetadata>> {
    try {
      const res = await getContainer().bcConnector.callViewMethod({
        contractId: NFT_CONTRACT_NAME,
        methodName: ContractMethods.token_metadata,
        args: {
          token_id: tokenId,
        },
      });

      console.log('hhhh', res);
      return res;
    } catch (err) {
      console.log(err);
    }
  },
  async mintNft(title: string, description: string): Promise<void> {
    await getContainer().bcConnector.callChangeMethod({
      methodName: ContractMethods.mint_nft,
      args: {
        account_id: getContainer().bcConnector.wallet.getAccountId(),
        title,
        description,
        media: String,
        nft_type: String,
      },
      attachedDeposit: new BN(parseNearAmount('0.2') ?? 0),
    });
  },
});
