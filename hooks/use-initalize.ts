import { useEffect } from 'react';
// import { PostCache } from '../cache';
import { StorageKeys } from '../constants';
import { useBlockchain, useWalletAccountId } from '../core/hooks';
import { DB } from '../db';
import { AccountRepo, NftRepo } from '../repos';
import { useAccount, useApp } from './atoms';
import { getContainer } from '../core';
import { ModalUtils } from '../utils';
import { QueryClient } from 'react-query';
import { useToast } from '@chakra-ui/react';

export const useInitialize = () => {
  const { blockchainState, blockchainMethods } = useBlockchain();
  const { accountId } = useWalletAccountId();
  const { appState } = useApp();
  const { accountState, accountMethods } = useAccount();
  const toast = useToast();

  // TODO: clean code later (isAboutMePage)
  useEffect(() => {
    (async () => {
      await DB.init();
      const oldContractId = localStorage.getItem(StorageKeys.CONTRACT_ID);
      if (oldContractId !== getContainer().bcConnector.config.contractId) {
        // clear old data
        localStorage.clear();
        await DB.destroy();
        await DB.init();
        localStorage.setItem(
          StorageKeys.CONTRACT_ID,
          getContainer().bcConnector.config.contractId
        );
      }
      await Promise.all([blockchainMethods.connect()]);
    })();
  }, []);

  useEffect(() => {
    if (!blockchainState.ready.value) return;

    const isStaging = window.location.hostname.includes('vercel.app');
    const hostnameItems = window.location.hostname.split('.');
    const isAboutMePage = !isStaging && hostnameItems.length > 2;

    // Cache data before app ready
    (async () => {
      // const cacheData = Promise.all([PostCache.cache()]).then(() => {
      //   console.info('App cached!!!');
      // });

      const checkIsRegisteredAndGetProfile = async () => {
        if (accountId) {
          const [
            isRegistered,
            // isAdmin
          ] = await Promise.all([
            AccountRepo.isRegistered(),
            // AccountRepo.isAdmin(accountId),
          ]);
          console.log('isRegistered', isRegistered);
          // console.log('isAdmin', isAdmin);
          accountState.isRegistered.set(isRegistered);
          // accountState.isAdmin.set(isAdmin);
          await Promise.all([
            accountMethods.fetchProfile(),
            accountMethods.fetchBalance(),
          ]);
        }
      };

      await Promise.all([
        //cacheData,
        checkIsRegisteredAndGetProfile(),
      ]);

      // Set app ready
      appState.merge({
        loading: false,
        ready: true,
      });
    })();
  }, [blockchainState.ready.value, accountId]);

  return {
    appState,
  };
};
