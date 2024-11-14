"use client";
import Image from "next/image";
import { useState } from "react";
import { useRecoilState } from 'recoil';
import { modalState } from "../recoil/atom";

export default function History() {
    const [modal, setModal] = useRecoilState(modalState);
 
    // const handleOpenModal = () => (
    //     setModal(true)
    // )
    
    return (
    <ul className="flex gap-4">
      <li className="">
        <button>
          <Image
            className="drop-shadow-blackxl"
            src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/icon/btn1.png"
            width={60}
            height={60}
            alt="버튼 이미지"
          />
        </button>
      </li>
      <li>
        <button>
        <Image
          className="drop-shadow-blackxl"
          src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/icon/btn2.png"
          width={60}
          height={60}
          alt="버튼 이미지"
        />
        </button>
        
      </li>
      <li>
        <button>
        <Image
          className="drop-shadow-blackxl"
          src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/icon/btn3.png"
          width={60}
          height={60}
          alt="버튼 이미지"
        />
        </button>
      </li>
    </ul>
  );
}
