import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/profileCard'
import FollowersCard from '../FollowersCard/FollowersCard'
import './profileSide.css'

const profileSide = () => {
  return (
  <div className="profileSide">
      <LogoSearch/>
      <ProfileCard/>
      <FollowersCard/>
  </div>
  )
}

export default profileSide