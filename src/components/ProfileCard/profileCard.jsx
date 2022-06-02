import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './profileCard.css'

const profileCard = () => {
  return (
    <div className='profileCard'>
        <div className="profileImages">
            <img src={Cover} alt="" />
            <img src={Profile} alt="" />
        </div>

        <div className="profileName">
            <span>Carolina Nonato</span>
            <span>Senior Frontend Developer</span>
        </div>

        <div className="followStatus">
            <hr />
            <div>
                <div className="follow">
                    <span>571</span>
                    <span>Followers</span>

                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>1</span>
                    <span>Following</span>

                </div>
            </div>
            <hr />
        </div>
        <span>My Profile</span>

    </div>
  )
}

export default profileCard