import React, { useEffect, useState } from "react";
import "../stylesheets/utils.css";
import PublicCard from "./PublicCard";

function Panel() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await fetch("/api/post/getposts");
        const data = await res.json();
        if (res.ok) {
          setPosts(data.posts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAllPosts();
  }, []);

  return (
    <>
      <div className="w-[100%] sm:w-[80%] bg-white py-[0] px-[5%] ">
        <h3 className="font_open_sans text-[15px] font-[900] text-black tracking-[2px] my-[2%] mx-[0] text-center ">
          Top picks
        </h3>
        {posts.length > 0 ? (
          <>
            {posts.map((post) => {
              return <PublicCard key={post._id} post={post} />;
            })}
          </>
        ) : (
          <p>No posts to show yet!</p>
        )}
      </div>
    </>
  );
}

export default Panel;
