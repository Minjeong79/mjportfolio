"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRecoilValue } from "recoil";
import { modalState } from "../recoil/atom";
import { modalSelectState } from "../recoil/selectors";

export default function Modal({
  children,
  
}: {
  children: ReactNode;
}) {
  const moalValue = useRecoilValue(modalSelectState)
  const dialogRef = useRef<HTMLDialogElement>(null);
    

    useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({
        top: 0,
      });
    }
  }, [moalValue]);
  console.log(moalValue);

  return createPortal(
    <dialog ref={dialogRef} className="" style={{background:"red", width:'100px', height:'100px'}}>{children}</dialog>,
    document.getElementById("modal_root") as HTMLElement
  );
}
