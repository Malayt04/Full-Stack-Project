import React from 'react'
import './home.css'
import Product from '../Product/Product'


function Home() {
  return (
    <div className='home'>
      <div className='home-container'>
        <a href='https://www.primevideo.com/' target='blank'><img className='home-image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='Amazon Prime'/></a>
      </div>
      <div className='home-row'>
        <Product/>
        {/*Product*/ }
      </div>
      <div className='home-row'>
        {/*Product*/ }
        {/*Product*/ }
      </div>
      <div className='home-row'>
        {/*Product*/ }
        {/*Product*/ }
      </div>
      <div className='home-row'>
        {/*Product*/ }
        {/*Product*/ }
      </div>
    </div>
  )
}

export default Home
