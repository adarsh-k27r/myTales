import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import "../stylesheets/utils.css";

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );

  const date_ = new Date(post.createdAt);
  const formatted_date = moment(date_).format("MMM D, YYYY");

  const WordCount = (str) => {
    const len = str?.split(" ").length; // optional chaining
    const time = Math.floor(len / 200);
    if (time == 0) {
      return "few sec";
    }
    return time + " min";
  };

  return (
    <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
      <h1 className="font_merri text-[32px] font-[600] sm:font-bold mt-10 p-3 text-center max-w-2xl mx-auto lg:text-4xl mb-[4%]  ">
        {post && post.title}
      </h1>
      <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl mb-[1%] text-xs">
        <span className="font_helvetica text-[rgba(117,117,117,1)] text-sm font-[400] ">
          Authored by- <strong className="text-teal-400">{post.author}</strong>{" "}
        </span>
        <span className="font_helvetica text-[rgba(117,117,117,1)] text-sm font-[400] ">
          {post && formatted_date}
        </span>
        <span className="font_helvetica text-[rgba(117,117,117,1)] text-sm font-[400] ">
          {post && WordCount(post.content)} read
        </span>
      </div>
      <div
        className="p-3 max-w-2xl mx-auto w-full font_open_sans break-words mb-[5%] font-[600] text-[16px] text-left tracking-[0.4pt] "
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div>
    </main>
  );
}
