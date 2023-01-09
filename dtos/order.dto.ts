import { NFTMetadata } from './nft.dto';

export type OrderDto = {
  orderId: string;
  ownerId: string;
  nftId: string;
  price: string;
  createAt: number;
  isSold: boolean;
  metadata: NFTMetadata;
};
