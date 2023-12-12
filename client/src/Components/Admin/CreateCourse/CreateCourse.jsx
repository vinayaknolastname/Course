import { Grid, Box, Container, Heading, VStack, Input, Select, option, Button} from '@chakra-ui/react';
import { Title } from 'chart.js';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCourse } from '../../../redux/actions/course';
import Sidebar from '../SIdebar';

const CreateCourse = () => {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch()


  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('vinayak');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');






  const categories = [
    "Web Development","Artificial Intelligence", "DSA", "Machine Learning", "App Development", "Game Development", "Flutter", "Redux", "React",

]





const submitHandler = ( e ) => {
  e.preventDefault();
  const myform = new FormData();
  
myform.append(  'title' ,  title );
myform.append(  'description' ,  description );
myform.append(  'category' ,  category )
myform.append(  'createdBy' ,  createdBy )


    dispatch(createCourse( myform ));
}



  return (
    <Grid
      css={{
        cursor: `url(),default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Container py={'16'}>
        <form   onSubmit={submitHandler}>
          <Heading
            textTransform={'uppercase'}
            children="Create Course"
            my="16"
            textAlign={['center', 'left']}
          />
          <VStack>
            <Input
              required
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
              type={'text'}
              focusBorderColor="purple.300"
            />
            <Input
              required
              id="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Description"
              type={'text'}
              focusBorderColor="purple.300"
            />
           
           <Select  focusBorderColor="purple.300" value={category} onChange={e => setCategory(e.target.value)} >
     {/* <option value={''}> Category </option>   */}

{ categories.map((item, index) => (
  <option value={item}  key={index} > {item} </option> 
)) }
</Select>
  <Button
         
              w="full"
              colorScheme={'purple'}
              type="submit"
            >
              Create
            </Button>

{/* <Input  
accept='image/'  
  required
  type={'file'}
  focusBorderColor='purple.300'


  onChange={''}
/> */}

          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default CreateCourse;
