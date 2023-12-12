
import { Grid, Box, Heading, TableContainer , Table, TableCaption, Thead, Tr, Th, Tbody, HStack, Button, Td} from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import Sidebar from '../SIdebar'





const Users = () => {



  const usersArr = [{

    _id: 'dddddd',
    name: 'ddddddd',
    role: 'admin',
    subscription: {
      status: 'active'
    },
    email: 'ddddd'

  },
  {

_id: 'ddddd22d',
name: 'ddddddd',
role: 'admin',
subscription: {
  status: 'active'
},
email: 'ddddd'

}]



const updateHandler = (userId) => {
  console.log(userId);
}


const deleteButtonHandler = (userId) => {
  console.log(userId);
}






  return (
    <Grid css={{
        cursor: `url(),default`
      }}   minH={'100vh'} templateColumns={["1fr", "5fr 1fr"]} >
  
  <Box p={['0','16']} overflowX='auto'>
  <Heading textAlign={['center','left']}  my={'16'} children='All Users'  size={"lg"}/>

  <TableContainer w={['100vw','full']} >
  <Table variant={'simple'} size='lg' >
  <TableCaption>
    All available users in the database
  </TableCaption>

  <Thead >
    <Tr>
      <Th>Id</Th>
      <Th>Name</Th>
      <Th>Email</Th>
      <Th>Role</Th>
      <Th>Subscription</Th>
<Th isNumeric>Action</Th>
    </Tr>
  </Thead>

  <Tbody>
  {
usersArr.map( item => (
  <Row  key={item._id} item={item}  updateHandler={updateHandler} deleteButtonHandler={deleteButtonHandler}/>

))


  }
  </Tbody>






  </Table>
  </TableContainer>
     
  </Box>
  <Sidebar />
      </Grid>
  )
}

export default Users;



function Row({item , updateHandler, deleteButtonHandler}) {

  return(
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription.status === 'active' ? 'Active' : 'Not Active'}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-start'}>
<Button variant={'outline'} color='purple.500' onClick={() => updateHandler(item._id)}>Change Role</Button>
<Button variant={'outline'} color='purple.600' onClick={() =>  deleteButtonHandler(item._id)} >
  <RiDeleteBin7Fill/>
</Button>

        </HStack>
      </Td>
    
    </Tr>
  )
};