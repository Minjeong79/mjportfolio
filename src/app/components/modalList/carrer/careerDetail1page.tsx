import Image from "next/image";
import Link from "next/link";

export default function CareerDetail1Page() {
  return (
    <section className="flex flex-col h-full pb-10 xl:gap-x-8 xl:h-96 xl:pb-0 ">
      <div className="flex flex-col">
        <h4 className="font-bold text-xl">파인너츠(파견근무)</h4>
        <p className="text-lg">
        (2022.03-재직중)
        </p>
      </div>
      <div className="flex-1">
        이벤트 페이지 퍼블리싱<br/>
        기술 세부 사항: Html, Css, Swiper, JavaScript<br/><br/>
        HTML과 CSS를 활용하여 페이지를 퍼블리싱하는 과정에서 기본적인 웹 개발 기술을 향상시켰습니다.
        Swiper 라이브러리를 이용하여 이미지 슬라이더와 같은 동적인 요소를 페이지에 추가했습니다.
        JavaScript를 사용하여 사용자와의 상호작용이 필요한 기능을 개발 했습니다.<br/><br/>
        협업 툴<br/>
        프로젝트 관리 및 협업을 위해 Jira를 활용했습니다.<br/> 
        Jira를 통해 팀원들과 업무를 할당하고 진행 상황을 추적하며 효율적으로 협업할 수 있었습니다.


      </div>
    </section>
  );
}
