import React from 'react'
import { Button, Drawer, useDisclosure, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack, HStack, Menu, MenuList, MenuButton, MenuItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { HashLink } from "react-router-hash-link";


const Header = () => {


    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button zIndex={'overlay'}
                pos={'fixed'}
                top={'4'}
                left={'4'}
                colorScheme="purple"
                p={'0'}
                w={'10'}
                h={'10'}
                borderRadius={'full'}
                onClick={onOpen} >
            </Button>


            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        Menu
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack alignment={"flex-start"}>
                            <Button onClick={onclose} colorScheme={'purple'} variant={'ghost'}>
                                <Link to={'/'}>Home</Link>
                            </Button>

                            <Button onClick={onclose} colorScheme={'purple'} variant={'ghost'}>
                                <Link to={'/tools'}>Tools</Link>
                            </Button>

                            <Button onClick={onclose} colorScheme={'purple'} variant={'ghost'}>
                            <HashLink to={"/#about"}>About</HashLink>
                            </Button>

                            <Button onClick={onclose} colorScheme={'purple'} variant={'ghost'}>
                                <Link to={'/contact'}>Contact</Link>
                            </Button>

                            <Menu>
                                <MenuButton as={Button} variant={'ghost'} colorScheme='purple'>Healthy Lifestyle</MenuButton>
                                <MenuList>
                                    <MenuItem onClick={onclose} as='a' href='/tools/hl/womenhealth'>Womens Health</MenuItem>
                                    <MenuItem onClick={onclose} as='a' href='/tools/hl/healthydiet'>Healthy Diet</MenuItem>
                                </MenuList>
                            </Menu>

                            <Menu>
                                <MenuButton as={Button} variant={'ghost'} colorScheme='purple'>Standards and Protocols</MenuButton>
                                <MenuList>
                                    <MenuItem onClick={onclose} as='a' href='#'>Standard Treatment Guidelines (STGs)</MenuItem>
                                    <MenuItem onClick={onclose} as='a' href='/'>Link 2</MenuItem>
                                </MenuList>
                            </Menu>

                            {/* Standards and Protocols */}
                        </VStack>


                        <HStack position={'absolute'} bottom={'10'} w={'full'} justifyContent={'space-evenly'}>
                            <Button size={'sm'} onClick={onClose} colorScheme={'purple'} variant={'outline'}>
                            <Link to={'/login'}>Log In</Link>
                            </Button>

                            <Button onClick={onClose} colorScheme={'purple'}>
                                Sign Up
                            </Button>
                        </HStack>
                    </DrawerBody>



                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header