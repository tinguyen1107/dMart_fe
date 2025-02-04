import { NftDto } from './nft.dto';

export type AccountInfoDto = {
  avatar?: string;
  thumbnail?: string;

  displayName?: string;
  bio?: string;

  email?: string;
  location?: string;

  twitter?: string;
  github?: string;
  telegram?: string;
  linkedin?: string;
  behance?: string;
  website?: string;
};
export type AccountDto = {
  id: string;
  accountInfo: AccountInfoDto;
  favouriteNfts: NftDto[];
  numFollowers: number;
  numFollowing: number;
  numNfts: number;
  nfts: [];
};
