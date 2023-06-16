import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Wrapper } from "../elements/StyledWrappers";
import { Text } from "../elements/StyledTexts";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { css } from 'styled-components'

export const Testimonials = () => {

    const data = useStaticQuery(graphql`
    query TestimonialQuery {
        allTestimonialsJson {
            edges {
              node {
                idx
                Name
                Testimony
                id
                img {
                  childImageSharp {
                    gatsbyImageData(
                        formats: NO_CHANGE,
                        transformOptions: {cropFocus: CENTER, fit: COVER}, 
                        width: 100,
                        height: 100
                        )
                  }
                }
              }
            }
          }
    }
`)

    return (
    <>
        {data.allTestimonialsJson.edges.map( ({node}, nkey) => (
            <Wrapper className={`tmy_${nkey}`} display="flex" wrap="no-wrap" css={styles} key={node.id}>
                <GatsbyImage css={css`
                    margin-bottom: 10px;
                    border-radius:50%;
                    padding:0;
                    width: 150px;
                    height: 150px;
                    background: #1E1E1E;
                    border: 10px solid #f1f1f1;
                `} image={getImage(node.img)} alt="" />
                <Text.sm align="center" fsize="1rem">{node.Testimony}</Text.sm>
                <Text.xsm align="center" italize>- {node.Name}</Text.xsm>
            </Wrapper>
        ))}
    </>
)

}


const styles = css`
    padding: 40px;
    width: clamp(300px, 350px, 450px);
    height: 480px;
    background: #D9D9D9;
    /* border: 1px solid #000000; */
    box-shadow: 0px 10px 10px 5px rgba(0, 0, 0, 0.25);
    border-radius: 204.5px;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    .tmy_1 {
        margin-top: 30px;
    }
`