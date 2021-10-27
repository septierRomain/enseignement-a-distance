import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Banner from '../App/Banner';

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'

const Assujetti = () => {
  let history = useHistory()
  return ( 
    <div className="wrap">
      <Banner />
      <div>
        <button onClick={() =>history.goBack()} className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>

        <div className="breadcrumbs">
          <p><img src={Check} alt="fleche grise"/>Le preneur est assujetti à la TVA</p>
        </div>

      <h4>Votre client est il établi en France ?</h4>

        <div className="select_container">
          <Link to='/France'><button className='select'>Oui</button></Link>
          <Link to='/hors_France'><button className='select'>Non</button></Link>
        </div>

      </div>
    </div>
);
}

export default Assujetti;