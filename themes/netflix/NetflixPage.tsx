"use client";

import { useState } from "react";
import Thumbnail from "./components/section/thumbnail";
import UserWatch from "./components/section/user-watch";

export default function Netflix({ guest }: { guest?: string }) {
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
            guest={guest}
          />
        )}
      </div>
    </div>
  );
}
