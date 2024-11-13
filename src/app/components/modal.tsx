"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  children,
  btnClick,
}: {
  children: ReactNode;
  btnClick: boolean;
}) {
    // const [btn, setBtn] = useState(btnClick);
  const dialogRef = useRef<HTMLDialogElement>(null);
    console.log(btnClick);
  
    useEffect(() => {
    if (btnClick === true) {
        dialogRef.current?.open
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({
        top: 0,
      });
    }
  }, [btnClick]);

  return createPortal(
    <dialog ref={dialogRef}>{children}</dialog>,
    document.getElementById("modal_root") as HTMLElement
  );
}
