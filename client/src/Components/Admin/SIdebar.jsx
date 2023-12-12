import { Button, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUser3Fill } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {

const location = useLocation();

  return (
    <VStack spacing={'8'} p='16' boxShadow={'-2px 0 10px rgba(107, 70, 193 , 0.5)'}>

    <LinkButton url={ 'dashboard' } title='Dashboard' Icon={RiDashboardFill} active={location.pathname ==='/admin/dashboard'} />
    <LinkButton url={ 'coursesadm' } title='Courses' Icon={RiEyeFill} active={location.pathname ==='/admin/coursesadm'} />
    
    <LinkButton url={ 'createcourse' } title='Create Course' Icon={RiAddCircleFill} active={location.pathname ==='/admin/createcourse'}/>
    <LinkButton url={ 'users' } title='Users' Icon={RiUser3Fill} active={location.pathname ==='/admin/users'}/>

    




    </VStack>
  )
}

export default Sidebar


function LinkButton({ url, title , Icon, active }) {
  
  return    (
  <Link to={`/admin/${url}`}>
  <Button fontSize={'larger'} variant='ghost'  colorScheme={active ? "purple" : ''} >{title}
  <Icon style={{ margin: "4px" }} />
</Button>
  </Link>
)}