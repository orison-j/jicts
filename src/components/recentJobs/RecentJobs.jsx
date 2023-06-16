import React from 'react'
import { Wrapper } from '../elements/StyledWrappers'
import { Text } from '../elements/StyledTexts'
import { Button } from '../elements/StyledButtons'
import { Link } from 'gatsby'

import { useStaticQuery, graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const RecentJobs = () => {

    const data = useStaticQuery(graphql`
    query RecentJobsQuery {
      allRecentjobsJson {
        edges {
          node {
            idx
            link
            name
            status
            type
            techs {
              logo
              name
            }
            img
          }
        }
    }
  }
`)


  return (
    <RJContainer>
      { data.allRecentjobsJson.edges.map(({node})=> {
        <Wrapper display='flex' fd='column' css={styles}>
          <Text.md>{node.name}</Text.md>
          <GatsbyImage image={getImage(node.img)} width={100} height={50} />
          <Text.sm>{node.type}</Text.sm>
          <Text.xsm>{node.techs.map((items, idx) => {
            <Link to={items.link}>
              <GatsbyImage image={getImage(items.logo)} />
            </Link>
          })}</Text.xsm>
          <Button dark > View Project </Button>
        </Wrapper>
      })}
      
    </RJContainer>
  )
}

const RJContainer = styled(Wrapper)`

`

const styles = css`
  justify-content: center;
  align-items: center;
`