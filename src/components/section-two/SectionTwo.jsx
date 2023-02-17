import React from 'react'
import './sectiontwo.css'
import balloon from '../../assets/section-two/section-two-balloon.png'
import ribbon from '../../assets/section-two/section-two-ribbon.png'
import plant from '../../assets/section-two/section-two-plant.png'
import avatar from '../../assets/section-two/section-two-avatar.png'

const SectionTwo = () => {
  return (
    <section>
      <div className="flex-container container section-two">
        <div className="left-flex">
          <div className="section-two-balloon-wrap">
            <img src={balloon} alt="avatar" className="section-two-balloon" />
          </div>
          <div className="section-two-ribbon-wrap">
            <img src={ribbon} alt="" className="section-two-ribbon" />
          </div>
          <div className="section-two-avatar-wrap">
            <img src={avatar} alt="" className="section-two-avatar" />
          </div>
          <div className="section-two-plant-wrap">
            <img src={plant} alt="" className="section-two-plant" />
          </div>
        </div>
        <div className="right-flex">
          <h2 className='section-header'>About Me</h2>
          <div className="speech-bubble first">
            <div className="text-wrap">
              <h2>2 Years Working Experience</h2>
              <strong>summarized in the following timeline:</strong>
              <ul className='list'>
                <li className='list-item'>1 year and 2 months Proactive Web Developer specializing in Vanilla JavaScript</li>
                <li className='list-item'>10 months Junior Frontend Developer specializing in ReactJS and Wordpress</li>
              </ul>
            </div>
          </div>
          <div className="speech-bubble second">
          <div className="text-wrap">
              <h2>10+ Projects Completed</h2>
              <strong>summarized in the following specifications:</strong>
              <ul className='list'>
                <li className='list-item'>E-Commerce Websites</li>
                <li className='list-item'>Blogging Websites</li>
                <li className='list-item'>Landing Pages</li>
                <li className='list-item'>Form Validation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionTwo
