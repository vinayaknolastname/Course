import { Container, Heading, VStack, Text, HStack, Stack, Button } from '@chakra-ui/react'
import React from 'react'
import { RiCheckboxCircleFill, RiCheckFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    <Container h={'90vh'} p='16' >
      <VStack boxShadow={'lg'} p={'0'} spacing={'8'} borderRadius={' 0px 0px 10px 10px '} h={'50vh'} alignItems='center' justifyContent={'center'}>
      <HStack bg={'yellow.400'} py={'1'} px={'2'} w={'full'} borderRadius={'10px 10px 0 0'}>
      <Heading  fontSize={'1.2rem'} p={'4'} children={`Payment Successfull`}/> </HStack>
      <Text  children={`Enjoy Your Pro Pack`} fontSize='lg' />
      <Heading size={'4xl'}>
      <RiCheckboxCircleFill  />
</Heading>
<Link to='/profile'>
<Button variant={'ghost'} colorScheme={'black'} >Go To Profile</Button>
</Link></VStack>
    </Container>
  )
}

export default PaymentSuccess