import styled from "styled-components";


export const Button = styled.button`
  color: #FF3D00;
  font-size: 1em;
  padding: 1.25rem 1.5rem;
  border-radius: 5px;
  border-width: 0;
  border-color: transparent;
    &:hover {
        cursor: pointer;
        background-color: #FF3D00;
        color: #fff;
    }

${({inverted}) => inverted && `
    background-color: transparent;
    color: #fff;
    font-size: 1em;
    padding: 1.25rem 1.5rem;
    border-radius: 5px;
    border:1px solid #FF3D00;
    border-radius: 3px;
        &:hover {
        cursor: pointer;
        color: #fff;
        border:1px solid #FFF;
    }
    `
}
`;