import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { ReactNode } from "react";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "정민정 포트폴리오",
  description: "반갑습니다 프론트 개발자 정민정 입니다.",
};

export default function RootLayout({children,mainimg,sub,subbtn,modal}:{ children: ReactNode;
  mainimg: ReactNode;
  sub: ReactNode;
  subbtn: ReactNode;
  modal: ReactNode;}
) {
  return (
    <html lang="kr">
      <body
        className={`bg-[#D9DEFC] w-full h-full`}
      >
      
        <div className="flex justify-between p-16">
          {mainimg}
            <div className="flex flex-col w-1/2 justify-evenly">
            {sub}
            {subbtn}
            </div>
           
          </div>
          {modal}
          <div id="modal_root"></div>
      </body>
    </html>
  );
}

