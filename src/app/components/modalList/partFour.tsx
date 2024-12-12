"use client";
import { fourDB } from "@/lib/db";
import { IconType } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function PartFourPage() {
  const [data, setData] = useState<IconType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const db = await fourDB();
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
        // autoPlay
        loop
        muted
      >
        <source
          src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/video/board.mp4"
          type="video/mp4"
        />
      </video>
      <div className="animate-bounce xl:hidden">
        <Image
        className="mx-auto"
          src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/btn/down-icon.png"
          width={32}
          height={31}
          alt="아래로 스크롤 아이콘"
        />
      </div>
      <div className="xl:h-550 mt-4 flex flex-col justify-around xl:overflow-y-scroll">
        <div>
          <h4 className="font-bold text-xl">게시판</h4>
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
          <p className="text-base mt-4 font-bold">게시판1 개발 과정</p>
          <ul className="list-disc pl-5 mt-2">
            <li>React 사용</li>
            <li>상태관리 Redux Toolkit 사용</li>
            <li>Css는 Scss를 사용 하여 구현</li>
            <li>데이터 베이스 , storage는 firebase 사용</li>
          </ul>
        </div>
        <div>
          <p className="text-base mt-4 font-bold">게시판2 개발 과정</p>
          <ul className="list-disc pl-5 mt-2">
            <li>React 사용</li>
            <li>상태관리 Context API 사용</li>
            <li>Css 적용은 Tailwind를 사용 하여 구현</li>
            <li>데이터 베이스 , storage는 firebase 사용</li>
          </ul>
        </div>
        <h4></h4>
        <div className="mt-4 mb-4">
          <p className="font-bold text-base">핵심 포인트 Context API</p>
          React의 Context API는 상태 관리 라이브러리를 사용하지 않고도 React에
          내장된 훅을 통해 상태 관리를 할 수 있는 도구입니다. 이는 Redux
          Toolkit에 비해 진입장벽이 낮은 편입니다. 그러나 TypeScript와 함께
          사용할 경우, 초기값을 타입에 맞게 정확히 설정해야 한다는 점을 유의해야
          하는 것을 알았습니다.
          <div className="py-5 border-t border-slate-200 ">
            <p className="text-sm">아이콘 클릭시 관련 된 주소로 이동 됩니다.</p>
            <p className="font-bold text-base mt-4">게시판1</p>
            <ul className="flex gap-x-6">
              <li>
                <Link
                  href="https://velog.io/@yoouug72/ReacttsRedux-%EA%B2%8C%EC%8B%9C%ED%8C%90-%EB%A7%8C%EB%93%A4%EA%B8%B0"
                  className="flex items-center"
                >
                  <Image
                    src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/icon/btn4.png"
                    width={50}
                    height={40}
                    alt="벨로그"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Minjeong79/react-board"
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
                  href="https://board-bff0f.web.app/"
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
          <div className="py-5 pb-48 xl:pb-0">
            <p className="font-bold text-base">게시판2</p>
            <ul className="flex gap-x-6 ">
              <li>
                <Link
                  href="https://velog.io/@yoouug72/react-vite-typescript-tailwind-%EC%84%B8%ED%8C%85"
                  className="flex items-center"
                >
                  <Image
                    src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/icon/btn4.png"
                    width={50}
                    height={40}
                    alt="벨로그"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Minjeong79/reactBoard2"
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
                  href="https://new-context-board.web.app/"
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
    </div>
  );
}
