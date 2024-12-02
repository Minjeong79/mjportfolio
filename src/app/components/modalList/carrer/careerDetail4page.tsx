import Image from "next/image";

export default function CareerDetail4Page() {
  return (
    <section className="flex flex-col h-full pb-10 xl:w-full xl:gap-x-8 xl:h-96 xl:pb-0">
      <div className="flex flex-col xl:flex-row xl:gap-x-8">
        <div className="flex flex-col">
          <h4 className="font-bold text-xl">홈매니지먼트 수가</h4>
          <p className="text-lg">(2017.07-2018.02)</p>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-y-4 ">
            신사의 이사, 두꺼비이사, 홈매니지먼트 수가 배너, 상세페이지 작업
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4 xl:flex-row xl:gap-x-8 xl:m-0">
        <div className="flex flex-col">
          <h4 className="font-bold text-xl">비에프 커머스</h4>
          <p className="text-lg">(2016.07-2017.03)</p>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-y-4 ">
            B2B 홈페이지 배너, 상세페이지 작업
          </div>
        </div>
      </div>
    </section>
  );
}
