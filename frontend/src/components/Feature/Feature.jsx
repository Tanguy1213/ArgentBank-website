import React from 'react'
import "./Feature.scss"

function Feature({imgSrc, alt, title, desc}) {
  return (
    <div className='feature-item'>
        <img src={imgSrc} alt={alt} className='feature-icon'/>
        <h3 className='feature-item-title'>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default Feature