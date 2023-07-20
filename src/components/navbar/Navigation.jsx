import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import Logo from '../../images/logo.png'
import caret from '../../images/caretIcon.png'
import { Wrapper } from '../elements/StyledWrappers'
import { Button } from '../elements/StyledButtons'


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
    <Wrapper p='20px 0' width = '100%' display='flex' style={navStyles} {...props}>
        <div style={{display: 'flex', justifyContent:'flex-end', width: '20%', padding:'10px' }}>
            <img
                src = {Logo}
                alt = "jehori ict logo"
                width = {50}
                height = {50}
            />
        </div>
        <nav style={{display:'flex', padding:'10px 10%', color:'white', position:'relative'}}>
            <StyledLink color={props.linkColor}  to='/'>Home</StyledLink>
            <StyledLink color={props.linkColor} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} to='#' style={{ /* position:'relative' */ }}>
                Company <img style={caretRot} width={10} src={caret} alt=''/>
                {
                    showSubMenu &&
                    (
                        <SubLinksContainer style={{display:'flex', flexDirection:'column'}}>
                            <SubLinks color={props.subLinkColor} to='/company/about-us'>About Us</SubLinks>
                            <SubLinks color={props.subLlinkColor} to='/company/projects'>Projects</SubLinks>
                            <SubLinks color={props.subLinkColor} to='/company/values'>Values</SubLinks>
                        </SubLinksContainer>
                    )
                }
                
            </StyledLink>
            <StyledLink color={props.linkColor} to='/services'>Services</StyledLink>
            <StyledLink color={props.linkColor} to='/blog'>Blog</StyledLink>
            <StyledLink color={props.linkColor} to='/contact'>Contact</StyledLink>
        </nav>
        <Button orange
        css={css`
            align-self:center;
            `} 
        to='/forms/quote'
        round="5px"
        style={{padding:"10px"}}> 
            Get Quote
        </Button>
    </Wrapper>
    
  )
}

export default Navigation

const StyledLink = styled(Link)`
    padding: .8rem 1.2rem;
    text-decoration-line: none;
    color: ${props => props.color || '#111'};
    font-size: 1rem;
    text-transform: uppercase;
`

const SubLinksContainer = styled.div`
    background-color: #fff;
    overflow: hidden;
    margin: 5px;
    z-index: 1000;
    border-radius: 0 15px;
    width:100%;
    /* box-shadow: 0px 5px 15px 5px #222e; */
    position: absolute;
    left: 10%;
`

const SubLinks = styled(StyledLink)`
    font-weight: thin;
    font-size:.8rem;
    color: ${props => props.color || '#111'};
    &:last-child {
        &:hover {
            background-color: #fff2f2;
            border-bottom: none;
        }
    }
    &:first-child {
        &:hover {
            background-color: #fff2f2;
            border-top: none;
        }
    }
    &:hover {
            background-color: #fff2f2;
            border-bottom: solid 1px #ff7c30;
            border-top: solid 1px #ff7c30;
        }
`

const navStyles = {
    top:'0',
    left:'0',
    right:'0',
    marginRight:'auto',
    marginLeft: 'auto',
}


    
