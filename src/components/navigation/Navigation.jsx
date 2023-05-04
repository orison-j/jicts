import React from 'react'
import { Link } from 'gatsby'
import Logo from '../../images/logo.png'
import { Wrapper } from '../elements/Wrapper'
import { StaticImage } from 'gatsby-plugin-image'

const navStyles = {
    top:'0',
    left:'0',
    right:'0',
    marginRight:'auto',
    marginLeft: 'auto',
}

const linkStyle = {
    padding: '.8rem 1.2rem'
}

const Navigation = props => {
  return (
    <Wrapper width = '100%' display='flex' style={navStyles} {...props}>
        <div style={{display: 'flex', alignItems:'center', width: '25%', padding:'10px 10%' }}>
            <img
                src = {Logo}
                alt = "jehori ict logo"
                placeholder = "blurred"
                layout = "fixed"
                width = {50}
                height = {50}
            />
        </div>
        <nav style={{ padding:'10px 10%' }}>
            <Link style={linkStyle} to='/'>Home</Link>
            <Link style={linkStyle} to='/company'>Home</Link>
            <Link style={linkStyle} to='/services'>Home</Link>
            <Link style={linkStyle} to='/blog'>Home</Link>
            <Link style={linkStyle} to='/contacts'>Home</Link>
        </nav>
    </Wrapper>
    
  )
}

export default Navigation
