import HistoryBtnList from "../../components/historyBtnList";
import History from "../../components/historyBtnList";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-[#e4e4ef] p-5 rounded-lg p-7 font-bold text-center">
        #프론트앤드 #React #Nextjs #성장중 #정민정 #신입
      </div>
      <div className="bg-[#e4e4ef] p-5 mt-4 rounded-lg leading-8 p-7">
        퍼블리셔로서 웹 프로젝트를 작업하며, 프론트엔드 개발에 대한 흥미와 열정을 발견했습니다. <br/>
        디자인과 사용자 경험이 결합된 인터랙티브한 웹 페이지를 만들어보고 싶다는 욕심이 생겼고, 
        이를 계기로 본격적으로 리액트를 공부하며 프론트엔드 개발자로의 전환을 준비하게 되었습니다.<br/><br/>

        처음에는 리액트를 중심으로 클론 코딩과 토이 프로젝트를 진행하며 기본기를 다졌습니다.<br/> 
        하지만 초기 10곳의 지원에서 서류 탈락을 경험하며 제 부족함을 되돌아보는 계기가 되었습니다. 
        이후 기업들이 요구하는 역량을 분석하며 최신 프레임워크인 Next.js와 상태 관리 기술을 깊이 있게 학습하며 실력을 보완했습니다.<br/><br/>

        그 결과물 중 하나가 바로 ‘강아지 일기’ 프로젝트입니다. <br/>
        단순히 공부에 그치지 않고, 기획과 디자인을 스스로 준비하며 리액트를 활용해 핵심 기능을 개발한 뒤, 
        Next.js로 프로젝트를 확장하면서 기능 개선과 상태 관리 방식을 새롭게 시도했습니다. 
        이를 통해 서버 사이드 렌더링과 클라이언트 상태 관리의 차이를 체감하며 실질적인 기술 성장을 이루었습니다.<br/><br/>

        또한, OpenAI API를 활용한 ‘AI 강아지 채팅 UI’ 프로젝트도 진행했습니다.<br/> 
        이 프로젝트는 단순한 UI 구현을 넘어, AI와의 인터랙션을 웹 서비스에 자연스럽게 녹여내는 경험이었습니다. 
        사용자와 강아지 캐릭터 간의 대화를 구현하며, 프론트엔드에서 외부 API를 효과적으로 연동하고 표현하는 방법을 익힐 수 있었습니다.
      </div>
      <HistoryBtnList />
    </div>
  );
}
