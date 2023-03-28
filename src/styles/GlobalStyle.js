import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Nunito', sans-serif;
    /* esto es para evitar que se agrande mas el vw por la
    animacion de scale de las fotos */
    overflow-x: hidden;
}

a {
    font-size: 1.1rem;
}

span {
    font-weight: bold;
    color: #11B5E4;
}

html {
    scroll-behavior: smooth;
    @media (max-width: 1700px){
        font-size: 75%;
    }
    @media (max-width: 1250px){
        font-size: 80%;
    }
}
`;

export default GlobalStyle;