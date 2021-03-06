import { createGlobalStyle } from "styled-components";
import { primaryColor } from "./variables";
//Mobile com 24px, Tablet com 18px e Web com 16px.

export default createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;

    }
    body {
        font-family: sans-serif;
        color:#EBF2FA;
        font-size: 15px !important;
        background-color:${primaryColor};


        @media (min-width: 768px) {
            font-size: 18px !important;
        }

        @media (min-width: 1024px) {
            font-size: 16px !important;
        }
    }
` 