import React from 'react';
import HeadLine from '../components/marketplace/headline';
import {
  Box,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Badge,
  Grid,
  GridItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';
import NFTcard from '../components/marketplace/card/NFTcard';
import { NavBar } from '../components';
import CollectionCard from '../components/marketplace/card/CollectionCard';
const marketplace = () => {
  const tabs = [
    {
      id: 1,
      name: 'NFTs',
      content: [
        {
          imgUrl: 'https://i.ibb.co/FD1yD06/1.png',
          title: 'distant galaxy',
          artist: 'Moon Dancer',
          price: '1,63',
          hbid: '0.33',
          ava: 'https://bit.ly/dan-abramov',
        },
        {
          imgUrl: 'https://i.ibb.co/FD1yD06/1.png',
          title: 'distant galaxy',
          artist: 'Moon Dancer 2',
          price: '1,63',
          hbid: '0.33',
          ava: 'https://bit.ly/dan-abramov',
        },
        {
          imgUrl: 'https://i.ibb.co/FD1yD06/1.png',
          title: 'distant galaxy',
          artist: 'Moon Dancer 3',
          price: '1,63',
          hbid: '0.33',
          ava: 'https://bit.ly/dan-abramov',
        },
      ],
    },
    {
      id: 2,
      name: 'Collection',
      content: [ {
        imgUrl: 'https://i.ibb.co/FD1yD06/1.png',
        title: 'distant galaxy',
        artist: 'Moon Dancer 3',
        price: '1,63',
        hbid: '0.33',
        ava: 'https://bit.ly/dan-abramov',
      },],
    },
  ];
  return (
    <Flex h="full" justifyContent="center" direction={'column'}>
      <NavBar/>
    
        <HeadLine />
        <Tabs isFitted variant="unstyled" bg="3B3B3B" >
          <TabList color={'gray'} bg="#2B2B2B" px={16}  as="b">
            {tabs.map(({ name, content }) => (
              <Tab _selected={{ color: 'white', borderBottomWidth: '2px' }}>
                <Text> {name} </Text>
                <Badge mx={4}>{content.length}</Badge>
              </Tab>
            ))}
          </TabList>
          <TabPanels bg="#3B3B3B">
              <TabPanel>
                <Grid
                  templateColumns="repeat(3, 1fr)"
                  gap="30px"
                  mt="60px"
                  px={"10%"}
                >
                  {tabs[0].content.map(
                    (card) => (
                      <GridItem
                        w="auto"
                        h="auto"
                        bg="#2B2B2B"
                        borderRadius="3xl"
                      >
                        <NFTcard
                          imgUrl={card.imgUrl}
                          title={card.title}
                          artist={card.artist}
                          price={card.price}
                          hbid={card.hbid}
                          ava={card.ava}
                        />
                      </GridItem>
                    )
                  )}
                </Grid>
              </TabPanel>
              <TabPanel>
                <Grid
                  templateColumns="repeat(3, 1fr)"
                  gap="30px"
                  mt="60px"
                  px={"10%"}
                >
                  {tabs[1].content.map(
                    (card) => (
                      <GridItem
                        w="auto"
                        h="auto"
                        bg="#2B2B2B"
                        borderRadius="3xl"
                      >
                       <CollectionCard/>
                      </GridItem>
                    )
                  )}
                </Grid>
              </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>

  );
};

export default marketplace;
