<h2>포트폴리오(반응형)</h2>

<ul>
        <li>배포 url : https://mjportfolio-three.vercel.app/</li>
        <li>PDF url : https://drive.google.com/file/d/1OVna2ApHH5IsUDpBTfThfUDTr__Jkc2V/view</li>
</ul>

<h3>🌟프로젝트 소개</h3>
<ul>
        <li>정민정의 포트폴리오 입니다.</li>
</ul>


<h3>🚀개발 환경</h3>
<ul>
      <li>Front : Nextjs, Ts, zustand, Tailwind</li>
      <li>Back : supabase</li>
      <li>버전 및 이슈 관리 : Github</li>
      <li>디자인 : Figma</li>
      <li>서비스 배포 환경 : vercel</li>
</ul>


<h3>🛠채택한 개발 기술</h3>
<ul>
      <li>  상태 관리에는 zustand 사용<br>
            Zustand는 지금까지 사용했던 상태 관리 라이브러리 중에서 가장 간편하고 직관적이라는 인상을 받았습니다.<br>
            상태 관리의 복잡도를 최소화하면서도 필요한 기능을 충분히 제공한다는 점에서 큰 장점을 느꼈습니다.<br>
            직관적이고 간단한 문법 덕분에 코드 가독성이 높아졌으며, 타입스크립트 지원이 강력해 상태와 관련된 타입 정의 및 예측이 쉬워졌습니다.
            Redux Toolkit, Context API처럼 설정이 복잡하지 않아 초기 설정과 러닝 커브가 낮았습니다.
      </li>
      <li>
            Parallel Routes 사용<br>
            이번 프로젝트에서는 Next.js의 Parallel Routes를 활용하여 UI를 구현해 보았습니다.<br>
            병렬 라우트를 통해 동일한 화면에서 여러 콘텐츠를 동시에 로드할 수 있어 동적이고 복합적인 인터페이스 구현이 수월했습니다.
      </li>
</ul>



<h3>📂프로젝트 구조</h3>

```
lib
│  ├─ db.ts
│  └─ type.ts
├─ next-env.d.ts
next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ src
│  └─ app
│     ├─ (mainpage)
│     │  ├─ @mainimg
│     │  │  └─ page.tsx
│     │  ├─ @modal
│     │  │  └─ page.tsx
│     │  ├─ @sub
│     │  │  └─ page.tsx
│     │  ├─ @subbtn
│     │  │  └─ page.tsx
│     │  └─ layout.tsx
│     ├─ components
│     │  ├─ coinList.tsx
│     │  ├─ counter.tsx
│     │  ├─ historyBtnList.tsx
│     │  ├─ modal.tsx
│     │  └─ modalList
│     │     ├─ LanguagePage.tsx
│     │     ├─ blog //학습
│     │     │  ├─ blogDetail1page.tsx
│     │     │  ├─ blogDetail2page.tsx
│     │     │  └─ blogDetail3page.tsx
│     │     ├─ blogPage.tsx
│     │     ├─ careerPage.tsx
│     │     ├─ carrer  //경력
│     │     │  ├─ careerDetail1page.tsx
│     │     │  ├─ careerDetail2page.tsx
│     │     │  ├─ careerDetail3page.tsx
│     │     │  └─ careerDetail4page.tsx
│     │     ├─ modalWarp.tsx
│     │     ├─ partFour.tsx // 만든 프로젝트
│     │     ├─ partOne.tsx
│     │     ├─ partThree.tsx
│     │     └─ partTwo.tsx
│     ├─ favicon.ico
│     ├─ globals.css
│     └─ store
│        └─ store.ts
├─ tailwind.config.ts
├─ tsconfig.json
└─ utils
   └─ supabase
      ├─ createClient.ts
      └─ server.ts
```


<h3>🗺페이지 별 주요 기능</h3>
<h4>[ 메인 페이지 ] </h4>
<img src="https://github.com/user-attachments/assets/7e75d884-cd92-4a1b-a77d-6dfe05b76c5b" alt="메인 페이지"/>
<ul>
      <li>뽑기 이미지 아래 코인을 클릭시 캡슐 이미지 출력 됩니다.</li>
      <li>캡슐 이미지 클릭시 만든 프로젝트의 내용의 모달이 출력 됩니다.</li>
      <li>색상 아이콘 클릭시 관련 내용의 모달이 출력 됩니다.</li>
</ul>

<h4>[ 프로젝트 페이지 ] </h4>
<img src="https://github.com/user-attachments/assets/80ee1530-425f-423b-b124-5e20e3831c6a" alt="프로젝트 페이지"/>
<ul>
      <li>프로젝트의 동영상을 재상 할 수 있습니다.</li>
      <li>프로젝트의 과정, 기술 스택의 내용이 작성 되어 있습니다.</li>
</ul>

<h4>[ 경력 페이지 ] </h4>
<img src="https://github.com/user-attachments/assets/d773d1db-e9b6-4789-806f-b614db86d4eb" alt="경력 페이지"/>
<ul>
      <li>스와이퍼의 카드 형식의 슬라이드를 모달에 적용 하였습니다.</li>
      <li>본인의 재직 중-재직 했었던 기업들의 내용이 작성 되어 있습니다. </li>
</ul>

<h4>[ 기술 스택 페이지 ] </h4>
<img src="https://github.com/user-attachments/assets/d17087c3-b4c4-49c8-8992-73b5809e8fa0" alt="기술 스택 페이지"/>
<ul>
      <li>스와이퍼의 카드 형식의 슬라이드를 모달에 적용 하였습니다.</li>
      <li>직접 학습하고 활용 했던 기술을 모아 둔 페이지 입니다.</li>
</ul>

<h4>[ 블로그 ] </h4>
<img src="https://github.com/user-attachments/assets/c1a6efca-b41d-44c7-835e-51fdea18295b" alt="블로그 페이지"/>
<ul>
      <li>스와이퍼의 카드 형식의 슬라이드를 모달에 적용 하였습니다.</li>
      <li>리액트에서 부터 어떻게 학습 했는지의 과정의 내용이 작성 되어 있습니다.</li>
</ul>



<h3>🖐프로젝트 후기</h3>
이번 프로젝트는 Next.js를 활용해 제작한 반응형 웹 포트폴리오로,<br> 
사용자 친화적이고 동적인 UI를 구현하는 데 중점을 두었습니다. <br>
프로젝트 과정에서 최신 기능인 Parallel Routes와 모달을 함께 사용해 사용자 경험(UX)을 높이는 데 주력했습니다.<br>
복잡한 UI 구성에서 병렬 라우트가 얼마나 유용한지 직접 체감할 수 있었습니다. <br>
특히, 모달처럼 특정 콘텐츠를 별도로 관리할 때 강력한 기능임을 깨달았습니다.
