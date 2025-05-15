"use client";

// import { CldImage } from "next-cloudinary";
const adminPage = () => {
  return (
    <>
      <h1>This is Admin page</h1>
      <p>Test cloudinary image</p>
      {/* <CldImage
        src="cld-sample-5"
        width="200"
        height="200"
        crop={{
          type: "auto",
          source: true,
        }}
        alt="Sample image"
      /> */}
    </>
  );
};

export default adminPage;
