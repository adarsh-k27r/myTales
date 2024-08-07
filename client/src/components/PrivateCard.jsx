import React from "react";
import "../stylesheets/utils.css";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function PrivateCard(props) {
  const navigate = useNavigate();
  const { post, deletePost } = props;

  const date_ = new Date(post.createdAt);

  const formatted_date = moment(date_).format("D");
  const formatted_month = moment(date_).format("MMM");

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
      <div className="w-[90%] sm:w-[40%] max-w-[90%] sm:max-w-[40%] flex items-center justify-center min-w-[40%] p-[40px] my-[0] mx-[5%] ">
        <div className="flex justify-center items-center flex-col mr-[15px] ">
          <p className="font_poppins font-[800] text-[#567189] text-[16px] ">
            {formatted_month}
          </p>
          <hr className="w-[40px] border border-solid border-[rgb(221,221,221)] my-[5px] mx-[0] " />
          <p className="font_verdana font-[400] text-[16px] ">
            {formatted_date}
          </p>
        </div>

        <div className="p-[5px]">
          <p
            className="text-[23px] font_open_sans font-bold mb-[5px] cursor-pointer "
            onClick={handler}
          >
            {post.title.substr(0, 20) + ".."}
          </p>
          <p
            className="mb-[5px] font_verdana font-[100] text-[15px] text-[#567189] content-v cursor-pointer "
            onClick={handler}
            dangerouslySetInnerHTML={{
              __html: post && post.content.substr(0, 40) + "...",
            }}
          ></p>

          <span className="mb-[5px] mr-[55%] sm:mr-[40%] font-[400] text-[13px] font_helvetica text-[rgba(117,117,117,1)] ">
            {WordCount(post.content)} read
          </span>

          <div className="inline ">
            <i
              className="fa-regular fa-pen-to-square hover:text-green-500 "
              onClick={() => {
                navigate(`/update-post/${post._id}`);
              }}
            />
            <i
              className="fa-regular fa-trash-can ml-4 hover:text-red-500  "
              onClick={() => {
                deletePost(post._id);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivateCard;
