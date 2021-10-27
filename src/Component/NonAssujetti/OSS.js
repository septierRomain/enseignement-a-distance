import React from 'react'
import { useHistory } from 'react-router-dom'

import Banner from '../App/Banner'
import Redo from '../App/Redo'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'
import PrestationElectronique from '../../Assets/categories/prestation electronique.png'

const OSS = () => {
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
        <p><img src={Check} alt="fleche grise"/>La prestation concerne les services fournis par voie electronique</p>
        <p><img src={Check} alt="fleche grise"/>La preneur est établi en Union Européenne (hors France)</p>
        <p><img src={Check} alt="fleche grise"/>Vous faites plus de 10 000€ de CA vers l'Union Européenne</p>
      </div>

      <h4>La procédure :</h4>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Appliquez le taux de TVA du pays du preneur de la prestation au taux de ce pays</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Déclarez via l'OSS ou la déclaration nationale du pays</ul>

      <hr />
        <div className='categorie' >
          <h4>Si vous êtes client Dougs : </h4>
          <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Sélectionnez la catégorie "Ventes de services électroniques à un particulier en Union Européenne"</ul>
          <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Sélectionnez le pays de destination</ul>
          <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />La TVA se calcule automatiquement</ul>
          <img src={PrestationElectronique} alt="Categorie UE" />
        </div>

      <div className="button">
        <Redo />
      </div>

      </div>
    </div>
);
}

export default OSS;