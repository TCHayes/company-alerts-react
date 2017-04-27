import React from 'react';
import { Link } from 'react-router';

export default function Welcome (props) {

  return (
    <div className=''>
      <Link to="/login" ><button className='btn'>Login</button></Link>
      <Link to="/register" ><button className='btn'>Sign Up</button></Link>
    </div>
  )
}
