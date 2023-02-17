import React from 'react'
import './sectionthree.css'
import './flower.css'
import './flowers.css'
import gitlab from '../../assets/section-three/section-three-1.png';
import vue from '../../assets/section-three/section-three-2.png';
import node from '../../assets/section-three/section-three-3.png';
import react from '../../assets/section-three/section-three-4.png';
import next from '../../assets/section-three/section-three-5.png';
import js from '../../assets/section-three/section-three-6.png';
import sass from '../../assets/section-three/section-three-7.png';
import git from '../../assets/section-three/section-three-8.png';
import bootstrap from '../../assets/section-three/section-three-9.png';
import avatar from '../../assets/section-three/section-three-avatar.png';
import flower from '../../assets/section-three/section-three-flower.png';

const SectionThree = () => {
  return (
    <section>
      <div className="flex-container container section-three">
        <div className="left-flex">
          <div class="flower-spinner-big">
            <div class="dots-container">
              <div class="bigger-dot">
                <div class="smaller-dot"></div>
              </div>
            </div>
          </div>
          <div class="flower-spinner">
            <div class="dots-container">
              <div class="bigger-dot">
                <div class="smaller-dot"></div>
              </div>
            </div>
          </div>
          <div class="flower-spinner-right">
            <div class="dots-container">
              <div class="bigger-dot">
                <div class="smaller-dot"></div>
              </div>
            </div>
          </div>
          <div className="section-three-1-wrap">
            <img src={gitlab} alt="" className="section-three-1 section-three-icon" />
          </div> 
          <div className="section-three-2-wrap">
            <img src={vue} alt="" className="section-three-2 section-three-icon" />
          </div>
          <div className="section-three-3-wrap">
            <img src={node} alt="" className="section-three-3 section-three-icon" />
          </div>
          <div className="section-three-4-wrap">
            <img src={react} alt="" className="section-three-4 section-three-icon" />
          </div>
          <div className="section-three-5-wrap">
            <img src={next} alt="" className="section-three-5 section-three-icon" />
          </div>
          <div className="section-three-6-wrap">
            <img src={js} alt="" className="section-three-6 section-three-icon" />
          </div>
          <div className="section-three-7-wrap">
            <img src={sass} alt="" className="section-three-7 section-three-icon" />
          </div>
          <div className="section-three-8-wrap">
            <img src={git} alt="" className="section-three-8 section-three-icon" />
          </div>
          <div className="section-three-9-wrap">
            <img src={bootstrap} alt="" className="section-three-9 section-three-icon" />
          </div>
          <div className="section-three-avatar-wrap">
            <img src={avatar} alt="" className="section-three-avatar" />
          </div>
        </div>
        <div className="right-flex">
          <div className="section-three-flower-wrap">
            <img src={flower} alt="" className="section-three-flower" />
          </div>
          <h2 className="section-header">My Tech Stack</h2>
          <div class="cards">
            <div class="card card-2">
              <h2 className="card-header">Frontend</h2>
              <ul className="card-list">
                <li className="card-list-item">React.js</li>
                <li className="card-list-item">Next.js</li>
                <li className="card-list-item">Vue.js</li>
                <li className="card-list-item">Nuxt.js</li>
                <li className="card-list-item">Sass</li>
                <li className="card-list-item">Bootstrap</li>
              </ul>
            </div>
            <div class="card card-3">
            <h2 className="card-header">Backend</h2>
              <ul className="card-list">
                <li className="card-list-item">Node.js</li>
                <li className="card-list-item">Express.js</li>
                <li className="card-list-item">MongoDB</li>
                <li className="card-list-item">Mongoose ODM</li>
                <li className="card-list-item">Postman API</li>
                <li className="card-list-item">JSON Web Token</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionThree
