import React, { useEffect, useState } from "react";
import { Alert, Button, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const UpdatePost = () => {
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const { currentUser } = useSelector((state) => state.user);

  const { postId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    try {
      const fetchPost = async () => {
        const res = await fetch(`/api/post/getposts?postId=${postId}`);
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);
          setPublishError(data.message);
          return;
        }
        if (res.ok) {
          setPublishError(null);
          setFormData(data.posts[0]);
        }
      };

      fetchPost();
    } catch (error) {
      console.log(error.message);
    }
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `/api/post/updatepost/${formData._id}/${currentUser._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();

      if (!res.ok) {
        setPublishError(data.message);
        return;
      }
      if (res.ok) {
        setPublishError(null);
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };

  return (
    <>
      <div className="p-3 max-w-3xl mx-auto">
        <h1 className="text-center text-3xl my-3 font-semibold">
          Update your story
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
            }}
            value={formData.title}
          />

          <ReactQuill
            theme="snow"
            placeholder="It's confession time:> Just do it!"
            className="h-72 mb-12"
            required
            onChange={(value) => {
              setFormData({ ...formData, content: value });
            }}
            value={formData.content}
          />

          <Button type="submit" gradientDuoTone="redToYellow">
            Update Post
          </Button>
          {publishError && (
            <Alert className="mt-5" color="failure">
              {publishError}
            </Alert>
          )}
        </form>
      </div>
    </>
  );
};

export default UpdatePost;
