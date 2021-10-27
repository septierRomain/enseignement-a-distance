import React from 'react'
import Dougs from '../../Assets/dougs.svg'

const Banner = () => {
  return ( 
    <div id='Header'>
      <img src={Dougs} alt="Logo Dougs" style={{width: '101', height:'26'}}/>
      <p>Simulateur de TVA sur prestations de services pour l'enseignement à distance</p>
    </div>
  );
}

export default Banner;