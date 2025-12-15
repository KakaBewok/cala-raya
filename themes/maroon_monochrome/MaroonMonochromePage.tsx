"use client";

import { useState } from "react";
import MainPage from "./components/MainPage";
// import OpeningScreen from "./components/OpeningScreen";
import OpeningScreen2 from "./components/OpeningScreen2";

export default function InvitationPage() {
  const [isOpenInvitation, setIsOpenInvitation] = useState<boolean>(false);

  return (
    <>
      <OpeningScreen2
        isOpenInvitation={isOpenInvitation}
        setIsOpenInvitation={setIsOpenInvitation}
      />
      {isOpenInvitation && <MainPage isOpenInvitation={isOpenInvitation} />}
    </>
  );
}
