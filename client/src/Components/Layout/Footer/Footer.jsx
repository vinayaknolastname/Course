import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
   <Box padding={'4'} bg='blackAlpha.900' minH={'10vh'}>
    <Stack direction={["column","row"]}>
        <VStack alignItems={['center', 'flex-start']}>
        <Heading children="All Right Reserved" color={'white'}/>
        <Heading children="@Vinayak" color={'white'} size='sm'/>

        <HStack></HStack>

        </VStack>
    </Stack>
   </Box>
  )
}

export default Footer