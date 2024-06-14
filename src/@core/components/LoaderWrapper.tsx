"use client";

// ** next
import { usePathname } from "next/navigation";

// ** react
import { ReactNode, useEffect } from "react";

// ** Loader Import
import NProgress from "nprogress";

const LoaderWrapper = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname();

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };

    const handleComplete = () => {
      NProgress.done();
    };

    handleComplete();

    return () => {
      handleStart();
    };
  }, [pathName]);

  return <>{children}</>;
};

export default LoaderWrapper;
