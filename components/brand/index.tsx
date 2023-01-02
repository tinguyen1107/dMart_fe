import { Box, HStack, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import DMartIcon from '../../assets/logos/DMartIcon.svg';

interface BrandProps {
  isHideText?: boolean;
}

export const Brand: React.FunctionComponent<BrandProps> = ({ isHideText }) => {
  return (
    <Link href="/">
      <HStack align="center" spacing="10px" cursor="pointer">
        <Box h="100%" w="60px">
          <Image src={DMartIcon.src} />
        </Box>
        {!isHideText && (
          <Box display={{ base: 'none', sm: 'block' }}>
            <Text color="textPrimary" fontSize="36px" fontWeight="700">
              DMart
            </Text>
          </Box>
        )}
      </HStack>
    </Link>
  );
};
