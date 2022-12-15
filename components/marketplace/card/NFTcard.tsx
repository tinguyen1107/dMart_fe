import React from 'react';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Flex,
  Spacer,
} from '@chakra-ui/react';
const NFTcard = (props: any) => {
  return (
    <Card maxW="sm">
      <CardBody p={0}>
        <Image src={props.imgUrl} alt="Dan Abramov"/>
        <Stack mx={4} my="4" spacing="2" color={'white'}>
          <Heading size="md">{props.title}</Heading>
          <Flex>
            <Avatar name="Dan Abrahmov" src={props.ava} size="xs" />
            <Text px={2} size={'xl'}>
              {props.artist}
            </Text>
          </Flex>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Flex w="full">
          <Stack>
            <Text color={'gray'}>Price</Text>
            <Text color={'white'}>{props.price} ETH</Text>
          </Stack>
          <Spacer />
          <Stack>
            <Text color={'gray'}>Highest Bid</Text>
            <Text color={'white'}>{props.hbid} ETH</Text>
          </Stack>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default NFTcard;
