import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'

const InfoCard = () => {
  return (
    <div className="infoCard">
        <div className="infoHead">
            <h4>Your Info</h4>
            <div>  <UilPen wigth='2rem' height='1.2rem'/></div>
      
        </div>
        <div className="info">
          <span>
            <b>Status </b>
            </span>
            <span>In Relationship</span>
            </div>
            <div className="info">
          <span>
            <b>Lives in </b>
            </span>
            <span>Toronto</span>
            </div>
            <div className="info">
          <span>
            <b>Works at </b>
            </span>
            <span>Google</span>
            </div>

            <button className="button logo-button">Logout</button>
    </div>
  )
}

export default InfoCard