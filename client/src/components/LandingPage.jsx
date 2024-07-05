import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../stylesheets/LandingPage.css";
import "../stylesheets/utils.css";

export default function LandingPage() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <section className="h-[90vh] flex flex-col-reverse sm:flex-row items-center justify-center text-center">
        <div className="flex items-center sm:items-start sm:justify-center font-semibold text-black flex-col ml-[7%] w-[auto] h-[70%] sm:h-[95%] text-[1rem] ">
          <p className="bold text-[25px] sm:text-[40px] font-bold mb-[3rem] mt-[1rem] sm:mt-[0] text-black ">
            Manifesting ideas into reality.
          </p>
          <p className="font_style text-[20px] sm:text-[23px] font-normal ml-[0] mb-[3rem] text-black sm:text-start ">
            And Every Reality was once an story.
            <br />
            What's Yours ?
          </p>

          <div>
            {!currentUser ? (
              <Link
                to="/sign-up"
                className="font_style ml-[0] py-[10px] px-[35px] border border-[rgba(0,0,0,0.482)] border-solid rounded-[15px] bg-[rgba(255,0,0,0.155)] cursor-pointer no-underline text-black text-[10pt] font-[500] "
              >
                Start Exploring&nbsp;&nbsp;
              </Link>
            ) : (
              <Link
                to="/stories"
                className="font_style ml-[0] py-[10px] px-[35px] border border-[rgb(0,0,0,0.482)] border-solid rounded-[15px] bg-[rgba(255,0,0,0.155)] cursor-pointer no-underline text-black text-[10pt] font-[500]"
              >
                Start Exploring&nbsp;&nbsp;
              </Link>
            )}
          </div>
        </div>

        <div className="background w-[45%] my-[1%] mx-[2%] h-[50%] sm:h-[95%] bg-no-repeat  "></div>
      </section>
    </>
  );
}
