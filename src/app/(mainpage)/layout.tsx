import { ReactNode } from "react";

export default function Layout({
  children,
  mainimg,
  sub,
  subbtn
}: {
  children: ReactNode;
  mainimg: ReactNode;
  sub: ReactNode;
  subbtn: ReactNode;
}) {
  return <div>{children}{mainimg}{sub}{subbtn}</div>;
}

