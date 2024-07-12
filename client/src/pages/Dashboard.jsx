import React from "react";
import "../stylesheets/utils.css";
import PrivateCard from "../components/PrivateCard";

function Dashboard() {
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row justify-center sm:justify-start items-center sm:items-start w-[100%]  ">
        <div className="w-[100%] sm:w-[80%]  ">
          <h3 className="font_open_sans text-[1rem] font-[900] text-black tracking-[2px] my-[2%] mx-[0] text-center">
            Your Stories
          </h3>

          <section className="flex flex-wrap flex-col-reverse sm:flex-row items-center sm:items-start ">
            <PrivateCard />
          </section>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
