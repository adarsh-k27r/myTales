import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PublicCard from "../components/PublicCard";
import "../stylesheets/utils.css";

const PublicCardHome = () => {
  const [masterPosts, setMasterPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMasterPosts = async () => {
      try {
        const res = await fetch(
          `/api/post/getposts?userId=66784e86fbcd0d7c0ca1524a&limit=3`
        );
        const data = await res.json();
        if (res.ok) {
          setMasterPosts(data.posts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMasterPosts();
  }, []);

  const handler = () => {
    navigate("/stories");
  };

  return (
    <>
      <section className=" h-[fit-content] sm:h-[110vh] bg-white my-[0] mx-[10%] relative ">
        <div className=" flex justify-center items-center p-[2%] font-[800] text-[25px] font_playfair ">
          Top stories
        </div>

        {masterPosts.length > 0 ? (
          <>
            {masterPosts.map((post) => {
              return <PublicCard key={post._id} post={post} />;
            })}
          </>
        ) : (
          <p className="!text-center">
            No latest update, Life is boring nowadays!
          </p>
        )}

        <div className=" z-[1] static sm:absolute h-[50px] sm:h-[120px] mb-[5%] sm:mb-[2.9%] bottom-0 left-0 w-[100%] flex items-end justify-center py-[0] px-[24px] fade ">
          <button
            onClick={handler}
            className=" border border-solid border-[rgba(0,0,0,0.482)] rounded-[15px] py-[5px] px-[10px] font_open_sans font-[500] cursor-pointer text-[10pt] no-underline bg-[rgba(255,0,0,0.155)] "
          >
            Read more
          </button>
        </div>
      </section>
    </>
  );
};

export default PublicCardHome;
