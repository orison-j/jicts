import styled from "styled-components"
import { Wrapper } from "./StyledWrappers"


export const Section = styled(Wrapper)`
background-color:${({bgcolor}) => bgcolor || '#fff'};
${({display}) => display === 'flex' && `
flex-wrap: wrap;
`}

`