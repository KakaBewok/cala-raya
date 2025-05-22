"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import MainPage from "./components/MainPage";
import MusicButton from "./components/MusicButton";

export default function InvitationPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Hero isOpen={isOpen} setIsOpen={setIsOpen} />
      <MainPage />
      <MusicButton isOpen={isOpen} />
    </>
  );
}
