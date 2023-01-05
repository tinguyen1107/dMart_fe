import { NftApi as NftApi } from '../apis';
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

  // static async mintNft(): Promise<boolean> {
  //   return NftApi.mintNft();
  // }
}
