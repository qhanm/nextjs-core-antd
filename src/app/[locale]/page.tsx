import { ReactNode } from "react";

export default function Home({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
