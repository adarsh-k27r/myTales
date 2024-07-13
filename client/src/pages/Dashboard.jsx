import React, { useEffect, useState } from "react";
import "../stylesheets/utils.css";
import PrivateCard from "../components/PrivateCard";
import { useSelector } from "react-redux";

function Dashboard() {
  const { currentUser } = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setUserPosts(data.posts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUserPosts();
  }, []);

  // Delete Post function.

  const deletePost = async (postIdToDelete) => {
    try {
      const res = await fetch(
        `/api/post/deletepost/${postIdToDelete}/${currentUser._id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUserPosts((prev) => {
          return prev.filter((post) => post._id !== postIdToDelete);
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row justify-center sm:justify-start items-center sm:items-start w-[100%]  ">
        <div className="w-[100%] sm:w-[80%]  ">
          <h3 className="font_open_sans text-[1rem] font-[900] text-black tracking-[2px] my-[2%] mx-[0] text-center">
            Your Stories
          </h3>

          <section className="flex flex-wrap flex-col-reverse sm:flex-row items-center sm:items-start ">
            {userPosts.length > 0 ? (
              <>
                {userPosts.map((post) => {
                  return (
                    <PrivateCard
                      key={post._id}
                      post={post}
                      deletePost={deletePost}
                    />
                  );
                })}
              </>
            ) : (
              <p>You haven't posted anything yet! </p>
            )}
          </section>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
