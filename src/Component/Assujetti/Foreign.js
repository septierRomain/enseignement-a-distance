import React from 'react'
import { useHistory } from 'react-router-dom'

import Banner from '../App/Banner'
import Redo from '../App/Redo'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'
import PrestationExo from '../../Assets/categories/prestation exo.png'

const Foreign = () => {
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
        <p><img src={Check} alt="fleche grise"/>Le preneur n'est pas établi en France</p>
        <p><img src={Check} alt="fleche grise"/>Prestations entrant dans les régles générales</p>
      </div>

      <hr />
      <div class='square'>
        <p>En dehors des cas spécifiques mentionnés précédemment, les prestations de services réalisées au profit d'un assujetti à la TVA ne sont pas imposables en France lorsque le preneur assujetti est établi hors de France. <br />
        Le lieu d'imposition est alors le pays du preneur (Autre pays d'UE ou pays tiers).</p>
      </div>
      <hr />

      <h4>Régle générale d'imposition :</h4>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />La prestation est imposable dans le pays du preneur</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Appliquer le taux de TVA du pays du preneur  (sauf existence d'un dispositif d'autoliquidation - facturation HT le cas échéant)</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Vous devez vous enregistrer à la TVA auprès de ce pays et y effectuer votre déclaration (sauf existence d'un dispositif d'autoliquidation)</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Un déclaration d'échange de services est à effectuer dès le 1er euro facturé</ul>

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

export default Foreign;