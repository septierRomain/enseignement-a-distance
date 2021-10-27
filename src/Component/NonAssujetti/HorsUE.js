import React from 'react'
import { useHistory } from 'react-router-dom'

import Banner from '../App/Banner'
import Redo from '../App/Redo'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'
import PrestationExo from '../../Assets/categories/prestation exo.png'

const ForeignUnsubmit = () => {
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
        <p><img src={Check} alt="fleche grise"/>Le preneur n'est pas assujetti à la TVA</p>
        <p><img src={Check} alt="fleche grise"/>Il s'agit de prestations immatérielles</p>
        <p><img src={Check} alt="fleche grise"/>Le preneur n'est pas établi en Union Européenne (France inclus)</p>
      </div>

      <h4>La procédure :</h4>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Opérations non imposable en France -Opération n'entrant pas dans le champ d'application de la TVA</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />La TVA ne doit donc pas être appliquée - Facture hors taxes</ul>

      <hr />
      <div className='categorie' >
        <h4>Si vous êtes client Dougs : </h4>
        <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Sélectionnez la catégorie "Prestations de services exonérées"</ul>
        <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Indiquez la raison “vente en Union Européenne" ou "vente hors Union Européenne”</ul>
        <img src={PrestationExo} alt="Categorie UE" />
      </div>

      <div className="button">
        <Redo />
      </div>

      </div>
    </div>
);
}

export default ForeignUnsubmit;