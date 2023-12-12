import {
  Avatar,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  VStack,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export const fileUploadCss = {
  cursor: 'pointer',
  marginLeft: '-5%',
  width: '110%',
  border: 'none',
  height: '100%',
  color: '#ECC948',
  backgroundColor: 'white',
};

const Profile = ({ user }) => {
  const removeFromPlaylistHandler = id => {
    console.log(id);
  };

  // const user = {
  //   name: 'vinu',
  //   email: 'vinu@gmail.com',
  //   createdat: String(new Date().toISOString()),
  //   role: 'user',
  //   subscription: {
  //     status: 'active',
  //   },
  //   playlist: [
  //     {
  //       course: 'sadds',
  //       poster: 'asdddd',
  //     },
  //   ],
  // };

  const changeImageSubmitHandler = (e, image) => {
    e.preventDefault();
  };

  const { isOpen, onClose, onOpen } = useDisclosure;

  return (
    <Container minH={'90vh'} maxW="container.lg" py="8">
      <Heading children={'Profile'} m="8" textTransform={'uppercase'} />
      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems="center"
        spacing={['8', '16']}
        padding="8"
      >
        <VStack>
          <Avatar boxSize={'48'} />
          <Button colorScheme={'yellow'} variant="ghost" onClick={onOpen}>
            Change Photo
          </Button>
        </VStack>

        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children={'Name'} fontWeight="bold" />
            <Text children={user.name} />
          </HStack>
          <HStack>
            <Text children={'Email'} fontWeight="bold" />
            <Text children={user.email} />
          </HStack>
          {/* <HStack>
            <Text children={'Created At'} fontWeight="bold" />
            <Text children={user.createdat.split('T')[0]} />
          </HStack>
          {user.role !== 'admin' && (
            <HStack>
              <Text children="Subscription" fontWeight={'bold'} />
              {user.subscription.status === 'active' ? (
                <Button color={'yellow.500'} variant={'unstyled'}>
                  Cancel Subscription
                </Button>
              ) : (
                <Link to="/subscribe">
                  <Button colorScheme={'yellow'}>Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}

          <Stack direction={['column', 'row']} alignItems="center">
            <Link to="/updateprofile">
              <Button>Update Profile</Button>
            </Link>
            <Link to="/changepassword">
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>

      <Heading children="Playlist" />

      {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems="center"
          flexWrap={'wrap'}
          padding="4"
        >
          {user.playlist.map((element, index) => (
            <VStack w="48" m="2" key={element.course}>
              <Image
                boxSize={'full'}
                objectFit={'contain'}
                src={element.poster}
              />
              <HStack>
                <Link to={`/course/${element.course}`}>
                  <Button variant={'ghost'} colorScheme={'yellow'}>
                    {' '}
                    Watch Now
                  </Button>
                </Link>

                <Button
                  onClick={() => removeFromPlaylistHandler(element.course)}
                >
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}

      <ChangePhotoBox isOpen={isOpen} onClose={onClose} /> */}
      </VStack>
      </Stack>
    </Container>
  );
};

export default Profile;

export function ChangePhotoBox({ isOpen, onClose, changeImageSubmitHandler }) {
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloaded = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backdropFilter={'blur(10px'} />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={e => changeImageSubmitHandler(e, image)}>
              <VStack spacing={'8'}>
                {imagePrev && <Avatar boxSize={'48'} src={imagePrev} />}
                <Input
                  type={'file'}
                  css={{ '&::file-selector-button': fileUploadCss }}
                  onChange={changeImageHandler}
                />
                <Button width={'full'} colorScheme={'yellow'} type="submit">
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
