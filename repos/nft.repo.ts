import { MintNftInput, NftApi as NftApi } from '../apis';
import { GetListInput, Optional } from '../core/types';
import { DB } from '../db';
import { NFT, NFTMetadata } from '../dtos';

export class NftRepo {
  static async fetchListNFTs(accountId: string): Promise<NFT[]> {
    return NftApi.fetchListNFTs(accountId);
  }
  static async fetchNFTMetadata(
    tokenId: string
  ): Promise<Optional<NFTMetadata>> {
    return NftApi.fetchNFTMetadata(tokenId);
  }

  static async mintArtNft(payload: MintNftInput): Promise<void> {
    return NftApi.mintArtNft(payload);
  }
}
