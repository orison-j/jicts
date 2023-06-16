import React from 'react'
import styled from "styled-components";
import { Wrapper } from "./StyledWrappers";
import { Text } from "./StyledTexts"
import { Button } from './StyledButtons';
import { GatsbyImage, StaticImage, getImage} from 'gatsby-plugin-image';
import { css } from "styled-components";
import { useStaticQuery, graphql } from 'gatsby';

export const ImageCard = ({cols}) => {

    const data = useStaticQuery(graphql`
        query servicesQuery {
            allServicesJson {
                edges {
                  node {
                    idx
                    title
                    description
                    link
                    img {
                      childImageSharp {
                        gatsbyImageData(
                            height: 200, 
                            formats: NO_CHANGE, 
                            transformOptions: {fit: COVER})
                      }
                    }
                  }
                }
              }
        }
        `)

        // const imageLinks = getImage(data.allServicesJson.edges.node.img.src)
        // console.log("img: ", imageLinks)

    const per = `${cols >= 1 ? cols * 10 : 1}%`
        return (
            <>
            <Wrapper p={'4%'}>
                <Text.xl align='center'>Services</Text.xl>
                <Text.sm fsize='1.2rem' align='center'></Text.sm>
            </Wrapper>
            {
                data.allServicesJson.edges.map(({node}, idx) => (
                        <CardStyle key={idx} per={per} display='flex'>
                            <div style={{width:"100%"}}>
                                <GatsbyImage 
                                    image={getImage(node.img)} 
                                    alt={node.title} 
                                    style={{width:"100%"}}
                                />
                            </div>
                            
                            <Text.sm fsize='1.7rem' align='center' bold='bolder'>{node.title}</Text.sm>
                            <Text.xsm align='center'>{node.description}</Text.xsm>
                            <div css={css`
                                display: flex;
                                gap: 10px;
                            `}>
                                <Button link orange small to={node.link}>View Projects</Button>
                                <Button link dark small to="/quote">Get Quote</Button>
                            </div>
                        </CardStyle>
                    )
                )
            }
            </>
        )
    }

    const CardStyle = styled(Wrapper)`
    width: 20%;
    box-shadow: 2px 2px 5px #888;
    border-radius: .5rem;
    padding: 15px;
    border: ${props => props.border || '2px #fff'};
    height: clamp(350px, auto, 550px);
    flex-direction:column;
    align-items:center;
    justify-content:center;
    ${({small}) => small && `
        width: 15%;
    `};
    flex-basis: ${({per}) => `calc(${per} - 10px)`};
    margin: 10px;
    `

    