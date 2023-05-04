import styled from 'styled-components'



export const Wrapper = styled.div`
${console.log(props => props.fd)}
display: ${props => props.display };
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

