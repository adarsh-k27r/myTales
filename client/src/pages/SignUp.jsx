import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/main.css";

function SignUp() {
  return (
    <>
      <div className="block fixed z-[5] text-center left-0 top-0 w-[100%] h-[100%] overflow-hidden bg-[rgb(255,255,255)]">
        <span
          className="absolute right-[5%] sm:right-[31%] top-[18px] text-[30px] text-gray-500 hover:text-black hover:cursor-pointer "
          title="Close"
        >
          &times;
        </span>

        <form className="animate flex justify-center items-center flex-col bg-white w-[100%] sm:w-[40%] mx-[auto] my-[1%]">
          <span>
            <h3 className="font-sans text-center text-xl font-[600] text-[rgb(9,0,66,0.83)] my-[10px] ">
              Ready to join?
            </h3>
            <h3 className="font-sans text-center text-xl font-[600] text-[rgb(9,0,66,0.83)] my-[10px] ">
              Sign Up
            </h3>
          </span>
          <input
            type="text"
            className="w-[45%] p-[10px] border border-solid border-[rgb(117,117,117,1)] rounded-[15px] font-sans m-[8px] text-black "
            name="name"
            placeholder="Name"
            required
          />
          <input
            type="text"
            className="w-[45%] p-[10px] border border-solid border-[rgb(117,117,117,1)] rounded-[15px] font-sans m-[8px] text-black "
            name="username"
            placeholder="Username"
            required
          />
          <input
            type="email"
            className="w-[45%] p-[10px] border border-solid border-[rgb(117,117,117,1)] rounded-[15px] font-sans m-[8px] text-black "
            name="email"
            placeholder="Email ID"
            required
          />
          <input
            type="password"
            className="w-[45%] p-[10px] border border-solid border-[rgb(117,117,117,1)] rounded-[15px] font-sans m-[8px] text-black "
            name="password"
            placeholder="Password"
            required
            minLength={8}
          />
          <button
            type="submit"
            className="border border-[rgb(0,0,0,0.482)] border-solid rounded-[15px] p-[10px] bg-[rgb(255,0,0,0.155)] font-sans font-[500] cursor-pointer w-[45%] my-[3%]  "
          >
            Sign Up
          </button>

          <div className="font-sans my-[1%] text-[10px] text-[rgb(117,117,117,1)] text-left ">
            By signing up, you're agree to <br /> our{" "}
            <Link to="#" className="cursor-pointer no-underline text-black">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link to="#" className="cursor-pointer no-underline text-black">
              Privacy Policy
            </Link>
          </div>

          <div className="flex justify-center w-[100%] my-[1%] ">OR</div>

          <button
            type="reset"
            className="google_logo font-sans text-sm my-[1%] font-[400] w-[55%] sm:w-[50%] border border-solid border-[rgb(117,117,117,1)] rounded-[15px] p-[10px] pl-[15px] bg-white cursor-pointer "
          >
            Sign Up with Google
          </button>

          <div className="font-sans my-[1%] text-[rgb(117,117,117,1)] text-[10px] ">
            Already a member?{" "}
            <Link
              to="/sign-in"
              className="cursor-pointer no-underline text-black"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
