import React from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/utils.css";
import avatar from "../assets/male_avatar_default.svg";
import moment from "moment";

function PublicCard(props) {
  const navigate = useNavigate();
  const { post } = props;

  const date_ = new Date(post.createdAt);
  const formatted_date = moment(date_).format("MMM D, YYYY");

  const WordCount = (str) => {
    const len = str.split(" ").length;
    const time = Math.floor(len / 200);
    if (time == 0) {
      return "few sec";
    }
    return time + " min";
  };

  const handler = () => {
    navigate(`/post/${post.slug}`);
  };

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
          <p className="my-[0] mx-[5px] text-[13px] font_arial  ">
            {post.author}
          </p>
          <span className="text-[rgba(117,117,117,1)] font_arial my-[0] mx-[4px]">
            .
          </span>
          <p className="my-[0] mx-[5px] font_arial text-[13px] text-[rgba(117,117,117,1)] ">
            {" "}
            {formatted_date}{" "}
          </p>
        </div>

        <div className="flex mb-[2%] " onClick={handler}>
          <div className="w-[100%] cursor-pointer ">
            <h1 className="text-[20px] font-[600] mb-[2%] font_verdana cursor-pointer ">
              {post.title.substr(0, 20) + ".."}
            </h1>
            <p
              className="font_open_sans cursor-pointer "
              dangerouslySetInnerHTML={{
                __html: post && post.content.substr(0, 40) + "...",
              }}
            ></p>

            <div className="flex mt-[3%] ">
              <p className="ml-[0] mr-[auto] sm:mr-[80%] text-[13px] text-[rgba(117,117,117,1)] font_helvetica ">
                {WordCount(post.content)} read
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PublicCard;
