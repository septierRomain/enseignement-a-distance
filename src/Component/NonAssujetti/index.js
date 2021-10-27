import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Banner from '../App/Banner';

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'

const NonAssujetti = () => {
  let history = useHistory()
  return ( 
    <div className="wrap">
      <Banner />
      <div>
      <Link to='/'>
        <button onClick={() =>history.goBack()} className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>
      </Link>

        <div className="breadcrumbs">
          <p><img src={Check} alt="fleche grise"/>Le preneur n'est pas assujetti à la TVA</p>
        </div>

        <h4>Le preneur est il établi ?</h4>

        <div className="select_container">
        <Link to='prestation_electronique_france' ><button className='select'>En France ? </button></Link>
        <Link to='UE'><button className='select'>Dans un autre pays de l'Union-Européenne ?</button></Link>
        <Link to='exoneration_tva' ><button className='select'>Dans un pays en dehors de l'Union-Européenne ?</button></Link>
        </div>

      </div>
    </div>
);
}

export default NonAssujetti;