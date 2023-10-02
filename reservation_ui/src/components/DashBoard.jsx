import React from 'react'
import "../styles/dashboard.css"

const DashBoard = () => {
  return (
    <div className='dash-board'>
      <div>
        <h2 className="special_offer">Special Offers</h2>
        <div className="flex-container">
          <img  src="https://static.abhibus.com/busgallery/offerbanners/Apr2023/06/1680775702-AU-MOB.webp" alt="" />
          <img src="https://static.abhibus.com/busgallery/offerbanners/Aug2023/23/1692801174-multibrand-mob.png" alt="" />
          <img src="https://static.abhibus.com/busgallery/offerbanners/Dec2022/30/1672394050-tsrtc-mob-720X360.webp" alt="" />
          <img src="https://static.abhibus.com/busgallery/offerbanners/Oct2023/01/1696105118-iphone15-mob.webp" alt="" />
        </div>
      </div>
    </div>
  )
}

export default DashBoard