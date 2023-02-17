import React from 'react'
import SectionFive from './components/section-five/SectionFive';
import SectionFour from './components/section-four/SectionFour';
import SectionOne from './components/section-one/SectionOne'
import SectionThree from './components/section-three/SectionThree';
import SectionTwo from './components/section-two/SectionTwo';
import './responsive.css'

const App = () => {
  return (
    <div className='main-container'>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  )
}

export default App;