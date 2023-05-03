import styled from 'styled-components'

export const Wrapper = styled.div`
display: ${props => props.display ? props.display : 'block'};
color: ${props => props.color ? props.color : '#222222'};
width: ${props => props.width ? props.width : '100vw'};
height: ${props => props.height ? props.height : '450px'};
padding: ${props => props.p ? props.p : '2rem'};
margin: ${props => props.m ? props.m : '1.2rem'};
flex-direction: ${props => props.fd ? props.fd : 'row'}
`

