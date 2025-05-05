"use client";

import { useState } from "react";
import Thumbnail from "./components/section/thumbnail";
import UserWatch from "./components/section/user-watch";

export default function Netflix() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <div className="container mx-auto max-w-sm">
        {isLogin ? (
          <Thumbnail />
        ) : (
          <UserWatch
            onClick={() => {
              setIsLogin(true);
            }}
          />
        )}
      </div>
    </div>
  );
}
