import React from 'react'
import './Home.css'
import ProfileSide from '../../components/profileSide/profileSide'
import PostSide from '../../components/PostSide/PostSide'



function Home() {
  return (
    <div className='home'>
        <ProfileSide/>
       <PostSide/>
      
        <div className="rightSide">Right Side</div>


    </div>
  )
}

export default Home