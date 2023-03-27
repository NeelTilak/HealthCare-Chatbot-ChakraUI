import { Box, Container, Heading, Image, Text, Stack } from '@chakra-ui/react'
import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
// import heathcare from "../assets/heathcare-1.png"
import hospital from "../assets/hospital.jpg"
import one from "../assets/one.jpg"
import two from "../assets/two.jpg"
import three from "../assets/three.jpg"


// const headingOptions = {
//     pos: 'absolute',
//     left: '50%',
//     top: '50%',
//     transform: 'translate(-50%,-50%)',
//     textTransform: 'uppercase',
//     p: '4',
//     size: '4xl',
// };

const Home = () => {
    return (
        <Box>
            <MyCarousel />

            <Container maxW={'container.xl'} minH={'100vh'} p="16" id="about">
                <Heading
                    textTransform={'uppercase'}
                    py="2"
                    w={'fit-content'}
                    borderBottom={'2px solid'}
                    m="auto"
                >
                    About
                </Heading>

                <Stack
                    h="full"
                    p={'4'}
                    alignItems={'center'}
                    direction={['column', 'row']}
                >
                    <Image src={hospital} h={['40', '400']} />

                    <Text
                        letterSpacing={'widest'}
                        lineHeight={'190%'}
                        p={['4', '16']}
                        textAlign={'center'}
                    >
                        Healthcare is an essential aspect of human well-being, and it encompasses a wide range of medical services aimed at promoting, maintaining, or restoring health. However, it is a difficult process to have consultations with a doctor for each and every health problems that arise. Using AI chatbots for disease prediction is a promising application of artificial intelligence. With the ability to process large amounts of data and learn from patterns, AI chatbots can help identify early signs and symptoms of diseases and provide personalized recommendations to individuals before consulting a doctor.
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
}

const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
    >


        <Box w="full" h={'100vh'}>
            <Image src={one} h="full" w={'full'} objectFit={'cover'} />
            {/* <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
                
            </Heading> */}
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={two} h="full" w={'full'} objectFit={'cover'} />
            {/* <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
               
            </Heading> */}
        </Box>

        <Box w="full" h={'100vh'}>
            <Image src={three} h="full" w={'full'} objectFit={'cover'} />
            {/* <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
                I am jeongyeon
            </Heading> */}
        </Box>


    </Carousel>
);


export default Home