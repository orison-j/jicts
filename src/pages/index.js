import * as React from "react"
import Hero from "../components/hero_banner/Hero"
import { Heading } from "../components/elements/Headings"
import { Button } from "../components/elements/Buttons"

const IndexPage = () => {
  console.log(Heading.xl)
  return (
    <main>
      <Hero 
        p = '2rem 0'
        display='flex' 
        fd='column' 
        height='600px'
        color='#eeeeee'
      >
        <Heading.l 
        width='70%'
        align='center'
        bold
        >Empowering Your Business to Succeed with  Tech-Driven Solutions</Heading.l>
        <Button>About Us</Button>
      </Hero>
    </main>
  )
}


export default IndexPage

export const Head = () => <title>Home Page</title>
