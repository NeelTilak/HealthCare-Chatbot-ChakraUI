import { Box, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

const Contact = () => {
    return (
        <>
        <Box w='10%' >
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type='email' />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
        </Box>
        </>
    )
}

export default Contact