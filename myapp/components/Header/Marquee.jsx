import React from "react";

const Marquee = () => {
  return (
    <div className="bg-[#28282B] py-2 font-sage text-center overflow-hidden">
      <p
        className="text-[#F4ECD7] text-sm lg:text-xl"
        style={{
          animation: "marquee 10s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        <strong>NEW STOCK LANDING EVERY DAY FROM NOW UNTIL MAY!</strong>
      </p>
    </div>
  );
};

export default Marquee;
