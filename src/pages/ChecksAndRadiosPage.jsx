import React from 'react'
import Checkbox from '../components/Checkbox'
import Radio from '../components/Radio'
import RSwitch from '../components/RSwitch'

const ChecksAndRadiosPage = () => {
  return (
    <section>
      <h1>Checks and Radios</h1>

      <article>
        <div className='article-title'>
          <h4>Checkbox</h4>
        </div>
        <div className='article-body'>
          <Checkbox />
          <Checkbox isInvalid />
          <Checkbox disabled />
        </div>
      </article>

      <article>
        <div className='article-title'>
          <h4>Radio</h4>
        </div>
        <div className='article-body'>
          <Radio />
          <Radio isInvalid />
        </div>
      </article>

      <article>
        <div className='article-title'>
          <h4>Switch</h4>
        </div>
        <div className='article-body'>
          <RSwitch />
        </div>
      </article>
      
    </section>
  )
}

export default ChecksAndRadiosPage