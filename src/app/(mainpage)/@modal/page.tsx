import Modal from "@/src/app/components/modal";
import React from "react";
import LanguagePage from "../language/[id]/page";

export default function Page() {
    return (
      <Modal>
        <LanguagePage/>
      </Modal>
    );
  }