import React from 'react'
import './sectionfive.css'
import Form from '../form/Form';
import avatar from '../../assets/section-five/section-five-avatar.png';
import balloon   from '../../assets/section-five/section-five-balloon.png';
import note1 from '../../assets/section-five/section-five-note1.png';
import cloud from '../../assets/section-five/section-five-cloud.png';
import hand from '../../assets/section-five/section-five-hand.png';
import note2 from '../../assets/section-five/section-five-note2.png';
import file from '../../assets/section-five/section-five-file.png';

const SectionFive = () => {
  return (
    <section>
      <div className="flex-container container section-five">
        <div className="left-flex">
          <div className="section-five-avatar-wrap">
            <img src={avatar} alt="" className="section-five-avatar" />
          </div>
          <div className="section-five-balloon-wrap">
            <img src={balloon} alt="" className="section-five-balloon" />
          </div>
          <div className="section-five-note1-wrap">
            <img src={note2} alt="" className="section-five-note1" />
            <div className="note1-content">
              <h1>Email:</h1>
              <span>radhkamal@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="right-flex">
          <h2 className="section-header">My Contacts</h2>
          <Form />
          <div className="section-five-cloud-wrap">
            <img src={cloud} alt="" className="section-five-cloud" />
          </div>
          <div className="section-five-cloud1-wrap">
            <img src={cloud} alt="" className="section-five-cloud" />
          </div>
          <div className="section-five-note2-wrap">
            <img src={note1} alt="" className="section-five-note2" />
            <div className="note2-content">
              <h1>Phone:</h1>
              <span>+639755066104</span>
            </div>
          </div>
          <div className="section-five-hand-wrap">
            <img src={hand} alt="" className="section-five-hand" />
          </div>
          <div className="section-five-file-wrap">
            <img src={file} alt="" className="section-five-file" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionFive
