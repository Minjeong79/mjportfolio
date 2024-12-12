import Image from "next/image";
import Link from "next/link";

export default function CareerDetail3Page() {
  return (
    <section className="flex flex-col h-full xl:w-full xl:gap-x-8 xl:pb-0">
      <div className="flex flex-col">
        <h4 className="font-bold text-xl">디자인플러스와우</h4>
        <p className="text-lg">(2018.06-2019.09)</p>
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-y-4 ">
          자사 홈페이지 작업 및 유지보수(첫 퍼블리싱 작업)
          <br />
          기술 세부 사항: Html, Css, 플러그인을 사용
          <br />
          <br />
          상품 카테고리에 따라 레이아웃을 구성하여 사용자들이 원하는 상품을 쉽게 찾을
          수 있도록 했습니다.상품 설명과 가격을 명확하게 표시하여 사용자들이
          신속하고 효율적으로 정보를 파악할 수 있도록 했습니다.
          <Image
            src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/history/history-img2.png"
            width={500}
            height={180}
            alt="디벨로퍼제이 공식 홈페이지, 진심 어플"
          />
        </div>
      </div>
    </section>
  );
}
