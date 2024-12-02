import Image from "next/image";
import Link from "next/link";
export default function PartFourPage() {
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
          <h4 className="font-bold text-xl">게시판</h4>
          <p className="text-sm mt-4">
            vite를 사용하여 게시판구현
            <br />
            React / Typescript / Firebase / Context API / Redux Toolkit /
            Tailwind / Scss
          </p>
        </div>
        <div>
          <p className="text-base mt-4 font-bold">개발 과정</p>
          <ul className="list-disc pl-5 mt-2">
            <li>React 사용하여 기본 구조를 설정했습니다.</li>
            <li>
              상태관리 게시판1 Redux Toolkit, 게시판2 Context API 활용 했습니다.
            </li>
            <li>Css 게시판1 Scss, 게시판2 활용 했습니다.</li>
            <li>
              사용자 회원가입, 로그인은 firebase에 이메일/비밀번호 사용 설정을
              하여 사용자가 등록했던 정보대로 로그인을 할 수 있도록
              구현했습니다. 사용자가 등록하는 모든 데이터는 firebase에 realtime
              database에 저장하여 실시간으로 데이터 읽기, 추가, 수정, 삭제,
              댓글, 좋아요등록이 가능 하도록 구현 하였습니다. firebase의
              storage에서 이미지 저장, 삭제를 할 수 있도록 하였습니다.
            </li>
          </ul>
        </div>
        <h4></h4>
        <div className="mt-4 mb-4">
          <p className="font-bold text-base">게시판1 보안적 고민</p>
          리덕스툴킷을 활용하여 상태 관리를 하던 중, 사용자의 정보를 상태에
          저장하는 과정에서 보안의 위험성을 인지하게 되었습니다. 이에 대한
          대응책으로, 사용자 정보가 상태에 저장될 때 스키마 방식으로 보이지
          않도록 수정하였으며, 사용자 데이터의 관리를 파이어베이스에서만
          수행하도록 변경하였습니다.
          <p className="font-bold mt-2 text-base">게시판2 상태관리 선택</p>
          리액트 훅인 Context API를 경험해보기 위해 선택하였습니다. 이를 통해
          Redux 같은 별도의 상태 관리 라이브러리 없이도 간단한 상태 관리를
          수행할 수 있는 방법을 배웠습니다.
        </div>
        <div className="py-5 border-t border-slate-200 ">
        <p className="font-bold text-base">게시판1</p>
          <ul className="flex gap-x-6">
            <li>
              <Link
                href="https://velog.io/@yoouug72/ReacttsRedux-%EA%B2%8C%EC%8B%9C%ED%8C%90-%EB%A7%8C%EB%93%A4%EA%B8%B0"
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
                href="https://github.com/Minjeong79/react-board"
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
                href="https://board-bff0f.web.app/"
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
        <div className="py-5 pb-48 xl:pb-0">
          <p className="font-bold text-base">게시판2</p>
          <ul className="flex gap-x-6 ">
            <li>
              <Link
                href="https://velog.io/@yoouug72/react-vite-typescript-tailwind-%EC%84%B8%ED%8C%85"
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
                href="https://github.com/Minjeong79/reactBoard2"
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
                href="https://new-context-board.web.app/"
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
