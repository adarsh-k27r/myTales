import React from "react";
import "../stylesheets/utils.css";

function AskMail() {
  return (
    <>
      <div className="bg-white max-h-[20vh]  sm:h-[25vh] flex flex-col items-center justify-center ">
        <div className="font_verdana text-[1rem] font-[600] mb-[10px] p-[10px] tracking-[1px]  sm:tracking-[2px]  ">
          Subscribe to our Newsletter
        </div>
        <form
          id="myForm"
          className="py-[3px] px-[15px] rounded-[15px] border border-[rgba(255,0,0,0.155)] border-solid flex bg-white mb-[1rem] "
        >
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            autoComplete="off"
            required
            className="border-none w-[100%]  "
          />
          <button
            type="submit"
            className="font_open_sans ml-[10px] py-[2px] px-[14px] border border-solid border-[rgba(0,0,0,0.482)] rounded-[15px] cursor-pointer text-[10pt] font-[500] bg-[rgba(255,0,0,0.155)] no-underline "
          >
            {" "}
            Subscribe{" "}
          </button>
        </form>
      </div>
    </>
  );
}

export default AskMail;
