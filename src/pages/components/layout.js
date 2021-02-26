import React from 'react'
import NavBar from './Navbar'

export default function Layout( { children } ) {
  return (
    <div className="layout">
      <NavBar />
      <div className="content">
        { children }
      </div>
      <footer>
        <p>Copyright 2021 George Nikoglou</p>
      </footer>
    </div>
  )
}
