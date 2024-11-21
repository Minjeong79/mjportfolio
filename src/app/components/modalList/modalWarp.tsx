"use client";

import { useStoreModal } from "../../store/store";
import BlogPage from "./blogPage";
import HistoryPage from "./historyPage";
import LanguagePage from "./LanguagePage";
import PartFourPage from "./partFour";
import PartOnePage from "./partOne";
import PartThreePage from "./partThree";
import PartTwoPage from "./partTwo";

export default function ModalWrapPage() {
  const { num } = useStoreModal();
  console.log(num);
  return (
    <div className="w-[80vw] h-[900px] p-6">
      {num === 0 ? (
        <HistoryPage />
      ) : num === 1 ? (
        <LanguagePage />
      ) : num === 2 && 
        <BlogPage />
    //   ) : num === 3 ? (
    //     <PartOnePage />
    //   ) : num === 4 ? (
    //     <PartTwoPage />
    //   ) : num === 5 ? (
    //     <PartThreePage />
    //   ) : (
    //     <PartFourPage />
    //   )}
      }
    </div>
  );
}
