import { Box, Circle, HStack, VStack } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { NavBar } from '../components';
import { MAX_WIDTH_CONTENT } from '../constants';

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Box as="main" minH="calc(100vh)" overflowX="clip" pos="relative">
        <NavBar />
        <Box
          bg="#2B2B2B"
          h="calc(100vh)"
          pos="fixed"
          w="100%"
          zIndex={-1}
        ></Box>
        <HStack
          position="fixed"
          zIndex={-1}
          top="20%"
          w="100%"
          h="100%"
          margin="0 auto"
          justify="center"
          alignItems="top"
        >
          <Circle
            size="510px"
            bg="#ff7a00"
            opacity={{ base: '0.3', sm: '0.5' }}
            filter={{ base: 'blur(40px)', sm: 'blur(100px)' }}
          />
          <Circle
            size="510px"
            bg="#9747FF"
            opacity={{ base: '0.3', sm: '0.5' }}
            filter={{ base: 'blur(40px)', sm: 'blur(100px)' }}
          />
        </HStack>
        <VStack bg="transparent">
          <Box maxW={MAX_WIDTH_CONTENT} w="100%">
            {children}
          </Box>
        </VStack>
      </Box>
    </>
  );
}
