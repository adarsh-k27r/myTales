import React from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/utils.css";
import avatar from "../assets/male_avatar_default.svg";
import moment from "moment";

function PublicCard() {
  return (
    <>
      <div className="my-[1%] mx-[5%] ">
        <hr className="border-t border-t-[rgba(117,117,117,1)] border-solid " />

        <div className="flex items-center p-[10px] pl-[0] ">
          <img
            src={avatar}
            alt="avatar"
            className="w-[5%] sm:w-[2%] mr-[5px] "
          />
          <p className="my-[0] mx-[5px] text-[10px] font_arial  ">Author</p>
          <span className="text-[rgba(117,117,117,1)] font_arial my-[0] mx-[4px]">
            .
          </span>
          <p className="my-[0] mx-[5px] font_arial text-[10px] text-[rgba(117,117,117,1)] ">
            {" "}
            Date{" "}
          </p>
        </div>

        <div className="flex mb-[2%] ">
          <div className="w-[100%] cursor-pointer ">
            <h1 className="text-[20px] font-[600] mb-[2%] font_verdana cursor-pointer ">
              Title
            </h1>
            <p className="font_open_sans cursor-pointer ">Body</p>

            <div className="flex mt-[3%] ">
              <p className="ml-[0] mr-[auto] sm:mr-[80%] text-[10px] text-[rgba(117,117,117,1)] font_helvetica ">
                2 sec read
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PublicCard;
