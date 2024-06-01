import React from 'react'
import './css/User.css'
import Cover from './sub/Cover';

function User({ children }) {
  return (
    <Cover name="User">

    {children}
    <h1>User in here</h1>
    
    
  </Cover>
  )
}

export default User