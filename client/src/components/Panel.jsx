import React from "react";
import "../stylesheets/utils.css";
import PublicCard from "./PublicCard";

function Panel() {
  return (
    <>
      <div className="w-[100%] sm:w-[80%] bg-white py-[0] px-[5%] ">
        <h3 className="font_open_sans text-[15px] font-[900] text-black tracking-[2px] my-[2%] mx-[0] text-center ">
          Top picks
        </h3>
        <PublicCard />
      </div>
    </>
  );
}

export default Panel;
