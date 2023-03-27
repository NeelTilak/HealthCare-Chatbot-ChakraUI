import { Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Text, Image, Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
// import Bmr from './Bmr'
import yoga from '../assets/yoga.jpg'



const Tools = () => {
  return (
    <Box w={'full'}>
      <Heading m={'10'}>Tools For Healthy Lifestyle</Heading>

      <SimpleGrid bg={'purple'} columns={[1, 2, 3]} spacing={5} templateColumns='repeat(auto-fill,minmax(400px, 1fr))' alignItems="center">

        <Card m='5' p='5'>
          <CardHeader>
            <Heading size='md'>
              BMI CalCulation
            </Heading>
          </CardHeader>
          <CardBody>
            <Image
              src='https://media.istockphoto.com/id/528072248/photo/bmi-body-mass-index-written-on-a-notepad-sheet.jpg?s=612x612&w=is&k=20&c=3sbw3WNhUJ7bTMVlAouz8Zrcoi4iOZT2OWpujq7ciRo='
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Text>Body mass index, or BMI, is a measure of body size. It combines a person’s weight with their height. The results of a BMI measurement can give an idea about whether a person has the correct weight for their height</Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme='purple'>
              <Link to={'/tools/bmi'}>Click for Bmi</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card m='5' p='5'>
          <CardHeader>
            <Heading size='md'>
              BMR CalCulation
            </Heading>
          </CardHeader>
          <CardBody>
          <Image
              src='https://nabtahealth.com/wp-content/uploads/2020/01/what-is-basal-metabolic-rate-bmr-8-2-2-3.png'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
 
            <Text>We provide you all details of your nearby hospitals. Check anytime about the hospitals, services, current conditions and stats, bed availability etc. Just put your location or prefered hospitals to check.</Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme='purple'>
              <Link to={'/tools/bmr'}>Click for Bmr</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card m='5' p='5'>
          <CardHeader>
            <Heading size='md'>
              Yoga
            </Heading>
          </CardHeader>
          <CardBody>
            <Image w={'full'} src={yoga}/>
            <Text>We provide you all details of your nearby hospitals. Check anytime about the hospitals, services, current conditions and stats, bed availability etc. Just put your location or prefered hospitals to check.</Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme='purple'>Click Me</Button>
          </CardFooter>
        </Card>

        <Card m='5' p='5'>
          <CardHeader>
            <Heading size='md'>
              Medition 
            </Heading>
          </CardHeader>
          <CardBody>
            <Image src={'data:image/png;base64,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'}/>
            <Text>We provide you all details of your nearby hospitals. Check anytime about the hospitals, services, current conditions and stats, bed availability etc. Just put your location or prefered hospitals to check.</Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme='purple'>Click Me</Button>
          </CardFooter>
        </Card>

        <Card m='5' p='5'>
          <CardHeader>
            <Heading size='md'>
              Yoga
            </Heading>
          </CardHeader>
          <CardBody>
            <Text>We provide you all details of your nearby hospitals. Check anytime about the hospitals, services, current conditions and stats, bed availability etc. Just put your location or prefered hospitals to check.</Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme='purple'>Click Me</Button>
          </CardFooter>
        </Card>

        <Card m='5' p='5'>
          <CardHeader>
            <Heading size='md'>
              BMR CalCulation
            </Heading>
          </CardHeader>
          <CardBody>
            <Text>We provide you all details of your nearby hospitals. Check anytime about the hospitals, services, current conditions and stats, bed availability etc. Just put your location or prefered hospitals to check.</Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme='purple'>Click Me</Button>
          </CardFooter>
        </Card>



      </SimpleGrid>
      {/* <Bmr/> */}

      </Box>
  )
}

export default Tools