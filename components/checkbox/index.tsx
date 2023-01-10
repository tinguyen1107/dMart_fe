import { Box, HStack, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';

export const CheckBox: React.FC<{
  title: string;
  isChecked: boolean;
  isToggle?: boolean;
  onChange: (val: boolean) => void;
}> = ({ title, isChecked, isToggle = true, onChange }) => {
  let [checked, setChecked] = React.useState(isChecked);
  useEffect(() => setChecked(isChecked), [isChecked]);

  return (
    <HStack
      cursor="pointer"
      onClick={() => {
        if (!isToggle && checked) return;
        setChecked((old) => !old);
        onChange(!checked);
      }}
      color="var(--textPrimary)"
    >
      <Box
        w="10px"
        h="10px"
        bg={checked ? '#5300FF' : 'transparent'}
        border="2px solid #9300E9"
        borderColor={checked ? '#5300FF' : 'var(--textPrimary)'}
        p="2px"
        boxSizing="content-box"
        borderRadius="full"
        backgroundClip="content-box"
        transition="all 0.2s"
      />
      <Text>{title}</Text>
    </HStack>
  );
};
