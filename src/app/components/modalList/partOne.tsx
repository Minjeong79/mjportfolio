import Image from "next/image";
import Link from "next/link";

export default function PartOnePage() {
  return (
    <div className="flex flex-col h-screen overflow-y-scroll xl:flex-row xl:justify-between xl:gap-x-6">
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
      <div className=" mt-4 flex flex-col justify-around xl:h-550 xl:overflow-y-scroll">
        <div>
          <h4 className="font-bold text-xl">반려견 일기</h4>
          <p className="text-sm mt-4">
            Nextjs / Typescript / Supabase / Recoil / Tailwind
          </p>
        </div>
        <div>
          <p className="text-base">프로젝트 목표 : 반려견 일기 / 커뮤니티</p>
          <p className="text-base font-bold mt-4">개발 과정</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Nextjs 사용하여 기본 구조를 설정했습니다.</li>
            <li>상태 관리에는 Recoil을 사용했습니다.</li>
            <li>
              React로 만든 프로젝트에서 UI정리와 커뮤니티와 프로필이 추가
              되었습니다.
            </li>
            <li>
              커뮤니티에선 검색, 이미지 등록, 댓글 기능이 추가 되었습니다.
            </li>
            <li>댓글 알림 기능이 추가 되었습니다.</li>
          </ul>
        </div>
        <div className="mt-4 mb-4">
          <p className="font-bold text-base">개발도구 선택</p>
          Next.js를 접하며 SEO, SSR, SSG 등 다양한 기능을 제공한다는 점에서
          효율성을 경험했습니다. 라우팅과 이미지 최적화 같은 편리한 기능을 통해
          새로운 프로젝트를 Next.js로 구현했습니다.
          <p className="font-bold mt-2 text-base">상태관리 선택</p>
          기존 프로젝트와는 다르게 Recoil 사용했습니다.
          <p className="font-bold mt-2 text-base">App Router</p>
          최신 트렌드에 맞춰 작업하기 위해 App Router를 선택했습니다. 
          서버 컴포넌트와 클라이언트 컴포넌트를 혼합하여 사용하는 경험을
          쌓을 수 있었습니다. 다양한 라우터 방식을 경험하며 더 나은 유지보수성과
          성능 최적화를 추구하고자 했습니다.
        </div>
        <div className="py-5 border-t border-slate-200 pb-28 xl:pb-0" >
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
