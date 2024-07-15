import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Publish from "./pages/Publish";
import Stories from "./pages/Stories";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import {
  PrivateRouteProfile,
  PrivateRoutePublish,
} from "./controllers/privateRoute";
import "./index.css";
import UpdatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route
            exact
            path="/dashboard"
            element={
              <PrivateRouteProfile>
                <Dashboard />
              </PrivateRouteProfile>
            }
          />
          <Route
            exact
            path="/publish"
            element={
              <PrivateRoutePublish>
                <Publish />
              </PrivateRoutePublish>
            }
          />
          <Route
            exact
            path="/update-post/:postId"
            element={
              <PrivateRoutePublish>
                <UpdatePost />
              </PrivateRoutePublish>
            }
          />
          <Route exact path="/stories" element={<Stories />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/post/:postSlug" element={<PostPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
