import React from 'react'

const Footer = () => {
  const year = new Date();
  return (
   <footer className='Footer'>
    <p>copright &copy; {year.getFullYear()} </p>
    </footer>
  )
}

export default Footer