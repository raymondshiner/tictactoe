import { createGlobalStyle } from "styled-components"

const GlobalSyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalSyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
