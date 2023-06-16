import React from 'react'
import { Wrapper } from '../elements/StyledWrappers'
import styled, { css } from 'styled-components'
import { Button } from '../elements/StyledButtons'



export const Subscription = () => {
  return (
    <Wrapper as="form" display="flex" css={css`
        justify-content: center;
        align-items: center;
        margin:0px, auto;
        padding:0px 5px;
        background-color: white;
        border: 1px #eee solid;
        border-radius: 17px;
        width: fit-content;
        box-shadow: #333 3px 3px 15px;
        z-index: 10;
    `}>
      <Form type="text" />
      <Button orange css={css`
        padding: 10px;
        border-radius: 15px;
        width:10vw;
      `}>Subscribe</Button> 
    </Wrapper>
  )
}

const Form = styled.input`
    width: 40vw;
    padding:10px;
    margin:5px;
    outline: none;
    border: none;
        &:focus {
            outline:none;
        }
`