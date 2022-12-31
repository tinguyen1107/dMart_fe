import { NFTApi } from '../apis';
import { GetListInput, Optional } from '../core/types';
import { DB } from '../db';
import { NFT, NFTMetadata } from '../dtos';

export class NFTRepo {
  static async fetchListNFTs(accountId: string): Promise<NFT[]> {
    return NFTApi.fetchListNFTs(accountId);
  }
  static async fetchNFTMetadata(
    tokenId: string
  ): Promise<Optional<NFTMetadata>> {
    return NFTApi.fetchNFTMetadata(tokenId);
  }
}
