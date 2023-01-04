import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Grid,
  GridItem,
  HStack,
  Img,
  AspectRatio,
  VStack,
} from '@chakra-ui/react';
import { Avatar } from '../avatar';

interface CARD {
  label: string;
  top: string;
  left: string;
  mid: string;
  right: string;
}

const CARD_ITEM: Array<CARD> = [
  {
    label: '1',
    top: 'https://i.ibb.co/3NKh8HX/top.png',
    left: 'https://i.ibb.co/3NKh8HX/top.png',
    mid: 'https://i.ibb.co/3NKh8HX/top.png',
    right: 'https://i.ibb.co/3NKh8HX/top.png',
  },
  {
    label: '2',
    top: 'https://i.ibb.co/3NKh8HX/top.png',
    left: 'https://i.ibb.co/3NKh8HX/top.png',
    mid: '../../data/top.png',
    right: '../../data/top.png',
  },
  {
    label: '3',
    top: 'https://i.ibb.co/3NKh8HX/top.png',
    left: 'https://i.ibb.co/3NKh8HX/top.png',
    mid: '../../data/top.png',
    right: '../../data/top.png',
  },
  {
    label: '4',
    top: 'https://i.ibb.co/3NKh8HX/top.png',
    left: 'https://i.ibb.co/3NKh8HX/top.png',
    mid: '../../data/top.png',
    right: '../../data/top.png',
  },
];

export const TrendingCard = ({ top, left, mid, right }: CARD) => {
  // <Grid
  //   templateAreas={`"top top top"
  //                  "left mid right"
  //                 "name name name"`}
  //   h="1fr"
  //   gap={{ base: '5px', lg: '20px' }}
  //   color="blackAlpha.700"
  //   fontWeight="bold"
  //   w="100%"
  // >
  //   <GridItem area={'top'}>
  //     <AspectRatio ratio={1}>
  //       <Img src={top} alt="top"></Img>
  //     </AspectRatio>
  //   </GridItem>
  //   <GridItem area={'left'}>
  //     <Img src={left} alt="left"></Img>
  //   </GridItem>
  //   <GridItem area={'mid'}>
  //     <Img src={mid}></Img>
  //   </GridItem>
  //   <GridItem area={'right'}>
  //     <Img src={right} alt="right"></Img>
  //   </GridItem>
  //   <GridItem area={'name'}>
  //     <Stack px="8px" spacing="0" mb="15px">
  //       <Flex as="b" color="white" fontSize={{ base: '18', md: '22' }}>
  //         DSGN Animals
  //       </Flex>
  //       <Flex as="b" color="white" fontSize={{ base: '14', md: '16' }}>
  //         Mr Fox
  //       </Flex>
  //     </Stack>
  //   </GridItem>
  // </Grid>
  return (
    <VStack p="10px" bg="#2B2B2B" borderRadius="3xl">
      <Box w="100%">
        <AspectRatio ratio={1}>
          <Img src={top} alt="top"></Img>
        </AspectRatio>
      </Box>
      <HStack w="100%">
        <Box flex={1}>
          <AspectRatio ratio={1}>
            <Img src={top} alt="top"></Img>
          </AspectRatio>
        </Box>
        <Box flex={1}>
          <AspectRatio ratio={1}>
            <Img src={left} alt="top"></Img>
          </AspectRatio>
        </Box>
        <Box flex={1}>
          <AspectRatio ratio={1}>
            <Img src={left} alt="top"></Img>
          </AspectRatio>
        </Box>
      </HStack>
      <Box w="100%" color="#fff" px="10px" pb="10px">
        <Text fontWeight="800" fontSize="20px">
          DSGN Animals
        </Text>
        <HStack>
          <Box w="24px" h="24px">
            <Avatar accountId={'Mr fox'} url={undefined} />
          </Box>
          <Text fontWeight="600" fontSize="16px">
            Mr Fox
          </Text>
        </HStack>
      </Box>
    </VStack>
  );
};

export const TrendingCardCollection = (props: any) => {
  return (
    <HStack
      flexDirection="row"
      spacing="8px"
      overflowY="scroll"
      css={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {CARD_ITEM.map((child, id) => (
        <Box key={id} minW="300px">
          <TrendingCard {...child} />
        </Box>
      ))}
    </HStack>
  );
};
