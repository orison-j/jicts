import styled from 'styled-components'

export const Wrapper = styled.div`
display: ${props => props.display };
${({display}) => display === 'flex' && `
flex-wrap: wrap;
`}
color: ${props => props.color || '#222222'};
width: ${props => props.width || '100%'};
height: ${props => props.height };
padding: ${props => props.p };
margin: ${props =>  props.m };
flex-direction: ${props => props.fd };
position: ${props => props.pos};
top: ${props => props.top};
left: ${props => props.left};
`

export const Section = styled(Wrapper)`

`



