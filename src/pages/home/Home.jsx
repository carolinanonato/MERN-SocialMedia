import React from 'react'
import './Home.css'
import ProfileSide from '../../components/profileSide/profileSide'



function Home() {
  return (
    <div className='home'>
        <ProfileSide/>
       
        <div className="postSide">Posts</div>
        <div className="rightSide">Right Side</div>


    </div>
  )
}

export default Home