import React from 'react';
import { Avatar, Box, HStack, Text, VStack } from '@chakra-ui/react';
import { parseToUsername } from '../../core/utils';

interface HeaderAccountTitleProps {
  avatarSrc?: string;
  title: string;
  displayName?: string;
}

export const HeaderAccountTitle: React.FunctionComponent<
  HeaderAccountTitleProps
> = ({ avatarSrc, title, displayName, ...props }) => {
  return (
    <HStack spacing="0.75em" w="100%" {...props}>
      <VStack spacing="0" w="100px" alignItems="end">
        <Text
          fontSize="12px"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          overflow="hidden"
          fontWeight="700"
          w="100%"
          textAlign="end"
          color="textPrimary"
        >
          {!!displayName ? displayName : parseToUsername(title)}
        </Text>
        <Text
          fontSize="12px"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          overflow="hidden"
          fontWeight="700"
          color="#A6A6AA"
          w="100%"
          textAlign="end"
        >
          {`@${parseToUsername(title)}`}
        </Text>
      </VStack>
      <Box borderRadius="full">
        <Avatar src={avatarSrc} name={title} w="48px" h="48px" />
      </Box>
    </HStack>
  );
};
