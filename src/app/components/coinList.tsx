"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { btnBox, coinBox } from "@/lib/db";
import { BtnType, CoinType } from "@/lib/type";
import { useStore, useStoreModal } from "../store/store";

export default function ConinList() {
  const { numitem } = useStore();
  const { num, value, innum } = useStoreModal();

  const [data, setData] = useState<CoinType[]>([]);
  const [dataBtn, setDataBtn] = useState<BtnType[]>([]);

  useEffect(() => {
    const fetchCoinBox = async () => {
      const isData = await coinBox();
      const isDataBtn = await btnBox();
      if (isData && isDataBtn) {
        setData(isData);
        setDataBtn(isDataBtn);
      }
    };
    fetchCoinBox();
  }, []);

  const handleClickMove = () => {
    window.scrollTo(0, 0);
  };
  return (
      <div className="mt-3 xl:mt-0">
        <p className="mb-2 text-center">동전을 선택해 주세요!</p>
        <div className="bg-white p-3 rounded-lg drop-shadow-bxl">
          <ul className="flex justify-around xl:gap-2">
            {data.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    numitem(item.id + 2);
                    handleClickMove();
                  }}
                  className="focus:outline-none"
                >
                  <Image
                    src={item.imgurl}
                    width={60}
                    height={60}
                    alt="동전 이미지"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
  );
}
