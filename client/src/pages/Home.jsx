import React from "react";
import LandingPage from "../components/LandingPage";
import AskMail from "../components/AskMail";
import PostFeedHome from "../components/PostFeedHome";
import Pitch from "../components/Pitch";
import Footer from "../components/Footer";
import "../stylesheets/Home.css";

export default function Home() {
  return (
    <>
      <LandingPage />
      <AskMail />
      <PostFeedHome />
      <div className="parallax"></div>
      <Pitch />
      <Footer />
    </>
  );
};
