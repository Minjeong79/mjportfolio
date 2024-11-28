"use client";

import { useEffect, useState } from "react";
import { useStore, useStoreModal } from "../store/store";
import { MainItemType } from "@/lib/type";
import { mainItemsBox } from "@/lib/db";
import Image from "next/image";

export default function CounterItem() {
  const { count } = useStore();
  const { num, value, innum } = useStoreModal();
  const [item, setItem] = useState<MainItemType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await mainItemsBox(count);
      if (data) {
        setItem(data);
      }
    };
    fetchData();
  }, [count]);
  return (
    <div className="absolute inset-x-0 text-center bottom-7 animate-bounce">
      {item.map((item) => (
        <button onClick={()=>innum(item.id, item.value)} key={item.id}>
          <Image
            src={item.imgurl}
            width={200}
            height={300}
            alt="아이템 이미지"
          />
        </button>
      ))}
    </div>
  );
}
