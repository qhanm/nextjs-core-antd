import { ReactNode } from "react";

type IUserLayout = {
  children: ReactNode;
};
const UserLayout = ({ children }: IUserLayout) => {
  return <>{children}</>;
};

export default UserLayout;
