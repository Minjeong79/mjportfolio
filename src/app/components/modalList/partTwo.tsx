import Image from "next/image";
import Link from "next/link";

export default function PartTwoPage() {
  return (
    <div className="flex flex-col h-screen overflow-y-scroll xl:flex-row xl:justify-between xl:gap-x-6 xl:h-auto xl:overflow-hidden">
      <video
        className="mx-auto"
        width="500"
        height="500"
        controls
        autoPlay
        loop
        muted
      >
        <source
          src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/video/mumnext.mp4"
          type="video/mp4"
        />
      </video>
      <div className="h-550 mt-4 flex flex-col justify-around xl:overflow-y-scroll">
        <div>
          <h4 className="font-bold text-xl">반려견 일기</h4>
          <p className="text-sm mt-4">
            vite를 사용하여 일기구현
            <br />
            React / Typescript / Supabase / Redux Toolkit / Tailwind
          </p>
        </div>
        <div>
          <p className="font-bold text-base mt-4">개발 과정</p>
          <ul className="list-disc pl-5 mt-2">
            <li>React 사용하여 기본 구조를 설정했습니다.</li>
            <li>상태 관리에는 Redux Toolkit을 사용했습니다.</li>
            <li>데이터 베이스와 스토리지는 Supabase를 사용 했습니다.</li>
            <li>카카오 로그인 구현 했습니다.</li>
            <li>
              공공 api 활용 하여 서울 구의 사용자의 위치에 따른 미세먼지 농도
              비교
            </li>
            <li>카카오 지도 api 활용 했습니다.</li>
            <li>Css 적용은 Tailwind를 사용 하여 구현 했습니다.</li>
          </ul>
        </div>
        <div className="mt-4 mb-4">
          <p className="font-bold text-base">개발도구 선택</p>
          초기에는 create-react-app을 사용하여 React 애플리케이션을 학습했지만,
          이후 vite를 접하게 되었을 때 그 속도와 효율성에 놀랐습니다. 이를 통해
          새로운 경험을 쌓고자 vite로 구현해보았습니다.
          <p className="font-bold mt-2 text-base">상태관리 선택</p>
          프론트엔드 개발에서 상태 관리는 매우 중요한 부분입니다. 다양한 상태
          관리 도구 중에서 Redux Toolkit 사용했습니다.
          <p className="font-bold mt-2 text-base">Css 선택</p>
          사전 정의된 유틸리티 클래스를 통해 반복 작업을 줄이고 코드의
          재사용성을 높일 수 있어 효율적으로 작업을 할 수 있다는 것을
          알았습니다. Css를 효과적으로 작성하기 위해 Tailwind Css를
          선택하였습니다.
        </div>
        <div className="py-5 border-t border-slate-200 pb-48 xl:pb-0">
          <ul className="flex gap-x-6">
            <li>
              <Link
                href="https://yoouug.tistory.com/category/%EB%A9%88%EB%A9%88-%ED%86%A0%EC%9D%B4%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%28React%291"
                className="flex items-center"
              >
                <Image
                  src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/icon/btn5.png"
                  width={50}
                  height={40}
                  alt="티스토리"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Minjeong79/mummum"
                className="flex items-center"
              >
                <Image
                  src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/icon/btn6.png"
                  width={40}
                  height={40}
                  alt="git"
                />
              </Link>
            </li>
            <li>
              <Link href="https://mummum-rust.vercel.app/" className="flex items-center">
                <Image
                  src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/icon/btn7.png"
                  width={40}
                  height={40}
                  alt="배포"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
