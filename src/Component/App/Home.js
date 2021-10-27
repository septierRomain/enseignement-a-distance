import React from 'react';
import { Link } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'
import Arrow from '../../Assets/arrow.svg'

import Banner from '../App/Banner';
import ModalAssujetti from '../Modal/assujetti';
import ModalElectronic from '../Modal/electronic';

function Home() {
  return(
    <div id="welcome" className='wrap'>
      <Banner />

      <div id="welcome_banner">
        <h1>Bonjour et bienvenue sur notre simulateur de TVA pour l'enseignement à distance</h1>
        <div id="side">
          <div id="learning">
            <h4>Vous faites de l'enseignement à distance :</h4>
            <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Vous diffusez en ligne des vidéos de cours (peinture, langue, sport, marketing...).
            Ces vidéos sont préenregistrées et diffusées de manière uniforme à vos acheteurs via des services Internet (votre site ou des plateformes).</ul>
            <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />A l'exclusion des prestations d'enseignements expressément exonérées de TVA</ul>
            <p>Si vous ne dispensez pas vos cours de manière automatisée, mais de manière individualisée, ce simulateur de TVA ne correspond pas à votre activité. Retrouvez parmi nos simulateurs, celui correspondant à votre activité : <a href="https://simulateur-prestations-services.netlify.app/">C'est par ici !</a></p>
          </div>
        </div>
        <h5>Vos prestations s'inscrivent donc dans les prestations de services fournies par voie électronique <ModalElectronic /></h5>
        
        <p>C’est parti !</p>
      </div>

      <div id="assujetti">
        <h2>Le preneur est il assujetti à la TVA ? <ModalAssujetti /></h2>
        <div className="select_container">
          <Link to='assujetti' ><button className='select'>Oui</button></Link>
          <Link to='non_assujetti' ><button className='select'>Non</button></Link>
        </div>
      </div>

    </div>
  )
}

export default Home