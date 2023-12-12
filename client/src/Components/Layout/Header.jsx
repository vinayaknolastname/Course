import { Button, ColorModeContext, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react';
import {ColorModeSwitcher} from '../../ColorModeSwitcher'
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/user';



const Header = ( { isAuthenticated = false , user } ) => {


const{ isOpen, onOpen, onClose} = useDisclosure();



const dispatch = useDispatch( )

// const isAuthenticated  = false;

// const user = {
//     role: 'admin', 
// }


const logoutHandler = () => {

    onClose();
    dispatch( logout())
}

const LinkButton = ({ url='/', title='Home'}) => (
    <Link to={url} onClick={onClose}>
        <Button variant={'ghost'}>{title}</Button>
    </Link>
)



  return (
    <>
<ColorModeSwitcher />
<Button zIndex={'5'} colorScheme={'yellow'} width='12' height={12} rounded='full' position={'fixed'} top={'6'} left={'6'} onClick={onOpen}>
    <RiMenu5Fill />
    
</Button>
<Drawer placement='left' isOpen={isOpen} onClose={onClose}>
    <DrawerOverlay backdropFilter={'blur(0.2px)'}/>
    <DrawerContent>
        <DrawerHeader borderBottomWidth={'1px'}>CourseWala</DrawerHeader>
        <DrawerBody>
            <VStack spacing={"4"} alignItems="flex-start"  >
<LinkButton />
<LinkButton  url="/course" title="Courses"  />
<LinkButton  url="/request" title="Request"  />
<LinkButton  url="/contact" title="Contact us"  />
<LinkButton  url="/about" title="About"  />
<HStack justifyContent={'space-evenly'}
position="absolute"
bottom={'2rem'}
width='80%'
>{isAuthenticated ? (<>


<VStack>
    <HStack>
    <Link to="/profile" >
    <Button  onClick={onClose} variant={'ghost'} colorScheme={'yellow'} >Profile</Button>
</Link>
<Button variant={'ghost'} onClick={logoutHandler} >
<RiLogoutBoxLine />
Logout</Button>
    </HStack>
    {
        user && user.role === "admin" && <Link to="/admin/dashboard">
            <Button  onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                <RiDashboardFill />
                Dashboard
            </Button>
        </Link>
    }
</VStack>



</>) : (<>

<Link to="/login">
    <Button  onClick={onClose} colorScheme={'yellow'} >Login</Button>
</Link>
<p>or</p>
<Link to="/register">
    <Button   onClick={onClose} colorScheme={'yellow'} >Sign Up</Button>
</Link>

</>)}</HStack>

            </VStack>
            
        </DrawerBody>
    </DrawerContent>
</Drawer>
    </>
  )
}

export default Header



