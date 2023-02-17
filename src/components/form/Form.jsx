import React from 'react'
import './form.css'

const Form = () => {
  return (
    <form>
      <div className="input-item">
        <label htmlFor="" className="input-label">Name</label>
        <input type="text" placeholder='Enter your name...'/>
      </div>
      <div className="input-item">
        <label htmlFor="" className="input-label">Email</label>
        <input type="email" placeholder='Enter your email...'/>
      </div>
      <div className="input-item">
        <label htmlFor="" className="input-label">Phone Number</label>
        <input type="number" placeholder='Enter your phone...'/>
      </div>
      <div className="input-item">
        <label htmlFor="" className="input-label">Message</label>
        <textarea placeholder='Enter your message...'/>
      </div>
      <div className="input-item">
        <button type='button' className="button btn button-29">Send Message</button>
      </div>
    </form>
  )
}

export default Form
