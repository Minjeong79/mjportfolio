import Image from "next/image";
import Link from "next/link";
export default function PartThreePage() {
  return (
    <div className="flex flex-col h-screen overflow-y-scroll xl:flex-row xl:justify-between xl:gap-x-6 xl:h-auto xl:overflow-hidden">
      <video
        className="mx-auto"
        width="500"
        height="500"
        controls
        autoPlay
        loop
        muted
      >
        <source
          src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/video/mumnext.mp4"
          type="video/mp4"
        />
      </video>
      <div className="xl:h-550 mt-4 flex flex-col justify-around xl:overflow-y-scroll">
        <div>
          <h4 className="font-bold text-xl">미니 게임</h4>
          <p className="text-sm mt-4">
            vite를 사용하여 고양이 게임구현
            <br />
            React / Typescript / Firebase / Context API / Tailwind / Adobe
            Illustrator
          </p>
        </div>
        <div>
          <p className="text-base mt-4 font-bold">개발 과정</p>
          <ul className="list-disc pl-5 mt-2">
            <li>React 사용하여 기본 구조를 설정했습니다.</li>
            <li>상태 관리에는 Context API을 사용했습니다.</li>
            <li>
              사용자 로그인은 firebase에 익명으로 가입되는 방법으로 구현
              했습니다.
            </li>
            <li>firebase의 storage에서 이미지 출력 하였습니다.</li>
            <li>
              오디오를 재생 하기위해 Howler 라이브러리를 사용 했습니다. 게임
              시작 버튼 클릭시 Bgm이 시작 됩니다.
            </li>
            <li>
              게임이끝나면 팝업이 뜨고 랭킹 화면으로 이동하여 실시간 등수 확인이
              가능 합니다.{" "}
            </li>
            <li>Css 적용은 Tailwind를 사용 하여 구현 했습니다.</li>
          </ul>
        </div>
        <h4></h4>
        <div className="mt-4 mb-4">
          <p className="font-bold text-base">고양이 이미지 선택 및 Css 수정</p>
          기존에는 이미지를 클릭할 때 Css가 block에서 none으로 변경되는 형태로
          구현되어 있었습니다. 이로 인해 다른 이미지들의 위치에 영향을 미치는
          문제가 발생했습니다. 해결책으로 이미지를 div로 한번 감싸고, 해당 div를
          클릭할 때 투명하게 되도록 Css를 수정하였습니다. 이로써 다른 이미지들의
          위치에 영향을 미치지 않으면서도 이미지를 선택할 수 있는 기능을
          구현하였습니다.
          <p className="font-bold mt-2 text-base">이미지 움직임 고민</p>
          게임이 시작되면 자동으로 이미지가 위에서 아래로 움직여야 하는데,
          움직이지 않는 현상이 발생했습니다. 코드를 분석한 결과, 모든 코드가
          렌더링된 후에 Css 함수가 실행되어 원하는 Css가 적용되지 않았음을
          파악했습니다. 따라서 이미지가 모두 렌더링된 후에 Css 함수가 실행되도록
          수정하여 문제를 해결했습니다.
          <p className="font-bold mt-2 text-base">DOM 접근</p>
          작업 했던 컴포넌트에서 document를 사용 했던 코드를 인지 후 useRef로
          수정 하였습니다.
        </div>
        <div className="py-5 border-t border-slate-200 pb-48 xl:pb-0">
          <ul className="flex gap-x-6">
            <li>
              <Link
                href="https://velog.io/@yoouug72/%EA%B3%A0%EC%96%91%EC%9D%B4-%EA%B2%8C%EC%9E%84-%EC%84%B8%ED%8C%85"
                className="flex items-center"
              >
                <Image
                  src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/icon/btn4.png"
                  width={50}
                  height={40}
                  alt="벨로그"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Minjeong79/catCatch"
                className="flex items-center"
              >
                <Image
                  src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/icon/btn6.png"
                  width={40}
                  height={40}
                  alt="git"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://imggame-24c7e.web.app/"
                className="flex items-center"
              >
                <Image
                  src="https://fpjdvuxtsnhwwltmlwcx.supabase.co/storage/v1/object/public/img/icon/btn7.png"
                  width={40}
                  height={40}
                  alt="배포"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
