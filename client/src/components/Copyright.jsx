import React from "react";
import "../stylesheets/utils.css";
import moment from "moment";

function Copyright() {
  var formatted_year = moment().format("YYYY");

  return (
    <>
      <footer className="h-[10vh] flex items-center justify-center bg-[#f5f5f5] font_verdana font-[200] text-[13px] ">
        <p>Copyright &copy; {formatted_year}- All rights reserved.</p>
      </footer>
    </>
  );
}

export default Copyright;
