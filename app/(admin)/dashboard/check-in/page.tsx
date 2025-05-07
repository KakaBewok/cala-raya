"use client";

import { useSearchParams } from "next/navigation";

const CheckInPage = () => {
  const queryParams = useSearchParams();

  return (
    <>
      <h1>
        This is Check In page, this is Guest ID: {queryParams.get("id") ?? ""}
      </h1>
    </>
  );
};

export default CheckInPage;
