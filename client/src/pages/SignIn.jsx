import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheets/main.css";
import { Alert, Spinner } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

function SignIn() {
  const [formData, setFormData] = useState({});
  const {
    currentUser,
    loading,
    error: errorMessage,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill out all the fields."));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        return dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/dashboard");
      }
    } catch (error) {
      return dispatch(signInFailure(error.message));
    }
  };

  const close = () => {
    if (!currentUser) {
      navigate("/");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="block fixed z-[5] text-center left-0 top-0 w-[100%] h-[100%] overflow-hidden bg-[rgb(255,255,255)]">
        <span
          className="absolute right-[5%] sm:right-[31%] top-[18px] text-[30px] text-gray-500 hover:text-black hover:cursor-pointer "
          title="Close"
          onClick={close}
        >
          &times;
        </span>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl animate flex justify-center items-center flex-col bg-white w-[100%] sm:w-[40%] mx-[auto] my-[1%]"
        >
          <span>
            <h3 className="font-sans text-center text-xl font-[600] text-[rgb(9,0,66,0.83)] my-[15px] ">
              Welcome back!
            </h3>
            <h3 className="font-sans text-center text-xl font-[600] text-[rgb(9,0,66,0.83)] my-[15px] ">
              Sign In
            </h3>
          </span>

          <input
            type="email"
            className="w-[50%] p-[10px] border border-solid border-[rgb(117,117,117,1)] rounded-[15px] font-sans m-[10px] text-black "
            id="email"
            placeholder="E-mail"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="w-[50%] p-[10px] border border-solid border-[rgb(117,117,117,1)] rounded-[15px] font-sans m-[10px] text-black "
            id="password"
            placeholder="**********"
            onChange={handleChange}
            required
            minLength={8}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-[50%] border border-[rgb(0,0,0,0.482)] border-solid rounded-[15px] p-[10px] bg-[rgb(255,0,0,0.155)] font-sans font-[500] cursor-pointer my-[4%]  "
          >
            {loading ? (
              <>
                <Spinner size="sm" />
                <span className="pl-3">Loading ...</span>
              </>
            ) : (
              "Sign In"
            )}
          </button>

          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}

          <div className="font-sans my-[2%] text-[10px] text-[rgb(117,117,117,1)] text-left ">
            By signing in, you're agree to <br /> our{" "}
            <Link to="#" className="cursor-pointer no-underline text-black">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link to="#" className="cursor-pointer no-underline text-black">
              Privacy Policy
            </Link>
          </div>

          <div className="flex justify-center w-[100%] my-[4%] ">OR</div>

          <button
            type="button"
            className="google_logo font-sans text-sm my-[2%] font-[400] w-[55%] sm:w-[50%] border border-solid border-[rgb(117,117,117,1)] rounded-[15px] p-[10px] pl-[15px] bg-white cursor-pointer "
          >
            Sign-In with Google
          </button>

          <div className="font-sans my-[3%] text-[rgb(117,117,117,1)] text-[10px] ">
            Not a member?{" "}
            <Link
              to="/sign-up"
              className="cursor-pointer no-underline text-black"
            >
              Register now
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;
