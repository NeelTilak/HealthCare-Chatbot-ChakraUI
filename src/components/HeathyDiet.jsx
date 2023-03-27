import { Box, Container, Heading, Image, Stack, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import food from "../assets/food-one.jpg"
const HeathyDiet = () => {
    return (
        <>
            <Heading>Healthy Diet</Heading>
            <Stack
                h="full"
                p={'4'}
                alignItems={'center'}
                direction={['column', 'row']}
            >

                <Image src={food} h={['40', '400']} />

                <Text
                    letterSpacing={'widest'}
                    lineHeight={'190%'}
                    p={['4', '16']}
                    textAlign={'justify'}
                >
                    <b>Building a Healthy and Balanced Diet</b> <br />
                    <br />
                    <b>Make most of your meal vegetables and fruits – ½ of your plate.</b>
                    <br />
                    Aim for color and variety, and remember that potatoes don’t count as vegetables on the Healthy Eating Plate because of their negative impact on blood sugar.
                    <br />
                    <br/>
                    <b> Go for whole grains – ¼ of your plate.</b>
                    <br />
                    Whole and intact grains—whole wheat, barley, wheat berries, quinoa, oats, brown rice, and foods made with them, such as whole wheat pasta—have a milder effect on blood sugar and insulin than white bread, white rice, and other refined grains.
                    <br />
                    <br/>

                    <b> Protein power – ¼ of your plate.</b>
                    <br/>
                    Fish, poultry, beans, and nuts are all healthy, versatile protein sources—they can be mixed into salads, and pair well with vegetables on a plate. Limit red meat, and avoid processed meats such as bacon and sausage.
                    <br/>
                    <br/>

                    <b>
                    Healthy plant oils – in moderation.</b>
                    <br/>
                    Choose healthy vegetable oils like olive, canola, soy, corn, sunflower, peanut, and others, and avoid partially hydrogenated oils, which contain unhealthy trans fats. Remember that low-fat does not mean “healthy.”
                    <br/>
                    <br/>

                   <b> Drink water, coffee, or tea.</b>
                    <br/>
                    Skip sugary drinks, limit milk and dairy products to one to two servings per day, and limit juice to a small glass per day.
                    <br/>
                    <br/>


                    <b>Stay active.</b>
                    <br/>
                    The red figure running across the Healthy Eating Plate’s placemat is a reminder that staying active is also important in weight control.
                    <br/>
                    <br/>
                </Text>
            </Stack>
        </>
    )
}

export default HeathyDiet