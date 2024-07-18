import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../stylesheets/utils.css";

function AskMail() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b9scbys",
        "template_etzlgir",
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    document.getElementById("myForm").reset();
  };

  return (
    <>
      <div className="bg-white max-h-[20vh]  sm:h-[25vh] flex flex-col items-center justify-center ">
        <div className="font_verdana text-[1rem] font-[600] mb-[10px] p-[10px] tracking-[1px]  sm:tracking-[2px]  ">
          Subscribe to our Newsletter
        </div>
        <form
          id="myForm"
          ref={form}
          onSubmit={sendEmail}
          className="py-[3px] px-[15px] flex mb-[1rem] "
        >
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            autoComplete="off"
            required
            className="bg-white rounded-l-[15px] border border-[rgba(255,0,0,0.155)] border-solid focus:ring-0 focus:border-[rgba(255,0,0,0.155)] "
          />
          <button
            type="submit"
            className="font_open_sans py-[2px] px-[10px] border border-solid border-[rgba(0,0,0,0.482)] rounded-r-[15px] cursor-pointer text-[10pt] font-[500] bg-[rgba(255,0,0,0.155)] no-underline "
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
