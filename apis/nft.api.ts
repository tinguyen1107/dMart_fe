import { BN } from 'bn.js';
import { parseNearAmount } from 'near-api-js/lib/utils/format';
import { getContainer } from '../core';
import { Optional } from '../core/types';
import { NFTMetadata, NftDto, OrderDto } from '../dtos';

enum ContractMethods {
  mint_nft = 'mint_nft',
  mint_art_nft = 'mint_art_nft',
  sell_nft = 'sell_nft',
  buy_nft = 'buy_nft',
  tokens_metadata_of_owner = 'tokens_metadata_of_owner',
  token_metadata = 'token_metadata',
}

export type MintNftInput = {
  title: string;
  description: string;
  media: string;
  extra: string;
};

export type SellNftInput = {
  nftId: string;
  price: string;
};

export const NftApi = Object.freeze({
  async fetchListNFTs(accountId: string): Promise<NftDto[]> {
    const res = await getContainer().bcConnector.callViewMethod({
      methodName: ContractMethods.tokens_metadata_of_owner,
      args: {
        owner_id: accountId,
      },
    });

    return res.map((item: any) => mapToNftDto(item));
  },

  async fetchNFTMetadata(tokenId: string): Promise<Optional<NFTMetadata>> {
    try {
      const res = await getContainer().bcConnector.callViewMethod({
        methodName: ContractMethods.token_metadata,
        args: {
          token_id: tokenId,
        },
      });

      return res;
    } catch (err) {
      console.log(err);
    }
  },

  async mintArtNft(payload: MintNftInput): Promise<void> {
    await getContainer().bcConnector.callChangeMethod({
      methodName: ContractMethods.mint_art_nft,
      args: {
        receiver_id: getContainer().bcConnector.wallet.getAccountId(),
        metadata: payload,
      },
      attachedDeposit: new BN(parseNearAmount('0.2') ?? 0),
    });
  },

  async sellNft(payload: SellNftInput): Promise<void> {
    await getContainer().bcConnector.callChangeMethod({
      methodName: ContractMethods.sell_nft,
      args: {
        nft_id: payload.nftId,
        price: parseNearAmount(payload.price),
      },
      // attachedDeposit: new BN(parseNearAmount('0.2') ?? 0),
    });
  },

  async buyNft(payload: OrderDto): Promise<void> {
    await getContainer().bcConnector.callChangeMethod({
      methodName: ContractMethods.buy_nft,
      args: {
        order_id: payload.orderId,
      },
      attachedDeposit: new BN(
        parseNearAmount(payload.order.price.toString()) ?? 0
      ),
    });
  },
});

export const mapToNftDto = (item: any): NftDto => {
  return {
    ...item,
    tokenId: item.token_id,
    ownerId: item.owner_id,
    metadata: {
      ...item.metadata,
    },
  };
};
