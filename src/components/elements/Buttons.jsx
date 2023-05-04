import React from "react";
import styled from "styled-components";


const ButtonDefault = styled.button`
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
`;

const ButtonInverted = styled.button`
  color: transparent;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 1px 1px solid #FF3D00;
  border-radius: 3px;
`;

export const Button = props => {
    if (props.inverted)
        return <ButtonInverted {...props} />
    return <ButtonDefault {...props} />
}