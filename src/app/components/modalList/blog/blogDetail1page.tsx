import Image from "next/image";
import Link from "next/link";

export default function BlogDetail1Page() {
  return (
    <section className="flex h-full pb-10 flex-col gap-y-6 xl:h-96 xl:pb-0">
      <div className="flex flex-col gap-y-3">
        <h4 className="font-bold text-xl">Todo-list 원본 클론 코딩</h4>
        <p className="text-lg">
          create-react-app사용, 자바스크립트를 활용한 Todo-list 원본 클론 코딩
        </p>
      </div>
      <div>
        <p className="text-lg">학습 과정</p>
        <ul className="list-disc pl-5">
          <li>Create React App을 사용하여 기본 구조를 설정했습니다.</li>
          <li>
            Todo 항목을 추가, 삭제 및 완료하기 위해 기본적인 상태 관리
            훅(useState)을 학습했습니다.
          </li>
          <li>
            React의 컴포넌트 기능을 활용하여 Todo 항목을 나타내는 방법을
            학습했습니다.
          </li>
          <li>JSX 문법을 사용하여 UI를 렌더링하는 방법을 익혔습니다.</li>
        </ul>
      </div>
      <div className="pt-7 border-t">
        <Link
          href="https://velog.io/@yoouug72/series/%EB%A6%AC%EC%95%A1%ED%8A%B8-todo"
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
