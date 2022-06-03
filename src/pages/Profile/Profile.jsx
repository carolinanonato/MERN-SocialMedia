import React from 'react'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import ProfileCard from '../../components/ProfileCard/profileCard'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'
import './Profile.css'

const Profile = () => {
  return (
   <div className="profile">
       <ProfileLeft/>
       <div className="profileCenter">
         <ProfileCard/>
         <PostSide/>
       </div>
      <RightSide/>
   </div>
  )
}

export default Profile