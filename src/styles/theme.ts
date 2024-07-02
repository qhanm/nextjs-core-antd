// ** Styled component
import { createGlobalStyle } from "styled-components";

export const GlobalsStyles = createGlobalStyle`
    body {
        /* background-color: ${(props) => props.theme.body}; */
        /* color: ${(props) => props.theme.text}; */
        transition: all 0.25s linear;
    }
`;

export { lightTheme } from "./themes/light";
export { darkTheme } from "./themes/dark";
