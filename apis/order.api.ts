import { BN } from 'bn.js';
import { parseNearAmount } from 'near-api-js/lib/utils/format';
import { getContainer } from '../core';
import { Optional } from '../core/types';
import { NFTMetadata, NftDto, OrderDto } from '../dtos';
import { mapToNftDto } from './nft.api';

enum ContractMethods {
  get_orders = 'get_orders',
}

export const OrderApi = Object.freeze({
  async fetchListOrders(): Promise<OrderDto[]> {
    const res = await getContainer().bcConnector.callViewMethod({
      methodName: ContractMethods.get_orders,
      args: {},
    });

    return res
      .map((item: any) => mapToOrder(item))
      .filter((item: OrderDto) => !item.isSold);
  },
});

const mapToOrder = (item: any): OrderDto => {
  return {
    orderId: item.order_id,
    ownerId: item.owner_id,
    nftId: item.nft_id,
    price: item.price,
    createAt: item.create_at,
    isSold: item.is_sold,
    metadata: {
      ...item.metadata,
    },
  };
};
