import styled from "styled-components";

export const Heading = {
    xl: styled.p`
        font-size: ${props => props.fsize || "5rem"};
        width: ${props => props.width};
        color: ${props => props.color};
    `,
    l: styled.p`
        font-size: ${props => props.fsize || "3.5rem"};
        width: ${props => props.width};
        color: ${props => props.color};
    `,
    md: styled.p`
        font-size: ${props => props.fsize || "2.5rem"};
        width: ${props => props.width};
        color: ${props => props.color};
    `,
    sm: styled.p`
        font-size: ${props => props.fsize || "1.5rem"};
        width: ${props => props.width};
        color: ${props => props.color};
    `,
    xsm: styled.p`
        font-size: ${props => props.fsize || ".8rem"};
        width: ${props => props.width};
        color: ${props => props.color};
    `
}
