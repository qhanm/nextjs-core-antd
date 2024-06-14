// ** react
import { ReactNode } from "react";

// ** antd
import { ConfigProvider } from "antd";

// ** styled
import { ThemeProvider } from "styled-components";

// ** type
import { TTheme } from "src/type/themes";

// ** theme
import { GlobalsStyles } from "src/styles/theme";

type Props = {
  theme: TTheme;
  children: ReactNode;
};

export const ThemeComponent = (props: Props) => {
  const { theme, children } = props;
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: theme.antd.colorPrimary,
        },
      }}
    >
      <ThemeProvider theme={theme.styled}>
        <GlobalsStyles />
        {children}
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default ThemeComponent;
