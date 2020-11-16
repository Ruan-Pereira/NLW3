import React from 'react';

import logoImg from '../images/Logo-escrita.svg';

import'../styles/Pages/landing.css';

import { Link } from 'react-router-dom'

import { FiArrowRight } from 'react-icons/fi';

function Landing() {
    return(
        <div id="page-landing">
        <div className="content-wrapper">
            <img src={logoImg} alt=""/>

            <main>
              <h1>Leve a felicidade para o mundo</h1>
              <p>Visite orfanatos e mude o dia de muitas crianças</p>
            </main>

            <div className="location">
              <strong>Franca</strong>
              <p>São Paulo</p>
            </div>

            <Link to="/App" className='enter-app'>
              <FiArrowRight size={26} color="{readBuilderProgram(0, 0, 0, 0.6}" />
            </Link>

          </div>  
    </div>
    );
}

export default Landing;