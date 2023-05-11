import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Logo from '../../images/logo.png'
import caret from '../../images/caretIcon.png'
import { Wrapper } from '../elements/Wrapper'


const Navigation = props => {

    const [ showSubMenu, setShowSubMenu ] = useState(false);

    const handleMouseOver = (e) => {
        e.preventDefault()
        setShowSubMenu(true)
    }
    const handleMouseOut = (e) => {
        e.preventDefault()
        setShowSubMenu(false)
    }

    const caretRot = {
        transform: showSubMenu && 'scaleY(-1)',
        }
  return (
    <Wrapper as='navigation' p='20px 0' width = '100%' display='flex' style={navStyles} {...props}>
        <div style={{display: 'flex', alignItems:'center', width: '25%', padding:'10px 10%' }}>
            <img
                src = {Logo}
                alt = "jehori ict logo"
                width = {50}
                height = {50}
            />
        </div>
        <nav style={{ padding:'10px 10%' }}>
            <StyledLink  to='/'>Home</StyledLink>
            <StyledLink onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} to='#' style={{position:'relative'}}>
                Company <img style={caretRot} width={10} src={caret} alt=''/>
                {
                    showSubMenu &&
                    (
                        <SubLinksContainer style={{display:'flex', flexDirection:'column'}}>
                            <SubLinks to='/about-us'>About Us</SubLinks>
                            <SubLinks to='/projects'>Projects</SubLinks>
                            <SubLinks to='/values'>Values</SubLinks>
                        </SubLinksContainer>
                    )
                }
                
            </StyledLink>
            <StyledLink to='/services'>Services</StyledLink>
            <StyledLink to='/blog'>Blog</StyledLink>
            <StyledLink to='/contacts'>Contact</StyledLink>
        </nav>
    </Wrapper>
    
  )
}

export default Navigation

const StyledLink = styled(Link)`
    padding: .8rem 1.2rem;
    text-decoration-line: none;
    color: #fff;
    font-size: 1.2rem;
    text-transform: uppercase;
`

const SubLinksContainer = styled.div`
    background-color: #111;
    padding: 5px;
    margin: 5px;
    z-index: 1000;
    border-radius: 15px;
    width:100%;
    box-shadow: 0px 5px 15px 5px #222e;
    position: absolute;
    left: 10%;
`

const SubLinks = styled(StyledLink)`
`

const navStyles = {
    top:'0',
    left:'0',
    right:'0',
    marginRight:'auto',
    marginLeft: 'auto',
}


    
