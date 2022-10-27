import { Box } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Box as="main" minH="calc(100vh)" overflowX="clip">
        {children}
      </Box>
    </>
  );
}
