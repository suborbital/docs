import React from 'react'
import '../../css/button.css'

const DocButton = ({ children, action }) => (
  <button className="docButton" onClick={action}>
    {children}
  </button>
)

export { DocButton }
