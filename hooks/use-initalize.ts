import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { useBlockchain, useWalletAccountId } from '../core/hooks';
import { useAccount, useApp } from './atoms';
import { StorageKeys } from '../constants';
import { DB } from '../db';
import { getContainer } from '../core';
import { AccountRepo } from '../repos';

export const useInitialize = () => {
  const { blockchainState, blockchainMethods } = useBlockchain();
  const { accountId } = useWalletAccountId();
  const { appState } = useApp();
  const { accountState, accountMethods } = useAccount();
  const toast = useToast();

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
      await blockchainMethods.connect();
    })();
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/firebase-messaging-sw.js').then(
          function (registration) {
            console.log(
              'Service Worker registration successful with scope: ',
              registration.scope
            );
          },
          function (err) {
            console.log('Service Worker registration failed: ', err);
          }
        );
      });
    }
  }, []);

  useEffect(() => {
    if (!blockchainState.ready.value) return;

    // Cache data before app ready
    (async () => {
      // TODO: Add cache function here
      const cacheData = Promise.all([]).then(() => {
        console.info('App cached!!!');
      });

      const checkIsRegisteredAndGetProfile = async () => {
        if (accountId) {
          const [isRegistered, isAdmin] = await Promise.all([
            AccountRepo.isRegistered(),
            AccountRepo.isAdmin(accountId),
          ]);
          console.log('isRegistered', isRegistered);
          console.log('isAdmin', isAdmin);
          accountState.isRegistered.set(isRegistered);
          accountState.isAdmin.set(isAdmin);
          await accountMethods.fetchProfile();
        }
      };

      await Promise.all([cacheData, checkIsRegisteredAndGetProfile()]);

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
