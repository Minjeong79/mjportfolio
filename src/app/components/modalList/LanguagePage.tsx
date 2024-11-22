"use client";
import { lIconBox } from "@/lib/db";
import { IconType } from "@/lib/type";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LanguagePage() {
  const [data, setData] = useState<IconType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await lIconBox();
      if (data) {
        setData(data);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-y-12">
      <h3 className="font-bold text-3xl">기술 스택</h3>
        <div className="flex flex-col gap-y-4">
          <h4 className="text-2xl">라이브러리</h4>
          <ul className="flex gap-x-8">
            {data.slice(0, 6).map((item) => (
              <li key={item.id}>
                <Image src={item.imgurl} width={90} height={90} alt="" />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-y-4">
          <h4 className="text-2xl">다루어본 도구</h4>
          <ul className="flex gap-x-8">
            {data.slice(6, 13).map((item) => (
              <li key={item.id}>
                <Image src={item.imgurl} width={90} height={90} alt="" />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-y-4">
          <h4 className="text-2xl">언어/스크립트</h4>
          <ul className="flex gap-x-8">
            {data.slice(13, 18).map((item) => (
              <li key={item.id}>
                <Image src={item.imgurl} width={90} height={90} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}