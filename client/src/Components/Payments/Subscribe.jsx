import { Box, Container, HStack, VStack, Text, Heading, Button} from '@chakra-ui/react'
import React from 'react'

const Subscribe = () => {
  return (
   <Container h='90vh' p={'16'} >
    <VStack boxShadow={"lg"} alignItems='stretch' >
    <Box bg={'yellow.400'} p={'4'}  borderRadius={ '10px 10px 0 0'}>
      <Text children={`Pro Pack - $299`} />
    </Box>
<Box>
  <VStack textAlign={'center'} >
  <Text children={`Join Pro Pack and Get Access to All Content.`} />
  <Heading children={`299 only`} />

  </VStack>
  <Button my={'5'} w="full"  colorScheme={'yellow'} > Buy Now</Button>
</Box>

<Box bg={'blackAlpha.600'} p='4' borderRadius={'0px 0px 10px 10px'}>
  <Heading  color={'white'} children={`100% Refun on Cancellation`}  size='sm' />
  <Text fontSize={'x-small'} children={'T&C Applied'} color={'white'} />
</Box>
    </VStack>

   </Container>

  )
}

export default Subscribe