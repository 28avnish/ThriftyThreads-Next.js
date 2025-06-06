import React from "react";

const Routebar = () => {
  return (
    <div className="font-helvetica-regular tracking-widest text-[14px] px-5 sm:px-6 text-gray-500  flex flex-wrap gap-1 mb-10">
      <span className="hover:text-black cursor-pointer">HOME</span>
      <span>/</span>
      <span className="hover:text-black cursor-pointer">MEN</span>
      <span>/</span>
      <span className="hover:text-black cursor-pointer">T-SHIRTS</span>
      <span>/</span>
      <span className="text-black font-helvetica-medium">
        REGULAR FIT T-SHIRT
      </span>
    </div>
  );
};

export default Routebar;
