// ** Styled component
import { createGlobalStyle } from "styled-components";

export const GlobalsStyles = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.text};
        transition: all 0.25s linear;
    }

    #nprogress {
      pointer-events: 'none';
      .bar {
        left: 0;
        top: 0;
        height: 3;
        width: '100%';
        z-index: 2000;
        position: 'fixed';
        /* backgroundColor: theme.palette.primary.main */
      }
    }
`;

export { lightTheme } from "./themes/light";
export { darkTheme } from "./themes/dark";
