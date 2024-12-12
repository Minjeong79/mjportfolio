"use client";
import { threeDB } from "@/lib/db";
import { IconType } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function PartThreePage() {
  const [data, setData] = useState<IconType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const db = await threeDB();
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
          src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/video/catcatch.mp4"
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
          <h4 className="font-bold text-xl">미니 게임(PC Ver)</h4>
          <p className="text-base font-bold mt-6">기술 스택</p>
          <ul className="flex flex-row flex-wrap mt-2 justify-between xl:w-2/4">
            {data.map((item) => (
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
          <p className="text-base mt-4 font-bold">개발 과정</p>
          <ul className="list-disc pl-5 mt-2">
            <li>React 사용</li>
            <li>상태 관리에는 Context API을 사용</li>
            <li>사용자 로그인은 firebase에 익명으로 가입되는 방법으로 구현</li>
            <li>데이터 베이스 , storage는 firebase 사용</li>
            <li>
              오디오를 재생 하기위해 Howler 라이브러리를 사용 했습니다. 게임
              시작 버튼 클릭시 Bgm이 시작
            </li>
            <li>
              게임이끝나면 팝업이 뜨고 랭킹 화면으로 이동하여 실시간 등수 확인이
              가능
            </li>
            <li>Css 적용은 Tailwind를 사용 하여 구현</li>
          </ul>
        </div>
        <h4></h4>
        <div className="mt-4 mb-4">
          <p className="font-bold text-base">핵심 포인트 Context API</p>
          상태 관리를 구현하며 보일러플레이트 코드를 이해하게 되었고, 필요한
          정보를 상태에 담아 가져오는 방법이 효율적이라는 것을 깨달았습니다.
          게시판2 프로젝트에서 Context API를 사용한 경험을 토대로, 이를 더
          익숙하게 다루기 위해 미니 게임에도 적용해 보았습니다. 특히, 사용자가
          선택한 난이도를 상태로 저장하고 가져오는 기능을 구현하면서 Context
          API를 활용한 상태 관리의 편리함을 더욱 실감할 수 있었습니다.
        </div>
        <div className="py-5 border-t border-slate-200 pb-48 xl:pb-0">
          <p className="text-sm">아이콘 클릭시 관련 된 주소로 이동 됩니다.</p>
          <ul className="flex gap-x-6 mt-2">
            <li>
              <Link
                href="https://velog.io/@yoouug72/%EA%B3%A0%EC%96%91%EC%9D%B4-%EA%B2%8C%EC%9E%84-%EC%84%B8%ED%8C%85"
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
                href="https://github.com/Minjeong79/catCatch"
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
                href="https://imggame-24c7e.web.app/"
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
