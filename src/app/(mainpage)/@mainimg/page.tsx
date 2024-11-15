import Image from "next/image";
import Counter from "../../components/counter";

export default function Page(){
   
    return <div className="w-1/2">
         <Image
        src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/main/main-img.png"
        width={580}
        height={680}
        alt="뽑기 이미지"
      />
      <Counter/>
         {/* <button onClick={handleClick}>누르세요!</button>
         {btnClick  && (  <Modal btnClick ={btnClick} >
            안녕하세요dd 여기에요

            <button onClick={handleCloseModal}>닫기</button>
        </Modal>)} */}
      
    </div>
}