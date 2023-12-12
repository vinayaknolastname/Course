import { Container, Heading, VStack, Text, HStack, Stack, Button } from '@chakra-ui/react'
import React from 'react'
import { RiCheckboxCircleFill, RiCheckFill, RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <Container h={'90vh'} p='16' >
    <VStack h={'full'} alignItems='center' justifyContent={'center'}  >
   
    <Text  children={`Page Not Found`} fontSize='x-large' /> 
    <Heading size={'4xl'} >
    <RiErrorWarningFill /> </Heading>
    <Link to='/'>Go to Home</Link></VStack>
  

  </Container>
  )
}

export default NotFound