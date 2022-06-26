import React from 'react'
import './Home.css'
import ProfileSide from '../components/profileSide/profileSide'
import PostSide from '../components/PostSide/PostSide'
import RightSide from '../components/RightSide/RightSide'



function Home() {
  return (
    <div className='home'>
        <ProfileSide/>
       <PostSide/>
      
       <RightSide/>


    </div>
  )
}

export default Home