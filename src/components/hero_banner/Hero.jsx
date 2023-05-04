import React from 'react'
import { Wrapper } from '../elements/Wrapper'
import HeroImage from '../../images/home-hero.png'
import Navigation from '../navigation/Navigation';

function Hero (props) {
  return (
    <Wrapper {...props} style={styles}>
      <Navigation pos="absolute" />
      {props.children}
    </Wrapper>
  )
}

export default Hero

const styles = {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom',
  }