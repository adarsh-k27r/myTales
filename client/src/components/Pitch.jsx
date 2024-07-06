import React from "react";
import "../stylesheets/utils.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Pitch() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <section className="bg_pitch flex justify-center items-center flex-col h-[60vh] bg-no-repeat  ">
        <div className="flex justify-center items-center flex-col w-[50%] ">
          <p className="font_verdana text-[25px] sm:text-[40px] font-[800] text-black text-center  ">
            Create space for your thinking to take off.
          </p>
          <p className="font_verdana text-[15px] font-[500] text-black text-center mt-[2em] ">
            Every thought has emotion & Every emotion is backed by words. <br />
            Word is eternal, indestructible & endlessly propagative ! Share it
            with the world and unleash the power of expression.
          </p>

          {!currentUser ? (
            <Link
              to="/sign-in"
              className="my-[2em] mx-[0] font_open_sans text-black rounded-[15px] cursor-pointer text-[1em] py-[5px] px-[20px] font-[400] border border-solid border-[black] no-underline bg-[rgba(255,0,0,0.155)] "
            >
              Write on myTales
            </Link>
          ) : (
            <Link
              to="/publish"
              className="my-[2em] mx-[0] font_open_sans text-black rounded-[15px] cursor-pointer text-[1em] py-[5px] px-[20px] font-[400] border border-solid border-[black] no-underline bg-[rgba(255,0,0,0.155)] "
            >
              Write on myTales
            </Link>
          )}
        </div>
      </section>
    </>
  );
}

export default Pitch;
