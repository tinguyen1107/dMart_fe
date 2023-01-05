import BN from 'bn.js';

export * from './storage-keys';
export * from './cache-prefix-keys';
// export * from './contract';

export const MAX_WIDTH_CONTENT = '1200px';
export const MIN_ENOUGH_STORAGE_BALANCE = new BN('100000000000000000000000'); // 0.1 NEAR
export const IPFS_UPLOAD_SERVER_URL = 'https://ipfs-server.vercel.app';
export const IPFS_HOST = 'rep-run.infura-ipfs.io';
export const IPFS_BASE_URL = 'https://rep-run.infura-ipfs.io/ipfs/';
