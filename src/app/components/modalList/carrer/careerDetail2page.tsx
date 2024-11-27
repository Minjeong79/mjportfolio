import Image from "next/image";
import Link from "next/link";

export default function CareerDetail2Page() {
  return (
    <section className="flex gap-x-8 h-80 overflow-y-scroll">
      <div className="flex flex-col">
        <h4 className="font-bold text-xl">디벨로퍼제이</h4>
        <p className="text-lg">
        (2019.12-2021.02)
        </p>
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-y-4 ">
          자사 홈페이지 작업 및 유지보수<br/>
          기술 세부 사항: Html, Css<br/><br/>
          홈페이지 퍼블리싱 프로젝트에서는 Html, Css를 
          기반으로하여 웹사이트를 제작하고, 웹 반응형 디자인을  적용하여 다양한 디바이스에서 최적화 작업을 했습니다.<br/><br/>
          진심 어플 디자인 작업 (서비스 종료)<br/>
          기술 세부 사항: Photoshop, Illustrator, XD<br/>
          어플리케이션의 UI 및 UX 디자인을 담당하였습니다.
          <Image src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/history/history-img1.png" width={500} height={180} alt="디벨로퍼제이 공식 홈페이지, 진심 어플"/>
        </div>
      </div>
    </section>
  );
}
