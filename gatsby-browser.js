const React = require("react")
const { default: GlobalStyle } = require("./src/globalStyles")
// const Layout = require("./src/components/layout")

// Logs when the client route changes
// exports.onRouteUpdate = ({ location, prevLocation }) => {
//   console.log("new pathname", location.pathname)
//   console.log("old pathname", prevLocation ? prevLocation.pathname : null)
// }

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => (
  <>
    <GlobalStyle />
      {element}
  </>
)