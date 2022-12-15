import React from 'react'
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
  } from '@chakra-ui/react';

interface CARD{
    label: string,
    top: string;
    left: string;
    mid: string;
    right: string;
}

const CARD_ITEM: Array<CARD> = [
    {
        label: '1',
        top: "https://i.ibb.co/3NKh8HX/top.png",
        left: "https://i.ibb.co/3NKh8HX/top.png",
        mid: "https://i.ibb.co/3NKh8HX/top.png",
        right: "https://i.ibb.co/3NKh8HX/top.png"
    },
    {
        label: '2',
        top: "https://i.ibb.co/3NKh8HX/top.png",
        left: "https://i.ibb.co/3NKh8HX/top.png",
        mid: '../../data/top.png',
        right: '../../data/top.png'
    },
    {
        label: '3',
        top: "https://i.ibb.co/3NKh8HX/top.png",
        left: "https://i.ibb.co/3NKh8HX/top.png",
        mid: '../../data/top.png',
        right: '../../data/top.png'
    },
    {
        label: '4',
        top: "https://i.ibb.co/3NKh8HX/top.png",
        left: "https://i.ibb.co/3NKh8HX/top.png",
        mid: '../../data/top.png',
        right: '../../data/top.png'
    }
]


const TrendingCard = ({top, left, mid, right}: CARD) => {
    return (
        <Box p="20px" bg="#2B2B2B">
            <Grid 
                templateAreas={`"top top top"
                                "left mid right"
                                "name name name"`}
                gridTemplateRows={{sm:'1fr 20px 40px', md:'1fr 50px 60px', lg: '1fr 70px 80px', xl: '1fr 70px 80px' }}
                gridTemplateColumns={{sm:'50px 50px 50px', md:'75px 75px 75px', lg: '100px 100px 100px', xl: '100px 100px 100px' }}
                h='1fr'
                gap={{sm: '5',md: '5', lg: '30', xl: '30'}}
                color='blackAlpha.700'
                fontWeight='bold'>
                    <GridItem pl='2' bg='#2B2B2B' area={'top'}> <Img src={top}></Img></GridItem>
                    <GridItem pl='2' bg='#2B2B2B' area={'left'}> <Img src={left}></Img></GridItem>
                    <GridItem pl='2' bg='#2B2B2B' area={'mid'}> <Img src={mid}></Img></GridItem>
                    <GridItem pl='2' bg='#2B2B2B' area={'right'}> <Img src={right}></Img></GridItem>
                    <GridItem pl='2' bg='#2B2B2B' area={'name'}>
                        <Stack>
                            <Flex as='b' color='white' fontSize={{sm: '10',md: '20', lg: '25', xl: '25'}}>DSGN Animals</Flex>
                            <Flex as='b' color='white' fontSize={{sm: '5',md: '10', lg: '15', xl: '15'}}> Mr Fox</Flex>
                        </Stack>
                    </GridItem>
            </Grid>

        </Box>
    )
}

export const TrendingCardCollection = (props: any) => {
    return (
        <HStack 
            flexDirection='row' 
            spacing={0} 
            overflowY='scroll' 
            css={{
                '&::-webkit-scrollbar': {
                display:'none'
                }
            }}>      
                {CARD_ITEM.map((child) => (
                    <TrendingCard key={child.label} {...child} />
                ))}
        </HStack>
    )
}

