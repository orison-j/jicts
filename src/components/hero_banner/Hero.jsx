import React from 'react'
import { Wrapper } from '../styled/Wrapper'
import Logo from '../../images/home-hero.png'
function Hero (props) {

    console.log("logo:", Logo);
  return (
    <Wrapper {...props} style={styles}>
      {props.children}
    </Wrapper>
  )
}

export default Hero

const styles = {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${Logo})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }