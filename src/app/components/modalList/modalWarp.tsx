"use client";

import { useStoreModal } from "../../store/store";
import BlogPage from "./blogPage";
import CareerPage from "./careerPage";
import LanguagePage from "./LanguagePage";
import PartFivePage from "./partFive";
import PartFourPage from "./partFour";
import PartOnePage from "./partOne";
import PartThreePage from "./partThree";
import PartTwoPage from "./partTwo";

export default function ModalWrapPage() {
  const { num } = useStoreModal();

  return (
    <div className="p-5 pb-16 bg-[#f9f9fd] h-screen overflow-y-scroll xl:w-[80vw] xl:h-[900px] xl:p-12 xl:overflow-y-hidden xl:p-7">
      {num === 0 ? (
        <CareerPage />
      ) : num === 1 ? (
        <LanguagePage />
      ) : num === 2 ? (
        <BlogPage />
      ) : num === 3 ? (
        <PartOnePage />
      ) : num === 4 ? (
        <PartTwoPage />
      ) : num === 5 ? (
        <PartThreePage />
      ) : num === 6 ? (
        <PartFourPage />
      ) : (
        <PartFivePage />
      )}
    </div>
  );
}
