import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import introVideo from '../../assets/videos/Happy.mp4'
import lecture2 from '../../assets/videos/lecture2.mp4'
 
const CoursePage = () => {




const handler = (e) => {

}


const lectureTitle = "lecture Title";


const [ lectureNumber, setLectureNumber ] = useState(0);

const playVideoHandler = (e , index) => {

  
  e.preventDefault();
  console.log(index);
  setLectureNumber(index);
  
  

}


const lectures = [{
  _id:"sss",
  title:"sample",
  description: "sameple",
  video: {
    url: introVideo, 
  }


} ,
{
  _id:"sss",
  title:"sample2",
  description: "sameple",
  video: {
    url: lecture2, 
  }


},
{
  _id:"sss",
  title:"sample",
  description: "sameple3",
  video: {
    url: 'sssadae', 
  }


}]

  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']} >
 <Box>
 
    <video width={'100%'} autoplay controls controlsList="nodownload noremoteplayback" disablePictureInPicture disableRemotePlayback src={`${lectures[lectureNumber].video.url}`}></video>

    <Heading m={'4'} children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}></Heading>
    <Heading m={'4'} children={`Description`}></Heading>
    <Text children={lectures[lectureNumber].description} />
   
 </Box>

 <VStack>
 { lectures.map((element ,index) => (
      <button key={element._id} style={{
        width:"100%",
        padding: "1rem",
        textAlign: "center",
        margin:"0",
        borderBottom: "1px solid black"
      }} onClick={e => playVideoHandler( e, index)}>
    
        <Text noOfLines={'1'} >
          #{index + 1} {element.title}
        </Text>
      </button> ))}
 </VStack>
    </Grid>
  )
}

export default CoursePage;