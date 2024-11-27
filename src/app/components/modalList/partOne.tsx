import Image from "next/image";
import Link from "next/link";

export default function PartOnePage() {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-between xl:gap-x-6">
      <video width="550" height="550" controls autoPlay loop muted>
        <source
          src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/video/mumnext.mp4"
          type="video/mp4"
        />
      </video>
      <div className="h-550 mt-4 flex flex-col justify-around">
        <div>
          <h4 className="font-bold text-xl">반려견 일기</h4>
          <p className="text-sm mt-4">
            Nextjs / Typescript / Supabase / Recoil / Tailwind
          </p>
        </div>
        <div>
          <p className="text-base">
            프로젝트 목표 : 반려견의 기록를 작성 하기 위한 일기
          </p>
          <p className="text-base mt-4">개발 과정</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Nextjs와 React 사용하여 기본 구조를 설정했습니다.</li>
            <li>상태 관리에는 Recoil을 사용했습니다.</li>
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
        <div className="py-5">
          <ul className="flex gap-x-6">
            <li>
              <Link href="https://yoouug.tistory.com/category/%EB%A9%88%EB%A9%88-%ED%86%A0%EC%9D%B4%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%28next.js%292" className="flex items-center">
                <Image
                  src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/icon/btn5.png"
                  width={50}
                  height={40}
                  alt="티스토리"
                />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/Minjeong79/mumnext" className="flex items-center">
                <Image
                  src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/icon/btn6.png"
                  width={40}
                  height={40}
                  alt="git"
                />
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center">
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
