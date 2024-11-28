import Image from "next/image";
import Link from "next/link";

export default function BlogDetail3Page() {
  return (
    <section className="flex h-85vh flex-col gap-y-6">
      <div className="flex flex-col gap-y-3">
        <h4 className="font-bold text-xl">Todo-list 클론 코딩 Ts</h4>
        <p className="text-lg">
          create-react-app사용, 자바스크립트, 파이어베이스, google 로그인추가,
          카카오 광고 적용
        </p>
      </div>
      <div>
        <p className="text-lg">학습 과정</p>
        <ul className="list-disc pl-5">
          <li>
            TypeScript를 도입하여 코드의 타입을 명시적으로 지정함으로써 코드의
            안정성을 높였습니다.
          </li>
          <li>
            Firebase를 사용하여 데이터베이스를 관리하는 법을 학습 했습니다.
          </li>
          <li>
            Google 로그인을 통해 사용자가 로그인할 수 있는 기능을 구현하는
            방법을 학습했습니다.
          </li>
          <li>카카오 광고도 직접 달아 보았습니다.</li>
        </ul>
      </div>
      <div className="pt-7 border-t">
        <Link
          href="https://velog.io/@yoouug72/ReactTs-Todolist-%EC%84%A4%EC%A0%95"
          className="flex items-center gap-2"
        >
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
