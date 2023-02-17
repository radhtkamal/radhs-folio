import React from 'react'
import './sectionone.css'
import avatar from '../../assets/section-one/section-one-avatar.png'
import flower from '../../assets/section-one/section-one-flower.png'
import note from '../../assets/section-one/section-one-note.png'
import notes from '../../assets/section-one/section-one-notes.png'
import plant from '../../assets/section-one/section-one-plant.png'

const SectionOne = () => {
  return (
    <section>
      <div className="container flex-container section-one">
        <div className="left-flex">
          <h2 className="main-header">Hello</h2>
          <span className="cursive-text">I'm</span>
          <span className="main-name">Radh</span>
          <span className="main-name last-name">Kamal</span>
          <span className="main-role first-word">Frontend</span>
          <span className="main-role second-word">Developer</span>
          <div className="buttons-wrap">
            <button type='button' className="btn button-29">Download CV</button>
            <button type='button' className="btn button-29">Hire Me</button>
          </div>
        </div>
        <div className="right-flex">
          <div className="section-one-avatar-wrap">
            <img src={avatar} alt="avatar" className="section-one-avatar" />
          </div>
          <div className="section-one-flower-wrap">
            <img src={flower} alt="" className="section-one-flower" />
          </div>
          <div className="section-one-note-wrap">
            <img src={note} alt="" className="section-one-note" />
          </div>
          <div className="section-one-notes-wrap">
            <img src={notes} alt="" className="section-one-notes" />
          </div>
          <div className="section-one-plant-wrap">
            <img src={plant} alt="" className="section-one-plant" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionOne;
