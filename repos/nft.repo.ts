import { MintNftInput, NftApi as NftApi, SellNftInput } from '../apis';
import { GetListInput, Optional } from '../core/types';
import { DB } from '../db';
import { NftDto, NFTMetadata } from '../dtos';

export class NftRepo {
  static async fetchListNFTs(accountId: string): Promise<NftDto[]> {
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

  static async sellNft(payload: SellNftInput): Promise<void> {
    return NftApi.sellNft(payload);
  }
}
