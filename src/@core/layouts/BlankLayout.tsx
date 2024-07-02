"use client";

import { Layout } from "antd";
import { ReactNode } from "react";
import styled from "styled-components";

const BlankLayoutWrapper = styled(Layout)`
  height: 100vh;
  margin: auto;
`;

type IBlankLayout = {
  children: ReactNode;
};
const BlankLayout = ({ children }: IBlankLayout) => {
  return <BlankLayoutWrapper>{children}</BlankLayoutWrapper>;
};

export default BlankLayout;
