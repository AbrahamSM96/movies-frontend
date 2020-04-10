import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  body {
    background: #323232;
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
    color: #ffffff;
    /* con margin: 0 auto se centra la aplicacion */
    margin: 0 auto;
    max-width: 500px;
    /* evita que haga rebotes el scroll */
    overscroll-behavior: none;
    width: 100%; 
  }


  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    /* no queremos que las imagenes se coloquen horizontalmente */
    overflow: hidden;
    /* la altura como minimo */
    min-height: 100vh;
    padding-bottom: 10px;
  }
  .modal-content {
  background-color: #323232 !important;
  color: #cecece !important;
}

::placeholder {
  color: #cecece;
}

`;
