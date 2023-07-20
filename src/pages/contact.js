import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

import Hero from "../components/hero_banner/Hero"
import Navigation from '../components/navbar/Navigation'
import ImgUrl from '../images/contact-us.webp'
import { Section } from '../components/elements/StyledSection'
import { Container } from '../components/elements/StyledContainer'
import { Wrapper } from '../components/elements/StyledWrappers'
import { Text } from '../components/elements/StyledTexts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faFacebookSquare, faTwitterSquare, faLinkedin, faSquareInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/footer/Footer'
import Map from '../components/gMap/Map'
import { Subscription } from '../components/forms/Forms'
import { NavLinks } from '../components/footer/NavLinks'

const Contact = () => {
  return (
    <main>
        {/* <div style={{width: 1182.39, height: 1496.95, left: -654.84, top: 1123.94, position: 'absolute', transform: 'rotate(-35.28deg)', transformOrigin: '0 0', opacity: 0.50, background: 'rgba(0, 0, 0, 0.25)', boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.25)', borderRadius: 591.19}} />
        <div style={{width: 1182.39, height: 1496.95, left: -522, top: 1189.94, position: 'absolute', transform: 'rotate(-35.28deg)', transformOrigin: '0 0', background: 'rgba(255, 61.20, 0, 0.25)', boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.25)', borderRadius: 591.19}} /> */}
        <Hero p = '2rem 4rem'
            display='flex' 
            fd='column' 
            height='100vh'
            color='#eeeeee'
            css={css`
                padding: 25% 10rem;
                position: relative;
                justify-content: center;
                align-items: left;
                background-image: url(${ImgUrl});
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
                &::before {
                    content: ' ';
                    position: absolute;
                    height: 100%;
                    width:100%;
                    top:0;
                    left:0;
                    background-color: black;
                    opacity: .4;
                }
            `}>
                <Navigation pos="absolute" linkColor="white" subLinkColor="#111"/>
                <Text.l style={{width: '60vw', height: 315, color: 'white', fontSize: 72, fontWeight: '800', wordWrap: 'break-word'}}>Speak with a Representative</Text.l>
            </Hero>

            <Section css={` position: relative `}>
                <div 
                    css={css`
                        position: absolute;
                        z-index: 1;
                        top: 0rem;
                        left: 0rem;
                        width: 73.89919rem;
                        height: 93.55969rem;
                        transform: rotate(-35.282deg);
                        border-radius: 591.194px;
                        background: rgba(255, 61, 0, 0.25);
                        box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25);
                    `}
                />
                <Container flex pd="10rem" mg='0' bgColor="transparent">
                    <Wrapper>
                        <Wrapper>
                            <Box>
                                <Text.md>Office</Text.md>
                            </Box>
                            <Box display='flex' style={{alignItems:'flex-start'}}>
                                <FontAwesomeIcon css={`margin: 1rem 0`} icon={faMapMarkerAlt} />
                                <Text.sm fsize="1.2rem">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo,</Text.sm>
                            </Box>
                        </Wrapper>
                        <Wrapper>
                            <Box>
                                <Text.md>Socials</Text.md>
                            </Box>
                            <Wrapper>
                                <Box display="flex">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                    <Text.sm fsize="1.2rem">Facebook</Text.sm>
                                </Box>
                                <Box display="flex">
                                    <FontAwesomeIcon icon={faTwitterSquare} />
                                    <Text.sm fsize="1.2rem">Twitter</Text.sm>
                                </Box>
                                <Box display="flex">
                                    <FontAwesomeIcon icon={faSquareInstagram} />
                                    <Text.sm fsize="1.2rem">instagram</Text.sm>
                                </Box>
                                <Box display="flex">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                    <Text.sm fsize="1.2rem">Linkedin</Text.sm>
                                </Box>
                                <Box display="flex">
                                    <FontAwesomeIcon icon={faPhoneSquare} />
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                    <Text.sm fsize="1.2rem">+234(0)8168928282</Text.sm>
                                </Box>
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper>
                        <Box css={css`
                            z-index: 10;
                            border-radius: 2rem;
                            background: #480FE8;
                            box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25);
                            padding: .3rem;
                        `}>
                            <Box display="flex" type="basic" corners="1.8rem" css={`
                                padding: 1rem; 
                                flex-direction:column;
                            `}>
                                <Text.md css={`margin:2rem 0`}> Drop a Line </Text.md>
                                <Form action='submit' >
                                    <Box>
                                        <Input placeholder='Subject' type='text' />
                                    </Box>
                                    <Box>
                                        <Input placeholder='Email' type='text' />
                                    </Box>
                                    <Textarea placeholder='Message'/>
                                    <Submit type='submit'> Send Message </Submit>
                                </Form>
                            </Box>
                        </Box>
                    </Wrapper>
                </Container>
            </Section>
            <Container flex jc='center' ai='center' pd='10px' mg='0 0 -30px 0'>
                <Subscription />
            </Container>
            <Section>
            <Map />
                <Footer type="copywrite" brand='Jehori ICT Services'>
                <NavLinks />
            </Footer>
      </Section>
            
      </main>
  )
}

export default Contact


const Box = styled.div`
${({display}) => display === 'flex' && css`
    display: flex;
    gap: .1rem;
    align-items: center;
`}
${({type}) => type === 'basic' && `
    border-radius: ${props => props.corners || '65px' };
    background: #FFF;
`}
border-radius: ${props => props.corners || '65px' };
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    gap: .5rem;
    width: 100%;

`

const Input = styled.input`
    width: 100%;
    height: 3rem;
    border-radius:.7rem;
    border-width: thin;
    border-color: #aaa;
    border-style: solid;
    padding: .5rem;
        &:focus {
            outline: none;
        }
`

const Textarea = styled.textarea`
    height: 10rem;
    border-radius: 1.2rem; 
    padding: .5rem;
    border-style: solid;
    border-color: #aaa;
        &:focus {
            outline: none;
        }
`

const Submit = styled.button`
    width: 50%;
    text-align: center;
    align-self: center;
    padding: 1rem;
    font-size: 1.2rem;
    border-radius: .8rem;
    border: solid thin #aaa;
    cursor: pointer;
`

const Label = styled.label`

`