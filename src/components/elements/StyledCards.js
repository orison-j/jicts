import React from 'react'
import styled from "styled-components";
import { Wrapper } from "./StyledWrappers";
import { Text } from "./StyledTexts"
// import { css } from "styled-components";

const CardStyle = styled(Wrapper)`
    width: 20%;
    box-shadow: 2px 2px 5px #888;
    border-radius: .5rem;
    padding: 10px;
    border: ${props => props.border || '2px #fff'};
    height: 350px;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    ${({small}) => small && `
        width: 15%;
    `};
    flex-basis: ${({per}) => `calc(${per} - 10px)`};
    margin: 10px;
    `

export const ImageCard = ({children, items, cols}) => {
    const per = `${cols >= 1 ? cols * 10 : 1}%`
       const cards =  Array(items).fill().map(() => (
            <CardStyle per={per} display='flex'>
                {children}
            </CardStyle>
        ))
        return (
            <>
            <Wrapper p={'4%'}>
                <Text.xl align='center'>Services</Text.xl>
                <Text.sm fsize='1.2rem' align='center'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. 
                Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, 
                ultrices mauris</Text.sm>
            </Wrapper>
            {cards}
            </>
        )
    }

    