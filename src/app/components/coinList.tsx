"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { btnBox, coinBox } from "@/lib/db";
import { BtnType, CoinType } from "@/lib/type";
import { useStore, useStoreModal } from "../store/store";

export default function ConinList() {
  const { numitem } = useStore();
  // const { num, value, innum } = useStoreModal();

  // const [data, setData] = useState<CoinType[]>([]);
  // const [dataBtn, setDataBtn] = useState<BtnType[]>([]);
  const [numCoin, setNumCoin] = useState(0);

  // useEffect(() => {
  //   const fetchCoinBox = async () => {
  //     const isData = await coinBox();
  //     const isDataBtn = await btnBox();
  //     if (isData && isDataBtn) {
  //       setData(isData);
  //       setDataBtn(isDataBtn);
  //     }
  //   };
  //   fetchCoinBox();
  // }, []);

  const handleClickMove = () => {
    window.scrollTo(0, 0);
  };

  const handleCoin = (num:number) => {
    numitem(num + 2);
    setNumCoin(0)
    handleClickMove();
  }
  return (
    <div className="mt-3 xl:mt-0">
      <div className="flex justify-center items-center">
        <p className="mb-2 text-center">동전을 1~5개까지 넣을 수 있어요.<br />넣은 개수만큼 아이템이 나와요!</p>
        <Image
          className="animate-pulse"
          src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/coin/coin.png"
          width={20}
          height={20}
          alt="코인 이미지"
          style={{ width: '20px', height: '20px' }}
        />
      </div>
      <div className="bg-[#e4e4ef] p-3 rounded-full ">
        <div className="flex justify-center gap-x-2.5">
          <input type="number" min={1} max={5} className="w-1/4 p-2 rounded-lg text-center" value={numCoin} onChange={(e)=> setNumCoin(Number(e.target.value)) }/>
          <button type="button" className="focus:outline-none" onClick={()=>handleCoin(numCoin)}>
            <Image src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/btn/btn-str.png" width={60} height={100} alt="시작 버튼"/>
          </button>
        </div>
        {/* <ul className="flex justify-around xl:gap-2">
          {data.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => {
                  numitem(item.id + 2);
                
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
        </ul> */}
      </div>
    </div>
  );
}
