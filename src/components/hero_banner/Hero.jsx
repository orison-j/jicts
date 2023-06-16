import React from 'react'
import { Wrapper } from '../elements/StyledWrappers'

function Hero (props) {

  return (
    <Wrapper {...props}>
      {props.children}
    </Wrapper>
  )
}

export default Hero