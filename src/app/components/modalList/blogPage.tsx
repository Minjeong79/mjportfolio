import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import 'swiper/css/pagination';
import "../../globals.css";
import { EffectCreative, Pagination } from "swiper/modules";
import BlogDetail1Page from "./blog/blogDetail1page";
import BlogDetail2Page from "./blog/blogDetail2page";
import BlogDetail3Page from "./blog/blogDetail3page";

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex flex-col gap-2 xl:flex-row xl:items-end">
        <h3 className="font-bold text-3xl">이렇게 학습했습니다.</h3>
        <p className="text-base">
          한 단계씩 발전이 있는 형식의 클론 코딩 이렇게 학습했습니다.
        </p>
      </div>
      <p className="text-lg">
        클론 코딩은 순차적으로 자바스크립트와 타입스트립트 사용 했으며
        firebase를 통해 사용자가 google 로그인을 할 수 있도록 구현 하였습니다.
        사용자가 로그인 후 작성하는 데이터는 firebase에 realtime database에
        저장하여 실시간으로 데이터 추가, 수정, 삭제가 가능 하도록 구현
        하였습니다. 카카오 광고 적용을 해보았습니다.
      </p>
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
  );
}
