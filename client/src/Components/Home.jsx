import React from 'react';
import { Stack, VStack, Heading, Text, Button, Image, Box, HStack, video} from '@chakra-ui/react';
import './home.css'
import { Link } from 'react-router-dom';
import vg from "../assets/images/vg.webp"
import {CgGoogle, CgYoutube} from "react-icons/cg"
import {SiCoursera, SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di"
import introVideo from '../assets/videos/Happy.mp4'


const Home = () => {
  return (
    <section>
   <div className="container">
    <Stack
    direction={["column", "row"]}
    height="100%"
    justifyContent={["center ,space-between,"]}
    alignItems="center"
    spacing={['16','56']}
    
    >
        <VStack width={'full'} alignItems={['center', 'flex-end']}>
            <Heading children="Learn from the BEST.."/>
            <Text children="Worlds Largest Open Source Courses Library" />
            <Link  to="/courses">
            <Button size={"lg"} colorScheme="yellow">
                Explore Now
            </Button></Link>
        </VStack>
        <Image className='VectorGraphics' boxSize={"md"} src={vg} objectFit={"contain"}/>
    </Stack>
   </div>
   <Box padding={8} bg="blackAlpha.800">
    <Heading children="Our Brands" textAlign={'center'} fontFamily='body' color={'yellow.200'}
    /> <HStack  className='brandsBanner' alignItems={'center'} justifyContent={'space-evenly'} marginTop='4'>
    <CgGoogle />
    <CgYoutube/>
    <SiCoursera/>
    <SiUdemy/>
    <DiAws/>

    </HStack>
   </Box>

   <div className="container2">
    <video autoplay controls controlsList="nodownload nofullscreen noremoteplayback" disablePictureInPicture disableRemotePlayback src={introVideo}></video>
   </div>
   </section>

  )
}

export default Home;