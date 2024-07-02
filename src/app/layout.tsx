import type { Metadata } from "next";
import LoaderWrapper from "src/@core/components/LoaderWrapper";
import {
  AppContextProvider,
  AppContextWrapper,
} from "src/@core/context/AppContext";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Template",
  description: "This is template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LoaderWrapper>
          <AppContextProvider>
            <AppContextWrapper>
              <Suspense fallback={<>loading</>}>{children}</Suspense>
            </AppContextWrapper>
          </AppContextProvider>
        </LoaderWrapper>
      </body>
    </html>
  );
}
