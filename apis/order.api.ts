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

    console.log(
      'res',
      res.map((item: any) => mapToOrder(item))
    );

    return res.map((item: any) => mapToOrder(item));
  },
});

const mapToOrder = (item: any): OrderDto => {
  return {
    orderId: item.order_id,
    order: {
      ownerId: item.order.owner_id,
      nftId: item.order.nft_id,
      price: item.order.price,
      createAt: item.order.create_at,
      isSold: item.order.is_sold,
    },
    nft: {
      ...item.nft,
    },
  };
};
