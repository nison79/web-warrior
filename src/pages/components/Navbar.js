import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

export default function NavBar() {
  return (
    <Nav>
      <h1>George Nikoglou</h1>
        <Links >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </Links>
    </Nav>
  )
}

const Nav = styled.nav`
margin-bottom:5rem;
  display:flex;
  align-items:center;
  justify-content:space-between;
  h1 {
    font-family:'Poppins',sans-serif;
    letter-spacing:-2px;
    margin-left:5px;
  }
`

const Links = styled.div`
  a {
    font-family:"Poppins";
    letter-spacing:-1px;
    text-decoration:none;
    color:black;
    margin-left:16px;
  }
`
