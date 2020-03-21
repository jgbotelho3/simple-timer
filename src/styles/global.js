import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        background-color: #2A2A72;
    }
         
    `

export default GlobalStyle;