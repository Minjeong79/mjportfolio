"use client";
import { oneDB } from "@/lib/db";
import { IconType } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PartOnePage() {
  const [data, setData] = useState<IconType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const db = await oneDB();
      if (db) {
        setData(db);
      }
    };
    fetchData();
  }, []);

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
      <div className=" mt-4 flex flex-col justify-around xl:h-550 xl:overflow-y-scroll">
        <div>
          <h4 className="font-bold text-xl">반려견 일기(Nexjs 구현)</h4>
          <p className="text-base font-bold mt-6">기술 스택</p>
          <ul className="flex flex-row flex-wrap justify-between">
            {data?.map((item) => (
              <li key={item.id}>
                <Image
                  src={item.imgurl}
                  width={50}
                  height={50}
                  alt={item.name}
                />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-base font-bold mt-6">개발 과정</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Nextjs App Router 사용</li>
            <li>상태 관리에는 Recoil을 사용</li>
            <li>
              카카오 로그인, Supabase를 사용, 공공 api 활용, 카카오 지도 api
              활용
            </li>
            <li>
              React로 만든 기존 프로젝트에서 UI정리와 커뮤니티와 프로필이 추가
            </li>
            <li>커뮤니티에선 검색, 이미지 등록, 댓글 기능이 추가</li>
            <li>댓글 알림 기능이 추가 </li>
          </ul>
        </div>
        <div className="mt-6 mb-4">
          <p className="font-bold text-base">핵심 포인트 Nextjs</p>
          React에서는 React Router를 사용해 라우팅을 구성했지만, Next.js는 파일
          기반의 라우팅 시스템을 제공해 추가적인 설정 없이도 직관적으로 페이지를
          구성할 수 있었습니다. 이로 인해 개발 속도가 빨라지고 유지보수도
          쉬워졌습니다.
          <p className="font-bold text-base mt-6">핵심 포인트 Recoil</p>
          기존에 사용했던 Redux와 비교했을 때, Recoil은 사용 방법이 훨씬
          간결하고 직관적이었습니다. Redux는 보일러플레이트 코드가 많아 설정과
          관리 과정이 복잡한 반면, Recoil은 이러한 과정을 크게 단축시켜 개발
          시간을 절약할 수 있었습니다. 또한, Recoil의 상태 관리는 더 직관적으로
          구성되어 있어 코드를 읽고 이해하기가 훨씬 쉬웠습니다.
          <br />
          <br />
          테스트 계정
          <br /> ID : minj92@kakao.com <br />
          PW : fkdnxj0906!!
        </div>
        <div className="py-5 border-t border-slate-200 pb-48 xl:pb-0">
          <p className="text-sm">아이콘 클릭시 관련 된 주소로 이동 됩니다.</p>
          <ul className="flex gap-x-6 mt-4">
            <li>
              <Link
                href="https://yoouug.tistory.com/category/%EB%A9%88%EB%A9%88-%ED%86%A0%EC%9D%B4%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%28next.js%292"
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
                href="https://github.com/Minjeong79/mumnext"
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
              <Link
                href="https://mumnext.vercel.app/"
                className="flex items-center"
              >
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
