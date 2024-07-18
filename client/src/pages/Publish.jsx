import React, { useState } from "react";
import { Alert, Button, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const [formData, setFormData] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const [publishError, setPublishError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/post/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
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
          Share your story
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
            autoComplete="off"
            minLength={5}
          />

          <ReactQuill
            theme="snow"
            placeholder="It's confession time:> Just do it!"
            className="h-72 mb-12"
            onChange={(value) => {
              setFormData({ ...formData, content: value });
              setIsDisabled(value.length < 47);
            }}
          />

          <Button
            type="submit"
            gradientDuoTone="redToYellow"
            disabled={isDisabled}
          >
            Publish
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

export default Publish;
