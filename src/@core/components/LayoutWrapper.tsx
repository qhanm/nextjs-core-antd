import { ReactElement, ReactNode } from "react";
import UserLayout from "../layouts/UserLayout";

type ILayoutWrapper = {
  getLayout?: (page: ReactElement) => ReactNode;
  children: ReactNode;
};
const LayoutWrapper = (props: ILayoutWrapper) => {
  const { getLayout, children } = props;
  return (
    <>
      {getLayout ? (
        <>{getLayout(<>{children}</>)}</>
      ) : (
        <UserLayout>{children}</UserLayout>
      )}
    </>
  );
};

export default LayoutWrapper;
