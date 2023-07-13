import React from 'react'
import Navbar from '../components/Navbar'
import UserCard from '../components/UserCard'
import { ActivePageType } from '../../utils/ActivePageType'

const Dashboard = () => {
  return (
    <>
    <Navbar active_page={ActivePageType.Dashboard} />
    <UserCard/>
    </>
  )
}

export default Dashboard