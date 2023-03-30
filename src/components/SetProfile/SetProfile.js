import React from 'react'
import './SetProfile.css'
import {Link} from 'react-router-dom'


const SetProfile = () => {
  return (
    <div className='SetProfile'>
        <h2>PERSONAL INFORMATION</h2>
        <section className='inputs'></section>
        <section className='buttons'>
              <button className='btn1'>
                <Link to='/SetProfile'>Prev</Link>
              </button>
              <button className='btn2'>
                <Link to='contact'>Next</Link>
              </button>
        </section>
    </div>
  )
}

export default SetProfile
