import React from "react";
import "../stylesheets/utils.css";
import "../stylesheets/Footer.css";
import logo from "../assets/mytales_logo.png";
import Copyright from "../components/Copyright";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="footer_sec flex h-[30vh] bg-[#f5f5f5] flex-col-reverse sm:flex-row  ">
        <div className="text-center m-[0] sm:mt-[10px] sm:ml-[10%] sm:text-start ">
          <h3 className="text-[15px] mt-[10px] font_verdana font-semibold ">
            Sitemap
          </h3>
          <ul className="site mt-[10px] list-none font_open_sans ">
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="#">Contact us</Link>
            </li>
            <li>
              <Link to="#">Terms of Services</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="ml-[0] sm:ml-[10%] p-[2%] ">
          <span className="font_verdana font-[800] text-[14px] sm:text-[16px] ml-[20px] sm:ml-[10px] ">
            Follow us
          </span>

          <div className="m-[10px] cursor-pointer">
            <Link
              to="https://www.linkedin.com/in/adarsh-k27r/"
              className="text-black"
            >
              <i className="fa-brands fa-linkedin fa-xl blue mr-[5px] " />
            </Link>
            <Link to="#" className="text-black">
              <i className="fa-brands fa-instagram fa-xl red mr-[5px] " />
            </Link>
            <Link to="#" className="text-black">
              <i className="fa-brands fa-facebook fa-xl blue mr-[5px]" />
            </Link>
            <Link to="#" className="text-black">
              <i className="fa-brands fa-twitter fa-xl blue mr-[5px]" />
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center ml-[0] sm:ml-[18%] sm:items-end sm:justify-start flex-col w-[30%] ">
          <img src={logo} className="w-[70%] sm:w-[30%] mt-[7%] " alt="logo" />

          <span className="span text-[13px] font_open_sans text-[#567189] font-semibold mt-2 ">
            <i className="fa-solid fa-envelope" /> &nbsp;
            adarshkr010122@gmail.com
            <hr className="line" />
          </span>

          <span className="span text-[13px] font_open_sans text-[#567189] font-semibold mt-2 ">
            <i className="fa-solid fa-phone" /> &nbsp; +91-7903737429
          </span>
        </div>
      </section>

      <Copyright />
    </>
  );
}

export default Footer;
