import { Button } from '@chakra-ui/react';
import React from 'react';
import { useHeader } from '../../hooks';
import { FaRegUser } from 'react-icons/fa';
export const LoginButton: React.FunctionComponent = () => {
  const { headerState, headerMethods } = useHeader();

  return (
    <Button
      padding="12px 18px"
      isLoading={headerState.walletLoading}
      onClick={() => headerMethods.signIn()}
      size="md"
      bg="#A259FF"
      leftIcon={<FaRegUser />}
      borderRadius="2xl"
    >
      Connect wallet
    </Button>
  );
};
