import * as React from "react"
import { Wrapper } from "../components/styled/Wrapper"

const styles = {
  justifyContent: 'center',
  alignItems: 'center',
}
const IndexPage = () => {
  return (
    <main>
      <Wrapper display='flex' style={styles}>
        Empowering Your Business to Succeed with  Tech-Driven Solutions
        <button>Services</button>
      </Wrapper>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
