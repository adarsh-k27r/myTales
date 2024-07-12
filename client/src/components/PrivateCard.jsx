import React from "react";
import "../stylesheets/utils.css";

function PrivateCard() {
  return (
    <>
      <div className="w-[90%] sm:w-[40%] max-w-[90%] sm:max-w-[40%] flex items-center justify-center min-w-[40%] p-[40px] my-[0] mx-[5%] ">
        <div className="flex justify-center items-center flex-col mr-[15px] ">
          <p className="font_poppins font-[800] text-[#567189] text-[13px] ">
            Month
          </p>
          <hr className="w-[40px] border border-solid border-[rgb(221,221,221)] my-[5px] mx-[0] " />
          <p className="font_verdana font-[400] text-[13px] ">Date</p>
        </div>

        <div className="p-[5px] cursor-pointer ">
          <p className="text-[23px] font_open_sans font-bold mb-[8px] ">
            This is the title of the post
          </p>
          <p className="mb-[8px] font_verdana font-[100] text-[15px] text-[#567189] content-v ">
            And this is the body of the post.
          </p>

          <span className="mb-[8px] mr-[75%] sm:mr-[60%] font-[400] text-[10px] font_helvetica text-[rgba(117,117,117,1)] ">
            2 sec read
          </span>

          <i className="fa-regular fa-trash-can mr-[auto] sm:mr-[16px]" />
        </div>
      </div>
    </>
  );
}

export default PrivateCard;
