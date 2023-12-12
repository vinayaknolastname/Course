import {
  Grid,
  Box,
  Heading,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  HStack,
  Button,
  Td,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import Sidebar from '../SIdebar';
import CoursesModal from './CoursesModal';

const CoursesADM = () => {
  const coursesArr = [
    {
      _id: 'dddddd',
      title: 'react',

      poster: {
        url: 'https://www.chartjs.org/docs/latest/favicon.ico',
      },
      category: 'web development',
      views: 45,
      numOFVideos: 88,
    },
  ];

  const { isOpen, onClose, onOpen} = useDisclosure();


  const courseDetailsHandler = userId => {
    onOpen();
  };

  const deleteButtonHandler = userId => {
    console.log(userId);
  };






  return (
    <Grid
      css={{
        cursor: `url(),default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '8']} overflowX="auto">
        <Heading
          textAlign={['center', 'left']}
          my={'16'}
          children="All Users"
          size={'lg'}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All available users in the database</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th isNumeric> Views</Th>
                <Th isNumeric> Lectures</Th>

                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
              {coursesArr.map(item => (
                <Row
                  key={item._id}
                  item={item}
                  courseDetailsHandler={courseDetailsHandler}
                  deleteButtonHandler={deleteButtonHandler}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <CoursesModal isOpen={isOpen} onClose={onClose} />
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default CoursesADM;

function Row({ item, courseDetailsHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        {' '}
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      {/* <Td>{item.subscription.status === 'active' ? 'Active' : 'Not Active'}</Td> */}
      <Td isNumeric> {item.views}</Td>
      <Td isNumeric> {item.numOFVideos}</Td>

      <Td isNumeric>
        <HStack justifyContent={'flex-start'}>
          <Button
            variant={'outline'}
            color="purple.500"
            onClick={() => courseDetailsHandler(item._id)}
          >
            View Lecture
          </Button>
          <Button
            variant={'outline'}
            color="purple.600"
            onClick={() => deleteButtonHandler(item._id)}
          >
            <RiDeleteBin7Fill />
           
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
