import { NearConnector } from './blockchain/near/near.connector';

const shareConfig = {
  networkId: process.env.NEXT_PUBLIC_NEAR_NETWORK_ID!,
  nodeUrl: process.env.NEXT_PUBLIC_NEAR_NODE_URL!,
  walletUrl: process.env.NEXT_PUBLIC_NEAR_WALLET_URL!,
  helperUrl: process.env.NEXT_PUBLIC_NEAR_HELPER_URL!,
};
export const Container = {
  bcConnector: new NearConnector({
    ...shareConfig,
    contractId: process.env.NEXT_PUBLIC_NEAR_CONTRACT_NAME!,
  }),
};
