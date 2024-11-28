"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { btnBox, coinBox } from "@/lib/db";
import { BtnType, CoinType } from "@/lib/type";
import { useStore, useStoreModal } from "../store/store";

export default function HistoryBtnList() {
  const {numitem } = useStore();
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

  const handleClickMove = ()=>{
    window.scrollTo(0, 0);
    console.log('here!!');
  }
  return (
    <div className="flex flex-col gap-8 xl:flex-row xl:justify-evenly">
      <div className="mt-8 xl:mt-0">
        <p className="mb-2 text-center">동전을 선택 해주세요!</p>
        <div className="bg-white p-3 rounded-lg">
          <ul className="flex justify-around xl:gap-2">
            {data.map((item) => (
              <li key={item.id}>
                <button onClick={()=>{numitem(item.id+2); handleClickMove();} } className="focus:outline-none">
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
      <div className="">
        <p className="mb-2 text-center">경력 / 기술 스택 / 블로그 </p>
        <div className="bg-white p-3 rounded-lg">
        <ul className="flex justify-around xl:gap-2">
        {dataBtn.map((item) => (
              <li key={item.id} >
                <button onClick={()=>innum(item.id, item.value)} className="focus:outline-none">
                  <Image
                    src={item.imgurl}
                    width={60}
                    height={60}
                    alt="아이콘"
                  />
                </button>
              </li>
            ))}
        </ul>
        </div>
      </div>
    </div>
  );
}
