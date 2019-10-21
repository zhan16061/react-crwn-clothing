import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 20px 60px

    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }



  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }
`
