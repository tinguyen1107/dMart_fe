import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Container,
    Grid,
    GridItem,
    Heading,
    HStack,
    Img
  } from '@chakra-ui/react';


const HightLightCard = (props: any) =>{
    return (
        <Box>
            <Img src="https://i.ibb.co/FD1yD06/1.png" alt='Dan Abramov' />
        </Box>
    )
}

export const Banner = (props: any) => {
    return (
        <Box p="50px" bg="#2B2B2B">
            <Grid 
            templateAreas={`"title null image"
                            "subtitle null image"
                            "stats null image"`}
            gridTemplateRows={{sm:'50px 1fr 30px', md:'70px 1fr 30px', lg: '120px 1fr 30px', xl: '150px 1fr 30px' }}
            gridTemplateColumns={{sm:'200px 1fr 200px', md:'350px 1fr 350px', lg: '400px 1fr 400px', xl: '600px 1fr 600px' }}
            h='1fr'
            gap={{sm: '5',md: '10', lg: '30', xl: '30'}}
            color='blackAlpha.700'
            fontWeight='bold'>
                <GridItem pl='2' area={'image'} color='white'>
                    <HightLightCard/>
                </GridItem>
                <GridItem pl='2' bg='#2B2B2B' area={'title'}>
                    <Flex color='white' fontSize={{sm: '20',md: '30', lg: '40', xl: '50'}} as='b' >Discover digital art & Collect NFTs</Flex>
                </GridItem>
                <GridItem pl='2' bg='#2B2B2B' area={'subtitle'} color='white'>
                    <Flex color='white' fontSize={{sm: '10',md: '20', lg: '20', xl: '25'}}>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</Flex>
                </GridItem>
                <GridItem pl='2' bg='#2B2B2B' area={'stats'} color='white'>
                    <Stack spacing='40px' direction='row'>
                        <Flex color='white' fontSize={{sm: '10',md: '20', lg: '25', xl: '25'}}>
                            <Stack spacing='1px' direction='column'>
                                <Text>240k+ </Text>
                                <Text>Total Sales</Text>
                            </Stack>   
                        </Flex>
                        <Flex color='white' fontSize={{sm: '10',md: '20', lg: '25', xl: '25'}}>
                            <Stack spacing='1px' direction='column'>
                                <Text>100k+ </Text>
                                <Text>Auctions</Text>
                            </Stack> 
                        </Flex>
                        <Flex color='white' fontSize={{sm: '10',md: '20', lg: '25', xl: '25'}}>
                            <Stack spacing='1px' direction='column'>
                                <Text>240k+ </Text>
                                <Text>Artists</Text>
                            </Stack> 
                        </Flex>
                    </Stack>
                </GridItem>
            </Grid>
        </Box>
    )
}

