import React from 'react'
import './sectionfour.css'
import './cards.css'
import avatar from '../../assets/section-four/section-four-avatar.png';
import flower from '../../assets/section-four/section-four-flower.png';
import paper from '../../assets/section-four/section-four-paper.png';
import envelope from '../../assets/section-four/section-four-envelope.png';

import portfolio from '../../assets/section-four/static.png';
import api from '../../assets/section-four/api.png';
import react from '../../assets/section-four/react.png';

const SectionFour = () => {
  return (
    <section>
      <div className="flex-container container section-four">
        <div className="left-flex">
          <h2 className="section-header">My Projects</h2>
          <div class="card-rotate">
            <p className='container-para'>
              <a className="card-content" href='https://radhtkamal.github.io/webportfolio2/' target="_blank" rel="noreferrer">
                <img className="card-image" src={portfolio} alt="" />
                <h2 className="card-name" >Static Portfolio</h2>
                <small>Using vanilla HTML, CSS and JavaScript</small>
              </a>
              <span>HOVER ME</span>
            </p>
            <p className='container-para'>
              <a className="card-content" href='https://gitlab.com/radhkamal/s344/s38' target="_blank" rel="noreferrer">
                <img className="card-image" src={api} alt="" />
                <h2 className="card-name" >Ecommerce API</h2>
                <small>Using ExpressJS and MongoDB</small>
              </a>
              <span>HOVER ME</span>
            </p>
            <p className='container-para'>
              <a className="card-content" href='https://gitlab.com/radhkamal/radhs-folio' target="_blank" rel="noreferrer">
                <img className="card-image" src={react} alt="" />
                <h2 className="card-name" >ReactJS Portfolio</h2>
                <small>Source codes used in this portfolio</small>
              </a>
              <span>HOVER ME</span>
            </p>
          </div>
        </div>
        <div className="right-flex">
          <div className="section-four-avatar-wrap">
            <img src={avatar} alt="avatar" className="section-four-avatar" />
          </div>
          <div className="section-four-flower-wrap">
            <img src={flower} alt="flower" className="section-four-flower" />
          </div>
          <div className="section-four-paper-wrap">
            <img src={paper} alt="paper" className="section-four-paper" />
          </div>
          <div className="section-four-envelope-wrap">
            <img src={envelope} alt="paper" className="section-four-envelope" />
          </div>
          <div class="flower-spinner-big">
            <div class="dots-container">
              <div class="bigger-dot">
                <div class="smaller-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionFour
