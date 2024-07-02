// ** Styled component
import { createGlobalStyle } from "styled-components";

export const GlobalsStyles = createGlobalStyle`
	@font-face {
		font-family: 'FontBold';
		src: url('/fonts/SF-Pro-Text-Bold.otf') format('woff2'),
			url('/fonts/SF-Pro-Text-Bold.otf') format('woff');
		font-weight: normal;
		font-style: normal;
	}
		@font-face {
		font-family: 'FontRegular';
		src: url('/fonts/SF-Pro-Text-Regular.otf') format('woff2'),
			url('/fonts/SF-Pro-Text-Regular.otf') format('woff');
		font-weight: normal;
		font-style: normal;
	}

	// reset css
	* {
		margin: 0;
		padding: 0;
	}

	body {
		/* background-color: ${(props) => props.theme.body}; */
		/* color: ${(props) => props.theme.text}; */
		transition: all 0.25s linear;
		font-family: FontRegular;
	}


`;

export { lightTheme } from "./themes/light";
export { darkTheme } from "./themes/dark";
