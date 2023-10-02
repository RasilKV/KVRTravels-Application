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
        <div className="prime">
          <img src="https://s1.rdbuz.com/web/images/homeV2/primoSection/primoTopBanner.svg" alt="" />
        </div>
        <div className="details">
          <section>
            <img src="https://s2.rdbuz.com/web/images/homeV2/primoSection/primoSubImg1.svg" alt="" />
            <p>
              <h3>1 of 5 buses qualify</h3>
              <p>Primo’s strict safety qualification ensures a safer travel for you</p>
            </p>
          </section>
          <section>
            <img src="https://s3.rdbuz.com/web/images/homeV2/primoSection/primoSubImg2.svg" alt="" />
            <p>
              <h3>Preferred by 90%</h3>
              <p className='paragraph'>90% of travellers re-book Primo buses for its punctuality and comfort</p>
            </p>
          </section>
          <section>
            <img src="https://s2.rdbuz.com/web/images/homeV2/primoSection/primoSubImg3.svg" alt="" />
            <p>
              <h3>9 Lac+ monthly travellers</h3>
              <p>In 2022, 9 Lac+ people traveled with Primo every month</p>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default DashBoard