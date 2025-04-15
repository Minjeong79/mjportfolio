"use client";
import { oneDB } from "@/lib/db";
import { IconType } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PartFivePage() {
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
        // autoPlay
        loop
        muted
      >
        <source
          src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/video/mumnext.mp4"
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
      <div className=" mt-4 flex flex-col justify-around xl:h-80vh xl:overflow-y-scroll">
        <div>
          <h4 className="font-bold text-xl">강아지 ai채팅(Nexjs 구현)</h4>
          <p className="text-base font-bold mt-6">기술 스택</p>
          <ul className="flex flex-row flex-wrap mt-2 justify-between xl:w-2/4">
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
              카카오 로그인, Supabase를 사용, platform.openai
            </li>
          </ul>
        </div>
        <div className="mt-6 mb-4">
          <p className="font-bold text-base">Platform.OpenAI</p>
          서버 컴포넌트에서만 사용할 수 있기 때문에,클라이언트와의 역할 분리를 명확히 해야 했습니다.
          어떤 데이터를 서버에서 처리하고, 어떤 데이터를 클라이언트로 전달할지를 명확히 나누는 설계가 필수였습니다.
          작업을 하면서 설계의 중요성을 알게 되었습니다.
          <p className="font-bold text-base mt-6">보안 키 관리 API Key</p>
          절대 클라이언트에 노출되어선 안 되기 때문에,
          서버에서만 접근할 수 있도록 환경 변수로 안전하게 관리했습니다.
          이 과정에서 키를 어떻게 구조적으로 숨길지, 어떤 방식으로 안전하게 활용할지에 대한 이해도 함께 쌓을 수 있었습니다.
          <br />
          <br />
          테스트 계정<br />
          첫 로그인 후 12시간 이후에 접속 해주세요
          <p className="text-sm">(인증 문제로 인해 12시간 이후에 확인 가능합니다)</p>
          ID : minj92@kakao.com <br />
          PW : fkdnxj0906!!
        </div>
        <div className="py-5 border-t border-slate-200 pb-48 xl:pb-0">
          <p className="text-sm">아이콘 클릭시 관련 된 주소로 이동 됩니다.</p>
          <ul className="flex gap-x-6 mt-4">
            <li>
              <Link
                href="https://yoouug.tistory.com/category/ai%20%EC%B1%84%ED%8C%85"
                className="flex items-center"
              >
                <Image
                  src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/icon/btn9.png"
                  width={50}
                  height={40}
                  alt="티스토리"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Minjeong79/chat"
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
                href="https://ai-chat-gamma-hazel.vercel.app/"
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
