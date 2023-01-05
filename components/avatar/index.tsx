import {
  Image,
  Avatar as ChakraAvatar,
  AspectRatio,
  Box,
} from '@chakra-ui/react';
import React from 'react';

export const Avatar: React.FunctionComponent<{
  accountId: string;
  url: string | undefined;
}> = ({ accountId, url }) => {
  return (
    <AspectRatio ratio={1}>
      {!!url ? (
        <Image
          src={url}
          alt=""
          objectFit="cover"
          w="100%"
          h="100%"
          borderRadius="full"
        />
      ) : (
        <ChakraAvatar name={accountId} w="100%" h="100%" borderRadius="full" />
      )}
    </AspectRatio>
  );
};
