import React from "react";
import "../stylesheets/utils.css";
import Footer from "../components/Footer";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="bg_about h-[89vh] flex justify-start items-center flex-col max-w-[100%] ">
        <p className="text-center w-full sm:w-[60%] text-[20px] sm:text-[2rem] font-[700] font_verdana sm:relative sm:left-[12rem] p-8 text-zinc-600 ">
          We help you connect with the world <br /> that listens!
        </p>
        <p className="text-center w-full sm:w-[60%] mt-5 text-2xl sm:text-3xl font-[900] font_poppins sm:relative sm:left-[12rem]    ">
          Featuring TaleVerse
        </p>
        <p className="sm:text-center w-[80%] sm:w-[60%] mt-5 sm:text-[15px] font-[500] font_open_sans sm:relative sm:left-[12rem] ">
          A world of stories and storytellers, crafted with creativity and
          excellence, where you can evolve as a storyteller.
        </p>
        <div className=" w-[80%] sm:w-[60%] mt-5 sm:relative sm:left-[12rem] bg-white mb-[5vh] sm:mb-0 flex flex-col  ">
          <h1 className="text-center font-sans text-xl sm:text-2xl  font-[700] text-zinc-600 ">
            myTales: A Story Sharing App
          </h1>
          <p className=" text-left mt-2 font_open_sans font-[400] text-gray-800   ">
            <strong>myTales</strong> is a vibrant platform designed for
            storytellers and readers alike. Whether you have a knack for
            crafting imaginative tales or enjoy getting lost in captivating
            narratives, myTales offers a seamless experience for all.{" "}
            <strong>Users can write, share, and discover stories</strong> across
            various genres, creating a community where creativity thrives. With
            user-friendly features and an intuitive interface, myTales makes it
            easy to share your stories with the world and find inspiration from
            others.
          </p>
          <Button
            type="button"
            size={"lg"}
            gradientDuoTone={"redToYellow"}
            className="text-center my-5 sm:mb-0  "
            onClick={() => {
              navigate("/");
            }}
          >
            Enter myTales
          </Button>
        </div>
      </div>

      <div className=" h-fit sm:h-[80vh] flex justify-between flex-col-reverse sm:flex-row ">
        <div className="w-full sm:w-[60%] ">
          <div className=" w-full bg-white p-10 flex flex-col  ">
            <h1 className="text-center font-sans text-xl sm:text-2xl  font-[700] text-zinc-600 ">
              Teller's: An Advanced Blogging Platform
            </h1>
            <p className=" text-left mt-2 font_open_sans font-[400] text-gray-800   ">
              <strong>Teller's</strong> takes storytelling to the next level
              with its sophisticated features and enhanced user experience.{" "}
              <strong>Building on the foundation of myTales</strong> , Teller's
              offers advanced blogging tools that cater to both casual writers
              and professional bloggers. With a focus on{" "}
              <strong>
                rich media integration, SEO optimization, and detailed analytics
              </strong>
              , Teller's empowers writers to reach a broader audience and refine
              their craft. The platform supports multimedia content, including
              images and interactive elements, making blogs more engaging and
              visually appealing. Additionally, Teller's provides a robust
              community and collaboration features, allowing bloggers to
              connect, share insights, and grow their readership. Whether you're
              sharing personal stories, professional insights, or creative
              works, Teller's is designed to elevate your blogging experience.
            </p>
            <Button
              type="button"
              size={"lg"}
              gradientDuoTone={"tealToLime"}
              className="mt-5 "
              onClick={() => {
                window.open("https://teller-4s6h.onrender.com/", "_blank");
              }}
            >
              Enter Teller's
            </Button>
          </div>
        </div>
        <div className="w-full sm:w-[40%] bg_teller "></div>
      </div>

      <Footer />
    </section>
  );
};

export default About;
