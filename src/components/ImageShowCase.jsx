import React from "react";

const ImageShowCase = () => {
  return (
    <div
      className="flex flex-col justify-center items-center p-20"
      style={{
        height: "80vh",
        backgroundImage:
          "linear-gradient(to top, rgba(245, 246, 252, 0.1), rgba(117, 19, 93, 0.6)), url('/images/city-man-sitting-back.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div style={{ width: "100%" }}>
        <h1 className="text-8xl text-white font-bold">Latest Styles</h1>
        <p className="text-white text-2xl font-bold">At Yesterday's Price</p>
        <button className="bg-red-700 px-8 py-3 mt-5 font-bold text-white rounded-lg">
          BROWSE ALL STYLES
        </button>
      </div>
    </div>
  );
};

export default ImageShowCase;
