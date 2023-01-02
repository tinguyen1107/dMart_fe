import { Button } from '@chakra-ui/react';
import React from 'react';
import { useHeader } from '../../hooks';

export const LoginButton: React.FunctionComponent = () => {
  const { headerState, headerMethods } = useHeader();

  return (
    <Button
      padding="12px 18px"
      isLoading={headerState.walletLoading}
      onClick={() => headerMethods.signIn()}
      size="sm"
      bg="#A259FF"
    >
      Connect wallet
    </Button>
  );
};
