import styled from "styled-components";

export const Text = {
    xl: styled.h1`
        font-size: ${props => props.fsize || "5rem"};
        width: ${props => props.width};
        color: ${props => props.color};
        text-align: ${props => props.align};
        line-height: ${props => props.line};
        font-weight: ${props => props.bold ? 700 : null};
        ${({italize}) => italize && `font-style:italic`};
        
    ` ,
    l: styled.h2`
        font-size: clamp(1rem, ${props => props.fsize || "4.5vw"}, 5rem);
        width: ${props => props.width};
        color: ${props => props.color};
        text-align: ${props => props.align};
        line-height: ${props => props.line};
        font-weight: ${props => props.bold ? 700 : null};
        ${({italize}) => italize && `font-style:italic`}
    `,
    md: styled.h3`
        font-size: ${props => props.fsize || "2.5rem"};
        width: ${props => props.width};
        color: ${props => props.color};
        text-align: ${props => props.align};
        line-height: ${props => props.line};
        font-weight: ${props => props.bold ? 700 : null};
        ${({italize}) => italize && `font-style:italic`}
    `,
    sm: styled.p`
        font-size: ${props => props.fsize || "1.5rem"};
        width: ${props => props.width};
        color: ${props => props.color};
        text-align: ${props => props.align};
        line-height: ${props => props.line};
        font-weight: ${props => props.bold ? 700 : null};
        ${({italize}) => italize && `font-style:italic`}
    `,
    xsm: styled.p`
        font-size: ${props => props.fsize || ".8rem"};
        width: ${props => props.width};
        color: ${props => props.color};
        text-align: ${props => props.align};
        line-height: ${props => props.line};
        font-weight: ${props => props.bold ? 700 : null};
        ${({italize}) => italize && `font-style:italic`}
    `
}