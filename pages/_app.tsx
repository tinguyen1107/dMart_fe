import 'rsuite/dist/rsuite.min.css';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Box, Center, ChakraProvider, Spinner, Image } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import NextNProgress from 'nextjs-progressbar';
import { useInitialize } from '../hooks';
import '../styles/global.css';
import { theme } from '../theme';

// PouchDB
import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';
import {
  AddStorageBalanceModal,
  MintNftModal,
  SellNftModal,
  StorageDepositModal,
  StorageWithdrawModal,
} from '../components';
PouchDB.plugin(PouchDBFind);

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  const { appState } = useInitialize();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <NextNProgress
          showOnShallow={true}
          options={{
            showSpinner: false,
          }}
        />
        {appState.loading.value && (
          <Center
            zIndex="1000"
            position="fixed"
            left="0"
            top="0"
            w="100%"
            h="100%"
          >
            <Box position="relative">
              <Center
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%,-50%)"
              >
                <Spinner w="60px" h="60px" color="violetPrimary" />
              </Center>
              {/* TODO: Add our app icon
              <Image src={} />
              */}
            </Box>
          </Center>
        )}
        {appState.ready.value && getLayout(<Component {...pageProps} />)}
        {appState.ready.value && (
          <>
            <AddStorageBalanceModal />
            <StorageDepositModal />
            <StorageWithdrawModal />
            <MintNftModal />
            <SellNftModal />
          </>
        )}
      </ChakraProvider>
    </QueryClientProvider>
  );
}
