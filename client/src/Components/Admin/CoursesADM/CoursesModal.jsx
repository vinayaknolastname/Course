import { ModalOverlay, Modal, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Grid, Heading, Box} from '@chakra-ui/react'
import React from 'react'

const CoursesModal = ({isOpen , onClose}) => {

const coursesTitle = 'hello';

  return (
    <Modal isOpen={isOpen} isClose={onClose} >
        <ModalOverlay>
        <ModalContent>
            <ModalHeader>{coursesTitle}</ModalHeader>
            <ModalCloseButton onClick={onClose} /> 
            <ModalBody p='16'>
            <Grid templateColumns={['1fr', '3fr 1fr']}>
                <Box px={['0','16']}>
<Box my='5'>
<Heading  children={coursesTitle}/>

</Box>
                </Box>
            </Grid>

            </ModalBody>
           
        </ModalContent>

        </ModalOverlay>
    </Modal>
  )
}

export default CoursesModal