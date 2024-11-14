"use client";
import { RecoilRoot } from "recoil";

export default function ClientLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <RecoilRoot>
        <main className="">
          {children}
        </main>
      </RecoilRoot>
    );
  }