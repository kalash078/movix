import React from 'react';
import './style.scss';
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './heroBanner/trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
HeroBanner
const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
      
      </div>
   
  )
}

export default Home;