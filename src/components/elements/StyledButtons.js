import { Link } from "gatsby";
import styled from "styled-components";


export const Button = styled(Link)`
    margin: ${({mg}) => mg || "2rem"};
    color: #FF3D00;
    font-size: 1em;
    padding: 1.25rem 1.5rem;
    border-radius: ${({round}) => round || '15px'};
    border-width: 0;
    text-decoration: none;
    border-color: transparent;
    width: ${({width}) => width || 'fit-content'};
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
    border:1px solid #FF3D00;
    text-decoration: none;
        &:hover {
        cursor: pointer;
        color: #fff;
        border:1px solid #FFF;
    }
    `
}

${({orange}) => orange && `
color: #FFF;
background-color: #FF3D00;
font-size: 1em;
padding: 1.25rem 1.5rem;
border-color: transparent;
text-decoration: none;
  &:hover {
      cursor: pointer;
      background-color: #FF0A00;
      color: ;
    } `
}

${({dark}) => dark && `
    background-color: #111;
    color: #fff;
    font-size: 1em;
    padding: 1.25rem 1.5rem;
    border:1px solid grey;
    text-decoration:none;
        &:hover {
        background-color: #333;
        cursor: pointer;
        color: #fff;
        border:1px solid transparent;
    }
    `
}

${({small}) => small && `
    width: 60%
    height:auto;
    padding: 8px;
    font-size: clamp(.5rem, .8vw, 1rem);
    }  `
}

${({large}) => large && `
    width: clamp(20%, 25%, 30%);
    padding: 1rem;
    }  `
}
`