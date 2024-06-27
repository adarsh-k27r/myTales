import React from "react";
import error_image from "../assets/error_image.svg";
import { useNavigate } from "react-router-dom";

function Error404() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <img
          className="sm:w-[40%]"
          src={error_image}
          alt="Error 404: Page Not Found!"
        />
        <button
          onClick={goBack}
          className="border border-solid border-[rgb(0,0,0)] bg-white box-border p-[10px] rounded-[15px] cursor-pointer"
        >
          Back to myTales
        </button>
      </div>
    </>
  );
}

export default Error404;
