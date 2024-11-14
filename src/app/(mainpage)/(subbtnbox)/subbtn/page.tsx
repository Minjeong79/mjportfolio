import Image from "next/image";
import History from "../../components/history";

export default function Page() {
  return (
    <div className="flex gap-8">

      <div className="">
        <p className="mb-2">동전을 선택 해주세요!</p>
        <div className="bg-white p-3 rounded-lg">
          <ul className="flex gap-2">
            <li>
              <Image src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/coin/coin.png" width={60} height={60} alt="동전 이미지"/>
            </li>
            <li>
              <Image src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/coin/coin.png" width={60} height={60} alt="동전 이미지"/>
            </li>
            <li>
              <Image src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/coin/coin.png" width={60} height={60} alt="동전 이미지"/>
            </li>
            <li>
              <Image src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/coin/coin.png" width={60} height={60} alt="동전 이미지"/>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <p className="mb-2">경력 / 기술 스택 / 블로그 </p>
        <div className="bg-white p-3 rounded-lg">
         <History/>
        </div>
      </div>
    </div>
  );
}
