import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

export const NavLinks = () => {
  return (
    <Links>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <NavLink to='/values'>Values</NavLink>
      <NavLink to='/services'>Services</NavLink>
      <NavLink to='/blog'>Blog</NavLink>
      <NavLink to='/contacts'>Contacts</NavLink>
    </Links>
  )
}

const Links = styled.div`
    display:flex;
    gap: 10px;
`
const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
`