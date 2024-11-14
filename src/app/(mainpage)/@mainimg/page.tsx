'use client'
import { useState } from "react";
import Modal from "../../components/modal";
import Image from "next/image";

export default function Page(){
    const [btnClick, setBtnClick] =  useState(false);
    const handleClick = ()=>{
        setBtnClick(true);
        console.log(btnClick);
    }

    const handleCloseModal = () => {
        setBtnClick(false);
    }
    return <div className="w-1/2">
        <Image src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/main/main-img.png" width={580} height={680} alt="뽑기 이미지"/>
         {/* <button onClick={handleClick}>누르세요!</button>
         {btnClick  && (  <Modal btnClick ={btnClick} >
            안녕하세요dd 여기에요

            <button onClick={handleCloseModal}>닫기</button>
        </Modal>)} */}
      
    </div>
}