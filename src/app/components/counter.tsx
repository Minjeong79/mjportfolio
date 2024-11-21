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
      console.log(data);
      if (data) {
        setItem(data);
      }
    };
    fetchData();
  }, [count]);
  console.log(item);
  return (
    <div style={{ position: "absolute", bottom: "54px", left: "44px" }}>
      {item.map((item) => (
        <button onClick={()=>innum(item.id, item.value)}>
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
