import React from 'react'
import styled, { css } from 'styled-components';
import { Text } from '../elements/StyledTexts';

function Footer({children, type, brand}) {
    const cpwr_year = new Date().getFullYear()
    if (type === 'copywrite') {
        return (
            <CopyFooter>
                {children}
               <Text.xsm css={css`font-weight:400px`}>  &copy; {brand} - {cpwr_year} </Text.xsm>
            </CopyFooter>
        )
    }
    else {
        return (
            <MainFooter>
                {children}
            </MainFooter>
        )
    }
}

export default Footer

const MainFooter = styled.footer`
    display: flex;
    text-align: center;
    width: 100vw;
    height:auto;
    color: white;
    padding: 10px 0px;
    background-color: #333;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`


const CopyFooter = styled(MainFooter)`
    height:2rem;
    width:100vw;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 3rem;
    & ~ span {
        font-size: 10px;
        font-weight: 400px;
    }
`

