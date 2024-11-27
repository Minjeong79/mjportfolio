import Image from "next/image";
import Link from "next/link";

export default function BlogDetail2Page() {
  return (
    <section className="flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-3">
        <h4 className="font-bold text-xl">Todo-list 클론 코딩</h4>
        <p className="text-lg">
        create-react-app사용, 자바스크립트, 파이어베이스, google 로그인추가,  카카오 광고 적용
        </p>
      </div>
      <div>
        <p className="text-lg">학습 과정</p>
        <ul className="list-disc pl-5">
          <li>Firebase를 사용하여 데이터베이스를 관리하는 법을 학습 했습니다.</li>
          <li>
          Google 로그인을 통해 사용자가 로그인할 수 있는 기능을 구현하는 방법을 학습했습니다.
          </li>
          <li>
          카카오 광고도 직접 달아 보았습니다.
          </li>
          <li>기능들을 추가함으로써 Todo List를 보다 효과적으로 개선 하였습니다.</li>
        </ul>
      </div>
      <div className="pt-7 border-t">
        <Link href="https://velog.io/@yoouug72/todo-%ED%8C%8C%EC%9D%B4%EC%96%B4%EB%B2%A0%EC%9D%B4%EC%8A%A4-%EC%97%B0%EB%8F%99" className="flex items-center gap-2">
          <Image
            src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/icon/btn4.png"
            width={50}
            height={50}
            alt="벨로그"
          />
          <p className="text-base">yoouug72.log</p>
        </Link>
      </div>
    </section>
  );
}
