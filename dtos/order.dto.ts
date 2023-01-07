import { NFTMetadata } from './nft.dto';

export type Order = {
  ownerId: string;
  nftId: string;
  price: number;
  createAt: number;
  isSold: boolean;
};

export type OrderDto = {
  orderId: string;
  order: Order;
  nft: NFTMetadata;
};
