import styled, { css } from "styled-components";


export const Container = styled.div`
    background-color:${({bgcolor}) => bgcolor || '#fff'};
    ${({flex}) => flex && css`
        display: flex;
        justify-content: ${({jc}) => jc || 'flex-start' };
        align-items: ${({ai}) => ai || 'inherit'};
        padding: ${({pd}) => pd || 'clamp(1.1rem, 3.5%, 2rem)'};
        margin: ${({mg}) => mg || 'clamp(1.1rem, 3.5%, 2rem)'};
        gap: ${({gap}) => gap || '1.2rem'};
    `
}
    ${({grid}) => grid && css`
        display: grid;
        justify-content: ${({jc}) => jc || 'flex-start' };
        align-content: ${({ai}) => ai || 'inherit'};
        padding: ${({pd}) => pd || 'clamp(1.1rem, 3.5%, 2rem)'};
        margin: ${({mg}) => mg || 'clamp(1.1rem, 3.5%, 2rem)'};
        grid-template-column: ${({gtc}) => gtc || '1fr 1fr 1fr'};
        gap: ${({gap}) => gap || '1.2rem'};
    `
}
`