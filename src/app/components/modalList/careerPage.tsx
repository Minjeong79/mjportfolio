import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "../../globals.css";
import { EffectCreative, Pagination } from "swiper/modules";
import CareerDetail1Page from "./carrer/careerDetail1page";
import CareerDetail2Page from "./carrer/careerDetail2page";
import CareerDetail3Page from "./carrer/careerDetail3page";
import CareerDetail4Page from "./carrer/careerDetail4page";
import Image from "next/image";

export default function CareerPage() {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex flex-col gap-2 xl:items-end xl:flex-row ">
        <h3 className="font-bold text-3xl">경력</h3>
        <p className="text-base">웹디자이너-퍼블리셔로써 쌓아온 이야기</p>
      </div>
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
          roundLengths={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <CareerDetail1Page />
          </SwiperSlide>
          <SwiperSlide>
            <CareerDetail2Page />
          </SwiperSlide>
          <SwiperSlide>
            <CareerDetail3Page />
          </SwiperSlide>
          <SwiperSlide>
            <CareerDetail4Page />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
