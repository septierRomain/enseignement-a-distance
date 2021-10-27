import React from 'react'
import Dougs from '../../Assets/dougs.svg'

const Banner = () => {
  return ( 
    <div id='Header'>
      <img src={Dougs} alt="Logo Dougs" style={{width: '101', height:'26'}}/>
      <p>Simulateur de TVA sur la formation automatisée</p>
    </div>
  );
}

export default Banner;