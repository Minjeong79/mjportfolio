import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "../../globals.css";
import { EffectCreative, Pagination } from "swiper/modules";
import BlogDetail1Page from "./blog/blogDetail1page";
import BlogDetail2Page from "./blog/blogDetail2page";
import BlogDetail3Page from "./blog/blogDetail3page";
import Image from "next/image";

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex flex-col gap-2 xl:flex-row xl:items-end">
        <h3 className="font-bold text-3xl">이렇게 학습했습니다.</h3>
        <p className="hidden text-base xl:block">
          한 단계씩 발전이 있는 형식의 클론 코딩 이렇게 학습했습니다.
        </p>
      </div>
      <p className="hidden text-lg xl:block">
        클론 코딩은 순차적으로 자바스크립트와 타입스트립트 사용 했으며
        firebase를 통해 사용자가 google 로그인을 할 수 있도록 구현 하였습니다.
      </p>
      <div>
        <div className="animate-pulse flex justify-end mb-2 xl:hidden">
          <Image
            className=""
            src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/btn/n-icon.png"
            width={20}
            height={19}
            alt="다음 아이콘"
          />
        </div>
        <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCreative, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <BlogDetail1Page />
          </SwiperSlide>
          <SwiperSlide>
            <BlogDetail2Page />
          </SwiperSlide>
          <SwiperSlide>
            <BlogDetail3Page />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
