import React from 'react'
import { Wrapper } from '../elements/Wrappers'
import HeroImage from '../../images/home-hero.png'

function Hero (props) {
  return (
    <Wrapper {...props} css={styles}>
      {props.children}
    </Wrapper>
  )
}

export default Hero

const styles = `
    position: relative;
    justify-content: center;
    align-items: center;
    background-image: url(${HeroImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
`