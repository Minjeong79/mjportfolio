import Image from "next/image";
import CounterItem from "../../components/counter";

export default function Page() {
  return (
    <div className="mx-auto relative  ">
      <Image
        src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/main/main-img.gif"
        width={580}
        height={680}
        alt="뽑기 이미지"
      />
      <div className="animate-bounce xl:hidden">
        <Image
        className="mx-auto"
          src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/btn/down-icon.png"
          width={32}
          height={31}
          alt="아래로 스크롤 아이콘"
        />
      </div>
      <CounterItem />
    </div>
  );
}
