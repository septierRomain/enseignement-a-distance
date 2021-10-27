import React from 'react'
import { useHistory } from 'react-router-dom'

import Banner from '../App/Banner'
import Redo from '../App/Redo'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'
import Prestations from '../../Assets/categories/prestation france.png'

const France = () => {
  let history = useHistory()
  return ( 
    <div className='wrap'>
      <Banner />
      <div>

        <button onClick={() =>history.goBack()} className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>

      <div className="breadcrumbs">
        <p><img src={Check} alt="fleche grise"/>Le preneur est assujetti à la TVA</p>
        <p><img src={Check} alt="fleche grise"/>Le preneur est établi en France</p>
        <p><img src={Check} alt="fleche grise"/>Prestations entrant dans les régles générales</p>
      </div>

      <hr />
      <div class='square'>
        <p>En dehors des cas spécifiques mentionnés précédemment, les prestations de services réalisées au profit d'un assujetti à la TVA sont imposables en France si le preneur assujetti est établi en France, y dispose d'un établissement stable, sauf dans le cas où il dispose d'un établissement stable en dehors de France auquel les services sont fournis</p>
      </div>
      <hr />

      <h4>La procédure :</h4>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Appliquez le taux de TVA français</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Déclarez votre TVA en France</ul>

      <hr />
        <div className='categorie' >
          <h4>Si vous êtes client Dougs : </h4>
          <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Sélectionnez la catégorie "Prestations de services à 20%"</ul>
          <img src={Prestations} alt="Categorie UE" />
        </div>

      <div className="button">
        <Redo />
      </div>

      </div>
    </div>
);
}

export default France;