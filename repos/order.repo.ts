import { MintNftInput, NftApi as NftApi, SellNftInput } from '../apis';
import { OrderApi } from '../apis/order.api';
import { GetListInput, Optional } from '../core/types';
import { DB } from '../db';
import { NftDto, NFTMetadata, OrderDto } from '../dtos';

export class OrderRepo {
  static async fetchListOrders(): Promise<OrderDto[]> {
    return OrderApi.fetchListOrders();
  }
}
