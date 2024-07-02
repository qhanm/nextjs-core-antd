import { ReactElement } from "react";
import LayoutWrapper from "src/@core/components/LayoutWrapper";
import BlankLayout from "src/@core/layouts/BlankLayout";

const LoginPage = () => {
  return (
    <LayoutWrapper
      getLayout={(page: ReactElement) => <BlankLayout>{page}</BlankLayout>}
    >
      <>text</>
    </LayoutWrapper>
  );
};

export default LoginPage;
