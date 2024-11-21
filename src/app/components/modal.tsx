"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useStoreModal } from "../store/store";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const { num, value, innum } = useStoreModal();

  useEffect(() => {
    setIsMounted(true);
    if ( !dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({
        top: 0,
      });
    }
  }, [value]);

  if (!isMounted) {
    return null;  // 서버 사이드에서는 렌더링하지 않음
  }
  const modalRoot = document.getElementById("modal_root");
  if (!modalRoot) {
    return null;
  }
  return createPortal(
    <dialog
      ref={dialogRef}
      className="overflow-hidden rounded-lg focus:outline-none"
      onClick={(e) => {
        if (e.target === dialogRef.current) { // 정확히 모달 외부 클릭인지 확인
          console.log('click')
          setIsMounted(false);
          innum(num,false);
          dialogRef.current.close(); // 모달 닫기
         
         
          router.back(); // 이전 페이지로 이동
          
        }
      }}
    >
      {children}
    </dialog>,
    document.getElementById("modal_root") as HTMLElement
  );
}
