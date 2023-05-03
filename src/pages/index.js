import * as React from "react"
import Hero from "../components/hero_banner/Hero"
import { Heading } from "../components/styled/Headings"

const IndexPage = () => {
  console.log(Heading.xl)
  return (
    <main>
      <Hero 
        display='flex' 
        fd='column' 
        height='600px'
        color='#eeeeee'
      >
        <Heading.l width="20%">Empowering Your Business to Succeed with  Tech-Driven Solutions</Heading.l>
        <button>About Us</button>
      </Hero>
    </main>
  )
}


export default IndexPage

export const Head = () => <title>Home Page</title>
