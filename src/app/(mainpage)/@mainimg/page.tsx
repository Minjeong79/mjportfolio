import Image from "next/image";
import CounterItem from "../../components/counter";

export default function Page() {
  return (
    <div className="mx-auto relative  ">
      <Image
        src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/main/main-img2.png"
        width={580}
        height={680}
        alt="뽑기 이미지"
      />

      <CounterItem />
    </div>
  );
}
