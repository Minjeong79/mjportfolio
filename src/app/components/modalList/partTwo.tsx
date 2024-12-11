"use client";
import { twoDB } from "@/lib/db";
import { IconType } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function PartTwoPage() {
  const [data, setData] = useState<IconType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const db = await twoDB();
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
          src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/video/mumreact.mp4"
          type="video/mp4"
        />
      </video>
      <div className=" mt-4 flex flex-col justify-around xl:h-550 xl:overflow-y-scroll">
        <div>
          <h4 className="font-bold text-xl">반려견 일기(React 구현)</h4>
          <p className="text-base font-bold mt-6">기술 스택</p>
          <ul className="flex flex-row flex-wrap justify-between">
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
          <p className="font-bold text-base mt-6">개발 과정</p>
          <ul className="list-disc pl-5 mt-2">
            <li>React 사용</li>
            <li>상태 관리에는 Redux Toolkit을 사용</li>
            <li>데이터 베이스와 스토리지는 Supabase를 사용</li>
            <li>카카오 로그인 구현 했습니다.</li>
            <li>
              공공 api 활용 하여 서울 구의 사용자의 위치에 따른 미세먼지 농도
              비교
            </li>
            <li>카카오 지도 api 활용</li>
            <li>Css 적용은 Tailwind를 사용 </li>
          </ul>
        </div>
        <div className="mt-6 mb-4">
          <p className="font-bold text-base mb-2">핵심 포인트 Redux Toolkit</p>
          Redux Toolkit은 프론트엔드에서 많이 사용되는 상태 관리 라이브러리로,
          프로젝트에서 이를 선택해 구현해보았습니다.
          <br /><br /> Redux Toolkit은 상태 관리의 표준화된 방식과 강력한 기능을
          제공한다는 점에서 매력적이었습니다. 하지만 사용해보면서 설정해야 할
          요소들이 많아 초기 학습 곡선이 높다고 느꼈습니다.<br /> 특히,
          슬라이스(slice) 생성, 스토어 구성, 미들웨어 설정 등 다양한 초기 설정
          작업이 필요해 처음 접근하기에는 다소 복잡하게 느껴질 수 있었습니다.
          이러한 이유로, Redux Toolkit은 확장성과 구조화된 상태 관리에는 강점을
          보이지만, 단순한 프로젝트에서는 진입 장벽이 높다고 생각하게
          되었습니다.<br /><br /> 이를 통해 Redux Toolkit의 장점과 한계를 직접 경험할 수
          있었으며, 프로젝트 요구사항에 맞는 상태 관리 라이브러리를 선택하는
          기준에 대해 더 깊이 이해할 수 있었습니다.
        </div>
        <div className="py-5 border-t border-slate-200 pb-48 xl:pb-0">
        <p className="text-sm">아이콘 클릭시 관련 된 주소로 이동 됩니다.</p>
        <ul className="flex gap-x-6 mt-4">
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
              <Link
                href="https://mummum-rust.vercel.app/"
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
